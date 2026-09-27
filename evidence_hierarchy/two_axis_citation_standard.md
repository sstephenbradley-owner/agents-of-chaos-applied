<!--
How this file was built.

The three staged citation-standard files (citation_standards_framework.md, citation_context_package.md, citation_quick_reference.md) are all Version 1.0, dated January 15, 2026. They describe the earlier standard: GRADE-style evidence levels plus recency windows by information type, with recency as the operative filter. They do not contain the two-axis rule, the T0 tiers, the structural tiers, or any Pydantic code.

The two-axis standard (v2.0, v2.1 and v2.2, all dated February 24, 2026) was found only in the full chat export (conversation of 2026-02-23 to 24, messages 58 to 69): the v2.0 framework file, two rounds of Gemini validation, the edits that produced v2.1 (T0 regulatory tier) and v2.2 (T0 canonical tier and the structural pathway), and the Pydantic validators. The latest framework text below is v2.2, reassembled by applying the recorded edits to the v2.0 file. Sections taken from the v1.0 staged files are marked.

Redactions: the project the standard was written for is described as "a molecular-visualization education project"; reviewer names removed; drug product names in code examples replaced with generic labels; a line about the author's clinical background and training provider removed from the footer.
-->

# Two-Axis Citation Standard (Evidence Hierarchy)

- **Version:** 2.2 (February 24, 2026)
- **Author:** Stephen Bradley, PharmD
- **Lineage:** v1.0 (January 15, 2026, recency-first) → v2.0 (two axes) → v2.1 (T0 regulatory tier) → v2.2 (T0 canonical tier, structural pathway). v2.1 and v2.2 each followed a Gemini validation pass on February 24, 2026.
- **Origin:** written as the citation standard for clinical educational content in a molecular-visualization education project, later imported into AoCA (see the README history).

## Overview

<!-- Source: v2.0 framework file, Overview. Project name genericized. -->

Content requires citations that are both **current** and **methodologically sound**. A two-axis framework governs all source selection: evidence quality (study design) takes precedence, with recency serving as a tiebreaker and a flag. Recency alone is insufficient justification for source selection.

The short form used in AoCA prompts: **quality governs; recency flags.** "A higher-tier older source outranks a lower-tier recent one." (Prompt Templates v0.1, T2)

Why the second axis was added: "The current framework prioritizes recency (≤5 years clinical, ≤10 years foundational) but evidence hierarchy, study design quality, is actually the more fundamental dimension. Recency without quality weighting could lead to citing a 2024 case report over a 2018 systematic review, which inverts the logic." (February 24, 2026)

## Axis 1: Evidence Quality Tier (Study Design)

<!-- Source: v2.0 framework table, with the v2.1 (T0) and v2.2 (T0_CANONICAL) rows added by the recorded edits. -->

| Tier | Study type | Use case |
|---|---|---|
| **T0** (regulatory) | FDA Prescribing Information, DailyMed, EMA monographs, evidence-based clinical practice guidelines (AHA, ACCP, IDSA) | Regulatory/canonical bypass: legally binding or guideline-defining documents; not classified within the EBM study design pyramid; always valid if current/active |
| **T0_CANONICAL** (database) | PubChem calculated properties, RxNorm drug relationships, NDC database entries | Database facts, not studies; canonical baseline data; T0-level bypass; verify source is current |
| **T1** | Systematic reviews, meta-analyses | Preferred for any clinical or pharmacological claim |
| **T2** | Randomized controlled trials (RCTs) | Drug efficacy, mechanism validation, dosing guidance |
| **T3** | Cohort studies, case-control studies, observational | Pharmacovigilance, real-world outcomes, population trends |
| **T4** | Case series, case reports, expert consensus, clinical guidelines (non-evidence-based) | Supplementary only; must be labeled as lower-evidence |

**Decision rule:** Always cite the highest available tier for a given claim. Do not substitute a T4 source for a T1 to T2 source on the basis of recency alone.

Why T0 exists (from the first validation pass): an FDA label "is not a systematic review, RCT, cohort, or case report. A user cannot accurately assign an Evidence Tier using the current definitions." And "If an FDA label dictates a black-box warning or a specific approved indication, it functionally overrides an older RCT in standard clinical practice."

## Axis 2: Recency Standard

<!-- Source: v2.0/v2.1 framework, Axis 2 table (the v2.1 edit removed a redundant "pharmacodynamics"). -->

