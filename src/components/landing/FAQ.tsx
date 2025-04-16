
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "האם התמונות נראות אמיתיות?",
    answer: "כן! טכנולוגיית ה-AI שלנו מפיקה תמונות ריאליסטיות להפליא שנראות טבעיות ומעוררות תיאבון. אנו מקפידים על פרטים כמו טקסטורות, צבעים והצללה שגורמים לתמונות להיראות מקצועיות ואותנטיות.",
  },
  {
    id: "faq-2",
    question: "האם יש צורך בציוד צילום מיוחד?",
    answer: "לא! אין צורך בציוד מיוחד. אם יש לכם תמונות קיימות מסמארטפון, זה נהדר. אם לא, אפילו תיאור מילולי מפורט של המנות וסגנון המסעדה מספיק לנו כדי ליצור תמונות מרהיבות.",
  },
  {
    id: "faq-3",
    question: "האם אפשר לעדכן תמונות בעתיד?",
    answer: "בהחלט! אחד היתרונות הגדולים של השירות שלנו הוא הגמישות. כשהתפריט משתנה או כשיש לכם מנות עונתיות חדשות, אפשר בקלות להזמין תמונות חדשות או לרכוש חבילת עדכונים תקופתית.",
  },
  {
    id: "faq-4",
    question: "כמה זמן לוקח להפיק את התמונות?",
    answer: "זמן ההפקה תלוי בגודל החבילה, אך בדרך כלל נע בין 3-10 ימי עסקים. בחבילת ה'טעימות' התמונות מוכנות תוך 3-5 ימי עסקים, ואילו חבילת ה-VIP המקיפה יותר לוקחת 7-10 ימי עסקים.",
  },
  {
    id: "faq-5",
    question: "האם אתם מתמחים בסוגי מסעדות ספציפיים?",
    answer: "השירות שלנו מותאם לכל סוגי המסעדות ובתי האוכל - ממסעדות יוקרה ועד מסעדות משפחתיות, מזון מהיר, בתי קפה, ברים, קונדיטוריות ועוד. אנו מתאימים את הסגנון הויזואלי לזהות הייחודית של העסק שלכם.",
  },
  {
    id: "faq-6",
    question: "האם התמונות שייכות לי לשימוש בכל מקום?",
    answer: "כן, בהחלט! כל התמונות שאנו מספקים הן לשימוש בלעדי שלכם ואתם הבעלים המלאים של זכויות השימוש בהן. תוכלו להשתמש בתמונות בכל פלטפורמה שתרצו - אתר אינטרנט, רשתות חברתיות, תפריטים מודפסים, חומרי שיווק, אפליקציות הזמנות, ועוד ללא הגבלה.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="font-heebo text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
          שאלות נפוצות
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="font-heebo font-bold text-lg text-right">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right font-openSans text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
