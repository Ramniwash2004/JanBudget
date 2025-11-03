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
  MessageSquare, 
  Plus, 
  Camera, 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle, 
  Calendar,
  MapPin,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  X
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CameraCapture } from './ui/CameraCapture';

export function ComplaintsPage() {
  const [sortBy, setSortBy] = useState('recent');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isNewComplaintOpen, setIsNewComplaintOpen] = useState(false);
  // For camera capture
const [showCamera, setShowCamera] = useState(false);
const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

const handlePhotoCapture = (imageData: string) => {
  setCapturedPhoto(imageData);
  setShowCamera(false);
};

const handleRemovePhoto = () => {
  setCapturedPhoto(null);
};


  const complaints = [
    {
      id: 1,
      title: "Broken streetlight on Market Road",
      description: "The streetlight near the main market has been non-functional for over a week, causing safety concerns for pedestrians at night.",
      category: "Electricity",
      ward: "Ward 1",
      location: "Market Road, near vegetable market",
      status: "Under Investigation",
      priority: "High",
      submittedBy: "Anonymous",
      submittedDate: "2024-02-20",
      upvotes: 23,
      downvotes: 2,
      comments: 8,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      responses: [
        {
          id: 1,
          type: "official",
          author: "Municipal Electricity Dept",
          message: "We have received your complaint and our team will inspect the issue within 24 hours.",
          date: "2024-02-21",
          isOfficial: true
        }
      ]
    },
    {
      id: 2,
      title: "Pothole causing vehicle damage",
      description: "Large pothole on Industrial Road is causing damage to vehicles. Multiple citizens have reported tire punctures.",
      category: "Road",
      ward: "Ward 3",
      location: "Industrial Road, near factory gate",
      status: "Resolved",
      priority: "High",
      submittedBy: "Raj Patel",
      submittedDate: "2024-02-15",
      upvotes: 45,
      downvotes: 1,
      comments: 12,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      responses: [
        {
          id: 1,
          type: "official",
          author: "Road Maintenance Dept",
          message: "The pothole has been filled and the road surface has been repaired. Thank you for reporting this issue.",
          date: "2024-02-18",
          isOfficial: true
        }
      ]
    },
    {
      id: 3,
      title: "Irregular water supply",
      description: "Water supply has been irregular in our area for the past month. Some days we get water only for 2-3 hours.",
      category: "Water",
      ward: "Ward 2",
      location: "Residential Area Block B",
      status: "In Progress",
      priority: "Medium",
      submittedBy: "Priya Singh",
      submittedDate: "2024-02-18",
      upvotes: 67,
      downvotes: 3,
      comments: 18,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      responses: [
        {
          id: 1,
          type: "official",
          author: "Water Supply Department",
          message: "We are working on upgrading the water distribution system in your area. The work should be completed by end of March.",
          date: "2024-02-19",
          isOfficial: true
        }
      ]
    },
    {
      id: 4,
      title: "Garbage not collected for 3 days",
      description: "Waste collection has been missed for the past 3 days in our locality. The garbage is piling up and creating hygiene issues.",
      category: "Waste",
      ward: "Ward 4",
      location: "Old City, Lane 5",
      status: "New",
      priority: "Medium",
      submittedBy: "Community Representative",
      submittedDate: "2024-02-22",
      upvotes: 34,
      downvotes: 0,
      comments: 6,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      responses: []
    }
  ];

  const [newComplaint, setNewComplaint] = useState({
    title: '',
    description: '',
    category: '',
    ward: '',
    location: '',
    priority: ''
  });

  const filteredComplaints = complaints
    .filter(complaint => 
      (filterCategory === 'all' || complaint.category === filterCategory) &&
      (filterStatus === 'all' || complaint.status === filterStatus) &&
      (searchQuery === '' || 
        complaint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
        case 'popular':
          return b.upvotes - a.upvotes;
        case 'priority':
          const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
          return priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder];
        default:
          return 0;
      }
    });

  const handleSubmitComplaint = () => {
    const complaintData = {
    ...newComplaint,
    photo: capturedPhoto,  //include photo
    };
    console.log('New complaint submitted:', complaintData);
    setIsNewComplaintOpen(false);
    setNewComplaint({
      title: '',
      description: '',
      category: '',
      ward: '',
      location: '',
      priority: ''
    });
    setCapturedPhoto(null);
    setShowCamera(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Resolved':
        return <Badge className="bg-accent text-white">Resolved</Badge>;
      case 'In Progress':
        return <Badge className="bg-primary text-white">In Progress</Badge>;
      case 'Under Investigation':
        return <Badge className="bg-secondary text-white">Under Investigation</Badge>;
      case 'New':
        return <Badge variant="outline">New</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'Medium':
        return <Badge className="bg-orange-500 text-white">Medium Priority</Badge>;
      case 'Low':
        return <Badge variant="outline">Low Priority</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Road':
        return '🛣️';
      case 'Water':
        return '💧';
      case 'Electricity':
        return '⚡';
      case 'Waste':
        return '🗑️';
      case 'Others':
        return '📋';
      default:
        return '📋';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Citizens' Complaints</h1>
            <p className="text-lg text-gray-600">Report issues and track their resolution</p>
          </div>
          <Dialog open={isNewComplaintOpen} onOpenChange={setIsNewComplaintOpen}>
            <DialogTrigger asChild>
              <Button className="mt-4 sm:mt-0">
                <Plus className="w-4 h-4 mr-2" />
                Lodge Complaint
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Lodge New Complaint</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Issue Title</Label>
                  <Input
                    id="title"
                    placeholder="Brief description of the issue"
                    value={newComplaint.title}
                    onChange={(e) => setNewComplaint({...newComplaint, title: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about the issue"
                    rows={4}
                    value={newComplaint.description}
                    onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={newComplaint.category} onValueChange={(value:string) => setNewComplaint({...newComplaint, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Road">Road</SelectItem>
                        <SelectItem value="Water">Water</SelectItem>
                        <SelectItem value="Electricity">Electricity</SelectItem>
                        <SelectItem value="Waste">Waste Management</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={newComplaint.priority} onValueChange={(value:string) => setNewComplaint({...newComplaint, priority: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="ward">Ward</Label>
                  <Select value={newComplaint.ward} onValueChange={(value:string) => setNewComplaint({...newComplaint, ward: value})}>
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
                
                <div>
                  <Label htmlFor="location">Specific Location</Label>
                  <Input
                    id="location"
                    placeholder="Street name, landmark, or specific area"
                    value={newComplaint.location}
                    onChange={(e) => setNewComplaint({...newComplaint, location: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="photo">Photo Evidence</Label>
                  {showCamera ? (
                    <CameraCapture
                      onCapture={handlePhotoCapture}
                      onCancel={() => setShowCamera(false)}
                    />
                  ) : capturedPhoto ? (
                    <div className="relative">
                      <img
                        src={capturedPhoto}
                        alt="Captured evidence"
                        className="w-full rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={handleRemovePhoto}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowCamera(true)}
                      className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors"
                    >
                      <Camera className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-gray-700">Take Photo from Camera</p>
                      <p className="text-xs text-gray-500 mt-1">Click to open camera and capture evidence</p>
                    </button>
                  )}
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => {
                    setIsNewComplaintOpen(false);
                    setShowCamera(false);
                    setCapturedPhoto(null);
                  }}>
                    Cancel
                  </Button>
                  <Button onClick={handleSubmitComplaint}>
                    Submit Complaint
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search complaints..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Road">Road</SelectItem>
                  <SelectItem value="Water">Water</SelectItem>
                  <SelectItem value="Electricity">Electricity</SelectItem>
                  <SelectItem value="Waste">Waste</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Under Investigation">Under Investigation</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Complaints Grid */}
        <div className="space-y-6">
          {filteredComplaints.map((complaint) => (
            <Card key={complaint.id} className="hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-64 md:flex-shrink-0">
                  <ImageWithFallback
                    src={complaint.image}
                    alt={complaint.title}
                    className="w-full md:h-full h-48 object-cover md:rounded-l-lg rounded-t-lg md:rounded-tr-none"
                  />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{getCategoryIcon(complaint.category)}</span>
                        <Badge variant="outline">{complaint.category}</Badge>
                        {getStatusBadge(complaint.status)}
                        {getPriorityBadge(complaint.priority)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(complaint.submittedDate).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{complaint.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {complaint.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{complaint.ward} - {complaint.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Submitted by {complaint.submittedBy}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{complaint.upvotes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsDown className="w-4 h-4" />
                          <span>{complaint.downvotes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{complaint.comments}</span>
                        </div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{complaint.title}</DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {getStatusBadge(complaint.status)}
                              {getPriorityBadge(complaint.priority)}
                              <Badge variant="outline">{complaint.category}</Badge>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Description</h4>
                              <p className="text-gray-600">{complaint.description}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-semibold">Location:</span>
                                <p>{complaint.ward} - {complaint.location}</p>
                              </div>
                              <div>
                                <span className="font-semibold">Submitted by:</span>
                                <p>{complaint.submittedBy}</p>
                              </div>
                            </div>
                            
                            <div>
                              <ImageWithFallback
                                src={complaint.image}
                                alt={complaint.title}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                            </div>
                            
                            {complaint.responses.length > 0 && (
                              <div>
                                <h4 className="font-semibold mb-2">Official Responses</h4>
                                <div className="space-y-2">
                                  {complaint.responses.map((response) => (
                                    <Card key={response.id} className="bg-blue-50 border-blue-200">
                                      <CardContent className="pt-4">
                                        <div className="flex justify-between items-start mb-2">
                                          <span className="font-medium text-blue-900">{response.author}</span>
                                          <span className="text-sm text-blue-600">
                                            {new Date(response.date).toLocaleDateString()}
                                          </span>
                                        </div>
                                        <p className="text-blue-800">{response.message}</p>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredComplaints.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MessageSquare className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}