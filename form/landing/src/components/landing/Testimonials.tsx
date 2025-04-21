
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "התמונות החדשות הכפילו את מספר ההזמנות של המנות החדשות שלנו. הלקוחות מגיעים ומבקשים ספציפית את המנות שראו באינסטגרם.",
    name: "דניאל כהן",
    restaurant: "מסעדת לבנטין",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    quote: "חסכנו אלפי שקלים על צילומי מזון, והתוצאות מדהימות. כל פעם שאנחנו מוסיפים מנה חדשה לתפריט, אנחנו פשוט מזמינים תמונה נוספת.",
    name: "מיכל לוי",
    restaurant: "קפה ברקת",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    quote: "השירות המקצועי והמהיר חסך לנו המון זמן וכאב ראש. היינו צריכים לחדש את כל התפריט תוך שבועיים, וקיבלנו תמונות מושלמות לכל המנות בזמן שיא.",
    name: "אלון ברק",
    restaurant: "מסעדת נופך",
    image: "/images/testimonial-3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
          לקוחות מספרים
        </h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-full">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <QuoteIcon className="w-10 h-10 text-[#8B1E3F]/20 mb-4" />
                        <blockquote className="font-openSans text-lg mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-heebo font-bold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-[#8B1E3F]">
                          {testimonial.restaurant}
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

export default Testimonials;
