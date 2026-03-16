import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    id: 1,
    title: "Sadaqah Food Aid",
    description:
      "Delivering daily halal meals to families facing food insecurity across underserved communities during Ramadan and year-round.",
    image: "/assets/generated/project-food-aid.dim_800x500.png",
    tag: "Ongoing",
    tagColor: "default" as const,
  },
  {
    id: 2,
    title: "Waqf Well Project",
    description:
      "Installing Sadaqah Jariyah water wells in villages — a gift of clean water that keeps giving long after the donor is gone.",
    image: "/assets/generated/project-clean-water.dim_800x500.png",
    tag: "Active",
    tagColor: "secondary" as const,
  },
  {
    id: 3,
    title: "Islamic Education Access",
    description:
      "Building madrasah classrooms and schools so every Muslim child has access to Quranic literacy and quality formal education.",
    image: "/assets/generated/project-education.dim_800x500.png",
    tag: "Expanding",
    tagColor: "outline" as const,
  },
];

interface FeaturedProjectsProps {
  onScrollTo: (id: string) => void;
}

export default function FeaturedProjects({
  onScrollTo,
}: FeaturedProjectsProps) {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Featured Campaigns
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Where Your Sadaqah Goes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-base">
            Every contribution directly funds one of our active programmes. See
            the work in action.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={() => onScrollTo("projects")}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant={project.tagColor}
                    className="font-body text-xs"
                  >
                    {project.tag}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold font-body group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            type="button"
            onClick={() => onScrollTo("projects")}
            className="inline-flex items-center gap-2 text-primary font-semibold font-body hover:gap-3 transition-all duration-200 text-base"
          >
            View all projects <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
