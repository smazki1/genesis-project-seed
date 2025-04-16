
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const examples = [
  {
    id: 1,
    title: "מנת פסטה ביתית",
    before: "/images/before-pasta.jpg",
    after: "/images/after-pasta.jpg",
    description: "מתיאור טקסטואלי בלבד ליצירה מרהיבה של מנת פסטה ברוטב עגבניות",
  },
  {
    id: 2,
    title: "קינוח שוקולד",
    before: "/images/before-dessert.jpg",
    after: "/images/after-dessert.jpg",
    description: "מתמונה בסיסית מטלפון נייד לתמונה מקצועית של קינוח שוקולד",
  },
  {
    id: 3,
    title: "חלל מסעדה",
    before: "/images/before-interior.jpg",
    after: "/images/after-interior.jpg",
    description: "משרטוט פשוט של מבנה המסעדה להדמיה מקצועית של חלל האירוח",
  },
];

const BeforeAfterGallery = () => {
  const [sliderValues, setSliderValues] = useState<Record<number, number[]>>(
    examples.reduce((acc, example) => ({ ...acc, [example.id]: [50] }), {})
  );

  const handleSliderChange = (id: number, value: number[]) => {
    setSliderValues(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
          לפני ואחרי
        </h2>
        
        <p className="font-openSans text-center text-xl mb-12">
          מהתיאור שלך ליצירה מרהיבה במהירות שיא
        </p>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {examples.map((example) => (
              <CarouselItem key={example.id} className="md:basis-full">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <h3 className="font-heebo text-2xl font-bold mb-4 text-[#8B1E3F]">
                        {example.title}
                      </h3>
                      <p className="font-openSans mb-4">{example.description}</p>
                    </div>
                    
                    <div className="relative h-[400px] overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: `url(${example.after})` }}
                      />
                      <div 
                        className="absolute top-0 left-0 h-full bg-cover bg-center" 
                        style={{ 
                          backgroundImage: `url(${example.before})`,
                          width: `${sliderValues[example.id]?.[0] || 50}%` 
                        }}
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="w-3/4 px-4">
                          <Slider
                            value={sliderValues[example.id] || [50]}
                            min={0}
                            max={100}
                            step={1}
                            onValueChange={(value) => handleSliderChange(example.id, value)}
                            className="z-10"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
