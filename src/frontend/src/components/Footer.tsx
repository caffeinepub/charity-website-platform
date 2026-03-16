import { Heart } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import LegalModal, { type LegalType } from "./LegalModal";

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "#" },
  { icon: SiX, label: "X (Twitter)", href: "#" },
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Projects", href: "#projects" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [legalModal, setLegalModal] = useState<LegalType>(null);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const appId = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "saidi-shema-foundation",
  );

  return (
    <>
      <footer className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <img
                src="/assets/generated/charity-logo.dim_400x120.png"
                alt="Saidi Shema Foundation"
                className="h-12 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-background/70 font-body text-sm leading-relaxed max-w-xs mb-2">
                Changing lives through Sadaqah and compassion. Registered
                charity in England and Wales. Charity No. SSF-2009-UK.
              </p>
              <p className="text-background/50 font-body text-xs italic mb-6">
                "The believer's shade on the Day of Resurrection will be his
                charity." — Hadith
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center text-background/70 hover:text-accent-foreground transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-base font-semibold text-background mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-background/70 hover:text-accent font-body text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-base font-semibold text-background mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-background/70 font-body text-sm">
                <li>info@saidishemafoundation.org</li>
                <li>+256771173835</li>
                <li>12 Mercy Lane</li>
                <li>London, EC1A 1BB, UK</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/15 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Legal links */}
              <div className="flex flex-wrap items-center gap-4 text-background/60 font-body text-xs">
                <button
                  type="button"
                  onClick={() => setLegalModal("privacy")}
                  className="hover:text-accent transition-colors underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </button>
                <span className="text-background/30">·</span>
                <button
                  type="button"
                  onClick={() => setLegalModal("terms")}
                  className="hover:text-accent transition-colors underline-offset-2 hover:underline"
                >
                  Terms of Use
                </button>
                <span className="text-background/30">·</span>
                <button
                  type="button"
                  onClick={() => setLegalModal("registration")}
                  className="hover:text-accent transition-colors underline-offset-2 hover:underline"
                >
                  Charity Registration No. SSF-2009-UK
                </button>
              </div>

              {/* Copyright + attribution */}
              <div className="flex flex-col sm:flex-row items-center gap-2 text-background/50 font-body text-xs text-center">
                <span>
                  © {new Date().getFullYear()} Saidi Shema Foundation. All
                  rights reserved.
                </span>
                <span className="hidden sm:inline text-background/30">·</span>
                <span className="flex items-center gap-1">
                  Built with{" "}
                  <Heart className="w-3 h-3 text-accent fill-accent inline" />{" "}
                  using{" "}
                  <a
                    href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    caffeine.ai
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
}
