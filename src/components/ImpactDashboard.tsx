import { Card } from "@/components/ui/card";
import { TrendingUp, Leaf, Droplets, Zap } from "lucide-react";

const ImpactDashboard = () => {
  const impacts = [
    {
      icon: Leaf,
      label: "Waste Diverted",
      value: "2,847",
      unit: "kg",
      change: "+12%",
      color: "primary"
    },
    {
      icon: Droplets,
      label: "Water Saved",
      value: "15,690",
      unit: "L",
      change: "+8%",
      color: "secondary"
    },
    {
      icon: Zap,
      label: "Energy Conserved", 
      value: "8,234",
      unit: "kWh",
      change: "+15%",
      color: "accent"
    },
    {
      icon: TrendingUp,
      label: "CO₂ Reduced",
      value: "4.2",
      unit: "tons",
      change: "+18%",
      color: "primary"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Environmental Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your contribution to a more sustainable future. Every trade makes a difference.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impacts.map((impact, index) => (
            <Card key={index} className="p-6 text-center border-0 shadow-soft hover:shadow-medium transition-all">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                impact.color === 'primary' ? 'bg-primary/10' :
                impact.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
              }`}>
                <impact.icon className={`w-6 h-6 ${
                  impact.color === 'primary' ? 'text-primary' :
                  impact.color === 'secondary' ? 'text-secondary' : 'text-accent'
                }`} />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">{impact.value}</div>
                <div className="text-sm text-muted-foreground">{impact.unit}</div>
                <div className="text-xs text-muted-foreground">{impact.label}</div>
                <div className="text-xs text-green-600 font-medium">{impact.change} this month</div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Together We're Making a Difference</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of eco-conscious individuals creating a circular economy that benefits 
            everyone and our planet.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">120M</div>
              <div className="text-sm text-muted-foreground">Items Rescued</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">1.2K</div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;