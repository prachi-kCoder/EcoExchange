import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Edit, TrendingUp, Leaf, Droplets, Zap, Award, Target, Users, Calendar, CheckCircle } from "lucide-react";
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

  const [userImpact] = useState({
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
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => ({
        wasteReduction: prev.wasteReduction + Math.floor(Math.random() * 5),
        waterSaved: prev.waterSaved + Math.floor(Math.random() * 20),
        energyConserved: prev.energyConserved + Math.floor(Math.random() * 10),
        co2Reduced: prev.co2Reduced + Math.random() * 0.1,
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const personalImpacts = [
    { icon: Leaf, label: "Waste Diverted", value: (userImpact.itemsTraded * 2.3).toFixed(1), unit: "kg", change: "+12%", color: "primary", description: "Kept out of landfills" },
    { icon: Droplets, label: "Water Saved", value: (userImpact.itemsTraded * 145).toString(), unit: "L", change: "+8%", color: "secondary", description: "Manufacturing water saved" },
    { icon: Zap, label: "Energy Conserved", value: (userImpact.itemsTraded * 34).toString(), unit: "kWh", change: "+15%", color: "accent", description: "Production energy avoided" },
    { icon: TrendingUp, label: "CO₂ Reduced", value: (userImpact.itemsTraded * 0.8).toFixed(1), unit: "kg", change: "+18%", color: "primary", description: "Carbon emissions prevented" }
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

  const daysActive = Math.floor((Date.now() - new Date(userImpact.joinDate).getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-6 sm:py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Profile Header */}
          <Card className="p-5 sm:p-8 mb-6 sm:mb-8 border-0 shadow-md bg-gradient-to-br from-card via-card to-primary/5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24 ring-4 ring-primary/10">
                <AvatarImage src={userProfile.avatar} />
                <AvatarFallback className="text-xl sm:text-2xl bg-gradient-to-br from-primary to-accent text-white font-bold">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center sm:text-left min-w-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-bold truncate">{userProfile.name}</h1>
                  {userProfile.verified && (
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  )}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 line-clamp-2">{userProfile.bio}</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Joined {new Date(userProfile.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <span>📍 {userProfile.location}</span>
                  <span>⭐ {userProfile.rating} ({userProfile.reviewCount})</span>
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm" className="rounded-full text-xs sm:text-sm">
                  <Edit className="w-3.5 h-3.5 mr-1.5" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="rounded-full text-xs sm:text-sm">
                  <Settings className="w-3.5 h-3.5 mr-1.5" />
                  Settings
                </Button>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="impact" className="space-y-5 sm:space-y-6">
            <TabsList className="w-full grid grid-cols-4 h-auto p-1 rounded-xl">
              {["impact", "activity", "achievements", "stats"].map((tab) => (
                <TabsTrigger key={tab} value={tab} className="rounded-lg py-2 text-xs sm:text-sm capitalize">
                  {tab === "impact" ? "Impact" : tab === "activity" ? "Activity" : tab === "achievements" ? "Badges" : "Stats"}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Impact Tab */}
            <TabsContent value="impact" className="space-y-5 sm:space-y-6 animate-fade-in">
              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: "Items Listed", value: userImpact.itemsListed, color: "text-primary" },
                  { label: "Successful Trades", value: userImpact.itemsTraded, color: "text-secondary-foreground" },
                  { label: "Value Circulated", value: `$${userImpact.totalValue}`, color: "text-accent" },
                  { label: "Days Active", value: daysActive, color: "text-primary" },
                ].map((stat) => (
                  <Card key={stat.label} className="p-4 sm:p-5 text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>

              {/* Environmental metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {personalImpacts.map((impact, index) => (
                  <Card key={index} className="p-4 sm:p-5 text-center border-0 shadow-sm hover:shadow-md transition-all group">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform ${
                      impact.color === 'primary' ? 'bg-primary/10' :
                      impact.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
                    }`}>
                      <impact.icon className={`w-5 h-5 ${
                        impact.color === 'primary' ? 'text-primary' :
                        impact.color === 'secondary' ? 'text-secondary' : 'text-accent'
                      }`} />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold">{impact.value}</div>
                    <div className="text-xs text-muted-foreground">{impact.unit} · {impact.label}</div>
                    <div className="text-xs text-green-600 font-medium mt-1">{impact.change}</div>
                  </Card>
                ))}
              </div>

              {/* Monthly Goals */}
              <Card className="p-5 sm:p-6 border-0 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Monthly Goals
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Trade 10 Items", current: userImpact.itemsTraded, target: 10, color: "bg-primary" },
                    { label: "Save 50kg Waste", current: parseFloat((userImpact.itemsTraded * 2.3).toFixed(1)), target: 50, color: "bg-secondary" },
                  ].map((goal) => (
                    <div key={goal.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium">{goal.label}</span>
                        <span className="text-muted-foreground">{goal.current}/{goal.target}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`${goal.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="animate-fade-in">
              <Card className="p-5 sm:p-6 border-0 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm shrink-0 ${
                        activity.type === 'listing' ? 'bg-primary/10' :
                        activity.type === 'trade' ? 'bg-secondary/10' : 'bg-accent/10'
                      }`}>
                        {activity.type === 'listing' ? '📝' : activity.type === 'trade' ? '🤝' : '⭐'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base truncate">{activity.action}: {activity.item}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="animate-fade-in">
              <Card className="p-5 sm:p-6 border-0 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Achievements
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                      achievement.earned
                        ? 'bg-primary/5 border border-primary/15 hover:border-primary/30'
                        : 'bg-muted/30 opacity-60'
                    }`}>
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 ${
                        achievement.earned ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                      }`}>
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Stats Tab */}
            <TabsContent value="stats" className="animate-fade-in">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <Card className="p-5 sm:p-6 border-0 shadow-sm">
                  <h3 className="text-lg font-bold mb-4">🌍 Live Global Impact</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Waste Diverted", value: `${realTimeMetrics.wasteReduction.toLocaleString()} kg`, color: "text-primary" },
                      { label: "Water Saved", value: `${realTimeMetrics.waterSaved.toLocaleString()} L`, color: "text-secondary-foreground" },
                      { label: "Energy Conserved", value: `${realTimeMetrics.energyConserved.toLocaleString()} kWh`, color: "text-accent" },
                      { label: "CO₂ Reduced", value: `${realTimeMetrics.co2Reduced.toFixed(1)} tons`, color: "text-primary" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <span className={`font-bold text-sm ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 sm:p-6 border-0 shadow-sm">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Community Rank
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Global Rank", value: "#247", color: "text-primary" },
                      { label: "Regional Rank", value: "#12", color: "text-secondary-foreground" },
                      { label: "Impact Score", value: "89/100", color: "text-accent" },
                      { label: "Level", value: "Eco Warrior", color: "text-primary" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <span className={`font-bold text-sm ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
