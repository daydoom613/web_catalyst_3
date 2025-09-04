import { useState, useEffect } from "react";
import { Search, Play, Star, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "2M+", label: "Active Users", icon: Users },
  { value: "1M+", label: "Services", icon: Award },
  { value: "500K+", label: "Projects Completed", icon: Star },
  { value: "95%", label: "Success Rate", icon: TrendingUp },
];

const popularSearches = [
  "Logo Design", "WordPress Development", "Video Editing", "SEO Services", 
  "Mobile App", "Content Writing", "Social Media", "AI Chatbot"
];

export function Hero() {
  const [currentSearch, setCurrentSearch] = useState("");
  const [searchIndex, setSearchIndex] = useState(0);

  // Animated placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setSearchIndex((prev) => (prev + 1) % popularSearches.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-success/20 rounded-full blur-xl animate-float float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-3xl md:text-5xl font-space-grotesk font-bold leading-tight">
              Find the perfect{" "}
              <span className="gradient-text">freelance</span>
              <br />
              services for your business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with talented professionals worldwide and bring your ideas to life.
              From design to development, we've got you covered.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative glass-card p-2">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    value={currentSearch}
                    onChange={(e) => setCurrentSearch(e.target.value)}
                    placeholder={`Try "${popularSearches[searchIndex]}"`}
                    className="w-full pl-12 pr-4 py-4 bg-transparent border-0 focus:outline-none text-base text-foreground placeholder-muted-foreground"
                  />
                </div>
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow hover-lift px-8">
                  Search
                </Button>
              </div>
            </div>
            
            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {popularSearches.slice(0, 6).map((search, index) => (
                <button
                  key={search}
                  className="px-3 py-1 text-sm bg-surface/50 hover:bg-surface rounded-full text-muted-foreground hover:text-foreground transition-all hover-lift"
                  onClick={() => setCurrentSearch(search)}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-gradient-accent hover:shadow-glow hover-lift px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="hover-lift group">
              <Play className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
              Watch How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 hover-glow group cursor-pointer">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:text-primary-glow transition-colors" />
                <div className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Company logos would go here - using placeholder boxes */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-8 bg-muted/20 rounded opacity-50 hover:opacity-80 transition-opacity"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}