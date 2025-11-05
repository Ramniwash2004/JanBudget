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
  // Timeline,
  Building,
  // Truck
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from './data/projectData.ts';

export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedWard, setSelectedWard] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [comments, setComments] = useState(80);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleCommentClick = () => {
      setShowCommentBox(!showCommentBox);
    };

    const handleAddComment = () => {
      if (newComment.trim() !== "") {
        setComments(prev => prev + 1);
        setNewComment("");
      }
    };


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
                  <SelectItem value="Ward 1">Ward 1 - Veer Savarkar Nagar Ward</SelectItem>
                 <SelectItem value="Ward 2">Ward 2 - Pt. Javaharlal Nehru Ward</SelectItem>
                 <SelectItem value="Ward 3">Ward 3 - Sant Kabir Das Ward</SelectItem>
                 <SelectItem value="Ward 4">Ward 4 - Yatiyatan Lal Ward</SelectItem>
                 <SelectItem value="Ward 5">Ward 5 - Banjari Mata Mandir Ward</SelectItem>
                 <SelectItem value="Ward 6">Ward 6 - Veerangani Avanti Bai Ward</SelectItem>
                 <SelectItem value="Ward 7">Ward 7 - Kushabhav Thakre</SelectItem>
                 <SelectItem value="Ward 8">Ward 8 - Pt. Motilal Nehru Ward</SelectItem>
                 <SelectItem value="Ward 9">Ward 9 - Doc. Bhimrav Ambedkar Ward</SelectItem>
                 <SelectItem value="Ward 10">Ward 10 - Rani Laxmi Bai Ward</SelectItem>
                 <SelectItem value="Ward 11">Ward 11 - Kalimata Ward</SelectItem>
                 <SelectItem value="Ward 12">Ward 12 - Mahatma Gandhi Ward</SelectItem>
                 <SelectItem value="Ward 13">Ward 13 - Rajiv Gandi Ward</SelectItem>
                 <SelectItem value="Ward 14">Ward 14 - Raman Mandir Ward</SelectItem>
                 <SelectItem value="Ward 15">Ward 15 - Kanhiya Lal Banjari Ward</SelectItem>
                 <SelectItem value="Ward 16">Ward 16 - Veer Shivaji Ward</SelectItem>
                 <SelectItem value="Ward 17">Ward 17 - Thakkar Bapa Ward</SelectItem>
                 <SelectItem value="Ward 18">Ward 18 - Bal Gangadhar Tilak Nagar</SelectItem>
                 <SelectItem value="Ward 19">Ward 19 - DR. A.P.J. ABDUL KALAM WARD</SelectItem>
                 <SelectItem value="Ward 20">Ward 20 - Ram Krishna Paramhans Ward</SelectItem>
                 <SelectItem value="Ward 21">Ward 21 - Shaheed Bhagat Singh Ward</SelectItem>
                 <SelectItem value="Ward 22">Ward 22 - Pandit Ishwaricharan Shukla Ward</SelectItem>
                 <SelectItem value="Ward 23">Ward 23 - Manmohan Singh Bakshi Ward</SelectItem>
                 <SelectItem value="Ward 24">Ward 24 - Vallab Bhai Patel Ward</SelectItem>
                 <SelectItem value="Ward 25">Ward 25 - Sant Ram Das Ward</SelectItem>
                 <SelectItem value="Ward 26">Ward 26 - Danveer Bhabhasaha Ward</SelectItem>
                 <SelectItem value="Ward 27">Ward 27 - Indra Gandhi Ward</SelectItem>
                 <SelectItem value="Ward 28">Ward 28 - Shaheed Hemu Kalyani Ward</SelectItem>
                 <SelectItem value="Ward 29">Ward 29 - Guru Govind Singh Ward</SelectItem>
                 <SelectItem value="Ward 30">Ward 30 - Shankar Nagar Ward</SelectItem>
                 <SelectItem value="Ward 31">Ward 31 - Neta Shubhaschandra Bose Ward</SelectItem>
                 <SelectItem value="Ward 32">Ward 32 - Maharishi Valmiki Ward</SelectItem>
                 <SelectItem value="Ward 33">Ward 33 - Veernarayan Singh Ward</SelectItem>
                 <SelectItem value="Ward 34">Ward 34 - Lal Bhadur Shastri Ward</SelectItem>
                 <SelectItem value="Ward 35">Ward 35 - Pandit Ravishankar Shukla Ward</SelectItem>
                 <SelectItem value="Ward 36">Ward 36 - Havaldar Abdul Hamid Ward</SelectItem>
                 <SelectItem value="Ward 37">Ward 37 - Tatyapara Ward Shaheed</SelectItem>
                 <SelectItem value="Ward 38">Ward 38 - Chudamani Nayak Ward</SelectItem>
                 <SelectItem value="Ward 39">Ward 39 - Swami Atmanand Ward</SelectItem>
                 <SelectItem value="Ward 40">Ward 40 - Thakur Pyare Lal Ward</SelectItem>
                 <SelectItem value="Ward 41">Ward 41 - Pt. Dindayal Uppadhye Ward</SelectItem>
                 <SelectItem value="Ward 42">Ward 42 - Pt. Sundar Lal Sharma Ward</SelectItem>
                 <SelectItem value="Ward 43">Ward 43 - Mahant Laxminarayn Das Ward</SelectItem>
                 <SelectItem value="Ward 44">Ward 44 - Bhramanpara Ward</SelectItem>
                 <SelectItem value="Ward 45">Ward 45 - Swami Vivakanand Ward</SelectItem>
                 <SelectItem value="Ward 46">Ward 46 - Mailana Abdul Rauf Ward</SelectItem>
                 <SelectItem value="Ward 47">Ward 47 - Civil Lines Ward</SelectItem>
                 <SelectItem value="Ward 48">Ward 48 - Mother Terisa Ward</SelectItem>
                 <SelectItem value="Ward 49">Ward 49 - Guru Ghasidas Ward</SelectItem>
                 <SelectItem value="Ward 50">Ward 50 - Rani Durgavati Ward</SelectItem>
                 <SelectItem value="Ward 51">Ward 51 - Doc. Rajendra Prasad Ward</SelectItem>
                 <SelectItem value="Ward 52">Ward 52 - PT. VIDYACHARAN SHUKLA WARD</SelectItem>
                 <SelectItem value="Ward 53">Ward 53 - Babu Jagjivan Ram Ward</SelectItem>
                 <SelectItem value="Ward 54">Ward 54 - KAMRED SUDHIR MUKHARJEE WARD</SelectItem>
                 <SelectItem value="Ward 55">Ward 55 - Ravindra Nath Taigore Ward</SelectItem>
                 <SelectItem value="Ward 56">Ward 56 - Arvind Dikshit Ward</SelectItem>
                 <SelectItem value="Ward 57">Ward 57 - Pt. Bhagwati Charan Shukla Ward</SelectItem>
                 <SelectItem value="Ward 58">Ward 58 - Shaheed Pankaj Vikaram Ward</SelectItem>
                 <SelectItem value="Ward 59">Ward 59 - Mureshwar Rao Gandre Ward</SelectItem>
                 <SelectItem value="Ward 60">Ward 60 - Chandrashekhar Aazad Ward</SelectItem>
                 <SelectItem value="Ward 61">Ward 61 - Doc. Shyam Prasad Mukhrji</SelectItem>
                 <SelectItem value="Ward 62">Ward 62 - Shaheed Rajiv Pard Ward</SelectItem>
                 <SelectItem value="Ward 63">Ward 63 - Brigediyar Usman Ward</SelectItem>
                 <SelectItem value="Ward 64">Ward 64 - Doc. Vipin Bihari Sur Ward</SelectItem>
                 <SelectItem value="Ward 65">Ward 65 - Mahamaya Mandir Ward</SelectItem>
                 <SelectItem value="Ward 66">Ward 66 - Vaman Rao Lakhe Ward</SelectItem>
                 <SelectItem value="Ward 67">Ward 67 - BHAKTMΑΤΑ KARMA WARD</SelectItem>
                 <SelectItem value="Ward 68">Ward 68 - Doc. Khubchand Baghel Ward</SelectItem>
                 <SelectItem value="Ward 69">Ward 69 - Madhav Rav Sapre Ward</SelectItem>
                 <SelectItem value="Ward 70">Ward 70 - Sant Ravidas Ward</SelectItem>
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
                    {/* <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{project.reviews.length}</span>
                    </div> */}
                    <button
                      onClick={handleCommentClick}
                      className="flex items-center hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{comments}</span>
                    </button>
                      {showCommentBox && (
                        <div className="mt-3 flex items-center space-x-2">
                        <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="flex-1 border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />                      
                        <Button size="sm" onClick={handleAddComment}>
                          Post                      
                        </Button>                      
                         </div>                                          
                      )}                                           
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