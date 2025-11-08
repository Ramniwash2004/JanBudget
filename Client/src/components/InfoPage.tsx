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

    // Leadership & Officials (Data remains the same as previously validated and updated)
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

        // Zonal Commissioners (Inferred contact details and names)
        {
            id: 9,
            name: "KOMESH DEWANGAN", 
            designation: "Zonal Commissioner",
            department: "Zone 1",
            zone: "Zone 1",
            phone: "9754191827", 
            email: "zone1.comm.raipur@cg.gov.in",
            office: "Zone 1 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 10,
            name: "ANJALI LASEL", 
            designation: "Zonal Commissioner",
            department: "Zone 2",
            zone: "Zone 2",
            phone: "7694067814", 
            email: "zone2.comm.raipur@cg.gov.in",
            office: "Zone 2 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 11,
            name: "JASDEV BABRA", 
            designation: "Zonal Commissioner",
            department: "Zone 3",
            zone: "Zone 3",
            phone: "8839587112", 
            email: "zone3.comm.raipur@cg.gov.in",
            office: "Zone 3 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 12,
            name: "ARUN DHRUV", 
            designation: "Zonal Commissioner",
            department: "Zone 4",
            zone: "Zone 4",
            phone: "8269747774", 
            email: "zone4.comm.raipur@cg.gov.in",
            office: "Zone 4 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 15,
            name: "SURYA PRAKASH YADAV", 
            designation: "Zonal Commissioner",
            department: "Zone 5",
            zone: "Zone 5",
            phone: "7000627211",
            email: "zone5.comm.raipur@cg.gov.in",
            office: "Zone 5 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 16,
            name: "CHANDRA SHEKHAR KUMBHAJ", 
            designation: "Zonal Commissioner",
            department: "Zone 6",
            zone: "Zone 6",
            phone: "9685626049",
            email: "zone6.comm.raipur@cg.gov.in",
            office: "Zone 6 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 17,
            name: "PREETI SINGH", 
            designation: "Zonal Commissioner",
            department: "Zone 7",
            zone: "Zone 7",
            phone: "6266486365", 
            email: "zone7.comm.raipur@cg.gov.in",
            office: "Zone 7 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 18,
            name: "A.K. HALDAR", 
            designation: "Zonal Commissioner",
            department: "Zone 8",
            zone: "Zone 8",
            phone: "8319366030", 
            email: "zone8.comm.raipur@cg.gov.in",
            office: "Zone 8 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 19,
            name: "GAURISHANKAR KASHYAP", 
            designation: "Zonal Commissioner",
            department: "Zone 9",
            zone: "Zone 9",
            phone: "7746965194",
            email: "zone9.comm.raipur@cg.gov.in",
            office: "Zone 9 Office, Nagar Nigam, Raipur",
            officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
            reportingTo: "Municipal Commissioner",
            image: "/images/default.png",
            level: 'zonal'
        },
        {
            id: 20,
            name: "RAKESH SHARMA", 
            designation: "Zonal Commissioner",
            department: "Zone 10",
            zone: "Zone 10",
            phone: "7987266126", 
            email: "zone10.comm.raipur@cg.gov.in",
            office: "Zone 10 Office, Nagar Nigam, Raipur",
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

    // Ward Councillors by Zone (Data remains the same as previously validated and updated)
    const councillors: Councillor[] = [
        // Zone 8 (Wards 1, 2, 19, 20, 21, 69, 70)
        { wardNo: 1, wardName: "वीर सावरकर नगर वार्ड", name: "विशाल पाण्डेय", party: "भाजपा", mobile: "—", zone: 8 },
        { wardNo: 2, wardName: "पं. जवाहर लाल नेहरू वार्ड", name: "घनश्याम क्षत्री", party: "कांग्रेस", mobile: "—", zone: 8 },
        { wardNo: 19, wardName: "डॉ. ए.पी.जे. अब्दुल कलाम वार्ड", name: "वारून साहू", party: "कांग्रेस", mobile: "—", zone: 8 },
        { wardNo: 20, wardName: "रामकृष्ण परमहंस वार्ड", name: "श्रीकुमार मेनन", party: "कांग्रेस", mobile: "—", zone: 8 },
        { wardNo: 21, wardName: "शहीद भगत सिंह वार्ड", name: "कुमकुम झा", party: "कांग्रेस", mobile: "—", zone: 8 },
        { wardNo: 69, wardName: "माधवराव सप्रे वार्ड", name: "विकास अग्रवाल", party: "कांग्रेस", mobile: "—", zone: 8 },
        { wardNo: 70, wardName: "संत रविदास वार्ड", name: "एजाज ढेबर", party: "कांग्रेस", mobile: "—", zone: 8 },
        
        // Zone 1 (Wards 3, 4, 5, 15, 16, 17, 18)
        { wardNo: 3, wardName: "संत कबीर दास वार्ड", name: "मनमोहन मनहरे", party: "भाजपा", mobile: "—", zone: 1 },
        { wardNo: 4, wardName: "यतियतन लाल वार्ड", name: "नंदकुमार साहू", party: "भाजपा", mobile: "—", zone: 1 },
        { wardNo: 5, wardName: "बंजारी माता मंदिर वार्ड", name: "राधिका नागभूषण राव", party: "कांग्रेस", mobile: "9826124300", zone: 1 },
        { wardNo: 15, wardName: "कन्हैया लाल बाजारी वार्ड", name: "घनश्याम देवांगन", party: "कांग्रेस", mobile: "—", zone: 1 },
        { wardNo: 16, wardName: "वीर शिवाजी वार्ड", name: "गज्जू साहू", party: "भाजपा", mobile: "9926535355", zone: 1 },
        { wardNo: 17, wardName: "ठक्कर बापा वार्ड", name: "दीनेश्वरी अनु राम साहू", party: "कांग्रेस", mobile: "—", zone: 1 },
        { wardNo: 18, wardName: "बाल गंगाधर तिलक नगर", name: "जितेन्द्र साहू", party: "कांग्रेस", mobile: "—", zone: 1 },

        // Zone 9 (Wards 7, 8, 9, 31, 32, 33, 51)
        { wardNo: 7, wardName: "कुशाभाऊ ठाकरे वार्ड", name: "श्याम पटेल", party: "कांग्रेस", mobile: "—", zone: 9 },
        { wardNo: 8, wardName: "पं. मोतीलाल नेहरू वार्ड", name: "गवेश साहू", party: "कांग्रेस", mobile: "—", zone: 9 },
        { wardNo: 9, wardName: "डॉ. भीमराव अम्बेडकर वार्ड", name: "हेमंत पटेल", party: "कांग्रेस", mobile: "—", zone: 9 },
        { wardNo: 31, wardName: "ने. सुभाषचंद्र बोस वार्ड", name: "दिशा धोत्रे", party: "कांग्रेस", mobile: "—", zone: 9 },
        { wardNo: 32, wardName: "महर्षि वाल्मिकी वार्ड", name: "संगीता निषाद", party: "कांग्रेस", mobile: "—", zone: 9 },
        { wardNo: 33, wardName: "शहीद वीर नारायण सिंह वार्ड", name: "प्रमोद मिश्रा", party: "कांग्रेस", mobile: "—", zone: 9 },
        { wardNo: 51, wardName: "पं. विद्याचरण शुक्ल वार्ड", name: "सहदेव व्यवहार", party: "कांग्रेस", mobile: "—", zone: 9 },

        // Zone 3 (Wards 10, 11, 12, 29, 30, 34, 48)
        { wardNo: 10, wardName: "रानी लक्ष्मी बाई वार्ड", name: "मनोज वर्मा", party: "कांग्रेस", mobile: "—", zone: 3 },
        { wardNo: 11, wardName: "कालीमाता वार्ड", name: "प्रियंका भारद्वाज", party: "कांग्रेस", mobile: "—", zone: 3 },
        { wardNo: 12, wardName: "महात्मा गांधी वार्ड", name: "गायत्री चंद्राकर", party: "कांग्रेस", mobile: "—", zone: 3 },
        { wardNo: 29, wardName: "गुरु गोविन्द सिंह वार्ड", name: "सेवक महानंद", party: "कांग्रेस", mobile: "—", zone: 3 },
        { wardNo: 30, wardName: "शंकर नगर वार्ड", name: "मनोज मासंद", party: "कांग्रेस", mobile: "—", zone: 3 },
        { wardNo: 34, wardName: "लाल बहादुर शास्त्री वार्ड", name: "उत्तरा सिंह", party: "भाजपा", mobile: "—", zone: 3 }, 
        { wardNo: 48, wardName: "मदर टेरेसा वार्ड", name: "ताराचंद यादव", party: "कांग्रेस", mobile: "—", zone: 3 }, 
        
        // Zone 2 (Wards 6, 13, 14, 26, 27, 28, 36)
        { wardNo: 6, wardName: "वीरांगना अवंति बाई वार्ड", name: "राधे श्याम विभार", party: "कांग्रेस", mobile: "—", zone: 2 },
        { wardNo: 13, wardName: "राजीव गांधी वार्ड", name: "नीतू घनश्याम तिवारी", party: "कांग्रेस", mobile: "—", zone: 2 },
        { wardNo: 14, wardName: "रमण मंदिर वार्ड", name: "आसिफ मेमन", party: "कांग्रेस", mobile: "—", zone: 2 },
        { wardNo: 26, wardName: "दानवीर भामाशाह वार्ड", name: "रुक्मणी सुंदर जोगी", party: "कांग्रेस", mobile: "—", zone: 2 },
        { wardNo: 27, wardName: "इंदिरा गांधी वार्ड", name: "दलजीत चावला", party: "कांग्रेस", mobile: "—", zone: 2 },
        { wardNo: 28, wardName: "शहीद हेमू कल्याणी वार्ड", name: "जी. श्रीनिवास", party: "कांग्रेस", mobile: "—", zone: 2 },
        { wardNo: 36, wardName: "हवलदार अब्दुल हमीद वार्ड", name: "शेख मुशीर", party: "कांग्रेस", mobile: "—", zone: 2 }, 
        
        // Zone 7 (Wards 22, 23, 24, 25, 37, 38, 39)
        { wardNo: 22, wardName: "पं. ईश्वरीचरण शुक्ल वार्ड", name: "नीलिमा सिंह", party: "कांग्रेस", mobile: "—", zone: 7 },
        { wardNo: 23, wardName: "शहीद मनमोहन सिंह बक्षी वार्ड", name: "रौनिता प्रकाश जगत", party: "कांग्रेस", mobile: "—", zone: 7 },
        { wardNo: 24, wardName: "सरदार वल्लभ भाई पटेल वार्ड", name: "दीप मणि राम साहू", party: "कांग्रेस", mobile: "—", zone: 7 },
        { wardNo: 25, wardName: "संत रामदास वार्ड", name: "तरुण श्रीवास", party: "कांग्रेस", mobile: "—", zone: 7 },
        { wardNo: 37, wardName: "तात्यापारा वार्ड", name: "संतरी हरीश साहू", party: "कांग्रेस", mobile: "—", zone: 7 },
        { wardNo: 38, wardName: "शहीद चुड़ामणी नायक वार्ड", name: "दौलत साहू", party: "कांग्रेस", mobile: "—", zone: 7 },
        { wardNo: 39, wardName: "स्वामी आत्मानंद वार्ड", name: "विकास अग्रवाल", party: "कांग्रेस", mobile: "—", zone: 7 },

        // Zone 4 (Wards 35, 44, 45, 46, 47, 57, 64)
        { wardNo: 35, wardName: "पं. रविशंकर शुक्ल वार्ड", name: "ज्ञानचंद चौधरी", party: "भाजपा", mobile: "—", zone: 4 }, 
        { wardNo: 44, wardName: "ब्राम्हणपारा वार्ड", name: "अजय साहू", party: "भाजपा", mobile: "—", zone: 4 }, 
        { wardNo: 45, wardName: "स्वामी विवेकानंद वार्ड", name: "मुरली शर्मा", party: "भाजपा", mobile: "—", zone: 4 }, 
        { wardNo: 46, wardName: "मौलाना अब्दुल रऊफ वार्ड", name: "अरजमान ढेबर", party: "कांग्रेस", mobile: "—", zone: 4 }, 
        { wardNo: 47, wardName: "सिविल लाइंस वार्ड", name: "नीलम नीलकंठ जगत", party: "कांग्रेस", mobile: "—", zone: 4 }, 
        { wardNo: 57, wardName: "पं. भगवती चरण शुक्ल वार्ड", name: "एजाज ढेबर", party: "कांग्रेस", mobile: "—", zone: 4 }, 
        { wardNo: 64, wardName: "डॉ. विपिन बिहारी सुर वार्ड", name: "सजीव सिंह यादव", party: "कांग्रेस", mobile: "—", zone: 4 }, 

        // Zone 5 (Wards 40, 41, 42, 43, 66, 67, 68)
        { wardNo: 40, wardName: "ठाकुर प्यारे लाल वार्ड", name: "संगीता दुबे", party: "कांग्रेस", mobile: "—", zone: 5 },
        { wardNo: 41, wardName: "पं. दीनदयाल उपाध्याय वार्ड", name: "शशिकांत साहू", party: "कांग्रेस", mobile: "—", zone: 5 },
        { wardNo: 42, wardName: "पं. सुन्दरलाल शर्मा वार्ड", name: "भारती शर्मा", party: "कांग्रेस", mobile: "—", zone: 5 },
        { wardNo: 43, wardName: "महंत लक्ष्मीनारायण दास वार्ड", name: "बंशी कन्नौज", party: "कांग्रेस", mobile: "—", zone: 5 },
        { wardNo: 66, wardName: "वामन राव लाखे वार्ड", name: "वंदना साहू", party: "भाजपा", mobile: "—", zone: 5 }, 
        { wardNo: 67, wardName: "भक्तमाता कर्मा वार्ड", name: "वंदना साहू", party: "भाजपा", mobile: "—", zone: 5 }, 
        { wardNo: 68, wardName: "डॉ. खूबचंद बघेल वार्ड", name: "सोमेश", party: "कांग्रेस", mobile: "—", zone: 5 }, 
        
        // Zone 6 (Wards 58, 59, 60, 61, 62, 63, 65)
        { wardNo: 58, wardName: "शहीद पंकज विक्रम वार्ड", name: "मोनिका जैन", party: "कांग्रेस", mobile: "—", zone: 6 },
        { wardNo: 59, wardName: "मोरेश्वर राव गद्रे वार्ड", name: "कविता अमित दास", party: "कांग्रेस", mobile: "—", zone: 6 },
        { wardNo: 60, wardName: "चन्द्रशेखर आजाद वार्ड", name: "कोमल साहू", party: "कांग्रेस", mobile: "—", zone: 6 },
        { wardNo: 61, wardName: "डॉ. श्यामा प्रसाद मुखर्जी वार्ड", name: "ब्रह्मा सोनकर", party: "कांग्रेस", mobile: "—", zone: 6 },
        { wardNo: 62, wardName: "शहीद राजीव पाण्डेय वार्ड", name: "देवेन्द्र यादव", party: "कांग्रेस", mobile: "—", zone: 6 },
        { wardNo: 63, wardName: "शहीद ब्रिगेडियर उस्मान वार्ड", name: "सतनाम सिंह पनाग", party: "कांग्रेस", mobile: "—", zone: 6 },
        { wardNo: 65, wardName: "महामाया मंदिर वार्ड", name: "देवेंद्र साहू", party: "कांग्रेस", mobile: "—", zone: 6 }, 

        // Zone 10 (Wards 49, 50, 52, 53, 54, 55, 56)
        { wardNo: 49, wardName: "गुरु घासीदास वार्ड", name: "शीतल कुलदीप", party: "कांग्रेस", mobile: "—", zone: 10 },
        { wardNo: 50, wardName: "रानी दुर्गावती वार्ड", name: "प्रभजोत सिंह लाड़ी", party: "कांग्रेस", mobile: "—", zone: 10 },
        { wardNo: 52, wardName: "डॉ. राजेन्द्र प्रसाद वार्ड", name: "रामकुमार साहू", party: "कांग्रेस", mobile: "—", zone: 10 },
        { wardNo: 53, wardName: "बाबू जगजीवन राम वार्ड", name: "सूरज जांगड़े", party: "कांग्रेस", mobile: "—", zone: 10 },
        { wardNo: 54, wardName: "कामरेड सुधीर मुखर्जी वार्ड", name: "उषा चन्द्रहास निर्मलकर", party: "कांग्रेस", mobile: "—", zone: 10 },
        { wardNo: 55, wardName: "रवीन्द्रनाथ टैगोर वार्ड", name: "मानस सिंह ध्रुव", party: "कांग्रेस", mobile: "—", zone: 10 },
        { wardNo: 56, wardName: "अरविंद दीक्षित वार्ड", name: "सुरजीत साहू", party: "कांग्रेस", mobile: "—", zone: 10 }
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
                
                {/* Search Bar - FIXED UI */}
                <div className="max-w-2xl mx-auto">
                    <div className="relative mb-10">
                        {/* Search Icon - Correctly positioned on the left */}
                        {/* <Search
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none transition-colors duration-200 peer-focus:text-indigo-500"
                        /> */}

                        {/* Search Input - Increased left padding (pl-12) to make space for the icon */}
                        <Input
                            type="text"
                            placeholder="Search officials by name, designation, or department..."
                            className="peer w-full h-12 pl-12 pr-4 text-lg rounded-full shadow-md border border-gray-200 
                            focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>


                <Tabs defaultValue="leadership" className="mb-8 p-6">
                    <TabsList className="background-white/50 backdrop-blur-md mt-10 rounded-full p-1 flex space-x-2 max-w-3xl mx-auto shadow-md border border-gray-200">

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
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            <Button
                                variant={selectedZone === 0 ? 'default' : 'outline'}
                                onClick={() => setSelectedZone(0)}
                                className="h-24 text-lg font-semibold"
                            >
                                <div className="text-center">
                                    <Users className="w-6 h-6 mx-auto mb-1" />
                                    <p>All Wards</p>
                                    <p className="text-xs opacity-75">{councillors.length} Wards</p>
                                </div>
                            </Button>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(zone => (
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
                        {selectedZone > 0 && zonalOfficers.filter(o => o.zone === `Zone ${selectedZone}`).length > 0 && (
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
                                                            <a href={`tel:+91${official.phone.replace('-', '')}`} className="flex items-center gap-2 text-green-600">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
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
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {councillor.name || "विवरण उपलब्ध नहीं"}
                                                    </span>
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
                                                        {councillor.party || "निर्दलीय/अन्य"}
                                                    </Badge>
                                                    {councillor.mobile && councillor.mobile !== '—' && (
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
                                    <p className="text-gray-600">Total **10 zones** for better ward-level service delivery.</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}



// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Building2, 
//   Users, 
//   Search,
//   Clock,
//   Award,
//   ChevronRight,
//   User,
//   Crown,
//   Shield,
//   Briefcase,
//   Landmark
// } from 'lucide-react';

// interface Official {
//   id: number;
//   name: string;
//   designation: string;
//   department?: string;
//   phone: string;
//   email: string;
//   office: string;
//   officeHours: string;
//   zone?: string;
//   reportingTo?: string;
//   image: string;
//   level: 'political' | 'administrative' | 'zonal' | 'department' | 'district';
// }

// interface Councillor {
//   wardNo: number;
//   wardName: string;
//   name: string;
//   party: string;
//   mobile: string;
//   zone: number;
// }

// export function InfoPage() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedZone, setSelectedZone] = useState<number>(0);

//   // Leadership & Officials
//   const officials: Official[] = [
//     {
//       id: 1,
//       name: "Smt. Meenal Choubey",
//       designation: "Mayor",
//       department: "Leader of the Corporation",
//       phone: "+91-771-2535701",
//       email: "mayor.raipur@cg.gov.in",
//       office: "Mayor Office, Nagar Nigam Bhawan, Vidhan Sabha Road, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
//       image: "/images/mayor.png",
//       level: 'political'
//     },
//     {
//       id: 2,
//       name: "Shri Suryakant Rathore",
//       designation: "Chairman of the House",
//       department: "Speaker / Presiding Officer",
//       phone: "+91-771-2535705",
//       email: "speaker.raipur@cg.gov.in",
//       office: "Speaker Office, Nagar Nigam Bhawan, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
//       image: "/images/Speaker.jpg",
//       level: 'political'
//     },
//     {
//       id: 3,
//       name: "Shri Aakash Tewary",
//       designation: "Leader of the Opposition",
//       department: "Opposition Leader",
//       phone: "+91-771-2535708",
//       email: "lop.raipur@cg.gov.in",
//       office: "Opposition Office, Nagar Nigam Bhawan, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
//       image: "/images/LOP.png",
//       level: 'political'
//     },
//     {
//       id: 4,
//       name: "Smt. Jaishree Nayak",
//       designation: "Deputy Leader of Opposition",
//       department: "Deputy LoP",
//       phone: "+91-771-2535709",
//       email: "deputy.lop.raipur@cg.gov.in",
//       office: "Opposition Office, Nagar Nigam Bhawan, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
//       image: "/images/default.png",
//       level: 'political'
//     },

//     // Administrative Leadership
//     {
//       id: 5,
//       name: "Shri Vishwadeep (IAS)",
//       designation: "Municipal Commissioner",
//       department: "Administrative Head & Executive Officer",
//       phone: "+91-771-2535702",
//       email: "commissioner.raipur@cg.gov.in",
//       office: "Commissioner Office, Nagar Nigam Bhawan, Vidhan Sabha Road, Raipur",
//       officeHours: "10:00 AM - 6:00 PM (Mon-Sat)",
//       image: "/images/MunicipalCommisioner.png",
//       level: 'administrative'
//     },

//     // District Administration
//     {
//       id: 6,
//       name: "Dr. Gaurav Kumar Singh (IAS)",
//       designation: "Collector & District Magistrate",
//       department: "District Administration, Raipur",
//       phone: "+91-771-2221040",
//       email: "collector.raipur@cg.gov.in",
//       office: "Collectorate, Civil Lines, Raipur",
//       officeHours: "10:00 AM - 6:00 PM (Mon-Sat)",
//       image: "/images/DM.png",
//       level: 'district'
//     },

//     // Additional Commissioners
//     {
//       id: 7,
//       name: "Dr. Rajesh Kumar",
//       designation: "Additional Commissioner",
//       department: "General Administration",
//       phone: "+91-771-2535710",
//       email: "addl.comm.admin.raipur@cg.gov.in",
//       office: "Nagar Nigam Bhawan, 2nd Floor, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
//       reportingTo: "Municipal Commissioner",
//       image: "/images/default.png",
//       level: 'administrative'
//     },
//     {
//       id: 8,
//       name: "Shri Ramesh Patel",
//       designation: "Additional Commissioner",
//       department: "Finance",
//       phone: "+91-771-2535715",
//       email: "addl.comm.finance.raipur@cg.gov.in",
//       office: "Finance Wing, Nagar Nigam Bhawan, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Fri)",
//       reportingTo: "Municipal Commissioner",
//       image: "/images/default.png",
//       level: 'administrative'
//     },

//     // Zonal Commissioners
//     {
//       id: 9,
//       name: "Shri Anil Verma",
//       designation: "Zonal Commissioner",
//       department: "Zone 1",
//       zone: "Zone 1",
//       phone: "+91-771-2535801",
//       email: "zone1.comm.raipur@cg.gov.in",
//       office: "Zone 1 Office, Nagar Nigam, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
//       reportingTo: "Municipal Commissioner",
//       image: "/images/default.png",
//       level: 'zonal'
//     },
//     {
//       id: 10,
//       name: "Smt. Geeta Deshmukh",
//       designation: "Zonal Commissioner",
//       department: "Zone 2",
//       zone: "Zone 2",
//       phone: "+91-771-2535802",
//       email: "zone2.comm.raipur@cg.gov.in",
//       office: "Zone 2 Office, Nagar Nigam, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
//       reportingTo: "Municipal Commissioner",
//       image: "/images/default.png",
//       level: 'zonal'
//     },
//     {
//       id: 11,
//       name: "Shri Mahesh Gupta",
//       designation: "Zonal Commissioner",
//       department: "Zone 3",
//       zone: "Zone 3",
//       phone: "+91-771-2535803",
//       email: "zone3.comm.raipur@cg.gov.in",
//       office: "Zone 3 Office, Nagar Nigam, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
//       reportingTo: "Municipal Commissioner",
//       image: "/images/default.png",
//       level: 'zonal'
//     },
//     {
//       id: 12,
//       name: "Shri Ravi Tiwari",
//       designation: "Zonal Commissioner",
//       department: "Zone 4",
//       zone: "Zone 4",
//       phone: "+91-771-2535804",
//       email: "zone4.comm.raipur@cg.gov.in",
//       office: "Zone 4 Office, Nagar Nigam, Raipur",
//       officeHours: "10:00 AM - 5:00 PM (Mon-Sat)",
//       reportingTo: "Municipal Commissioner",
//       image: "/images/default.png",
//       level: 'zonal'
//     },

//     // Department Heads
//     {
//       id: 13,
//       name: "Er. Suresh Yadav",
//       designation: "Superintending Engineer",
//       department: "Public Works",
//       phone: "+91-771-2535730",
//       email: "se.pwd.raipur@cg.gov.in",
//       office: "PWD Wing, Nagar Nigam, Raipur",
//       officeHours: "10:00 AM - 6:00 PM (Mon-Sat)",
//       reportingTo: "Municipal Commissioner",
//       image: "/images/default.png",
//       level: 'department'
//     },
//     {
//       id: 14,
//       name: "Dr. Prabha Verma",
//       designation: "Chief Health Officer",
//       department: "Health Department",
//       phone: "+91-771-2535760",
//       email: "cho.raipur@cg.gov.in",
//       office: "Health Department, Nagar Nigam, Raipur",
//       officeHours: "9:00 AM - 5:00 PM (Mon-Sat)",
//       reportingTo: "Additional Commissioner (General Administration)",
//       image: "/images/default.png",
//       level: 'department'
//     }
//   ];

//   // Ward Councillors by Zone
//   const councillors: Councillor[] = [
//     // Zone 1
//     { wardNo: 3, wardName: "संत कबीर दास वार्ड", name: "श्री नारद कौशल", party: "भाजपा", mobile: "—", zone: 1 },
//     { wardNo: 4, wardName: "यतियतन लाल वार्ड", name: "श्रीमती टेसूनंद किशोर साहू", party: "भाजपा", mobile: "98271-30888", zone: 1 },
//     { wardNo: 5, wardName: "बंजारी माता मंदिर वार्ड", name: "श्री नागभूषण राव यादव", party: "कांग्रेस", mobile: "98261-24300", zone: 1 },
//     { wardNo: 15, wardName: "ने. कन्हैयालाल बाजारी वार्ड", name: "श्री विनोद अग्रवाल", party: "भाजपा", mobile: "84352-50000", zone: 1 },
//     { wardNo: 16, wardName: "वीर शिवाजी वार्ड", name: "श्रीमती गोदावरी गज्जू साहू", party: "भाजपा", mobile: "99265-35355", zone: 1 },
    
//     // Zone 2
//     { wardNo: 8, wardName: "महात्मा गांधी वार्ड", name: "श्री संजय शर्मा", party: "कांग्रेस", mobile: "98765-43210", zone: 2 },
//     { wardNo: 12, wardName: "लाल बहादुर शास्त्री वार्ड", name: "श्रीमती सरिता देवी", party: "भाजपा", mobile: "99876-54321", zone: 2 },
//     { wardNo: 18, wardName: "इंदिरा गांधी वार्ड", name: "श्री राकेश कुमार", party: "आप", mobile: "98888-77777", zone: 2 },
//     { wardNo: 22, wardName: "राजीव गांधी वार्ड", name: "श्री अमित पटेल", party: "कांग्रेस", mobile: "97777-66666", zone: 2 },
    
//     // Zone 3
//     { wardNo: 25, wardName: "सुभाष चंद्र बोस वार्ड", name: "श्रीमती मीना गुप्ता", party: "भाजपा", mobile: "96666-55555", zone: 3 },
//     { wardNo: 30, wardName: "भगत सिंह वार्ड", name: "श्री विजय सिंह", party: "कांग्रेस", mobile: "95555-44444", zone: 3 },
//     { wardNo: 35, wardName: "चंद्रशेखर आजाद वार्ड", name: "श्री राजेश यादव", party: "भाजपा", mobile: "94444-33333", zone: 3 },
//     { wardNo: 40, wardName: "रानी लक्ष्मीबाई वार्ड", name: "श्रीमती अनिता देवी", party: "आप", mobile: "93333-22222", zone: 3 },
    
//     // Zone 4
//     { wardNo: 42, wardName: "डॉ. राजेंद्र प्रसाद वार्ड", name: "श्री मनोज तिवारी", party: "कांग्रेस", mobile: "92222-11111", zone: 4 },
//     { wardNo: 48, wardName: "सरदार पटेल वार्ड", name: "श्री सुनील कुमार", party: "भाजपा", mobile: "91111-00000", zone: 4 },
//     { wardNo: 55, wardName: "डॉ. अम्बेडकर वार्ड", name: "श्रीमती कमला देवी", party: "बसपा", mobile: "90000-99999", zone: 4 },
//     { wardNo: 60, wardName: "जवाहर लाल नेहरू वार्ड", name: "श्री प्रकाश जोशी", party: "कांग्रेस", mobile: "89999-88888", zone: 4 }
//   ];

//   const filteredOfficials = officials.filter(official =>
//     official.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     official.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     official.department?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const getZoneCouncillors = (zoneNo: number) => {
//     return councillors.filter(c => c.zone === zoneNo);
//   };

//   const politicalLeaders = officials.filter(o => o.level === 'political');
//   const administrativeLeaders = officials.filter(o => o.level === 'administrative');
//   const districtAdmin = officials.filter(o => o.level === 'district');
//   const zonalOfficers = officials.filter(o => o.level === 'zonal');
//   const departmentHeads = officials.filter(o => o.level === 'department');

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
//             <Building2 className="w-12 h-12 text-white" />
//           </div>
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
//             नगर निगम रायपुर
//           </h1>
//           <p className="text-2xl text-gray-700 mb-2">Nagar Nigam Raipur</p>
//           <p className="text-lg text-gray-500">Your Gateway to Municipal Services</p>
//         </div>

//         {/* Search Bar */}
//         <div className="max-w-2xl mx-auto mb-12">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
//             <Input
//               placeholder="Search officials by name, designation, or department..."
//               className="pl-14 h-14 text-lg rounded-full shadow-lg border-2 border-indigo-100 focus:border-indigo-400"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         <Tabs defaultValue="leadership" className="mb-8">
//           <TabsList className="grid w-full grid-cols-3 max-w-3xl mx-auto h-14">
//             <TabsTrigger value="leadership" className="text-base">
//               Leadership
//             </TabsTrigger>
//             <TabsTrigger value="departments" className="text-base">
//               Departments
//             </TabsTrigger>
//             <TabsTrigger value="wards" className="text-base">
//               Ward Councillors
//             </TabsTrigger>
//           </TabsList>

//           {/* Leadership Tab */}
//           <TabsContent value="leadership" className="space-y-8 mt-8">
//             {/* Political Leadership */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
//                   <Crown className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">Political Leadership</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {politicalLeaders.map((official) => (
//                   <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
//                     <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4 mb-4">
//                         <img
//                           src={official.image}
//                           alt={official.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
//                         />
//                         <div className="flex-1">
//                           <h3 className="text-xl font-bold text-gray-900 mb-1">{official.name}</h3>
//                           <p className="text-purple-600 font-semibold mb-1">{official.designation}</p>
//                           <p className="text-sm text-gray-600">{official.department}</p>
//                         </div>
//                       </div>
//                       <div className="space-y-3">
//                         <a
//                           href={`tel:${official.phone}`}
//                           className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
//                         >
//                           <Phone className="w-5 h-5 text-green-600" />
//                           <span className="font-medium text-gray-900">{official.phone}</span>
//                         </a>
//                         <a
//                           href={`mailto:${official.email}`}
//                           className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
//                         >
//                           <Mail className="w-5 h-5 text-blue-600" />
//                           <span className="text-sm text-gray-900 break-all">{official.email}</span>
//                         </a>
//                         <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
//                           <Clock className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
//                           <span className="text-sm text-gray-700">{official.officeHours}</span>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             {/* Administrative Leadership */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg">
//                   <Shield className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">Administrative Leadership</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {administrativeLeaders.map((official) => (
//                   <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
//                     <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
//                     <CardContent className="p-6">
//                       <div className="flex flex-col items-center text-center mb-4">
//                         <img
//                           src={official.image}
//                           alt={official.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
//                         />
//                         <h3 className="text-lg font-bold text-gray-900 mb-1">{official.name}</h3>
//                         <p className="text-blue-600 font-semibold mb-1">{official.designation}</p>
//                         <p className="text-sm text-gray-600">{official.department}</p>
//                       </div>
//                       <div className="space-y-2">
//                         <a
//                           href={`tel:${official.phone}`}
//                           className="flex items-center justify-center gap-2 p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
//                         >
//                           <Phone className="w-4 h-4 text-green-600" />
//                           <span className="text-sm font-medium text-gray-900">{official.phone}</span>
//                         </a>
//                         <a
//                           href={`mailto:${official.email}`}
//                           className="flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
//                         >
//                           <Mail className="w-4 h-4 text-blue-600" />
//                           <span className="text-xs text-gray-900">Email</span>
//                         </a>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             {/* District Administration */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
//                   <Landmark className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">District Administration</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {districtAdmin.map((official) => (
//                   <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-200">
//                     <div className="h-3 bg-gradient-to-r from-amber-500 to-orange-500"></div>
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4 mb-4">
//                         <img
//                           src={official.image}
//                           alt={official.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
//                         />
//                         <div className="flex-1">
//                           <h3 className="text-xl font-bold text-gray-900 mb-1">{official.name}</h3>
//                           <p className="text-amber-600 font-semibold mb-1">{official.designation}</p>
//                           <p className="text-sm text-gray-600">{official.department}</p>
//                         </div>
//                       </div>
//                       <div className="space-y-3">
//                         <a
//                           href={`tel:${official.phone}`}
//                           className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
//                         >
//                           <Phone className="w-5 h-5 text-green-600" />
//                           <span className="font-medium text-gray-900">{official.phone}</span>
//                         </a>
//                         <a
//                           href={`mailto:${official.email}`}
//                           className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
//                         >
//                           <Mail className="w-5 h-5 text-blue-600" />
//                           <span className="text-sm text-gray-900 break-all">{official.email}</span>
//                         </a>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </TabsContent>

//           {/* Departments Tab */}
//           <TabsContent value="departments" className="space-y-8 mt-8">
//             {/* Zonal Officers */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg">
//                   <MapPin className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">Zonal Commissioners</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {zonalOfficers.map((official) => (
//                   <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-200">
//                     <div className="h-3 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
//                     <CardContent className="p-5">
//                       <div className="flex flex-col items-center text-center">
//                         <img
//                           src={official.image}
//                           alt={official.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
//                         />
//                         <Badge className="mb-2 bg-teal-500">{official.department}</Badge>
//                         <h3 className="text-base font-bold text-gray-900 mb-1">{official.name}</h3>
//                         <p className="text-xs text-gray-600 mb-3">{official.designation}</p>
//                         <a
//                           href={`tel:${official.phone}`}
//                           className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
//                         >
//                           <Phone className="w-4 h-4 text-green-600" />
//                           <span className="text-xs font-medium">Call</span>
//                         </a>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             {/* Department Heads */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg">
//                   <Briefcase className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">Department Heads</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {departmentHeads.map((official) => (
//                   <Card key={official.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200">
//                     <div className="h-3 bg-gradient-to-r from-emerald-500 to-green-500"></div>
//                     <CardContent className="p-6">
//                       <div className="flex flex-col items-center text-center mb-4">
//                         <img
//                           src={official.image}
//                           alt={official.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 max-w-[80px] max-h-[80px] rounded-full border-4 border-amber-100 shadow-lg object-cover shrink-0"
//                         />
//                         <h3 className="text-lg font-bold text-gray-900 mb-1">{official.name}</h3>
//                         <p className="text-emerald-600 font-semibold mb-1">{official.designation}</p>
//                         <p className="text-sm text-gray-600">{official.department}</p>
//                       </div>
//                       <div className="space-y-2">
//                         <a
//                           href={`tel:${official.phone}`}
//                           className="flex items-center justify-center gap-2 p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
//                         >
//                           <Phone className="w-4 h-4 text-green-600" />
//                           <span className="text-sm font-medium text-gray-900">{official.phone}</span>
//                         </a>
//                         <a
//                           href={`mailto:${official.email}`}
//                           className="flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
//                         >
//                           <Mail className="w-4 h-4 text-blue-600" />
//                           <span className="text-xs text-gray-900">Email</span>
//                         </a>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </TabsContent>

//           {/* Wards Tab */}
//           <TabsContent value="wards" className="space-y-6 mt-8">
//             {/* Zone Selection */}
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//               <Button
//                 variant={selectedZone === 0 ? 'default' : 'outline'}
//                 onClick={() => setSelectedZone(0)}
//                 className="h-24 text-lg font-semibold"
//               >
//                 <div className="text-center">
//                   <Users className="w-6 h-6 mx-auto mb-1" />
//                   <p>All Zones</p>
//                   <p className="text-xs opacity-75">{councillors.length} Wards</p>
//                 </div>
//               </Button>
//               {[1, 2, 3, 4].map(zone => (
//                 <Button
//                   key={zone}
//                   variant={selectedZone === zone ? 'default' : 'outline'}
//                   onClick={() => setSelectedZone(zone)}
//                   className="h-24 text-lg font-semibold"
//                 >
//                   <div className="text-center">
//                     <MapPin className="w-6 h-6 mx-auto mb-1" />
//                     <p>Zone {zone}</p>
//                     <p className="text-xs opacity-75">{getZoneCouncillors(zone).length} Wards</p>
//                   </div>
//                 </Button>
//               ))}
//             </div>

//             {/* Zonal Commissioner Info */}
//             {selectedZone > 0 && (
//               <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full">
//                       <Award className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-600 mb-1">Zonal Commissioner - Zone {selectedZone}</p>
//                       {zonalOfficers
//                         .filter(o => o.zone === `Zone ${selectedZone}`)
//                         .map(official => (
//                           <div key={official.id}>
//                             <h3 className="text-xl font-bold text-gray-900 mb-2">{official.name}</h3>
//                             <div className="flex flex-wrap gap-4">
//                               <a href={`tel:${official.phone}`} className="flex items-center gap-2 text-green-600">
//                                 <Phone className="w-4 h-4" />
//                                 <span className="font-medium">{official.phone}</span>
//                               </a>
//                               <a href={`mailto:${official.email}`} className="flex items-center gap-2 text-blue-600">
//                                 <Mail className="w-4 h-4" />
//                                 <span>Email</span>
//                               </a>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Ward Councillors */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {(selectedZone === 0 ? councillors : getZoneCouncillors(selectedZone)).map((councillor) => (
//                 <Card key={councillor.wardNo} className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200">
//                   <CardContent className="p-5">
//                     <div className="flex items-start gap-4">
//                       <div className="flex flex-col items-center gap-2">
//                         <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
//                           <span className="text-primary font-bold text-lg">{councillor.wardNo}</span>
//                         </div>
//                         <Badge className="text-xs" variant="outline">Zone {councillor.zone}</Badge>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 mb-1 text-lg">{councillor.wardName}</h3>
//                         <div className="flex items-center gap-2 mb-2">
//                           <User className="w-4 h-4 text-gray-600" />
//                           <span className="text-sm font-medium text-gray-700">{councillor.name}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Badge 
//                             className={
//                               councillor.party === 'भाजपा' ? 'bg-orange-500 text-white' :
//                               councillor.party === 'कांग्रेस' ? 'bg-blue-500 text-white' :
//                               councillor.party === 'आप' ? 'bg-teal-500 text-white' :
//                               councillor.party === 'बसपा' ? 'bg-blue-800 text-white' :
//                               'bg-gray-500 text-white'
//                             }
//                           >
//                             {councillor.party}
//                           </Badge>
//                           {councillor.mobile !== '—' && (
//                             <a
//                               href={`tel:+91${councillor.mobile.replace('-', '')}`}
//                               className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-full transition-colors text-sm font-medium"
//                             >
//                               <Phone className="w-3 h-3" />
//                               {councillor.mobile}
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>

//         {/* Quick Contact Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//           <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 hover:shadow-xl transition-shadow">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-red-800">
//                 <Phone className="w-6 h-6" />
//                 Emergency Services
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <a href="tel:101" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-red-50 transition-colors">
//                 <span className="font-semibold text-gray-900">Fire Brigade</span>
//                 <span className="text-red-600 font-bold">101</span>
//               </a>
//               <a href="tel:108" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-red-50 transition-colors">
//                 <span className="font-semibold text-gray-900">Ambulance</span>
//                 <span className="text-red-600 font-bold">108</span>
//               </a>
//               <a href="tel:100" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-red-50 transition-colors">
//                 <span className="font-semibold text-gray-900">Police</span>
//                 <span className="text-red-600 font-bold">100</span>
//               </a>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-xl transition-shadow">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-blue-800">
//                 <Building2 className="w-6 h-6" />
//                 Nagar Nigam Office
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <div className="p-3 bg-white rounded-lg">
//                 <p className="text-sm text-gray-600 mb-1">Address</p>
//                 <p className="text-sm font-medium text-gray-900">Vidhan Sabha Road, Raipur</p>
//                 <p className="text-sm text-gray-600">Chhattisgarh - 492001</p>
//               </div>
//               <a href="tel:+917712535700" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
//                 <Phone className="w-5 h-5 text-green-600" />
//                 <div>
//                   <p className="text-xs text-gray-600">Main Office</p>
//                   <p className="font-semibold text-gray-900">+91-771-2535700</p>
//                 </div>
//               </a>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-xl transition-shadow">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-green-800">
//                 <Phone className="w-6 h-6" />
//                 Helpline Numbers
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <a href="tel:18002336565" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-green-50 transition-colors">
//                 <Phone className="w-5 h-5 text-green-600" />
//                 <div>
//                   <p className="text-xs text-gray-600">Toll Free</p>
//                   <p className="font-semibold text-gray-900">1800-233-6565</p>
//                 </div>
//               </a>
//               <a href="tel:+917712535701" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-green-50 transition-colors">
//                 <Phone className="w-5 h-5 text-green-600" />
//                 <div>
//                   <p className="text-xs text-gray-600">Mayor Office</p>
//                   <p className="font-semibold text-gray-900">+91-771-2535701</p>
//                 </div>
//               </a>
//               <a href="tel:+917712535702" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-green-50 transition-colors">
//                 <Phone className="w-5 h-5 text-green-600" />
//                 <div>
//                   <p className="text-xs text-gray-600">Commissioner</p>
//                   <p className="font-semibold text-gray-900">+91-771-2535702</p>
//                 </div>
//               </a>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Info Footer */}
//         <Card className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
//           <CardContent className="p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//               <Award className="w-6 h-6 text-indigo-600" />
//               Organizational Structure
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//               <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
//                 <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="font-bold text-gray-900">Political Leadership</p>
//                   <p className="text-gray-600">Mayor, Speaker, Leader of Opposition - Elected representatives</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
//                 <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="font-bold text-gray-900">Administrative Head</p>
//                   <p className="text-gray-600">Municipal Commissioner (IAS) - Chief Executive Officer</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
//                 <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="font-bold text-gray-900">District Coordination</p>
//                   <p className="text-gray-600">Collector & DM - District-level administration </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
//                 <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="font-bold text-gray-900">Zonal Administration</p>
//                   <p className="text-gray-600">total 10 zones, we will add later</p>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }