export const projects = [
  {
    id: 1,
    title: "Smart LED Street Lighting Phase 1",
    description: "Installation of energy-efficient LED streetlights along Market Road",
    ward: "Ward 1",
    location: "Market Road, Central Area",
    budget: 960000,
    spent: 576000,
    progress: 60,
    status: "Under Construction",
    startDate: "2024-01-15",
    expectedCompletion: "2024-04-15",
    contractor: "SafeCity Fire Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-15" },
      { phase: "Fund Release", status: "completed", date: "2024-01-22" },
      { phase: "Site Selection", status: "completed", date: "2024-02-01" },
      { phase: "Installation", status: "ongoing", date: "2024-02-20" }
    ],
    images: ["https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&h=300&fit=crop"],
    reviews: []
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
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Amit Singh", rating: 5, comment: "Beautiful park! My children love playing here.", date: "2024-02-05", likes: 25 }
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
      { phase: "Construction", status: "pending", date: "2024-04-01" }
    ],
    images: ["https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"],
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
      { phase: "Installation & Setup", status: "ongoing", date: "2024-02-10" }
    ],
    images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Dr. Meera Patel", rating: 4, comment: "Great initiative! The setup looks modern.", date: "2024-02-15", likes: 15 }
    ]
  },
  {
    id: 5,
    title: "Bus Stop Shelter Construction",
    description: "Building covered waiting areas at major bus stops",
    ward: "Ward 5",
    location: "Station Road Junction",
    budget: 425000,
    spent: 425000,
    progress: 100,
    status: "Completed",
    startDate: "2023-12-01",
    expectedCompletion: "2024-01-15",
    contractor: "Civic Structures Co.",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-01" },
      { phase: "Fund Release", status: "completed", date: "2023-12-08" },
      { phase: "Construction", status: "completed", date: "2024-01-10" },
      { phase: "Final Inspection", status: "completed", date: "2024-01-15" }
    ],
    images: ["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Sunita Yadav", rating: 5, comment: "Very helpful during rainy season. Well built.", date: "2024-01-20", likes: 18 }
    ]
  },
  {
    id: 6,
    title: "Sewage Treatment Plant Upgrade",
    description: "Modernization of existing sewage treatment facility",
    ward: "Ward 6",
    location: "Eastern Outskirts",
    budget: 4500000,
    spent: 1800000,
    progress: 40,
    status: "Under Construction",
    startDate: "2023-10-01",
    expectedCompletion: "2024-06-30",
    contractor: "Aqua Tech Engineers",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-01" },
      { phase: "Fund Release", status: "completed", date: "2023-10-15" },
      { phase: "Site Preparation", status: "completed", date: "2023-11-01" },
      { phase: "Equipment Installation", status: "ongoing", date: "2023-12-01" }
    ],
    images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 7,
    title: "Public Toilet Block",
    description: "Construction of modern public toilet facility",
    ward: "Ward 7",
    location: "Main Market Area",
    budget: 380000,
    spent: 342000,
    progress: 90,
    status: "Under Construction",
    startDate: "2024-01-05",
    expectedCompletion: "2024-02-20",
    contractor: "Sanitation Works Ltd",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-05" },
      { phase: "Fund Release", status: "completed", date: "2024-01-10" },
      { phase: "Construction", status: "ongoing", date: "2024-01-20" },
      { phase: "Plumbing & Finishing", status: "ongoing", date: "2024-02-10" }
    ],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Mohammed Iqbal", rating: 4, comment: "Much needed facility. Good quality construction.", date: "2024-02-12", likes: 9 }
    ]
  },
  {
    id: 8,
    title: "Road Resurfacing Project",
    description: "Repaving and widening of Gandhi Marg",
    ward: "Ward 8",
    location: "Gandhi Marg, 2.5 km stretch",
    budget: 3200000,
    spent: 960000,
    progress: 30,
    status: "Under Construction",
    startDate: "2024-02-01",
    expectedCompletion: "2024-05-31",
    contractor: "Highway Builders Inc",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-20" },
      { phase: "Fund Release", status: "completed", date: "2024-02-01" },
      { phase: "Site Preparation", status: "completed", date: "2024-02-10" },
      { phase: "Resurfacing Work", status: "ongoing", date: "2024-02-20" }
    ],
    images: ["https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 9,
    title: "Rainwater Harvesting System",
    description: "Installation of community rainwater collection units",
    ward: "Ward 9",
    location: "Multiple locations across ward",
    budget: 720000,
    spent: 144000,
    progress: 20,
    status: "Tendering",
    startDate: "2024-03-15",
    expectedCompletion: "2024-06-15",
    contractor: "TBD",
    timeline: [
      { phase: "Tender Process", status: "ongoing", date: "2024-03-01" },
      { phase: "Fund Release", status: "pending", date: "2024-03-15" },
      { phase: "Site Survey", status: "pending", date: "2024-04-01" }
    ],
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 10,
    title: "Children's Playground Equipment",
    description: "Installing swings, slides and climbing structures",
    ward: "Ward 10",
    location: "Nehru Park",
    budget: 285000,
    spent: 285000,
    progress: 100,
    status: "Completed",
    startDate: "2023-11-15",
    expectedCompletion: "2023-12-31",
    contractor: "PlayScape Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-15" },
      { phase: "Fund Release", status: "completed", date: "2023-11-20" },
      { phase: "Equipment Delivery", status: "completed", date: "2023-12-05" },
      { phase: "Installation", status: "completed", date: "2023-12-31" }
    ],
    images: ["https://images.unsplash.com/photo-1587818541471-09e8f6d0e3b9?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Kavita Deshmukh", rating: 5, comment: "Kids absolutely love it! Safe and colorful equipment.", date: "2024-01-08", likes: 22 }
    ]
  },
  {
    id: 11,
    title: "Smart Waste Management System",
    description: "IoT-enabled waste bins with monitoring",
    ward: "Ward 11",
    location: "Commercial District",
    budget: 920000,
    spent: 644000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-12-10",
    expectedCompletion: "2024-03-10",
    contractor: "CleanTech Innovations",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-10" },
      { phase: "Fund Release", status: "completed", date: "2023-12-18" },
      { phase: "Equipment Procurement", status: "completed", date: "2024-01-15" },
      { phase: "Installation & Integration", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Vikram Malhotra", rating: 4, comment: "Good initiative for waste management. Bins look modern.", date: "2024-02-18", likes: 11 }
    ]
  },
  {
    id: 12,
    title: "Solar Panel Installation",
    description: "Rooftop solar panels on municipal buildings",
    ward: "Ward 12",
    location: "Ward Office & Community Hall",
    budget: 1550000,
    spent: 1240000,
    progress: 80,
    status: "Under Construction",
    startDate: "2023-11-20",
    expectedCompletion: "2024-02-28",
    contractor: "SunPower Systems",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-20" },
      { phase: "Fund Release", status: "completed", date: "2023-11-28" },
      { phase: "Site Assessment", status: "completed", date: "2023-12-10" },
      { phase: "Installation", status: "ongoing", date: "2024-01-05" }
    ],
    images: ["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 13,
    title: "Footpath Construction",
    description: "Pedestrian walkway with tactile paving for visually impaired",
    ward: "Ward 13",
    location: "MG Road, 1.8 km",
    budget: 890000,
    spent: 801000,
    progress: 90,
    status: "Under Construction",
    startDate: "2023-12-05",
    expectedCompletion: "2024-02-15",
    contractor: "Urban Infra Developers",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-05" },
      { phase: "Fund Release", status: "completed", date: "2023-12-12" },
      { phase: "Site Clearing", status: "completed", date: "2023-12-20" },
      { phase: "Construction", status: "ongoing", date: "2024-01-10" }
    ],
    images: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Neha Gupta", rating: 5, comment: "Finally safe walking space! Great quality work.", date: "2024-02-10", likes: 16 }
    ]
  },
  {
    id: 14,
    title: "Water Supply Pipeline Replacement",
    description: "Replacing old corroded water pipes with new HDPE pipes",
    ward: "Ward 14",
    location: "Residential Colony Area",
    budget: 2750000,
    spent: 550000,
    progress: 20,
    status: "Tendering",
    startDate: "2024-03-01",
    expectedCompletion: "2024-07-31",
    contractor: "TBD",
    timeline: [
      { phase: "Tender Process", status: "ongoing", date: "2024-02-20" },
      { phase: "Fund Release", status: "pending", date: "2024-03-01" },
      { phase: "Pipeline Procurement", status: "pending", date: "2024-03-20" }
    ],
    images: ["https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 15,
    title: "Sports Complex Renovation",
    description: "Upgrading basketball court and adding new equipment",
    ward: "Ward 15",
    location: "Youth Sports Ground",
    budget: 1120000,
    spent: 1120000,
    progress: 100,
    status: "Completed",
    startDate: "2023-10-01",
    expectedCompletion: "2024-01-15",
    contractor: "SportBuild Contractors",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-01" },
      { phase: "Fund Release", status: "completed", date: "2023-10-10" },
      { phase: "Demolition & Prep", status: "completed", date: "2023-10-25" },
      { phase: "Construction", status: "completed", date: "2023-12-20" },
      { phase: "Final Inspection", status: "completed", date: "2024-01-15" }
    ],
    images: ["https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Arjun Reddy", rating: 5, comment: "Amazing transformation! Youth are very happy.", date: "2024-01-22", likes: 31 }
    ]
  },
  {
    id: 16,
    title: "CCTV Surveillance Network",
    description: "Installing security cameras at key locations",
    ward: "Ward 16",
    location: "Multiple high-traffic areas",
    budget: 1850000,
    spent: 1110000,
    progress: 60,
    status: "Under Construction",
    startDate: "2024-01-10",
    expectedCompletion: "2024-04-10",
    contractor: "SecureCity Technologies",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-10" },
      { phase: "Fund Release", status: "completed", date: "2024-01-18" },
      { phase: "Equipment Procurement", status: "completed", date: "2024-02-01" },
      { phase: "Installation", status: "ongoing", date: "2024-02-15" }
    ],
    images: ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 17,
    title: "Senior Citizens' Activity Center",
    description: "Creating dedicated space for elderly activities and healthcare",
    ward: "Ward 17",
    location: "Old City Area",
    budget: 950000,
    spent: 665000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-12-15",
    expectedCompletion: "2024-03-31",
    contractor: "Social Infrastructure Co.",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-15" },
      { phase: "Fund Release", status: "completed", date: "2023-12-22" },
      { phase: "Renovation Work", status: "ongoing", date: "2024-01-10" },
      { phase: "Equipment Setup", status: "pending", date: "2024-03-15" }
    ],
    images: ["https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Ramesh Iyer", rating: 4, comment: "Good concept. Looking forward to completion.", date: "2024-02-08", likes: 13 }
    ]
  },
  {
    id: 18,
    title: "Public WiFi Hotspots",
    description: "Free internet access points in public spaces",
    ward: "Ward 18",
    location: "Parks and Community Centers",
    budget: 540000,
    spent: 432000,
    progress: 80,
    status: "Under Construction",
    startDate: "2024-01-08",
    expectedCompletion: "2024-03-08",
    contractor: "NetConnect Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-08" },
      { phase: "Fund Release", status: "completed", date: "2024-01-15" },
      { phase: "Equipment Installation", status: "ongoing", date: "2024-02-01" },
      { phase: "Testing & Activation", status: "pending", date: "2024-03-01" }
    ],
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 19,
    title: "Garbage Collection Vehicles",
    description: "Procurement of new waste collection trucks",
    ward: "Ward 19",
    location: "Municipal Depot",
    budget: 3500000,
    spent: 3500000,
    progress: 100,
    status: "Completed",
    startDate: "2023-09-01",
    expectedCompletion: "2023-12-31",
    contractor: "AutoFleet Suppliers",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-09-01" },
      { phase: "Fund Release", status: "completed", date: "2023-09-15" },
      { phase: "Vehicle Ordering", status: "completed", date: "2023-09-25" },
      { phase: "Delivery & Commissioning", status: "completed", date: "2023-12-31" }
    ],
    images: ["https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Shilpa Nair", rating: 5, comment: "New trucks are much more efficient. Cleaner streets now.", date: "2024-01-15", likes: 20 }
    ]
  },
  {
    id: 20,
    title: "Street Food Vendor Stalls",
    description: "Standardized hygienic food stalls with proper facilities",
    ward: "Ward 20",
    location: "Railway Station Area",
    budget: 680000,
    spent: 476000,
    progress: 70,
    status: "Under Construction",
    startDate: "2024-01-20",
    expectedCompletion: "2024-03-20",
    contractor: "Urban Amenities Ltd",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-20" },
      { phase: "Fund Release", status: "completed", date: "2024-01-25" },
      { phase: "Fabrication", status: "completed", date: "2024-02-10" },
      { phase: "Installation", status: "ongoing", date: "2024-02-20" }
    ],
    images: ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 21,
    title: "Community Health Center Upgrade",
    description: "Modernizing medical equipment and facilities",
    ward: "Ward 21",
    location: "Primary Health Center",
    budget: 2200000,
    spent: 1320000,
    progress: 60,
    status: "Under Construction",
    startDate: "2023-11-01",
    expectedCompletion: "2024-04-30",
    contractor: "MediCare Infrastructure",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-01" },
      { phase: "Fund Release", status: "completed", date: "2023-11-10" },
      { phase: "Equipment Procurement", status: "completed", date: "2023-12-15" },
      { phase: "Installation & Training", status: "ongoing", date: "2024-01-20" }
    ],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Dr. Anil Mehta", rating: 5, comment: "Excellent upgrades. Will improve healthcare access significantly.", date: "2024-02-14", likes: 27 }
    ]
  },
  {
    id: 22,
    title: "Bicycle Sharing Stations",
    description: "Eco-friendly bike rental kiosks",
    ward: "Ward 22",
    location: "Metro Station & College Area",
    budget: 820000,
    spent: 164000,
    progress: 20,
    status: "Tendering",
    startDate: "2024-03-10",
    expectedCompletion: "2024-06-10",
    contractor: "TBD",
    timeline: [
      { phase: "Tender Process", status: "ongoing", date: "2024-03-01" },
      { phase: "Fund Release", status: "pending", date: "2024-03-10" },
      { phase: "Station Setup", status: "pending", date: "2024-04-01" }
    ],
    images: ["https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 23,
    title: "Stormwater Drain Cleaning",
    description: "Desilting and cleaning of drainage channels",
    ward: "Ward 23",
    location: "Low-lying residential areas",
    budget: 450000,
    spent: 450000,
    progress: 100,
    status: "Completed",
    startDate: "2023-10-15",
    expectedCompletion: "2023-12-15",
    contractor: "DrainCare Services",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-15" },
      { phase: "Fund Release", status: "completed", date: "2023-10-20" },
      { phase: "Cleaning Work", status: "completed", date: "2023-11-30" },
      { phase: "Final Inspection", status: "completed", date: "2023-12-15" }
    ],
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Prakash Reddy", rating: 4, comment: "No waterlogging this monsoon. Good work!", date: "2023-12-20", likes: 14 }
    ]
  },
  {
    id: 24,
    title: "Traffic Signal Modernization",
    description: "Upgrading to smart adaptive traffic lights",
    ward: "Ward 24",
    location: "5 Major Intersections",
    budget: 1450000,
    spent: 1015000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-12-20",
    expectedCompletion: "2024-03-20",
    contractor: "TrafficTech Systems",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-20" },
      { phase: "Fund Release", status: "completed", date: "2024-01-05" },
      { phase: "Equipment Procurement", status: "completed", date: "2024-01-25" },
      { phase: "Installation", status: "ongoing", date: "2024-02-10" }
    ],
    images: ["https://images.unsplash.com/photo-1502101872923-d48509bff386?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 25,
    title: "Women's Skill Training Center",
    description: "Vocational training facility for women empowerment",
    ward: "Ward 25",
    location: "Women's Welfare Building",
    budget: 780000,
    spent: 702000,
    progress: 90,
    status: "Under Construction",
    startDate: "2023-11-25",
    expectedCompletion: "2024-02-25",
    contractor: "Skill Development Associates",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-25" },
      { phase: "Fund Release", status: "completed", date: "2023-12-05" },
      { phase: "Renovation", status: "completed", date: "2024-01-15" },
      { phase: "Equipment Setup", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Lakshmi Krishnan", rating: 5, comment: "Wonderful initiative for women. Well equipped center.", date: "2024-02-16", likes: 29 }
    ]
  },
  {
    id: 27,
    title: "School Building Renovation",
    description: "Structural repairs and painting of municipal school",
    ward: "Ward 27",
    location: "Government Primary School",
    budget: 1340000,
    spent: 1340000,
    progress: 100,
    status: "Completed",
    startDate: "2023-09-15",
    expectedCompletion: "2023-12-31",
    contractor: "EduBuild Contractors",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-09-15" },
      { phase: "Fund Release", status: "completed", date: "2023-09-25" },
      { phase: "Renovation Work", status: "completed", date: "2023-12-10" },
      { phase: "Final Inspection", status: "completed", date: "2023-12-31" }
    ],
    images: ["https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Principal Radha Menon", rating: 5, comment: "School looks beautiful. Children are excited to learn here.", date: "2024-01-10", likes: 35 }
    ]
  },
  {
    id: 28,
    title: "Urban Forestry Initiative",
    description: "Planting 5000 trees across the ward",
    ward: "Ward 28",
    location: "Roadsides and Open Spaces",
    budget: 425000,
    spent: 340000,
    progress: 80,
    status: "Under Construction",
    startDate: "2023-11-01",
    expectedCompletion: "2024-03-31",
    contractor: "GreenEarth Foundation",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-01" },
      { phase: "Fund Release", status: "completed", date: "2023-11-08" },
      { phase: "Sapling Procurement", status: "completed", date: "2023-11-20" },
      { phase: "Plantation Drive", status: "ongoing", date: "2023-12-01" }
    ],
    images: ["https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Environmental Club", rating: 5, comment: "Great green initiative! We helped plant trees too.", date: "2024-01-25", likes: 42 }
    ]
  },
  {
    id: 29,
    title: "Parking Management System",
    description: "Organized paid parking with digital payment",
    ward: "Ward 29",
    location: "Shopping District",
    budget: 890000,
    spent: 178000,
    progress: 20,
    status: "Tendering",
    startDate: "2024-03-05",
    expectedCompletion: "2024-06-30",
    contractor: "TBD",
    timeline: [
      { phase: "Tender Process", status: "ongoing", date: "2024-02-25" },
      { phase: "Fund Release", status: "pending", date: "2024-03-05" },
      { phase: "Infrastructure Setup", status: "pending", date: "2024-04-01" }
    ],
    images: ["https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 30,
    title: "Community Composting Unit",
    description: "Organic waste processing facility",
    ward: "Ward 30",
    location: "Near Vegetable Market",
    budget: 520000,
    spent: 416000,
    progress: 80,
    status: "Under Construction",
    startDate: "2023-12-10",
    expectedCompletion: "2024-03-10",
    contractor: "BioWaste Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-10" },
      { phase: "Fund Release", status: "completed", date: "2023-12-18" },
      { phase: "Site Preparation", status: "completed", date: "2024-01-05" },
      { phase: "Equipment Installation", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 31,
    title: "Public Art Installation",
    description: "Murals and sculptures to beautify public spaces",
    ward: "Ward 31",
    location: "Main Square & Underpasses",
    budget: 380000,
    spent: 380000,
    progress: 100,
    status: "Completed",
    startDate: "2023-10-20",
    expectedCompletion: "2024-01-20",
    contractor: "City Artists Collective",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-20" },
      { phase: "Fund Release", status: "completed", date: "2023-10-28" },
      { phase: "Design Approval", status: "completed", date: "2023-11-15" },
      { phase: "Artwork Creation", status: "completed", date: "2024-01-20" }
    ],
    images: ["https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Ananya Khanna", rating: 5, comment: "Beautiful artwork! Makes the area so vibrant.", date: "2024-01-28", likes: 48 }
    ]
  },
  {
    id: 32,
    title: "Mobile Health Van",
    description: "Medical services van for remote areas",
    ward: "Ward 32",
    location: "Multiple locations - mobile service",
    budget: 1850000,
    spent: 1850000,
    progress: 100,
    status: "Completed",
    startDate: "2023-08-01",
    expectedCompletion: "2023-11-30",
    contractor: "Healthcare Mobility Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-08-01" },
      { phase: "Fund Release", status: "completed", date: "2023-08-10" },
      { phase: "Vehicle Customization", status: "completed", date: "2023-10-15" },
      { phase: "Commissioning", status: "completed", date: "2023-11-30" }
    ],
    images: ["https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Village Elder Committee", rating: 5, comment: "Very helpful for elderly who can't travel far.", date: "2023-12-15", likes: 52 }
    ]
  },
  {
    id: 33,
    title: "Underground Cabling",
    description: "Moving overhead wires underground for safety",
    ward: "Ward 33",
    location: "Heritage Area",
    budget: 3200000,
    spent: 1600000,
    progress: 50,
    status: "Under Construction",
    startDate: "2023-11-15",
    expectedCompletion: "2024-05-15",
    contractor: "PowerGrid Infrastructure",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-15" },
      { phase: "Fund Release", status: "completed", date: "2023-11-25" },
      { phase: "Excavation", status: "completed", date: "2023-12-20" },
      { phase: "Cable Laying", status: "ongoing", date: "2024-01-15" }
    ],
    images: ["https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 34,
    title: "Street Name Sign Boards",
    description: "Bilingual signage for all streets",
    ward: "Ward 34",
    location: "All major and minor streets",
    budget: 320000,
    spent: 288000,
    progress: 90,
    status: "Under Construction",
    startDate: "2024-01-05",
    expectedCompletion: "2024-02-28",
    contractor: "SignPro Industries",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-05" },
      { phase: "Fund Release", status: "completed", date: "2024-01-10" },
      { phase: "Fabrication", status: "completed", date: "2024-02-01" },
      { phase: "Installation", status: "ongoing", date: "2024-02-15" }
    ],
    images: ["https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Deliveryman Association", rating: 4, comment: "Very helpful for navigation. Clear signage.", date: "2024-02-22", likes: 19 }
    ]
  },
  {
    id: 35,
    title: "Anganwadi Upgradation",
    description: "Improving childcare center facilities",
    ward: "Ward 35",
    location: "Anganwadi Center No. 12",
    budget: 480000,
    spent: 480000,
    progress: 100,
    status: "Completed",
    startDate: "2023-09-10",
    expectedCompletion: "2023-12-10",
    contractor: "Child Welfare Builders",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-09-10" },
      { phase: "Fund Release", status: "completed", date: "2023-09-18" },
      { phase: "Renovation", status: "completed", date: "2023-11-25" },
      { phase: "Equipment Setup", status: "completed", date: "2023-12-10" }
    ],
    images: ["https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Anganwadi Worker Sita", rating: 5, comment: "Wonderful upgrades. Children love the new toys.", date: "2023-12-18", likes: 24 }
    ]
  },
  {
    id: 36,
    title: "EV Charging Stations",
    description: "Electric vehicle charging infrastructure",
    ward: "Ward 36",
    location: "Public Parking Areas",
    budget: 1150000,
    spent: 345000,
    progress: 30,
    status: "Under Construction",
    startDate: "2024-02-01",
    expectedCompletion: "2024-05-31",
    contractor: "E-Mobility Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-20" },
      { phase: "Fund Release", status: "completed", date: "2024-02-01" },
      { phase: "Equipment Procurement", status: "ongoing", date: "2024-02-15" },
      { phase: "Installation", status: "pending", date: "2024-04-01" }
    ],
    images: ["https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 37,
    title: "Dog Park and Pet Area",
    description: "Dedicated space for pets with obstacles and water",
    ward: "Ward 37",
    location: "Green Valley Park",
    budget: 420000,
    spent: 378000,
    progress: 90,
    status: "Under Construction",
    startDate: "2023-12-20",
    expectedCompletion: "2024-02-29",
    contractor: "Pet Friendly Spaces",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-20" },
      { phase: "Fund Release", status: "completed", date: "2024-01-05" },
      { phase: "Fencing & Layout", status: "completed", date: "2024-01-25" },
      { phase: "Equipment Installation", status: "ongoing", date: "2024-02-10" }
    ],
    images: ["https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Pet Owners Group", rating: 5, comment: "Finally a safe space for our pets! Thank you!", date: "2024-02-20", likes: 38 }
    ]
  },
  {
    id: 38,
    title: "Hawker Zone Development",
    description: "Organized vending area with amenities",
    ward: "Ward 38",
    location: "Near Bus Terminal",
    budget: 720000,
    spent: 144000,
    progress: 20,
    status: "Tendering",
    startDate: "2024-03-10",
    expectedCompletion: "2024-06-30",
    contractor: "TBD",
    timeline: [
      { phase: "Tender Process", status: "ongoing", date: "2024-03-01" },
      { phase: "Fund Release", status: "pending", date: "2024-03-10" },
      { phase: "Construction", status: "pending", date: "2024-04-01" }
    ],
    images: ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 39,
    title: "Rooftop Solar for Streetlights",
    description: "Solar panels to power street lighting",
    ward: "Ward 39",
    location: "Residential Areas",
    budget: 980000,
    spent: 686000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-12-01",
    expectedCompletion: "2024-03-15",
    contractor: "Solar Street Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-01" },
      { phase: "Fund Release", status: "completed", date: "2023-12-10" },
      { phase: "Panel Installation", status: "ongoing", date: "2024-01-05" },
      { phase: "Grid Connection", status: "pending", date: "2024-03-01" }
    ],
    images: ["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 40,
    title: "Multi-Level Parking Structure",
    description: "Three-story parking building",
    ward: "Ward 40",
    location: "Commercial Hub",
    budget: 8500000,
    spent: 3400000,
    progress: 40,
    status: "Under Construction",
    startDate: "2023-10-01",
    expectedCompletion: "2024-08-31",
    contractor: "Mega Structures Pvt Ltd",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2J023-10-01" },
      { phase: "Fund Release", status: "completed", date: "2023-10-15" },
      { phase: "Foundation Work", status: "completed", date: "2023-12-01" },
      { phase: "Structure Construction", status: "ongoing", date: "2024-01-15" }
    ],
    images: ["https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Shopkeeper Association", rating: 4, comment: "Much needed. Progress is good so far.", date: "2m024-02-10", likes: 17 }
    ]
  },
  {
    id: 41,
    title: "Canal Beautification",
    description: "Cleaning and landscaping canal banks",
    ward: "Ward 41",
    location: "City Canal - 3 km stretch",
    budget: 1650000,
    spent: 1650000,
    progress: 100,
    status: "Completed",
    startDate: "2023-08-15",
    expectedCompletion: "2023-12-31",
    contractor: "WaterFront Developers",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-08-15" },
      { phase: "Fund Release", status: "completed", date: "2023-08-25" },
      { phase: "Cleaning & Desilting", status: "completed", date: "2023-10-15" },
      { phase: "Landscaping", status: "completed", date: "2023-12-31" }
    ],
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Joggers Club", rating: 5, comment: "Beautiful transformation! Great for morning walks.", date: "2024-01-12", likes: 44 }
    ]
  },
  {
    id: 42,
    title: "Anti-Encroachment Drive Infrastructure",
    description: "Barriers and signage for public land protection",
    ward: "Ward 42",
    location: "Multiple government land parcels",
    budget: 380000,
    spent: 342000,
    progress: 90,
    status: "Under Construction",
    startDate: "2024-01-15",
    expectedCompletion: "2024-03-01",
    contractor: "Security Fence Co.",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-15" },
      { phase: "Fund Release", status: "completed", date: "2024-01-20" },
      { phase: "Survey & Marking", status: "completed", date: "2024-02-01" },
      { phase: "Installation", status: "ongoing", date: "2024-02-15" }
    ],
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 43,
    title: "Wheelchair Accessible Ramps",
    description: "Installing ramps at public buildings and crossings",
    ward: "Ward 43",
    location: "50 locations across ward",
    budget: 540000,
    spent: 540000,
    progress: 100,
    status: "Completed",
    startDate: "2023-10-01",
    expectedCompletion: "2024-01-15",
    contractor: "Accessibility Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-01" },
      { phase: "Fund Release", status: "completed", date: "2023-10-10" },
      { phase: "Survey & Design", status: "completed", date: "2023-10-25" },
      { phase: "Construction", status: "completed", date: "2024-01-15" }
    ],
    images: ["https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Disability Rights Forum", rating: 5, comment: "Excellent work making the city accessible to all!", date: "2024-01-22", likes: 56 }
    ]
  },
  {
    id: 44,
    title: "Organic Farmers Market Shed",
    description: "Covered market space for local farmers",
    ward: "Ward 44",
    location: "Weekly Market Ground",
    budget: 850000,
    spent: 595000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-12-10",
    expectedCompletion: "2024-03-31",
    contractor: "Agricultural Infrastructure Ltd",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-10" },
      { phase: "Fund Release", status: "completed", date: "2023-12-18" },
      { phase: "Foundation", status: "completed", date: "2024-01-15" },
      { phase: "Shed Construction", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Farmers Cooperative", rating: 4, comment: "Will help us sell produce in all weather. Good quality.", date: "2024-02-18", likes: 21 }
    ]
  },
  {
    id: 45,
    title: "Heritage Walk Trail",
    description: "Marked trail connecting historical sites",
    ward: "Ward 45",
    location: "Old City Heritage Zone",
    budget: 620000,
    spent: 124000,
    progress: 20,
    status: "Tendering",
    startDate: "2024-03-15",
    expectedCompletion: "2024-07-15",
    contractor: "TBD",
    timeline: [
      { phase: "Tender Process", status: "ongoing", date: "2024-03-05" },
      { phase: "Fund Release", status: "pending", date: "2024-03-15" },
      { phase: "Trail Development", status: "pending", date: "2024-04-15" }
    ],
    images: ["https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 46,
    title: "Crematorium Modernization",
    description: "Electric crematorium and improved facilities",
    ward: "Ward 46",
    location: "Municipal Crematorium",
    budget: 2800000,
    spent: 1680000,
    progress: 60,
    status: "Under Construction",
    startDate: "2023-11-01",
    expectedCompletion: "2024-04-30",
    contractor: "Sacred Spaces Builders",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-01" },
      { phase: "Fund Release", status: "completed", date: "2023-11-10" },
      { phase: "Demolition & Prep", status: "completed", date: "2023-12-01" },
      { phase: "Construction", status: "ongoing", date: "2024-01-05" }
    ],
    images: ["https://images.unsplash.com/photo-1580541631030-7a0a2b87e3b1?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 47,
    title: "Youth Hostel Facility",
    description: "Affordable accommodation for students and travelers",
    ward: "Ward 47",
    location: "Near University Campus",
    budget: 3500000,
    spent: 2100000,
    progress: 60,
    status: "Under Construction",
    startDate: "2023-09-01",
    expectedCompletion: "2024-05-31",
    contractor: "Hospitality Builders Group",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-09-01" },
      { phase: "Fund Release", status: "completed", date: "2023-09-15" },
      { phase: "Structural Work", status: "completed", date: "2023-12-31" },
      { phase: "Interior Finishing", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 48,
    title: "Flood Warning System",
    description: "Sensors and alert system for flood-prone areas",
    ward: "Ward 48",
    location: "Riverbank Settlements",
    budget: 1200000,
    spent: 840000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-11-20",
    expectedCompletion: "2024-03-20",
    contractor: "DisasterTech Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-20" },
      { phase: "Fund Release", status: "completed", date: "2023-11-28" },
      { phase: "Sensor Installation", status: "completed", date: "2024-01-15" },
      { phase: "System Integration", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Riverside Community", rating: 5, comment: "This will save lives. Thank you for thinking of us.", date: "2024-02-15", likes: 33 }
    ]
  },
  {
    id: 49,
    title: "Outdoor Gym Equipment",
    description: "Installing fitness equipment in parks",
    ward: "Ward 49",
    location: "5 Parks across ward",
    budget: 450000,
    spent: 450000,
    progress: 100,
    status: "Completed",
    startDate: "2023-10-15",
    expectedCompletion: "2023-12-31",
    contractor: "FitCity Equipment Co.",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-15" },
      { phase: "Fund Release", status: "completed", date: "2023-10-22" },
      { phase: "Equipment Delivery", status: "completed", date: "2023-11-20" },
      { phase: "Installation", status: "completed", date: "2023-12-31" }
    ],
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Fitness Group", rating: 5, comment: "Fantastic equipment! Using it daily. Great quality.", date: "2024-01-15", likes: 39 }
    ]
  },
  {
    id: 50,
    title: "Market Cold Storage",
    description: "Refrigerated storage for perishable goods",
    ward: "Ward 50",
    location: "Wholesale Vegetable Market",
    budget: 4200000,
    spent: 1680000,
    progress: 40,
    status: "Under Construction",
    startDate: "2023-10-01",
    expectedCompletion: "2024-06-30",
    contractor: "ColdChain Infrastructure",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-01" },
      { phase: "Fund Release", status: "completed", date: "2023-10-15" },
      { phase: "Civil Work", status: "completed", date: "2023-12-31" },
      { phase: "Refrigeration Setup", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 51,
    title: "Slum Rehabilitation Housing",
    description: "Affordable housing units with basic amenities",
    ward: "Ward 51",
    location: "Eastern Development Area",
    budget: 12000000,
    spent: 3600000,
    progress: 30,
    status: "Under Construction",
    startDate: "2023-08-01",
    expectedCompletion: "2025-02-28",
    contractor: "Social Housing Corporation",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-08-01" },
      { phase: "Fund Release", status: "completed", date: "2023-08-20" },
      { phase: "Site Development", status: "completed", date: "2023-11-01" },
      { phase: "Construction Phase 1", status: "ongoing", date: "2023-12-01" }
    ],
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Beneficiary Group", rating: 5, comment: "Dream come true for us. Good construction quality.", date: "2024-02-08", likes: 67 }
    ]
  },
  {
    id: 52,
    title: "Automated Public Convenience",
    description: "Self-cleaning smart toilets at transit points",
    ward: "Ward 52",
    location: "3 Transit Hubs",
    budget: 1800000,
    spent: 1260000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-12-01",
    expectedCompletion: "2024-03-15",
    contractor: "SmartSanitation Tech",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-01" },
      { phase: "Fund Release", status: "completed", date: "2023-12-08" },
      { phase: "Equipment Import", status: "completed", date: "2024-01-10" },
      { phase: "Installation", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 53,
    title: "Butterfly Garden & Nature Trail",
    description: "Ecological garden with native plants",
    ward: "Ward 53",
    location: "Botanical Reserve Area",
    budget: 680000,
    spent: 680000,
    progress: 100,
    status: "Completed",
    startDate: "2023-08-20",
    expectedCompletion: "2023-12-20",
    contractor: "EcoGarden Specialists",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-08-20" },
      { phase: "Fund Release", status: "completed", date: "2023-08-28" },
      { phase: "Landscape Design", status: "completed", date: "2023-09-20" },
      { phase: "Planting & Setup", status: "completed", date: "2023-12-20" }
    ],
    images: ["https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Nature Lovers Club", rating: 5, comment: "Stunning garden! Educational and beautiful.", date: "2024-01-05", likes: 61 }
    ]
  },
  {
    id: 54,
    title: "Smart Parking Meters",
    description: "Digital payment-enabled parking meters",
    ward: "Ward 54",
    location: "Commercial Streets",
    budget: 920000,
    spent: 644000,
    progress: 70,
    status: "Under Construction",
    startDate: "2024-01-10",
    expectedCompletion: "2024-03-25",
    contractor: "ParkTech Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-10" },
      { phase: "Fund Release", status: "completed", date: "2024-01-18" },
      { phase: "Equipment Procurement", status: "completed", date: "2024-02-05" },
      { phase: "Installation", status: "ongoing", date: "2024-02-20" }
    ],
    images: ["https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 55,
    title: "Skywalk Construction",
    description: "Elevated pedestrian bridge over busy junction",
    ward: "Ward 55",
    location: "Railway Station Crossing",
    budget: 5500000,
    spent: 3300000,
    progress: 60,
    status: "Under Construction",
    startDate: "2023-09-15",
    expectedCompletion: "2024-06-15",
    contractor: "Bridge Engineering Corp",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-09-15" },
      { phase: "Fund Release", status: "completed", date: "2023-09-28" },
      { phase: "Foundation Work", status: "completed", date: "2023-11-30" },
      { phase: "Structure Erection", status: "ongoing", date: "2024-01-01" }
    ],
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Daily Commuters", rating: 4, comment: "Much needed. Will make crossing safe.", date: "2024-02-12", likes: 28 }
    ]
  },
  {
    id: 56,
    title: "Animal Shelter Facility",
    description: "Stray animal care and adoption center",
    ward: "Ward 56",
    location: "Municipal Compound",
    budget: 1450000,
    spent: 1015000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-11-10",
    expectedCompletion: "2024-03-31",
    contractor: "Animal Welfare Builders",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-10" },
      { phase: "Fund Release", status: "completed", date: "2023-11-18" },
      { phase: "Construction", status: "ongoing", date: "2023-12-15" },
      { phase: "Equipment Setup", status: "pending", date: "2024-03-15" }
    ],
    images: ["https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Animal Rights Group", rating: 5, comment: "Compassionate initiative. Well-designed facility.", date: "2024-02-20", likes: 45 }
    ]
  },
  {
    id: 57,
    title: "Amphitheater Construction",
    description: "Open-air cultural performance venue",
    ward: "Ward 57",
    location: "Cultural Complex",
    budget: 2850000,
    spent: 2850000,
    progress: 100,
    status: "Completed",
    startDate: "2023-06-01",
    expectedCompletion: "2023-12-31",
    contractor: "Cultural Infrastructure Ltd",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-06-01" },
      { phase: "Fund Release", status: "completed", date: "2023-06-15" },
      { phase: "Excavation & Foundation", status: "completed", date: "2023-08-15" },
      { phase: "Seating & Stage", status: "completed", date: "2023-11-30" },
      { phase: "Final Touches", status: "completed", date: "2023-12-31" }
    ],
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Cultural Society", rating: 5, comment: "Beautiful venue! Acoustics are excellent.", date: "2024-01-18", likes: 73 }
    ]
  },
  {
    id: 58,
    title: "Maternal & Child Health Center",
    description: "Specialized healthcare facility for women and children",
    ward: "Ward 58",
    location: "Hospital Road",
    budget: 3200000,
    spent: 1280000,
    progress: 40,
    status: "Under Construction",
    startDate: "2023-10-15",
    expectedCompletion: "2024-07-15",
    contractor: "Healthcare Infra Builders",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-15" },
      { phase: "Fund Release", status: "completed", date: "2023-10-25" },
      { phase: "Site Development", status: "completed", date: "2023-11-30" },
      { phase: "Building Construction", status: "ongoing", date: "2024-01-01" }
    ],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 59,
    title: "Mini Stadium with Track",
    description: "400m running track and football field",
    ward: "Ward 59",
    location: "Sports Complex Area",
    budget: 6800000,
    spent: 2720000,
    progress: 40,
    status: "Under Construction",
    startDate: "2023-09-01",
    expectedCompletion: "2024-09-30",
    contractor: "Sports Infrastructure Pvt Ltd",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-09-01" },
      { phase: "Fund Release", status: "completed", date: "2023-09-15" },
      { phase: "Ground Leveling", status: "completed", date: "2023-11-15" },
      { phase: "Track Construction", status: "ongoing", date: "2023-12-20" }
    ],
    images: ["https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Athletics Association", rating: 5, comment: "Long-awaited facility! Quality looks good.", date: "2024-01-30", likes: 51 }
    ]
  },
  {
    id: 60,
    title: "Fish Market Modernization",
    description: "Hygienic fish market with cold storage",
    ward: "Ward 60",
    location: "Coastal Road",
    budget: 1850000,
    spent: 925000,
    progress: 50,
    status: "Under Construction",
    startDate: "2023-11-01",
    expectedCompletion: "2024-05-31",
    contractor: "Market Infrastructure Co.",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-01" },
      { phase: "Fund Release", status: "completed", date: "2023-11-10" },
      { phase: "Demolition", status: "completed", date: "2023-12-01" },
      { phase: "New Construction", status: "ongoing", date: "2024-01-05" }
    ],
    images: ["https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 61,
    title: "Smart Bus Shelters with Solar",
    description: "Solar-powered shelters with digital displays",
    ward: "Ward 61",
    location: "10 Major Bus Stops",
    budget: 1200000,
    spent: 240000,
    progress: 20,
    status: "Tendering",
    startDate: "2024-03-20",
    expectedCompletion: "2024-07-20",
    contractor: "TBD",
    timeline: [
      { phase: "Tender Process", status: "ongoing", date: "2024-03-10" },
      { phase: "Fund Release", status: "pending", date: "2024-03-20" },
      { phase: "Fabrication", status: "pending", date: "2024-04-15" }
    ],
    images: ["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 62,
    title: "Yoga & Meditation Center",
    description: "Community wellness center with facilities",
    ward: "Ward 62",
    location: "Riverside Park",
    budget: 980000,
    spent: 980000,
    progress: 100,
    status: "Completed",
    startDate: "2023-07-15",
    expectedCompletion: "2023-11-30",
    contractor: "Wellness Space Builders",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-07-15" },
      { phase: "Fund Release", status: "completed", date: "2023-07-22" },
      { phase: "Construction", status: "completed", date: "2023-10-30" },
      { phase: "Equipment Setup", status: "completed", date: "2023-11-30" }
    ],
    images: ["https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Wellness Group", rating: 5, comment: "Peaceful and well-maintained space. Perfect!", date: "2023-12-10", likes: 58 }
    ]
  },
  {
    id: 63,
    title: "Street Vendor Licensing Kiosks",
    description: "Digital kiosks for vendor registration",
    ward: "Ward 63",
    location: "Ward Office & Market Areas",
    budget: 420000,
    spent: 378000,
    progress: 90,
    status: "Under Construction",
    startDate: "2024-01-20",
    expectedCompletion: "2024-03-05",
    contractor: "DigitalGov Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-20" },
      { phase: "Fund Release", status: "completed", date: "2024-01-25" },
      { phase: "Kiosk Installation", status: "ongoing", date: "2024-02-10" },
      { phase: "Software Testing", status: "pending", date: "2024-02-28" }
    ],
    images: ["https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&h=300&fit=crop"],
    reviews: []
  },
  {
    id: 64,
    title: "Lake Restoration Project",
    description: "Cleaning and reviving historic lake",
    ward: "Ward 64",
    location: "City Lake",
    budget: 4500000,
    spent: 2700000,
    progress: 60,
    status: "Under Construction",
    startDate: "2023-10-01",
    expectedCompletion: "2024-06-30",
    contractor: "Aquatic Restoration Ltd",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-01" },
      { phase: "Fund Release", status: "completed", date: "2023-10-15" },
      { phase: "Water Treatment", status: "completed", date: "2023-12-31" },
      { phase: "Landscaping", status: "ongoing", date: "2024-02-01" }
    ],
    images: ["https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Environmental Activists", rating: 5, comment: "Water is so much cleaner now! Great progress.", date: "2024-02-22", likes: 64 }
    ]
  },
  {
    id: 65,
    title: "Auto Rickshaw Stands",
    description: "Designated organized auto stands",
    ward: "Ward 65",
    location: "8 locations across ward",
    budget: 320000,
    spent: 320000,
    progress: 100,
    status: "Completed",
    startDate: "2023-11-05",
    expectedCompletion: "2024-01-05",
    contractor: "Urban Planning Associates",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-05" },
      { phase: "Fund Release", status: "completed", date: "2023-11-12" },
      { phase: "Marking & Signage", status: "completed", date: "2023-12-15" },
      { phase: "Shelter Construction", status: "completed", date: "2024-01-05" }
    ],
    images: ["https://images.unsplash.com/photo-1583278655900-4e1b1e1b4b0e?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Auto Drivers Union", rating: 4, comment: "Better organization. Passengers can find us easily.", date: "2024-01-12", likes: 23 }
    ]
  },
  {
    id: 66,
    title: "Recycling Collection Centers",
    description: "Ward-level recycling drop-off points",
    ward: "Ward 66",
    location: "4 Collection Centers",
    budget: 680000,
    spent: 476000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-12-15",
    expectedCompletion: "2024-03-31",
    contractor: "GreenCycle Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-12-15" },
      { phase: "Fund Release", status: "completed", date: "2023-12-22" },
      { phase: "Infrastructure Setup", status: "ongoing", date: "2024-01-15" },
      { phase: "Equipment Installation", status: "pending", date: "2024-03-15" }
    ],
    images: ["https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Eco Warriors", rating: 5, comment: "Finally! Needed this badly. Good setup.", date: "2024-02-18", likes: 37 }
    ]
  },
  {
    id: 67,
    title: "Boundary Wall for School",
    description: "Security wall for government school",
    ward: "Ward 67",
    location: "Government Higher Secondary School",
    budget: 580000,
    spent: 580000,
    progress: 100,
    status: "Completed",
    startDate: "2023-09-20",
    expectedCompletion: "2023-12-20",
    contractor: "Construction Masters",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-09-20" },
      { phase: "Fund Release", status: "completed", date: "2023-09-28" },
      { phase: "Foundation", status: "completed", date: "2023-10-20" },
      { phase: "Wall Construction", status: "completed", date: "2023-12-20" }
    ],
    images: ["https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "School Management", rating: 5, comment: "Children are much safer now. Strong construction.", date: "2024-01-08", likes: 41 }
    ]
  },
  {
    id: 68,
    title: "Night Shelter for Homeless",
    description: "Temporary shelter with meals and basic facilities",
    ward: "Ward 68",
    location: "Near Railway Station",
    budget: 920000,
    spent: 644000,
    progress: 70,
    status: "Under Construction",
    startDate: "2023-11-20",
    expectedCompletion: "2024-03-20",
    contractor: "Social Welfare Infrastructure",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-11-20" },
      { phase: "Fund Release", status: "completed", date: "2023-11-28" },
      { phase: "Building Renovation", status: "ongoing", date: "2023-12-20" },
      { phase: "Facility Setup", status: "pending", date: "2024-03-05" }
    ],
    images: ["https://images.unsplash.com/photo-1489440543286-a69330151c0b?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "NGO Volunteers", rating: 5, comment: "Humanitarian work. Will help many people.", date: "2024-02-10", likes: 55 }
    ]
  },
  {
    id: 69,
    title: "Heritage Building Restoration",
    description: "Restoration of 100-year-old municipal building",
    ward: "Ward 69",
    location: "Heritage Square",
    budget: 3500000,
    spent: 1750000,
    progress: 50,
    status: "Under Construction",
    startDate: "2023-10-01",
    expectedCompletion: "2024-08-31",
    contractor: "Heritage Conservation Experts",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2023-10-01" },
      { phase: "Fund Release", status: "completed", date: "2023-10-15" },
      { phase: "Documentation & Survey", status: "completed", date: "2023-11-30" },
      { phase: "Restoration Work", status: "ongoing", date: "2024-01-01" }
    ],
    images: ["https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Heritage Society", rating: 5, comment: "Beautiful work preserving our history!", date: "2024-02-15", likes: 71 }
    ]
  },
  {
    id: 70,
    title: "Rubber Speed Breakers",
    description: "Installing safety speed breakers near schools and hospitals",
    ward: "Ward 70",
    location: "40 locations across ward",
    budget: 280000,
    spent: 252000,
    progress: 90,
    status: "Under Construction",
    startDate: "2024-01-25",
    expectedCompletion: "2024-03-10",
    contractor: "Road Safety Solutions",
    timeline: [
      { phase: "Tender Process", status: "completed", date: "2024-01-25" },
      { phase: "Fund Release", status: "completed", date: "2024-02-01" },
      { phase: "Survey & Marking", status: "completed", date: "2024-02-10" },
      { phase: "Installation", status: "ongoing", date: "2024-02-20" }
    ],
    images: ["https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, citizen: "Parents Association", rating: 4, comment: "Vehicles are slowing down now. Much safer for kids.", date: "2024-02-25", likes: 34 }
    ]
  }
];