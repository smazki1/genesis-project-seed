import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FileImage, Instagram, Building, Megaphone } from "lucide-react";
const useCases = [{
  id: "menus",
  title: "תמונות לתפריט דיגיטלי ומודפס",
  description: "תמונות איכותיות שגורמות לתפריט שלכם לבלוט ומעוררות תיאבון אצל הלקוחות. מחקרים מראים שתפריטים עם תמונות מגדילים מכירות בעד 30%.",
  image: "/images/menu-images.jpg",
  icon: FileImage,
  hasCallout: true,
  calloutText: "מגדיל מכירות בעד 30%"
}, {
  id: "social",
  title: "תוכן לרשתות חברתיות",
  description: "תמונות מותאמות לפורמטים השונים ברשתות החברתיות, כולל אפשרות ליצור תמונות עונתיות או לאירועים מיוחדים.",
  image: "/images/social-media.jpg",
  icon: Instagram,
  hasCallout: false
}, {
  id: "interior",
  title: "עיצוב וויזואליזציה של חלל המסעדה",
  description: "דמיינו את המסעדה שלכם בעיצוב חדש או לאירוע מיוחד לפני שאתם משקיעים בשינויים בפועל.",
  image: "/images/restaurant-interior.jpg",
  icon: Building,
  hasCallout: false
}, {
  id: "marketing",
  title: "חומרי שיווק ופרסום",
  description: "מודעות, באנרים, פליירים ופרסומות עם מראה מקצועי ועקבי שמשקף את המותג שלכם.",
  image: "/images/marketing-materials.jpg",
  icon: Megaphone,
  hasCallout: false
}];
const UseCases = () => {
  return <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="use-cases">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-center mb-12 text-[#333333]">
          פתרונות ויזואליים לכל צורך במסעדה
        </h2>
        
        <div className="relative w-full mx-auto rounded-none">
          <Tabs defaultValue="menus" className="w-full">
            {/* Tab Navigation */}
            <TabsList className="flex flex-wrap justify-center w-full mb-8 bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
              {useCases.map(useCase => <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center gap-2 py-4 px-6 data-[state=active]:bg-[#8B1E3F] data-[state=active]:text-white transition-all duration-200 hover:bg-gray-50 data-[state=active]:hover:bg-[#8B1E3F]/90">
                  <useCase.icon className="w-5 h-5" />
                  <span className="text-sm font-medium line-clamp-1">{useCase.title}</span>
                </TabsTrigger>)}
            </TabsList>
            
            {/* Tab Content */}
            <div className="mt-6">
              {useCases.map(useCase => <TabsContent key={useCase.id} value={useCase.id} className="focus-visible:outline-none">
                  <Card className="border-none overflow-hidden shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row rounded-none">
                        {/* Image Section */}
                        

                        {/* Content Section */}
                        
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>)}
            </div>
          </Tabs>
        </div>
      </div>
    </section>;
};
export default UseCases;