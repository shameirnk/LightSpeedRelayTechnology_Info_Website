
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NewsGrid = () => {
  const newsCategories = ["All", "Match Results", "Transfers", "Training", "Club News"];
  
  const allNews = [
    {
      title: "Victory Against City United",
      description: "A thrilling 3-1 victory secures our position at the top of the league table.",
      category: "Match Results",
      date: "2024-06-27",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "New Midfielder Joins Squad",
      description: "Welcome our latest signing - a talented midfielder from the European league.",
      category: "Transfers",
      date: "2024-06-26",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Pre-Season Training Camp",
      description: "Team prepares for the upcoming season with intensive training sessions.",
      category: "Training",
      date: "2024-06-25",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Club Anniversary Celebration",
      description: "Celebrating 50 years of football excellence and community support.",
      category: "Club News",
      date: "2024-06-24",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Youth Academy Success",
      description: "Our youth players shine in the regional championship tournament.",
      category: "Club News",
      date: "2024-06-23",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Tactical Analysis: Last Match",
      description: "Breaking down the key strategies that led to our recent victory.",
      category: "Match Results",
      date: "2024-06-22",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews = activeCategory === "All" 
    ? allNews 
    : allNews.filter(news => news.category === activeCategory);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest News
          </h2>
          <p className="text-white/70">Stay updated with all club activities and news</p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/10 backdrop-blur-md border-white/20 mb-8">
            {newsCategories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/20"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news, index) => (
                <Card 
                  key={index} 
                  className={`backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 ${
                    news.featured ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className={`aspect-video bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center ${
                      news.featured ? "aspect-[16/9]" : "aspect-video"
                    }`}>
                      <span className="text-white/60">News Image</span>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30">
                        {news.category}
                      </Badge>
                      <span className="text-white/50 text-xs">{news.date}</span>
                    </div>
                    <h3 className={`text-white font-semibold mb-2 ${
                      news.featured ? "text-xl" : "text-lg"
                    }`}>
                      {news.title}
                    </h3>
                    <p className="text-white/70 text-sm">{news.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NewsGrid;
