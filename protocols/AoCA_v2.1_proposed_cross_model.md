<!--
How this file was built.

No single document titled "AoCA v2.1" exists in the sources as a complete, ratified protocol. The only April 2026 v2.1 text is "AoCA Protocol Update: v2.0 → v2.1," status PROPOSED, drafted April 3, 2026 and preserved in the chat transcript 2026-04-01_investigating-online-buzz.md (file AoCA_Protocol_v2.1_PROPOSED_20260403.md). That document describes only the four changes. It says the changes needed adversarial review, author judgment and patent-counsel input "before it becomes official." On April 5, 2026 it was handed to Gemini for a second, unconstrained pass (GEMINI_HANDOFF_PASS2_20260405.md). No record of that pass's result, or of a later ratified v2.1, was found in the staged transcripts or the full chat export.

This file therefore combines:
- the unchanged base protocol from AoCA_v2.0.md (locked March 13, 2026),
- the Self-Red-Team phase from AoCA_v2.0.1_self_red_team.md (March 23, 2026),
- the four v2.1 changes, copied from the PROPOSED draft (April 3, 2026),
- the Standard Audit / Full Tribunal configurations, which come from the implementation design notes of May 10, 2026 and the Prompt Templates v0.1 (September 26, 2026). These postdate the April draft.

Each assembled section carries an HTML comment naming its sources. Model names (Claude, Gemini, GPT) are kept where the source names them, as the implementation used at the time.

Removed from the April draft: the "Patent implications" section (named patent counsel and listed candidate claims) and the "Journal paper implications (ICLR 2026)" section (internal planning). Both are internal planning notes, not protocol.
-->

# Agents of Chaos Applied (AoCA) Protocol v2.1: Cross-Model

- **Version:** 2.1
- **Change date:** April 3 to 5, 2026
- **Author:** Stephen Bradley, PharmD
- **Status in the sources:** PROPOSED (April 3, 2026). Sent for a second adversarial pass April 5, 2026.
- **Foundational reference:** Shapira et al. (2026), "Agents of Chaos," arXiv:2602.20021

TODO(source not found): a ratified or final v2.1 document, or the result of the April 5, 2026 Gemini Pass 2 review of the proposed v2.1. Until one is found, the four v2.1 changes below carry the April 3 PROPOSED wording.

## 1. Roles

<!-- Sources: AoCA_v2.0.md section 1 (Primary Model, Adversarial Validator, Verification Pass); v2.1 PROPOSED draft, Change 2 ("Authority hierarchy established (Human > Claude > Gemini)"); implementation design notes, chat of 2026-05-10 (Drafter / Adversary / Judge names and Judge role); AoCA Prompt Templates v0.1 (role-to-template table). -->

| Role | Who | Source definition |
|---|---|---|
| Human (final authority) | The researcher or author | Authority hierarchy: Human > primary model > adversarial validator (the source states it as "Human > Claude > Gemini"). The human makes the final decision on every item. |
| Drafter (Primary Model, Builder) | Model family A (Claude in the original implementation) | "Collaborates with the human researcher to produce the target document... structurally incapable of serving as its own adversarial check." |
| Adversary (Adversarial Validator, Red Team) | Model family B, which must differ from A (Gemini in the original implementation) | "Independent model(s) from a DIFFERENT model family tasked with finding structural vulnerabilities, factual errors, and logical failures in the target document... The cross-provider requirement is mandatory." |
| Verifier (Verification Pass) | The Drafter, in a fresh session | "After the adversarial validators return their findings, the primary model independently verifies the validators' citations and claims before the human researcher acts on them." |
| Judge (Full Tribunal only) | Model family C, differing from A and B (GPT in the May 2026 design notes) | May 2026 design notes: "Judge (Full Tribunal only) or second-pass classification (Standard)." Prompt Templates v0.1: the Judge "sorts disagreements for the human but does not make editorial calls." |

## 2. Phases

<!-- Sources: AoCA_v2.0.1_self_red_team.md (Build, Self-Red-Team, Adversarial Validation, Reconciliation); AoCA_v2.0.md section 4 (Independent Verification as Step 2, counter-argument loop, convergence); AoCA Prompt Templates v0.1 (phase table: Self-Red-Team, Adversarial Validation, Independent Verification, Re-evaluation, Judgment); v2.1 PROPOSED draft Change 2 and Change 3 for the v2.1 rules applied in each phase. -->

