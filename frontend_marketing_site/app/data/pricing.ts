export type Tier = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
};

/**
 * PUBLIC_INTERFACE
 * Default pricing tiers for the Pricing section.
 */
const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$29",
    desc: "For small teams getting started",
    features: ["100 monthly builds", "Community support", "1 runner"],
  },
  {
    name: "Growth",
    price: "$199",
    desc: "For teams scaling delivery",
    features: ["5,000 monthly builds", "Email support", "Autoscaling runners"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large orgs & compliance",
    features: ["Unlimited builds", "SLA & SSO/SAML", "Dedicated support"],
  },
];

export default tiers;
