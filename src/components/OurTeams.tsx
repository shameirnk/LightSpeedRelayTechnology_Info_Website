
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const OurTeams = () => {
  const players = [
    {
      name: "Ahmed Hassan",
      position: "Forward",
      number: 10,
      age: 26,
      nationality: "Egypt",
      image: "/placeholder.svg"
    },
    {
      name: "Mohamed Salah",
      position: "Midfielder",
      number: 7,
      age: 24,
      nationality: "Egypt",
      image: "/placeholder.svg"
    },
    {
      name: "Omar Ibrahim",
      position: "Defender",
      number: 4,
      age: 28,
      nationality: "Egypt",
      image: "/placeholder.svg"
    },
    {
      name: "Khaled Ahmed",
      position: "Goalkeeper",
      number: 1,
      age: 30,
      nationality: "Egypt",
      image: "/placeholder.svg"
    },
    {
      name: "Youssef Ali",
      position: "Forward",
      number: 9,
      age: 25,
      nationality: "Egypt",
      image: "/placeholder.svg"
    },
    {
      name: "Mahmoud Fathy",
      position: "Midfielder",
      number: 8,
      age: 27,
      nationality: "Egypt",
      image: "/placeholder.svg"
    }
  ];

  const getPositionColor = (position: string) => {
    switch (position.toLowerCase()) {
      case "forward":
        return "bg-red-500/20 text-red-200 hover:bg-red-500/30";
      case "midfielder":
        return "bg-green-500/20 text-green-200 hover:bg-green-500/30";
      case "defender":
        return "bg-blue-500/20 text-blue-200 hover:bg-blue-500/30";
      case "goalkeeper":
        return "bg-yellow-500/20 text-yellow-200 hover:bg-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-200 hover:bg-gray-500/30";
    }
  };

  return (
    <section className="py-16 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-white/70">Meet our talented squad of players</p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {players.map((player, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white/60 text-sm">Photo</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{player.number}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{player.name}</h3>
                    <Badge className={`mb-3 ${getPositionColor(player.position)}`}>
                      {player.position}
                    </Badge>
                    <div className="space-y-1 text-white/70 text-sm">
                      <p>Age: {player.age}</p>
                      <p>Nationality: {player.nationality}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default OurTeams;
