#!/usr/bin/env python3
"""Structural documentation gate only; never substitutes for evidence review."""
import json
import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parents[1]
ledger = json.loads((root / "milestones/state.json").read_text(encoding="utf-8"))
expected = {f"E{i}" for i in range(7)} | {f"R{i}" for i in range(1, 7)}
allowed = {"OPEN", "BLOCKED", "QUALIFIED_FOR_EXECUTION", "EVIDENCE_SUBMITTED", "ACCEPTED_IN_SCOPE", "SUPERSEDED"}
errors = []
if ledger.get("schema_version") != "ananke-public-milestone-state-v1" or ledger.get("visibility") != "PUBLIC_SUMMARY_ONLY":
    errors.append("Invalid schema or public visibility boundary")
rows = ledger.get("milestones", [])
ids = [row.get("id") for row in rows if isinstance(row, dict)]
if len(ids) != len(expected) or set(ids) != expected:
    errors.append("Required E0-E6 / R1-R6 milestone IDs missing or duplicated")
for row in rows:
    if not isinstance(row, dict):
        errors.append("Non-object milestone"); continue
    ident, status, rel = row.get("id", "?"), row.get("status"), row.get("report")
    if status not in allowed:
        errors.append(f"{ident}: illegal status {status}")
    if status != "ACCEPTED_IN_SCOPE":
        continue
    if not isinstance(rel, str) or not re.fullmatch(r"milestones/reports/\d{4}-\d{2}-\d{2}-[ER]\d+-[a-z0-9-]+\.md", rel):
        errors.append(f"{ident}: accepted without dated evidence report"); continue
    path = root / rel
    if not path.is_file():
        errors.append(f"{ident}: evidence report absent"); continue
    body = path.read_text(encoding="utf-8")
    tests = {
        "milestone ID": rf"(?m)^MILESTONE_ID={re.escape(ident)}\s*$",
        "acceptance": r"(?m)^ACCEPTED_IN_SCOPE=YES\s*$",
        "primary run": r"(?m)^PRIMARY_RUN_ID=(?!NOT_|NONE|TBD|<)[A-Za-z0-9_.-]{8,}\s*$",
        "evidence digest": r"(?m)^PRIMARY_EVIDENCE_SHA256=[A-Fa-f0-9]{64}\s*$",
        "owner review": r"(?m)^OWNER_REVIEW=(?!NOT_|NONE|TBD|<).{5,}$",
        "verdict": r"(?m)^ORIGINAL_VERDICT=(?:PASS|FAIL|INCONCLUSIVE)\s*$",
    }
    for label, pattern in tests.items():
        if not re.search(pattern, body):
            errors.append(f"{ident}: accepted report missing {label}")
for required in ("MILESTONES.md", "milestones/PROTOCOL.md", "milestones/REPORT_TEMPLATE.md",
                 "milestones/HOSTINGER_RELEASE_GATE.md", "STATUS.md"):
    if not (root / required).is_file():
        errors.append(f"Required document missing: {required}")
if errors:
    for err in errors:
        print("FAIL:", err)
    sys.exit(1)
print(f"PUBLIC_MILESTONE_STRUCTURE_PASS: {len(rows)} milestones; scientific truth still requires independent reviewer.")
