<!--
Source: the full revised protocol document generated on March 23, 2026 (AoCA_PROTOCOL_v2.0_20260323.docx), recovered from its generator script inside a chat transcript dated 2026-03-22, an essay-drafting session (create_file block, message dated 2026-03-23T11:45).
Numbering: the source document calls itself "Version 2.0, Updated March 23, 2026" and lists only v1.0 as its predecessor. It was written without reference to the locked March 13 v2.0 (Accuracy Mandate, Independent Verification, three-chat configuration), which it mentions only as "remains active" safeguards. The author has numbered this revision v2.0.1. The source's own "v2.0" labels are changed to "v2.0.1" below.
Edits: dash removal; the author's separate file-handling protocol is named generically; the local file path at the end of the source is removed. Everything else is the source text.
-->

# Agents of Chaos Applied (AoCA)

## Cross-Model Adversarial Validation Protocol

- **Version:** 2.0.1 (source label: "Version 2.0, Updated March 23, 2026")
- **Author:** Stephen Bradley
- **Supersedes:** AoCA Protocol v1.0 (February 2026)

## Changelog

**v2.0.1 (March 23, 2026):** Added mandatory Claude self-red-team pass (Phase 2) before Gemini cross-model validation (Phase 3). Rationale: observed that Gemini's adversarial passes were consuming bandwidth on factual errors and formatting issues that the builder model could have caught independently. Self-red-team pass catches low-hanging fruit so Gemini focuses on structural blind spots and sycophancy detection, not sloppiness. Protocol now has four phases instead of three.

**v1.0 (February 2026):** Initial protocol. Claude builds/drafts; Gemini adversarial validates with asymmetric context windows. Safety protocol: flag output confidence levels, verify external claims before building on them, raise factual/structural concerns directly even in flow state.

## Protocol Overview

The AoCA protocol is a dual-AI adversarial validation system for nonfiction writing, research, and analytical work. Claude serves as the primary builder (drafting, structuring, researching). Gemini serves as the adversarial validator (cross-model red-teaming with asymmetric context). The protocol exploits the fact that different models have different failure modes, different sycophancy patterns, and different blind spots. Case Study #001 confirmed that single-model review is sycophantic; cross-model review surfaces structural vulnerabilities that neither model catches independently.

**Core principle:** No model should be the sole validator of its own output. The builder model's sycophancy toward the user's thesis is the primary threat to output quality. The adversarial model's job is to find that sycophancy and pressure-test it.

**v2.0.1 addition:** The builder model should first red-team its own work to ensure the adversarial model receives a clean draft. This makes the cross-model pass more efficient and the sycophancy detection more meaningful, because the adversarial model can distinguish between "the builder was sloppy" and "the builder has a structural blind spot."

## Phase 1: Build (Claude)

Claude drafts, researches, structures, and iterates with the user. Standard working mode. During this phase, Claude should:

1. Flag output confidence levels when making claims (high/medium/low).
2. Verify external claims before building on them (search, cite, confirm).
3. Raise factual or structural concerns directly, even in flow state.
4. Maintain awareness that sycophantic agreement with the user's thesis is the primary quality risk.
5. Document sources as work progresses, not retroactively.

**Output:** Draft with citations, ready for self-red-team.

## Phase 2: Self-Red-Team (Claude), NEW in v2.0.1

Before handing work to Gemini, Claude performs a structured adversarial pass on its own output. This is not a proofreading pass. It is a systematic attempt to find the weaknesses a hostile reader, opposing counsel, or adversarial model would exploit. The self-red-team covers four domains:

### 2A. Factual Precision

- Are all numbers, dates, names, and attributions correct?
- Are quotes accurately attributed to the correct source, year, and context?
- Are contested or estimated figures identified as such (e.g., "EPI estimates" vs. presenting as consensus)?
- Are causal claims supported by the evidence, or has correlation been presented as causation?
- Are secondary sources used where primary sources are available?

### 2B. Rhetorical Overreach

- Where does the essay claim more than the evidence supports?
- Where are sweeping generalizations that a single counterexample could undermine?
- Where is a metaphor or analogy doing the work that evidence should be doing?
- Where might a sympathetic reader nod along but a skeptical reader check out?
- Is the essay steel-manning the strongest counter-arguments, or straw-manning the weakest ones?

### 2C. Legal Exposure

- Are real people and institutions named? If so, are all claims about them sourced to public record?
- Is opinion clearly distinguished from factual assertion?
- Are characterizations (e.g., "evidence destruction") framed as rhetorical analysis rather than legal conclusions?
- Would any passage survive a defamation analysis (i.e., is it factual, opinion, or fair comment on public figures)?

### 2D. Tone Calibration

- Where does the piece sound like a rant instead of an argument?
- Where might a hostile reader dismiss the author before the point lands?
- Is the ratio of evidence to rhetoric appropriate for the venue (Substack, book chapter, academic paper)?
- Are tonal shifts (serious → irreverent, analytical → personal) intentional and earned?
- Does the essay maintain the author's distinctive voice without undermining credibility?