| Content type | Recency requirement | Notes |
|---|---|---|
| Clinical guidance (dosing, indications, contraindications) | ≤ 5 years | Stricter; guidelines shift |
| Foundational PK/PD, MOA | ≤ 10 years | Older acceptable if confirmed by recent study |
| Structural/anatomical, fundamental biochemistry | > 10 years acceptable | Document rationale; flag for periodic review |

<!-- Source for the next paragraph: v1.0 staged files (citation_standards_framework.md, sections II and VI; citation_quick_reference.md). -->

The v1.0 standard also named a historical/context category (original approval studies, discovery milestones, historical prevalence) with no age limit, and listed what is NOT acceptable regardless of tier: clinical recommendations older than 10 years without recent confirmation; safety data superseded by newer warnings or boxed-warning changes; dosing protocols when practice has evolved; technology-dependent information that has been superseded.

## Two-Axis Decision Matrix

<!-- Source: v2.1 framework decision matrix (v2.0 matrix plus the T0 row). -->

```text
                    RECENCY
                Within window    Outside window
              ┌──────────────────┬──────────────────┐
         T0   │  ✅ Use freely   │  ✅ Use if active │  ← Regulatory bypass (verify currency)
              ├──────────────────┼──────────────────┤
         T1-2 │  ✅ Use freely   │  ⚠️ Use w/ flag  │
QUALITY       ├──────────────────┼──────────────────┤
         T3   │  ✅ Use w/ note  │  ⚠️ Flag + T1    │
              ├──────────────────┼──────────────────┤
         T4   │  ⚠️ Label clearly│  ❌ Avoid         │
              └──────────────────┴──────────────────┘
```

**Key:** ✅ Standard use | ⚠️ Requires documentation | ❌ Requires replacement or strong justification

## Structural Evidence Pathway (parallel to the clinical framework)

<!-- Source: v2.2 edit "Add structural evidence pathway section after the two-axis matrix." Dashes removed. -->

Structural biology data (PDB crystal structures, Cryo-EM, NMR) cannot be classified within the EBM clinical hierarchy. A crystal structure is not a cohort study. This data type has its own parallel validator, `StructuralSourceValidator`, governed by resolution quality (Å), not recency.

| Structural tier | Resolution | Decision | Use case |
|---|---|---|---|
| **S1** | < 2.5 Å | ✅ Standard use | Gold standard: MOA visualization, binding site annotation, side-chain positioning |
| **S2** | 2.5 to 4.0 Å | ✅ Use w/ note | Acceptable for general structural anatomy; note resolution in annotation |
| **S3** | > 4.0 Å, NMR, homology/docking models | ⚠️ Requires documentation | Flag potential inaccuracies; do not use for precise binding site claims |

**Key principle:** A 1.5 Å X-ray structure from 2015 is vastly superior to a 4.0 Å Cryo-EM structure from 2024. Recency does not govern structural data quality.

**NMR handling:** NMR structures do not report resolution in Å. Default to 99.9 Å → automatic S3 flag. Label methodology explicitly.

**Unified export:** Both `ClinicalCitationValidator` and `StructuralSourceValidator` output the same `ValidatedExportRecord` schema.

## Tiebreaker Rules

<!-- Source: v2.0 framework, Tiebreaker Rules. -->

1. **Quality over recency:** A T1 source from 8 years ago beats a T4 source from last year for any clinical claim.
2. **Recency as tiebreaker:** When two sources are the same tier, prefer the more recent.
3. **Recency as flag, not disqualifier:** An older T1/T2 source is flagged and documented but not automatically excluded. Document whether the guideline space has materially changed.
4. **Foundational exception:** Core PK/PD parameters (half-life, protein binding, VD) established before the recency window are acceptable if no contradicting recent data exists and a recent source confirms stability of the data.

## Documentation Requirements

<!-- Source: v2.0 framework, Documentation Requirements; annotation templates from v1.0 staged files (citation_quick_reference.md). -->

Every citation carries:

```text
Source: [Author, Year, Journal/Source]
DOI/URL: [link]
Evidence Tier: [T0 / T1 / T2 / T3 / T4, or S1 / S2 / S3 for structural data]
Recency Status: [Within window / Flagged, rationale below]
Rationale (if flagged): [1 to 2 sentences explaining why this source is used despite flag]
Validation: [PharmD reviewed, initials/date]
```

