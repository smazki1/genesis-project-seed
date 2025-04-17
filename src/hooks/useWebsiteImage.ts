
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useWebsiteImage = (section: string, description: string) => {
  return useQuery({
    queryKey: ['website-image', section, description],
    queryFn: async () => {
      // Try to get the image metadata from the database
      const { data: imageData, error: metadataError } = await supabase
        .from('website_images')
        .select('*')
        .eq('section', section)
        .eq('description', description)
        .maybeSingle();

      if (metadataError || !imageData) {
        console.error('Error fetching image metadata:', metadataError);
        return { url: imageData?.fallback_path || '' };
      }

      // Try to get the image URL from storage
      const { data: storageData } = await supabase
        .storage
        .from('website-images')
        .getPublicUrl(imageData.image_path.replace('website-images/', ''));

      // If storage URL is available, use it; otherwise, fall back to the fallback path
      return {
        url: storageData?.publicUrl || imageData.fallback_path
      };
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};
