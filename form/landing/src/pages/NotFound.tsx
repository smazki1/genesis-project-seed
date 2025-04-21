
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" dir="rtl">
      <div className="text-center p-8">
        <h1 className="text-6xl font-heebo font-bold mb-6 text-[#8B1E3F]">404</h1>
        <h2 className="text-2xl font-heebo font-bold mb-4">הדף לא נמצא</h2>
        <p className="text-lg font-openSans text-gray-600 mb-8">
          מצטערים, העמוד שחיפשת אינו קיים.
        </p>
        <Button asChild>
          <Link to="/" className="bg-[#F3752B] hover:bg-[#F3752B]/90 text-white">
            חזרה לעמוד הראשי
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
