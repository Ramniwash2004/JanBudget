import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  Users, 
  Search,
  Clock,
  Award,
  ChevronRight,
  User,
  Crown,
  Shield,
  Briefcase,
  Landmark
} from 'lucide-react';

interface Official {
  id: number;
  name: string;
  designation: string;
  department?: string;
  phone: string;
  email: string;
  office: string;
  officeHours: string;
  zone?: string;
  reportingTo?: string;
  image: string;
  level: 'political' | 'administrative' | 'zonal' | 'department' | 'district';
}

interface Councillor {
  wardNo: number;
  wardName: string;
  name: string;
  party: string;
  mobile: string;
  zone: number;
}

export function InfoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<number>(0);

  // Leadership & Officials
  const officials: Official[] = [
    {
      id: 1,
      name: "Smt. Meenal Choubey",
      designation: "Mayor",
      department: "Leader of the Corporation",
      phone: "+91-771-2535701",
      email: "mayor.raipur@cg.gov.in",
      office: "Mayor Office, Nagar Nigam Bhawan, Vidhan Sabha Road, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
      image: "/images/mayor.png",
      level: 'political'
    },
    {
      id: 2,
      name: "Shri Suryakant Rathore",
      designation: "Chairman of the House",
      department: "Speaker / Presiding Officer",
      phone: "+91-771-2535705",
      email: "speaker.raipur@cg.gov.in",
      office: "Speaker Office, Nagar Nigam Bhawan, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
      image: "/images/Speaker.jpg",
      level: 'political'
    },
    {
      id: 3,
      name: "Shri Aakash Tewary",
      designation: "Leader of the Opposition",
      department: "Opposition Leader",
      phone: "+91-771-2535708",
      email: "lop.raipur@cg.gov.in",
      office: "Opposition Office, Nagar Nigam Bhawan, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
      image: "/images/LOP.png",
      level: 'political'
    },
    {
      id: 4,
      name: "Smt. Jaishree Nayak",
      designation: "Deputy Leader of Opposition",
      department: "Deputy LoP",
      phone: "+91-771-2535709",
      email: "deputy.lop.raipur@cg.gov.in",
      office: "Opposition Office, Nagar Nigam Bhawan, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
      image: "/images/default.png",
      level: 'political'
    },

    // Administrative Leadership
    {
      id: 5,
      name: "Shri Vishwadeep (IAS)",
      designation: "Municipal Commissioner",
      department: "Administrative Head & Executive Officer",
      phone: "+91-771-2535702",
      email: "commissioner.raipur@cg.gov.in",
      office: "Commissioner Office, Nagar Nigam Bhawan, Vidhan Sabha Road, Raipur",
      officeHours: "10:00 AM - 6:00 PM (Mon-Sat)",
      image: "/images/MunicipalCommisioner.png",
      level: 'administrative'
    },

    // District Administration
    {
      id: 6,
      name: "Dr. Gaurav Kumar Singh (IAS)",
      designation: "Collector & District Magistrate",
      department: "District Administration, Raipur",
      phone: "+91-771-2221040",
      email: "collector.raipur@cg.gov.in",
      office: "Collectorate, Civil Lines, Raipur",
      officeHours: "10:00 AM - 6:00 PM (Mon-Sat)",
      image: "/images/DM.png",
      level: 'district'
    },

    // Additional Commissioners
    {
      id: 7,
      name: "Dr. Rajesh Kumar",
      designation: "Additional Commissioner",
      department: "General Administration",
      phone: "+91-771-2535710",
      email: "addl.comm.admin.raipur@cg.gov.in",
      office: "Nagar Nigam Bhawan, 2nd Floor, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
      reportingTo: "Municipal Commissioner",
      image: "/images/default.png",
      level: 'administrative'
    },
    {
      id: 8,
      name: "Shri Ramesh Patel",
      designation: "Additional Commissioner",
      department: "Finance",
      phone: "+91-771-2535715",
      email: "addl.comm.finance.raipur@cg.gov.in",
      office: "Finance Wing, Nagar Nigam Bhawan, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
      reportingTo: "Municipal Commissioner",
      image: "/images/default.png",
      level: 'administrative'
    },

    // Zonal Commissioners
    {
      id: 9,
      name: "Shri Anil Verma",
      designation: "Zonal Commissioner",
      department: "Zone 1",
      zone: "Zone 1",
      phone: "+91-771-2535801",
      email: "zone1.comm.raipur@cg.gov.in",
      office: "Zone 1 Office, Nagar Nigam, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
      reportingTo: "Municipal Commissioner",
      image: "/images/default.png",
      level: 'zonal'
    },
    {
      id: 10,
      name: "Smt. Geeta Deshmukh",
      designation: "Zonal Commissioner",
      department: "Zone 2",
      zone: "Zone 2",
      phone: "+91-771-2535802",
      email: "zone2.comm.raipur@cg.gov.in",
      office: "Zone 2 Office, Nagar Nigam, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
      reportingTo: "Municipal Commissioner",
      image: "/images/default.png",
      level: 'zonal'
    },
    {
      id: 11,
      name: "Shri Mahesh Gupta",
      designation: "Zonal Commissioner",
      department: "Zone 3",
      zone: "Zone 3",
      phone: "+91-771-2535803",
      email: "zone3.comm.raipur@cg.gov.in",
      office: "Zone 3 Office, Nagar Nigam, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
      reportingTo: "Municipal Commissioner",
      image: "/images/default.png",
      level: 'zonal'
    },
    {
      id: 12,
      name: "Shri Ravi Tiwari",
      designation: "Zonal Commissioner",
      department: "Zone 4",
      zone: "Zone 4",
      phone: "+91-771-2535804",
      email: "zone4.comm.raipur@cg.gov.in",
      office: "Zone 4 Office, Nagar Nigam, Raipur",
      officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
      reportingTo: "Municipal Commissioner",
      image: "/images/default.png",
      level: 'zonal'
    },

    // Department Heads
    {
      id: 13,
      name: "Er. Suresh Yadav",
      designation: "Superintending Engineer",
      department: "Public Works",
      phone: "+91-771-2535730",
      email: "se.pwd.raipur@cg.gov.in",
      office: "PWD Wing, Nagar Nigam, Raipur",
      officeHours: "10:00 AM - 6:00 PM (Mon-Sat)",
      reportingTo: "Municipal Commissioner",
      image: "/images/default.png",
      level: 'department'
    },
    {
      id: 14,
      name: "Dr. Prabha Verma",
      designation: "Chief Health Officer",
      department: "Health Department",
      phone: "+91-771-2535760",
      email: "cho.raipur@cg.gov.in",
      office: "Health Department, Nagar Nigam, Raipur",
      officeHours: "9:00 AM - 5:00 PM (Mon-Sat)",
      reportingTo: "Additional Commissioner (General Administration)",
      image: "/images/default.png",
      level: 'department'
    }
  ];

  // Ward Councillors by Zone
  const councillors: Councillor[] = [
    // Zone 1
    { wardNo: 3, wardName: "संत कबीर दास वार्ड", name: "श्री नारद कौशल", party: "भाजपा", mobile: "—", zone: 1 },
    { wardNo: 4, wardName: "यतियतन लाल वार्ड", name: "श्रीमती टेसूनंद किशोर साहू", party: "भाजपा", mobile: "98271-30888", zone: 1 },
    { wardNo: 5, wardName: "बंजारी माता मंदिर वार्ड", name: "श्री नागभूषण राव यादव", party: "कांग्रेस", mobile: "98261-24300", zone: 1 },
    { wardNo: 15, wardName: "ने. कन्हैयालाल बाजारी वार्ड", name: "श्री विनोद अग्रवाल", party: "भाजपा", mobile: "84352-50000", zone: 1 },
    { wardNo: 16, wardName: "वीर शिवाजी वार्ड", name: "श्रीमती गोदावरी गज्जू साहू", party: "भाजपा", mobile: "99265-35355", zone: 1 },
    
    // Zone 2
    { wardNo: 8, wardName: "महात्मा गांधी वार्ड", name: "श्री संजय शर्मा", party: "कांग्रेस", mobile: "98765-43210", zone: 2 },
    { wardNo: 12, wardName: "लाल बहादुर शास्त्री वार्ड", name: "श्रीमती सरिता देवी", party: "भाजपा", mobile: "99876-54321", zone: 2 },
    { wardNo: 18, wardName: "इंदिरा गांधी वार्ड", name: "श्री राकेश कुमार", party: "आप", mobile: "98888-77777", zone: 2 },
    { wardNo: 22, wardName: "राजीव गांधी वार्ड", name: "श्री अमित पटेल", party: "कांग्रेस", mobile: "97777-66666", zone: 2 },
    
    // Zone 3
    { wardNo: 25, wardName: "सुभाष चंद्र बोस वार्ड", name: "श्रीमती मीना गुप्ता", party: "भाजपा", mobile: "96666-55555", zone: 3 },
    { wardNo: 30, wardName: "भगत सिंह वार्ड", name: "श्री विजय सिंह", party: "कांग्रेस", mobile: "95555-44444", zone: 3 },
    { wardNo: 35, wardName: "चंद्रशेखर आजाद वार्ड", name: "श्री राजेश यादव", party: "भाजपा", mobile: "94444-33333", zone: 3 },
    { wardNo: 40, wardName: "रानी लक्ष्मीबाई वार्ड", name: "श्रीमती अनिता देवी", party: "आप", mobile: "93333-22222", zone: 3 },
    
    // Zone 4
    { wardNo: 42, wardName: "डॉ. राजेंद्र प्रसाद वार्ड", name: "श्री मनोज तिवारी", party: "कांग्रेस", mobile: "92222-11111", zone: 4 },
    { wardNo: 48, wardName: "सरदार पटेल वार्ड", name: "श्री सुनील कुमार", party: "भाजपा", mobile: "91111-00000", zone: 4 },
    { wardNo: 55, wardName: "डॉ. अम्बेडकर वार्ड", name: "श्रीमती कमला देवी", party: "बसपा", mobile: "90000-99999", zone: 4 },
    { wardNo: 60, wardName: "जवाहर लाल नेहरू वार्ड", name: "श्री प्रकाश जोशी", party: "कांग्रेस", mobile: "89999-88888", zone: 4 }
  ];

  const filteredOfficials = officials.filter(official =>
    official.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    official.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    official.department?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getZoneCouncillors = (zoneNo: number) => {
    return councillors.filter(c => c.zone === zoneNo);
  };

  const politicalLeaders = officials.filter(o => o.level === 'political');
  const administrativeLeaders = officials.filter(o => o.level === 'administrative');
  const districtAdmin = officials.filter(o => o.level === 'district');
  const zonalOfficers = officials.filter(o => o.level === 'zonal');
  const departmentHeads = officials.filter(o => o.level === 'department');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Building2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
            नगर निगम रायपुर
          </h1>
          <p className="text-2xl text-gray-700 mb-2">Nagar Nigam Raipur</p>
          <p className="text-lg text-gray-500">Your Gateway to Municipal Services</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <Input
              placeholder="Search officials by name, designation, or department..."
              className="pl-14 h-14 text-lg rounded-full shadow-lg border-2 border-indigo-100 focus:border-indigo-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="leadership" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 max-w-3xl mx-auto h-14">
            <TabsTrigger value="leadership" className="text-base">
              Leadership
            </TabsTrigger>
            <TabsTrigger value="departments" className="text-base">
              Departments
            </TabsTrigger>
            <TabsTrigger value="wards" className="text-base">
              Ward Councillors
            </TabsTrigger>
          </TabsList>

          {/* Leadership Tab */}
          <TabsContent value="leadership" className="space-y-8 mt-8">
            {/* Political Leadership */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Political Leadership</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {politicalLeaders.map((official) => (
                  <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
                    <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={official.image}
                          alt={official.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{official.name}</h3>
                          <p className="text-purple-600 font-semibold mb-1">{official.designation}</p>
                          <p className="text-sm text-gray-600">{official.department}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <a
                          href={`tel:${official.phone}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-gray-900">{official.phone}</span>
                        </a>
                        <a
                          href={`mailto:${official.email}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-900 break-all">{official.email}</span>
                        </a>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                          <Clock className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{official.officeHours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Administrative Leadership */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Administrative Leadership</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {administrativeLeaders.map((official) => (
                  <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center mb-4">
                        <img
                          src={official.image}
                          alt={official.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
                        />
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{official.name}</h3>
                        <p className="text-blue-600 font-semibold mb-1">{official.designation}</p>
                        <p className="text-sm text-gray-600">{official.department}</p>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={`tel:${official.phone}`}
                          className="flex items-center justify-center gap-2 p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-900">{official.phone}</span>
                        </a>
                        <a
                          href={`mailto:${official.email}`}
                          className="flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span className="text-xs text-gray-900">Email</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* District Administration */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">District Administration</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {districtAdmin.map((official) => (
                  <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-200">
                    <div className="h-3 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={official.image}
                          alt={official.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{official.name}</h3>
                          <p className="text-amber-600 font-semibold mb-1">{official.designation}</p>
                          <p className="text-sm text-gray-600">{official.department}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <a
                          href={`tel:${official.phone}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-gray-900">{official.phone}</span>
                        </a>
                        <a
                          href={`mailto:${official.email}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-900 break-all">{official.email}</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Departments Tab */}
          <TabsContent value="departments" className="space-y-8 mt-8">
            {/* Zonal Officers */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Zonal Commissioners</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {zonalOfficers.map((official) => (
                  <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-200">
                    <div className="h-3 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                    <CardContent className="p-5">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={official.image}
                          alt={official.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
                        />
                        <Badge className="mb-2 bg-teal-500">{official.department}</Badge>
                        <h3 className="text-base font-bold text-gray-900 mb-1">{official.name}</h3>
                        <p className="text-xs text-gray-600 mb-3">{official.designation}</p>
                        <a
                          href={`tel:${official.phone}`}
                          className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-green-600" />
                          <span className="text-xs font-medium">Call</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Department Heads */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Department Heads</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departmentHeads.map((official) => (
                  <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200">
                    <div className="h-3 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center mb-4">
                        <img
                          src={official.image}
                          alt={official.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
                        />
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{official.name}</h3>
                        <p className="text-emerald-600 font-semibold mb-1">{official.designation}</p>
                        <p className="text-sm text-gray-600">{official.department}</p>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={`tel:${official.phone}`}
                          className="flex items-center justify-center gap-2 p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-900">{official.phone}</span>
                        </a>
                        <a
                          href={`mailto:${official.email}`}
                          className="flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span className="text-xs text-gray-900">Email</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Wards Tab */}
          <TabsContent value="wards" className="space-y-6 mt-8">
            {/* Zone Selection */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Button
                variant={selectedZone === 0 ? 'default' : 'outline'}
                onClick={() => setSelectedZone(0)}
                className="h-24 text-lg font-semibold"
              >
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-1" />
                  <p>All Zones</p>
                  <p className="text-xs opacity-75">{councillors.length} Wards</p>
                </div>
              </Button>
              {[1, 2, 3, 4].map(zone => (
                <Button
                  key={zone}
                  variant={selectedZone === zone ? 'default' : 'outline'}
                  onClick={() => setSelectedZone(zone)}
                  className="h-24 text-lg font-semibold"
                >
                  <div className="text-center">
                    <MapPin className="w-6 h-6 mx-auto mb-1" />
                    <p>Zone {zone}</p>
                    <p className="text-xs opacity-75">{getZoneCouncillors(zone).length} Wards</p>
                  </div>
                </Button>
              ))}
            </div>

            {/* Zonal Commissioner Info */}
            {selectedZone > 0 && (
              <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Zonal Commissioner - Zone {selectedZone}</p>
                      {zonalOfficers
                        .filter(o => o.zone === `Zone ${selectedZone}`)
                        .map(official => (
                          <div key={official.id}>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{official.name}</h3>
                            <div className="flex flex-wrap gap-4">
                              <a href={`tel:${official.phone}`} className="flex items-center gap-2 text-green-600">
                                <Phone className="w-4 h-4" />
                                <span className="font-medium">{official.phone}</span>
                              </a>
                              <a href={`mailto:${official.email}`} className="flex items-center gap-2 text-blue-600">
                                <Mail className="w-4 h-4" />
                                <span>Email</span>
                              </a>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Ward Councillors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(selectedZone === 0 ? councillors : getZoneCouncillors(selectedZone)).map((councillor) => (
                <Card key={councillor.wardNo} className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-primary font-bold text-lg">{councillor.wardNo}</span>
                        </div>
                        <Badge className="text-xs" variant="outline">Zone {councillor.zone}</Badge>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-lg">{councillor.wardName}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <User className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">{councillor.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            className={
                              councillor.party === 'भाजपा' ? 'bg-orange-500 text-white' :
                              councillor.party === 'कांग्रेस' ? 'bg-blue-500 text-white' :
                              councillor.party === 'आप' ? 'bg-teal-500 text-white' :
                              councillor.party === 'बसपा' ? 'bg-blue-800 text-white' :
                              'bg-gray-500 text-white'
                            }
                          >
                            {councillor.party}
                          </Badge>
                          {councillor.mobile !== '—' && (
                            <a
                              href={`tel:+91${councillor.mobile.replace('-', '')}`}
                              className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-full transition-colors text-sm font-medium"
                            >
                              <Phone className="w-3 h-3" />
                              {councillor.mobile}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Phone className="w-6 h-6" />
                Emergency Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="tel:101" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-red-50 transition-colors">
                <span className="font-semibold text-gray-900">Fire Brigade</span>
                <span className="text-red-600 font-bold">101</span>
              </a>
              <a href="tel:108" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-red-50 transition-colors">
                <span className="font-semibold text-gray-900">Ambulance</span>
                <span className="text-red-600 font-bold">108</span>
              </a>
              <a href="tel:100" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-red-50 transition-colors">
                <span className="font-semibold text-gray-900">Police</span>
                <span className="text-red-600 font-bold">100</span>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Building2 className="w-6 h-6" />
                Nagar Nigam Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-white rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Address</p>
                <p className="text-sm font-medium text-gray-900">Vidhan Sabha Road, Raipur</p>
                <p className="text-sm text-gray-600">Chhattisgarh - 492001</p>
              </div>
              <a href="tel:+917712535700" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Main Office</p>
                  <p className="font-semibold text-gray-900">+91-771-2535700</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Phone className="w-6 h-6" />
                Helpline Numbers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="tel:18002336565" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-green-50 transition-colors">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Toll Free</p>
                  <p className="font-semibold text-gray-900">1800-233-6565</p>
                </div>
              </a>
              <a href="tel:+917712535701" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-green-50 transition-colors">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Mayor Office</p>
                  <p className="font-semibold text-gray-900">+91-771-2535701</p>
                </div>
              </a>
              <a href="tel:+917712535702" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-green-50 transition-colors">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Commissioner</p>
                  <p className="font-semibold text-gray-900">+91-771-2535702</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Info Footer */}
        <Card className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-indigo-600" />
              Organizational Structure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Political Leadership</p>
                  <p className="text-gray-600">Mayor, Speaker, Leader of Opposition - Elected representatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Administrative Head</p>
                  <p className="text-gray-600">Municipal Commissioner (IAS) - Chief Executive Officer</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">District Coordination</p>
                  <p className="text-gray-600">Collector & DM - District-level administration </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Zonal Administration</p>
                  <p className="text-gray-600">total 10 zones, we will add later</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}