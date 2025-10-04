import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  FolderOpen, 
  MapPin, 
  IndianRupee, 
  Calendar, 
  Clock,
  CheckCircle,
  AlertCircle,
  Camera,
  MessageCircle,
  ThumbsUp,
  Search,
  Filter,
  Eye,
  Timeline,
  Building,
  Truck
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedWard, setSelectedWard] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Smart LED Street Lighting Phase 1",
      description: "Installation of energy-efficient LED streetlights along Market Road",
      ward: "Ward 1",
      location: "Market Road, Central Area",
      budget: 850000,
      spent: 612000,
      progress: 72,
      status: "Under Construction",
      startDate: "2024-01-15",
      expectedCompletion: "2024-03-15",
      contractor: "Green Energy Solutions",
      timeline: [
        { phase: "Tender Process", status: "completed", date: "2024-01-15" },
        { phase: "Fund Release", status: "completed", date: "2024-01-22" },
        { phase: "Material Procurement", status: "completed", date: "2024-02-01" },
        { phase: "Installation", status: "ongoing", date: "2024-02-15" },
        { phase: "Testing & Handover", status: "pending", date: "2024-03-15" }
      ],
      images: [
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
      ],
      reviews: [
        {
          id: 1,
          citizen: "Rajesh Kumar",
          rating: 4,
          comment: "Good progress so far. The lights installed are very bright.",
          date: "2024-02-20",
          likes: 12
        },
        {
          id: 2,
          citizen: "Priya Sharma", 
          rating: 5,
          comment: "Excellent work quality. The installation team is very professional.",
          date: "2024-02-18",
          likes: 8
        }
      ]
    },
    {
      id: 2,
      title: "Community Park Development",
      description: "Creating a family-friendly park with playground and walking paths",
      ward: "Ward 2",
      location: "Near Government School",
      budget: 1200000,
      spent: 1180000,
      progress: 98,
      status: "Completed",
      startDate: "2023-11-01",
      expectedCompletion: "2024-01-31",
      contractor: "Urban Landscapes Ltd",
      timeline: [
        { phase: "Tender Process", status: "completed", date: "2023-11-01" },
        { phase: "Fund Release", status: "completed", date: "2023-11-10" },
        { phase: "Site Preparation", status: "completed", date: "2023-11-20" },
        { phase: "Construction", status: "completed", date: "2024-01-15" },
        { phase: "Final Inspection", status: "completed", date: "2024-01-31" }
      ],
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544737151667-6e4b999de2a9?w=400&h=300&fit=crop"
      ],
      reviews: [
        {
          id: 1,
          citizen: "Amit Singh",
          rating: 5,
          comment: "Beautiful park! My children love playing here. Thank you for this wonderful addition.",
          date: "2024-02-05",
          likes: 25
        }
      ]
    },
    {
      id: 3,
      title: "Drainage System Improvement",
      description: "Upgrading drainage infrastructure to prevent waterlogging",
      ward: "Ward 3",
      location: "Industrial Area Main Road",
      budget: 2100000,
      spent: 420000,
      progress: 20,
      status: "Tendering",
      startDate: "2024-03-01",
      expectedCompletion: "2024-07-31",
      contractor: "TBD",
      timeline: [
        { phase: "Tender Process", status: "ongoing", date: "2024-02-15" },
        { phase: "Fund Release", status: "pending", date: "2024-03-01" },
        { phase: "Site Survey", status: "pending", date: "2024-03-15" },
        { phase: "Construction", status: "pending", date: "2024-04-01" },
        { phase: "Testing & Handover", status: "pending", date: "2024-07-31" }
      ],
      images: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
      ],
      reviews: []
    },
    {
      id: 4,
      title: "Digital Library Setup",
      description: "Modern library with computers and internet access",
      ward: "Ward 4",
      location: "Community Center",
      budget: 650000,
      spent: 585000,
      progress: 90,
      status: "Under Construction",
      startDate: "2024-01-10",
      expectedCompletion: "2024-02-28",
      contractor: "Tech Solutions Hub",
      timeline: [
        { phase: "Tender Process", status: "completed", date: "2024-01-10" },
        { phase: "Fund Release", status: "completed", date: "2024-01-15" },
        { phase: "Equipment Procurement", status: "completed", date: "2024-01-25" },
        { phase: "Installation & Setup", status: "ongoing", date: "2024-02-10" },
        { phase: "Training & Handover", status: "pending", date: "2024-02-28" }
      ],
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
      ],
      reviews: [
        {
          id: 1,
          citizen: "Dr. Meera Patel",
          rating: 4,
          comment: "Great initiative! The setup looks modern and will benefit many students.",
          date: "2024-02-15",
          likes: 15
        }
      ]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesStatus = selectedFilter === 'all' || 
      (selectedFilter === 'ongoing' && ['Under Construction', 'Tendering'].includes(project.status)) ||
      (selectedFilter === 'completed' && project.status === 'Completed');
    
    const matchesWard = selectedWard === 'all' || project.ward === selectedWard;
    
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesWard && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-accent text-white">Completed</Badge>;
      case 'Under Construction':
        return <Badge className="bg-primary text-white">Under Construction</Badge>;
      case 'Tendering':
        return <Badge variant="outline">Tendering</Badge>;
      case 'Fund Released':
        return <Badge className="bg-secondary text-white">Fund Released</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTimelineIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-accent" />;
      case 'ongoing':
        return <Clock className="w-4 h-4 text-primary" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Tracking</h1>
          <p className="text-lg text-gray-600">Monitor the progress of approved community projects</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={selectedWard} onValueChange={setSelectedWard}>
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
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  {getStatusBadge(project.status)}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white">
                    {project.ward}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>Location</span>
                    </div>
                    <p className="font-medium">{project.location}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Building className="w-3 h-3 mr-1" />
                      <span>Contractor</span>
                    </div>
                    <p className="font-medium">{project.contractor}</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <IndianRupee className="w-3 h-3 mr-1" />
                      <span>Budget</span>
                    </div>
                    <p className="font-medium">₹{(project.budget / 100000).toFixed(1)}L</p>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>Expected Completion</span>
                    </div>
                    <p className="font-medium">{new Date(project.expectedCompletion).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{project.reviews.length}</span>
                    </div>
                    <div className="flex items-center">
                      <Camera className="w-4 h-4 mr-1" />
                      <span>{project.images.length}</span>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" onClick={() => setSelectedProject(project)}>
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      {selectedProject && (
                        <>
                          <DialogHeader>
                            <DialogTitle>{selectedProject.title}</DialogTitle>
                          </DialogHeader>
                          
                          <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="overview">Overview</TabsTrigger>
                              <TabsTrigger value="timeline">Timeline</TabsTrigger>
                              <TabsTrigger value="gallery">Gallery</TabsTrigger>
                              <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="overview" className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Project Details</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Ward:</span>
                                      <span>{selectedProject.ward}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Status:</span>
                                      {getStatusBadge(selectedProject.status)}
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Budget:</span>
                                      <span>₹{(selectedProject.budget / 100000).toFixed(1)}L</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Spent:</span>
                                      <span>₹{(selectedProject.spent / 100000).toFixed(1)}L</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Contractor:</span>
                                      <span>{selectedProject.contractor}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Progress</h4>
                                  <div className="space-y-2">
                                    <Progress value={selectedProject.progress} className="h-3" />
                                    <p className="text-sm text-gray-600">
                                      {selectedProject.progress}% completed
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Description</h4>
                                <p className="text-gray-600">{selectedProject.description}</p>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="timeline">
                              <div className="space-y-4">
                                <h4 className="font-semibold">Project Timeline</h4>
                                <div className="space-y-4">
                                  {selectedProject.timeline.map((phase, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                      {getTimelineIcon(phase.status)}
                                      <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                          <span className={`font-medium ${
                                            phase.status === 'completed' ? 'text-accent' :
                                            phase.status === 'ongoing' ? 'text-primary' : 'text-gray-500'
                                          }`}>
                                            {phase.phase}
                                          </span>
                                          <span className="text-sm text-gray-500">
                                            {new Date(phase.date).toLocaleDateString()}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="gallery">
                              <div className="space-y-4">
                                <h4 className="font-semibold">Project Gallery</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  {selectedProject.images.map((image, index) => (
                                    <ImageWithFallback
                                      key={index}
                                      src={image}
                                      alt={`${selectedProject.title} - Image ${index + 1}`}
                                      className="w-full h-48 object-cover rounded-lg"
                                    />
                                  ))}
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="reviews">
                              <div className="space-y-4">
                                <h4 className="font-semibold">Citizen Reviews</h4>
                                {selectedProject.reviews.length > 0 ? (
                                  <div className="space-y-4">
                                    {selectedProject.reviews.map((review) => (
                                      <Card key={review.id}>
                                        <CardContent className="pt-4">
                                          <div className="flex justify-between items-start mb-2">
                                            <div>
                                              <span className="font-medium">{review.citizen}</span>
                                              <div className="flex items-center mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                  <span key={i} className={`text-sm ${
                                                    i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                                                  }`}>★</span>
                                                ))}
                                              </div>
                                            </div>
                                            <span className="text-sm text-gray-500">
                                              {new Date(review.date).toLocaleDateString()}
                                            </span>
                                          </div>
                                          <p className="text-gray-600 mb-2">{review.comment}</p>
                                          <div className="flex items-center">
                                            <ThumbsUp className="w-4 h-4 mr-1 text-gray-400" />
                                            <span className="text-sm text-gray-500">{review.likes}</span>
                                          </div>
                                        </CardContent>
                                      </Card>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-gray-500 text-center py-8">No reviews yet</p>
                                )}
                              </div>
                            </TabsContent>
                          </Tabs>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FolderOpen className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}