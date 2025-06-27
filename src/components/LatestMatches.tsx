
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const LatestMatches = () => {
  const upcomingMatches = [
    {
      opponent: "City United",
      date: "2024-07-05",
      time: "20:00",
      venue: "Home Stadium",
      competition: "Premier League",
      logo: "/placeholder.svg"
    },
    {
      opponent: "Athletic FC",
      date: "2024-07-12",
      time: "18:30",
      venue: "Away",
      competition: "Cup Final",
      logo: "/placeholder.svg"
    },
    {
      opponent: "Sports Club",
      date: "2024-07-19",
      time: "19:00",
      venue: "Home Stadium",
      competition: "Premier League",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Matches
          </h2>
          <p className="text-white/70">Don't miss our next exciting games</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingMatches.map((match, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-green-500/20 text-green-200 hover:bg-green-500/30 w-fit mx-auto">
                  {match.competition}
                </Badge>
                <CardTitle className="text-white text-lg">{match.opponent}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center items-center space-x-8 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">FC</span>
                  </div>
                  <span className="text-white font-bold text-xl">VS</span>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">OP</span>
                  </div>
                </div>
                <div className="space-y-2 text-white/80">
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{match.date} at {match.time}</span>
                  </div>
                  <p className="text-sm">{match.venue}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestMatches;
