
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

const PlayerManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    number: "",
    age: "",
    nationality: ""
  });
  const { toast } = useToast();

  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Ahmed Hassan",
      position: "Forward",
      number: 10,
      age: 26,
      nationality: "Egypt",
      status: "Active"
    },
    {
      id: 2,
      name: "Mohamed Salah",
      position: "Midfielder",
      number: 7,
      age: 24,
      nationality: "Egypt",
      status: "Active"
    },
    {
      id: 3,
      name: "Omar Ibrahim",
      position: "Defender",
      number: 4,
      age: 28,
      nationality: "Egypt",
      status: "Injured"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlayer = {
      id: players.length + 1,
      name: formData.name,
      position: formData.position,
      number: parseInt(formData.number),
      age: parseInt(formData.age),
      nationality: formData.nationality,
      status: "Active"
    };
    setPlayers([...players, newPlayer]);
    setFormData({ name: "", position: "", number: "", age: "", nationality: "" });
    setShowAddForm(false);
    toast({
      title: "Success",
      description: "Player added successfully!",
    });
  };

  const handleDelete = (id: number) => {
    setPlayers(players.filter(player => player.id !== id));
    toast({
      title: "Deleted",
      description: "Player has been removed from the squad.",
    });
  };

  const getPositionColor = (position: string) => {
    switch (position.toLowerCase()) {
      case "forward":
        return "bg-red-500/20 text-red-200";
      case "midfielder":
        return "bg-green-500/20 text-green-200";
      case "defender":
        return "bg-blue-500/20 text-blue-200";
      case "goalkeeper":
        return "bg-yellow-500/20 text-yellow-200";
      default:
        return "bg-gray-500/20 text-gray-200";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Player Management</h2>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Player
          </Button>
        </div>

        {showAddForm && (
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Add New Player</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Player Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="position" className="text-white">Position</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="number" className="text-white">Jersey Number</Label>
                    <Input
                      id="number"
                      type="number"
                      value={formData.number}
                      onChange={(e) => setFormData({...formData, number: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age" className="text-white">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality" className="text-white">Nationality</Label>
                    <Input
                      id="nationality"
                      value={formData.nationality}
                      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Add Player
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
            <CardTitle className="text-white">Squad List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white/80">Name</TableHead>
                  <TableHead className="text-white/80">Position</TableHead>
                  <TableHead className="text-white/80">Number</TableHead>
                  <TableHead className="text-white/80">Age</TableHead>
                  <TableHead className="text-white/80">Nationality</TableHead>
                  <TableHead className="text-white/80">Status</TableHead>
                  <TableHead className="text-white/80">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {players.map((player) => (
                  <TableRow key={player.id} className="border-white/10">
                    <TableCell className="text-white font-semibold">{player.name}</TableCell>
                    <TableCell>
                      <Badge className={getPositionColor(player.position)}>
                        {player.position}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-white">{player.number}</TableCell>
                    <TableCell className="text-white/80">{player.age}</TableCell>
                    <TableCell className="text-white/80">{player.nationality}</TableCell>
                    <TableCell>
                      <Badge className={player.status === "Active" ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}>
                        {player.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-500/20">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => handleDelete(player.id)}
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

export default PlayerManagement;