1. **Build (Drafter).** The Drafter drafts, researches, structures and iterates with the human. It flags confidence levels, verifies external claims before building on them, raises concerns directly, and documents sources as work progresses. (v2.0.1, Phase 1)
2. **Self-Red-Team (Drafter).** Before handoff, the Drafter audits its own output across four domains: factual precision, rhetorical overreach, legal exposure, tone calibration. The human reviews the flags and decides which to address. (v2.0.1, Phase 2; prompt T1)
3. **Adversarial Validation (Adversary).** The Adversary receives the draft and an adversarial prompt that meets Section 4. Under v2.1 Change 3, the prompt must be decoupled from the Drafter, and the Adversary also performs an open-ended pass that defines its own scope. (v2.0 sections 2 and 3; v2.0.1 Phase 3; prompt T2)
4. **Independent Verification (Drafter, fresh session).** Every citation from the Adversary is checked before the human spends time on counter-arguments. Fabricated, misattributed or overstated citations are flagged and recorded in the fabrication log. (v2.0 section 4, Step 2; prompt T3)
5. **Reconciliation and Re-evaluation (Drafter, Human, Adversary).** The Drafter concedes, disputes with evidence, or flags each finding for the human. Counter-arguments for the highest-severity verified findings go back to the Adversary, which rates whether each resolves the vulnerability, introduces a new one, and how strong it is. Under v2.1 Change 2, resolution-phase output from the validator must use the structured severity format with no persuasive framing. (v2.0 section 4, Steps 3 to 5; v2.0.1 Phase 4; prompt T4)
6. **Judgment (Judge, Full Tribunal only).** Open disagreements go to a third model family, which classifies each as factual, editorial, or unresolvable with the available evidence, and flags possible model bias. The human decides every item. (Prompt Templates v0.1, T5)

## 3. Configurations

### 3a. Three-chat configuration (standard adversarial setup)

<!-- Source: AoCA_v2.0.md section 2, unchanged. Prompt Templates v0.1 adds the note on {CONTEXT_BLOCK}. -->

The standard configuration uses three parallel adversarial chats:

- **Chat A (Context-Aware):** Has access to prior session context, detailed source data, and background materials. Tests the document against a specialist reader's knowledge.
- **Chat B (Context-Aware, Different Thread):** Has access to the same or similar prior context but operates in a separate conversation thread. Tests for reproducibility of adversarial findings across sessions.
- **Chat C (Context-Blind):** Receives ONLY the target document and the adversarial prompt. No prior context, no background materials. Tests the document against a generalist reader's knowledge.

The asymmetric context design serves two purposes: (1) if all three chats identify the same vulnerability, the finding is reliable regardless of context; (2) if context-aware and context-blind chats diverge on the same evidence, the divergence is diagnostic. It identifies either a contextual bias or an editorial judgment call rather than a factual error.

In the prompt templates, the same T2 prompt is sent to all three chats; the background block is filled for A and B and left empty for C.

### 3b. Standard Audit (two model families)

<!-- Source: implementation design notes (chat of 2026-05-10). Non-protocol planning text removed. This configuration postdates the April v2.1 draft. -->

"Drafter (Claude) + Adversary (Gemini). Judge role is performed by a second-pass Drafter call with a structured classification prompt: same model, different prompt, different context window. Faster, cheaper... lighter audit. Catches the 80% case."

### 3c. Full Tribunal (three model families)

<!-- Source: implementation design notes (chat of 2026-05-10); Prompt Templates v0.1 (T5 is "Full Tribunal only"). README history dates the Full Tribunal design to May to June 2026, after v2.1. -->

"All three families. Independent Judge. Maximum methodology integrity. Higher cost, slower, deeper audit." In the Tribunal design: Claude Drafter, Gemini Adversary, GPT Judge.

TODO(source not found): a protocol-level statement of how the three-chat configuration combines with Standard Audit and Full Tribunal (for example, whether a Full Tribunal run also uses the three asymmetric Adversary chats). The Prompt Templates list all of T1 to T4 as "All configurations" and T5 as "Full Tribunal only," but do not say more.

### 3d. Single-agent variant

