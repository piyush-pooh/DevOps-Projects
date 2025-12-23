import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Bharti Airtel Ltd",
    role: "NOC Engineer L-1.5",
    period: "July 2024 - Present",
    description: "Monitoring network performance, troubleshooting Cisco ASA/FTD Firewalls, and managing routing protocols like BGP, OSPF, and MPLS. Ensuring SLA compliance and reporting to stakeholders.",
    skills: ["Cisco ASA", "BGP", "OSPF", "MPLS", "Firewall Admin"],
  },
  {
    company: "iHub - AWaDH @ IIT Ropar",
    role: "Firmware Engineer",
    period: "January 2024 - July 2024",
    description: "Built low-power embedded systems integrated with AWS services. Improved bird species classification accuracy by 40% using edge-optimized audio recognition.",
    skills: ["AWS", "S3", "CloudWatch", "C++", "Embedded Systems"],
  },
];

const education = [
  {
    institution: "Himachal Pradesh Technical University (HPTU)",
    degree: "B.Tech, Electronics and Communications Engineering",
    period: "2021 - 2024",
  },
  {
    institution: "Himachal Pradesh Takniki Shikaha Board",
    degree: "Diploma, Electronic and Communications Engineering",
    period: "2018 - 2021",
  },
];

export default function Career() {
  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
      <div className="space-y-8">
        <div className="sticky top-24">
          <h1 className="text-4xl font-serif font-medium mb-6">Career Journey</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
             My background blends NOC operations, cloud engineering, and network troubleshooting. 
             I’m driven by relentless learning and the belief that technical blogs are the best way to document mastery.
          </p>
          <div className="p-6 bg-muted/30 rounded-xl border border-border/50">
             <h3 className="font-serif text-lg mb-4">Core Tech Stack</h3>
             <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Kubernetes", "Terraform", "Linux", "Networking", "Bash", "YAML"].map(s => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
             </div>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-serif border-b border-border/40 pb-4 mb-8">Experience</h2>
          <div className="relative border-l border-border/60 ml-3 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="pl-8 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 ring-4 ring-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-medium">{exp.role}</h3>
                  <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{exp.period}</span>
                </div>
                <div className="text-lg font-serif text-muted-foreground mb-4">{exp.company}</div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif border-b border-border/40 pb-4 mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
               <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{edu.period}</span>
               </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
