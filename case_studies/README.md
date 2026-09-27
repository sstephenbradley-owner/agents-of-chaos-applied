# Case studies

Documented runs of the AoCA protocol, taken from the session transcripts and write-ups kept at the time. Nothing here is estimated. Where a source does not record a figure, the file says "not recorded". Where two sources disagree, the file says so and names which one the primary record supports.

Documents are described by type only. Names of people, employers, products and the author's other projects have been removed. Public paper citations are kept.

## Index

| ID | Date | One line | Evidence status |
|---|---|---|---|
| [E-01](early_runs.md#e-01-off-task-research-output-caught-by-the-second-model-march-4-2026) | 2026-03-04 | A research tool returned an unrelated academic-style paper for a fact-check list; the second model flagged it without being told | Documented run, no scores |
| [E-02](early_runs.md#e-02-single-validator-review-of-two-research-reports-with-rebuttals-march-11-2026) | 2026-03-11 | One validator reviewed two long research reports; the author's rebuttals overturned all four of its main objections | Documented run, no scores |
| [CS-001](CS-001.md) | 2026-03-12 | Two validator chats with unequal context reviewed a long-form nonfiction chapter over three rounds; average score 3.5 to 6.5 to 8.0 | Documented run with data |
| [CS-002](CS-002_prior_art_self_audit.md) | 2026-03-12 to 13 | The protocol checked its own prior-art search; errors on both sides, including a real paper the verifier called fabricated and a real section title it denied; led to v2.0 | Documented run with data |
| [CS-003](CS-003.md) | none | Not a distinct run. The label describes the CS-001 session a second time | No separate record |
| [REG-001](REG-001_single_agent_regulatory.md) | 2026-03-27 to 04-04 | Single-model variant built for a regulatory affairs professional; one logged terminology error, fixed in the research persona v2.0 | Partial record |
| [fabrication_log.csv](fabrication_log.csv) | 2026-03-04 to 04-03 | 19 documented fabrication, misattribution, overstatement and wrong-rejection events, by role and model family | Log |

Other IDs used in the log:

- **PR-001** (March 13, 2026): a simulated peer review of the method paper, run through the drafter's research tool. It wrongly called five real references fabricated. Summarized at the end of the CS-002 file.
- **RUN-2026-04-03**: the cross-model pass that led to the v2.1 changes (common-mode failure, human overseer protection, prompt decoupling, confidence language). Its overstatement findings are in the log. It does not have its own case file yet. Source: `2026-04-01_investigating-online-buzz.md`.

## Corrections to earlier write-ups

These points come from checking the published summaries against the transcripts:

1. **CS-003 is CS-001 counted twice.** Claims that the same error categories recurred across two unrelated documents are not supported.
2. **CS-001 has real per-round scores.** Context-aware chat 4, 7, 7.5; fresh-context chat 3, 6, 8.5. The paper's figures used interpolated values instead, and the inventory gives Round 2 as "approximately 6.0" where the transcript gives 6.5.
3. **Not all five CS-001 categories were in the original draft.** The legislative timeline error was introduced in a Round 2 counter-argument and caught by one chat only.
4. **After correction, CS-002 contains no confirmed invented citation.** The one item first logged as a fabricated section title turned out to be real; the drafter's check was wrong. The adversary's confirmed errors are one institutional misattribution, one source-type misrepresentation and one overstatement. Several documents still say "1 fabricated section title".
5. **The drafter made the two wrong-rejection errors in CS-002, and the adversary then retracted a correct citation under the drafter's false correction.** Errors ran both ways, as the paper says, but the chain is longer than the paper describes.
6. **Case count.** The paper says "four case studies" (three complete, one ongoing). Under the paper's own numbering, the record supports two distinct completed runs (CS-001, CS-002). The ongoing chapter-by-chapter work has no recorded data. The two early runs and REG-001 are documented separately here.

## Reading the log

`what_was_wrong` values:

- `fabricated`: content presented as a real source or result with no basis found.
- `misattributed`: something attributed to a source that the source does not support (wrong institution, wrong source type, wrong figure, or wording with a different meaning).
- `overstated`: a real source described as proving more than it does.
- `wrongly_rejected_real_source`: a real source called fabricated, absent or misattributed.

`role` is the position in the run: Drafter (produced the content), Adversary (reviewed it adversarially), Verifier (checked the adversary's citations). In CS-002 the same model was Drafter and Verifier.

## Primary sources

The chat transcripts in the archive's `unaudited/` folder, plus sessions without a split file (March 4, March 10 to 12, March 12 to 13), rebuilt read-only from the raw export in `00_CHAT_ARCHIVE/raw_export/`. Write-ups used: the March 11 case study and its supplement, the prior-art case-study report (v2), the case-study inventory, the case catalog, the hallucination case study, the method paper draft (v5 file, header "Draft v2.0"), the simulated peer review, and the repository history section dated 2026-09-26.
