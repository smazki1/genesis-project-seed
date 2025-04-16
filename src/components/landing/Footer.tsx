
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-right mb-6 md:mb-0">
            <div className="font-heebo text-2xl font-bold mb-2">
              פוד-ויז'ן AI
            </div>
            <p className="text-gray-300">
              תמונות מרהיבות למסעדות בטכנולוגיית AI
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="font-bold">דוא"ל:</span>
              <a href="mailto:info@foodvision-ai.co.il" className="text-[#F3752B] hover:underline">
                info@foodvision-ai.co.il
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-bold">טלפון:</span>
              <a href="tel:0508123456" className="text-[#F3752B] hover:underline">
                050-812-3456
              </a>
            </div>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-right text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} פוד-ויז'ן AI. כל הזכויות שמורות.
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              מדיניות פרטיות
            </a>
            <a href="#" className="hover:text-white transition-colors">
              תנאי שימוש
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
