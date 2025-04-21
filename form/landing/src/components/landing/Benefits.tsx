
import { DollarSign, Clock, RefreshCw, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    id: 1,
    title: "חיסכון של עד 80% בעלויות",
    description: "שכירת צלם מקצועי ליום צילומים יכולה לעלות אלפי שקלים. הפתרון שלנו חוסך לך את רוב העלויות.",
    icon: DollarSign,
  },
  {
    id: 2,
    title: "חיסכון בזמן יקר",
    description: "במקום לתאם יום צילומים שלם, להכין את המסעדה והמנות - קבלו תמונות מוכנות תוך ימים ספורים.",
    icon: Clock,
  },
  {
    id: 3,
    title: "גמישות ועדכניות",
    description: "תפריט חדש? מנות עונתיות? עדכנו את התמונות שלכם בקלות וללא צורך בצילומים חדשים.",
    icon: RefreshCw,
  },
  {
    id: 4,
    title: "עקביות ויזואלית",
    description: "שמרו על מראה אחיד ומקצועי בתפריט, ברשתות החברתיות ובכל נקודות המגע עם הלקוח.",
    icon: Layers,
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
          למה לבחור בפתרון התמונות החכם?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="border-t-4 border-t-[#8B1E3F] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#8B1E3F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#8B1E3F]" />
                </div>
                <h3 className="font-heebo text-xl font-bold mb-3 text-[#333333]">{benefit.title}</h3>
                <p className="font-openSans text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
