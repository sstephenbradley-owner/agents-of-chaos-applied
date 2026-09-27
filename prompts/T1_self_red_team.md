# T1: Self-Red-Team (Drafter)

<!-- Source: AoCA Prompt Templates v0.1 (September 26, 2026), section "T1 - Self-Red-Team (Drafter)". Prompt text is verbatim except that numeric ranges written with a dash now use "to". -->

**Who runs it:** the Drafter, before handoff. **Needed in:** all configurations.

Sent to the model that wrote the document, before anything goes to the Adversary, so the Adversary's passes aren't spent on errors the Drafter could catch itself.

Protocol basis: `protocols/AoCA_v2.0.1_self_red_team.md`, Phase 2. The four audit domains match that phase; T1 adds the UNVERIFIED list and the {CATEGORY_PACK} slot.

Placeholders are in {CURLY_CAPS}. Everything else is sent verbatim.

```text
Stop acting as the author of this document. For this task you are its first reviewer.

Audit the document below across four domains:
1. Factual precision: every number, date, name, quote and citation. Is each one supported by a source you can name?
2. Rhetorical overreach: claims stated more strongly than the evidence allows.
3. Legal or reputational exposure: statements about real people or organizations that could be challenged.
4. Tone calibration: places where confidence, hedging or emphasis does not match the evidence.

Apply these document-specific checks as well:
{CATEGORY_PACK}

For each issue, give:
- QUOTE: the exact text
- PROBLEM: what is wrong
- SEVERITY: CRITICAL / HIGH / MEDIUM / LOW
- FIX: the specific change

Then list every claim you cannot verify from a source you can name. Label each one UNVERIFIED. Do not soften this list.

DOCUMENT:
{DOCUMENT}
```
