import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Plus, 
  MapPin, 
  IndianRupee, 
  ThumbsUp, 
  MessageCircle, 
  Calendar,
  Upload,
  Filter,
  Search,
  Eye,
  TrendingUp,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProposalsPage() {
  const [sortBy, setSortBy] = useState('popular');
  const [filterWard, setFilterWard] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const proposals = [
    {
      id: 1,
      title: "Smart LED Street Lighting for Market Road",
      description: "Replace old streetlights with energy-efficient LED lights to improve safety and reduce electricity costs",
      estimatedCost: 850000,
      ward: "Ward 1",
      location: "Market Road, Central Area",
      submittedBy: "Rajesh Kumar",
      submittedDate: "2024-01-15",
      likes: 127,
      comments: 23,
      status: "Under Review",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Community Park Development",
      description: "Create a family-friendly park with playground equipment, walking paths, and green spaces for residents",
      estimatedCost: 1200000,
      ward: "Ward 2", 
      location: "Near Government School",
      submittedBy: "Priya Sharma",
      submittedDate: "2024-01-12",
      likes: 89,
      comments: 31,
      status: "Approved",
      category: "Recreation",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Drainage System Improvement",
      description: "Upgrade the drainage system to prevent waterlogging during monsoon season",
      estimatedCost: 2100000,
      ward: "Ward 3",
      location: "Industrial Area Main Road",
      submittedBy: "Municipal Corporation",
      submittedDate: "2024-01-10",
      likes: 156,
      comments: 45,
      status: "Voting Open",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Digital Library Setup",
      description: "Establish a modern digital library with computers and internet access for students and residents",
      estimatedCost: 650000,
      ward: "Ward 4",
      location: "Community Center",
      submittedBy: "Education Committee",
      submittedDate: "2024-01-08",
      likes: 74,
      comments: 18,
      status: "Under Review",
      category: "Education",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
    }
  ];

  const [isNewProposalOpen, setIsNewProposalOpen] = useState(false);
  const [newProposal, setNewProposal] = useState({
    title: '',
    description: '',
    estimatedCost: '',
    ward: '',
    location: '',
    category: ''
  });

  const filteredProposals = proposals
    .filter(proposal => 
      (filterWard === 'all' || proposal.ward === filterWard) &&
      (searchQuery === '' || 
        proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.likes - a.likes;
        case 'recent':
          return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
        case 'comments':
          return b.comments - a.comments;
        default:
          return 0;
      }
    });

  const handleSubmitProposal = () => {
    console.log('New proposal submitted:', newProposal);
    setIsNewProposalOpen(false);
    setNewProposal({
      title: '',
      description: '',
      estimatedCost: '',
      ward: '',
      location: '',
      category: ''
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-accent text-white">Approved</Badge>;
      case 'Voting Open':
        return <Badge className="bg-primary text-white">Voting Open</Badge>;
      case 'Under Review':
        return <Badge variant="outline">Under Review</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Proposals</h1>
            <p className="text-lg text-gray-600">Submit and explore project proposals for your community</p>
          </div>
          <Dialog open={isNewProposalOpen} onOpenChange={setIsNewProposalOpen}>
            <DialogTrigger asChild>
              <Button className="mt-4 sm:mt-0">
                <Plus className="w-4 h-4 mr-2" />
                Submit Proposal
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Submit New Proposal</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter a clear, descriptive title"
                    value={newProposal.title}
                    onChange={(e) => setNewProposal({...newProposal, title: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about the project, its benefits, and implementation plan"
                    rows={4}
                    value={newProposal.description}
                    onChange={(e) => setNewProposal({...newProposal, description: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cost">Estimated Cost (₹)</Label>
                    <Input
                      id="cost"
                      type="number"
                      placeholder="0"
                      value={newProposal.estimatedCost}
                      onChange={(e) => setNewProposal({...newProposal, estimatedCost: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="ward">Ward</Label>
                    <Select value={newProposal.ward} onValueChange={(value) => setNewProposal({...newProposal, ward: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ward" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ward 1">Ward 1 - Central Market</SelectItem>
                        <SelectItem value="Ward 2">Ward 2 - Residential Area</SelectItem>
                        <SelectItem value="Ward 3">Ward 3 - Industrial Zone</SelectItem>
                        <SelectItem value="Ward 4">Ward 4 - Old City</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="location">Specific Location</Label>
                  <Input
                    id="location"
                    placeholder="Street name, landmark, or specific area"
                    value={newProposal.location}
                    onChange={(e) => setNewProposal({...newProposal, location: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={newProposal.category} onValueChange={(value) => setNewProposal({...newProposal, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="Recreation">Recreation</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Environment">Environment</SelectItem>
                      <SelectItem value="Transportation">Transportation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="documents">Supporting Documents/Images</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setIsNewProposalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSubmitProposal}>
                    Submit Proposal
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search proposals..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={filterWard} onValueChange={setFilterWard}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by ward" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Wards</SelectItem>
                  <SelectItem value="Ward 1">Ward 1</SelectItem>
                  <SelectItem value="Ward 2">Ward 2</SelectItem>
                  <SelectItem value="Ward 3">Ward 3</SelectItem>
                  <SelectItem value="Ward 4">Ward 4</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="comments">Most Commented</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProposals.map((proposal) => (
            <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={proposal.image}
                  alt={proposal.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  {getStatusBadge(proposal.status)}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white">
                    {proposal.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg leading-tight">{proposal.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {proposal.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    <span>₹{(proposal.estimatedCost / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{proposal.ward}</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <div className="flex items-center mb-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{proposal.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Submitted on {new Date(proposal.submittedDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>{proposal.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{proposal.comments}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProposals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No proposals found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}