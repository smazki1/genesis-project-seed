
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    id: "tasting",
    name: "חבילת \"טעימות\"",
    price: "590₪",
    features: [
      "10 תמונות מותאמות אישית",
      "כולל 2 סבבי תיקונים",
      "זמן אספקה: 3-5 ימי עסקים",
    ],
    isPopular: false,
  },
  {
    id: "full",
    name: "חבילת \"תפריט מלא\"",
    price: "1,490₪",
    features: [
      "30 תמונות מותאמות אישית",
      "כולל 3 סבבי תיקונים",
      "אופטימיזציה לפלטפורמות שונות",
      "זמן אספקה: 5-7 ימי עסקים",
      "בונוס: 5 תמונות נוספות לאירועים מיוחדים/עונתיות",
    ],
    isPopular: true,
  },
  {
    id: "vip",
    name: "חבילת \"חווית VIP\"",
    price: "2,990₪",
    features: [
      "60 תמונות מותאמות אישית",
      "כולל 5 סבבי תיקונים ללא הגבלה",
      "אופטימיזציה לכל הפלטפורמות",
      "הדמיות של חלל המסעדה",
      "ייעוץ אישי לאסטרטגיית תוכן ויזואלי",
      "זמן אספקה: 7-10 ימי עסקים",
      "בונוס: עדכונים רבעוניים של 10 תמונות במשך שנה",
    ],
    isPopular: false,
  },
];

const PricingPackages = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
          חבילות שירות
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative ${
                pkg.isPopular ? 'border-[#F3752B] shadow-xl scale-105' : 'border-gray-200 shadow-md'
              } transition-all hover:shadow-lg`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 right-0 left-0 mx-auto w-fit bg-[#F3752B] text-white px-4 py-1 rounded-full text-sm">
                  מומלץ
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="font-heebo text-2xl font-bold text-[#333333] mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="font-heebo text-3xl font-bold text-[#8B1E3F]">
                  {pkg.price}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 font-openSans">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 text-[#F3752B]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-center pb-8">
                <Button 
                  onClick={scrollToContactForm}
                  className={`${
                    pkg.isPopular ? 'bg-[#F3752B] hover:bg-[#F3752B]/90' : 'bg-[#8B1E3F] hover:bg-[#8B1E3F]/90'
                  } text-white w-full`}
                >
                  הזמינו עכשיו
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
