
import { Card, CardContent } from "@/components/ui/card";
import { FileImage, Instagram, Building } from "lucide-react";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";

const UseCases = () => {
  const menuImage = useWebsiteImage("use_cases", "menu-images", "/images/menu-images.jpg");
  const socialMediaImage = useWebsiteImage("use_cases", "social-media", "/images/social-media.jpg");
  const interiorImage = useWebsiteImage("use_cases", "restaurant-interior", "/images/restaurant-interior.jpg");

  const useCases = [{
    title: "תמונות לתפריט דיגיטלי ומודפס",
    description: "תמונות איכותיות שגורמות לתפריט שלכם לבלוט ומעוררות תיאבון אצל הלקוחות",
    image: menuImage.imageUrl,
    icon: FileImage
  }, {
    title: "תוכן לרשתות חברתיות",
    description: "תמונות מותאמות לפורמטים השונים ברשתות החברתיות, כולל אפשרות ליצור תמונות עונתיות",
    image: socialMediaImage.imageUrl,
    icon: Instagram
  }, {
    title: "עיצוב וויזואליזציה של חלל המסעדה",
    description: "דמיינו את המסעדה שלכם בעיצוב חדש או לאירוע מיוחד לפני שאתם משקיעים בשינויים",
    image: interiorImage.imageUrl,
    icon: Building
  }];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="use-cases">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-center mb-12 text-[#333333]">
          פתרונות ויזואליים לכל צורך במסעדה
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-none overflow-hidden shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 bg-[#8B1E3F]/10 p-4 rounded-full">
                    <useCase.icon className="w-8 h-8 text-[#8B1E3F]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#333333]">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
