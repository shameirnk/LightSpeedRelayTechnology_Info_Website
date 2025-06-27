
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const featuredNews = [
    {
      title: "Victory in Championship Final",
      description: "Our team secured a stunning 3-1 victory in the championship final match.",
      image: "/placeholder.svg",
      category: "Match Result",
      date: "2024-06-27"
    },
    {
      title: "New Star Player Signing",
      description: "Welcome our newest addition to the squad - a talented midfielder from Europe.",
      image: "/placeholder.svg",
      category: "Transfer",
      date: "2024-06-26"
    },
    {
      title: "Season Preparation Begins",
      description: "Training camp starts next week as we prepare for the upcoming season.",
      image: "/placeholder.svg",
      category: "Training",
      date: "2024-06-25"
    }
  ];

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Our Club
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Follow the latest news, matches, and updates from your favorite football club
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews.map((news, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/60">News Image</span>
                </div>
                <Badge className="mb-3 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30">
                  {news.category}
                </Badge>
                <h3 className="text-white font-semibold text-lg mb-2">{news.title}</h3>
                <p className="text-white/70 text-sm mb-3">{news.description}</p>
                <p className="text-white/50 text-xs">{news.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
