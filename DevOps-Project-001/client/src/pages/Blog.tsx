import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Documenting My Cloud Journey: Why I Blog Daily",
    date: "Dec 2024",
    readTime: "5 min read",
    category: "Reflections",
    excerpt: "The power of consistency and how documenting my learning on Hashnode has accelerated my growth as a Cloud Engineer.",
  },
  {
    id: 2,
    title: "Mastering AWS VPC Architectures",
    date: "Nov 2024",
    readTime: "12 min read",
    category: "Technical",
    excerpt: "A deep dive into subnets, routing tables, and internet gateways. Building a secure foundation for any cloud deployment.",
  },
  {
    id: 3,
    title: "Getting Started with Terraform Infrastructure as Code",
    date: "Oct 2024",
    readTime: "10 min read",
    category: "Automation",
    excerpt: "Why IaC is essential for modern DevOps and how to write your first configuration to deploy an EC2 instance.",
  },
];

export default function Blog() {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-serif font-medium">Technical Blog</h1>
        <p className="text-lg text-muted-foreground">
          I publish daily technical and reflective write-ups on Hashnode.
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="group cursor-pointer border-b border-border/40 pb-8 last:border-0 hover:bg-muted/30 p-4 -mx-4 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <Badge variant="outline" className="text-xs font-normal border-primary/20 text-primary">
                {post.category}
              </Badge>
            </div>
            <h2 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <a 
              href="https://hashnode.com/@PiyushPooh" 
              target="_blank" 
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            >
              Read on Hashnode <ExternalLink size={14} />
            </a>
          </article>
        ))}
        
        <div className="pt-8 text-center">
          <a href="https://hashnode.com/@PiyushPooh" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full px-8">View All Daily Blogs</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
