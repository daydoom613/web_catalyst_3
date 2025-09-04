import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <ServiceShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;