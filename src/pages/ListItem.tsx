import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const conditions = ["Excellent", "Good", "Fair", "Poor", "Parts Only"];

const ListItem = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any>(null);
  const [showPersonalizedInsights, setShowPersonalizedInsights] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const form = useForm<ListingFormData>({
    defaultValues: { title: "", description: "", category: "", condition: "", material: "", location: "", price: "" }
  });

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setIsAnalyzing(true);

    setTimeout(() => {
      const mockSuggestions = {
        category: "Electronics",
        title: "Smartphone Device",
        description: "Mobile device in good working condition. Shows minimal wear on edges. Screen is clear without cracks. All buttons functional.",
        material: "Aluminum frame, glass screen, plastic components",
        condition: "Good",
        marketAnalysis: { averagePrice: "$142", priceRange: "$120-160", marketDemand: "High" },
        personalizedPricing: { suggestedPrice: "$135", reasoning: "Based on your 92% success rate in electronics + current market trends", confidenceLevel: "94%" },
        secondaryUses: ["Parts harvesting", "Refurbishment", "Educational purposes"],
        environmentalImpact: { wasteReduction: "0.2 kg", co2Saved: "15 kg", materialsRecovered: "Rare earth metals, aluminum, glass" },
        personalizedInsights: {
          bestTimeToList: "Weekday evenings perform 40% better for electronics in your area",
          similarItemsSuccess: "92% of similar items you've listed found buyers within 5 days",
          localDemand: "High demand for smartphones in San Francisco Bay Area",
          yourExpertise: "Electronics category - you have 85% success rate"
        }
      };

      setAiSuggestions(mockSuggestions);
      setShowPersonalizedInsights(true);
      form.setValue("category", mockSuggestions.category);
      form.setValue("title", mockSuggestions.title);
      form.setValue("description", mockSuggestions.description);
      form.setValue("material", mockSuggestions.material);
      form.setValue("condition", mockSuggestions.condition);
      form.setValue("price", mockSuggestions.personalizedPricing.suggestedPrice.replace("$", ""));
      setIsAnalyzing(false);

      toast({ title: "AI Analysis Complete!", description: "Personalized suggestions ready based on your trading history." });
    }, 2500);
  };

  const onSubmit = (data: ListingFormData) => {
    toast({ title: "Listing Created Successfully!", description: "Your item is now live!" });
    form.reset();
    setImage(null);
    setImagePreview("");
    setAiSuggestions(null);
    setShowPersonalizedInsights(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-6 sm:py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Smart{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Listing</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Upload an image and let AI create a personalized listing optimized for your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-5 sm:gap-6">
            {/* Main Form (3 cols) */}
            <div className="lg:col-span-3">
              <Card className="p-5 sm:p-7 shadow-sm border-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    {/* Image Upload */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        Item Image
                      </Label>
                      <div
                        className="border-2 border-dashed border-muted-foreground/20 rounded-2xl p-6 sm:p-8 text-center cursor-pointer hover:border-primary/40 transition-all duration-300 hover:bg-primary/5 group"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

                        {imagePreview ? (
                          <div className="space-y-3">
                            <img src={imagePreview} alt="Preview" className="max-h-48 sm:max-h-56 mx-auto rounded-xl shadow-md object-contain" />
                            {isAnalyzing && (
                              <div className="flex items-center justify-center gap-2 text-primary text-sm">
                                <Sparkles className="w-4 h-4 animate-spin" />
                                <span className="animate-pulse">Analyzing with AI...</span>
                              </div>
                            )}
                            {aiSuggestions && (
                              <div className="flex items-center justify-center gap-2 text-green-600 text-sm">
                                <CheckCircle className="w-4 h-4" />
                                <span>Analysis complete — form auto-filled!</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <Upload className="w-12 h-12 sm:w-14 sm:h-14 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                            <div>
                              <p className="font-medium text-sm sm:text-base">Click to upload an image</p>
                              <p className="text-xs sm:text-sm text-muted-foreground">AI will analyze and auto-fill details</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="title" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Item Title</FormLabel>
                          <FormControl><Input placeholder="Enter item title" className="rounded-xl" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="category" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Category</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Select category" /></SelectTrigger></FormControl>
                            <SelectContent>
                              {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="condition" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Condition</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Select condition" /></SelectTrigger></FormControl>
                            <SelectContent>
                              {conditions.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="price" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Price ($)</FormLabel>
                          <FormControl><Input placeholder="Enter price" type="number" className="rounded-xl" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="material" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Material</FormLabel>
                          <FormControl><Input placeholder="e.g., Aluminum, plastic" className="rounded-xl" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="location" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Location</FormLabel>
                          <FormControl><Input placeholder="City, State" className="rounded-xl" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="description" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Detailed description of the item" className="min-h-28 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" size="lg" className="w-full rounded-xl" disabled={isAnalyzing}>
                      {isAnalyzing ? "Analyzing..." : "Create Listing"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            {/* Sidebar (2 cols) */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {/* AI Suggestions Panel */}
              {aiSuggestions && (
                <Card className="p-5 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 animate-fade-in">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">AI Insights</h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    {/* Pricing */}
                    <div className="bg-card/80 p-4 rounded-xl border border-border/50">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-green-800 text-xs uppercase tracking-wide">Fair Value Pricing</span>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{aiSuggestions.personalizedPricing.suggestedPrice}</div>
                      <div className="text-xs text-muted-foreground">{aiSuggestions.personalizedPricing.reasoning}</div>
                      <div className="flex items-center gap-2 mt-2 text-xs">
                        <Badge variant="secondary" className="text-xs">Market Avg: {aiSuggestions.marketAnalysis.averagePrice}</Badge>
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">Demand: {aiSuggestions.marketAnalysis.marketDemand}</Badge>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="space-y-2">
                      <p className="font-medium text-xs uppercase tracking-wide text-muted-foreground">Environmental Impact</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-card/80 p-3 rounded-lg text-center">
                          <div className="text-sm font-bold text-primary">{aiSuggestions.environmentalImpact.co2Saved}</div>
                          <div className="text-xs text-muted-foreground">CO₂ Saved</div>
                        </div>
                        <div className="bg-card/80 p-3 rounded-lg text-center">
                          <div className="text-sm font-bold text-accent">{aiSuggestions.environmentalImpact.wasteReduction}</div>
                          <div className="text-xs text-muted-foreground">Waste Reduced</div>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Uses */}
                    <div>
                      <p className="font-medium text-xs uppercase tracking-wide text-muted-foreground mb-2">Secondary Uses</p>
                      <div className="flex flex-wrap gap-1.5">
                        {aiSuggestions.secondaryUses.map((use: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs rounded-full">{use}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {/* Personalized Insights */}
              {showPersonalizedInsights && aiSuggestions?.personalizedInsights && (
                <Card className="p-5 bg-gradient-to-br from-accent/5 to-primary/5 border-0 animate-fade-in">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Your Insights</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    {[
                      { icon: TrendingUp, color: "text-green-600", label: "Success Rate", text: aiSuggestions.personalizedInsights.similarItemsSuccess },
                      { icon: Leaf, color: "text-primary", label: "Local Demand", text: aiSuggestions.personalizedInsights.localDemand },
                      { icon: Sparkles, color: "text-accent", label: "Best Time", text: aiSuggestions.personalizedInsights.bestTimeToList },
                    ].map(({ icon: Icon, color, label, text }) => (
                      <div key={label} className="flex items-start gap-2">
                        <Icon className={`w-4 h-4 ${color} mt-0.5 shrink-0`} />
                        <div>
                          <p className="font-medium text-xs">{label}</p>
                          <p className="text-xs text-muted-foreground">{text}</p>
                        </div>
                      </div>
                    ))}
                    <div className="p-3 bg-primary/10 rounded-xl mt-2">
                      <p className="text-xs font-medium text-primary">
                        🏆 {aiSuggestions.personalizedInsights.yourExpertise}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Quick Tips */}
              <Card className="p-5 border-0 shadow-sm">
                <h3 className="font-semibold mb-3 text-sm">Quick Tips</h3>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  {[
                    { icon: Camera, color: "text-primary", text: "Take photos in good lighting from multiple angles" },
                    { icon: Sparkles, color: "text-secondary-foreground", text: "Be honest about condition — it builds trust" },
                    { icon: TrendingUp, color: "text-accent", text: "Response time affects your seller rating" },
                  ].map(({ icon: Icon, color, text }) => (
                    <div key={text} className="flex items-start gap-2">
                      <Icon className={`w-3.5 h-3.5 ${color} mt-0.5 shrink-0`} />
                      <p className="text-muted-foreground">{text}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListItem;
