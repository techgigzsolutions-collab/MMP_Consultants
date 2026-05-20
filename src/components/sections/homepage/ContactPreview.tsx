import { Link } from "react-router-dom";
import { Mail, MapPin, Users } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/10">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="sub-heading-pill mb-4 inline-flex">Contact Preview</span>
          <h2 className="font-heading text-h2 lg:text-h1 text-foreground leading-tight">
            Ready to bring more clarity and confidence to your operations?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-muted-foreground leading-relaxed">
            Connect with MMP Consultants to discuss consulting, project coordination, documentation support, and technical assistance tailored for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-10">
          <div className="rounded-3xl border border-border bg-card p-8 text-left">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Mail size={24} />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              info@mmpconsultants.com.au
              <br />projects@mmpconsultants.com.au
              <br />mithra@mmpconsultants.com.au
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 text-left">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MapPin size={24} />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">Office</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              106 Houdini Drive
              <br />Tarneit, Victoria, Australia
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 text-left">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Users size={24} />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">Let’s Talk</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Speak with our team about your next project and discover how MMP Consultants can support your growth.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
