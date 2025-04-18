import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const beforeAfterPairs = [
  {
    id: 1,
    title: "צילום מנת פסטה",
    before: "/images/fruits - before2.jpg",
    after: "/images/24718040-0.jpg",
  },
  {
    id: 2,
    title: "צילום קינוח",
    before: "https://github.com/smazki1/genesis-project-seed/blob/main/public/images/492137535_122128159040643046_6162885444587868048_n.jpg?raw=true",
    after: "/images/24717845-0 (1).jpg",
  },
  {
    id: 3,
    title: "צילום חלל המסעדה",
    before: "/images/2ebf6f23-b8ac-458b-b1a9-0591f75b72d5.jpeg",
    after: "/images/3.jpeg",
  },
];

const BeforeAfterGallery = () => {
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
