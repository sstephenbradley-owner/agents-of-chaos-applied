# Reference implementation: Tribunal (alpha)

`tribunal-alpha/` is a small web app that runs the model calls of an AoCA-style review with your own API keys (Anthropic, Google Gemini, or both). It is a static page plus three Netlify serverless functions. Status: alpha, provided as is, maintained as time allows.

## Nodes

Each node is a separate model call with deliberately limited context.

| Node | Sees | Does |
|---|---|---|
| Drafter | The full text | Extracts the claims a reader could check |
| Adversary | The claims only, never the source text | Argues why each claim might be wrong; in academic mode it reads the literature findings and may return "no objection" |
| Reference | The claims only | Checks them against the live record with search (open web by default; PubMed, Crossref and publisher records in academic mode). The only node with search |
| Evidence Appraiser (academic mode only) | The manuscript and its claims | Rates the strength of the manuscript's own evidence (design, controls, sample size, causal claims on correlational data), scoped to what the document form reports |
| Judge | Everything above | Rules on each claim, weighing a sourced finding above an unsourced objection. In academic mode it rules on three separate axes: is it true, is it new, is it evidenced |

**Modes.** Single model (every node on Claude, or every node on Gemini) or multi-model (each node assigned independently).

**Academic mode.** Every cited source's publication year is resolved server-side from PubMed and Crossref (`/api/pubyear`), and findings are split into before and after the manuscript's year, so later work cannot be used as prior art against a novelty claim.

**Input.** A link, a PDF or Word file, or pasted text.

## How this relates to the protocol

The app runs the model side of the Drafter, Adversary and Judge roles with context isolation and per-node model choice. It is not a complete AoCA run on its own. The Self-Red-Team pass, the Accuracy Mandate prompts from `prompts/`, the fabrication log and the human reconciliation loop are not built in and are still done by hand (see `../RUNNING_THE_PROTOCOL.md`). Its Judge issues rulings; the protocol's Judge template (T5) only classifies disagreements for the human, who decides.

## Known gaps

- Paywalled and login-walled pages do not fetch; paste the text instead.
- Literature checks reach abstracts reliably and full text only when it is open access.
- Provider safety filters can refuse a legitimate manuscript outright. This has been seen with select-agent microbiology at the Drafter node. The run stops at that node and reports it.
- No node yet checks a manuscript's results against the author's own data.

## Deploying

Drag the `tribunal-alpha` folder onto Netlify (Deploys tab, drag and drop). The functions deploy with it (`netlify.toml` sets `public/` as the site and `netlify/functions/` as the functions). Open the site, expand **Keys and models**, and paste a key.

| File | Role |
|---|---|
| `public/index.html` | The app. Loads mammoth.js and pdf.js from cdnjs to read Word and PDF files |
| `netlify/functions/llm.mjs` | Provider proxy (Anthropic with web search; Gemini with Google Search grounding) |
| `netlify/functions/fetch.mjs` | Fetches a public URL and strips it to readable text |
| `netlify/functions/pubyear.mjs` | DOI, PMID or title to an authoritative publication year |

## API keys

Keys go from your browser to the site's `llm` function and on to the provider with each request; the function does not store or log them. If you tick **Remember keys on this device**, the keys are saved in your browser's local storage in plain text. Leave it unticked on a shared machine. Read the code before entering keys, as you should with any tool that handles them.

## Changes from the deployed copy

The two built-in samples were replaced for this release. The sample paragraph and the sample abstract are now written for the demo, with invented subjects and planted errors, so the repository reproduces no third-party text and makes no claims about real people. Visible interface text was edited to remove em dashes. The model prompts are unchanged.