<!-- The "Evidence Tier" line originally listed T1 to T4; T0 and S1 to S3 are added to match v2.1 and v2.2. -->

Annotation templates carried over from v1.0:

- Established source (6 to 10 years): `[Citation]. *Established finding; confirmed in [recent guideline/review, YEAR].*`
- Foundational source (>10 years): `[Citation]. *Original pharmacokinetic study; values confirmed by [recent source, YEAR] and cited in current [specialty] guidelines.*`
- Historical context: `[Citation]. *Historical reference: original approval/discovery study.*`

## Domain Mapping

### Molecular-visualization education content (original domain)

<!-- Source: v2.0 framework, "Application by Content Type." Content types genericized from the original project's product names. -->

| Content | Primary source target | Notes |
|---|---|---|
| 3D model educational labels (MOA, receptor binding) | T1 to T2, foundational window | Core biochemistry; stable data acceptable |
| Dosing callouts or clinical use statements | T1 to T2, ≤5 years | Must reflect current guidelines |
| Pharmacovigilance / adverse effect notes | T1 to T3, ≤5 years | Post-marketing data evolves |
| Historical/context statements | T3 to T4 acceptable | Label evidence tier clearly |
| Public-facing clinical claims (e.g., QR landing pages) | T1 to T2, ≤5 years | Public-facing; highest standard applies |
| Calculated molecular properties | T0_CANONICAL | Database facts; verify source is current |
| Crystal, Cryo-EM or NMR structures | S1 to S3 | Resolution governs; recency does not |

### Clinical and drug information (AoCA category pack, draft)

<!-- Source: AoCA Prompt Templates v0.1, "Clinical and drug information" pack, marked for author review. -->

"Source ranking: current regulatory label and evidence-based guidelines alongside Tier 1; structural data from authoritative databases (e.g., PubChem, PDB) for chemistry claims." See `prompts/README.md`.

### Regulatory research questions (companion research persona)

<!-- Source: Regulatory Research Agent Prompt v3.0 (March 2026), RESEARCH METHODOLOGY. This is a separate source-priority order used for answering regulatory questions, not a renumbering of the tiers above. -->

| Priority | Sources |
|---|---|
| Tier 0: internal company sources (search first for company-specific questions) | Prior correspondence with the authority (meeting minutes, information requests, deficiency letters); internal regulatory strategy documents and submission plans; prior submission modules; internal CMC and manufacturing documentation; clinical study reports; prior responses to authority questions |
| Tier 1: primary public regulatory sources | Approval letters, labels/prescribing information, Federal Register notices, CFR citations, guidance documents, EMA EPARs, ICH guidelines |
| Tier 2: official agency databases | Drugs@FDA, Orange Book, Purple Book, CDER/CBER databases, EMA product databases, ClinicalTrials.gov |
| Tier 3: regulatory precedent | Prior approval actions for competitor/comparator products, advisory committee transcripts, warning letters |
| Tier 4: peer-reviewed literature | Published regulatory science, pharmacology, clinical data |
| Tier 5: secondary sources (flag as lower confidence) | Industry press, analyst reports, company press releases |

"When internal documents and public sources provide different or conflicting information, flag the discrepancy explicitly."

### Other domains

The AoCA category packs for investigative nonfiction ("primary documents over secondary reports over unattributed claims") and policy analysis ("statute and official data over agency guidance over advocacy material") carry their own one-line source rankings. See `prompts/README.md`.

TODO(source not found): a tier mapping for legal, financial or journalism sources beyond the one-line rankings in the category packs.

## Pydantic Enforcement

<!--
Source: citation_validator_v2_2.py (February 24, 2026), written in a Gemini validation pass and saved by Claude in the same session. Code is as recorded, with these edits: comments and docstrings de-branded and dashes removed; the Blender export payload class and test harness trimmed to one generic example; product names in examples replaced. Logic is unchanged.
Known gap in the recorded code: DecisionStatus has no separate "Flag + T1 Required" value in v2.2 (the v2.0 validator had FLAGGED_T1_REQ); outdated T3 maps to FLAGGED with a note instead. T0 sources are approved without checking currency; the note tells the user to verify it.
-->

