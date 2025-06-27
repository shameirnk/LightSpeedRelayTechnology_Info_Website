
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const menuItems = [
    { en: "Home", ar: "الرئيسية" },
    { en: "Matches", ar: "المباريات" },
    { en: "League", ar: "الدوري" },
    { en: "Team", ar: "الفريق" },
    { en: "News", ar: "الأخبار" },
    { en: "Contact", ar: "اتصل بنا" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">FC</span>
            </div>
            <h1 className="text-white font-bold text-xl">
              {language === "en" ? "Football Club" : "نادي كرة القدم"}
            </h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {language === "en" ? item.en : item.ar}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="text-white hover:bg-white/20"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === "en" ? "العربية" : "English"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {language === "en" ? item.en : item.ar}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
