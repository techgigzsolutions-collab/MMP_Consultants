import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone, Info, HelpCircle } from "lucide-react";
import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import usePageTitle from "@/hooks/usePageTitle";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";

const faqs = [
  {
    question: "What types of consulting do you offer?",
    answer:
      "We offer business consulting, project coordination, documentation support, and technical assistance designed to help small and medium businesses operate more efficiently.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "Use the contact form below or email us directly at info@mmpconsultants.com.au. We will respond within one business day with an initial proposal.",
  },
  {
    question: "Do you work with Australian businesses only?",
    answer:
      "Our focus is Australia-based businesses, with a particular emphasis on delivering solutions that suit local operations, compliance, and market needs.",
  },
];

const ContactPage = () => {
  usePageTitle("Contact");

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />

      <main>
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="section-container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="sub-heading-pill mb-4 inline-flex">Contact</span>
                <h1 className="text-4xl font-heading font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[4.5rem]">
                  Speak with MMP Consultants.
                </h1>
                <p className="mt-6 max-w-2xl text-body text-muted-foreground leading-relaxed">
                  Share your goals, challenges, or project ideas and our team will help you identify the right consulting, coordination, and technical support services.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    Explore Services
                    <ArrowRight size={16} />
                  </Link>
                  <a href="mailto:info@mmpconsultants.com.au" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
                    Email Us
                  </a>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="rounded-3xl border border-border bg-card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Mail size={24} />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">Email</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">info@mmpconsultants.com.au</p>
                </motion.div>
                <motion.div
                  className="rounded-3xl border border-border bg-card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">Office</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    106 Houdini Drive
                    <br />Tarneit, Victoria, Australia
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-3xl border border-border bg-card p-8 sm:col-span-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Phone size={24} />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">Talk to our team</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get prompt, practical advice for your next project or ongoing operational support.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <span className="sub-heading-pill mb-5 inline-flex">Send a message</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Tell us about your project</h2>
              <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-foreground">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="block text-sm font-medium text-foreground">
                    Email
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Subject
                    <input
                      type="text"
                      placeholder="Project overview"
                      className="mt-2 w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Message
                    <textarea
                      rows={6}
                      placeholder="Tell us about your business and goals."
                      className="mt-2 w-full rounded-[1.5rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send Message
                    <ArrowRight size={16} />
                  </button>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    View Services
                  </Link>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Info size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">How we work</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start with a discovery call, then map your requirements to a practical project plan. You get a clear scope, transparent timing, and recommendations that align with your operations.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <iframe
                  title="MMP Consultants office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.2010859794694!2d144.69702311562336!3d-37.813615879751926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c9b4019e9%3A0x5017d681632a000!2sHoudini%20Dr%2C%20Tarneit%20VIC%203039%2C%20Australia!5e0!3m2!1sen!2sus!4v1711234567890"
                  className="h-[340px] w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/10 py-16 lg:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="sub-heading-pill mb-4 inline-flex">FAQs</span>
              <h2 className="font-heading text-h2 lg:text-h1 text-foreground leading-tight">
                Questions about working with MMP Consultants
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-border bg-card p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container py-16 lg:py-24">
          <div className="rounded-3xl border border-border bg-card p-12 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Ready to discuss your next project?</h2>
              <p className="text-body text-muted-foreground leading-relaxed mb-8">
                Contact our team now and get tailored consulting support for business strategy, documentation, and technical operations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