See `AoCA_single_agent.md`.

## 4. The Adversarial Prompt

<!-- Source: AoCA_v2.0.md section 3, unchanged except that v2.1 Change 3 now governs who writes the prompt (Section 7.3 below). -->

Every adversarial prompt MUST contain:

- **Role assignment.** The validator is an adversarial fact-checker, NOT a helpful assistant. Example: "Your job is to find every structural vulnerability, factual error, and logical failure in this document. You are not here to help the author. You are here to break the document."
- **Evaluation categories.** Domain-specific vulnerability taxonomy. For investigative nonfiction: factual verification, causal logic, source quality, structural critique, legal risk. For academic papers: methodology critique, statistical validity, citation accuracy, reproducibility. For policy analysis: stakeholder impact, implementation feasibility, cost-benefit accuracy.
- **Severity classification.** CRITICAL (document cannot be published with this error), HIGH (significantly undermines credibility), MEDIUM (weakens argument but not fatal), LOW (minor issue, fix if possible).
- **Output format.** For each finding: the specific claim quoted from the document, identified problem, severity rating, recommended fix. Plus a final numerical reliability score (1 to 10 scale).
- **The Accuracy Mandate** (below).

### The Accuracy Mandate

<!-- Source: AoCA_v2.0.md section 3e, verbatim apart from dash removal. The Prompt Templates v0.1 T2 contains a condensed, generalized version with the evidence hierarchy appended; see prompts/T2_adversary.md. -->

This section is REQUIRED in every adversarial prompt. It must appear prominently and use language equivalent to the following:

> **ACCURACY MANDATE**
>
> Your adversarial value is zero if your citations are inaccurate. A fabricated threat wastes more of the applicant's time to debunk than it would have taken you to verify before asserting it. This is the Brandolini asymmetry operating inside the protocol itself. Do not be the source of the asymmetry you are being deployed to correct.
>
> For every citation you provide: include the exact arXiv ID (or DOI, URL, patent number), exact title, exact authors, and exact publication date. If you cannot verify a claim about a paper's contents, state "I cannot verify that this paper contains [specific claim]" rather than asserting it as fact.
>
> If you find a paper that partially overlaps with a claimed feature, describe the partial overlap precisely. Do not inflate a partial overlap to a full anticipation. A 6/10 threat that is real and verified is infinitely more valuable than a 10/10 threat that is fabricated or overstated.
>
> Do not misattribute institutional affiliations. Do not present blog posts as peer-reviewed publications. Do not claim a paper contains specific section titles or terminology without verifying the actual text. Do not manufacture overlaps that do not exist in the source material.
>
> The human researcher will independently verify every citation you provide. Inaccurate citations destroy your credibility and waste the researcher's limited time. Your job is to find real threats, not to perform the theater of finding threats.

## 5. Iteration and Convergence

<!-- Sources: AoCA_v2.0.md section 4, Step 5 (convergence rule); AoCA Experimental Protocol v1.0, March 14, 2026, section 2 (deduction-based scoring rubric); AoCA_v2.0.md section 6 (Brandolini Safeguard). -->

**Convergence rule.** Repeat the counter-argument loop until convergence (typically 2 to 3 rounds). "Convergence is defined as the round-over-round score improvement falling below 0.5 points on the 10-point scale." (v2.0, Section 4, Step 5)

**Scoring rubric (from the Experimental Protocol v1.0, March 14, 2026).** Base score = 10.0. Deductions are cumulative. Score = max(0, 10.0 − Σ deductions).

| Severity | Deduction | Max per document |
|---|---|---|
| CRITICAL | −3.0 per instance | No cap |
| HIGH | −1.5 per instance | No cap |
| MEDIUM | −0.5 per instance | −3.0 total |
| LOW / EDITORIAL | 0.0 | N/A (documented as divergence data) |

