
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useWebsiteImage(section: string, description: string, fallbackUrl: string) {
  const [imageUrl, setImageUrl] = useState<string>(fallbackUrl);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastRefresh, setLastRefresh] = useState<number>(Date.now());
  
  const refetch = () => {
    setLastRefresh(Date.now());
  };
  
  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      try {
        // Add a cache-busting parameter to prevent browser caching
        const timestamp = new Date().getTime();
        
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
        
        // Since we're now storing the full public URL in the database,
        // we can use it directly without additional processing
        if (data.image_path) {
          // Add cache-busting parameter to the URL
          const imageUrlWithCache = `${data.image_path}?t=${timestamp}`;
          setImageUrl(imageUrlWithCache);
        } else {
          // Fallback to the provided fallback path or the one from the database
          setImageUrl(data.fallback_path || fallbackUrl);
        }
      } catch (error) {
        console.error("Error in useWebsiteImage:", error);
        setImageUrl(fallbackUrl);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchImage();
  }, [section, description, fallbackUrl, lastRefresh]);
  
  return { imageUrl, isLoading, refetch };
}
