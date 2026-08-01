import type { Metadata } from "next";
import ContactForm from "@/src/components/sections/Contact/Form";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Building2,
  Compass,
  ExternalLink,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Niams Institute",
  description:
    "Get in touch with Niams Institute. Contact our admissions office, find our campus address, or send an inquiry online.",
};

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Campus Location",
    details: ["42 Academic Way, Scholar District", "Westminster, London SW1A 2AA"],
    actionText: "Get Directions",
    actionHref: "https://maps.google.com",
  },
  {
    icon: Mail,
    title: "Email Enquiries",
    details: ["admissions@niams.ac.uk", "info@niams.ac.uk"],
    actionText: "Send Email",
    actionHref: "mailto:admissions@niams.ac.uk",
  },
  {
    icon: Phone,
    title: "Phone & Office",
    details: ["+44 (0) 20 7946 0123", "Mon - Sat: 8:00 AM - 6:00 PM"],
    actionText: "Call Admissions",
    actionHref: "tel:+442079460123",
  },
  {
    icon: Clock,
    title: "Admissions Office Hours",
    details: ["Monday – Friday: 8:00 AM – 6:00 PM", "Saturday: 9:00 AM – 2:00 PM"],
  },
];

const FAQS = [
  {
    q: "How soon will I receive a reply to my inquiry?",
    a: "Our admissions counselor will typically review your submission and respond within 24 to 48 business hours.",
  },
  {
    q: "Can I schedule a physical campus visit?",
    a: "Yes! You can specify your preferred visiting time in the inquiry form or call our office directly to book a guided campus tour.",
  },
  {
    q: "Are trial classes available for new students?",
    a: "Absolutely. We offer demo trial classes across our academic and technology programs so you can experience our teaching methodology.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground antialiased selection:bg-primary-soft selection:text-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-surface-alt/50 py-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-soft/60 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Connect With Us</span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Let’s Start a Conversation
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600 leading-relaxed sm:text-lg">
            Have questions about our academic programs, admissions process, or campus facilities?
            Reach out to our dedicated team and we’ll guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-alt px-3.5 py-1 text-xs font-medium text-primary mb-4">
                <Building2 size={14} />
                <span>NIAMS Central Office</span>
              </div>
              <h2 className="text-2xl font-bold text-primary">Contact Details</h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Direct contacts for academic inquiries, admissions, and student services.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {CONTACT_INFO.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl border border-line bg-white p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-primary">
                          {item.title}
                        </h3>
                        <div className="mt-1 space-y-0.5 text-xs text-gray-600">
                          {item.details.map((detail, dIdx) => (
                            <p key={dIdx}>{detail}</p>
                          ))}
                        </div>
                        {item.actionText && item.actionHref && (
                          <a
                            href={item.actionHref}
                            target={item.actionHref.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary-hover"
                          >
                            <span>{item.actionText}</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Support guarantee badge */}
            <div className="rounded-2xl border border-accent/30 bg-accent-soft/40 p-4 flex items-center gap-3 text-xs text-gray-700">
              <ShieldCheck className="h-6 w-6 text-accent flex-none" />
              <span>
                <strong className="text-foreground">Official Institution Guarantee:</strong> All admissions queries receive personalized feedback from an academic advisor.
              </span>
            </div>
          </div>

          {/* Right Column: Attached Form Component */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="border-t border-line bg-surface-alt/30 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 text-xs font-medium text-primary mb-3">
                <Compass size={14} />
                <span>Visit Our Campus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Find Our Location
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-xl">
                Located conveniently in the educational hub with modern labs and state-of-the-art facilities.
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-line px-4 py-2.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:bg-surface-alt"
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Map Card */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div className="relative h-80 sm:h-96 w-full bg-slate-900 overflow-hidden">
              <iframe
                title="NIAMS Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9079258284566!2d-0.1342!3d51.5246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzI4LjYiTiAwwrAwOCcwMy4xIlc!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) opacity(0.95)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line bg-white px-6 py-4 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary flex-none" />
                <span>
                  <strong>Address:</strong> 42 Academic Way, Scholar District, Westminster, London
                </span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-accent flex-none" />
                <span>Main Administration & Admissions Block</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-alt px-3.5 py-1 text-xs font-medium text-primary mb-3">
              <HelpCircle size={14} />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-line bg-white p-5 shadow-sm transition-all hover:border-primary/30"
              >
                <h3 className="text-base font-semibold text-primary flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                    ?
                  </span>
                  {faq.q}
                </h3>
                <p className="mt-2.5 pl-8 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}