**Release criteria beyond the score rule.** One task-specific validation prompt (a March 29, 2026 review of a paper's Related Work section) defined these clearance criteria. They are recorded here as an example, not as a protocol default:

> The Related Work update is cleared for integration into the journal paper when: (a) All 7 references are verified as existing and accurately cited. (b) No CRITICAL findings remain unresolved. (c) All HIGH findings have either been fixed or have documented counter-arguments accepted by the human researcher. (d) The overall reliability score from at least 2 of 3 Gemini chats is 7.0 or above. (e) [The author] has reviewed and adjudicated all findings.

<!-- Source for the example: raw chat export, conversation "Architecture validation against Claude's response accuracy," 2026-03-29, file AoCA_GeminiValidation_RelatedWork_20260329.docx. -->

TODO(source not found): a protocol-level set of default release criteria (verified citations, no unresolved CRITICAL findings, a score threshold across validator sessions, recorded human adjudication). The only source is the task-specific March 29 example above, which predates v2.1.

TODO(source not found): anchor definitions for the 1 to 10 reliability score. The Prompt Templates v0.1 note that the T2 score "is still undefined" and propose four anchors (1, 4, 7, 10) as an open decision.

**The Brandolini Safeguard.** Unchanged from v2.0 Section 6. The asymmetry operates at three levels: (1) the primary model generates plausible-but-flawed research faster than a reviewer can check it, answered by adversarial validators; (2) adversarial validators under pressure generate fabricated citations faster than the human can verify them, answered by the Accuracy Mandate; (3) verification itself costs effort, answered by the Independent Verification step, which pre-screens citations before the human invests time. "The Brandolini Safeguard is not optional."

## 6. Divergence Analysis

<!-- Source: AoCA_v2.0.md section 5, unchanged. -->

When two or more adversarial validators evaluate the same evidence and reach substantively different conclusions (a rating differential exceeding 4 points on a 10-point scale):

- **Convergent finding:** All validators agree regardless of context. Classification: FACTUAL ERROR. Action: must fix.
- **Divergent finding (cross-model):** Validators from different model families disagree. Classification: possible TRAINING BIAS. Action: human adjudicates, documents which model's priors are distorting assessment.
- **Divergent finding (intra-model):** Same model family with different context windows disagrees. Classification: CONTEXTUAL BIAS or EDITORIAL JUDGMENT CALL. Action: human evaluates whether the divergence reflects legitimate editorial disagreement or contextual priming distortion.

v2.1 adds a check for the opposite case: agreement that may be shared prior rather than evidence (Change 1, Tier 1).

## 7. The v2.1 Changes

<!-- Source for all of section 7: v2.1 PROPOSED draft, April 3, 2026 (AoCA_Protocol_v2.1_PROPOSED_20260403.md in 2026-04-01_investigating-online-buzz.md). Text is the draft's, with dash removal and the patent-counsel name removed. -->

### Change trigger

During a working session (April 3, 2026), a citation mapping document was produced and submitted to Gemini for adversarial review per standard AoCA protocol. The adversarial pass exposed three categories of vulnerability not addressed in v2.0:

1. **Common-Mode Failure (CMF):** Cross-model validation between LLMs sharing training priors, overlapping corpora, and isomorphic architectures can produce illusory consensus rather than genuine adversarial checking.
2. **Human Overseer Vulnerability ("Persuasion Bombing"):** During the resolution phase, the validator model can rhetorically overwhelm the human arbiter through intensified ethos/logos/pathos appeals rather than self-correcting.
3. **Adversarial Prompt Authorship Bias:** When the model being evaluated writes the adversarial prompt, it can (consciously or systematically) channel the adversarial energy toward peripheral claims while shielding deeper structural assumptions.

Additionally, the session produced a meta-level validation of the protocol itself: Claude built work with confirmation bias, Claude self-identified some vulnerabilities, Gemini identified vulnerabilities Claude missed, Gemini then evaluated whether the protocol structure was sound and identified the meta-level flaw. Each layer caught what the previous layer did not.

<!-- Transcript context (same file, 2026-04-04T03:37 to 04:08): items 1 and 2 came from Gemini's first pass on the session outputs, which included the citation map. Item 3 came from a follow-up question the author sent to Gemini asking whether the protocol worked and whether the Claude-written adversarial prompt had constrained it. Change 4 came from the first pass's finding of overclaimed language in the citation map. -->

### 7.1 Change 1: Common-Mode Failure Mitigation Layer

**v2.0 status:** Not addressed. Cross-model validation assumed sufficient independence between frontier LLMs.

**v2.1 addition:** The protocol acknowledges that transformer-based LLMs sharing overlapping training distributions are susceptible to Common-Mode Failure, where multiple models converge on identical incorrect conclusions due to shared priors rather than independent verification.

**Mitigation architecture** (tiered by implementation complexity):

**Tier 1 (Immediate, no new tooling):**
- Explicitly instruct adversarial validators to identify claims where their agreement with the primary model may reflect shared training data rather than independent verification.
- Add a mandatory "shared-prior check" step: for any finding where all models agree, the human overseer must ask "Is this agreement because the evidence is strong, or because all models learned from the same sources?"
- Document the CMF risk in the protocol's known limitations section.

**Tier 2 (Near-term, requires integration):**
- Introduce at least one non-transformer validation source per pass (e.g., rule-based regulatory ontology check, structured database lookup, deterministic citation verification).
- For regulatory domain applications, integrate graph-based inference engines mapped to jurisdiction-specific regulatory frameworks (FDA CFR, EMA guidelines, PMDA standards) as ground-truth anchors.

**Tier 3 (Future architecture):**
- Develop a deterministic validation layer that operates independently of probabilistic language model outputs.
- This layer does not replace cross-model adversarial validation but provides an orthogonal check that cannot share LLM training priors.

### 7.2 Change 2: Human Overseer Protection Protocol

**v2.0 status:** Authority hierarchy established (Human > Claude > Gemini) but no structural protection against rhetorical escalation during resolution phase.

**v2.1 addition:** The resolution phase (where the human evaluates disagreements between primary model and adversarial validator) must include structural guardrails against persuasion bombing.

**Implementation:**

- **Structured output format:** During resolution, validator findings must be presented in the severity framework (CRITICAL/HIGH/MEDIUM/LOW) with specific evidence citations. Argumentative, rhetorical, or persuasive framing is explicitly prohibited in resolution-phase outputs.
- **Cooling period:** For CRITICAL findings where the human overseer disagrees with the validator, a mandatory pause is introduced before final resolution. The human must articulate their counter-argument in writing (not verbally to the model) before proceeding. This breaks the real-time rhetorical feedback loop.
- **Third-party tiebreaker protocol:** For CRITICAL findings that remain unresolved after one round, the finding is escalated to a context-blind third model (or a human domain expert) rather than allowing continued argumentation between the primary model and the validator.
- **Escalation log:** All instances where the human overrides a CRITICAL finding must be documented with written rationale. This creates an audit trail that can be reviewed for patterns of override that might indicate either appropriate expertise or cognitive surrender.

### 7.3 Change 3: Adversarial Prompt Decoupling

**v2.0 status:** Adversarial prompts written by the primary model (Claude) with human review. No structural separation between content author and prompt author.

**v2.1 addition:** The generation of adversarial prompts must be decoupled from the model that produced the content being evaluated.

**Implementation options** (in order of preference):

1. **Human-authored prompt** (strongest): The human overseer writes the adversarial prompt based on their own assessment of where the work is weakest. This requires the human to have sufficient domain knowledge to identify attack surfaces.
2. **Validator-authored prompt** (strong): The adversarial validator receives the raw output with a minimal instruction ("Identify all weaknesses, overclaimed connections, and unsupported assertions in this document. Use the CRITICAL/HIGH/MEDIUM/LOW severity framework.") and defines its own attack surface. No pre-structured claims to stress-test.
3. **Primary model prompt with mandatory open-ended pass** (acceptable): The primary model may draft a structured adversarial prompt, but the validator must ALSO perform an unconstrained open-ended pass where it defines its own scope of review. Both the structured and open-ended passes are documented.
4. **Primary model prompt only** (deprecated): The v2.0 default, where the primary model writes the adversarial prompt and the validator operates only within that scope. This is deprecated in v2.1 due to the demonstrated risk of prompt anchoring.

**Default for v2.1:** Option 3 (primary model prompt with mandatory open-ended pass) as the standard workflow, with Option 2 used for highest-stakes applications (patent claims, journal submissions, regulatory filings).

<!-- The Prompt Templates v0.1 restate this as: "the Drafter may pre-fill T2, but you edit the handoff before sending it. The model being checked must not write the prompt that checks it." -->

### 7.4 Change 4: Confidence Language Standards

**v2.0 status:** No explicit constraint on confidence language in protocol outputs.

**v2.1 addition:** Based on the Gemini adversarial finding that Claude used "directly validates," "empirically justified," and "practically written for" when the evidence supported weaker claims, the protocol now includes explicit confidence calibration language.

**Approved language by evidence level:**

| Evidence level | Approved language | Prohibited language |
|---|---|---|
| Direct empirical evidence in the target domain | "demonstrates," "establishes," "provides evidence that" | (none) |
| Empirical evidence in an adjacent domain | "provides analogous evidence," "suggests by parallel," "offers conceptual support" | "directly validates," "empirically justifies," "proves" |
| Theoretical framework from a different context | "offers a theoretical framework applicable to," "provides vocabulary for" | "is practically written for," "maps exactly to" |
| Single study, not yet replicated | "initial evidence suggests," "one study found" | "research shows," "studies demonstrate" |
| Author's analytical connection | "we argue that," "this connection suggests" | "this validates," "this confirms" |

## 8. Documentation Outputs

<!-- Sources: AoCA_v2.0.md section 7 (items a to i); v2.1 PROPOSED draft Change 2 (escalation log) and Change 3 (document both structured and open-ended passes); v2.0.1 Phase 2 and Phase 4 outputs (self-red-team report, audit trail); Prompt Templates v0.1 (fabrication log submission record). -->

Every application of the protocol produces:

- (a) The target document (version submitted for adversarial evaluation)
- (b) All adversarial prompts, verbatim, including the Accuracy Mandate, and a note of who authored each prompt (v2.1 Change 3)
- (c) All adversarial responses, unedited, including the open-ended pass when Option 3 is used (v2.1 Change 3)
- (d) The verification report on adversarial citations
- (e) All counter-arguments submitted
- (f) All re-evaluation responses
- (g) A scoring trajectory table (round-by-round scores from each validator)
- (h) A divergence log (findings where validators disagreed, with classification)
- (i) A fabrication log documenting any inaccurate citations detected during verification
- (j) The self-red-team report (v2.0.1, Phase 2)
- (k) The final revised draft with an audit trail of what changed and why (v2.0.1, Phase 4)
- (l) An escalation log of every human override of a CRITICAL finding, with written rationale (v2.1 Change 2)

The Prompt Templates v0.1 define a public fabrication log submission record (direction, verdict, claim excerpt, cited source, what the source actually says, human confirmation, models, category pack, whether the Accuracy Mandate was used, protocol version, consent). See `prompts/README.md`.

TODO(source not found): a v2.1 document that lists its own documentation requirements. Items (j) to (l) and the additions to (b) and (c) are assembled from the change descriptions, not from a v2.1 list.

## 9. Known limitations

<!-- Source: v2.1 PROPOSED draft, Change 1, Tier 1 ("Document the CMF risk in the protocol's known limitations section"). -->

- **Common-Mode Failure.** Models from different families can share training priors and agree on the same wrong answer. Tier 1 mitigation is procedural; Tiers 2 and 3 are not yet implemented in the sources.

TODO(source not found): a written known-limitations section for v2.1 beyond the CMF instruction above.

## Version history

<!-- Sources: AoCA_v2.0.md; AoCA_v2.0.1_self_red_team.md; v2.1 PROPOSED draft ("Version history entry"). -->

- **v1.0 (February to March 2026):** Claude drafts; Gemini validates in two parallel chats with asymmetric context; severity classification; iterative counter-argument loops with scoring.
- **v2.0 (March 13, 2026, locked):** Accuracy Mandate, Independent Verification, Brandolini Safeguard, three-chat configuration, fabrication log. Corrected March 13 to 14 (see `AoCA_v2.0.md`, Erratum).
- **v2.0.1 (March 23, 2026):** Self-Red-Team phase added; four-phase structure.
- **v2.1 (April 3, 2026, PROPOSED):** "Adds Common-Mode Failure mitigation (three-tier architecture), Human Overseer Protection Protocol (structured output, cooling period, tiebreaker, escalation log), Adversarial Prompt Decoupling (four implementation options with Option 3 as default), and Confidence Language Standards (five-level calibration table). Change triggered by live adversarial pass in which Gemini identified structural vulnerabilities not covered by v2.0, including the meta-level finding that the adversarial prompt itself was authored by the model being evaluated. This is the first protocol update triggered by the adversarial validator evaluating the protocol itself, rather than evaluating a target document."
