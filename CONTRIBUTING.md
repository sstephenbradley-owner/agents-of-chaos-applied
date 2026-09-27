# Contributing

## Maintenance status

The protocol is a reference release and is not actively maintained. The author will not be developing new protocol versions, reviewing implementation pull requests or answering support questions on a schedule. Issues and discussions are welcome, but a reply is not guaranteed.

Two things are open to contributions and will be reviewed when time allows:

1. **Fabrication-log entries** (`case_studies/fabrication_log.csv`)
2. **Category packs** for document types the prompts have not been tried on (`prompts/README.md`)

Forks and derivative protocols are welcome under Apache 2.0. Please cite the original (see `CITATION.cff`).

## Submitting a fabrication-log entry

A fabrication-log entry records a model misstating a source during a run: inventing one, attributing something to it that it does not support, overstating what it shows, or wrongly calling a real source fake. Entries from any role count (Drafter, Adversary, Verifier, Judge).

On Hugging Face, open a Discussion on the dataset page or a pull request that adds a row to the CSV. On the GitHub mirror, open an issue with the **Fabrication log entry** template (`.github/ISSUE_TEMPLATE/`) or a pull request. Fill in:

| Field | What to write |
|---|---|
| `case_id` | Your own short run ID, for example `EXT-yourhandle-001` |
| `date` | Date of the run (YYYY-MM-DD) |
| `date_note` | Optional. Use when the exact date is uncertain or a time zone matters |
| `role` | Drafter, Adversary, Verifier or Judge |
| `model_family` | For example Claude, Gemini, GPT, Llama. Add the model version in the issue if you know it |
| `claim` | The claim as the model made it, paraphrased if the document is private |
| `what_was_wrong` | `fabricated`, `misattributed`, `overstated` or `wrongly_rejected_real_source` |
| `how_detected` | Who caught it, in which step, and how it was confirmed |
| `source_record` | For your submission: a public identifier for the source that was misstated (DOI, arXiv ID, URL). Do not name private files. The author's own entries cite archive records here instead |

**Do not submit** confidential or proprietary text, personal data about anyone, or content from documents you are not allowed to share. The claim and the public source identifier are what matter.

**Evidence standard.** An entry should say how the error was confirmed against the primary source. "The model said it was fake" is not confirmation. Entries where the outcome was never checked are welcome if they say so, as E-01 in the existing log does.

## Submitting a category pack

A category pack is a short list of what to check for one document type, plus how sources rank in that field. See the existing packs in `prompts/README.md`. Open a pull request that adds a section there, and say whether you have run it. Untested packs are fine if labeled as untested.

## Style for contributed text

Plain statements, no em dashes, and no claim without a checkable source. The protocol's own standard applies to contributions about it.
