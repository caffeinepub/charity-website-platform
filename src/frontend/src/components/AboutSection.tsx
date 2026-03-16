import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Amanah (Trust)",
    description:
      "Every donation is a sacred trust. We operate with full transparency — every pound is accounted for and reported publicly.",
  },
  {
    icon: Heart,
    title: "Rahma (Compassion)",
    description:
      "Guided by the Islamic principle of mercy, we treat every person we serve with dignity, kindness, and respect.",
  },
  {
    icon: TrendingUp,
    title: "Islah (Reform & Impact)",
    description:
      "We measure success by real, lasting change — building self-sufficient communities, not dependency.",
  },
];

const team = [
  {
    name: "Sheikh Saidi Shema",
    title: "Founder & Executive Director",
    bio: "A community leader and development advocate with 20+ years of humanitarian work across East Africa and the Middle East.",
    initials: "SS",
  },
  {
    name: "Ustadha Maryam Osei",
    title: "Head of Programmes",
    bio: "Former UNICEF project manager specialising in education and community resilience across Muslim-majority communities.",
    initials: "MO",
  },
  {
    name: "Br. Yusuf Adeyemi",
    title: "Director of Partnerships",
    bio: "Brings a decade of Islamic finance and corporate social responsibility experience from the private sector.",
    initials: "YA",
  },
  {
    name: "Sr. Khadijah Nair",
    title: "Finance & Compliance Lead",
    bio: "Chartered accountant ensuring rigorous Zakat-compliant financial governance and regulatory accountability.",
    initials: "KN",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Our Story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Saidi Shema Foundation
          </h2>
        </div>

        {/* Founding Story + Vision/Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Our Founding Story
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Bismillah. Saidi Shema Foundation was established in 2011 by
              Sheikh Saidi Shema, inspired by the Quranic command:{" "}
              <em>
                "And whoever saves one life, it is as if he has saved all of
                mankind"
              </em>{" "}
              (Quran 5:32). What began as a local Sadaqah food distribution
              effort in East Africa has grown into a registered UK charity
              delivering sustainable programmes across four continents.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Over fourteen years, Alhamdulillah, we have served more than
              15,000 individuals, partnered with 30+ local organisations, and
              built a network of dedicated Muslim and non-Muslim volunteers
              united by the belief that small acts of Sadaqah, multiplied, can
              transform the world.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h4 className="font-display text-lg font-semibold text-primary mb-2">
                Our Vision
              </h4>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                A world where every person, regardless of faith or background,
                has access to food, clean water, education, and a life of
                dignity — as commanded by Allah (SWT).
              </p>
            </div>
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                Our Mission
              </h4>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                To mobilise Zakat, Sadaqah, and community action to deliver
                targeted, measurable relief and development programmes that
                create lasting, self-sustaining change.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-0 shadow-card text-center p-2"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-10">
            Our Leadership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card
                key={member.name}
                className="border-0 shadow-card text-center hover:shadow-hero transition-shadow duration-300"
              >
                <CardContent className="pt-8 pb-6 px-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center mx-auto mb-4 text-white font-display text-xl font-bold shadow-md">
                    {member.initials}
                  </div>
                  <h4 className="font-display text-base font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-accent text-xs font-semibold font-body uppercase tracking-wide mb-3">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground font-body text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