```python
"""
Citation Validator v2.2
Two parallel validators (clinical/canonical and structural) with one export schema.
Developed collaboratively: Claude (Anthropic) + Gemini validation passes
Framework: Evidence Matrix v2.2
Date: February 24, 2026
"""

from enum import Enum
from typing import Optional, List
from pydantic import BaseModel, Field, model_validator


# 1. ENUMS

class EvidenceTier(str, Enum):
    """Clinical and regulatory/canonical source tiers."""
    T0_REGULATORY = "T0_REGULATORY"   # FDA Labels, DailyMed, EMA, evidence-based CPGs
    T0_CANONICAL  = "T0_CANONICAL"    # PubChem calculated properties, RxNorm APIs
    T1 = "T1"                          # Systematic reviews, meta-analyses
    T2 = "T2"                          # RCTs
    T3 = "T3"                          # Cohort, case-control, observational
    T4 = "T4"                          # Case series, expert consensus


class StructuralTier(str, Enum):
    """Structural data tiers: governed by resolution (Å), not EBM hierarchy."""
    S1 = "S1_HIGH_RES"   # < 2.5 Å: gold standard for MOA/binding site visualization
    S2 = "S2_MED_RES"    # 2.5 to 4.0 Å: acceptable with note
    S3 = "S3_LOW_RES"    # > 4.0 Å or homology/docking models: flagged


class ContentType(str, Enum):
    """Recency window classification for clinical/canonical sources."""
    CLINICAL     = "clinical_guidance"        # <= 5 years
    FOUNDATIONAL = "foundational_pk_pd_moa"   # <= 10 years
    STRUCTURAL   = "structural_anatomical"    # > 10 years acceptable


class DecisionStatus(str, Enum):
    """Unified decision output, consumed by both validators."""
    APPROVED      = "✅ Standard use"
    APPROVED_NOTE = "✅ Use w/ note"
    FLAGGED       = "⚠️ Requires documentation"
    REJECTED      = "❌ Avoid / Requires replacement"


# 2. UNIFIED EXPORT SCHEMA

class ValidatedExportRecord(BaseModel):
    """Same format regardless of source type."""
    source_name: str
    tier_label: str                    # e.g., "T1", "T0_CANONICAL", "S1_HIGH_RES"
    decision: DecisionStatus
    validation_note: Optional[str] = None
    year_published: Optional[int] = None


# 3. CLINICAL AND CANONICAL VALIDATOR
# Handles: T0_REGULATORY, T0_CANONICAL, T1, T2, T3, T4

class ClinicalCitationValidator(BaseModel):
    source_name: str
    year_published: int
    tier: EvidenceTier
    content_type: ContentType

    export_record: Optional[ValidatedExportRecord] = Field(default=None, init_var=False)

    @model_validator(mode='after')
    def evaluate(self) -> 'ClinicalCitationValidator':
        age = 2026 - self.year_published

        if self.content_type == ContentType.CLINICAL:
            is_within_window = age <= 5
        elif self.content_type == ContentType.FOUNDATIONAL:
            is_within_window = age <= 10
        else:
            is_within_window = True  # STRUCTURAL content type: always within window

        decision = DecisionStatus.REJECTED
        note = None

        # T0 bypass: regulatory and canonical database sources
        if self.tier in [EvidenceTier.T0_REGULATORY, EvidenceTier.T0_CANONICAL]:
            decision = DecisionStatus.APPROVED
            note = "Canonical/Regulatory bypass. Verify source is current/active."

        elif self.tier in [EvidenceTier.T1, EvidenceTier.T2]:
            if is_within_window:
                decision = DecisionStatus.APPROVED
            else:
                decision = DecisionStatus.FLAGGED
                note = "Older T1/T2. Verify guidelines haven't materially changed."

        elif self.tier == EvidenceTier.T3:
            if is_within_window:
                decision = DecisionStatus.APPROVED_NOTE
                note = "Label as observational/pharmacovigilance data."
            else:
                decision = DecisionStatus.FLAGGED
                note = "Outdated T3. Must pair with a recent T1 source."

        elif self.tier == EvidenceTier.T4:
            if is_within_window:
                decision = DecisionStatus.FLAGGED
                note = "T4 source. Must label clearly as lower-evidence."
            else:
                decision = DecisionStatus.REJECTED
                note = "Outdated T4 source. Requires replacement."

        self.export_record = ValidatedExportRecord(
            source_name=self.source_name,
            tier_label=self.tier.value,
            decision=decision,
            validation_note=note,
            year_published=self.year_published
        )
        return self


# 4. STRUCTURAL VALIDATOR
# Handles: PDB crystal structures, Cryo-EM, NMR
# Quality governed by resolution (Å), not EBM hierarchy, not recency

class StructuralSourceValidator(BaseModel):
    source_name: str           # e.g., "PDB ID: 7D28"
    methodology: str           # e.g., "X-ray Diffraction", "Cryo-EM", "NMR"
    resolution_angstroms: float
    year_deposited: int

    tier: Optional[StructuralTier] = Field(default=None, init_var=False)
    export_record: Optional[ValidatedExportRecord] = Field(default=None, init_var=False)

    @model_validator(mode='after')
    def evaluate(self) -> 'StructuralSourceValidator':
        # Resolution governs tier: physics, not EBM
        if self.resolution_angstroms <= 2.5:
            self.tier = StructuralTier.S1
            decision = DecisionStatus.APPROVED
            note = f"High resolution ({self.resolution_angstroms}Å). Optimal for MOA and binding site visualization."
        elif self.resolution_angstroms <= 4.0:
            self.tier = StructuralTier.S2
            decision = DecisionStatus.APPROVED_NOTE
            note = f"Medium resolution ({self.resolution_angstroms}Å). Acceptable for general structural anatomy."
        else:
            self.tier = StructuralTier.S3
            decision = DecisionStatus.FLAGGED
            note = f"Low resolution ({self.resolution_angstroms}Å) or NMR/homology model. Flag for potential inaccuracies in side-chain positioning."

        self.export_record = ValidatedExportRecord(
            source_name=f"{self.source_name} ({self.methodology})",
            tier_label=self.tier.value,
            decision=decision,
            validation_note=note,
            year_published=self.year_deposited
        )
        return self


# 5. EXAMPLE

if __name__ == "__main__":
    records: List[ValidatedExportRecord] = [
        ClinicalCitationValidator(
            source_name="Systematic review (example)",
            year_published=2016,
            tier=EvidenceTier.T1,
            content_type=ContentType.FOUNDATIONAL,
        ).export_record,
        ClinicalCitationValidator(
            source_name="Case series (example)",
            year_published=2023,
            tier=EvidenceTier.T4,
            content_type=ContentType.FOUNDATIONAL,
        ).export_record,
        ClinicalCitationValidator(
            source_name="Current prescribing label (example)",
            year_published=2025,
            tier=EvidenceTier.T0_REGULATORY,
            content_type=ContentType.CLINICAL,
        ).export_record,
        StructuralSourceValidator(
            source_name="PDB ID: 1D3Z (Ubiquitin NMR)",
            methodology="NMR",
            resolution_angstroms=99.9,  # NMR default: forces S3 flag
            year_deposited=1999,
        ).export_record,
    ]
    for r in records:
        print(f"[{r.tier_label}] {r.source_name} -> {r.decision.value}")
        if r.validation_note:
            print(f"   note: {r.validation_note}")
```

