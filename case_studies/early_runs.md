# Early runs outside the paper's numbering

Two runs came before CS-001 and were each written up as a "Case Study 001" at the time. They are kept here under their own IDs so the numbering stays unambiguous.

---

## E-01: Off-task research output caught by the second model (March 4, 2026)

**Evidence status:** documented run, no scores. Short, single-incident record.

| Field | Record |
|---|---|
| Date | March 4, 2026 (flag raised 21:49 UTC) |
| Document type | A 30-item fact-check list for a nonfiction manuscript (people and attributions, science and medical claims, history and geography, legal and political claims, institutional facts, supporting data) |
| Generator | Gemini (Google), Deep Research mode |
| Cross-checker | Claude (Anthropic), holding the session context that produced the list |
| Context asymmetry | Claude knew the task and the expected output. Gemini received only the list |
| Rounds | 2 attempts |
| Scores | Not recorded |

**What happened.** Gemini returned a multi-page academic-style paper on bibliographic data science and metadata quality, unrelated to any of the 30 items. The author uploaded it to Claude without comment. Claude flagged it unprompted as unrelated to the verification list and asked whether it was the wrong file or a test. On the second attempt, with Deep Research off and a revised prompt, Gemini confirmed four simple claims and declined to guess on the niche ones.

**Error category.** Off-task output presented as a research return.

**Fabrication.** The record calls the document "fabricated" with "fake citations". No check of its nine references is recorded, so whether they were invented is not established. Logged as E-01 in `fabrication_log.csv`.

**Protocol effect.** Started the case catalog (March 4). Supported the idea that the cross-checker needs the task context to spot a wrong-domain answer.

**Limitations and conflicts in the sources.** The hallucination case-study file's own summary says the human detected the problem first and then sent it for cross-validation. Its body, the case catalog and the transcript all show the second model flagged it before the human said anything. The transcript supports the second version. The message the file quotes as the author's "neutral" upload note was actually the author's reply after Claude had flagged the problem.

**Sources:** `CaseStudy_Hallucination_Detection_Mar2026.md`, `ApertureRx_CaseStudy_Catalog.md`, chat export conversation of 2026-03-04 (rebuilt from `00_CHAT_ARCHIVE/raw_export/`).

---

## E-02: Single-validator review of two research reports, with rebuttals (March 11, 2026)

**Evidence status:** documented run, no scores. Qualitative record only.

| Field | Record |
|---|---|
| Date | March 11, 2026 |
| Document type | Two long research reports for a nonfiction book on the history of industry campaigns to manufacture scientific doubt, from early 20th-century product safety through modern technology platforms |
| Drafter | Claude (Anthropic) |
| Validator | Gemini (Google), one chat |
| Context asymmetry | Single-blind design: Gemini first ran its own research plan without being told which threads mattered to the author, then received a structured adversarial prompt (factual accuracy, sources, logic, counter-arguments, defamation risk, tone, personal narrative) |
| Human role | Accepted Gemini's factual precision corrections; challenged positions that looked like framing bias rather than error |
| Rounds | Initial validation, a counter-pass, and a second rebuttal |
| Scores | Not recorded |

**What happened.** Gemini's strongest objections fell in three areas: it called a personal narrative thread "conspiratorial" and recommended cutting it; it argued that pre-market safety demonstration would "freeze" software development; and it called a comparison between a 1920s industry scientist and modern platform leadership a "fallacy". After the author's counter-pass, Gemini conceded all three. A second rebuttal, citing post-market drug regulation (Phase IV surveillance, REMS, boxed warnings, MedWatch, recalls) as evidence that regulation is itself iterative, produced a fourth concession. Gemini also stated that its training data leans toward the regulatory consensus of the last twenty years.

**Error categories.** The factual precision corrections Gemini made are not itemized in the record. The disputed items were framing and interpretation, not facts.

**Divergences.** All four disputes were, in effect, EDITORIAL. The record does not use the FACTUAL/EDITORIAL labels, which came later.

**Fabrication.** None recorded.

**Protocol effect.** First formal write-up of the build/challenge/adjudicate roles. The write-up argues that a validator's objections can reflect the validator's developer's commercial position, and that only a human with domain knowledge can tell the difference.

**Limitations.** One validator, one chat, no scores. Every disputed point ended in the validator conceding after the author pushed back. The record does not test whether those concessions were earned or were the validator yielding to pressure, which is the same sycophancy the protocol targets. The claim about alignment with the developer's interests is the author's interpretation, and the write-up itself says it "does not prove deliberate corruption".

**Sources:** `ApertureRx_CaseStudy001_DualAI_Validation_20260311.docx`, `ApertureRx_CaseStudy001_Supplement_SecondRebuttal_20260311.md`, chat export conversation of 2026-03-10 to 12 (rebuilt from `00_CHAT_ARCHIVE/raw_export/`).
