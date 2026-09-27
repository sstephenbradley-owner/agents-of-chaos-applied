# AoCA: Agents of Chaos Applied

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22985670.svg)](https://doi.org/10.5281/zenodo.22985670)

**A human-adjudicated, cross-model adversarial review protocol for AI-drafted documents, with a single-agent variant for people who only have one model.**

Author: Stephen Bradley, PharmD, Prosthetic Mind Holdings LLC
Developed: January to March 2026. Locked: v2.0 (March 13, 2026), v2.0.1 (March 23, 2026). Proposed revision: v2.1 (April 2026; no ratified version found).
Status: released as open methodology under Apache 2.0. No product is being commercialized from this repository.

**Maintenance status.** Maintained as time allows. This was built by a pharmacist who is a stay-at-home father, working around caregiving, to find out whether the verification habits of a regulated profession carry over to AI-generated work. Issues and discussions are welcome, and replies come when the schedule permits. If the protocol gets real use (submitted fabrication-log entries, forks, category packs), active development may resume. If you build on it in the meantime, you will not be waiting on the author.

Two parts of the repository are open to contributions: the **fabrication log** (a small dataset of logged model errors, see [Contributing to the fabrication log](#contributing-to-the-fabrication-log)) and **category packs** for document types the prompts have not been tried on. Submissions are reviewed when time allows.

---

## What this is

AoCA is a procedure for catching errors, invented or misattributed sources, overclaiming and sycophancy in AI-drafted documents. It stages structured disagreement between independent model sessions and sends every unresolved disagreement to a human who makes the call. It runs as prompts and procedure rather than software: you can run it today with two chat windows and a text file.

The organizing idea is **committee vs. mind**. A single model session cannot hold conflicting contexts at once. It resolves toward coherence, which is the property that lets a confident error survive. Separate sessions, each given different context and an adversarial brief, can be made to disagree on purpose. The protocol stages that disagreement, pushes it toward resolution and records what could not be resolved.

Three things separate it from the debate-and-judge frameworks it resembles. The reviewer is held to the same evidentiary standard as the document: it must cite, and its errors are logged. Findings are weighted by an evidence hierarchy taken from clinical practice rather than defined per task. And the human is the decision authority, not a fallback, with rules meant to stop a persuasive model from arguing them out of a correct judgment.

## What it was designed for

The problem was practical. AI-assisted drafting of long-form nonfiction, research reports, a patent application and regulatory-style documents kept producing text that read as authoritative and was wrong in ways a single careful read missed. Real citations were attached to claims they did not support. Evidence from an adjacent field was described as direct validation. A model agreed with the author's framing because agreement is what it had been trained toward. Each revision of the protocol came from one of these failures showing up in real work.

The method came from pharmacy rather than computer science. Independent verification before anything reaches a patient, cross-checking against more than one reference, escalation by severity, ranking evidence by study design rather than publication date, and a record of who checked what: these were verification routines the author already practiced, applied to a new kind of error-prone output.

## What it can do for someone who builds on it

Run as published, AoCA is a document-level check. One document goes in and one adjudicated verification record comes out. That is useful on its own, and it is what the case studies show.

The larger design, specified here but not built, is what happens when that record travels with the document as metadata inside an organization's document system instead of sitting in a folder.

**The corpus reinforces itself.** A document that has been through the protocol carries its history: protocol version, model families used, the round-by-round score trajectory, how many errors each side made, what the human left unresolved and why, and the evidence tiers of the sources it finally rests on. When a later document cites it, the citing run can read that record and assign a tier from it. A document that survived several adversarial rounds with no logged fabrication outranks one that was never checked. Over time the trusted part of an internal corpus becomes the tested part, and trust is earned document by document rather than assumed.

**AI-assisted work becomes auditable.** The same record shows an internal reviewer or an outside examiner that an AI-assisted document went through structured adversarial review before anyone relied on it: what was challenged, what survived, what a named person overruled, and how strict the check was. In a regulated setting that is the difference between "someone looked at it" and a record you can defend.

**The one rule that must survive adaptation.** Tier assignment is a deterministic function of retrieved metadata or organization-defined rules, never an AI judgment. Once a model is asked "what tier is this source," a second failure mode (tier hallucination) sits underneath the one the protocol exists to catch. Three pathways, in order of preference: an external registry returns the tier as a field (PubMed, Crossref, NVD, PACER); the organization keeps a classification table for fields with no registry; or, for documents that have been through the protocol, the tier is computed from the companion record.

**Left to the integrator.** Storage format, signing or hash-chaining of the record, retention, and how the record moves between systems. A cryptographically anchored record is the obvious next step for anyone who needs tamper evidence. The author is not building this layer. The field list is under [Applications](#organizational-deployment-the-validated-corpus).

## What's in this repository

| Path | Contents |
|---|---|
| `protocols/AoCA_v2.0.md` | The locked v2.0 protocol (March 13, 2026), with the March 13 to 14 correction shown as erratum notes |
| `protocols/AoCA_v2.0.1_self_red_team.md` | v2.0.1 (March 23, 2026): adds the Self-Red-Team phase and the standing safety rules |
| `protocols/AoCA_v2.1_proposed_cross_model.md` | The proposed v2.1 changes (April 3, 2026) assembled onto the v2.0.1 base, with the later Standard Audit and Full Tribunal configurations. Never ratified; source notes and open gaps are marked in the file |
| `protocols/AoCA_single_agent.md` | Single-model variant, written as a regulatory reviewer persona and generalized for other regulated documents |
| `prompts/` | Five phase templates (T1 to T5), the Accuracy Mandate block verbatim, and category packs |
| `evidence_hierarchy/two_axis_citation_standard.md` | The two-axis citation standard (quality governs, recency flags), v2.2, with a Pydantic validator example |
| `case_studies/` | Documented runs, score trajectories, divergence logs, corrections to earlier write-ups, and `fabrication_log.csv` |
| `reference_implementation/` | Tribunal alpha: a bring-your-own-key web app that runs the model calls with isolated context per node (see [Reference implementation](#reference-implementation)) |
| `RUNNING_THE_PROTOCOL.md` | What does and does not count as running AoCA |
| `CHANGELOG.md` | Version history with the trigger for each change |
| `CONTRIBUTING.md` | How to submit fabrication-log entries and category packs |
| `references.md` | Works cited in this README, plus selected sources from the case records, with identifiers |
| `CITATION.cff` | Citation metadata |

Source file names cited inside the case studies and protocols are the author's archive names. Some carry the method's earlier working name.

**Versions in this repository.** The locked protocol is v2.0 (March 13) and v2.0.1 (March 23); the release is labeled 2.0.1 for citation. The prompt templates (v0.1, September 2026) already fold in the proposed v2.1 safeguards, so they run slightly ahead of the locked text. "v2.1" labels three unrelated things in the archive: the proposed April protocol revision, a March 13 to 14 correction file of v2.0 (see the erratum notes in `protocols/AoCA_v2.0.md`), and version 2.1 of the citation standard. In this README, "v2.1" means the April proposal.

---

## How AoCA came to be

This section is the author's account from dated project records and chat transcripts. The case files in `case_studies/` cover March 4, 2026 onward and are the more detailed record for that period.

AoCA started as a workaround. In January 2026, while building an unrelated software project, the author needed a second AI system to check the first one's work. The two models, Claude (Anthropic) and Gemini (Google), could not talk to each other, so he passed files between them through shared folders: one model built, the other reviewed, and he carried results back and forth and decided what to keep. That arrangement began on January 17, 2026, under the informal name Cross-AI Handshake, and it is the protocol's real starting point. By late January it had settled into fixed roles: one model drafts, a model from a different company reviews, and a human decides.

The evidence hierarchy came first as a citation standard for clinical educational content (v1.0, January 15, 2026). On February 24 it was rebuilt on two axes after the author saw that a recency-first filter could rank a 2024 case report above a 2018 systematic review, which inverts evidence-based practice. It was later imported into the protocol whole.

The name came later. On February 23, 2026, Shapira et al. posted *Agents of Chaos* (arXiv:2602.20021), a two-week red-team study of autonomous AI agents. About a week later the author came across it through a viral social media post that badly misrepresented it. Checking that post against the paper, and finding much of it false, was exactly the kind of check the workflow existed for. The paper's documented failures (agents reporting work as finished when it was not, following instructions from the wrong people, passing corrupted guidance to other agents) matched problems he had been running into. On February 27 they became a short set of working rules: label what is verified and what is not, check outside claims before building on them, and raise real concerns even mid-task. For about two weeks he called this the "Agents of Chaos protocol."

By March 12 to 13, 2026, when the cross-model workflow was first written up, it had become **Agents of Chaos Applied**. In the author's words, the name was chosen "to acknowledge the paper while marking the distinction: they documented the problem, I built the solution." The cross-model workflow predates the paper by about five weeks. The name follows it by about three.

On March 12 and 13 the protocol was turned on itself. Asked to find prior art that could invalidate the method, the adversarial reviewer returned a "definitively scooped" verdict built on a misattributed paper, a personal blog presented as peer-reviewed work, and an overstated reading of an informal phrase. The author's objection that this was "cheating instead of accidental hallucination" produced the Accuracy Mandate and the Independent Verification step, and v2.0 was locked on March 13. The same day showed the checker could be wrong too: the drafting model, verifying the reviewer's citations, called one real paper fabricated and denied a section title that another paper really contains. Both errors are in the case record (CS-002).

Before release, the single-agent variant was walked through with a pharmaceutical regulatory affairs professional, who then brought a real regulatory classification question with a checkable answer. The tester caught the first logged error in the variant's development (REG-001).

---

## Related work

AoCA was developed independently of the work below. Full identifiers are in `references.md`.

**Multi-agent debate and judge frameworks.** Multiagent Debate (Du et al., 2023), ChatEval, MAD, D3 (Harrasse et al.), EVINCE, FC-MAD for fact-checking, and panels of judges such as PoLL (Verga et al., 2024) and the Verdict library. These stage disagreement between model instances and settle it by consensus, vote or a judge model. The human is absent from the loop, and in most of them context is shared rather than deliberately unequal. CONSENSAGENT (Pitre et al., Findings of ACL 2025) targets the same sycophancy problem in debate and aims for efficient consensus; AoCA aims for recorded disagreement that a human settles.

Three 2026 results bear directly on AoCA's assumptions:

- *Nine Judges, Two Effective Votes* (Kohli, 2026) found that nine frontier judges from several families carried about two independent votes of information because they make the same mistakes on the same items. This is a direct challenge to the idea that model-family diversity alone gives independent review. See [Known limitations](#known-limitations).
- *SLMJury* (2026) found that cross-architecture debate underperformed its strongest single judge, because diversity did not offset vulnerability to persuasion. That is the failure Human Overseer Protection is meant to address.
- *Not Just RLHF* (Kumarappan and Mujoo, 2026) found that multi-agent pipelines flip correct answers under simulated peer pressure, and that one correctly arguing dissenter cut that rate by 54 to 73 percentage points. A standing adversarial role is a version of that dissenter.

*Stop Overvaluing Multi-Agent Debate* (2025) found that debate often fails to beat single-agent baselines. AoCA has no baseline comparison yet, which is listed as a limitation.

**LLM Council** (Karpathy, 2025). The best-known "models reviewing models" project: several models answer, rank each other anonymously, and a chairman model merges the result. Its author describes it as a Saturday hack. It answers questions rather than auditing documents, and it has no human decision step, no unequal context and no error log.

**Refute-or-Promote** (Agarwal, 2026). The closest methodological relative: adversarial kill mandates, context asymmetry, a cross-model critic, cold-start reviewers and a mandatory empirical gate, built for software defect discovery. Its most instructive failure, many reviewers endorsing a vulnerability that did not exist until a single empirical test killed it, illustrates the same common-mode argument behind AoCA's proposed CMF mitigation. The two were developed independently in the same period and are worth reading together.

**Practitioner cross-model review tools** (`alecnielsen/adversarial-review`, AWACS, CriticChain, the Metaswarm review policy). Two model families, fresh critic sessions, evidence requirements and escalation to a human after repeated failure. All of them review code. None applies an accuracy mandate to the critic or weights findings by an evidence hierarchy.

**Single-model checkers** (Vectara HHEM, Patronus Lynx). Trained classifiers that score whether output is supported by a given source. They are complementary: either could serve as an automated first pass inside AoCA's Independent Verification step.

**Citation checkers** (RefChecker, CiteAudit). These confirm that a cited work exists and that its metadata matches. AoCA's verification step also asks whether the source says what the document claims, and applies the same check to the reviewer's own findings.

**Red-teaming toolkits** (PyRIT, DeepTeam, promptfoo). These attack models. AoCA reviews documents.

**What AoCA adds.** An accuracy mandate applied to the reviewer, with a log of the reviewer's errors; evidence-hierarchy weighting imported from clinical practice; deliberately unequal context across reviewer sessions (two informed, one blind) to separate factual errors from context bias; and a human decision authority, with rules against being argued out of a correct judgment. It targets prose: regulatory, academic, nonfiction and fiction.

---

## The protocol in one page

### Roles

- **Drafter.** The primary model. Writes the document, cites sources and flags its own low-confidence claims as it goes.
- **Adversary.** A model from a *different family*, given an adversarial rather than helpful brief, different context from the Drafter, and a category pack of what to check for this document type. Returns findings rated CRITICAL, HIGH, MEDIUM or LOW.
- **Judge** (Full Tribunal only). A third model family that sorts the disagreements still open after re-evaluation, classifying each one for the human. It does not make editorial calls.
- **Decision Authority.** The human, who owns every concede, dispute or flag decision.

### Phases

1. **Build.** The Drafter writes the document and flags concerns inline.
2. **Self-Red-Team** (v2.0.1). The Drafter audits its own output for factual precision, rhetorical overreach, legal exposure and tone before handoff. Added so the Adversary spends its passes on what the Drafter cannot see rather than on errors it could have caught itself.
3. **Adversarial Validation.** The Adversary reviews under the Accuracy Mandate and returns rated findings with checkable citations.
4. **Independent Verification** (v2.0). The Drafter, in a fresh session, checks every Adversary citation for existence and accuracy before the human spends time on it. Output: a verification report and, where needed, fabrication-log entries.
5. **Reconciliation.** The human reviews the findings and the verification report and concedes, disputes or flags each one. Counter-arguments go back to the Adversary for re-evaluation.

Templates T1 to T5 in `prompts/` cover these phases.

### Configurations

| Configuration | Models | Use |
|---|---|---|
| Single-Agent | 1 | Experimentation, or settings locked to one enterprise model. A screening tool; see its limits below |
| Standard Audit | 2 families (Drafter and Adversary) | The basic cross-model run |
| Full Tribunal | 3 families (adds a Judge) | High-stakes documents. Designed May to June 2026 |
| Three-chat | 2 families, 3 Adversary sessions (two with context, one blind) | The v2.0 standard for the adversarial leg. Agreement across all three is the strongest signal; a split between informed and blind sessions points to context bias |

### Convergence

Repeat the counter-argument loop until the round-over-round score gain falls below 0.5 points on the 10-point scale, usually after two or three rounds (v2.0, Section 4). The 1 to 10 reliability score has no anchor definitions yet; T2 proposes anchors at 1, 4, 7 and 10 as an open item. Scores are the reviewer's own and are not ground truth.

---

## The Accuracy Mandate

This is the protocol's most important component and the one most directly shaped by clinical practice.

### Why it exists

v1.0 assumed that an adversarial reviewer told to "find every vulnerability" would look for real ones. The March 12 to 13 prior-art run (CS-002) showed otherwise. Rewarded for devastating findings, the reviewer attributed a Visa Research paper to Microsoft Research, presented a personal blog as a peer-reviewed analysis, and inflated one informal use of a phrase into a finding that the work had been "definitively scooped." Its verdict was built on those three items. After they were corrected, the same reviewer moved from "bordering on non-viable" to, in its pasted reply, "viable, but requires highly strategic claim drafting."

The author called this **incentivized fabrication**: under an adversarial reward, a model can bend real sources toward the verdict it is being paid for. The case record is precise about what happened. No citation in that report was shown to be invented outright. An item first logged as an invented section title turned out to be real, and the error was the Drafter's during verification. The finding rests on one misattribution, one misrepresented source type and one overstatement. The general point stands: false threats are cheap to produce and expensive to check, so Brandolini's Law (refuting a false claim costs far more than making it) shows up inside the protocol meant to correct it.

### What it requires

Every adversarial prompt carries a block that:

1. Requires a checkable citation for each finding: exact identifier (arXiv ID, DOI, PMID, docket number), title, authors and date.
2. States that a verified 6/10 threat is worth more than an unverifiable 10/10 threat.
3. Tells the reviewer that unsupported findings will be logged as fabrication attempts rather than counted as findings.
4. Applies the field's evidence hierarchy when weighting findings.

The original locked wording is in `protocols/AoCA_v2.0.md`, Section 3e. The condensed working version, with the evidence hierarchy appended, is in `prompts/T2_adversary.md`.

### The evidence hierarchy

The two-axis standard (`evidence_hierarchy/two_axis_citation_standard.md`) was written for clinical educational content and generalized afterward.

**Axis 1, evidence quality, governs.** Following the Cochrane, GRADE and Oxford CEBM ordering: T1 systematic reviews and meta-analyses; T2 randomized controlled trials; T3 cohort and case-control studies; T4 case series, case reports, expert consensus and non-evidence-based guidelines. Two tiers were added after second-model reviews found the ordering had no place for non-study sources: **T0** for regulatory labels and evidence-based clinical practice guidelines (after the first review), and **T0_CANONICAL** for database facts such as PubChem properties or RxNorm relationships (after the second).

**Axis 2, recency, flags.** Clinical guidance within 5 years; foundational mechanism and pharmacokinetic data within 10 years, older when confirmed by a recent source or a current guideline; historical context without limit. Every exception gets a one-line rationale.

**Decision rule.** Quality decides; recency breaks ties and raises flags. A higher-tier older source outranks a lower-tier recent one.

**Other fields.** The structure ports by swapping the ranking. For legal drafting: statute, regulation, controlling precedent, persuasive authority, commentary. For investigative work: primary documents, secondary reports, unattributed claims. These mappings are proposals, not validated standards. Category packs in `prompts/README.md` carry the rankings.

The file includes a Pydantic validator that enforces tier and recency fields at the schema level.

---

## Additional safeguards

**Brandolini Safeguard** (v2.0). Treats false threats as a cost the adversarial design itself creates and puts a verification pass between the reviewer and the human to contain it.

**Standing safety rules** (v2.0.1). Six rules that apply in every phase: flag confidence levels; verify outside claims before building on them; raise factual and structural concerns directly, even mid-task; do not invent file contents; keep the Brandolini Safeguard active; keep the Accuracy Mandate active.

**Divergence analysis** (v2.0, Section 5). When reviewers' ratings on the same item differ by more than 4 points out of 10, the item is classified. All reviewers agree: FACTUAL ERROR, must fix. Reviewers from different families disagree: possible TRAINING BIAS, the human adjudicates. Sessions of the same family with different context disagree: CONTEXTUAL BIAS or an EDITORIAL judgment call, the human decides which. In practice, and in the Judge template (T5), each open disagreement is labeled FACTUAL (someone is wrong; verify) or EDITORIAL (no single right answer).

The next four come from the **proposed v2.1** (April 3, 2026). They came out of a cross-model pass that found overclaimed language in a citation map and asked whether the Drafter-written prompt had constrained the Adversary. No ratified version was found, and the file shows the April wording.

**Common-mode failure (CMF) mitigation.** Frontier models share training data and design choices, so cross-model agreement can be false consensus. The response is tiered. First, with no new tooling: reviewers flag where their agreement may reflect shared training data, and for any finding all models agree on, the human asks whether the agreement comes from strong evidence or from common sources. Next: at least one non-model check per pass, such as a structured database lookup or deterministic citation verification. Later: a deterministic validation layer that runs alongside the models and cannot share their priors.

**Human Overseer Protection.** During reconciliation a reviewer can escalate rhetorical pressure instead of correcting itself. Response: re-evaluations use the severity format with citations and no persuasive framing; when the human disagrees with a CRITICAL finding, they pause and write their counter-argument before ruling; a CRITICAL still unresolved after one round goes to a context-blind third model or a human expert; and every human override of a CRITICAL is logged with a reason.

**Adversarial Prompt Decoupling.** When the model being checked writes the prompt that checks it, adversarial effort can drift toward peripheral claims while structural assumptions go unexamined. The v2.0 default (the Drafter writes the adversarial prompt) is deprecated. The proposed default keeps a Drafter-written structured prompt but adds a required open-ended pass in which the Adversary sets its own scope; for the highest stakes, the Adversary gets only a minimal instruction and defines the attack surface itself. The prompt templates restate this as: the Drafter may pre-fill T2, and the human edits it before sending.

**Confidence Language Standards.** Approved and prohibited wording by evidence level. Evidence from an adjacent field may be described as "provides analogous evidence" or "offers conceptual support," never "directly validates" or "proves." A single unreplicated study is "one study found," not "research shows."

---

## Single-agent variant

`protocols/AoCA_single_agent.md` runs the protocol in one model. It was built for a setting where only one approved enterprise assistant was available. It keeps what does not depend on a second model:

- An adversarial persona (reviewer, not assistant) with a category pack for the document type
- The Self-Red-Team pass
- The Accuracy Mandate and evidence-hierarchy weighting
- Severity ratings and a structured report
- Independent Verification of the model's own citations in a fresh session
- Terminology precision rules (added after REG-001)

**What it cannot do.** There is no cross-model check, so sycophancy and selective framing go unchecked. A single model can find real problems while consistently missing the kind its training underweights. A clean severity report looks authoritative, which raises the risk that the user accepts it without checking. The variant therefore adds two required human steps: check the three highest-severity findings against primary sources yourself, and confirm that each "clean" category was actually examined rather than just left unreported. It is a screening tool. Its output should not be described as validated.

---

## Reference implementation

`reference_implementation/tribunal-alpha/` is a small web app (a static page plus three Netlify functions) that runs the model calls of a review with your own API keys for Anthropic, Google Gemini or both. Each node is a separate call with deliberately limited context:

1. **Drafter** reads the full text and extracts the checkable claims.
2. **Adversary** sees the claims only, never the source text, and argues against each one.
3. **Reference** sees the claims only and checks them against the live record with search. It is the only node with search, which is how the pipeline avoids calling a recent true event a fabrication.
4. **Evidence Appraiser** (academic mode only) reads the manuscript and rates the strength of its own evidence.
5. **Judge** sees everything and rules on each claim. In academic mode it rules on three separate axes: is it true, is it new, is it evidenced.

Every node can run on one provider, or each can be assigned separately. Academic mode also resolves each source's publication year from PubMed and Crossref and splits findings into before and after the manuscript's year.

It is not a complete AoCA run on its own. The Self-Red-Team pass, the Accuracy Mandate prompts, the fabrication log and the human reconciliation loop are still done by hand, and its Judge issues rulings where the protocol's Judge template only classifies disagreements for the human. Details, deployment and key handling are in `reference_implementation/README.md`. It is an alpha, provided as is.

A fuller design, specified but not built, adds an Ingestion node and a Canon Reference service for checking against a source of truth, with a deterministic consistency check running alongside the model calls.

---

## Case studies

Everything in `case_studies/` was rebuilt from session transcripts. Where a figure was not recorded, the file says so. Where published write-ups disagreed with the transcripts, the file gives the transcript figure and lists the correction.

| ID | Date | What happened | Record |
|---|---|---|---|
| E-01 | Mar 4, 2026 | A research tool returned an unrelated academic-style paper in place of a 30-item fact-check; the second model flagged it without being asked | Documented, no scores |
| E-02 | Mar 11, 2026 | One reviewer on two long research reports; the author's rebuttals overturned all four main objections, and the reviewer said its training leaned toward recent regulatory consensus | Documented, no scores |
| CS-001 | Mar 12, 2026 | Long-form nonfiction chapter; two Gemini sessions with unequal context over three rounds. Average score 3.5, 6.5, 8.0 | Per-round, per-session scores |
| CS-002 | Mar 12 to 13, 2026 | The protocol applied to its own prior-art search. Errors on both sides; produced v2.0 | Verdict trajectory and error chain |
| REG-001 | Mar 27 to Apr 4, 2026 | Single-agent variant for regulatory work. One logged terminology error: a recombinant peptide called "synthetic," which has a different regulatory meaning. Fixed with terminology rules | Partial |

**The record is small.** There are two scored cross-model runs (CS-001, CS-002), two earlier documented runs and one partial single-agent record. An earlier write-up counted a "CS-003," which turned out to be CS-001 described twice. That label is retired, and claims that error types recurred across two unrelated documents are withdrawn.

**What the fabrication log shows.** `case_studies/fabrication_log.csv` has 19 entries from March 4 to April 3, 2026. The most common entry, 9 of 19, is a checker calling a real source fake: the Verifier checking the Adversary (2), a simulated peer reviewer (6), and the Adversary withdrawing its own correct citation after the Verifier's false correction (1). The causes differ. One paper was three days old and not yet in search indexes. The section-title dispute turned on PDF text the checker could not see. Others were months old, and the peer-review rows record no cause. The rest: 5 misattributions, 4 overstatements and 1 off-task output presented as results. Only that last entry is logged as fabricated, and whether its reference list was invented was never checked. In CS-002, a human with the PDF settled what several model passes could not.

---

## Applications

The protocol fits where two things are true: a wrong, overreaching or selectively framed claim is costly, and the claim can be checked against an outside evidence base with a rankable hierarchy. The list is sorted by evidence status rather than by field.

### What it does

| Use | Mechanism | Runs in |
|---|---|---|
| Citation and evidence checking | Accuracy Mandate and Independent Verification: does the source exist, and does it say what was claimed | Either |
| Pre-submission red team | Adversarial persona with a category pack and severity ratings | Either |
| Sycophancy and framing audit | A different-family Adversary with different context; divergence log | Cross-model only |
| Catching reviewer error under adversarial reward | Accuracy Mandate applied to the reviewer; fabrication log | Cross-model |
| Consistency against a source of truth | Deterministic check plus Adversary | Full Tribunal design |
| Teaching critique | The concede, dispute, flag loop | Either |

### Documented

- **Long-form nonfiction.** CS-001, three rounds, two sessions with unequal context. The reviewer caught misattributed figures and a misattributed passage. One timeline error was introduced in a Round 2 counter-argument and caught by one session only.
- **Prior-art search.** CS-002, the protocol applied to itself. It surfaced reviewer misattribution and overstatement, and two verification errors by the Drafter on papers too new for search indexes.
- **Regulatory red team (single-agent).** REG-001. One real question, one logged terminology error, caught by a human expert and fixed in the prompt. The persona has not been run on a real submission.
- **The protocol's own revisions.** v2.0 came from CS-002. The proposed v2.1 came from a cross-model pass on a citation map and a direct question to the Adversary about whether the Drafter's prompt had constrained it.

### Plausible, not yet run

- **Academic peer review.** The current literature asks for this most directly. Ansari (2026) documented 100 fabricated citations in accepted NeurIPS 2025 papers that passed several expert reviewers each. GPTZero found fabricated citations in 50 of 300 ICLR 2026 submissions it checked. *Phantom References* (2026) measured hallucinated citations surviving review at top venues and introduced RefChecker. Dycke and Gurevych (TACL 2026) found automated reviewers fail to detect faulty reasoning. Existing tools check citation identity. None stages a claim-level adversarial review with human adjudication and a log of the reviewer's own errors. Two design points for this profile, both built into the reference implementation's academic mode but not yet run through a documented case:
  - **Separate agreement with the record from strength of evidence.** A paper whose new evidence the literature does not yet support is not wrong for that reason. An *Evidence Appraiser* role reads the manuscript itself and appraises its own evidence (design, controls, n, effect sizes, p values), so rulings can tell novel-and-supported from novel-and-underpowered.
  - **Partition the literature by publication year.** Work published after the manuscript, often the authors' own follow-up, must not be used as prior art against its novelty claim. Publication years come from PubMed and Crossref lookups, not from a model's guess.
- **Legal drafting and contract review.** Citation-heavy, with a clear hierarchy, and already exposed to sanctioned fake-citation incidents. No case study.
- **Clinical and pharmacy education content.** The evidence hierarchy was built here. The adversarial layer has not been run end to end on a clinical recommendation set.
- **Fiction and long-form creative writing.** Checking against canon (character attributes, timeline, who is alive) is the verifiable base. Lexical-overlap grounding scores common in RAG evaluation were rejected for this use, because verbatim overlap with canon signals derivative prose rather than accuracy.
- **Regulator-side review.** The same protocol run by the reviewing agency on incoming submissions. Untested.
- **Journalism and counter-misinformation.** Real metadata wrapped around a false claim looks the same whether a reviewer produced it under pressure or someone planted it, so the same verification step catches both without guessing intent.

### Organizational deployment: the validated corpus

The rationale is under [What it can do for someone who builds on it](#what-it-can-do-for-someone-who-builds-on-it). Every document that passes the protocol carries this record as metadata:

| Field | Source | Purpose |
|---|---|---|
| Protocol version | Run configuration | Which safeguards were in force |
| Model families used | Run configuration | CMF exposure; a two-family and a three-family run are not equivalent |
| Final score and round-by-round trajectory | Reviewer scoring | How far the document moved, not only where it ended |
| Error counts by role (Drafter, Adversary, Verifier) | Fabrication log | Whether any side misstated evidence during the run |
| Unresolved divergences, FACTUAL or EDITORIAL | Divergence log | What the human chose not to resolve, and why |
| Human adjudication record | Reconciliation | Who decided what, with reasons |
| Evidence-tier distribution of surviving citations | Accuracy Mandate | What the document actually rests on |
| Provider refusals, by node | Run log | Which steps a provider declined to perform |

Tier assignment from this record uses the third pathway above: deterministic, never an AI judgment. Status: specified, not implemented.

### Proposed

Security threat assessments, code review, insurance coverage decisions, financial model validation and intelligence analysis: fields where an AI-generated "all clear" has real consequences. None has been run.

### Where it does not belong

Work with no outside evidence base to check against (opinion, taste, brainstorming); cases where a false finding costs more than a miss and no human can adjudicate; and anything too time-critical for a multi-round human loop. The protocol trades speed for verifiability on purpose.

---

## Contributing to the fabrication log

The log is published as a dataset (`case_studies/fabrication_log.csv`, browsable on Hugging Face as the `fabrication_log` config) because labeled examples of models misstating evidence under adversarial pressure are rare. If you run the protocol and a Drafter, Adversary, Verifier or Judge misstates a source, submit it.

Each entry needs: the date; the role; the model family and, if known, the model version; the claim as made; the category (`fabricated`, `misattributed`, `overstated`, `wrongly_rejected_real_source`); how it was detected and by whom; and enough of the source identifier for someone else to check it. Do not submit confidential documents or personal data. Paraphrase the surrounding text if needed; the claim and the source identifier are what matter.

On Hugging Face, open a Discussion or a pull request on this dataset. On the GitHub mirror, use the issue template in `.github/ISSUE_TEMPLATE/`. Fields and the privacy rule are in `CONTRIBUTING.md`. **Category packs** for document types not yet tried are welcome the same way.

## What counts as running the protocol

Details are in `RUNNING_THE_PROTOCOL.md`. In short, a run described as AoCA should have: at least two model families (or be labeled single-agent screening); the Accuracy Mandate in the adversarial prompt; an Independent Verification pass; a recorded human decision on every CRITICAL and HIGH finding; and a kept fabrication log, even if empty. There is no certification and no "AoCA-validated" badge. A run that skips these steps should say which ones it skipped.

---

## Evolution

Dates before March 4, 2026 and after April 5, 2026 come from the author's dated project records rather than the case files.

Every revision below was triggered by a documented failure in real use rather than designed in the abstract.

| Date | Version or milestone | What changed and why |
|---|---|---|
| Jan 15, 2026 | Citation standard v1.0 | Clinical citation standard for educational content; recency was the working filter |
| Jan 17, 2026 | Cross-AI Handshake | Two models from different companies bridged by a human through shared folders, so one could check the other |
| Late Jan 2026 | Fixed roles | Drafter, a reviewer from a different family, and a human who makes every final call |
| Feb 23, 2026 | *Agents of Chaos* posted | Shapira et al., arXiv:2602.20021 |
| Feb 24, 2026 | Citation standard v2.2 | Rebuilt on two axes (quality governs, recency flags) after the recency filter was seen to invert evidence ranking; T0 after the first second-model review and T0_CANONICAL after the second; Pydantic validator example |
| Feb 27, 2026 | "Agents of Chaos protocol" (later recorded as v1.0) | Working rules adopted after checking the paper: label verified versus unconfirmed, check outside claims first, raise concerns mid-task |
| Mar 12, 2026 | Named AoCA; first write-up | Cross-model review with unequal context and severity ratings; reviewers assumed to act in good faith |
| Mar 13, 2026 | v2.0 (locked) | The reviewer bent evidence toward a "scooped" verdict during the protocol's own prior-art search. Added the Accuracy Mandate, Independent Verification, the Brandolini Safeguard, the three-chat setup and the fabrication log. Corrected March 13 to 14 when a human reading the PDF showed one "fabrication" was the Drafter's verification error |
| Mar 23, 2026 | v2.0.1 | Self-Red-Team phase and six standing safety rules, because reviewer passes were being spent on errors the Drafter could catch itself |
| Mar 27 to Apr 4, 2026 | Single-agent variant | For settings locked to one model; terminology rules added after the first logged error; risk review after the April cross-model pass |
| Apr 3 to 5, 2026 | v2.1 (proposed) | A cross-model pass found overclaimed language and prompt-authorship bias. Proposed CMF mitigation, Human Overseer Protection, prompt decoupling and confidence-language standards. Sent for a second review April 5; no ratified version found |
| May to Jun 2026 | Full Tribunal design | Third-family Judge and a deterministic, non-model consistency check as an independent signal |
| Jul 2026 | Patent path withdrawn | Assessed as not meaningfully defensible; no bandwidth to commercialize |
| Aug 2026 | Degraded-variant note | Running all roles as same-model subagents recorded as role asymmetry only, not the method |
| Sep 2026 | Reference implementation and open release | Web alpha built and run (Drafter, Adversary, Reference, Judge; academic mode adds an Evidence Appraiser and publication-year partition); provider refusal observed; released openly with a dated record |

## Known limitations

- **Model diversity is not independence.** *Nine Judges* shows panels from different families share most of their errors. AoCA relies on unequal context and the human, not family diversity alone, to break that correlation. Whether that is enough is an open question the case record cannot answer.
- **No baseline.** AoCA has not been compared with one model checking itself, or with a symmetric cross-model setup. The author's planned comparison is on hold. Multi-agent methods often fail to beat single-agent baselines, so treat the benefit as unproven until someone runs one.
- **Small record.** Two scored cross-model runs, and in both the Adversary was Gemini and the Drafter was Claude. Other pairings are untested.
- **Checkers err too.** Nearly half the logged errors are real sources wrongly called fake, for reasons that include search-index lag and PDF text the checker could not see. Verification by a model with a search tool needs a human with the primary source as the last step.
- **Scores are self-reported.** Reliability scores come from the reviewer and have no anchor definitions. The target also shifted between rounds in CS-001, so scores track an evolving argument, not one fixed document.
- **Provider refusal.** In a September 2026 run of the reference implementation, the Anthropic API refused at the Drafter node on a published biomedical abstract because the text used select-agent language. Legitimate work on select agents, toxins or dual-use methods can be stopped at the first step. A report needs a distinct "provider declined" outcome that names the node, kept separate from audit findings. This also gives per-node model routing a second reason beyond reviewer diversity, since providers draw these lines differently.
- **The v2.1 safeguards are unratified** and have not been tested as a set.
- **The drafting model's memory changed mid-record.** Claude's memory system changed between May and August 2026, so later runs had different persistent context from earlier ones.
- **The evidence hierarchy was built for clinical content.** Other field mappings are proposals.

## How to cite

See `CITATION.cff`. Suggested form:

> Bradley, S. (2026). *AoCA: Agents of Chaos Applied. A human-adjudicated cross-model adversarial review protocol with clinical evidence-hierarchy weighting* (Version 2.0.1) [Protocol and dataset]. Zenodo. https://doi.org/10.5281/zenodo.22985670

That DOI always resolves to the latest version. To cite the exact v2.0.1 snapshot, use https://doi.org/10.5281/zenodo.22985671.

GitHub: https://github.com/sstephenbradley-owner/agents-of-chaos-applied. A copy with the fabrication log as a browsable dataset is on Hugging Face: https://huggingface.co/datasets/sbradley90/agents-of-chaos-applied.

## License

Apache 2.0. Commercial and derivative use permitted with attribution.
