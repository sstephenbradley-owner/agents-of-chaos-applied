# CS-002: The protocol applied to its own prior-art search

**Evidence status:** documented run with data. Threat ratings and verdicts for Rounds 1 to 3 are in the case-study report and the transcripts. The Round 1 and Round 2 Gemini reports themselves were PDFs whose text is not preserved in the chat export; one Round 2 reply survives as pasted text.

## Summary

| Field | Record |
|---|---|
| Dates | Adversarial search requested March 12, 2026 (prompt written 23:39 UTC). Round 1 output brought back and checked March 13 (12:01 UTC). Rounds 2 and 3, the correction, and the v2.0 lock all on March 13 |
| Document type | A prior-art and competitive search report written by the drafter for a provisional patent application on the method itself (12 patent filings, 30+ papers, 25+ products reviewed) |
| Drafter / verifier | Claude (Anthropic). Wrote the original search, then verified the adversary's citations with a research tool |
| Adversary | Gemini (Google) |
| Sessions | Round 1: one Gemini report. Round 2: two chats (the Round 1 chat, "context-aware", plus a new fresh-context chat). Round 3: three chats (A: full document set; B: patent and paper; C: patent only, blind) |
| Context asymmetry | As above. The adversary saw the drafter's report as an appendix placed after the adversarial instructions, so it read the "find what they missed" framing first |
| Human role | Relayed all material between models, raised the "cheating" concern that became the Accuracy Mandate, and settled the Section 5 dispute by reading the PDF |
| Rounds | 3 |

## Verdict and rating trajectory

The adversary gave verdicts, not a single 1 to 10 reliability score. The method paper later mapped the Round 1 and Round 2 verdicts to "approximately 2.0" and "approximately 7.5". Those numbers were assigned by the drafter when writing the paper, not by any validator.

| Metric | Round 1 | Round 2 | Round 3 |
|---|---|---|---|
| Patent viability | "Conditional (bordering on non-viable)" | Context-aware: "Conditional (highly viable with claim refinement)" per the drafter's summary. The pasted reply reads "Conditional (viable, but requires highly strategic claim drafting)" | All three chats: viable only if claims center on the v2.0 mechanisms |
| Paper scooped? | "Comprehensively and definitively scooped" | "Partially scooped (not comprehensively)" in the pasted reply; "not scooped" in the drafter's summary | Chat A: "Partially", on the term "Sycophancy Tax" only |

Per-reference threat ratings (Round 1 from the adversary; Round 2 ranges combine both chats as tabulated by the drafter):

| Reference | Round 1 | Round 2 | Verification result |
|---|---|---|---|
| SR-DCR (Zhou et al., arXiv:2506.06020) | 10/10 | 7 to 7.5/10 | Real. Scope narrower than claimed |
| The Plausibility Trap (Carrera and Maldonado-Ruiz, arXiv:2601.15130) | 10/10 | 2 to 3/10 | Real. Section 5 is titled "5 CASE STUDY B: THE SYCOPHANCY TAX". The drafter's verification wrongly denied this (see below) |
| BASIL (Atwell et al., arXiv:2508.16846) | 9/10 | 3 to 3.5/10 | Real. Uses "sycophancy tax" once, informally |
| GATES (Stein et al., arXiv:2602.20574) | 8.5/10 | 4 to 5/10 | Real. Training-time method |
| Multi-evaluator framework (Wang et al., arXiv:2602.05110) | 8/10 | 4.5 to 6/10 | Real. From Visa Research, not Microsoft Research as the adversary said |
| "Hallucination Energy" (programmer.ie) | 9.5/10 | 1.5 to 4/10 | Exists as a blog post, presented as a peer-reviewed publication |
| Shimao et al. (arXiv:2603.09127) | Not recorded | 5/10 | Real. Posted March 10, 2026. The drafter's verification called it fabricated |

New references surfaced by the adversary in Round 2 and verified by the drafter: RAVEN (arXiv:2504.12344, 8.5/10), HiMATE (arXiv:2505.16281, 8/10). The case-study report also lists JUSSA (6.5/10), EvalQReason (5/10) and Squid Game (6/10). Round 3 added Arcuschin et al. (arXiv:2602.10117).

The method paper (Section 5.4) says the Plausibility Trap rating was "revised from 2 to 3/10 to 5 to 6/10" after the correction. That revision appears in the drafter's edit notes for the paper. No validator rating of 5 to 6/10 for this paper was found in the record.

## What went wrong, on both sides

**Adversary (Gemini), Round 1:**

1. Attributed the Visa Research multi-evaluator paper to Microsoft Research. Misattribution.
2. Presented a personal blog as a peer-reviewed publication. Source-type misrepresentation.
3. Said BASIL "definitively scooped" the sycophancy-tax concept on the strength of one informal use. Overstatement.
4. Built its "scooped" and "bordering on non-viable" verdicts on these points.

**Drafter (Claude), acting as verifier:**

5. Said Shimao et al. was "definitively fabricated". The paper was three days old and not yet in the search indexes the research tool used. The context-aware adversary chat pushed back in Round 2; the drafter's second research pass found it on arXiv's own listing page.
6. Said the Plausibility Trap paper contains no Section 5 titled "THE SYCOPHANCY TAX" and that the phrase "does not appear anywhere in the paper". Both were false. Round 3 Chats A and B disputed this; the author checked the PDF (v1, page 6) and confirmed the adversary had been right.

