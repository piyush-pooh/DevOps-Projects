import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, ExternalLink, Linkedin } from "lucide-react";
import portraitImage from "@assets/Gemini_Generated_Image_7q2hz67q2hz67q2h_1766414632953.png";

export default function About() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Bio Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 border border-primary/20 rounded-xl transform -rotate-2"></div>
          <div className="absolute -inset-4 border border-border rounded-xl transform rotate-2"></div>
          <img 
            src={portraitImage} 
            alt="Piyush Sharma" 
            className="relative rounded-lg shadow-2xl w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-medium">I'm Piyush Sharma.</h1>
          <h2 className="text-2xl text-muted-foreground font-light">Cloud, Linux, and DevOps Practitioner.</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              I believe in learning over time, not overnight. My approach blends deep technical execution with transparent storytelling — visible through my Daily Blogs on Hashnode.
            </p>
            <p>
              Based in Himachal Pradesh, India, I’m building my career with a core philosophy: Consistency compounds. I document my journey across AWS, Docker, Networking, and Terraform every single day.
            </p>
            <p>
              I’m looking for opportunities where I can contribute to real infrastructure and grow into a high-impact Cloud/Infra Engineer.
            </p>
          </div>
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="https://hashnode.com/@PiyushPooh" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 rounded-full px-6">
                <ExternalLink size={18} /> Daily Blog
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/piyush-sharma-5250a0291" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 rounded-full px-6">
                <Linkedin size={18} /> LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto pb-12">
        <Card className="bg-muted/30 border-border/50 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 space-y-8 bg-primary text-primary-foreground">
              <h3 className="text-3xl font-serif">Let's build together</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Relentless learning, consistent output, and the belief that you only need to be right once. Send me an email if you want to work together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="opacity-80" />
                  <span>work.sharmapiyush@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="opacity-80" />
                  <span>Palampur, Himachal Pradesh, India</span>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8 md:p-12 space-y-6 bg-card">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your Name" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="your@email.com" type="email" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="How can I help you with your infrastructure?" className="min-h-[120px] bg-background" />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </div>
        </Card>
      </section>
    </div>
  );
}
