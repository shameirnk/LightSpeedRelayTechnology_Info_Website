
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeagueManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    team: "",
    played: "",
    won: "",
    drawn: "",
    lost: "",
    points: ""
  });
  const { toast } = useToast();

  const [leagueTable, setLeagueTable] = useState([
    { id: 1, position: 1, team: "Our Club", played: 20, won: 15, drawn: 3, lost: 2, points: 48 },
    { id: 2, position: 2, team: "City United", played: 20, won: 14, drawn: 4, lost: 2, points: 46 },
    { id: 3, position: 3, team: "Athletic FC", played: 20, won: 13, drawn: 5, lost: 2, points: 44 },
    { id: 4, position: 4, team: "Royal FC", played: 20, won: 12, drawn: 4, lost: 4, points: 40 },
    { id: 5, position: 5, team: "Thunder United", played: 20, won: 10, drawn: 6, lost: 4, points: 36 },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTeam = {
      id: leagueTable.length + 1,
      position: leagueTable.length + 1,
      team: formData.team,
      played: parseInt(formData.played),
      won: parseInt(formData.won),
      drawn: parseInt(formData.drawn),
      lost: parseInt(formData.lost),
      points: parseInt(formData.points)
    };
    setLeagueTable([...leagueTable, newTeam]);
    setFormData({ team: "", played: "", won: "", drawn: "", lost: "", points: "" });
    setShowAddForm(false);
    toast({
      title: "Success",
      description: "Team added to league table!",
    });
  };

  const handleDelete = (id: number) => {
    setLeagueTable(leagueTable.filter(team => team.id !== id));
    toast({
      title: "Deleted",
      description: "Team removed from league table.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">League Management</h2>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Team
          </Button>
        </div>

        {showAddForm && (
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Add Team to League</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="team" className="text-white">Team Name</Label>
                    <Input
                      id="team"
                      value={formData.team}
                      onChange={(e) => setFormData({...formData, team: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="played" className="text-white">Games Played</Label>
                    <Input
                      id="played"
                      type="number"
                      value={formData.played}
                      onChange={(e) => setFormData({...formData, played: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="won" className="text-white">Won</Label>
                    <Input
                      id="won"
                      type="number"
                      value={formData.won}
                      onChange={(e) => setFormData({...formData, won: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="drawn" className="text-white">Drawn</Label>
                    <Input
                      id="drawn"
                      type="number"
                      value={formData.drawn}
                      onChange={(e) => setFormData({...formData, drawn: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lost" className="text-white">Lost</Label>
                    <Input
                      id="lost"
                      type="number"
                      value={formData.lost}
                      onChange={(e) => setFormData({...formData, lost: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="points" className="text-white">Points</Label>
                    <Input
                      id="points"
                      type="number"
                      value={formData.points}
                      onChange={(e) => setFormData({...formData, points: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Add Team
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => setShowAddForm(false)}
                    className="text-white hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Card className="backdrop-blur-md bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">League Table Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white/80">Position</TableHead>
                  <TableHead className="text-white/80">Team</TableHead>
                  <TableHead className="text-white/80">Played</TableHead>
                  <TableHead className="text-white/80">Won</TableHead>
                  <TableHead className="text-white/80">Drawn</TableHead>
                  <TableHead className="text-white/80">Lost</TableHead>
                  <TableHead className="text-white/80">Points</TableHead>
                  <TableHead className="text-white/80">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leagueTable
                  .sort((a, b) => b.points - a.points)
                  .map((team, index) => (
                  <TableRow 
                    key={team.id} 
                    className={`border-white/10 ${team.team === "Our Club" ? "bg-blue-500/10" : ""}`}
                  >
                    <TableCell className="text-white font-bold">{index + 1}</TableCell>
                    <TableCell className="text-white font-semibold">{team.team}</TableCell>
                    <TableCell className="text-white/80">{team.played}</TableCell>
                    <TableCell className="text-white/80">{team.won}</TableCell>
                    <TableCell className="text-white/80">{team.drawn}</TableCell>
                    <TableCell className="text-white/80">{team.lost}</TableCell>
                    <TableCell className="text-white font-bold">{team.points}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-500/20">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => handleDelete(team.id)}
                          className="text-red-400 hover:bg-red-500/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default LeagueManagement;
