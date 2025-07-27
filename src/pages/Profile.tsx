import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Edit, TrendingUp, Leaf, Droplets, Zap, Award, Target, Users, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userProfile] = useState({
    name: "Alex Chen",
    email: "alex.chen@example.com",
    joinDate: "2024-01-15",
    location: "San Francisco, CA",
    bio: "Passionate about sustainable living and circular economy. Building a greener future one trade at a time.",
    avatar: "",
    verified: true,
    rating: 4.8,
    reviewCount: 23
  });

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

  const recentActivity = [
    { action: "Listed", item: "Vintage Leather Jacket", date: "2 days ago", type: "listing" },
    { action: "Traded", item: "iPhone 12 Pro", date: "5 days ago", type: "trade" },
    { action: "Listed", item: "Wooden Coffee Table", date: "1 week ago", type: "listing" },
    { action: "Received Review", item: "Great buyer experience!", date: "1 week ago", type: "review" }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Header */}
        <Card className="p-8 mb-8 border-0 shadow-elegant">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={userProfile.avatar} />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                {userProfile.verified && (
                  <Badge className="bg-primary/10 text-primary border-primary/20">Verified</Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-3">{userProfile.bio}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Joined {new Date(userProfile.joinDate).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
                <span>📍 {userProfile.location}</span>
                <span>⭐ {userProfile.rating} ({userProfile.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="impact" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="impact">Impact Dashboard</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="impact" className="space-y-6">
            {/* Personal Statistics */}
            <div className="grid md:grid-cols-4 gap-6">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Monthly Goals */}
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
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'listing' ? 'bg-primary/10 text-primary' :
                      activity.type === 'trade' ? 'bg-secondary/10 text-secondary' :
                      'bg-accent/10 text-accent'
                    }`}>
                      {activity.type === 'listing' ? '📝' : activity.type === 'trade' ? '🤝' : '⭐'}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.action} {activity.item}</div>
                      <div className="text-sm text-muted-foreground">{activity.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-accent" />
                Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-4 rounded-lg ${
                    achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-muted/30'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Live Global Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Waste Diverted</span>
                    <span className="font-bold text-primary">{realTimeMetrics.wasteReduction.toLocaleString()} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Water Saved</span>
                    <span className="font-bold text-secondary">{realTimeMetrics.waterSaved.toLocaleString()} L</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Conserved</span>
                    <span className="font-bold text-accent">{realTimeMetrics.energyConserved.toLocaleString()} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CO₂ Reduced</span>
                    <span className="font-bold text-primary">{realTimeMetrics.co2Reduced.toFixed(1)} tons</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Community Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Your Rank</span>
                    <span className="font-bold text-primary">#247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regional Rank</span>
                    <span className="font-bold text-secondary">#12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impact Score</span>
                    <span className="font-bold text-accent">89/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Community Level</span>
                    <span className="font-bold text-primary">Eco Warrior</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;