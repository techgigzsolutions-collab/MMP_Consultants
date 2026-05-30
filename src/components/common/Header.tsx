import { ArrowRight, Zap, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";

const navItems = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

const desktopNavLinkClass =
  "group relative flex items-center gap-1 px-3.5 py-2 text-body-md font-medium " +
  "text-foreground/80 transition-colors rounded-md hover:text-foreground " +
  "after:absolute after:left-1/2 after:bottom-1 after:h-0.5 after:w-[calc(100%-1.75rem)] " +
  "after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full " +
  "after:bg-gradient-to-r after:from-primary after:via-secondary/70 after:to-primary " +
  "after:transition-transform after:duration-300 after:ease-out " +
  "hover:after:scale-x-100";

/* ── Header ──────────────────────────────────────────────────────────── */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="MMP Consultants" className="h-18 w-auto" />
          <span className="sr-only">MMP Consultants</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={desktopNavLinkClass}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">

          <Link to="/contact" className="hidden md:inline-flex">
            <CraftButton className="rounded-full">
              <CraftButtonLabel>Get Started</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowRight className="size-4 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
              </CraftButtonIcon>
            </CraftButton>
          </Link>
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-4 py-3 space-y-0.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-body font-medium text-foreground/80
                         hover:text-foreground rounded-md hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
