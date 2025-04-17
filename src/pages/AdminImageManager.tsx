
import { useState, useEffect } from "react";
import { useWebsiteImageManager } from "@/hooks/useWebsiteImageManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon } from "lucide-react";

const AdminImageManager = () => {
  const { 
    isLoading, 
    images, 
    fetchAllImages, 
    uploadImage, 
    getImageMappings 
  } = useWebsiteImageManager();
  
  const [activeTab, setActiveTab] = useState("hero");
  const imageMappings = getImageMappings();
  
  useEffect(() => {
    fetchAllImages();
  }, []);
  
  const handleFileUpload = async (section: string, description: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      await uploadImage(section as any, description as any, file);
    }
  };
  
  const sections = [...new Set(imageMappings.map(mapping => mapping.section))];
  
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Website Image Manager</h1>
      <p className="text-gray-600 mb-8">
        Upload and manage images for different sections of your website.
        Images uploaded here will appear on the website.
      </p>
      
      <Tabs defaultValue="hero" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          {sections.map(section => (
            <TabsTrigger key={section} value={section} className="capitalize">
              {section.replace("_", " ")}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {sections.map(section => (
          <TabsContent key={section} value={section} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageMappings
                .filter(mapping => mapping.section === section)
                .map(mapping => {
                  // Find the corresponding image in our images array
                  const image = images.find(img => 
                    img.section === mapping.section && 
                    img.description === mapping.description
                  );
                  
                  return (
                    <Card key={`${mapping.section}-${mapping.description}`}>
                      <CardHeader>
                        <CardTitle>{mapping.displayName}</CardTitle>
                        <CardDescription>
                          Section: {mapping.section}, ID: {mapping.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="relative aspect-video bg-gray-100 rounded overflow-hidden">
                          {image ? (
                            <img 
                              src={image.image_path || image.fallback_path} 
                              alt={mapping.displayName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center w-full h-full">
                              <ImageIcon className="w-12 h-12 text-gray-300" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            {isLoading ? "Loading..." : "Upload a new image"}
                          </div>
                          <div>
                            <label htmlFor={`file-${mapping.section}-${mapping.description}`}>
                              <div className="cursor-pointer">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  disabled={isLoading}
                                  onClick={() => document.getElementById(`file-${mapping.section}-${mapping.description}`)?.click()}
                                >
                                  <Upload className="w-4 h-4 mr-2" /> 
                                  Upload
                                </Button>
                              </div>
                            </label>
                            <input 
                              type="file" 
                              id={`file-${mapping.section}-${mapping.description}`}
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => handleFileUpload(mapping.section, mapping.description, e)}
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AdminImageManager;
