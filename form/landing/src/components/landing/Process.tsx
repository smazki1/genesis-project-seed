
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Video, Upload, Cpu, FileEdit, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "יצירת קשר",
    description: "השאירו פרטים בטופס ואנו ניצור עמכם קשר תוך 24 שעות",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "פגישת היכרות",
    description: "שיחת זום קצרה להבנת הצרכים והסגנון הייחודי של המסעדה שלכם",
    icon: Video,
  },
  {
    id: 3,
    title: "איסוף חומרים",
    description: "שלחו לנו תמונות קיימות, רעיונות, ותיאורים של מנות",
    icon: Upload,
  },
  {
    id: 4,
    title: "הפקת תמונות",
    description: "הצוות שלנו מייצר את התמונות באמצעות טכנולוגיית AI מתקדמת",
    icon: Cpu,
  },
  {
    id: 5,
    title: "סבב תיקונים",
    description: "קבלו את התמונות לאישור ובקשו שינויים במידת הצורך",
    icon: FileEdit,
  },
  {
    id: 6,
    title: "תוצר סופי",
    description: "קבלו את כל התמונות בפורמטים המתאימים לשימושים השונים",
    icon: CheckCircle,
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white" id="process">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
          איך זה עובד?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <Card key={step.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F3752B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-[#F3752B]" />
                </div>
                
                <div className="mb-2 font-heebo font-bold text-3xl text-[#8B1E3F]">
                  {step.id}
                </div>
                
                <h3 className="font-heebo text-xl font-bold mb-3 text-[#333333]">
                  {step.title}
                </h3>
                
                <p className="font-openSans text-gray-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
