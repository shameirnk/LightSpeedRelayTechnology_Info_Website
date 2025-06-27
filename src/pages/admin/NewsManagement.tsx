
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    content: ""
  });
  const { toast } = useToast();

  const [newsArticles, setNewsArticles] = useState([
    {
      id: 1,
      title: "Victory Against City United",
      category: "Match Results",
      date: "2024-06-27",
      status: "Published"
    },
    {
      id: 2,
      title: "New Midfielder Joins Squad",
      category: "Transfers",
      date: "2024-06-26",
      status: "Published"
    },
    {
      id: 3,
      title: "Pre-Season Training Camp",
      category: "Training",
      date: "2024-06-25",
      status: "Draft"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newArticle = {
      id: newsArticles.length + 1,
      title: formData.title,
      category: formData.category,
      date: new Date().toISOString().split('T')[0],
      status: "Published"
    };
    setNewsArticles([...newsArticles, newArticle]);
    setFormData({ title: "", description: "", category: "", content: "" });
    setShowAddForm(false);
    toast({
      title: "Success",
      description: "News article created successfully!",
    });
  };

  const handleDelete = (id: number) => {
    setNewsArticles(newsArticles.filter(article => article.id !== id));
    toast({
      title: "Deleted",
      description: "News article has been deleted.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">News Management</h2>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add News Article
          </Button>
        </div>

        {showAddForm && (
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Create News Article</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title" className="text-white">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category" className="text-white">Category</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <Input
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="bg-white/10 border-white/20 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="content" className="text-white">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="bg-white/10 border-white/20 text-white min-h-32"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Publish Article
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
            <CardTitle className="text-white">All News Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white/80">Title</TableHead>
                  <TableHead className="text-white/80">Category</TableHead>
                  <TableHead className="text-white/80">Date</TableHead>
                  <TableHead className="text-white/80">Status</TableHead>
                  <TableHead className="text-white/80">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {newsArticles.map((article) => (
                  <TableRow key={article.id} className="border-white/10">
                    <TableCell className="text-white">{article.title}</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-500/20 text-blue-200">
                        {article.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-white/80">{article.date}</TableCell>
                    <TableCell>
                      <Badge className={article.status === "Published" ? "bg-green-500/20 text-green-200" : "bg-yellow-500/20 text-yellow-200"}>
                        {article.status}
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
                          onClick={() => handleDelete(article.id)}
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

export default NewsManagement;
