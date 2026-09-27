# References

Identifiers were checked against primary listings (arXiv, DOI resolver, ACL Anthology, Hugging Face or GitHub) while preparing this release in September 2026. Entries that could not be confirmed were removed rather than kept with a flag, per the Accuracy Mandate. Where a paper's title changed between arXiv versions, the current title is given and the earlier one noted.

## Foundational and convergent

- Shapira, N., Wendler, C., Yen, A., Sarti, G., et al. (2026). *Agents of Chaos.* arXiv:2602.20021. Posted February 23, 2026. The protocol is named in acknowledgement of this paper; AoCA's cross-model workflow predates it by about five weeks.
- Agarwal, A. (2026). *Refute-or-Promote: An Adversarial Stage-Gated Multi-Agent Review Methodology for High-Precision LLM-Assisted Defect Discovery.* arXiv:2604.19049. Independent convergence on kill mandates, context asymmetry, a cross-model critic and a mandatory empirical gate.
- Shimao et al. (2026). *Collective AI can amplify tiny perturbations into divergent decisions.* arXiv:2603.09127 (v1 titled *Chaotic Dynamics in Multi-LLM Deliberation*). Posted March 10, 2026. Also appears in CS-002, where the Drafter wrongly called it fabricated because it was three days old.
- Chang, E. Y. (2024). *EVINCE: Optimizing Multi-LLM Dialogues Using Conditional Statistics and Information Theory.* arXiv:2408.14575 (v2 titled *EVINCE: Optimizing Adversarial LLM Dialogues*). A two-model adversarial dialogue framework that works toward consensus without a human decision step.

## Multi-agent debate and judge frameworks

- Du, Y., Li, S., Torralba, A., Tenenbaum, J. B., & Mordatch, I. (2023). *Improving Factuality and Reasoning in Language Models through Multiagent Debate.* arXiv:2305.14325.
- Chan, C.-M., et al. (2023). *ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate.* arXiv:2308.07201.
- Liang, T., et al. (2023). *Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate* (MAD). arXiv:2305.19118.
- Harrasse, A., Bandi, C., & Bandi, H. (2024). *Debate, Deliberate, Decide (D3): A Cost-Aware Adversarial Framework for Reliable and Interpretable LLM Evaluation.* arXiv:2410.04663.
- Pitre, P., et al. (2025). *CONSENSAGENT: Towards Efficient and Effective Consensus in Multi-Agent LLM Interactions Through Sycophancy Mitigation.* Findings of ACL 2025. doi:10.18653/v1/2025.findings-acl.1141.
- Verga, P., et al. (2024). *Replacing Judges with Juries: Evaluating LLM Generations with a Panel of Diverse Models* (PoLL). arXiv:2404.18796.
- Kalra, N., & Tang, L. (2025). *Verdict: A Library for Scaling Judge-Time Compute.* arXiv:2502.18018.
- Zhang, H., et al. (2025). *Stop Overvaluing Multi-Agent Debate: We Must Rethink Evaluation and Embrace Model Heterogeneity.* arXiv:2502.08788.
- *Multi-Agent Debate for LLM Judges with Adaptive Stability Detection.* (2025). arXiv:2510.12697.
- *Efficient LLM Safety Evaluation through Multi-Agent Debate.* (2025). arXiv:2511.06396.
- *SLMJury: Can Small Language Models Judge as Well as Large Ones?* (2026). arXiv:2606.07810. Cross-architecture debate underperformed the strongest individual judge.
- Kohli, G. (2026). *Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation Panels.* arXiv:2605.29800. Nine frontier judges carried about two independent votes' worth of information; panel accuracy fell 8 to 22 points below the independent-voting expectation.
- Kumarappan, A., & Mujoo, A. (2026). *Not Just RLHF: Why Alignment Alone Won't Fix Multi-Agent Sycophancy.* arXiv:2605.12991. One correctly arguing dissenter reduced answer-flipping under peer pressure by 54 to 73 percentage points.
- Kraidia et al. (2026). *When collaboration fails: persuasion-driven adversarial influence in multi-agent LLM debate.* Scientific Reports. doi:10.1038/s41598-026-42705-7.
- *Debating to verify: A robust and explainable multi-agent LLM system for fact-checking* (FC-MAD). (2026). ICT Express. doi:10.1016/j.icte.2026.05.017.
- Zheng, L., et al. (2023). *Judging LLM-as-a-judge with MT-Bench and Chatbot Arena.* arXiv:2306.05685.
- *When AIs Judge AIs: The Rise of Agent-as-a-Judge Evaluation for LLMs.* (2025). arXiv:2508.02994. Survey.

