
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      // Show the cookie banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  const handleClose = () => {
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1 text-center md:text-right">
          <p className="font-openSans">
            אתר זה משתמש בקוקיות כדי להבטיח את החוויה הטובה ביותר באתר שלנו. באמצעות המשך הגלישה באתר, אתה מסכים לשימוש שלנו בקוקיות.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            onClick={handleDecline}
            variant="outline"
            className="bg-transparent border-[#8B1E3F] text-[#8B1E3F]"
          >
            דחה
          </Button>
          
          <Button
            onClick={handleAccept}
            className="bg-[#8B1E3F] text-white hover:bg-[#8B1E3F]/90"
          >
            אני מסכים
          </Button>
          
          <Button
            onClick={handleClose}
            variant="ghost"
            size="icon"
            className="text-gray-500"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
