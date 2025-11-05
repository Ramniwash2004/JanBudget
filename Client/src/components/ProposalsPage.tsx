import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
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
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { proposals } from "./data/proposalData.ts";

export function ProposalsPage() {
  const [sortBy, setSortBy] = useState("popular");
  const [filterWard, setFilterWard] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isNewProposalOpen, setIsNewProposalOpen] = useState(false);
  const [newProposal, setNewProposal] = useState({
    title: "",
    description: "",
    estimatedCost: "",
    ward: "",
    location: "",
    category: "",
  });

  const filteredProposals = proposals
    .filter(
      (proposal) =>
        (filterWard === "all" || proposal.ward === filterWard) &&
        (searchQuery === "" ||
          proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          proposal.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.likes - a.likes;
        case "recent":
          return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
        case "comments":
          return b.comments - a.comments;
        default:
          return 0;
      }
    });

  const handleSubmitProposal = () => {
    console.log("New proposal submitted:", newProposal);
    setIsNewProposalOpen(false);
    setNewProposal({
      title: "",
      description: "",
      estimatedCost: "",
      ward: "",
      location: "",
      category: "",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-green-600 text-white">Approved</Badge>;
      case "Voting Open":
        return <Badge className="bg-blue-600 text-white">Voting Open</Badge>;
      case "Under Review":
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

          {/* Submit Proposal Dialog */}
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
                    onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about the project, its benefits, and implementation plan"
                    rows={4}
                    value={newProposal.description}
                    onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
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
                      onChange={(e) => setNewProposal({ ...newProposal, estimatedCost: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="ward">Ward</Label>
                    <Select
                      value={newProposal.ward}
                      onValueChange={(value) => setNewProposal({ ...newProposal, ward: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select ward" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ward 1">Ward 1 - Veer Savarkar Nagar Ward</SelectItem>
                        <SelectItem value="Ward 2">Ward 2 - Pt. Javaharlal Nehru Ward</SelectItem>
                        <SelectItem value="Ward 3">Ward 3 - Sant Kabir Das Ward</SelectItem>
                        <SelectItem value="Ward 4">Ward 4 - Yatiyatan Lal Ward</SelectItem>
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
                    onChange={(e) => setNewProposal({ ...newProposal, location: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newProposal.category}
                    onValueChange={(value) => setNewProposal({ ...newProposal, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="Recreation">Recreation</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Supporting Documents/Images</Label>
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
                  <Button onClick={handleSubmitProposal}>Submit Proposal</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search proposals..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <Select value={filterWard} onValueChange={setFilterWard}>
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
                {/* <SelectItem value="all">All Wards</SelectItem>
                <SelectItem value="Ward 1">Ward 1</SelectItem>
                <SelectItem value="Ward 2">Ward 2</SelectItem>
                <SelectItem value="Ward 3">Ward 3</SelectItem>
                <SelectItem value="Ward 4">Ward 4</SelectItem> */}
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

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} getStatusBadge={getStatusBadge} />
          ))}
        </div>

        {filteredProposals.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-medium">No proposals found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* =====================
   Separate ProposalCard
   ===================== */

function ProposalCard({ proposal, getStatusBadge }) {
  const [likes, setLikes] = useState(proposal.likes || 0);
  const [comments, setComments] = useState(proposal.comments || 0);
  const [liked, setLiked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prev) => prev + 1);
      setNewComment("");
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={proposal.image}
          alt={proposal.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 left-4">{getStatusBadge(proposal.status)}</div>
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

        {/* Likes/comments/view */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <button
              onClick={handleLike}
              className={`flex items-center transition-colors cursor-pointer ${
                liked ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500`}
            >
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span>{likes}</span>
            </button>

            <button
              onClick={() => setShowCommentBox(!showCommentBox)}
              className="flex items-center hover:text-orange-500 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>{comments}</span>
            </button>
          </div>

          <Button size="sm" variant="outline">
            <Eye className="w-4 h-4 mr-1" />
            View
          </Button>
        </div>

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
      </CardContent>
    </Card>
  );
}


export default ProposalCard



// import { useState } from 'react';
// import { Button } from './ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import { Input } from './ui/input';
// import { Label } from './ui/label';
// import { Textarea } from './ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
// import { Badge } from './ui/badge';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
// import { 
//   Plus, 
//   MapPin, 
//   IndianRupee, 
//   ThumbsUp, 
//   MessageCircle, 
//   Calendar,
//   Upload,
//   Filter,
//   Search,
//   Eye,
//   TrendingUp,
//   Clock
// } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { proposals } from './data/proposalData.ts';

// export function ProposalsPage() {
//   const [sortBy, setSortBy] = useState('popular');
//   const [filterWard, setFilterWard] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [likes, setLikes] = useState(100);
//   const [comments, setComments] = useState(80);
//   const [liked, setLiked] = useState(false);
//   const [showCommentBox, setShowCommentBox] = useState(false);
//   const [newComment, setNewComment] = useState("");

//     const handleLike = () => {
//     setLiked(!liked);
//     setLikes(prev => liked ? prev - 1 : prev + 1);
//     };

//     const handleCommentClick = () => {
//       setShowCommentBox(!showCommentBox);
//     };

//     const handleAddComment = () => {
//       if (newComment.trim() !== "") {
//         setComments(prev => prev + 1);
//         setNewComment("");
//       }
//     };

//   const [isNewProposalOpen, setIsNewProposalOpen] = useState(false);
//   const [newProposal, setNewProposal] = useState({
//     title: '',
//     description: '',
//     estimatedCost: '',
//     ward: '',
//     location: '',
//     category: ''
//   });

//   const filteredProposals = proposals
//     .filter(proposal => 
//       (filterWard === 'all' || proposal.ward === filterWard) &&
//       (searchQuery === '' || 
//         proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         proposal.description.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     )
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'popular':
//           return b.likes - a.likes;
//         case 'recent':
//           return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
//         case 'comments':
//           return b.comments - a.comments;
//         default:
//           return 0;
//       }
//     });

//   const handleSubmitProposal = () => {
//     console.log('New proposal submitted:', newProposal);
//     setIsNewProposalOpen(false);
//     setNewProposal({
//       title: '',
//       description: '',
//       estimatedCost: '',
//       ward: '',
//       location: '',
//       category: ''
//     });
//   };

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'Approved':
//         return <Badge className="bg-accent text-white">Approved</Badge>;
//       case 'Voting Open':
//         return <Badge className="bg-primary text-white">Voting Open</Badge>;
//       case 'Under Review':
//         return <Badge variant="outline">Under Review</Badge>;
//       default:
//         return <Badge variant="secondary">{status}</Badge>;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Proposals</h1>
//             <p className="text-lg text-gray-600">Submit and explore project proposals for your community</p>
//           </div>
//           <Dialog open={isNewProposalOpen} onOpenChange={setIsNewProposalOpen}>
//             <DialogTrigger asChild>
//               <Button className="mt-4 sm:mt-0">
//                 <Plus className="w-4 h-4 mr-2" />
//                 Submit Proposal
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>Submit New Proposal</DialogTitle>
//               </DialogHeader>
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="title">Project Title</Label>
//                   <Input
//                     id="title"
//                     placeholder="Enter a clear, descriptive title"
//                     value={newProposal.title}
//                     onChange={(e) => setNewProposal({...newProposal, title: e.target.value})}
//                   />
//                 </div>
                
//                 <div>
//                   <Label htmlFor="description">Description</Label>
//                   <Textarea
//                     id="description"
//                     placeholder="Provide detailed information about the project, its benefits, and implementation plan"
//                     rows={4}
//                     value={newProposal.description}
//                     onChange={(e) => setNewProposal({...newProposal, description: e.target.value})}
//                   />
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="cost">Estimated Cost (₹)</Label>
//                     <Input
//                       id="cost"
//                       type="number"
//                       placeholder="0"
//                       value={newProposal.estimatedCost}
//                       onChange={(e) => setNewProposal({...newProposal, estimatedCost: e.target.value})}
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="ward">Ward</Label>
//                     <Select value={newProposal.ward} onValueChange={(value) => setNewProposal({...newProposal, ward: value})}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select ward" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="Ward 1">Ward 1 - Veer Savarkar Nagar Ward</SelectItem>
//                         <SelectItem value="Ward 2">Ward 2 - Pt. Javaharlal Nehru Ward</SelectItem>
//                         <SelectItem value="Ward 3">Ward 3 - Sant Kabir Das Ward</SelectItem>
//                         <SelectItem value="Ward 4">Ward 4 - Yatiyatan Lal Ward</SelectItem>
//                         <SelectItem value="Ward 5">Ward 5 - Banjari Mata Mandir Ward</SelectItem>
//                         <SelectItem value="Ward 6">Ward 6 - Veerangani Avanti Bai Ward</SelectItem>
//                         <SelectItem value="Ward 7">Ward 7 - Kushabhav Thakre</SelectItem>
//                         <SelectItem value="Ward 8">Ward 8 - Pt. Motilal Nehru Ward</SelectItem>
//                         <SelectItem value="Ward 9">Ward 9 - Doc. Bhimrav Ambedkar Ward</SelectItem>
//                         <SelectItem value="Ward 10">Ward 10 - Rani Laxmi Bai Ward</SelectItem>
//                         <SelectItem value="Ward 11">Ward 11 - Kalimata Ward</SelectItem>
//                         <SelectItem value="Ward 12">Ward 12 - Mahatma Gandhi Ward</SelectItem>
//                         <SelectItem value="Ward 13">Ward 13 - Rajiv Gandi Ward</SelectItem>
//                         <SelectItem value="Ward 14">Ward 14 - Raman Mandir Ward</SelectItem>
//                         <SelectItem value="Ward 15">Ward 15 - Kanhiya Lal Banjari Ward</SelectItem>
//                         <SelectItem value="Ward 16">Ward 16 - Veer Shivaji Ward</SelectItem>
//                         <SelectItem value="Ward 17">Ward 17 - Thakkar Bapa Ward</SelectItem>
//                         <SelectItem value="Ward 18">Ward 18 - Bal Gangadhar Tilak Nagar</SelectItem>
//                         <SelectItem value="Ward 19">Ward 19 - DR. A.P.J. ABDUL KALAM WARD</SelectItem>
//                         <SelectItem value="Ward 20">Ward 20 - Ram Krishna Paramhans Ward</SelectItem>
//                         <SelectItem value="Ward 21">Ward 21 - Shaheed Bhagat Singh Ward</SelectItem>
//                         <SelectItem value="Ward 22">Ward 22 - Pandit Ishwaricharan Shukla Ward</SelectItem>
//                         <SelectItem value="Ward 23">Ward 23 - Manmohan Singh Bakshi Ward</SelectItem>
//                         <SelectItem value="Ward 24">Ward 24 - Vallab Bhai Patel Ward</SelectItem>
//                         <SelectItem value="Ward 25">Ward 25 - Sant Ram Das Ward</SelectItem>
//                         <SelectItem value="Ward 26">Ward 26 - Danveer Bhabhasaha Ward</SelectItem>
//                         <SelectItem value="Ward 27">Ward 27 - Indra Gandhi Ward</SelectItem>
//                         <SelectItem value="Ward 28">Ward 28 - Shaheed Hemu Kalyani Ward</SelectItem>
//                         <SelectItem value="Ward 29">Ward 29 - Guru Govind Singh Ward</SelectItem>
//                         <SelectItem value="Ward 30">Ward 30 - Shankar Nagar Ward</SelectItem>
//                         <SelectItem value="Ward 31">Ward 31 - Neta Shubhaschandra Bose Ward</SelectItem>
//                         <SelectItem value="Ward 32">Ward 32 - Maharishi Valmiki Ward</SelectItem>
//                         <SelectItem value="Ward 33">Ward 33 - Veernarayan Singh Ward</SelectItem>
//                         <SelectItem value="Ward 34">Ward 34 - Lal Bhadur Shastri Ward</SelectItem>
//                         <SelectItem value="Ward 35">Ward 35 - Pandit Ravishankar Shukla Ward</SelectItem>
//                         <SelectItem value="Ward 36">Ward 36 - Havaldar Abdul Hamid Ward</SelectItem>
//                         <SelectItem value="Ward 37">Ward 37 - Tatyapara Ward Shaheed</SelectItem>
//                         <SelectItem value="Ward 38">Ward 38 - Chudamani Nayak Ward</SelectItem>
//                         <SelectItem value="Ward 39">Ward 39 - Swami Atmanand Ward</SelectItem>
//                         <SelectItem value="Ward 40">Ward 40 - Thakur Pyare Lal Ward</SelectItem>
//                         <SelectItem value="Ward 41">Ward 41 - Pt. Dindayal Uppadhye Ward</SelectItem>
//                         <SelectItem value="Ward 42">Ward 42 - Pt. Sundar Lal Sharma Ward</SelectItem>
//                         <SelectItem value="Ward 43">Ward 43 - Mahant Laxminarayn Das Ward</SelectItem>
//                         <SelectItem value="Ward 44">Ward 44 - Bhramanpara Ward</SelectItem>
//                         <SelectItem value="Ward 45">Ward 45 - Swami Vivakanand Ward</SelectItem>
//                         <SelectItem value="Ward 46">Ward 46 - Mailana Abdul Rauf Ward</SelectItem>
//                         <SelectItem value="Ward 47">Ward 47 - Civil Lines Ward</SelectItem>
//                         <SelectItem value="Ward 48">Ward 48 - Mother Terisa Ward</SelectItem>
//                         <SelectItem value="Ward 49">Ward 49 - Guru Ghasidas Ward</SelectItem>
//                         <SelectItem value="Ward 50">Ward 50 - Rani Durgavati Ward</SelectItem>
//                         <SelectItem value="Ward 51">Ward 51 - Doc. Rajendra Prasad Ward</SelectItem>
//                         <SelectItem value="Ward 52">Ward 52 - PT. VIDYACHARAN SHUKLA WARD</SelectItem>
//                         <SelectItem value="Ward 53">Ward 53 - Babu Jagjivan Ram Ward</SelectItem>
//                         <SelectItem value="Ward 54">Ward 54 - KAMRED SUDHIR MUKHARJEE WARD</SelectItem>
//                         <SelectItem value="Ward 55">Ward 55 - Ravindra Nath Taigore Ward</SelectItem>
//                         <SelectItem value="Ward 56">Ward 56 - Arvind Dikshit Ward</SelectItem>
//                         <SelectItem value="Ward 57">Ward 57 - Pt. Bhagwati Charan Shukla Ward</SelectItem>
//                         <SelectItem value="Ward 58">Ward 58 - Shaheed Pankaj Vikaram Ward</SelectItem>
//                         <SelectItem value="Ward 59">Ward 59 - Mureshwar Rao Gandre Ward</SelectItem>
//                         <SelectItem value="Ward 60">Ward 60 - Chandrashekhar Aazad Ward</SelectItem>
//                         <SelectItem value="Ward 61">Ward 61 - Doc. Shyam Prasad Mukhrji</SelectItem>
//                         <SelectItem value="Ward 62">Ward 62 - Shaheed Rajiv Pard Ward</SelectItem>
//                         <SelectItem value="Ward 63">Ward 63 - Brigediyar Usman Ward</SelectItem>
//                         <SelectItem value="Ward 64">Ward 64 - Doc. Vipin Bihari Sur Ward</SelectItem>
//                         <SelectItem value="Ward 65">Ward 65 - Mahamaya Mandir Ward</SelectItem>
//                         <SelectItem value="Ward 66">Ward 66 - Vaman Rao Lakhe Ward</SelectItem>
//                         <SelectItem value="Ward 67">Ward 67 - BHAKTMΑΤΑ KARMA WARD</SelectItem>
//                         <SelectItem value="Ward 68">Ward 68 - Doc. Khubchand Baghel Ward</SelectItem>
//                         <SelectItem value="Ward 69">Ward 69 - Madhav Rav Sapre Ward</SelectItem>
//                         <SelectItem value="Ward 70">Ward 70 - Sant Ravidas Ward</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
                
//                 <div>
//                   <Label htmlFor="location">Specific Location</Label>
//                   <Input
//                     id="location"
//                     placeholder="Street name, landmark, or specific area"
//                     value={newProposal.location}
//                     onChange={(e) => setNewProposal({...newProposal, location: e.target.value})}
//                   />
//                 </div>
                
//                 <div>
//                   <Label htmlFor="category">Category</Label>
//                   <Select value={newProposal.category} onValueChange={(value) => setNewProposal({...newProposal, category: value})}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Infrastructure">Infrastructure</SelectItem>
//                       <SelectItem value="Recreation">Recreation</SelectItem>
//                       <SelectItem value="Education">Education</SelectItem>
//                       <SelectItem value="Healthcare">Healthcare</SelectItem>
//                       <SelectItem value="Environment">Environment</SelectItem>
//                       <SelectItem value="Transportation">Transportation</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
                
//                 <div>
//                   <Label htmlFor="documents">Supporting Documents/Images</Label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                     <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                     <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
//                     <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
//                   </div>
//                 </div>
                
//                 <div className="flex justify-end space-x-2 pt-4">
//                   <Button variant="outline" onClick={() => setIsNewProposalOpen(false)}>
//                     Cancel
//                   </Button>
//                   <Button onClick={handleSubmitProposal}>
//                     Submit Proposal
//                   </Button>
//                 </div>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* Filters and Search */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <Input
//                   placeholder="Search proposals..."
//                   className="pl-10"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <Select value={filterWard} onValueChange={setFilterWard}>
//                 <SelectTrigger className="w-48">
//                   <Filter className="w-4 h-4 mr-2" />
//                   <SelectValue placeholder="Filter by ward" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Wards</SelectItem>
//                   <SelectItem value="Ward 1">Ward 1 - Veer Savarkar Nagar Ward</SelectItem>
//                   <SelectItem value="Ward 2">Ward 2 - Pt. Javaharlal Nehru Ward</SelectItem>
//                   <SelectItem value="Ward 3">Ward 3 - Sant Kabir Das Ward</SelectItem>
//                   <SelectItem value="Ward 4">Ward 4 - Yatiyatan Lal Ward</SelectItem>
//                   <SelectItem value="Ward 5">Ward 5 - Banjari Mata Mandir Ward</SelectItem>
//                   <SelectItem value="Ward 6">Ward 6 - Veerangani Avanti Bai Ward</SelectItem>
//                   <SelectItem value="Ward 7">Ward 7 - Kushabhav Thakre</SelectItem>
//                   <SelectItem value="Ward 8">Ward 8 - Pt. Motilal Nehru Ward</SelectItem>
//                   <SelectItem value="Ward 9">Ward 9 - Doc. Bhimrav Ambedkar Ward</SelectItem>
//                   <SelectItem value="Ward 10">Ward 10 - Rani Laxmi Bai Ward</SelectItem>
//                   <SelectItem value="Ward 11">Ward 11 - Kalimata Ward</SelectItem>
//                   <SelectItem value="Ward 12">Ward 12 - Mahatma Gandhi Ward</SelectItem>
//                   <SelectItem value="Ward 13">Ward 13 - Rajiv Gandi Ward</SelectItem>
//                   <SelectItem value="Ward 14">Ward 14 - Raman Mandir Ward</SelectItem>
//                   <SelectItem value="Ward 15">Ward 15 - Kanhiya Lal Banjari Ward</SelectItem>
//                   <SelectItem value="Ward 16">Ward 16 - Veer Shivaji Ward</SelectItem>
//                   <SelectItem value="Ward 17">Ward 17 - Thakkar Bapa Ward</SelectItem>
//                   <SelectItem value="Ward 18">Ward 18 - Bal Gangadhar Tilak Nagar</SelectItem>
//                   <SelectItem value="Ward 19">Ward 19 - DR. A.P.J. ABDUL KALAM WARD</SelectItem>
//                   <SelectItem value="Ward 20">Ward 20 - Ram Krishna Paramhans Ward</SelectItem>
//                   <SelectItem value="Ward 21">Ward 21 - Shaheed Bhagat Singh Ward</SelectItem>
//                   <SelectItem value="Ward 22">Ward 22 - Pandit Ishwaricharan Shukla Ward</SelectItem>
//                   <SelectItem value="Ward 23">Ward 23 - Manmohan Singh Bakshi Ward</SelectItem>
//                   <SelectItem value="Ward 24">Ward 24 - Vallab Bhai Patel Ward</SelectItem>
//                   <SelectItem value="Ward 25">Ward 25 - Sant Ram Das Ward</SelectItem>
//                   <SelectItem value="Ward 26">Ward 26 - Danveer Bhabhasaha Ward</SelectItem>
//                   <SelectItem value="Ward 27">Ward 27 - Indra Gandhi Ward</SelectItem>
//                   <SelectItem value="Ward 28">Ward 28 - Shaheed Hemu Kalyani Ward</SelectItem>
//                   <SelectItem value="Ward 29">Ward 29 - Guru Govind Singh Ward</SelectItem>
//                   <SelectItem value="Ward 30">Ward 30 - Shankar Nagar Ward</SelectItem>
//                   <SelectItem value="Ward 31">Ward 31 - Neta Shubhaschandra Bose Ward</SelectItem>
//                   <SelectItem value="Ward 32">Ward 32 - Maharishi Valmiki Ward</SelectItem>
//                   <SelectItem value="Ward 33">Ward 33 - Veernarayan Singh Ward</SelectItem>
//                   <SelectItem value="Ward 34">Ward 34 - Lal Bhadur Shastri Ward</SelectItem>
//                   <SelectItem value="Ward 35">Ward 35 - Pandit Ravishankar Shukla Ward</SelectItem>
//                   <SelectItem value="Ward 36">Ward 36 - Havaldar Abdul Hamid Ward</SelectItem>
//                   <SelectItem value="Ward 37">Ward 37 - Tatyapara Ward Shaheed</SelectItem>
//                   <SelectItem value="Ward 38">Ward 38 - Chudamani Nayak Ward</SelectItem>
//                   <SelectItem value="Ward 39">Ward 39 - Swami Atmanand Ward</SelectItem>
//                   <SelectItem value="Ward 40">Ward 40 - Thakur Pyare Lal Ward</SelectItem>
//                   <SelectItem value="Ward 41">Ward 41 - Pt. Dindayal Uppadhye Ward</SelectItem>
//                   <SelectItem value="Ward 42">Ward 42 - Pt. Sundar Lal Sharma Ward</SelectItem>
//                   <SelectItem value="Ward 43">Ward 43 - Mahant Laxminarayn Das Ward</SelectItem>
//                   <SelectItem value="Ward 44">Ward 44 - Bhramanpara Ward</SelectItem>
//                   <SelectItem value="Ward 45">Ward 45 - Swami Vivakanand Ward</SelectItem>
//                   <SelectItem value="Ward 46">Ward 46 - Mailana Abdul Rauf Ward</SelectItem>
//                   <SelectItem value="Ward 47">Ward 47 - Civil Lines Ward</SelectItem>
//                   <SelectItem value="Ward 48">Ward 48 - Mother Terisa Ward</SelectItem>
//                   <SelectItem value="Ward 49">Ward 49 - Guru Ghasidas Ward</SelectItem>
//                   <SelectItem value="Ward 50">Ward 50 - Rani Durgavati Ward</SelectItem>
//                   <SelectItem value="Ward 51">Ward 51 - Doc. Rajendra Prasad Ward</SelectItem>
//                   <SelectItem value="Ward 52">Ward 52 - PT. VIDYACHARAN SHUKLA WARD</SelectItem>
//                   <SelectItem value="Ward 53">Ward 53 - Babu Jagjivan Ram Ward</SelectItem>
//                   <SelectItem value="Ward 54">Ward 54 - KAMRED SUDHIR MUKHARJEE WARD</SelectItem>
//                   <SelectItem value="Ward 55">Ward 55 - Ravindra Nath Taigore Ward</SelectItem>
//                   <SelectItem value="Ward 56">Ward 56 - Arvind Dikshit Ward</SelectItem>
//                   <SelectItem value="Ward 57">Ward 57 - Pt. Bhagwati Charan Shukla Ward</SelectItem>
//                   <SelectItem value="Ward 58">Ward 58 - Shaheed Pankaj Vikaram Ward</SelectItem>
//                   <SelectItem value="Ward 59">Ward 59 - Mureshwar Rao Gandre Ward</SelectItem>
//                   <SelectItem value="Ward 60">Ward 60 - Chandrashekhar Aazad Ward</SelectItem>
//                   <SelectItem value="Ward 61">Ward 61 - Doc. Shyam Prasad Mukhrji</SelectItem>
//                   <SelectItem value="Ward 62">Ward 62 - Shaheed Rajiv Pard Ward</SelectItem>
//                   <SelectItem value="Ward 63">Ward 63 - Brigediyar Usman Ward</SelectItem>
//                   <SelectItem value="Ward 64">Ward 64 - Doc. Vipin Bihari Sur Ward</SelectItem>
//                   <SelectItem value="Ward 65">Ward 65 - Mahamaya Mandir Ward</SelectItem>
//                   <SelectItem value="Ward 66">Ward 66 - Vaman Rao Lakhe Ward</SelectItem>
//                   <SelectItem value="Ward 67">Ward 67 - BHAKTMΑΤΑ KARMA WARD</SelectItem>
//                   <SelectItem value="Ward 68">Ward 68 - Doc. Khubchand Baghel Ward</SelectItem>
//                   <SelectItem value="Ward 69">Ward 69 - Madhav Rav Sapre Ward</SelectItem>
//                   <SelectItem value="Ward 70">Ward 70 - Sant Ravidas Ward</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-48">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="popular">Most Popular</SelectItem>
//                   <SelectItem value="recent">Most Recent</SelectItem>
//                   <SelectItem value="comments">Most Commented</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>

//         {/* Proposals Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProposals.map((proposal) => (
//             <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
//               <div className="relative">
//                 <ImageWithFallback
//                   src={proposal.image}
//                   alt={proposal.title}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="absolute top-4 left-4">
//                   {getStatusBadge(proposal.status)}
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <Badge variant="outline" className="bg-white">
//                     {proposal.category}
//                   </Badge>
//                 </div>
//               </div>
              
//               <CardHeader>
//                 <CardTitle className="text-lg leading-tight">{proposal.title}</CardTitle>
//                 <CardDescription className="text-sm line-clamp-2">
//                   {proposal.description}
//                 </CardDescription>
//               </CardHeader>
              
//               <CardContent className="space-y-4">
//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <div className="flex items-center">
//                     <IndianRupee className="w-4 h-4 mr-1" />
//                     <span>₹{(proposal.estimatedCost / 100000).toFixed(1)}L</span>
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="w-4 h-4 mr-1" />
//                     <span>{proposal.ward}</span>
//                   </div>
//                 </div>
                
//                 <div className="text-sm text-gray-600">
//                   <div className="flex items-center mb-1">
//                     <MapPin className="w-3 h-3 mr-1" />
//                     <span>{proposal.location}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Calendar className="w-3 h-3 mr-1" />
//                     <span>Submitted on {new Date(proposal.submittedDate).toLocaleDateString()}</span>
//                   </div>
//                 </div>
                
//                 {/* Likes/comments/view */}
//                 <div className="flex items-center justify-between pt-2 border-t">
//                   <div className="flex items-center space-x-4 text-sm text-gray-600">

//                     <button
//                       onClick={handleLike}
//                       className={`flex items-center transition-colors cursor-pointer ${
//                         liked ? "text-orange-500" : "text-gray-600"
//                       } hover:text-orange-500`}
//                     >
//                       <ThumbsUp className="w-4 h-4 mr-1" />
//                       <span>{proposal.likes}</span>
//                     </button>

//                     <button
//                       onClick={handleCommentClick}
//                       className="flex items-center hover:text-orange-500 transition-colors cursor-pointer"
//                     >
//                       <MessageCircle className="w-4 h-4 mr-1" />
//                       <span>{proposal.comments}</span>
//                     </button>
//                   </div>
//                   <Button size="sm" variant="outline">
//                     <Eye className="w-4 h-4 mr-1" />
//                     View
//                   </Button>
//                 </div>
//                 {showCommentBox && (
//                   <div className="mt-3 flex items-center space-x-2">
//                     <input
//                       type="text"
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                       placeholder="Write a comment..."
//                       className="flex-1 border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     />
//                     <Button size="sm" onClick={handleAddComment}>
//                       Post
//                     </Button>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {filteredProposals.length === 0 && (
//           <div className="text-center py-12">
//             <div className="text-gray-400 mb-4">
//               <Search className="w-12 h-12 mx-auto" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No proposals found</h3>
//             <p className="text-gray-600">Try adjusting your search or filters</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
