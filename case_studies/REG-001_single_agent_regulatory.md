# REG-001: Single-agent variant in a regulatory setting

**Evidence status:** partial record. The personas, trackers and one logged iteration are documented. No results from reviewing real submission documents are recorded.

## Summary

| Field | Record |
|---|---|
| Dates | Personas built March 27, 2026. Research test and first iteration March 31, 2026. Updates April 1, 2026. Risk review April 3 to 4, 2026 |
| Tester | A pharmaceutical regulatory affairs professional |
| Setting | The target environment allowed one approved enterprise AI assistant, with access to internal documents. So the variant had to run on one model with no cross-model check |
| Tools built | (1) A document red-team persona that reviews a draft regulatory submission as an agency reviewer would, with an intake phase, a severity scale and a confidence disclosure. (2) A research persona for ad hoc regulatory questions and draft correspondence. (3) Metrics and specificity trackers with a false-negative log and a three-way error attribution: prompt gap, model limitation, or insufficient context |
| Model family | The personas target that enterprise assistant. The one logged test answer was produced by Claude (Anthropic) in the build session, not by the target assistant |
| Sessions | One build session spanning March 27 to April 1 |
| Rounds | Not applicable. Single pass with human review |
| Scores | Not recorded. The metrics prompt was built, but no metric values were recorded |

## What was tested

- **March 27.** The author walked the tester through the document red-team persona. The recorded reaction: the tester already knew most of what it covered, but it would be "beyond valuable" for a small company without regulatory staff. The tester also said time-saved metrics would not be objective, so tracking moved to false positives and false negatives.
- **March 31.** The tester brought a real regulatory classification question (whether an approved peptide product is regulated as a drug or a biologic). The drafter built the research persona and ran the research itself, so the tester could check the answer. The tester judged the answer "good, except for one major catch": it called the product a "synthetic peptide". The approved label says the product is made in E. coli by recombinant DNA technology. In regulatory usage "synthetic peptide" means chemical synthesis.

## Iteration log

| # | Logged session date | Error | Type | Attribution | Fix |
|---|---|---|---|---|---|
| 1 | 3/27/26 (the event happened March 31; see note) | Described a recombinant peptide as a "synthetic peptide" | Terminology | Prompt gap | Added a Terminology Precision section to the research persona prompt, v2.0 |

Diagnosis in the record: the output had the right source text but paraphrased it into a term with a different regulatory meaning. The drafter called this "a prompt gap, not a model limitation". That was the drafter's own diagnosis of its own output. The tester's view of the diagnosis is not recorded.

The v2.0 Terminology Precision section tells the model to use the approved label's manufacturing wording exactly, and lists term pairs that must not be swapped: synthetic vs. recombinant, biologic vs. drug (decided by application type and statute, not manufacturing method), biosimilar, small molecule.

Note on dates: the tracker row and the changelog both date v2.0 "3/27/26". The transcript shows the error was reported and fixed on March 31, 2026 (UTC 21:23 to 21:25). The logged date is wrong.

## Error categories found

One: terminology (a correct answer in imprecise words). The tracker's category list is Factual, Terminology, Omission, Overclaim and Citation.

## Divergences

None. Single model, single tester.

## Fabrication attempts

None recorded. The terminology error is logged in `fabrication_log.csv` as a misstatement of what the source says.

## What changed in the protocol

- Research persona v2.0 (March 31): Terminology Precision constraints.
- Research persona v3.0 and a document red-team persona update (April 1): internal company documents treated as a source tier, since the target enterprise AI tool can read them. A recommendation about a document-management connector was added to both companion documents.
- Risk review (April 3 to 4), after the cross-model pass that led to AoCA v2.1: the drafter judged that the single-agent variant leaves sycophancy unchecked and is exposed to automation bias ("cognitive surrender"), especially for less experienced users. Proposed guards: required qualified human review of the highest-severity findings before any submission; periodic known-answer calibration runs; a second-model check for the highest-stakes use (first-time submissions by small companies).

## Limitations

- One logged test query and one logged error. There is no record of the document red-team persona being run on a real submission, and no false-positive or false-negative counts.
- The test answer came from Claude in the build chat, not from the target assistant running the persona, so it does not test the persona on its target platform.
- The repository history section says the tester "supplied sample queries with already-validated answers". The record shows one real work question whose answer the tester could check, plus a walk-through of the document persona. "Queries" (plural) is not supported.
- The risk review is the drafter's self-assessment. It was not checked by a second model or by the tester.

## Sources

- `2026-03-27_fda-reviewer-persona-for-regulatory-document-red-teaming.md` (build, walk-through, research test, diagnosis, v2.0 prompt, companion document iteration log and changelog)
- `2026-04-01_investigating-online-buzz.md` (April 3 to 4 risk review of the single-model variant)
- `AoCA_README_History_Section_2026-09-26.docx` (dates of the single-agent variant)
