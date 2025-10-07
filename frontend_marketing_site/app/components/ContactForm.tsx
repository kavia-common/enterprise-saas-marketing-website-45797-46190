import { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Accessible contact form with client-only validation and fake submission.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = {
      firstName: String(form.get("firstName") || "").trim(),
      lastName: String(form.get("lastName") || "").trim(),
      workEmail: String(form.get("workEmail") || "").trim(),
      message: String(form.get("message") || "").trim(),
      company: String(form.get("company") || "").trim(),
    };

    const nextErrors: Record<string, string> = {};
    if (!values.firstName) nextErrors.firstName = "First name is required";
    if (!values.lastName) nextErrors.lastName = "Last name is required";
    if (!values.workEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.workEmail))
      nextErrors.workEmail = "Valid email is required";
    if (!values.message) nextErrors.message = "Please enter a message";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // Simulate success
      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 4000);
    }
  }

  const Input = ({
    id,
    label,
    type = "text",
    placeholder,
    required,
  }: {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={errors[id] ? true : undefined}
        aria-errormessage={errors[id] ? `${id}-error` : undefined}
        className={`mt-1 w-full rounded-lg border ${
          errors[id] ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        }`}
        required={required}
      />
      {errors[id] && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Contact our team</h2>
            <p className="mt-3 text-gray-600">
              Have questions about pricing, security, or deployment models? We’re here to help.
            </p>
            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Enterprise-ready SOC2, ISO27001, and SSO/SAML
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Hybrid cloud & on-prem deployments supported
              </div>
            </div>
          </div>
          <form className="op-card p-6" onSubmit={onSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input id="firstName" label="First name" placeholder="Jane" required />
              <Input id="lastName" label="Last name" placeholder="Doe" required />
              <Input id="company" label="Company" placeholder="Acme Inc." />
              <Input id="workEmail" type="email" label="Work email" placeholder="jane@company.com" required />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your needs…"
                  rows={4}
                  aria-invalid={errors.message ? true : undefined}
                  aria-errormessage={errors.message ? "message-error" : undefined}
                  className={`mt-1 w-full rounded-lg border ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  required
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
            <button type="submit" className="mt-4 w-full op-btn-primary">
              Send message
            </button>
            <p className="mt-3 text-xs text-gray-500">Placeholder form. No backend calls are made.</p>
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mt-4 rounded-lg bg-green-50 text-green-800 ring-1 ring-green-200 px-3 py-2 text-sm"
              >
                Thanks! Your message has been received. We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
