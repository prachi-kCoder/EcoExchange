import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ImpactDashboard from "@/components/ImpactDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ImpactDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
