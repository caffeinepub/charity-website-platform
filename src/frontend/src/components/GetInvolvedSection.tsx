import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Globe, Handshake } from "lucide-react";
import { useState } from "react";

const volunteerRoles = [
  {
    icon: Clock,
    title: "Community Outreach Coordinator",
    description:
      "Organise local fundraising events, Ramadan campaigns, Eid drives, and awareness activities. Flexible hours, remote-friendly.",
  },
  {
    icon: Globe,
    title: "Field Programme Volunteer",
    description:
      "Join our teams on the ground for 2–12 week placements supporting food aid, education, or water projects across Africa and South Asia.",
  },
  {
    icon: Handshake,
    title: "Skills-Based Volunteer",
    description:
      "Offer your professional expertise — legal, medical, communications, IT — to support our operations remotely or on-site.",
  },
];

const donationTiers = {
  oneTime: [
    { amount: "£10", impact: "Feeds a family for one week" },
    { amount: "£25", impact: "Plants 10 trees (Sadaqah Jariyah)" },
    { amount: "£50", impact: "Provides school supplies for 5 children" },
    { amount: "£100", impact: "Funds clean water access for a month" },
  ],
  monthly: [
    { amount: "£5/mo", impact: "Provides daily halal meals for one child" },
    { amount: "£15/mo", impact: "Sponsors a student's education" },
    { amount: "£30/mo", impact: "Maintains a community water point" },
    { amount: "£60/mo", impact: "Sponsors a field volunteer placement" },
  ],
  zakat: [
    {
      amount: "£500",
      impact: "Zakat-eligible: sponsor a classroom for one term",
    },
    {
      amount: "£1,000",
      impact: "Zakat-eligible: fund a Waqf well installation",
    },
    {
      amount: "£2,500",
      impact: "Zakat-eligible: sponsor a reforestation plot",
    },
    {
      amount: "£5,000+",
      impact: "Zakat/Waqf: bespoke institutional partnership",
    },
  ],
};

export default function GetInvolvedSection() {
  const [selectedAmounts, setSelectedAmounts] = useState<
    Record<string, string>
  >({});

  const handleSelect = (tab: string, amount: string) => {
    setSelectedAmounts((prev) => ({ ...prev, [tab]: amount }));
  };

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Take Action
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-base">
            Whether you give your time, your skills, or your Sadaqah — every
            contribution matters.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Volunteer Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteerRoles.map((role) => (
              <Card
                key={role.title}
                className="border border-border shadow-xs hover:shadow-card transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-foreground mb-2">
                    {role.title}
                  </h4>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body rounded-full transition-colors"
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Donation Options */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Donation Options
          </h3>
          <Tabs defaultValue="oneTime" className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 w-full mb-8 rounded-full bg-muted p-1">
              <TabsTrigger
                value="oneTime"
                className="rounded-full font-body text-sm"
              >
                One-Time
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="rounded-full font-body text-sm"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="zakat"
                className="rounded-full font-body text-sm"
              >
                Zakat / Waqf
              </TabsTrigger>
            </TabsList>

            {(["oneTime", "monthly", "zakat"] as const).map((tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {donationTiers[tab].map((tier) => (
                    <button
                      type="button"
                      key={tier.amount}
                      onClick={() => handleSelect(tab, tier.amount)}
                      className={`relative p-4 rounded-xl border-2 text-center transition-all duration-200 font-body ${
                        selectedAmounts[tab] === tier.amount
                          ? "border-accent bg-accent/10 shadow-md"
                          : "border-border bg-white hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      {selectedAmounts[tab] === tier.amount && (
                        <div className="absolute top-2 right-2">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                      )}
                      <div className="font-display text-xl font-bold text-foreground mb-1">
                        {tier.amount}
                      </div>
                      <div className="text-muted-foreground text-xs leading-tight">
                        {tier.impact}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 rounded-full font-body shadow-md"
                  >
                    {selectedAmounts[tab]
                      ? `Donate ${selectedAmounts[tab]}`
                      : "Select an Amount to Donate"}
                  </Button>
                  <p className="text-muted-foreground text-xs font-body mt-3">
                    Secure donation processing. Zakat-eligible receipts
                    provided.
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Partnerships */}
        <div className="bg-gradient-to-br from-primary/8 to-accent/8 rounded-2xl p-8 sm:p-12 text-center border border-primary/15">
          <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
            Corporate & Institutional Partnerships
          </h3>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-6 leading-relaxed">
            We work with businesses, Islamic finance institutions, and
            government bodies to design bespoke impact programmes. From Zakat
            disbursement schemes to co-branded Ramadan campaigns, we create
            partnerships that deliver measurable social value aligned with
            Islamic ethics.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 rounded-full font-body shadow-md"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
