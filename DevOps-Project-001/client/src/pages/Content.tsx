import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Mic, FileText, Github } from "lucide-react";

const resources = [
  {
    type: "Talk",
    icon: Mic,
    title: "Building Scalable UIs",
    event: "ReactConf 2024",
    description: "A deep dive into component architecture and state management for large-scale applications.",
    link: "#",
  },
  {
    type: "Video",
    icon: Video,
    title: "Advanced Framer Motion",
    event: "YouTube Tutorial",
    description: "Mastering layout animations and shared element transitions in 30 minutes.",
    link: "#",
  },
  {
    type: "Resource",
    icon: FileText,
    title: "The Frontend Checklist",
    event: "PDF Guide",
    description: "A comprehensive checklist for launching production-ready web applications. Performance, SEO, and Accessibility.",
    link: "#",
  },
  {
    type: "Open Source",
    icon: Github,
    title: "use-animations",
    event: "NPM Library",
    description: "A collection of performance-optimized hooks for complex UI animations.",
    link: "#",
  },
];

export default function Content() {
  return (
    <div className="space-y-12">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-serif font-medium">Content & Resources</h1>
        <p className="text-lg text-muted-foreground">
          Talks, videos, and open-source contributions for the community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((item, idx) => (
          <Card key={idx} className="group hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <item.icon size={24} />
              </div>
              <div>
                <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">
                  {item.type} • {item.event}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                View Resource &rarr;
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
