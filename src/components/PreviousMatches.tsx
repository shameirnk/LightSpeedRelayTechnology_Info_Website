
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PreviousMatches = () => {
  const previousMatches = [
    {
      opponent: "Royal FC",
      date: "2024-06-20",
      score: "3-1",
      result: "win",
      venue: "Home Stadium",
      competition: "Premier League"
    },
    {
      opponent: "Thunder United",
      date: "2024-06-15",
      score: "2-2",
      result: "draw",
      venue: "Away",
      competition: "Premier League"
    },
    {
      opponent: "Eagle Sports",
      date: "2024-06-10",
      score: "1-2",
      result: "loss",
      venue: "Home Stadium",
      competition: "Cup"
    }
  ];

  const getResultBadge = (result: string) => {
    switch (result) {
      case "win":
        return "bg-green-500/20 text-green-200 hover:bg-green-500/30";
      case "draw":
        return "bg-yellow-500/20 text-yellow-200 hover:bg-yellow-500/30";
      case "loss":
        return "bg-red-500/20 text-red-200 hover:bg-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-200 hover:bg-gray-500/30";
    }
  };

  return (
    <section className="py-16 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent Results
          </h2>
          <p className="text-white/70">Check out our latest match performances</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previousMatches.map((match, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className={`mb-2 ${getResultBadge(match.result)} w-fit mx-auto`}>
                  {match.result.toUpperCase()}
                </Badge>
                <CardTitle className="text-white text-lg">{match.opponent}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center items-center space-x-8 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">FC</span>
                  </div>
                  <div className="text-center">
                    <span className="text-white font-bold text-2xl">{match.score}</span>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">OP</span>
                  </div>
                </div>
                <div className="space-y-2 text-white/80 text-sm">
                  <p>{match.date}</p>
                  <p>{match.venue}</p>
                  <Badge className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30">
                    {match.competition}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousMatches;
