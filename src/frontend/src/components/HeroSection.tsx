import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, Heart, Users } from "lucide-react";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1440x600.png')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 font-body">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          Registered Charity No. SSF-2009-UK
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Saidi Shema <span className="text-accent">Foundation</span>
        </h1>

        <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-4 font-body leading-relaxed italic">
          "The best of people are those who are most beneficial to others." —
          Prophet Muhammad (PBUH)
        </p>

        <p className="text-white/75 text-base max-w-xl mx-auto mb-10 font-body leading-relaxed">
          Rooted in the values of Sadaqah and compassion, we deliver food,
          education, clean water, and lasting hope to communities in need across
          Africa and beyond.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => onScrollTo("get-involved")}
            data-ocid="hero.donate.primary_button"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 rounded-full text-base shadow-hero transition-all duration-200 hover:scale-105 font-body"
          >
            <Heart className="w-5 h-5 mr-2" />
            Give Sadaqah
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onScrollTo("get-involved")}
            data-ocid="hero.volunteer.secondary_button"
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 hover:border-white font-semibold px-8 py-4 rounded-full text-base backdrop-blur-sm font-body"
          >
            <Users className="w-5 h-5 mr-2" />
            Volunteer
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => onScrollTo("about")}
            data-ocid="hero.learn.secondary_button"
            className="text-white/90 hover:text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-base font-body"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Our Story
          </Button>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: "15,000+", label: "Lives Impacted" },
            { value: "4", label: "Active Projects" },
            { value: "14+", label: "Years of Service" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm font-body mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => onScrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
