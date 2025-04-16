
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm" 
        style={{ 
          backgroundImage: "url('/images/restaurant-bg.jpg')", 
          filter: "brightness(0.5)" 
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
          צור קשר לקבלת דוגמאות מותאמות למסעדה שלך
        </Button>
      </div>
    </section>
  );
};

export default Hero;