**Adversary (Gemini), Round 2 (context-aware chat):**

7. Given the drafter's false correction, it withdrew its correct Section 5 citation, calling its own Round 1 claim "hallucinated/overstated evidence". At the same time it correctly defended Shimao et al. Whether the fresh-context chat also withdrew the citation is not preserved; the case-study report says "both chats acknowledged all five inaccuracies".

### What remains of "fabrication" after the correction

Once item 6 was reversed, no citation in the Round 1 report was shown to be invented. The adversary's confirmed errors are one institutional misattribution, one source-type misrepresentation, and one overstatement. The "incentivized fabrication" finding (the claim that adversarial pressure pushes validators to manufacture damaging evidence) rests on those three items. The corrected case-study report (v2) still says "1 fabricated section title" in its scoring table and verdict paragraph, and the case-study inventory still says the section "does not" exist. Both conflict with the correction. Section 6.4 of the method paper still says the adversary "produced fabricated section titles", which conflicts with the paper's own Section 4.2.

## Divergences

- **Section 5 title (FACTUAL).** Drafter said no; adversary said yes. Resolved by the author reading the PDF: adversary correct.
- **Shimao et al. existence (FACTUAL).** Drafter said fabricated; context-aware adversary said real. Resolved by a second research pass: adversary correct.
- **Scoop verdict after correction.** The drafter summarized Round 2 as "not scooped" for one chat and "partially scooped" for the other. The pasted reply labeled "context-aware" says "partially scooped", while the drafter's summary gives that verdict to the new chat. The record does not settle which chat said which. No FACTUAL/EDITORIAL label was applied.
- **Round 3 convergence.** All three chats said the patent was viable only if claims centered on the v2.0 mechanisms, and that asymmetric context and cross-model bias detection should become dependent claims. They agreed that RAVEN was the strongest remaining threat (rated 8.5 to 9/10).

## What changed in the protocol (v1.0 to v2.0, locked March 13, 2026)

- **Accuracy Mandate.** Validators must give exact, checkable citations. The prompt states that a verified 6/10 threat is worth more than a fabricated 10/10 threat. Triggered by the author's remark, at 13:01 UTC on March 13, that inventing evidence "to attempt to win the red team" is "cheating instead of accidental hallucination".
- **Independent Verification Step.** The drafter screens the adversary's citations before the human spends time on them.
- **Brandolini Safeguard.** Recognizes that an adversary can produce false threats faster than a human can check them.
- **Three-chat setup** (two context-aware, one blind) as the standard configuration, first used in Round 3.
- **Correction pass.** After the Section 5 reversal (evening of March 13), the protocol, paper, patent draft and case-study report were edited to reclassify item 6 as a drafter verification error. A later handoff lists the corrected protocol file as "v2.1 CORRECTED". The repository history section uses "v2.1" for a different revision (April 3 to 5, 2026), so the same label covers two different changes.

## Limitations

- The central "incentivized fabrication" finding is an interpretation of three errors in one adversary report. After correction, no invented citation remains in the record. The paper, inventory and case-study report have not all caught up with this.
- Only one model family served as adversary. The drafter was also the verifier of the adversary's work, and it made two false-negative errors of its own.
- Both drafter errors came from a research tool that could not see a very recent paper or the exact PDF text. A human with the PDF settled what three model passes could not.
- The Round 1 and Round 2 Gemini outputs were PDFs; their full text is not in the export. Round 1 is known through the drafter's triage, the Round 2 prompt, and the case-study report.
- The case-study report heads Round 1 as "Both Chats". The transcript shows a single Round 1 report; the second chat was opened for Round 2.
- The numeric mapping of verdicts (2.0 and 7.5) is the drafter's, added later.

## Follow-up the same night: simulated peer review

At about 02:45 UTC on March 14 (the evening of March 13 in US Eastern time), the drafter ran a simulated peer review of the method paper through its research tool. The review claimed five cited references were fabricated (SR-DCR, GATES, RAVEN, Shimao et al., and the D3 framework, arXiv:2410.04663) and that "Sycophancy Tax" was misattributed to Carrera and Maldonado-Ruiz. A fresh-context Gemini chat confirmed all five references were real and that the Section 5 title exists. The review's other points (missing CONSENSAGENT citation, undefined scoring rubric, no baselines, no reproducibility details, undisclosed patent interest) were accepted as accurate. These rows are logged under `PR-001` in `fabrication_log.csv`.

## Sources

- `APERTUREX_CS_PriorArt_RedTeam_20260313_v2.docx`
- `ApertureRx_Fellowship_CaseStudy_Inventory.docx`, Section 3.2
- `AoCA_Journal_Paper_v5_ARCHITECTURE.docx`, Sections 4.2, 5.4, 6.4
- `Peer_Review_of_AoCA.md`
- `2026-03-13_full-audit-patent-refinement-with-artifacts.md` (Round 3, the PDF check, document corrections, the peer review)
- Chat export, conversation of 2026-03-12 to 13 (Round 1 prompt, verification, Round 2 prompt and replies, Shimao re-check, v2.0 lock), rebuilt from `00_CHAT_ARCHIVE/raw_export/`
- `2026-04-11_ai-agents-escaping-testing-environments.md` (handoff listing the v2.1 corrected protocol and superseded files)
