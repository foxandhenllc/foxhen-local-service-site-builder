export const sample = {
  "repoName": "foxhen-local-service-site-builder",
  "title": "Local Service Site Builder",
  "subtitle": "Landing page planning for service businesses",
  "serviceLine": "Local website build sprint",
  "heroTitle": "Plan a credible local-service website in one tight sprint.",
  "heroCopy": "A demo builder for a fictional service company: sections, conversion blocks, trust proof, mobile checks, and launch notes are all staged in one workspace.",
  "primaryAction": "Assemble page",
  "secondaryAction": "Check mobile",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-local-service-site-builder",
  "liveDemoUrl": "https://foxhen-local-service-site-builder.vercel.app",
  "theme": {
    "accent": "#1b5a42",
    "accent2": "#f0a84b",
    "ink": "#07170f",
    "soft": "#eaf8ef",
    "warm": "#fff1dc",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Launch sections",
      "value": "7",
      "note": "above fold mapped"
    },
    {
      "label": "Mobile score",
      "value": "96%",
      "note": "+19 pts"
    },
    {
      "label": "CTA clarity",
      "value": "A",
      "note": "single path"
    }
  ],
  "stages": [
    {
      "label": "Offer",
      "detail": "Clarify service, service area, promise, and conversion action above the fold.",
      "status": "ready",
      "owner": "Strategy",
      "index": 1
    },
    {
      "label": "Proof",
      "detail": "Add review blocks, credentials, before-after signals, and practical buyer objections.",
      "status": "active",
      "owner": "Design",
      "index": 2
    },
    {
      "label": "Conversion",
      "detail": "Map calls, forms, booking links, and fallback contact states.",
      "status": "waiting",
      "owner": "Owner",
      "index": 3
    },
    {
      "label": "Launch",
      "detail": "Bundle copy, responsive QA, and a deploy checklist for handoff.",
      "status": "queued",
      "owner": "Studio",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Hero section",
      "detail": "Align headline, service area, and CTA",
      "status": "ready"
    },
    {
      "title": "Trust rail",
      "detail": "Place proof where buyer hesitation appears",
      "status": "active"
    },
    {
      "title": "Service cards",
      "detail": "Cut vague copy and make each card actionable",
      "status": "waiting"
    },
    {
      "title": "Launch checklist",
      "detail": "Prepare SEO, QA, and handoff notes",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Section map",
      "detail": "A conversion-focused page outline with hierarchy and proof placement."
    },
    {
      "title": "Copy pass",
      "detail": "Plain-language service copy tuned for local search intent."
    },
    {
      "title": "Launch QA",
      "detail": "Mobile, contrast, CTA, and form-readiness checks."
    }
  ],
  "timeline": [
    {
      "time": "0-3 hrs",
      "detail": "Intake and page architecture"
    },
    {
      "time": "3-18 hrs",
      "detail": "Build first responsive page pass"
    },
    {
      "time": "18-24 hrs",
      "detail": "QA, copy polish, and publish notes"
    }
  ],
  "proof": [
    "Fits fast fixed-fee website offers.",
    "Shows practical conversion thinking, not just visual mockups.",
    "Works with fictional business data and no external services."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
