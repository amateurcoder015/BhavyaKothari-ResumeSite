export const PROJECTS_DATA = [
  {
    id: "01",
    title: "SIP Performance Tracker & Recommendation Engine",
    subtitle: "Mutual Fund SIP Return Analyzer, Benchmark Alpha & Dynamic Recommendations",
    category: "FINTECH / QUANT ANALYTICS",
    badgeColor: "blue",
    featured: true,
    tech: ["Python", "Pandas", "NumPy", "XIRR / CAGR", "Benchmark Alpha", "Financial Analytics"],
    description: "An end-to-end quantitative financial tool that evaluates mutual fund SIP investments against key market benchmarks (Nifty50 / S&P500). Computes true annualized returns via XIRR, rolling return distributions, volatility metrics, and algorithmic asset allocation advice.",
    githubUrl: "https://github.com/amateurcoder015/SIP-PERFORMANCE-TRACKER-BENCHMARK-COMPARISON-RECOMMENDATION-ENGINE-MASTER",
    secondaryGithubUrl: "https://github.com/amateurcoder015/Sip-Return-Analyzer",
    visualType: "sip_chart",
    metrics: [
      { label: "Return Calculation", value: "Exact XIRR / CAGR" },
      { label: "Benchmark Compare", value: "Nifty 50 vs S&P 500" },
      { label: "Risk Analytics", value: "Alpha, Beta & Sharpe" }
    ]
  },
  {
    id: "02",
    title: "Indian Fixed Income Risk Analytics Engine",
    subtitle: "Yield Curve Modeling, Bond Duration & Interest Rate Sensitivity Analysis",
    category: "QUANT FINANCE / RISK",
    badgeColor: "green",
    featured: true,
    tech: ["Python", "Yield Curves", "Macaulay Duration", "YTM", "Credit Spreads", "Risk Sensitivity"],
    description: "Quantitative risk modeling system tailored for Indian Sovereign and Corporate Debt instruments. Calculates Macaulay and Modified Duration, Convexity, Yield-to-Maturity (YTM) curves, and stress-tests portfolio sensitivity under simulated Central Bank rate hikes.",
    githubUrl: "https://github.com/amateurcoder015/Indian-Fixed-Income-Risk-Analytics-Engine",
    visualType: "yield_curve",
    metrics: [
      { label: "Risk Metric", value: "Modified Duration & Convexity" },
      { label: "Market Focus", value: "Indian Debt Securities" },
      { label: "Stress Testing", value: "Yield Curve Shifting" }
    ]
  },
  {
    id: "03",
    title: "Multi-Stage DCF Valuation & Sensitivity Engine",
    subtitle: "Intrinsic Stock Valuation, Dynamic WACC & Terminal Value Sensitivity",
    category: "FINANCIAL MODELLING",
    badgeColor: "green",
    featured: false,
    tech: ["Python", "Financial Modeling", "DCF", "WACC Estimation", "Terminal Growth", "Sensitivity Heatmaps"],
    description: "Institutional-grade financial valuation engine implementing multi-stage Discounted Cash Flow analysis. Dynamically estimates Cost of Equity (CAPM) and WACC, projects 10-year free cash flows (FCFF), and outputs interactive 2D sensitivity matrices for valuation scenarios.",
    githubUrl: "https://github.com/amateurcoder015/DCF-Valuation-Model",
    visualType: "dcf_matrix",
    metrics: [
      { label: "Valuation Model", value: "Multi-Stage DCF" },
      { label: "Cost of Capital", value: "Dynamic WACC Engine" },
      { label: "Output Format", value: "2D Sensitivity Heatmap" }
    ]
  },
  {
    id: "04",
    title: "Agentic AI for Self-Healing System Support",
    subtitle: "Autonomous AI Agents for Headless E-commerce Migration & Error Remediation",
    category: "ARTIFICIAL INTELLIGENCE / AGENTS",
    badgeColor: "purple",
    featured: true,
    tech: ["Python", "Multi-Agent AI", "Autonomous Debugging", "LLM Agents", "Error Diagnostics"],
    description: "An agentic multi-agent architecture built to maintain high system reliability during headless microservices migrations. Agents inspect live logs, isolate API contract mismatches, simulate fix paths, and automatically trigger self-healing recovery routines.",
    githubUrl: "https://github.com/amateurcoder015/Agentic-AI-for-Self-Healing-Support-During-Headless-E-commerce-Migration",
    visualType: "ai_network",
    metrics: [
      { label: "Architecture", value: "Multi-Agent System" },
      { label: "Primary Function", value: "Auto-Debugging & Healing" },
      { label: "Domain", value: "Headless E-commerce" }
    ]
  },
  {
    id: "05",
    title: "Explainable Phishing Detection System (BERT + XAI)",
    subtitle: "Transformer NLP Model with SHAP & LIME Interpretability Layers",
    category: "MACHINE LEARNING / NLP",
    badgeColor: "purple",
    featured: false,
    tech: ["Python", "BERT Transformers", "PyTorch", "SHAP / LIME", "Cybersecurity", "Explainable AI"],
    description: "Deep learning cyber-threat detector powered by fine-tuned BERT embeddings. Features integrated Explainable AI (XAI) overlays that highlight exact token attention weights, explaining to security analysts why a message was flagged as malicious.",
    githubUrl: "https://github.com/amateurcoder015/Explainable-Phishing-Detection-BERT",
    secondaryGithubUrl: "https://github.com/amateurcoder015/interpretable-spam-detection-system-using-BERT",
    visualType: "bert_nlp",
    metrics: [
      { label: "Core Model", value: "Fine-Tuned BERT" },
      { label: "Interpretability", value: "SHAP Token Attribution" },
      { label: "Domain", value: "Cybersecurity & NLP" }
    ]
  },
  {
    id: "06",
    title: "Matcha — Swipe-to-Collab Platform",
    subtitle: "Hinge-Style Influencer & Brand Matching App with Transparent Payout Visibility",
    category: "FULL-STACK / PRODUCT",
    badgeColor: "blue",
    featured: false,
    tech: ["JavaScript", "React", "Node.js", "Express", "Tailwind CSS", "Real-Time Chat"],
    description: "A modern creator economy platform bringing double opt-in matching to influencer marketing. Features upfront payout transparency, budget-filtered deal cards, and instant chat unlock upon mutual agreement.",
    githubUrl: "https://github.com/amateurcoder015/matcha-swipe-to-collab",
    visualType: "matcha_platform",
    metrics: [
      { label: "User Flow", value: "Double Opt-In Swipe" },
      { label: "Payout System", value: "Transparent Budget Filtering" },
      { label: "Stack", value: "React + Node + Tailwind" }
    ]
  }
];
