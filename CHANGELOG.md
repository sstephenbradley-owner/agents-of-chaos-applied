# Changelog

Each entry names the failure that triggered the change. Dates are from the session transcripts. Full context is in the README under "Evolution" and in `case_studies/`.

## Release 2026-09-26 (repository v2.0.1)

- First public release: protocols v2.0, v2.0.1 and proposed v2.1; single-agent variant; prompt templates T1 to T5 with category packs; two-axis citation standard v2.2; case studies rebuilt from transcripts; fabrication log (19 entries) as a dataset; reference implementation (alpha).
- Case-record corrections made while preparing the release: CS-003 retired (it was CS-001 described twice); CS-001 per-round scores replace the interpolated figures in earlier write-ups; CS-002 no longer counts an "invented section title," which was a Drafter verification error; the case count is two scored cross-model runs, not four.

## Proposed v2.1 (April 3 to 5, 2026). No ratified version found

Trigger: a cross-model pass on a citation map found overclaimed language ("directly validates," "practically written for"), and a direct question to the reviewer asked whether the Drafter-written prompt had constrained it.

- Common-mode failure mitigation, tiered (human shared-prior check; non-model check per pass; future deterministic layer).
- Human Overseer Protection: structured re-evaluation format, written counter-argument and pause before overruling a CRITICAL, third-party tiebreaker, override log.
- Adversarial Prompt Decoupling: Drafter-only prompts deprecated; open-ended reviewer pass required.
- Confidence Language Standards: approved and prohibited wording by evidence level.
- Sent for a second adversarial pass April 5, 2026. No result or ratified version was found.

## Single-agent variant (March 27 to April 4, 2026)

Trigger: a regulated setting allowed only one enterprise AI assistant.

- Regulatory reviewer persona, research persona and error trackers.
- Terminology Precision rules after a recombinant peptide was described as "synthetic" (REG-001, March 31).
- Risk review after the April cross-model pass: two required human checks (verify the top findings; confirm clean categories were examined). Known-answer calibration runs and a second-model check for the highest stakes were recommended, not decided.

## v2.0.1 (March 23, 2026)

Trigger: reviewer passes were being spent on errors the Drafter could have caught itself.

- Self-Red-Team phase between Build and Adversarial Validation (factual precision, rhetorical overreach, legal exposure, tone).
- Six standing safety rules consolidated.

## v2.0 (locked March 13, 2026; corrected March 13 to 14)

Trigger: during the protocol's own prior-art search (CS-002), the reviewer built a "definitively scooped" verdict on a misattributed paper, a blog presented as peer-reviewed work and an overstated phrase.

- Accuracy Mandate in every adversarial prompt.
- Independent Verification step before the human acts.
- Brandolini Safeguard.
- Three-chat setup (two context-aware sessions, one blind) as standard.
- Fabrication log added to the documentation requirements.
- Correction: a human reading the PDF showed one logged "fabrication" was real and the error was the Drafter's. Recorded as erratum notes.

## v1.0 (February 27 to March 12, 2026)

Trigger: checking a viral misrepresentation of *Agents of Chaos* against the paper.

- Working rules: label verified versus unconfirmed, verify outside claims before building on them, raise concerns mid-task.
- Named Agents of Chaos Applied and first written up March 12.

## Citation standard v2.2 (February 24, 2026)

Trigger: a recency-first filter could rank a recent case report above an older systematic review.

- Two axes: quality governs, recency flags. T0 added after the first second-model review, T0_CANONICAL after the second. Pydantic validator example.

## Pre-1.0 (January 15 to late January 2026)

- Citation standard v1.0 (January 15).
- Cross-AI Handshake (January 17): two model families bridged by a human through shared folders.
- Fixed roles by late January: Drafter, different-family reviewer, human decision authority.
