export type Testimonial = { name: string; role: string; quote: string; initials: string };

/**
 * PUBLIC_INTERFACE
 * Mock testimonials used in Testimonials section.
 */
const data: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Director of Engineering, Northwind",
    quote: "OmniCI standardized our pipelines across 120+ services. Our weekly deploys tripled.",
    initials: "PS",
  },
  {
    name: "Miguel Rodriguez",
    role: "DevOps Lead, Contoso",
    quote: "The policy controls and auditability satisfied our security team on day one.",
    initials: "MR",
  },
  {
    name: "Sarah Chen",
    role: "VP Platform, Fabrikam",
    quote: "Integrations were painless. We had end-to-end delivery metrics in a week.",
    initials: "SC",
  },
];

export default data;
