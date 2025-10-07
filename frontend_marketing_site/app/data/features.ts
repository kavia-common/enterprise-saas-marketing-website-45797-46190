export type Feature = { title: string; desc: string; icon: string };

/**
 * PUBLIC_INTERFACE
 * Ocean Professional default feature mocks.
 */
const features: Feature[] = [
  { title: "Pipeline as Code", desc: "Declarative pipelines, reusable templates, and versioned workflows.", icon: "⚙️" },
  { title: "Policy & Compliance", desc: "Role-based access, signed artifacts, and audit trails.", icon: "🛡️" },
  { title: "Scalable Runners", desc: "Autoscaling runners across cloud and on-prem with throttling and quotas.", icon: "📈" },
  { title: "Observability", desc: "Pipeline insights, DORA metrics, and bottleneck detection.", icon: "📊" },
  { title: "Secrets Management", desc: "Integrated vaulting with fine-grained scope and rotation support.", icon: "🔐" },
  { title: "Monorepo Support", desc: "Smart change detection and parallelized build matrices.", icon: "🧩" },
];

export default features;
