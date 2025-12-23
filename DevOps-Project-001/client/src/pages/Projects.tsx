import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import cloudBg from "@assets/generated_images/cloud_infrastructure_abstract_background.png";

const projects = [
  {
    id: 1,
    title: "VPC Architecture Design",
    category: "AWS / Networking",
    description: "Designing multi-tier VPC architectures with public and private subnets, NAT gateways, and security groups.",
    tags: ["AWS", "VPC", "Networking"],
    image: cloudBg,
  },
  {
    id: 2,
    title: "CI/CD Pipeline with Terraform",
    category: "DevOps",
    description: "Automating infrastructure provisioning and application deployment using Terraform and GitHub Actions.",
    tags: ["Terraform", "GitHub Actions", "CI/CD"],
    image: cloudBg,
  },
  {
    id: 3,
    title: "Containerized Microservices",
    category: "Cloud / Docker",
    description: "Deploying and managing containerized applications with Docker and Kubernetes for high availability.",
    tags: ["Docker", "Kubernetes", "K8s"],
    image: cloudBg,
  },
  {
    id: 4,
    title: "Edge-Optimized AI Integration",
    category: "AWS / Firmware",
    description: "Integrating audio recognition firmware with AWS S3 and CloudWatch for real-time data monitoring.",
    tags: ["AWS S3", "C++", "CloudWatch"],
    image: cloudBg,
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-serif font-medium">Infrastructure Projects</h1>
        <p className="text-lg text-muted-foreground">
          A showcase of hands-on cloud and networking deployments documented daily.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="group overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
            </div>
            <CardHeader className="space-y-2 pt-6">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
