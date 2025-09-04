import { useState } from "react";
import { 
  Palette, Code, Megaphone, FileText, Briefcase, Music, 
  Video, Smartphone, Globe, ShoppingCart, BarChart, Camera,
  ArrowRight, TrendingUp, Star
} from "lucide-react";

const categoryData = [
  {
    id: "design",
    title: "Design & Creative",
    icon: Palette,
    color: "from-pink-500 to-purple-500",
    count: "150K+",
    trending: true,
    subcategories: [
      { name: "Logo & Brand Identity", count: "45K", price: "$25", icon: Palette },
      { name: "Web Design", count: "38K", price: "$50", icon: Globe },
      { name: "Illustration", count: "25K", price: "$35", icon: Camera },
      { name: "Video Editing", count: "42K", price: "$75", icon: Video },
    ]
  },
  {
    id: "development",
    title: "Programming & Tech", 
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    count: "200K+",
    trending: true,
    subcategories: [
      { name: "Website Development", count: "85K", price: "$100", icon: Globe },
      { name: "Mobile Apps", count: "35K", price: "$200", icon: Smartphone },
      { name: "WordPress", count: "55K", price: "$50", icon: Code },
      { name: "E-commerce", count: "$25K", price: "$150", icon: ShoppingCart },
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    color: "from-orange-500 to-red-500", 
    count: "120K+",
    trending: false,
    subcategories: [
      { name: "SEO", count: "45K", price: "$40", icon: BarChart },
      { name: "Social Media Marketing", count: "38K", price: "$30", icon: Megaphone },
      { name: "Content Marketing", count: "25K", price: "$35", icon: FileText },
      { name: "PPC Advertising", count: "$15K", price: "$60", icon: TrendingUp },
    ]
  },
  {
    id: "writing",
    title: "Writing & Translation",
    icon: FileText,
    color: "from-green-500 to-teal-500",
    count: "80K+", 
    trending: false,
    subcategories: [
      { name: "Content Writing", count: "35K", price: "$20", icon: FileText },
      { name: "Copywriting", count: "25K", price: "$40", icon: FileText },
      { name: "Translation", count: "15K", price: "$15", icon: Globe },
      { name: "Proofreading", count: "5K", price: "$10", icon: FileText },
    ]
  },
  {
    id: "business",
    title: "Business",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-500",
    count: "90K+",
    trending: false,
    subcategories: [
      { name: "Virtual Assistant", count: "40K", price: "$25", icon: Briefcase },
      { name: "Data Entry", count: "25K", price: "$15", icon: BarChart },
      { name: "Market Research", count: "15K", price: "$50", icon: TrendingUp },
      { name: "Business Plans", count: "10K", price: "$100", icon: Briefcase },
    ]
  },
  {
    id: "music", 
    title: "Music & Audio",
    icon: Music,
    color: "from-yellow-500 to-orange-500",
    count: "35K+",
    trending: false,
    subcategories: [
      { name: "Voice Over", count: "20K", price: "$30", icon: Music },
      { name: "Music Production", count: "10K", price: "$75", icon: Music },
      { name: "Audio Editing", count: "3K", price: "$25", icon: Music },
      { name: "Jingles", count: "2K", price: "$50", icon: Music },
    ]
  }
];

export function Categories() {
  const [activeCategory, setActiveCategory] = useState("design");
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null);

  const activeCategoryData = categoryData.find(cat => cat.id === activeCategory);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
            Explore <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover thousands of services across diverse categories. From creative design to technical development, 
            find the perfect professional for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Browse by Category</h3>
            {categoryData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left p-4 rounded-xl transition-all hover-lift group ${
                  activeCategory === category.id 
                    ? 'glass-card glow-primary' 
                    : 'glass hover:bg-surface-elevated'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{category.title}</span>
                        {category.trending && (
                          <div className="flex items-center space-x-1 text-xs bg-gradient-accent px-2 py-1 rounded-full">
                            <TrendingUp className="w-3 h-3" />
                            <span className="text-accent-foreground">Hot</span>
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{category.count} services</span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeCategory === category.id ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Category Content */}
          <div className="lg:col-span-2">
            {activeCategoryData && (
              <div className="glass-card p-8 animate-scale-in">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${activeCategoryData.color}`}>
                      <activeCategoryData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">{activeCategoryData.title}</h3>
                      <p className="text-muted-foreground">{activeCategoryData.count} services available</p>
                    </div>
                  </div>
                  {activeCategoryData.trending && (
                    <div className="pulse-glow px-4 py-2 bg-gradient-accent rounded-full">
                      <span className="text-accent-foreground font-medium">🔥 Trending</span>
                    </div>
                  )}
                </div>

                {/* Subcategories Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {activeCategoryData.subcategories.map((subcategory, index) => (
                    <div
                      key={subcategory.name}
                      className={`p-6 rounded-xl border border-glass-border transition-all hover-lift hover-glow cursor-pointer ${
                        hoveredSubcategory === subcategory.name 
                          ? 'bg-gradient-glass shadow-glow' 
                          : 'bg-surface/30 hover:bg-surface/50'
                      }`}
                      onMouseEnter={() => setHoveredSubcategory(subcategory.name)}
                      onMouseLeave={() => setHoveredSubcategory(null)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <subcategory.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{subcategory.name}</h4>
                            <p className="text-sm text-muted-foreground">{subcategory.count} services</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-success">Starting at</div>
                          <div className="text-xl font-bold gradient-text">{subcategory.price}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>4.9 avg rating</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                <div className="mt-8 text-center">
                  <button className="px-8 py-3 bg-gradient-primary rounded-xl font-medium hover:shadow-glow hover-lift transition-all">
                    View All {activeCategoryData.title} Services
                    <ArrowRight className="inline-block w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
          {[
            { label: "Categories", value: "500+" },
            { label: "Subcategories", value: "2000+" },
            { label: "New Services Daily", value: "1000+" },
            { label: "Countries Served", value: "190+" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card p-6 hover-glow">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}