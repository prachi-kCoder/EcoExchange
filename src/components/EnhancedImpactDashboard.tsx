import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Leaf, Droplets, Zap, Recycle, Users, Target, Award } from "lucide-react";
import { useState, useEffect } from "react";

const EnhancedImpactDashboard = () => {
  const [userImpact, setUserImpact] = useState({
    itemsListed: 12,
    itemsTraded: 8,
    totalValue: 450,
    joinDate: "2024-01-15"
  });

  const [realTimeMetrics, setRealTimeMetrics] = useState({
    wasteReduction: 2847,
    waterSaved: 15690,
    energyConserved: 8234,
    co2Reduced: 4.2,
    materialsRecovered: 156
  });

  const [globalStats, setGlobalStats] = useState({
    totalUsers: 50243,
    itemsRescued: 120456,
    co2SavedTotal: 1247,
    treesEquivalent: 2890
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => ({
        wasteReduction: prev.wasteReduction + Math.floor(Math.random() * 5),
        waterSaved: prev.waterSaved + Math.floor(Math.random() * 20),
        energyConserved: prev.energyConserved + Math.floor(Math.random() * 10),
        co2Reduced: prev.co2Reduced + Math.random() * 0.1,
        materialsRecovered: prev.materialsRecovered + Math.floor(Math.random() * 2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const personalImpacts = [
    {
      icon: Leaf,
      label: "Waste Diverted",
      value: (userImpact.itemsTraded * 2.3).toFixed(1),
      unit: "kg",
      change: "+12%",
      color: "primary",
      description: "Kept out of landfills"
    },
    {
      icon: Droplets,
      label: "Water Saved",
      value: (userImpact.itemsTraded * 145).toString(),
      unit: "L",
      change: "+8%",
      color: "secondary",
      description: "Manufacturing water saved"
    },
    {
      icon: Zap,
      label: "Energy Conserved", 
      value: (userImpact.itemsTraded * 34).toString(),
      unit: "kWh",
      change: "+15%",
      color: "accent",
      description: "Production energy avoided"
    },
    {
      icon: TrendingUp,
      label: "CO₂ Reduced",
      value: (userImpact.itemsTraded * 0.8).toFixed(1),
      unit: "kg",
      change: "+18%",
      color: "primary",
      description: "Carbon emissions prevented"
    }
  ];

  const achievements = [
    { title: "First Listing", description: "Created your first circular listing", earned: true },
    { title: "Green Trader", description: "Completed 5 sustainable trades", earned: true },
    { title: "Eco Warrior", description: "Saved 100kg of waste", earned: false },
    { title: "Community Leader", description: "Helped 10 community members", earned: false }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Impact Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your contribution to a circular economy. Every trade creates positive change.
          </p>
        </div>

        {/* Personal Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-0 shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">{userImpact.itemsListed}</div>
            <div className="text-sm text-muted-foreground">Items Listed</div>
          </Card>
          <Card className="p-6 text-center border-0 shadow-soft">
            <div className="text-3xl font-bold text-secondary mb-2">{userImpact.itemsTraded}</div>
            <div className="text-sm text-muted-foreground">Successful Trades</div>
          </Card>
          <Card className="p-6 text-center border-0 shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">${userImpact.totalValue}</div>
            <div className="text-sm text-muted-foreground">Value Circulated</div>
          </Card>
          <Card className="p-6 text-center border-0 shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">
              {Math.floor((Date.now() - new Date(userImpact.joinDate).getTime()) / (1000 * 60 * 60 * 24))}
            </div>
            <div className="text-sm text-muted-foreground">Days Active</div>
          </Card>
        </div>
        
        {/* Environmental Impact Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {personalImpacts.map((impact, index) => (
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
                <div className="text-xs text-muted-foreground/80">{impact.description}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Real-time Global Impact */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <h3 className="text-2xl font-bold mb-6 text-center">Live Global Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{realTimeMetrics.wasteReduction.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">kg Waste Diverted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">{realTimeMetrics.waterSaved.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">L Water Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">{realTimeMetrics.energyConserved.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">kWh Energy Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{realTimeMetrics.co2Reduced.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Reduced</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">{realTimeMetrics.materialsRecovered}</div>
              <div className="text-sm text-muted-foreground">Materials Recovered</div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Award className="w-6 h-6 mr-2 text-accent" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                  achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-muted/30'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-primary" />
              Monthly Goals
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Trade 10 Items</span>
                  <span>{userImpact.itemsTraded}/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${Math.min((userImpact.itemsTraded / 10) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Save 50kg Waste</span>
                  <span>{(userImpact.itemsTraded * 2.3).toFixed(1)}/50 kg</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-secondary h-2 rounded-full transition-all"
                    style={{ width: `${Math.min((userImpact.itemsTraded * 2.3 / 50) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Community Impact */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Together We're Making a Difference</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our growing community of eco-conscious individuals creating a circular economy.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-6">
            <div>
              <div className="text-2xl font-bold text-primary">{globalStats.totalUsers.toLocaleString()}+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">{(globalStats.itemsRescued / 1000).toFixed(0)}K</div>
              <div className="text-sm text-muted-foreground">Items Rescued</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">{globalStats.co2SavedTotal.toFixed(1)}K</div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{globalStats.treesEquivalent.toFixed(0)}</div>
              <div className="text-sm text-muted-foreground">Trees Equivalent</div>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-elegant text-white">
            View Community Impact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedImpactDashboard;