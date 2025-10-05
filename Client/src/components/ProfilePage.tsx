import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { 
  User, 
  MapPin, 
  Calendar, 
  FileText, 
  Vote, 
  MessageSquare, 
  Award,
  Edit,
  Bell,
  Shield,
  Settings,
  Activity,
  TrendingUp
} from 'lucide-react';

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    ward: 'Ward 1 - Central Market',
    address: 'House No. 123, Market Road, Central Area',
    aadhaarId: 'XXXX-XXXX-1234',
    voterId: 'ABC1234567'
  });

  const userStats = {
    proposalsSubmitted: 3,
    votesCase: 12,
    complaintsLodged: 2,
    projectsFollowed: 8,
    communityPoints: 245
  };

  const badges = [
    { name: 'Active Citizen', description: 'Voted in 10+ proposals', earned: true, icon: '🏆' },
    { name: 'Top Contributor', description: 'Submitted 3+ proposals', earned: true, icon: '⭐' },
    { name: 'Community Champion', description: 'Helped resolve 5+ complaints', earned: false, icon: '🏅' },
    { name: 'Transparency Advocate', description: 'Tracked 10+ projects', earned: true, icon: '👁️' }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'vote',
      description: 'Voted for "Smart LED Street Lighting" in Ward 1',
      date: '2024-02-22',
      status: 'completed'
    },
    {
      id: 2,
      type: 'proposal',
      description: 'Submitted proposal for "Community Health Center"',
      date: '2024-02-20',
      status: 'under_review'
    },
    {
      id: 3,
      type: 'complaint',
      description: 'Lodged complaint about "Broken streetlight"',
      date: '2024-02-18',
      status: 'resolved'
    },
    {
      id: 4,
      type: 'project',
      description: 'Started following "Drainage System Improvement"',
      date: '2024-02-15',
      status: 'ongoing'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'vote':
        return <Vote className="w-4 h-4 text-primary" />;
      case 'proposal':
        return <FileText className="w-4 h-4 text-secondary" />;
      case 'complaint':
        return <MessageSquare className="w-4 h-4 text-orange-500" />;
      case 'project':
        return <Activity className="w-4 h-4 text-accent" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-accent text-white">Completed</Badge>;
      case 'under_review':
        return <Badge className="bg-secondary text-white">Under Review</Badge>;
      case 'resolved':
        return <Badge className="bg-accent text-white">Resolved</Badge>;
      case 'ongoing':
        return <Badge className="bg-primary text-white">Ongoing</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Citizen Profile</h1>
          <p className="text-lg text-gray-600">Manage your account and track your civic engagement</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="" alt={userInfo.name} />
                  <AvatarFallback className="text-2xl bg-primary text-white">
                    {userInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{userInfo.name}</CardTitle>
                <CardDescription>{userInfo.ward}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isEditing ? (
                  <>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">Email:</span>
                        <span className="ml-2">{userInfo.email}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">Phone:</span>
                        <span className="ml-2">{userInfo.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">Address:</span>
                        <span className="ml-2">{userInfo.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">Voter ID:</span>
                        <span className="ml-2">{userInfo.voterId}</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => setIsEditing(true)} 
                      className="w-full"
                      variant="outline"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={userInfo.address}
                        onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleSaveProfile} className="flex-1">
                        Save
                      </Button>
                      <Button 
                        onClick={() => setIsEditing(false)} 
                        variant="outline" 
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Community Points */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Community Points
                </CardTitle>
                <CardDescription>
                  Earn points by participating in civic activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {userStats.communityPoints}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">Total Points</div>
                  <Progress value={75} className="h-2 mb-2" />
                  <div className="text-xs text-gray-500">
                    25 points to next level
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">{userStats.proposalsSubmitted}</div>
                      <div className="text-sm text-gray-600">Proposals Submitted</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <Vote className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold">{userStats.votesCase}</div>
                      <div className="text-sm text-gray-600">Votes Cast</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <MessageSquare className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{userStats.complaintsLodged}</div>
                      <div className="text-sm text-gray-600">Complaints Lodged</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Participation Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Civic Participation Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Voting Participation</span>
                        <span>12 out of 15 votes</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Proposal Engagement</span>
                        <span>High</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Community Involvement</span>
                        <span>Very Active</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest civic engagements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                          <div className="mt-1">
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.description}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(activity.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            {getStatusBadge(activity.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="badges" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievement Badges</CardTitle>
                    <CardDescription>Recognition for your civic participation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {badges.map((badge, index) => (
                        <div 
                          key={index} 
                          className={`p-4 border rounded-lg ${
                            badge.earned ? 'border-primary bg-primary/5' : 'border-gray-200 bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`text-2xl ${badge.earned ? '' : 'grayscale opacity-50'}`}>
                              {badge.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-semibold ${badge.earned ? 'text-primary' : 'text-gray-400'}`}>
                                {badge.name}
                              </h4>
                              <p className={`text-sm ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                                {badge.description}
                              </p>
                            </div>
                            {badge.earned && (
                              <Badge className="bg-accent text-white">Earned</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Voting Reminders</h4>
                        <p className="text-sm text-gray-600">Get notified about new voting phases</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Project Updates</h4>
                        <p className="text-sm text-gray-600">Updates on projects you're following</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Complaint Status</h4>
                        <p className="text-sm text-gray-600">Updates on your complaint status</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Enabled
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                      <Shield className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Privacy Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}