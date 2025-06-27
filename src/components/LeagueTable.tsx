
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LeagueTable = () => {
  const leagueData = [
    { position: 1, team: "Our Club", played: 20, won: 15, drawn: 3, lost: 2, points: 48, form: ["W", "W", "D", "W", "W"] },
    { position: 2, team: "City United", played: 20, won: 14, drawn: 4, lost: 2, points: 46, form: ["W", "D", "W", "W", "L"] },
    { position: 3, team: "Athletic FC", played: 20, won: 13, drawn: 5, lost: 2, points: 44, form: ["D", "W", "W", "D", "W"] },
    { position: 4, team: "Royal FC", played: 20, won: 12, drawn: 4, lost: 4, points: 40, form: ["L", "W", "W", "W", "D"] },
    { position: 5, team: "Thunder United", played: 20, won: 10, drawn: 6, lost: 4, points: 36, form: ["D", "D", "W", "L", "W"] },
    { position: 6, team: "Eagle Sports", played: 20, won: 8, drawn: 7, lost: 5, points: 31, form: ["L", "D", "W", "D", "L"] },
  ];

  const getFormBadge = (result: string) => {
    const baseClass = "w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center";
    switch (result) {
      case "W":
        return `${baseClass} bg-green-500/20 text-green-200`;
      case "D":
        return `${baseClass} bg-yellow-500/20 text-yellow-200`;
      case "L":
        return `${baseClass} bg-red-500/20 text-red-200`;
      default:
        return `${baseClass} bg-gray-500/20 text-gray-200`;
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            League Table
          </h2>
          <p className="text-white/70">Current standings in the Premier League</p>
        </div>

        <Card className="backdrop-blur-md bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-center">Premier League Standings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white/80">Pos</TableHead>
                  <TableHead className="text-white/80">Team</TableHead>
                  <TableHead className="text-white/80 text-center">P</TableHead>
                  <TableHead className="text-white/80 text-center">W</TableHead>
                  <TableHead className="text-white/80 text-center">D</TableHead>
                  <TableHead className="text-white/80 text-center">L</TableHead>
                  <TableHead className="text-white/80 text-center">Pts</TableHead>
                  <TableHead className="text-white/80 text-center">Form</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leagueData.map((team) => (
                  <TableRow 
                    key={team.position} 
                    className={`border-white/10 ${team.team === "Our Club" ? "bg-blue-500/10" : ""}`}
                  >
                    <TableCell className="text-white font-bold">{team.position}</TableCell>
                    <TableCell className="text-white font-semibold">{team.team}</TableCell>
                    <TableCell className="text-white/80 text-center">{team.played}</TableCell>
                    <TableCell className="text-white/80 text-center">{team.won}</TableCell>
                    <TableCell className="text-white/80 text-center">{team.drawn}</TableCell>
                    <TableCell className="text-white/80 text-center">{team.lost}</TableCell>
                    <TableCell className="text-white font-bold text-center">{team.points}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex space-x-1 justify-center">
                        {team.form.map((result, index) => (
                          <span key={index} className={getFormBadge(result)}>
                            {result}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeagueTable;
