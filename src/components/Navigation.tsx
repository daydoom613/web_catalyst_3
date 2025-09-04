import { useState } from "react";
import { ChevronDown, Menu, X, Search, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const categories = [
  {
    title: "Design & Creative",
    subcategories: ["Logo Design", "Web Design", "Illustration", "Video Editing", "3D Design"],
    trending: true
  },
  {
    title: "Development & Tech",
    subcategories: ["Web Development", "Mobile Apps", "WordPress", "E-commerce", "AI Services"],
    trending: true
  },
  {
    title: "Digital Marketing",
    subcategories: ["SEO", "Social Media", "Content Marketing", "PPC", "Email Marketing"],
    trending: false
  },
  {
    title: "Writing & Translation",
    subcategories: ["Content Writing", "Copywriting", "Translation", "Proofreading", "Resume Writing"],
    trending: false
  },
  {
    title: "Business",
    subcategories: ["Virtual Assistant", "Data Entry", "Project Management", "Sales", "Market Research"],
    trending: false
  },
  {
    title: "Music & Audio",
    subcategories: ["Voice Over", "Music Production", "Audio Editing", "Mixing", "Songwriting"],
    trending: false
  }
];

export function Navigation() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-xl font-space-grotesk font-bold gradient-text">
              WorkConnect
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors"
                  onMouseEnter={() => setIsExploreOpen(true)}
                  onMouseLeave={() => setIsExploreOpen(false)}
                >
                  <span>Explore</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu */}
                {isExploreOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl navglass border border-glass-border animate-slide-up"
                    onMouseEnter={() => setIsExploreOpen(true)}
                    onMouseLeave={() => setIsExploreOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-8 p-8">
                      {categories.map((category, index) => (
                        <div key={category.title} className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-foreground">{category.title}</h3>
                            {category.trending && (
                              <div className="flex items-center space-x-1 text-xs bg-gradient-accent px-2 py-1 rounded-full">
                                <TrendingUp className="w-3 h-3" />
                                <span className="text-accent-foreground font-medium">Trending</span>
                              </div>
                            )}
                          </div>
                          <ul className="space-y-2">
                            {category.subcategories.map((sub, idx) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift block"
                                >
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-glass-border p-6 bg-gradient-glass">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold gradient-text">Popular Searches</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {["Logo Design", "WordPress", "Video Editing", "SEO", "Mobile App"].map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-surface/50 rounded-full text-xs text-muted-foreground hover:bg-surface cursor-pointer hover-lift"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-sm text-success">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Over 1M+ services available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="What service are you looking for today?"
                className="w-full pl-10 pr-4 py-2 bg-surface/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-foreground placeholder-muted-foreground"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="hover-lift text-sm">
              Join
            </Button>
            <Button variant="outline" className="hover-lift text-sm">
              Sign In
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow hover-lift text-sm">
              Become a Seller
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-card border border-glass-border animate-slide-up">
            <div className="p-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-2 bg-surface/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                />
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <hr className="border-glass-border" />
                <button className="w-full text-left py-2 text-foreground hover:text-primary transition-colors text-sm">
                  Explore Categories
                </button>
                <button className="w-full text-left py-2 text-foreground hover:text-primary transition-colors text-sm">
                  Join
                </button>
                <button className="w-full text-left py-2 text-foreground hover:text-primary transition-colors text-sm">
                  Sign In
                </button>
                <Button className="w-full bg-gradient-primary text-sm">
                  Become a Seller
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}