import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  IndianRupee, 
  TrendingUp, 
  Users, 
  FileText, 
  Vote, 
  CheckCircle,
  Clock,
  AlertTriangle,
  BarChart3,
  PieChart as PieChartIcon,
  Download,
  Eye
} from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext.tsx';

export function DashboardPage() {
  const { t } = useLanguage();

  const budgetData = [
    { ward: 'Ward 1', allocated: 50, spent: 32, projects: 8 },
    { ward: 'Ward 2', allocated: 45, spent: 28, projects: 6 },
    { ward: 'Ward 3', allocated: 60, spent: 41, projects: 12 },
    { ward: 'Ward 4', allocated: 38, spent: 24, projects: 9 }
  ];

  const categorySpending = [
    { name: 'Infrastructure', value: 45, color: '#FF9933' },
    { name: 'Recreation', value: 20, color: '#1A4A8D' },
    { name: 'Education', value: 15, color: '#138808' },
    { name: 'Healthcare', value: 12, color: '#F59E0B' },
    { name: 'Environment', value: 8, color: '#8B5CF6' }
  ];

  const monthlyProgress = [
    { month: 'Jan', proposals: 23, votes: 1200, projects: 5 },
    { month: 'Feb', proposals: 34, votes: 1890, projects: 8 },
    { month: 'Mar', proposals: 28, votes: 1654, projects: 6 },
    { month: 'Apr', proposals: 41, votes: 2100, projects: 10 },
    { month: 'May', proposals: 37, votes: 1943, projects: 9 },
    { month: 'Jun', proposals: 45, votes: 2340, projects: 12 }
  ];

  const participationData = [
    { ward: 'Ward 1', registered: 3245, voted: 1876, percentage: 58 },
    { ward: 'Ward 2', registered: 2890, voted: 1234, percentage: 43 },
    { ward: 'Ward 3', registered: 4156, voted: 2789, percentage: 67 },
    { ward: 'Ward 4', registered: 2654, voted: 1432, percentage: 54 }
  ];

  const projectStatus = [
    { status: 'Completed', count: 35, color: '#138808' },
    { status: 'Under Construction', count: 18, color: '#FF9933' },
    { status: 'Tendering', count: 12, color: '#1A4A8D' },
    { status: 'Planning', count: 8, color: '#F59E0B' }
  ];

  const kpiCards = [
    { title: t('dashboard.kpi.totalBudget'), value: '₹19.5 Cr', change: '+5.4%', icon: IndianRupee, trend: 'up' },
    { title: t('dashboard.kpi.activeCitizens'), value: '12,945', change: '+12.3%', icon: Users, trend: 'up' },
    { title: t('dashboard.kpi.proposalsThisMonth'), value: '45', change: '+8.1%', icon: FileText, trend: 'up' },
    { title: t('dashboard.kpi.votingParticipation'), value: '56%', change: '+3.2%', icon: Vote, trend: 'up' }
  ];

  const recentTransactions = [
    { id: 1, project: 'Smart LED Street Lighting', amount: 850000, vendor: 'Green Energy Solutions', date: '2024-02-22', status: 'Released' },
    { id: 2, project: 'Community Park Development', amount: 1200000, vendor: 'Urban Landscapes Ltd', date: '2024-02-20', status: 'Released' },
    { id: 3, project: 'Digital Library Setup', amount: 650000, vendor: 'Tech Solutions Hub', date: '2024-02-18', status: 'Pending' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('dashboard.title')}</h1>
            <p className="text-lg text-gray-600">{t('dashboard.subtitle')}</p>
          </div>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              {t('dashboard.exportData')}
            </Button>
            <Button>
              <Eye className="w-4 h-4 mr-2" />
              {t('dashboard.liveView')}
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{kpi.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                      <div className={`flex items-center text-sm ${kpi.trend === 'up' ? 'text-accent' : 'text-red-500'}`}>
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {kpi.change}
                      </div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="budget" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="budget">{t('dashboard.tabs.budget')}</TabsTrigger>
            <TabsTrigger value="participation">{t('dashboard.tabs.participation')}</TabsTrigger>
            <TabsTrigger value="projects">{t('dashboard.tabs.projects')}</TabsTrigger>
            <TabsTrigger value="transparency">{t('dashboard.tabs.transparency')}</TabsTrigger>
          </TabsList>

          {/* Budget Tab */}
          <TabsContent value="budget" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    {t('dashboard.budget.wardWiseTitle')}
                  </CardTitle>
                  <CardDescription>{t('dashboard.budget.wardWiseDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={budgetData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="ward" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="allocated" fill="#FF9933" name="Allocated" />
                      <Bar dataKey="spent" fill="#1A4A8D" name="Spent" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChartIcon className="w-5 h-5 mr-2" />
                    {t('dashboard.budget.categoryTitle')}
                  </CardTitle>
                  <CardDescription>{t('dashboard.budget.categoryDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categorySpending}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {categorySpending.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

             {/* Monthly Trends */}
             <Card>
               <CardHeader>
                 <CardTitle>{t('dashboard.budget.monthlyTrendsTitle')}</CardTitle>
                 <CardDescription>{t('dashboard.budget.monthlyTrendsDesc')}</CardDescription>
               </CardHeader>
               <CardContent>
                 <ResponsiveContainer width="100%" height={300}>
                   <LineChart data={monthlyProgress}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="month" />
                     <YAxis />
                     <Tooltip />
                     <Line type="monotone" dataKey="proposals" stroke="#FF9933" strokeWidth={2} name="Proposals" />
                     <Line type="monotone" dataKey="votes" stroke="#1A4A8D" strokeWidth={2} name="Votes" />
                     <Line type="monotone" dataKey="projects" stroke="#138808" strokeWidth={2} name="Projects" />
                   </LineChart>
                 </ResponsiveContainer>
               </CardContent>
             </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>{t('dashboard.budget.monthlyTrendsTitle')}</CardTitle>
                <CardDescription>{t('dashboard.budget.monthlyTrendsDesc')}</CardDescription>
              </CardHeader>
            </Card> */}
            {/* Participation Tab */}
          </TabsContent>

          <TabsContent value="participation" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Voter Participation */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.participation.votingTitle')}</CardTitle>
                  <CardDescription>{t('dashboard.participation.votingDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={participationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="ward" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="percentage" fill="#FF9933" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Participation Details */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.participation.detailsTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {participationData.map((ward) => (
                      <div key={ward.ward} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{ward.ward}</span>
                          <Badge
                            variant={ward.percentage > 60 ? 'default' : 'outline'}
                            className={ward.percentage > 60 ? 'bg-accent' : ''}
                          >
                            {ward.percentage}%
                          </Badge>
                        </div>
                        <Progress value={ward.percentage} className="h-2" />
                        <div className="text-sm text-gray-600">
                          {ward.voted.toLocaleString()} out of {ward.registered.toLocaleString()} registered voters
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Engagement Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>{t('dashboard.participation.engagementTitle')}</CardTitle>
                <CardDescription>{t('dashboard.participation.engagementDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="votes"
                      stackId="1"
                      stroke="#FF9933"
                      fill="#FF9933"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Project Status Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.projects.statusTitle')}</CardTitle>
                  <CardDescription>{t('dashboard.projects.statusDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={projectStatus}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="count"
                        label={({ name, count }) => `${name}: ${count}`}
                      >
                        {projectStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Project Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.projects.metricsTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">73</div>
                      <div className="text-sm text-gray-600">{t('dashboard.projects.totalProjects')}</div>
                    </div>

                    <div className="space-y-4">
                      {projectStatus.map((status) => (
                        <div key={status.status} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: status.color }}
                            ></div>
                            <span className="text-sm">{status.status}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{status.count}</span>
                            <Badge variant="outline">
                              {Math.round((status.count / 73) * 100)}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">95%</div>
                          <div className="text-xs text-gray-600">{t('dashboard.projects.onTime')}</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-accent">98%</div>
                          <div className="text-xs text-gray-600">{t('dashboard.projects.underBudget')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Transparency Tab */}
          <TabsContent value="transparency" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('dashboard.transparency.transactionsTitle')}</CardTitle>
                <CardDescription>{t('dashboard.transparency.transactionsDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">{t('dashboard.transparency.project')}</th>
                        <th className="text-left py-2">{t('dashboard.transparency.amount')}</th>
                        <th className="text-left py-2">{t('dashboard.transparency.vendor')}</th>
                        <th className="text-left py-2">{t('dashboard.transparency.date')}</th>
                        <th className="text-left py-2">{t('dashboard.transparency.status')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b">
                          <td className="py-3">{transaction.project}</td>
                          <td className="py-3">₹{(transaction.amount / 100000).toFixed(1)}L</td>
                          <td className="py-3">{transaction.vendor}</td>
                          <td className="py-3">{new Date(transaction.date).toLocaleDateString()}</td>
                          <td className="py-3">
                            <Badge
                              className={
                                transaction.status === 'Released'
                                  ? 'bg-accent text-white'
                                  : 'bg-orange-500 text-white'
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Budget Utilization */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                    {t('dashboard.transparency.utilizedTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">₹12.5 Cr</div>
                    <div className="text-sm text-gray-600">{t('dashboard.transparency.utilizedDesc')}</div>
                    <Progress value={64} className="h-2 mt-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    {t('dashboard.transparency.pendingTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">₹3.2 Cr</div>
                    <div className="text-sm text-gray-600">{t('dashboard.transparency.pendingDesc')}</div>
                    <Progress value={16} className="h-2 mt-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                    {t('dashboard.transparency.balanceTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">₹3.8 Cr</div>
                    <div className="text-sm text-gray-600">{t('dashboard.transparency.balanceDesc')}</div>
                    <Progress value={20} className="h-2 mt-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}






// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import { Badge } from './ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
// import { Progress } from './ui/progress';
// import { 
//   BarChart, 
//   Bar, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   Area,
//   AreaChart
// } from 'recharts';
// import { 
//   IndianRupee, 
//   TrendingUp, 
//   Users, 
//   FileText, 
//   Vote, 
//   CheckCircle,
//   Clock,
//   AlertTriangle,
//   BarChart3,
//   PieChart as PieChartIcon,
//   Download,
//   Eye
// } from 'lucide-react';
// import { Button } from './ui/button';
// import {  useLanguage } from './LanguageContext.tsx';

// export function DashboardPage() {

//   const { language, setLanguage, t } = useLanguage();
//   const budgetData = [
//     { ward: 'Ward 1', allocated: 50, spent: 32, projects: 8 },
//     { ward: 'Ward 2', allocated: 45, spent: 28, projects: 6 },
//     { ward: 'Ward 3', allocated: 60, spent: 41, projects: 12 },
//     { ward: 'Ward 4', allocated: 38, spent: 24, projects: 9 }
//   ];

//   const categorySpending = [
//     { name: 'Infrastructure', value: 45, color: '#FF9933' },
//     { name: 'Recreation', value: 20, color: '#1A4A8D' },
//     { name: 'Education', value: 15, color: '#138808' },
//     { name: 'Healthcare', value: 12, color: '#F59E0B' },
//     { name: 'Environment', value: 8, color: '#8B5CF6' }
//   ];

//   const monthlyProgress = [
//     { month: 'Jan', proposals: 23, votes: 1200, projects: 5 },
//     { month: 'Feb', proposals: 34, votes: 1890, projects: 8 },
//     { month: 'Mar', proposals: 28, votes: 1654, projects: 6 },
//     { month: 'Apr', proposals: 41, votes: 2100, projects: 10 },
//     { month: 'May', proposals: 37, votes: 1943, projects: 9 },
//     { month: 'Jun', proposals: 45, votes: 2340, projects: 12 }
//   ];

//   const participationData = [
//     { ward: 'Ward 1', registered: 3245, voted: 1876, percentage: 58 },
//     { ward: 'Ward 2', registered: 2890, voted: 1234, percentage: 43 },
//     { ward: 'Ward 3', registered: 4156, voted: 2789, percentage: 67 },
//     { ward: 'Ward 4', registered: 2654, voted: 1432, percentage: 54 }
//   ];

//   const projectStatus = [
//     { status: 'Completed', count: 35, color: '#138808' },
//     { status: 'Under Construction', count: 18, color: '#FF9933' },
//     { status: 'Tendering', count: 12, color: '#1A4A8D' },
//     { status: 'Planning', count: 8, color: '#F59E0B' }
//   ];

//   const kpiCards = [
//     {
//       title: 'Total Budget',
//       value: '₹19.5 Cr',
//       change: '+5.4%',
//       icon: IndianRupee,
//       trend: 'up'
//     },
//     {
//       title: 'Active Citizens',
//       value: '12,945',
//       change: '+12.3%',
//       icon: Users,
//       trend: 'up'
//     },
//     {
//       title: 'Proposals This Month',
//       value: '45',
//       change: '+8.1%',
//       icon: FileText,
//       trend: 'up'
//     },
//     {
//       title: 'Voting Participation',
//       value: '56%',
//       change: '+3.2%',
//       icon: Vote,
//       trend: 'up'
//     }
//   ];

//   const recentTransactions = [
//     {
//       id: 1,
//       project: 'Smart LED Street Lighting',
//       amount: 850000,
//       vendor: 'Green Energy Solutions',
//       date: '2024-02-22',
//       status: 'Released'
//     },
//     {
//       id: 2,
//       project: 'Community Park Development',
//       amount: 1200000,
//       vendor: 'Urban Landscapes Ltd',
//       date: '2024-02-20',
//       status: 'Released'
//     },
//     {
//       id: 3,
//       project: 'Digital Library Setup',
//       amount: 650000,
//       vendor: 'Tech Solutions Hub',
//       date: '2024-02-18',
//       status: 'Pending'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('dashboard.title')}</h1>
//             <p className="text-lg text-gray-600">{t('dashboard.subtitle')}</p>
//           </div>
//           <div className="flex space-x-2 mt-4 sm:mt-0">
//             <Button variant="outline">
//               <Download className="w-4 h-4 mr-2" />
//               {t('dashboard.exportData')}
//             </Button>
//             <Button>
//               <Eye className="w-4 h-4 mr-2" />
//               {t('dashboard.liveView')}
//             </Button>
//           </div>
//         </div>

//         {/* KPI Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {kpiCards.map((kpi, index) => {
//             const Icon = kpi.icon;
//             return (
//               <Card key={index}>
//                 <CardContent className="pt-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm text-gray-600">{kpi.title}</p>
//                       <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
//                       <div className={`flex items-center text-sm ${
//                         kpi.trend === 'up' ? 'text-accent' : 'text-red-500'
//                       }`}>
//                         <TrendingUp className="w-3 h-3 mr-1" />
//                         {kpi.change}
//                       </div>
//                     </div>
//                     <div className="p-3 bg-primary/10 rounded-lg">
//                       <Icon className="w-6 h-6 text-primary" />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         <Tabs defaultValue="budget" className="w-full">
//           <TabsList className="grid w-full grid-cols-4">
//             <TabsTrigger value="budget">Budget Analysis</TabsTrigger>
//             <TabsTrigger value="participation">Citizen Participation</TabsTrigger>
//             <TabsTrigger value="projects">Project Status</TabsTrigger>
//             <TabsTrigger value="transparency">Financial Transparency</TabsTrigger>
//           </TabsList>

//           <TabsContent value="budget" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Ward-wise Budget */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <BarChart3 className="w-5 h-5 mr-2" />
//                     Ward-wise Budget Allocation
//                   </CardTitle>
//                   <CardDescription>Budget allocated vs spent across wards (in Lakhs)</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={budgetData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="ward" />
//                       <YAxis />
//                       <Tooltip />
//                       <Bar dataKey="allocated" fill="#FF9933" name="Allocated" />
//                       <Bar dataKey="spent" fill="#1A4A8D" name="Spent" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>

//               {/* Category Spending */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <PieChartIcon className="w-5 h-5 mr-2" />
//                     Spending by Category
//                   </CardTitle>
//                   <CardDescription>Budget distribution across different sectors</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <PieChart>
//                       <Pie
//                         data={categorySpending}
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={80}
//                         dataKey="value"
//                         label={({ name, value }) => `${name}: ${value}%`}
//                       >
//                         {categorySpending.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Monthly Trends */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Monthly Civic Activity Trends</CardTitle>
//                 <CardDescription>Track proposals, votes, and project approvals over time</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={monthlyProgress}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="proposals" stroke="#FF9933" strokeWidth={2} name="Proposals" />
//                     <Line type="monotone" dataKey="votes" stroke="#1A4A8D" strokeWidth={2} name="Votes" />
//                     <Line type="monotone" dataKey="projects" stroke="#138808" strokeWidth={2} name="Projects" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="participation" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Voter Participation */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Voting Participation by Ward</CardTitle>
//                   <CardDescription>Percentage of registered citizens who voted</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={participationData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="ward" />
//                       <YAxis />
//                       <Tooltip />
//                       <Bar dataKey="percentage" fill="#FF9933" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>

//               {/* Participation Details */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Detailed Participation Stats</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {participationData.map((ward) => (
//                       <div key={ward.ward} className="space-y-2">
//                         <div className="flex justify-between items-center">
//                           <span className="font-medium">{ward.ward}</span>
//                           <Badge variant={ward.percentage > 60 ? 'default' : 'outline'} className={ward.percentage > 60 ? 'bg-accent' : ''}>
//                             {ward.percentage}%
//                           </Badge>
//                         </div>
//                         <Progress value={ward.percentage} className="h-2" />
//                         <div className="text-sm text-gray-600">
//                           {ward.voted.toLocaleString()} out of {ward.registered.toLocaleString()} registered voters
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Engagement Metrics */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Citizen Engagement Over Time</CardTitle>
//                 <CardDescription>Number of active participants each month</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <AreaChart data={monthlyProgress}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Area type="monotone" dataKey="votes" stackId="1" stroke="#FF9933" fill="#FF9933" fillOpacity={0.3} />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="projects" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Project Status Distribution */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Project Status Overview</CardTitle>
//                   <CardDescription>Current status of all projects</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <PieChart>
//                       <Pie
//                         data={projectStatus}
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={80}
//                         dataKey="count"
//                         label={({ name, count }) => `${name}: ${count}`}
//                       >
//                         {projectStatus.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>

//               {/* Project Statistics */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Project Performance Metrics</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-6">
//                     <div className="text-center">
//                       <div className="text-3xl font-bold text-accent">73</div>
//                       <div className="text-sm text-gray-600">Total Projects</div>
//                     </div>
                    
//                     <div className="space-y-4">
//                       {projectStatus.map((status) => (
//                         <div key={status.status} className="flex items-center justify-between">
//                           <div className="flex items-center space-x-2">
//                             <div 
//                               className="w-3 h-3 rounded-full" 
//                               style={{ backgroundColor: status.color }}
//                             ></div>
//                             <span className="text-sm">{status.status}</span>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <span className="font-medium">{status.count}</span>
//                             <Badge variant="outline">
//                               {Math.round((status.count / 73) * 100)}%
//                             </Badge>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="pt-4 border-t">
//                       <div className="grid grid-cols-2 gap-4 text-center">
//                         <div>
//                           <div className="text-lg font-bold text-primary">95%</div>
//                           <div className="text-xs text-gray-600">On Time</div>
//                         </div>
//                         <div>
//                           <div className="text-lg font-bold text-accent">98%</div>
//                           <div className="text-xs text-gray-600">Under Budget</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           <TabsContent value="transparency" className="space-y-6">
//             {/* Financial Transparency */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Financial Transactions</CardTitle>
//                 <CardDescription>Transparent view of all budget releases and payments</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b">
//                         <th className="text-left py-2">Project</th>
//                         <th className="text-left py-2">Amount</th>
//                         <th className="text-left py-2">Vendor</th>
//                         <th className="text-left py-2">Date</th>
//                         <th className="text-left py-2">Status</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {recentTransactions.map((transaction) => (
//                         <tr key={transaction.id} className="border-b">
//                           <td className="py-3">{transaction.project}</td>
//                           <td className="py-3">₹{(transaction.amount / 100000).toFixed(1)}L</td>
//                           <td className="py-3">{transaction.vendor}</td>
//                           <td className="py-3">{new Date(transaction.date).toLocaleDateString()}</td>
//                           <td className="py-3">
//                             <Badge 
//                               className={transaction.status === 'Released' ? 'bg-accent text-white' : 'bg-orange-500 text-white'}
//                             >
//                               {transaction.status}
//                             </Badge>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Budget Utilization */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <CheckCircle className="w-5 h-5 mr-2 text-accent" />
//                     Budget Utilized
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-accent">₹12.5 Cr</div>
//                     <div className="text-sm text-gray-600">64% of total budget</div>
//                     <Progress value={64} className="h-2 mt-2" />
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <Clock className="w-5 h-5 mr-2 text-primary" />
//                     Pending Releases
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-primary">₹3.2 Cr</div>
//                     <div className="text-sm text-gray-600">16% of total budget</div>
//                     <Progress value={16} className="h-2 mt-2" />
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
//                     Available Balance
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-orange-500">₹3.8 Cr</div>
//                     <div className="text-sm text-gray-600">20% of total budget</div>
//                     <Progress value={20} className="h-2 mt-2" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }
