<!--
Source: AoCA_Protocol_v2_LOCKED.docx (v2.0, locked March 13, 2026).
Conversion notes:
- Text is converted from the locked document. Edits are limited to dash removal, three word substitutions required by the repository style rules (to "reliable", "evidentiary standard" and "body of prior art"), and bracketed ERRATUM notes.
- The ERRATUM notes come from AoCA_Protocol_v2.1_CORRECTED.docx. Despite its file name, that document is not the April v2.1 protocol. It is the same v2.0 text with a correction made March 13 to 14, 2026: human review of the PDF showed that the "Carrera et al." section title the locked version called fabricated does exist, and that the verification error was the primary model's, not the adversarial validator's. The file was labeled "v2.1" at the time, before the April 2026 v2.1 existed.
-->

# Agents of Chaos Applied (AoCA) Protocol

- **Version:** 2.0
- **Date:** March 13, 2026
- **Author:** Stephen Bradley, PharmD
- **Status:** LOCKED
- **Foundational reference:** Shapira et al. (2026), "Agents of Chaos," arXiv:2602.20021

> **ERRATUM (March 13 to 14, 2026).** Item (1) of the v2.0 change trigger below, and the matching bullet in the Appendix, are wrong. Carrera et al. (arXiv:2601.15130) does contain a Section 5 titled "5 CASE STUDY B: THE SYCOPHANCY TAX." The adversarial validator cited it correctly. The primary model's verification denied it, and human adjudication through direct PDF review confirmed the validator was right. The item is reclassified from adversarial fabrication to a primary model verification failure. The corrected wording is given in bracketed notes at each affected line.

## Version history

### v1.0 (February to March 2026)

Initial protocol developed through iterative practice across book manuscript sessions. Core architecture: Claude (Anthropic) as primary builder/drafter, Gemini (Google) as adversarial validator. Two parallel Gemini chats with asymmetric context (one context-aware from prior sessions, one fresh). Structured adversarial prompts with severity classification (CRITICAL/HIGH/MEDIUM/LOW). Iterative counter-argument loops with quantitative scoring. Applied successfully to multiple book chapters with documented score improvements (3.5/10 → 8.0/10 average across rounds).

v1.0 limitations discovered during use: No explicit constraint on citation accuracy. No mechanism to detect adversarial fabrication. No requirement for verifiable references. These gaps were not theoretical. They were discovered when the protocol was applied to its own prior art search (March 12 to 13, 2026) and the adversarial validator (Gemini) fabricated a section title, misattributed an institution, overstated the presence of a key term, and presented a blog post as a peer-reviewed publication.

> [ERRATUM: corrected text reads: "...the adversarial validator (Gemini) misattributed an institution, overstated the presence of a key term, and presented a blog post as a peer-reviewed publication. Additionally, the primary model (Claude) produced two verification errors: incorrectly denying the existence of a real section title in Carrera et al. (arXiv:2601.15130), and incorrectly labeling a real paper (Shimao et al., arXiv:2603.09127) as fabricated."]

### v2.0 (March 13, 2026): CURRENT

Adds the Accuracy Mandate and Fabrication Detection requirements. Adds the Brandolini Safeguard. Codifies the three-chat architecture (two context-aware, one context-blind) as the standard configuration. Documents the incentivized fabrication failure mode and the protocol's self-referential validation capability.

**Change trigger:** During the prior art search for the AoCA patent application, the adversarial validator produced the following verified inaccuracies:

(1) Claimed a paper contained a section titled "5 CASE STUDY B: THE SYCOPHANCY TAX." This section does not exist in the paper (Carrera et al., arXiv:2601.15130).

> [ERRATUM: corrected text reads: "(1) [CORRECTED: CLAUDE VERIFICATION ERROR] Gemini correctly cited that Carrera et al. (arXiv:2601.15130) contains Section 5 titled '5 CASE STUDY B: THE SYCOPHANCY TAX.' Claude's initial verification incorrectly denied this. Human adjudication via direct PDF review confirmed Gemini was correct. Reclassified from adversarial fabrication to primary model verification failure."]

(2) Claimed the phrase "sycophancy tax" was a formal contribution of BASIL (Atwell et al., arXiv:2508.16846). The phrase appears exactly once as an informal metaphor in later revisions.

> [ERRATUM: corrected text reads: "(2) Claimed the phrase 'sycophancy tax' was a formal contribution of BASIL (Atwell et al., arXiv:2508.16846). In BASIL, the phrase appears once as an informal metaphor. However, Carrera et al. use it as a formal section title (see corrected item 1 above). Gemini's attribution to BASIL specifically was overstated; the attribution to the broader literature was correct."]

(3) Attributed a Visa Research paper (Wang et al., arXiv:2602.05110) to Microsoft Research. All authors are @visa.com.

(4) Presented a personal blog post (programmer.ie) as a peer-reviewed "comprehensive architectural analysis."

(5) The primary model (Claude) initially labeled a real paper (Shimao et al., arXiv:2603.09127) as fabricated. The paper was 3 days old and not yet indexed by search engines.

These errors are not hallucination in the traditional sense. They are incentivized fabrication: the adversarial prompt created a reward structure where "finding devastating threats" was the valued behavior, and when real evidence was insufficient, the model manufactured evidence that appeared devastating. This is Brandolini's Law operating inside the protocol: fabricated threats are cheap to generate and expensive to debunk. Without correction, the protocol amplifies exactly the information asymmetry it was designed to correct.

# The Protocol

## 1. Architecture

The AoCA protocol uses a minimum of three AI models in a structured adversarial configuration:

**Primary Model (Builder):** Collaborates with the human researcher to produce the target document. In the current implementation, this is Claude (Anthropic). The primary model is optimized for helpfulness, which means it is structurally incapable of serving as its own adversarial check: its sycophancy bias will compound over extended sessions.

**Adversarial Validator(s) (Red Team):** Independent model(s) from a DIFFERENT model family tasked with finding structural vulnerabilities, factual errors, and logical failures in the target document. In the current implementation, this is Gemini (Google). The cross-provider requirement is mandatory: same-model-family validators share training biases that make certain error categories invisible.

**Verification Pass:** After the adversarial validators return their findings, the primary model independently verifies the validators' citations and claims before the human researcher acts on them. This step was added in v2.0 after discovering that adversarial validators fabricate evidence under pressure.

## 2. Chat Configuration (Standard)

The standard configuration uses three parallel adversarial chats:

**Chat A (Context-Aware):** Has access to prior session context, detailed source data, and background materials. Tests the document against a specialist reader's knowledge.

**Chat B (Context-Aware, Different Thread):** Has access to the same or similar prior context but operates in a separate conversation thread. Tests for reproducibility of adversarial findings across sessions.

**Chat C (Context-Blind):** Receives ONLY the target document and the adversarial prompt. No prior context, no background materials. Tests the document against a generalist reader's knowledge.

The asymmetric context design serves two purposes: (1) if all three chats identify the same vulnerability, the finding is reliable regardless of context; (2) if context-aware and context-blind chats diverge on the same evidence, the divergence is diagnostic. It identifies either a contextual bias or an editorial judgment call rather than a factual error.

## 3. The Adversarial Prompt

Every adversarial prompt MUST contain all of the following components:

### 3a. Role Assignment

Explicit instruction that the validator is an adversarial fact-checker, NOT a helpful assistant. The prompt must override the model's default RLHF-trained helpfulness. Example: "Your job is to find every structural vulnerability, factual error, and logical failure in this document. You are not here to help the author. You are here to break the document."

### 3b. Evaluation Categories

Domain-specific vulnerability taxonomy. For investigative nonfiction: factual verification, causal logic, source quality, structural critique, legal risk. For academic papers: methodology critique, statistical validity, citation accuracy, reproducibility. For policy analysis: stakeholder impact, implementation feasibility, cost-benefit accuracy.

