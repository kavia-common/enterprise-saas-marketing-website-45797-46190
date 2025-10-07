export type CaseStudy = { company: string; title: string; summary: string };

/**
 * PUBLIC_INTERFACE
 * Case study placeholders.
 */
const stories: CaseStudy[] = [
  {
    company: "Acme",
    title: "Acme Corp — 35% faster deployments",
    summary: "Replaced legacy pipelines with OmniCI to reduce cycle time and improve release reliability.",
  },
  {
    company: "Northwind",
    title: "Northwind -- Governance at scale",
    summary: "Adopted policy controls and audit trails to meet strict compliance requirements.",
  },
  {
    company: "Fabrikam",
    title: "Fabrikam -- End-to-end visibility",
    summary: "Unified delivery metrics and eliminated bottlenecks across 80+ services.",
  },
];

export default stories;
