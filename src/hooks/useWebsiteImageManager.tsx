
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type WebsiteImageSection = 
  | "hero"
  | "use_cases"
  | "testimonials" 
  | "before_after";

export type WebsiteImageDescription = 
  | "main"
  | "menu-images"
  | "social-media"
  | "restaurant-interior"
  | "testimonial-1"
  | "testimonial-2"
  | "testimonial-3"
  | "before-pasta"
  | "after-pasta"
  | "before-dessert"
  | "after-dessert"
  | "before-interior"
  | "after-interior";

type ImageMetadata = {
  id: string;
  section: WebsiteImageSection;
  description: WebsiteImageDescription;
  image_path: string;
  fallback_path: string;
};

export const useWebsiteImageManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImageMetadata[]>([]);
  const [lastUpload, setLastUpload] = useState<number>(0);
  
  // Get all images metadata from the database
  const fetchAllImages = async () => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('website_images')
        .select('*');
      
      if (error) {
        throw error;
      }
      
      console.log("Fetched images:", data);
      setImages(data as ImageMetadata[]);
    } catch (error) {
      console.error("Error fetching images:", error);
      toast.error("Failed to load images", {
        description: error instanceof Error ? error.message : "Unknown error"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Upload a new image to replace an existing one
  const uploadImage = async (
    section: WebsiteImageSection, 
    description: WebsiteImageDescription, 
    file: File
  ) => {
    setIsLoading(true);
    
    try {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        throw new Error("Please upload a valid image file");
      }
      
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        throw new Error("File size should be less than 5MB");
      }
      
      // First check if we have this image in our database
      const { data: existingImage, error: findError } = await supabase
        .from('website_images')
        .select('*')
        .eq('section', section)
        .eq('description', description)
        .single();
        
      if (findError || !existingImage) {
        throw findError || new Error(`No image found with section "${section}" and description "${description}"`);
      }
      
      console.log("Existing image found:", existingImage);
      
      // Upload the image to storage
      const filePath = `website-images/${section}-${description}-${Date.now()}.${file.name.split('.').pop()}`;
      
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('website-images')
        .upload(filePath, file, {
          cacheControl: '0', // Disable cache to ensure new images are always fetched
          upsert: false,
        });
      
      if (uploadError) {
        throw uploadError;
      }
      
      console.log("Image uploaded successfully:", uploadData);
      
      // Get the public URL of the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('website-images')
        .getPublicUrl(filePath);
      
      console.log("Public URL generated:", publicUrl);
      
      // Update the image reference in the database
      const { error: updateError } = await supabase
        .from('website_images')
        .update({ 
          image_path: publicUrl,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingImage.id);
      
      if (updateError) {
        throw updateError;
      }
      
      console.log("Database updated with new image path");
      toast.success("Image uploaded successfully");
      
      // Mark the upload time to trigger refreshes
      setLastUpload(Date.now());
      
      // Refresh the images list
      await fetchAllImages();
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image", {
        description: error instanceof Error ? error.message : "Unknown error"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Get image sections and descriptions mapping for UI display
  const getImageMappings = () => {
    const mappings = [
      { section: "hero", description: "main", displayName: "Hero Background" },
      { section: "use_cases", description: "menu-images", displayName: "Use Case: Menu Images" },
      { section: "use_cases", description: "social-media", displayName: "Use Case: Social Media" },
      { section: "use_cases", description: "restaurant-interior", displayName: "Use Case: Restaurant Interior" },
      { section: "testimonials", description: "testimonial-1", displayName: "Testimonial 1" },
      { section: "testimonials", description: "testimonial-2", displayName: "Testimonial 2" },
      { section: "testimonials", description: "testimonial-3", displayName: "Testimonial 3" },
      { section: "before_after", description: "before-pasta", displayName: "Before Pasta" },
      { section: "before_after", description: "after-pasta", displayName: "After Pasta" },
      { section: "before_after", description: "before-dessert", displayName: "Before Dessert" },
      { section: "before_after", description: "after-dessert", displayName: "After Dessert" },
      { section: "before_after", description: "before-interior", displayName: "Before Interior" },
      { section: "before_after", description: "after-interior", displayName: "After Interior" }
    ];
    
    return mappings as {
      section: WebsiteImageSection;
      description: WebsiteImageDescription;
      displayName: string;
    }[];
  };
  
  return {
    isLoading,
    images,
    lastUpload,
    fetchAllImages,
    uploadImage,
    getImageMappings
  };
};
