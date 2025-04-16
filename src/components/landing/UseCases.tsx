
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <section className="py-20 bg-white" id="use-cases">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
          פתרונות ויזואליים לכל צורך במסעדה
        </h2>
        
        <Tabs defaultValue="menus" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger key={useCase.id} value={useCase.id} className="flex flex-col py-3 items-center gap-2">
                <useCase.icon className="w-6 h-6" />
                <span className="text-sm md:text-base">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <img 
                        src={useCase.image} 
                        alt={useCase.title} 
                        className="w-full h-60 md:h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="font-heebo text-2xl font-bold mb-4 text-[#8B1E3F]">
                        {useCase.title}
                      </h3>
                      <p className="font-openSans text-gray-700">
                        {useCase.description}
                      </p>
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
