
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const cuisineTypes = [
  { value: "israeli", label: "ישראלי" },
  { value: "italian", label: "איטלקי" },
  { value: "asian", label: "אסיאתי" },
  { value: "mediterranean", label: "ים תיכוני" },
  { value: "french", label: "צרפתי" },
  { value: "american", label: "אמריקאי" },
  { value: "mexican", label: "מקסיקני" },
  { value: "bakery", label: "מאפים וקונדיטוריה" },
  { value: "vegetarian", label: "צמחוני/טבעוני" },
  { value: "other", label: "אחר" },
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    restaurantName: "",
    contactName: "",
    phone: "",
    email: "",
    cuisineType: "",
    description: "",
    privacyConsent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacyConsent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyConsent) {
      toast.error("יש לאשר את מדיניות הפרטיות כדי להמשיך");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם", {
        duration: 5000,
      });
      
      setFormData({
        restaurantName: "",
        contactName: "",
        phone: "",
        email: "",
        cuisineType: "",
        description: "",
        privacyConsent: false,
      });
    } catch (error) {
      toast.error("אירעה שגיאה בעת שליחת הטופס. אנא נסה שוב מאוחר יותר");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact-form">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-[#333333] text-center mb-4">
          קבל הצעה מותאמת למסעדה שלך
        </h2>
        <p className="font-openSans text-lg text-center mb-12 max-w-2xl mx-auto">
          השאירו פרטים ונחזור אליכם תוך 24 שעות עם דוגמה ראשונית בחינם
        </p>
        
        <Card className="max-w-2xl mx-auto border-none shadow-lg">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="restaurantName">שם המסעדה</Label>
                  <Input 
                    id="restaurantName" 
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleInputChange}
                    placeholder="הזן את שם המסעדה"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactName">שם איש הקשר</Label>
                  <Input 
                    id="contactName" 
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="הזן את שמך המלא"
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">מספר טלפון</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="הזן את מספר הטלפון שלך"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">כתובת אימייל</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="הזן את כתובת האימייל שלך"
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cuisineType">סוג המסעדה/מטבח</Label>
                <select 
                  id="cuisineType" 
                  name="cuisineType"
                  value={formData.cuisineType}
                  onChange={handleInputChange}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="" disabled>בחר סוג מטבח</option>
                  {cuisineTypes.map((cuisine) => (
                    <option key={cuisine.value} value={cuisine.value}>
                      {cuisine.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">תיאור קצר של הצרכים</Label>
                <Textarea 
                  id="description" 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="תאר את הצרכים הספציפיים שלך, כמה תמונות תצטרך, וכל מידע אחר שיעזור לנו להכין הצעה מותאמת"
                  rows={4}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="privacyConsent"
                  checked={formData.privacyConsent}
                  onCheckedChange={handleCheckboxChange}
                />
                <label 
                  htmlFor="privacyConsent" 
                  className="text-sm font-openSans cursor-pointer"
                >
                  אני מאשר/ת קבלת הצעת מחיר ומסכים/ה למדיניות הפרטיות
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#8B1E3F] hover:bg-[#8B1E3F]/90 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    שולח...
                  </>
                ) : (
                  "קבל דוגמה בחינם והצעת מחיר"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