### 3c. Severity Classification

Every identified issue must be rated: CRITICAL (document cannot be published with this error), HIGH (significantly undermines credibility), MEDIUM (weakens argument but not fatal), LOW (minor issue, fix if possible).

### 3d. Output Format

Structured fields for each finding: specific claim quoted from the document, identified problem, severity rating, recommended fix. Plus a final numerical reliability score (1 to 10 scale).

### 3e. THE ACCURACY MANDATE [NEW IN v2.0]

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

## 4. Iterative Counter-Argument Loops

After the first adversarial evaluation round:

- **Step 1:** The primary model and human researcher review the adversarial findings.
- **Step 2:** The primary model INDEPENDENTLY VERIFIES all citations from the adversarial validators. Any fabricated, misattributed, or overstated citations are flagged before counter-arguments are developed. [NEW IN v2.0]
- **Step 3:** Counter-arguments are developed for the highest-severity VERIFIED findings.
- **Step 4:** Counter-arguments are submitted to the adversarial validators with explicit instructions to evaluate whether each counter-argument: (a) resolves the original vulnerability, (b) introduces new vulnerabilities, (c) merits a specific strength rating.
- **Step 5:** Repeat until convergence (typically 2 to 3 rounds). Convergence is defined as the round-over-round score improvement falling below 0.5 points on the 10-point scale.

## 5. Divergence Analysis

When two or more adversarial validators evaluate the same evidence and reach substantively different conclusions (defined as a rating differential exceeding 4 points on a 10-point scale), the protocol classifies the item:

- **Convergent finding:** All validators agree on the vulnerability regardless of context. Classification: FACTUAL ERROR. Action: must fix.
- **Divergent finding (cross-model):** Validators from different model families disagree. Classification: possible TRAINING BIAS in one or more models. Action: human adjudicates, documents which model's priors are distorting assessment.
- **Divergent finding (intra-model):** Same model family with different context windows produces different assessments. Classification: CONTEXTUAL BIAS or EDITORIAL JUDGMENT CALL. Action: human evaluates whether the divergence reflects legitimate editorial disagreement or contextual priming distortion.

## 6. The Brandolini Safeguard [NEW IN v2.0]

Brandolini's Law states that the energy required to refute misinformation is an order of magnitude greater than the energy required to produce it. This asymmetry operates at three levels within the AoCA protocol:

- **Level 1 (the problem the protocol solves):** The primary model generates plausible-but-flawed research faster than any single reviewer can fact-check it. The protocol addresses this by deploying multiple adversarial validators.
- **Level 2 (the problem the protocol created in v1.0):** Adversarial validators under pressure to find threats generate fabricated citations faster than the human researcher can verify them. The Accuracy Mandate addresses this by requiring verifiable citations and explicitly devaluing unverifiable findings.
- **Level 3 (the meta-problem):** Even with the Accuracy Mandate, verification of adversarial findings requires significant human and computational effort. The protocol's independent verification step (Step 2 in Section 4) uses the primary model to pre-screen citations before the human researcher invests time in evaluation. This does not eliminate the Brandolini asymmetry but reduces it from an order-of-magnitude to a manageable ratio.

The Brandolini Safeguard is not optional. Without it, the protocol's adversarial architecture creates perverse incentives that amplify the very information asymmetry the protocol was designed to correct. This finding was documented empirically during the AoCA patent prior art search (March 12 to 13, 2026) and is reported in the companion journal publication.

## 7. Documentation Requirements

Every application of the protocol must produce:

