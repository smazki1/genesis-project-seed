
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";

const BeforeAfterGallery = () => {
  // Fetch images using our hook
  const beforePasta = useWebsiteImage("before_after", "before-pasta", "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070");
  const afterPasta = useWebsiteImage("before_after", "after-pasta", "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070");
  
  const beforeDessert = useWebsiteImage("before_after", "before-dessert", "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964");
  const afterDessert = useWebsiteImage("before_after", "after-dessert", "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978");
  
  const beforeInterior = useWebsiteImage("before_after", "before-interior", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070");
  const afterInterior = useWebsiteImage("before_after", "after-interior", "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070");

  const beforeAfterPairs = [
    {
      id: 1,
      title: "צילום מנת פסטה",
      before: beforePasta.imageUrl,
      after: afterPasta.imageUrl,
    },
    {
      id: 2,
      title: "צילום קינוח",
      before: beforeDessert.imageUrl,
      after: afterDessert.imageUrl,
    },
    {
      id: 3,
      title: "צילום חלל המסעדה",
      before: beforeInterior.imageUrl,
      after: afterInterior.imageUrl,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-center mb-12">
          מהתיאור שלך ליצירה מרהיבה במהירות שיא
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {beforeAfterPairs.map((pair) => (
              <CarouselItem key={pair.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <h3 className="font-heebo text-xl font-bold text-center">{pair.title}</h3>
                      <div className="space-y-2">
                        <div className="relative aspect-[4/3]">
                          <img
                            src={pair.before}
                            alt={`לפני - ${pair.title}`}
                            className="rounded-lg object-cover w-full h-full"
                          />
                          <span className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-sm">
                            לפני
                          </span>
                        </div>
                        <div className="relative aspect-[4/3]">
                          <img
                            src={pair.after}
                            alt={`אחרי - ${pair.title}`}
                            className="rounded-lg object-cover w-full h-full"
                          />
                          <span className="absolute top-2 right-2 bg-[#F3752B]/80 text-white px-2 py-1 rounded text-sm">
                            אחרי
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
