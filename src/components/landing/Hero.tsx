
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";

const Hero = () => {
  const { imageUrl } = useWebsiteImage("hero", "main", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070");

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat",
          "after:absolute after:inset-0 after:bg-gradient-to-b after:from-[#8B1E3F]/80 after:to-[#F3752B]/50"
        )}
        style={{ 
          backgroundImage: `url('${imageUrl}')`, 
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heebo text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          תמונות מרהיבות למסעדות - בלי צלם, בלי סטודיו, בלי כאב ראש
        </h1>
        <p className="font-openSans text-lg md:text-xl text-white max-w-3xl mx-auto mb-10">
          הטכנולוגיה החדשנית שמאפשרת לבעלי מסעדות ליצור תמונות מקצועיות במחיר שכל עסק יכול להרשות לעצמו
        </p>
        <Button 
          onClick={scrollToContactForm}
          className="bg-[#F3752B] hover:bg-[#F3752B]/90 text-white px-8 py-6 text-lg rounded-md"
        >
          קבל דוגמה מותאמת בחינם למסעדה שלך
        </Button>
      </div>
    </section>
  );
};

export default Hero;
