import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const usefulLinks = [
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const quickLinks = [
  { label: "Support", href: "/contact" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "IT Support", href: "/services/it-support" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="MMP Consultants" className="h-18 w-44" />
                <span className="sr-only">MMP Consultants</span>
              </Link>
            <p className="text-background/50 text-sm leading-relaxed mb-4">
              MMP Consultants provides consulting, project coordination, and operational support to help businesses run more efficiently and confidently.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Case Studies', 'Insights'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="rounded-full bg-background/10 px-3 py-2 text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors text-xs font-semibold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Useful Links</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/50 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/50 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@mmpconsultants.com.au" className="text-sm text-background/50 hover:text-primary transition-colors">info@mmpconsultants.com.au</a>
              </li>
             
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=106+Houdini+Drive,+Tarneit+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/50 hover:text-primary transition-colors"
                >
                  106 Houdini Drive, Tarneit, Australia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">© 2026 MMP Consultants. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/contact" className="text-xs text-background/40 hover:text-background/60 transition-colors">Contact</Link>
            <Link to="/" className="text-xs text-background/40 hover:text-background/60 transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
