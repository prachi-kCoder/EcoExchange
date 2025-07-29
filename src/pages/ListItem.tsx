import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { Upload, Camera, Sparkles, CheckCircle, TrendingUp, Leaf, DollarSign, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ListingFormData {
  title: string;
  description: string;
  category: string;
  condition: string;
  material: string;
  location: string;
  price: string;
}

const categories = [
  "Electronics", "Textiles", "Furniture", "Metals", "Plastics", 
  "Glass", "Paper", "Industrial Materials", "Automotive", "Other"
];

const conditions = [
  "Excellent", "Good", "Fair", "Poor", "Parts Only"
];

const ListItem = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any>(null);
  const [showPersonalizedInsights, setShowPersonalizedInsights] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const form = useForm<ListingFormData>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      condition: "",
      material: "",
      location: "",
      price: ""
    }
  });

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImage(file);
    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
    
    // Simulate AI analysis with personalized touch
    setIsAnalyzing(true);
    
    // Mock AI suggestions based on image analysis with personalization
    setTimeout(() => {
      const mockSuggestions = {
        category: "Electronics",
        title: "Smartphone Device",
        description: "Mobile device in good working condition. Shows minimal wear on edges. Screen is clear without cracks. All buttons functional. Based on your previous listings, this appears to be well-maintained technology.",
        material: "Aluminum frame, glass screen, plastic components",
        condition: "Good",
        estimatedValue: "$120-160",
        marketAnalysis: {
          averagePrice: "$142",
          priceRange: "$120-160", 
          marketDemand: "High",
          competitorPrices: ["$125", "$138", "$155"],
          demandFactors: ["Back-to-school season", "Local tech hub demand", "Sustainable electronics trend"]
        },
        personalizedPricing: {
          suggestedPrice: "$135",
          reasoning: "Based on your 92% success rate in electronics + current market trends",
          pricingStrategy: "Optimal for quick sale while maximizing value",
          confidenceLevel: "94%"
        },
        secondaryUses: ["Parts harvesting", "Refurbishment", "Educational purposes"],
        environmentalImpact: {
          wasteReduction: "0.2 kg",
          co2Saved: "15 kg",
          materialsRecovered: "Rare earth metals, aluminum, glass"
        },
        personalizedInsights: {
          bestTimeToList: "Weekday evenings perform 40% better for electronics in your area",
          similarItemsSuccess: "92% of similar items you've listed found buyers within 5 days",
          localDemand: "High demand for smartphones in San Francisco Bay Area",
          yourExpertise: "Electronics category - you have 85% success rate"
        }
      };
      
      setAiSuggestions(mockSuggestions);
      setShowPersonalizedInsights(true);
      
      // Auto-fill form with suggestions
      form.setValue("category", mockSuggestions.category);
      form.setValue("title", mockSuggestions.title);
      form.setValue("description", mockSuggestions.description);
      form.setValue("material", mockSuggestions.material);
      form.setValue("condition", mockSuggestions.condition);
      form.setValue("price", mockSuggestions.personalizedPricing.suggestedPrice.replace("$", ""));
      
      setIsAnalyzing(false);
      
      toast({
        title: "AI Analysis Complete!",
        description: "Personalized suggestions ready! We've customized recommendations based on your trading history.",
      });
    }, 2500);
  };

  const onSubmit = (data: ListingFormData) => {
    console.log("Listing submitted:", data);
    toast({
      title: "Listing Created Successfully!",
      description: "Your item is now live! Based on your history, expect responses within 2-3 days.",
    });
    
    // Reset form
    form.reset();
    setImage(null);
    setImagePreview("");
    setAiSuggestions(null);
    setShowPersonalizedInsights(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Smart{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Listing Creation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload an image and let our AI create a personalized listing optimized for your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-elegant border-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Image Upload Section */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold flex items-center">
                      <Camera className="w-5 h-5 mr-2" />
                      Item Image
                    </Label>
                    <div 
                      className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      
                      {imagePreview ? (
                        <div className="space-y-4">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="max-h-64 mx-auto rounded-lg shadow-medium"
                          />
                          {isAnalyzing && (
                            <div className="flex items-center justify-center space-x-2 text-primary">
                              <Sparkles className="w-5 h-5 animate-pulse" />
                              <span className="animate-pulse">Analyzing with AI... Creating personalized suggestions</span>
                            </div>
                          )}
                          {aiSuggestions && (
                            <div className="flex items-center justify-center space-x-2 text-green-600">
                              <CheckCircle className="w-5 h-5" />
                              <span>Personalized analysis complete! Optimized for your success.</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Upload className="w-16 h-16 mx-auto text-muted-foreground" />
                          <div>
                            <p className="text-lg font-medium">Upload Item Image</p>
                            <p className="text-muted-foreground">Click to select an image for personalized AI analysis</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Item Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter item title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="condition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Condition</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select condition" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {conditions.map((condition) => (
                                <SelectItem key={condition} value={condition}>
                                  {condition}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price ($)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter price" type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="material"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Material Composition</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Aluminum, plastic, glass" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, State" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Detailed description of the item"
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? "Analyzing..." : "Create Listing"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          {/* Sidebar with AI Insights */}
          <div className="space-y-6">
            {/* AI Suggestions Panel */}
            {aiSuggestions && (
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
                <div className="flex items-start space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">AI Insights</h3>
                    <p className="text-sm text-muted-foreground">Personalized for you</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">AI Fair Value Pricing</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-muted-foreground">Market Average:</span>
                        <div className="font-semibold">{aiSuggestions.marketAnalysis.averagePrice}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Demand Level:</span>
                        <div className="font-semibold text-green-600">{aiSuggestions.marketAnalysis.marketDemand}</div>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-white rounded border">
                      <div className="text-lg font-bold text-primary">{aiSuggestions.personalizedPricing.suggestedPrice}</div>
                      <div className="text-xs text-muted-foreground">{aiSuggestions.personalizedPricing.reasoning}</div>
                      <div className="text-xs text-green-600 font-medium">Confidence: {aiSuggestions.personalizedPricing.confidenceLevel}</div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p><strong>Environmental Impact:</strong></p>
                    <ul className="ml-4 list-disc text-muted-foreground text-xs space-y-1">
                      <li>Waste Reduction: {aiSuggestions.environmentalImpact.wasteReduction}</li>
                      <li>CO₂ Saved: {aiSuggestions.environmentalImpact.co2Saved}</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p><strong>Secondary Uses:</strong></p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {aiSuggestions.secondaryUses.map((use: string, idx: number) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Personalized Insights */}
            {showPersonalizedInsights && aiSuggestions?.personalizedInsights && (
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="flex items-start space-x-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Your Success Insights</h3>
                    <p className="text-sm text-muted-foreground">Based on your trading history</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Success Rate</p>
                      <p className="text-xs text-muted-foreground">
                        {aiSuggestions.personalizedInsights.similarItemsSuccess}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Leaf className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Local Demand</p>
                      <p className="text-xs text-muted-foreground">
                        {aiSuggestions.personalizedInsights.localDemand}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Best Time to List</p>
                      <p className="text-xs text-muted-foreground">
                        {aiSuggestions.personalizedInsights.bestTimeToList}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-lg mt-3">
                    <p className="text-xs font-medium text-primary">
                      Your Expertise: {aiSuggestions.personalizedInsights.yourExpertise}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Quick Tips */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Tips</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <Camera className="w-4 h-4 text-primary mt-0.5" />
                  <p>Take photos in good lighting from multiple angles</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Sparkles className="w-4 h-4 text-secondary mt-0.5" />
                  <p>Be honest about condition - it builds trust</p>
                </div>
                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5" />
                  <p>Response time affects your seller rating</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;