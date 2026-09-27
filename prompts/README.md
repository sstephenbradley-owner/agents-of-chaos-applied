# AoCA Prompt Templates

<!-- Source: AoCA Prompt Templates v0.1 (September 26, 2026). Text is from that document with dashes removed. The document's "Decisions" checklist (internal open questions) and its tester validation statement are not reproduced here; the validation statement is in protocols/AoCA_single_agent.md, section 9.1. -->

Version 0.1, September 26, 2026. Stephen Bradley, PharmD. Apache 2.0.

Five templates cover every phase of the protocol, and none of them is document-specific. Everything that changes by document type lives in one swappable slot, `{CATEGORY_PACK}`, so only five prompts need maintaining and others can contribute packs for uses not yet tried.

| Phase | Template | Who runs it | Needed in |
|---|---|---|---|
| Self-Red-Team | [T1](T1_self_red_team.md) | Drafter, before handoff | All configurations |
| Adversarial Validation | [T2](T2_adversary.md) (includes the Accuracy Mandate) | Adversary, different model family | All configurations |
| Independent Verification | [T3](T3_independent_verification.md) | Drafter in a fresh session | All configurations |
| Re-evaluation | [T4](T4_reevaluation.md) | Adversary, same session as T2 | All configurations |
| Judgment | [T5](T5_judge.md) | Third model family | Full Tribunal only |

**Single-agent variant:** run T1 through T4 in one model, but T3 must be a fresh session, and the human checks the top three findings against primary sources. See `../protocols/AoCA_single_agent.md`.

**Prompt decoupling (v2.1):** the Drafter may pre-fill T2, but you edit the handoff before sending it. The model being checked must not write the prompt that checks it.

**Placeholders** are in `{CURLY_CAPS}`. Everything else is sent verbatim.

**Convergence:** repeat T4 until the reliability score gains less than 0.5 points round over round, usually two or three rounds.

TODO(source not found): anchor definitions for the 1 to 10 reliability score requested in T2 and T4. The source lists this as an open decision (define anchors at 1, 4, 7 and 10).

## Category packs

A pack is the only part that changes by document type: a short list of what to check, plus how sources rank in that field. The first three use the category names from the v2.0 protocol, section 3b, with one-line descriptions added. The clinical pack is where the Accuracy Mandate originated.

### Investigative nonfiction (v2.0)

```text
- Factual verification: names, dates, figures, quotes
- Causal logic: does each "because" follow from the evidence?
- Source quality: primary documents over secondary reports over unattributed claims
- Structural critique: does the argument hold if the weakest claim is removed?
- Legal risk: statements about identifiable people or organizations
```

### Academic papers (v2.0)

```text
- Methodology: is the design able to answer the question?
- Statistical validity: tests, sample size, reported uncertainty
- Citation accuracy: does each cited work say what the paper claims?
- Reproducibility: could another team repeat this from what is written?
```

### Policy analysis (v2.0)

```text
- Stakeholder impact: who is affected, and is anyone missing?
- Implementation feasibility: cost, timeline, authority to act
- Cost-benefit accuracy: are the figures sourced and the comparison fair?
- Source quality: statute and official data over agency guidance over advocacy material
```

### Clinical and drug information (draft, pending author review)

<!-- The source marks this pack "new; for your review" and lists approval as an open decision. -->

```text
- Dosing, indications and contraindications match the current official label
- Mechanism and pharmacokinetic claims are supported by Tier 1 to 3 evidence
- Clinical guidance is no older than 5 years unless a current guideline still cites it
- Drug interactions and safety warnings are complete for the stated use
- Source ranking: current regulatory label and evidence-based guidelines alongside Tier 1; structural data from authoritative databases (e.g., PubChem, PDB) for chemistry claims
```

### Contributing packs

Anyone can open a pull request with a new pack in the same format (checks plus source ranking). Packs are reviewed and merged, or left marked "community, unreviewed." That keeps the scope at five templates while coverage grows.

## Fabrication log submissions

When T3 or the human catches a misstated source, the fabrication log records it. Both directions count: a reviewer bending or inventing evidence, and a verifier wrongly calling a real source fake, as happened in March 2026. The prompt to contribute sits at the end of T3's instructions to the human, not the model: "If the fabrication log is not empty, consider submitting it."

The submission fields and privacy rule are in `../CONTRIBUTING.md`, and they match the columns of `../case_studies/fabrication_log.csv`. In short: submit the claim and a public source identifier, never the document. People will be running this on unpublished manuscripts and work documents.

The dataset, like the rest of the repository, is released under Apache 2.0.
