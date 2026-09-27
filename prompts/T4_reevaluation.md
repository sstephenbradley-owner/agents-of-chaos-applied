# T4: Re-evaluation

<!-- Source: AoCA Prompt Templates v0.1 (September 26, 2026), section "T4 - Re-evaluation". Prompt text is verbatim except that numeric ranges written with a dash now use "to". -->

**Who runs it:** the Adversary, in the same session as T2. **Needed in:** all configurations.

Sent back to the same Adversary session with the verification results and your responses. Repeat until the score gains less than 0.5 points round over round, usually two or three rounds. The last block is the v2.1 Human Overseer Protection, which stops the reviewer from pressuring you instead of correcting itself.

<!-- Cross-reference: v2.1 Human Overseer Protection (protocols/AoCA_v2.1_proposed_cross_model.md, 7.2) has four parts: structured output, cooling period, third-party tiebreaker, escalation log. This prompt carries the structured-output part. The cooling period, tiebreaker and escalation log are steps for the human and are not in the prompt. -->

Placeholders are in {CURLY_CAPS}. Everything else is sent verbatim.

```text
Here are the results of independent verification of your citations, and the author's responses to your findings.

VERIFICATION RESULTS:
{VERIFICATION_REPORT}

AUTHOR RESPONSES (each marked CONCEDE, DISPUTE or FLAG):
{RESPONSES}

For every finding that verification marked OVERSTATED, MISATTRIBUTED or FABRICATED: acknowledge it and withdraw or restate it with correct evidence. Do not defend it.

For every DISPUTE, state:
(a) RESOLVED / PARTLY RESOLVED / NOT RESOLVED, and why
(b) whether the response introduces any new problem
(c) the strength of the response, 1 to 10

Then give an updated reliability score (1 to 10) for the revised document.

Rules for this round:
- Use the same finding format as before. No new narrative.
- Do not appeal to urgency, authority or consequences. Argue only from evidence.
- The Accuracy Mandate still applies to any new citation.
```