- (a) The target document (version submitted for adversarial evaluation)
- (b) All adversarial prompts (verbatim, including the Accuracy Mandate)
- (c) All adversarial responses (unedited)
- (d) The primary model's verification report on adversarial citations [NEW IN v2.0]
- (e) All counter-arguments submitted
- (f) All re-evaluation responses
- (g) A scoring trajectory table (round-by-round scores from each validator)
- (h) A divergence log (any findings where validators disagreed, with classification)
- (i) A fabrication log documenting any inaccurate citations detected during verification [NEW IN v2.0]

This documentation serves three purposes: (1) it creates the evidentiary record for the author's case study inventory [redacted for release]; (2) it enables reproducibility by other researchers; (3) it satisfies the duty of candor requirements for any patent prosecution based on the protocol's outputs.

# Appendix: Rationale for v2.0 Changes

The v1.0 protocol assumed that adversarial validators would operate in good faith: that a model instructed to "find every vulnerability" would search for real vulnerabilities rather than manufacture them. This assumption was falsified on March 12, 2026, when the protocol was applied to its own prior art search.

The adversarial validator (Gemini) was given an explicit instruction to find prior art that could invalidate the patent application on the method. When the actual body of prior art was insufficient to support a "CRITICAL (10/10)" verdict on every claimed feature, the validator:

- Fabricated a section title ("5 CASE STUDY B: THE SYCOPHANCY TAX") in a real paper that does not contain it
  > [ERRATUM: corrected text reads: "[CORRECTED] Gemini correctly cited the section title '5 CASE STUDY B: THE SYCOPHANCY TAX' in Carrera et al. Claude's verification incorrectly denied it. Reclassified as primary model verification error."]
- Inflated a single informal use of "sycophancy tax" into a formal contribution that "definitively scooped" the applicant
  > [ERRATUM: corrected text reads: "Inflated a single informal use of 'sycophancy tax' in BASIL into a formal contribution, though the term IS formalized in Carrera et al. (see corrected item above)."]
- Misattributed a Visa Research paper to Microsoft Research, artificially inflating the perceived institutional threat
- Presented a personal blog post as a peer-reviewed publication
- Produced an overall verdict of "SCOOPED" and "Bordering on Non-Viable" based on these inaccurate claims

After independent verification corrected these errors, the same adversarial validator reassessed and arrived at materially different conclusions: the patent was upgraded from "bordering on non-viable" to "highly viable with claim refinement," and the journal publication was reclassified from "definitively scooped" to "not scooped."

The gap between the Round 1 verdict and the Round 2 verdict, caused entirely by the removal of fabricated and overstated evidence, represents the cost of the Brandolini asymmetry operating inside the protocol. If the human researcher had acted on the Round 1 verdict without verification, they would have abandoned a viable patent and a publishable paper based on manufactured threats.

This experience produced two protocol changes:

1. **The Accuracy Mandate (Section 3e):** Explicit instructions in every adversarial prompt that devalue unverifiable findings and require exact citations. This addresses the incentive structure by making fabrication less rewarding than verification.
2. **The Independent Verification Step (Section 4, Step 2):** A required intermediate step where the primary model checks the adversarial validator's citations before the human researcher invests time in counter-argument development. This addresses the Brandolini asymmetry by using computational resources rather than human attention for the initial debunking pass.

Together, these changes transform the protocol from a system that assumes adversarial good faith to a system that structurally enforces it. The protocol no longer trusts either the primary model (which is sycophantic) or the adversarial model (which may fabricate). It trusts only the intersection of their outputs after independent verification: the same evidentiary standard applied in clinical trials, where neither the treating physician nor the patient is trusted to evaluate outcomes without independent review.

- **Protocol status:** LOCKED as of March 13, 2026.
- **Next review:** After completion of three-chat red team round on updated patent and publication documents.
- **Patent coverage:** This protocol is described in Provisional Patent Application (AoCA v2, March 13, 2026). File patent BEFORE publishing protocol.

<!-- Historical note, not part of the locked text: the author later withdrew the patent pursuit and released the method openly (see the README section "Evolution"). The "Patent coverage" line above is kept because this file reproduces the locked v2.0 record. -->
