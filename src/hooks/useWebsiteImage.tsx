
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useWebsiteImage(section: string, description: string, fallbackUrl: string) {
  const [imageUrl, setImageUrl] = useState<string>(fallbackUrl);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // First get the image path from the database
        const { data, error } = await supabase
          .from('website_images')
          .select('image_path, fallback_path')
          .eq('section', section)
          .eq('description', description)
          .single();
        
        if (error || !data) {
          console.error("Error fetching image path:", error);
          setImageUrl(fallbackUrl);
          setIsLoading(false);
          return;
        }
        
        // If the image path starts with 'website-images/', try to get the URL from storage
        if (data.image_path.startsWith('website-images/')) {
          const { data: storageData, error: storageError } = await supabase.storage
            .from('website-images')
            .createSignedUrl(data.image_path.replace('website-images/', ''), 3600);
          
          if (storageError || !storageData) {
            console.error("Error fetching image from storage:", storageError);
            // If there's an error with storage, use the fallback URL
            setImageUrl(data.fallback_path || fallbackUrl);
          } else {
            setImageUrl(storageData.signedUrl);
          }
        } else {
          // If it's an external URL, use it directly
          setImageUrl(data.image_path);
        }
      } catch (error) {
        console.error("Error in useWebsiteImage:", error);
        setImageUrl(fallbackUrl);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchImage();
  }, [section, description, fallbackUrl]);
  
  return { imageUrl, isLoading };
}