## Practitioner and single-model tools

- Karpathy, A. (2025). *LLM Council.* github.com/karpathy/llm-council. Described by its author as a Saturday hack, not maintained.
- `alecnielsen/adversarial-review`: Claude and GPT Codex adversarial code review loop. GitHub.
- `netbrah/awacs`: Adversarial Weighted Analysis with Cross-Synthesis; blue and red models with an arbiter and HIGH, MEDIUM, CONTESTED confidence labels. GitHub.
- `taka4rest/CriticChain`: LangGraph multi-agent adversarial review kept as a governance evidence log. AGPL-3.0. GitHub.
- Vaughan, D. (2026). *Cross-Model Adversarial Review: Using Multiple AI Models to Catch What One Misses.* Describes the Metaswarm review policy (fresh critic session, different model family, escalate to a human after three failures).
- Vectara. *HHEM 2.1 (hallucination_evaluation_model).* huggingface.co/vectara/hallucination_evaluation_model. Apache 2.0.
- Ravi, S. S., et al. (Patronus AI) (2024). *Lynx: An Open Source Hallucination Evaluation Model.* arXiv:2407.08488. Model weights CC BY-NC 4.0.

## Citation verification and peer-review integrity

- Ansari, S. (2026). *Compound Deception in Elite Peer Review: A Failure Mode Taxonomy of 100 Fabricated Citations at NeurIPS 2025.* arXiv:2602.05930.
- Russinovich et al. (2026). *Phantom References: Hallucinated Citations That Survive Peer Review at Top-Tier Conferences.* arXiv:2607.00738. Introduces RefChecker.
- Yuan et al. (2026). *CiteAudit: You Cited It, But Did You Read It?* arXiv:2602.23452.
- Dycke, N., & Gurevych, I. (2026). *Automatic Reviewers Fail to Detect Faulty Reasoning in Research Papers.* TACL 14, 465 to 488. doi:10.1162/tacl.a.642.
- GPTZero (2026). *ICLR 2026 hallucinated citations investigation.* gptzero.me/news/iclr-2026/. Fabricated citations found in 50 of 300 submissions checked.

## Evidence hierarchy and clinical origin

- Oxford Centre for Evidence-Based Medicine. *OCEBM Levels of Evidence.*
- Guyatt, G. H., et al. (2008). *GRADE: an emerging consensus on rating quality of evidence and strength of recommendations.* BMJ 336(7650):924 to 926.
- Higgins, J. P. T., et al. (eds.). *Cochrane Handbook for Systematic Reviews of Interventions.* Current version at training.cochrane.org/handbook.

## Cited in the case records

These appear in `case_studies/` as sources that were checked, disputed or misdescribed during runs. Each was located during or after the run it appears in.

- Carrera, I., & Maldonado-Ruiz, D. (2026). *The Plausibility Trap: Using Probabilistic Engines for Deterministic Tasks.* arXiv:2601.15130. Section 5 is titled "Case Study B: The Sycophancy Tax" (CS-002).
- Wang et al. (2026). Multi-evaluator framework, Visa Research. arXiv:2602.05110 (CS-002).
- Atwell et al. (2025). *BASIL.* arXiv:2508.16846 (CS-002).
- Min et al. (2025). *RAVEN.* arXiv:2504.12344 (CS-002, PR-001).
- *HiMATE.* (2025). arXiv:2505.16281 (CS-002).
- Arcuschin et al. (2026). arXiv:2602.10117 (CS-002).
- Zhou et al. (2025). *SR-DCR.* arXiv:2506.06020 (PR-001).
- Stein et al. (2026). *GATES.* arXiv:2602.20574 (PR-001).
- Shaw & Nave (2026). PsyArXiv preprint on acceptance of faulty AI reasoning ("cognitive surrender"). doi:10.31234/osf.io/yk25n_v1 (RUN-2026-04-03).
- Chandra, K., Kleiman-Weiner, M., Ragan-Kelley, J., & Tenenbaum, J. B. (2026). *Sycophantic Chatbots Cause Delusional Spiraling, Even in Ideal Bayesians.* arXiv:2602.19141 (RUN-2026-04-03).

## Red-teaming toolkits (adjacent, not equivalent)

- PyRIT (Microsoft), DeepTeam (Confident AI), promptfoo. These attack models; AoCA reviews documents.
