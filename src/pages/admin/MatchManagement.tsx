
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MatchManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    opponent: "",
    date: "",
    time: "",
    venue: "",
    competition: ""
  });
  const { toast } = useToast();

  const [matches, setMatches] = useState([
    {
      id: 1,
      opponent: "City United",
      date: "2024-07-05",
      time: "20:00",
      venue: "Home Stadium",
      competition: "Premier League",
      status: "Scheduled"
    },
    {
      id: 2,
      opponent: "Athletic FC",
      date: "2024-07-12",
      time: "18:30",
      venue: "Away",
      competition: "Cup Final",
      status: "Scheduled"
    },
    {
      id: 3,
      opponent: "Royal FC",
      date: "2024-06-20",
      time: "19:00",
      venue: "Home Stadium",
      competition: "Premier League",
      status: "Completed",
      result: "3-1 Win"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMatch = {
      id: matches.length + 1,
      opponent: formData.opponent,
      date: formData.date,
      time: formData.time,
      venue: formData.venue,
      competition: formData.competition,
      status: "Scheduled"
    };
    setMatches([...matches, newMatch]);
    setFormData({ opponent: "", date: "", time: "", venue: "", competition: "" });
    setShowAddForm(false);
    toast({
      title: "Success",
      description: "Match scheduled successfully!",
    });
  };

  const handleDelete = (id: number) => {
    setMatches(matches.filter(match => match.id !== id));
    toast({
      title: "Deleted",
      description: "Match has been removed from schedule.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Match Management</h2>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Schedule Match
          </Button>
        </div>

        {showAddForm && (
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Schedule New Match</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="opponent" className="text-white">Opponent</Label>
                    <Input
                      id="opponent"
                      value={formData.opponent}
                      onChange={(e) => setFormData({...formData, opponent: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="competition" className="text-white">Competition</Label>
                    <Input
                      id="competition"
                      value={formData.competition}
                      onChange={(e) => setFormData({...formData, competition: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-white">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-white">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="venue" className="text-white">Venue</Label>
                    <Input
                      id="venue"
                      value={formData.venue}
                      onChange={(e) => setFormData({...formData, venue: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Schedule Match
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
            <CardTitle className="text-white">Match Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white/80">Opponent</TableHead>
                  <TableHead className="text-white/80">Date</TableHead>
                  <TableHead className="text-white/80">Time</TableHead>
                  <TableHead className="text-white/80">Venue</TableHead>
                  <TableHead className="text-white/80">Competition</TableHead>
                  <TableHead className="text-white/80">Status</TableHead>
                  <TableHead className="text-white/80">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {matches.map((match) => (
                  <TableRow key={match.id} className="border-white/10">
                    <TableCell className="text-white font-semibold">{match.opponent}</TableCell>
                    <TableCell className="text-white/80">{match.date}</TableCell>
                    <TableCell className="text-white/80">{match.time}</TableCell>
                    <TableCell className="text-white/80">{match.venue}</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-500/20 text-blue-200">
                        {match.competition}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={match.status === "Completed" ? "bg-green-500/20 text-green-200" : "bg-yellow-500/20 text-yellow-200"}>
                        {match.status}
                      </Badge>
                      {match.result && (
                        <div className="text-white/70 text-xs mt-1">{match.result}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-500/20">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => handleDelete(match.id)}
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

export default MatchManagement;
