import { useState } from "react";
import { Star, Heart, ShoppingCart, Clock, User, Award, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredServices = [
  {
    id: 1,
    title: "I will design a modern logo for your business",
    seller: "Alex_Designer",
    sellerLevel: "Pro",
    rating: 4.9,
    reviews: 2847,
    price: 25,
    deliveryTime: "2 days",
    image: "🎨",
    category: "Logo Design",
    popular: true,
    skills: ["Photoshop", "Illustrator", "Branding"]
  },
  {
    id: 2,
    title: "I will develop a responsive WordPress website", 
    seller: "WebDev_Pro",
    sellerLevel: "Top Rated",
    rating: 5.0,
    reviews: 1250,
    price: 150,
    deliveryTime: "5 days",
    image: "💻",
    category: "Web Development",
    popular: false,
    skills: ["WordPress", "PHP", "CSS"]
  },
  {
    id: 3,
    title: "I will create engaging social media content",
    seller: "Content_Queen", 
    sellerLevel: "Pro",
    rating: 4.8,
    reviews: 892,
    price: 45,
    deliveryTime: "3 days",
    image: "📱",
    category: "Social Media",
    popular: true,
    skills: ["Content Strategy", "Copywriting", "Design"]
  },
  {
    id: 4,
    title: "I will optimize your website for SEO",
    seller: "SEO_Expert",
    sellerLevel: "Top Rated", 
    rating: 4.9,
    reviews: 1678,
    price: 75,
    deliveryTime: "7 days",
    image: "📈",
    category: "SEO",
    popular: false,
    skills: ["SEO", "Analytics", "Keyword Research"]
  },
  {
    id: 5,
    title: "I will edit your videos professionally",
    seller: "Video_Master",
    sellerLevel: "Pro",
    rating: 4.7,
    reviews: 543,
    price: 85,
    deliveryTime: "4 days", 
    image: "🎬",
    category: "Video Editing",
    popular: true,
    skills: ["Premiere Pro", "After Effects", "Motion Graphics"]
  },
  {
    id: 6,
    title: "I will write compelling copy for your business",
    seller: "Copy_Ninja",
    sellerLevel: "Pro",
    rating: 4.8,
    reviews: 1156,
    price: 55,
    deliveryTime: "3 days",
    image: "✍️",
    category: "Copywriting", 
    popular: false,
    skills: ["Copywriting", "Marketing", "Sales"]
  }
];

const premiumServices = [
  {
    title: "Complete Brand Identity Package",
    description: "Logo, business cards, letterhead, and brand guidelines",
    price: 499,
    seller: "Brand_Studio_Pro",
    rating: 5.0,
    deliveryTime: "10 days",
    features: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterhead", "Social Media Kit"],
    badge: "Premium"
  },
  {
    title: "Full-Stack Web Application", 
    description: "Custom web app with database, authentication, and admin panel",
    price: 1299,
    seller: "FullStack_Dev",
    rating: 4.9,
    deliveryTime: "21 days",
    features: ["Frontend & Backend", "Database Design", "User Authentication", "Admin Panel", "Deployment"],
    badge: "Enterprise"
  },
  {
    title: "Complete Digital Marketing Campaign",
    description: "SEO, PPC, social media, and content marketing strategy", 
    price: 799,
    seller: "Marketing_Agency",
    rating: 4.8,
    deliveryTime: "14 days",
    features: ["SEO Audit", "PPC Setup", "Content Strategy", "Social Media", "Analytics Setup"],
    badge: "Pro"
  }
];

export function ServiceShowcase() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'popular' | 'premium'>('popular');

  const toggleFavorite = (serviceId: number) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
            Featured <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover top-rated services from our most talented professionals. 
            Quality guaranteed, delivered on time.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-scale-in">
          <div className="glass-card p-2 flex space-x-2">
            <button
              onClick={() => setActiveTab('popular')}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeTab === 'popular'
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'hover:bg-surface/50 text-muted-foreground'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline-block mr-2" />
              Popular Services
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeTab === 'premium'
                  ? 'bg-gradient-primary text-white shadow-glow' 
                  : 'hover:bg-surface/50 text-muted-foreground'
              }`}
            >
              <Zap className="w-4 h-4 inline-block mr-2" />
              Premium Packages
            </button>
          </div>
        </div>

        {/* Popular Services Grid */}
        {activeTab === 'popular' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {featuredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="glass-card p-6 hover-glow group cursor-pointer relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-accent px-3 py-1 rounded-full text-xs font-medium text-accent-foreground pulse-glow">
                    🔥 Popular
                  </div>
                )}

                {/* Service Image/Icon */}
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{service.image}</div>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Seller Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{service.seller}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      service.sellerLevel === 'Top Rated' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {service.sellerLevel}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(service.id);
                    }}
                    className="p-2 hover:bg-surface/30 rounded-full transition-colors"
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        favorites.includes(service.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  </button>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{service.rating}</span>
                    <span className="text-sm text-muted-foreground">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.deliveryTime}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.skills.slice(0, 3).map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-surface/30 px-2 py-1 rounded-full text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <div className="text-2xl font-bold gradient-text">${service.price}</div>
                  </div>
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow hover-lift">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Premium Services */}
        {activeTab === 'premium' && (
          <div className="grid lg:grid-cols-3 gap-8 animate-slide-up">
            {premiumServices.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover-glow group cursor-pointer relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Premium Badge */}
                <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-medium ${
                  service.badge === 'Enterprise' 
                    ? 'bg-gradient-accent text-accent-foreground'
                    : service.badge === 'Premium'
                    ? 'bg-gradient-primary text-white'
                    : 'bg-gradient-secondary text-white'
                } pulse-glow`}>
                  ⭐ {service.badge}
                </div>

                {/* Service Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  {/* Seller & Rating */}
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{service.seller}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{service.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.deliveryTime}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Award className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="pt-6 border-t border-glass-border">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold gradient-text">${service.price}</div>
                    <div className="text-sm text-muted-foreground">Complete package</div>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow hover-lift">
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join millions of entrepreneurs who've found success on WorkConnect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow hover-lift">
                Browse All Services
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Become a Seller
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}