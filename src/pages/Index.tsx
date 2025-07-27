import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SmartListingForm from "@/components/SmartListingForm";
import EnhancedImpactDashboard from "@/components/EnhancedImpactDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <SmartListingForm />
        <EnhancedImpactDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
