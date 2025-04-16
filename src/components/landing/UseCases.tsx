
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FileImage, Instagram, Building, Megaphone } from "lucide-react";

const useCases = [
  {
    id: "menus",
    title: "תמונות לתפריט דיגיטלי ומודפס",
    description: "תמונות איכותיות שגורמות לתפריט שלכם לבלוט ומעוררות תיאבון אצל הלקוחות. מחקרים מראים שתפריטים עם תמונות מגדילים מכירות בעד 30%.",
    image: "/images/menu-images.jpg",
    icon: FileImage,
  },
  {
    id: "social",
    title: "תוכן לרשתות חברתיות",
    description: "תמונות מותאמות לפורמטים השונים ברשתות החברתיות, כולל אפשרות ליצור תמונות עונתיות או לאירועים מיוחדים.",
    image: "/images/social-media.jpg",
    icon: Instagram,
  },
  {
    id: "interior",
    title: "עיצוב וויזואליזציה של חלל המסעדה",
    description: "דמיינו את המסעדה שלכם בעיצוב חדש או לאירוע מיוחד לפני שאתם משקיעים בשינויים בפועל.",
    image: "/images/restaurant-interior.jpg",
    icon: Building,
  },
  {
    id: "marketing",
    title: "חומרי שיווק ופרסום",
    description: "מודעות, באנרים, פליירים ופרסומות עם מראה מקצועי ועקבי שמשקף את המותג שלכם.",
    image: "/images/marketing-materials.jpg",
    icon: Megaphone,
  },
];

const UseCases = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="use-cases">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-center mb-12 text-[#333333]">
          פתרונות ויזואליים לכל צורך במסעדה
        </h2>
        
        <Tabs defaultValue="menus" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8 bg-white/60 backdrop-blur-sm p-1 rounded-lg">
            {useCases.map((useCase) => (
              <TabsTrigger 
                key={useCase.id} 
                value={useCase.id} 
                className="flex flex-col py-4 gap-3 data-[state=active]:bg-[#F3752B] data-[state=active]:text-white"
              >
                <useCase.icon className="w-6 h-6" />
                <span className="text-sm md:text-base text-center">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <Card className="border-none shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <img 
                        src={useCase.image} 
                        alt={useCase.title} 
                        className="w-full h-60 md:h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white">
                      <div className="flex items-center gap-3 mb-4">
                        <useCase.icon className="w-8 h-8 text-[#8B1E3F]" />
                        <h3 className="font-heebo text-2xl font-bold text-[#8B1E3F]">
                          {useCase.title}
                        </h3>
                      </div>
                      <p className="font-openSans text-gray-700 leading-relaxed">
                        {useCase.description}
                      </p>
                      {useCase.id === "menus" && (
                        <div className="mt-4 bg-[#F3752B]/10 p-4 rounded-lg">
                          <p className="text-[#F3752B] font-semibold">
                            ↗️ מגדיל מכירות בעד 30%
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
