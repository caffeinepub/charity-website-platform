import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Droplets,
  Leaf,
  Quote,
  Users,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sadaqah Food Aid",
    description:
      "Our Sadaqah food programme operates community kitchens in three cities, providing daily halal nutritious meals to families in crisis during Ramadan and year-round. We partner with local mosques and food networks to maximise reach.",
    metric: "1,200 halal meals served weekly",
    testimonial:
      '"Before Saidi Shema Foundation arrived, my children went to bed hungry. Now they eat every day, Alhamdulillah." — Fatima, Dar es Salaam',
    image: "/assets/generated/project-food-aid.dim_800x500.png",
    icon: Users,
    tag: "Food Security",
  },
  {
    id: 2,
    title: "Reforestation Drive",
    description:
      'Inspired by the Hadith: "If the Day of Judgement comes and one of you has a seedling, plant it." We work alongside local farmers restoring degraded land through native tree planting, supporting biodiversity and family income.',
    metric: "28,000 trees planted to date",
    testimonial:
      '"The land is coming back to life. My family can farm again, Alhamdulillah." — Ibrahim, Kenya',
    image: "/assets/generated/project-reforestation.dim_800x500.png",
    icon: Leaf,
    tag: "Environment",
  },
  {
    id: 3,
    title: "Islamic Education Access",
    description:
      "We build and equip madrasah classrooms and community schools, train teachers, and provide learning materials to children in remote communities. Our model prioritises girls' education and Quranic literacy alongside formal schooling.",
    metric: "640 children enrolled this year",
    testimonial:
      '"My daughter is the first in our family to read Quran and attend school. That changes everything." — Abdul Rahman, Uganda',
    image: "/assets/generated/project-education.dim_800x500.png",
    icon: BookOpen,
    tag: "Education",
  },
  {
    id: 4,
    title: "Clean Water — Waqf Wells",
    description:
      "We install Waqf-endowed community wells and water purification systems in villages where waterborne disease is a leading cause of child mortality. Donors can dedicate wells as Sadaqah Jariyah in memory of loved ones.",
    metric: "3,400 people with clean water access",
    testimonial:
      '"We walked hours for water. Now it is here — a blessed gift of Sadaqah Jariyah." — Amina, Mali',
    image: "/assets/generated/project-clean-water.dim_800x500.png",
    icon: Droplets,
    tag: "Clean Water",
  },
];

interface ProjectsSectionProps {
  onScrollTo: (id: string) => void;
}

export default function ProjectsSection({ onScrollTo }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Our Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Active Projects & Programmes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-base">
            Four focused programmes. Real communities. Measurable outcomes.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-0 shadow-card hover:shadow-hero transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground font-body text-xs font-semibold">
                    {project.tag}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact metric */}
                <div className="flex items-center gap-2 bg-primary/8 rounded-lg px-4 py-3 mb-4">
                  <project.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-primary font-semibold font-body text-sm">
                    {project.metric}
                  </span>
                </div>

                {/* Testimonial */}
                <div className="flex gap-3 mb-5">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground font-body text-xs italic leading-relaxed">
                    {project.testimonial}
                  </p>
                </div>

                <Button
                  onClick={() => onScrollTo("get-involved")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold font-body rounded-full"
                >
                  Support This Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