<!-- The age calculation is fixed to 2026 in the recorded code (current_year = 2026). -->

TODO(source not found): an AoCA-side implementation that applies this validator to Adversary citations (for example, filling T2's EVIDENCE TIER field automatically). The recorded code targets citations in educational content, not reviewer findings.

## References cited by the v1.0 standard

<!-- Source: citation_standards_framework.md (v1.0), "References for this framework." -->

1. Chow NLY, Tateishi N, Goldhar A, et al. Does knowledge have a half-life? An observational study analyzing the use of older citations in medical and scientific publications. *BMJ Open*. 2023;13(5):e072374.
2. OCEBM Levels of Evidence Working Group. The Oxford Levels of Evidence 2. Oxford Centre for Evidence-Based Medicine. https://www.cebm.ox.ac.uk/resources/levels-of-evidence/ocebm-levels-of-evidence
3. Guyatt GH, Oxman AD, Vist GE, et al. GRADE: an emerging consensus on rating quality of evidence and strength of recommendations. *BMJ*. 2008;336(7650):924-926.
4. American Society of Health-System Pharmacists. AHFS Drug Information. Bethesda, MD: ASHP; [updated annually].
5. Accreditation Council for Continuing Medical Education (ACCME). ACCME Accreditation Criteria. Updated 2021.
