import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Upload, Camera, Sparkles, CheckCircle } from "lucide-react";
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

const SmartListingForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any>(null);
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
    
    // Simulate AI analysis
    setIsAnalyzing(true);
    
    // Mock AI suggestions based on image analysis
    setTimeout(() => {
      const mockSuggestions = {
        category: "Electronics",
        title: "Smartphone Device",
        description: "Mobile device in good working condition. Shows minimal wear on edges. Screen is clear without cracks. All buttons functional.",
        material: "Aluminum frame, glass screen, plastic components",
        condition: "Good",
        estimatedValue: "$120-160",
        secondaryUses: ["Parts harvesting", "Refurbishment", "Educational purposes"],
        environmentalImpact: {
          wasteReduction: "0.2 kg",
          co2Saved: "15 kg",
          materialsRecovered: "Rare earth metals, aluminum, glass"
        }
      };
      
      setAiSuggestions(mockSuggestions);
      
      // Auto-fill form with suggestions
      form.setValue("category", mockSuggestions.category);
      form.setValue("title", mockSuggestions.title);
      form.setValue("description", mockSuggestions.description);
      form.setValue("material", mockSuggestions.material);
      form.setValue("condition", mockSuggestions.condition);
      
      setIsAnalyzing(false);
      
      toast({
        title: "AI Analysis Complete!",
        description: "Smart suggestions have been generated. Review and modify as needed.",
      });
    }, 2000);
  };

  const onSubmit = (data: ListingFormData) => {
    console.log("Listing submitted:", data);
    toast({
      title: "Listing Created Successfully!",
      description: "Your item is now available for circular economy trading.",
    });
    
    // Reset form
    form.reset();
    setImage(null);
    setImagePreview("");
    setAiSuggestions(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Smart{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Listing Creation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload an image and let our AI help categorize and describe your item for optimal circularity.
          </p>
        </div>

        <Card className="p-8 shadow-elegant border-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Image Upload Section */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Item Image</Label>
                <div 
                  className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
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
                          <span>AI analyzing image...</span>
                        </div>
                      )}
                      {aiSuggestions && (
                        <div className="flex items-center justify-center space-x-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span>Analysis complete! Suggestions applied below.</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Camera className="w-16 h-16 mx-auto text-muted-foreground" />
                      <div>
                        <p className="text-lg font-medium">Upload Item Image</p>
                        <p className="text-muted-foreground">Click to select an image for AI analysis</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* AI Suggestions Panel */}
              {aiSuggestions && (
                <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
                  <div className="flex items-start space-x-3 mb-4">
                    <Sparkles className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">AI Insights & Suggestions</h3>
                      <p className="text-muted-foreground">Generated from image analysis</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Estimated Value:</strong> {aiSuggestions.estimatedValue}</p>
                      <p><strong>Environmental Impact:</strong></p>
                      <ul className="ml-4 list-disc text-muted-foreground">
                        <li>Waste Reduction: {aiSuggestions.environmentalImpact.wasteReduction}</li>
                        <li>CO₂ Saved: {aiSuggestions.environmentalImpact.co2Saved}</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Secondary Uses:</strong></p>
                      <ul className="ml-4 list-disc text-muted-foreground">
                        {aiSuggestions.secondaryUses.map((use: string, idx: number) => (
                          <li key={idx}>{use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )}

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6">
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
                Create Listing
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default SmartListingForm;