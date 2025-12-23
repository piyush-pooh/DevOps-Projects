import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Cloud, Server, Terminal } from "lucide-react";
import portraitImage from "@assets/Gemini_Generated_Image_7q2hz67q2hz67q2h_1766414632953.png";
import projectImage from "@assets/generated_images/cloud_infrastructure_abstract_background.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
            <Cloud size={14} /> Cloud & DevOps Engineer
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-foreground">
            Building resilient <br className="hidden md:block" />
            <span className="text-muted-foreground italic">infrastructure</span> at scale.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm Piyush Sharma, a Cloud, Linux, and Networking practitioner. I specialize in AWS, Docker, and Kubernetes, building infrastructure where consistency compounds every single day.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8 font-medium">
                View Projects
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium">
                About Me
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-4 translate-y-4" />
            <div className="relative w-full h-full p-4 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 border border-border rounded-lg shadow-sm">
                 <Cloud className="text-primary" size={24} />
               </div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background p-2 border border-border rounded-lg shadow-sm">
                 <Server className="text-primary" size={24} />
               </div>
               <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 border border-border rounded-lg shadow-sm">
                 <Terminal className="text-primary" size={24} />
               </div>
            </div>
            <img
              src={portraitImage}
              alt="Piyush Sharma"
              className="absolute inset-12 w-[calc(100%-96px)] h-[calc(100%-96px)] object-cover rounded-full shadow-2xl border-4 border-background"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="text-center py-12 border-y border-border/40">
        <blockquote className="text-2xl md:text-3xl font-serif italic text-muted-foreground max-w-3xl mx-auto">
          "Consistency compounds — and I document that journey publicly, every single day."
        </blockquote>
      </section>

      {/* Featured Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <h2 className="text-2xl font-serif">Cloud Expertise</h2>
          <Link href="/projects">
            <a className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              Technical Blogs <ArrowRight size={16} />
            </a>
          </Link>
        </div>
        
        <div className="group relative overflow-hidden rounded-xl bg-muted/30 border border-border/50 hover:border-primary/20 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="order-2 md:order-1 space-y-4">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Infrastructure</span>
              <h3 className="text-3xl font-serif">VPC Architectures & CI/CD</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hands-on projects across AWS (EC2, S3, CloudFront), Terraform, and Kubernetes. 
                I build server-less applications and containerized environments with high-impact technical execution.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium">AWS</span>
                <span className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium">Terraform</span>
                <span className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium">Docker</span>
                <span className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium">K8s</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={projectImage} 
                alt="Cloud Infrastructure" 
                className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
