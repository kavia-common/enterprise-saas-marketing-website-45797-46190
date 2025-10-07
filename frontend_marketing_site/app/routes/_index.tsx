import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import FeatureGrid from "~/components/FeatureGrid";
import Integrations from "~/components/Integrations";
import CaseStudies from "~/components/CaseStudies";
import Testimonials from "~/components/Testimonials";
import Pricing from "~/components/Pricing";
import CTASection from "~/components/CTASection";
import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";

// PUBLIC_INTERFACE
export const meta: MetaFunction = () => [
  { title: "OmniCI | Enterprise CI/CD Platform" },
  {
    name: "description",
    content:
      "A modern enterprise CI/CD platform. Automate, integrate, and ship faster with secure pipelines, scalable workflows, and deep ecosystem integrations.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-appbg text-textbase">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Integrations />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
}