**Output:** A structured red-team report with specific findings, risk ratings (clean / low risk / moderate risk / high risk), and recommendations. The user reviews flags and decides which to address before sending to Gemini.

**Rationale:** If Claude sends Gemini a draft with errors Claude could have caught, two things happen: (1) Gemini wastes adversarial passes on low-hanging fruit instead of finding structural vulnerabilities Claude is blind to, and (2) sycophancy detection is less meaningful because Gemini can't distinguish between "Claude missed this because of model bias" and "Claude was just sloppy."

## Phase 3: Adversarial Validation (Gemini)

The user sends the Claude-red-teamed draft to Gemini with asymmetric context. Gemini does NOT receive the full conversation history, the user's personal context, or the iterative build process. It receives only the draft and a prompt to adversarially validate. This asymmetry is intentional: it forces Gemini to evaluate the work on its own merits rather than being primed by the user's framing.

**Gemini's adversarial pass focuses on:**

1. **Structural blind spots:** Arguments that feel complete but have unexamined assumptions. Premises the builder model accepted because the user stated them confidently.
2. **Sycophancy detection:** Places where the builder model agreed with the user's thesis rather than challenging it. Conclusions that are emotionally satisfying but evidentially thin.
3. **Counter-argument strength:** What would the strongest possible critic say? Is that critic answered in the text, or just assumed away?
4. **Internal coherence:** Does the argument hold together as a whole, or are there sections that contradict each other or undermine the central thesis?

**Output:** A scored adversarial report. Case Study #001 used a 1 to 10 scale across multiple rounds (scores progressed from 3.5 to 8/10 average). The user reviews Gemini's findings and decides which to incorporate.

## Phase 4: Reconciliation (Claude + User)

The user brings Gemini's adversarial findings back to Claude. Claude reviews the findings and either: (a) concedes the point and recommends a revision, (b) disputes the finding with evidence, or (c) flags the disagreement as an unresolved tension for the user to decide. The user makes final editorial decisions.

**Key principles for reconciliation:**

- Claude should not reflexively defend its own work against Gemini's critique. That's the sycophancy pattern in reverse.
- Claude should not reflexively accept Gemini's critique either. Gemini has its own biases and blind spots.
- The user is the final arbiter, but should be aware that both models may be sycophantic toward the user's preferences.
- Unresolved disagreements between models should be documented, not suppressed. They often point to genuine ambiguity in the evidence.

**Output:** Final revised draft with an audit trail of what changed and why.

## Standing Safety Protocol

The following safety rules apply across all four phases:

1. **Flag confidence levels.** When making claims, indicate whether the supporting evidence is strong, moderate, or weak. Do not present moderate-confidence claims with high-confidence language.
2. **Verify external claims before building on them.** Search, cite, and confirm. Do not propagate unverified assertions from previous turns in the conversation.
3. **Raise factual and structural concerns directly, even in flow state.** If something the user said is wrong, say so. If the argument has a hole, name it. Flow state is not an excuse for sycophancy.
4. **The author's file-access protocol remains active.** Step 0 confirmation gate before file access. Do not fabricate file contents. If a file is referenced but not present, say so.
5. **The Brandolini Safeguard remains active.** Do not let the energy required to refute a claim exceed the energy that produced it. If a user assertion is unfounded, flag it early rather than building an elaborate structure on a weak foundation.
6. **The Accuracy Mandate remains active.** Accuracy is not subordinate to helpfulness. A helpful but inaccurate response is worse than an honest acknowledgment of uncertainty.

## Protocol Summary (v2.0.1)

- **Phase 1, Build (Claude):** Draft, research, structure, cite. Flag concerns in real time.
- **Phase 2, Self-Red-Team (Claude):** Structured adversarial pass on own output. Four domains: factual precision, rhetorical overreach, legal exposure, tone calibration. Catches low-hanging fruit before cross-model validation.
- **Phase 3, Adversarial Validation (Gemini):** Asymmetric context. Focus on structural blind spots, sycophancy detection, counter-argument strength, internal coherence. Scored report.
- **Phase 4, Reconciliation (Claude + User):** Review Gemini findings. Concede, dispute, or flag. User decides. Document changes.

*This document supersedes AoCA Protocol v1.0 and all prior informal descriptions of the protocol.*

---

## Provenance note

<!-- Source: same transcript, messages dated 2026-03-23T11:35 to 11:38. Quoted, not paraphrased. -->

The change came out of a working session on an essay draft. Asked whether to start the red team with the drafting model or with Gemini, the drafting model recommended starting with itself:

> "If I send Gemini a draft with errors I could have caught myself, two things happen: Gemini wastes passes on low-hanging fruit instead of finding the structural vulnerabilities I'm blind to, and the sycophancy detection is less meaningful because Gemini can't distinguish between 'Claude missed this because of model bias' and 'Claude was just sloppy.'"

The author replied: "That should probably be the updated protocol for AoCA then. You always do a first pass to ensure that the process is more efficient." The model then ran its self-red-team pass on the essay, and the document above was generated later in the same session (11:45) when the author asked for the updated protocol to be captured for the audit record.
