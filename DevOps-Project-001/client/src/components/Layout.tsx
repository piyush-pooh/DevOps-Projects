import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin, Mail, Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-serif font-bold tracking-tight hover:text-primary transition-colors flex items-center gap-2">
              Piyush<span className="text-primary italic">.Cloud</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-border/40 bg-background overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a
                      className={cn(
                        "text-lg font-medium transition-colors block py-2",
                        location === item.path
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full container mx-auto px-4 py-8 md:py-12">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-serif">
            © 2024 Piyush Sharma. Consistency Compounds.
          </p>
          <div className="flex items-center gap-6">
             <a
              href="https://hashnode.com/@PiyushPooh"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
            >
              Hashnode <ExternalLink size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-sharma-5250a0291"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:work.sharmapiyush@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
