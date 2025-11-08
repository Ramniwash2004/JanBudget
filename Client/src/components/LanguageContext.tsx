
import { createContext, useContext, useState, ReactNode } from 'react';

// type Language = 'en' | 'hi';
// type Language = 'en' | 'hi' | 'cg';
export type Language = 'en' | 'hi' | 'cg';


interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.janBudget': 'JanBudget',
    'header.subtitle': 'जनBudget - People\'s Budget',
    'header.home': 'Home',
    'header.proposals': 'Proposals',
    'header.voting': 'Voting',
    'header.projects': 'Projects',
    'header.complaints': 'Complaints',
    'header.dashboard': 'Dashboard',
    'header.info': 'Info',
    'header.profile': 'Profile',
    'header.login': 'LogIn',
    'header.signup': 'SignUp',
    'header.logout': 'LogOut',
    
    // Homepage
    'homepage.hero.title': 'Empowering Citizens, Building Together',
    'homepage.hero.subtitle': 'Participate in your city\'s budget allocation and help build a better community',
    'homepage.hero.submitProposal': 'Submit Proposal',
    'homepage.hero.voteNow': 'Vote Now',
    'homepage.hero.trackProjects': 'Track Projects',
    'homepage.stats.activeCitizens': 'Active Citizens',
    'homepage.stats.totalBudget': 'Total Budget',
    'homepage.stats.completedProjects': 'Completed Projects',
    'homepage.stats.proposalsSubmitted': 'Proposals Submitted',
    'homepage.wardBudget.title': 'Ward Budget Overview',
    'homepage.wardBudget.subtitle': 'Track budget allocation and project progress in each ward',
    'homepage.wardBudget.budgetAllocated': 'Budget Allocated',
    'homepage.wardBudget.ongoing': 'Ongoing',
    'homepage.wardBudget.completed': 'Completed',
    'homepage.wardBudget.viewDetails': 'View Details',
    'homepage.news.title': 'News & Updates',
    'homepage.news.subtitle': 'Stay informed about the latest developments',
    'homepage.quickActions.title': 'Quick Actions',
    'homepage.quickActions.subtitle': 'Get started with these common actions',
    'homepage.quickActions.submitNew': 'Submit New Proposal',
    'homepage.quickActions.submitDesc': 'Share your ideas for community development',
    'homepage.quickActions.getStarted': 'Get Started',
    'homepage.quickActions.vote': 'Vote on Proposals',
    'homepage.quickActions.voteDesc': 'Help decide which projects get funded',
    'homepage.quickActions.startVoting': 'Start Voting',
    'homepage.quickActions.track': 'Track Projects',
    'homepage.quickActions.trackDesc': 'Monitor the progress of approved projects',
    'homepage.quickActions.viewProjects': 'View Projects',
    
    // Voting Page
    'voting.title': 'Active Voting Phase',
    'voting.subtitle': 'Vote for your preferred projects in each ward',
    'voting.alert': 'Voting is currently open for Q2 budget allocation. Make sure to cast your vote before the deadline!',
    'voting.selectWard': 'Select Ward',
    'voting.totalVoters': 'Total Voters',
    'voting.votesCast': 'Votes Cast',
    'voting.participation': 'Participation',
    'voting.timeLeft': 'Time Left',
    'voting.votingProgress': 'Voting Progress',
    'voting.castYourVote': 'Cast Your Vote',
    'voting.selectOne': 'Select one proposal you would like to see funded in',
    'voting.submitVote': 'Submit Vote',
    'voting.thankYou': 'Thank you for voting! Your vote has been recorded successfully.',
    'voting.voteAgain': 'Vote again (Demo)',
    'voting.currentResults': 'Current Results',
    'voting.liveResults': 'Live voting results (votes are anonymous)',
    'voting.votingInfo': 'Voting Information',
    'voting.anonymous': '• All votes are anonymous and secure',
    'voting.realTime': '• Results are updated in real-time',
    'voting.mostVotes': '• The proposal with the most votes will be funded',
    'voting.closesIn': '• Voting closes in',
    
    // Common
    'common.votes': 'votes',
    'common.loading': 'Loading...',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.close': 'Close',

    // Dashboard Page
    'dashboard.title': 'Transparency Dashboard',
    'dashboard.subtitle': 'Real-time insights into budget allocation and civic engagement',
    'dashboard.exportData': 'Export Data',
    'dashboard.liveView': 'Live View',

    // KPI Cards
    'dashboard.kpi.totalBudget': 'Total Budget',
    'dashboard.kpi.activeCitizens': 'Active Citizens',
    'dashboard.kpi.proposalsThisMonth': 'Proposals This Month',
    'dashboard.kpi.votingParticipation': 'Voting Participation',

    // Tabs
    'dashboard.tabs.budget': 'Budget Analysis',
    'dashboard.tabs.participation': 'Citizen Participation',
    'dashboard.tabs.projects': 'Project Status',
    'dashboard.tabs.transparency': 'Financial Transparency',

    // Budget Tab
    'dashboard.budget.wardWiseTitle': 'Ward-wise Budget Allocation',
    'dashboard.budget.wardWiseDesc': 'Budget allocated vs spent across wards (in Lakhs)',
    'dashboard.budget.categoryTitle': 'Spending by Category',
    'dashboard.budget.categoryDesc': 'Budget distribution across different sectors',
    'dashboard.budget.monthlyTrendsTitle': 'Monthly Civic Activity Trends',
    'dashboard.budget.monthlyTrendsDesc': 'Track proposals, votes, and project approvals over time',

    // Participation Tab
    'dashboard.participation.votingTitle': 'Voting Participation by Ward',
    'dashboard.participation.votingDesc': 'Percentage of registered citizens who voted',
    'dashboard.participation.detailsTitle': 'Detailed Participation Stats',
    'dashboard.participation.engagementTitle': 'Citizen Engagement Over Time',
    'dashboard.participation.engagementDesc': 'Number of active participants each month',

    // Projects Tab
    'dashboard.projects.statusTitle': 'Project Status Overview',
    'dashboard.projects.statusDesc': 'Current status of all projects',
    'dashboard.projects.metricsTitle': 'Project Performance Metrics',
    'dashboard.projects.totalProjects': 'Total Projects',
    'dashboard.projects.onTime': 'On Time',
    'dashboard.projects.underBudget': 'Under Budget',

    // Transparency Tab
    'dashboard.transparency.transactionsTitle': 'Recent Financial Transactions',
    'dashboard.transparency.transactionsDesc': 'Transparent view of all budget releases and payments',
    'dashboard.transparency.project': 'Project',
    'dashboard.transparency.amount': 'Amount',
    'dashboard.transparency.vendor': 'Vendor',
    'dashboard.transparency.date': 'Date',
    'dashboard.transparency.status': 'Status',

    // Budget Utilization Cards
    'dashboard.transparency.utilizedTitle': 'Budget Utilized',
    'dashboard.transparency.utilizedDesc': '64% of total budget',
    'dashboard.transparency.pendingTitle': 'Pending Releases',
    'dashboard.transparency.pendingDesc': '16% of total budget',
    'dashboard.transparency.balanceTitle': 'Available Balance',
    'dashboard.transparency.balanceDesc': '20% of total budget',

        // Proposals Page
    'proposals.title': 'Community Proposals',
    'proposals.subtitle': 'Submit and explore project proposals for your community',
    'proposals.submitProposal': 'Submit Proposal',
    'proposals.submitNew': 'Submit New Proposal',
    'proposals.projectTitle': 'Project Title',
    'proposals.enterTitle': 'Enter a clear, descriptive title',
    'proposals.description': 'Description',
    'proposals.enterDescription': 'Provide detailed information about the project, its benefits, and implementation plan',
    'proposals.estimatedCost': 'Estimated Cost (₹)',
    'proposals.enterCost': 'Enter estimated project cost',
    'proposals.ward': 'Ward',
    'proposals.selectWard': 'Select Ward',
    'proposals.location': 'Specific Location',
    'proposals.enterLocation': 'Street name, landmark, or specific area',
    'proposals.category': 'Category',
    'proposals.selectCategory': 'Select Category',
    'proposals.supportingDocuments': 'Supporting Documents/Images',
    'proposals.uploadHint': 'Click to upload or drag and drop',
    'proposals.uploadNote': 'PNG, JPG, PDF up to 10MB',
    'proposals.cancel': 'Cancel',
    'proposals.submit': 'Submit Proposal',
    'proposals.submitting': 'Submitting...',
    'proposals.requiredFieldsAlert': 'Please fill all required fields before submitting.',
    'proposals.fetchError': 'Failed to fetch proposals.',
    'proposals.submitSuccess': 'Proposal submitted successfully!',
    'proposals.submitError': 'Failed to submit proposal',
    'proposals.noProposalsFound': 'No proposals found',
    'proposals.tryAdjusting': 'Try adjusting your search or filters',
    'proposals.filterByWard': 'Filter by Ward',
    'proposals.allWards': 'All Wards',
    'proposals.sortBy': 'Sort By',
    'proposals.sort.popular': 'Most Popular',
    'proposals.sort.recent': 'Most Recent',
    'proposals.sort.comments': 'Most Commented',

    // Proposal Card
    'proposal.status.approved': 'Approved',
    'proposal.status.votingOpen': 'Voting Open',
    'proposal.status.underReview': 'Under Review',
    'proposal.status.default': 'Pending',
    'proposal.categoryLabel': 'Category',
    'proposal.costLabel': 'Estimated Cost',
    'proposal.wardLabel': 'Ward',
    'proposal.locationLabel': 'Location',
    'proposal.submittedOn': 'Submitted on',
    'proposal.likes': 'Likes',
    'proposal.comments': 'Comments',
    'proposal.addComment': 'Write a comment...',
    'proposal.postComment': 'Post',
    'proposal.view': 'View',

    // Common
    'common.searchPlaceholder': 'Search proposals...',
    'common.filter': 'Filter',
    'common.popular': 'Popular',
    'common.recent': 'Recent',
    'common.comments': 'Comments',
    'common.loading': 'Loading...',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.close': 'Close',

        // Project Tracking Page
    'projects.title': 'Project Tracking',
    'projects.subtitle': 'Monitor the progress of approved community projects',
    'projects.searchPlaceholder': 'Search projects...',
    'projects.filterWard': 'Filter by ward',
    'projects.filterStatus': 'Filter by status',
    'projects.allWards': 'All Wards',
    'projects.allProjects': 'All Projects',
    'projects.ongoing': 'Ongoing',
    'projects.completed': 'Completed',
    'projects.noProjectsTitle': 'No projects found',
    'projects.noProjectsSubtitle': 'Try adjusting your search or filters',

    // Card labels
    'projects.location': 'Location',
    'projects.contractor': 'Contractor',
    'projects.progress': 'Progress',
    'projects.commentPlaceholder': 'Write a comment...',
    'projects.postComment': 'Post',
    'projects.viewDetails': 'View Details',

    // Project status
    'projects.status.completed': 'Completed',
    'projects.status.underConstruction': 'Under Construction',
    'projects.status.tendering': 'Tendering',
    'projects.status.fundReleased': 'Fund Released',

    // Dialog tabs
    'projects.tab.overview': 'Overview',
    'projects.tab.timeline': 'Timeline',
    'projects.tab.gallery': 'Gallery',
    'projects.tab.reviews': 'Reviews',

    // Overview tab
    'projects.details.title': 'Project Details',
    'projects.details.ward': 'Ward',
    'projects.details.status': 'Status',
    'projects.details.budget': 'Budget',
    'projects.details.spent': 'Spent',
    'projects.details.contractor': 'Contractor',
    'projects.details.progress': 'Progress',
    'projects.details.description': 'Description',
    'projects.progressCompleted': 'completed',

    // Timeline tab
    'projects.timeline.title': 'Project Timeline',

    // Gallery tab
    'projects.gallery.title': 'Project Gallery',

    // Reviews tab
    'projects.reviews.title': 'Citizen Reviews',
    'projects.reviews.noReviews': 'No reviews yet',
    'projects.reviews.likes': 'likes',

    // Common
    'common.view': 'View',
    'common.post': 'Post',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.comment': 'Comment',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.close': 'Close',

    // Complaints Page
  "complaints.title": "Citizens' Complaints",
  "complaints.subtitle": "Report issues and track their resolution",
  "complaints.lodgeComplaint": "Lodge Complaint",
  "complaints.newComplaint": "Lodge New Complaint",
  "complaints.heading": "Complaint Heading",
  "complaints.category": "Category",
  "complaints.selectCategory": "Select category",
  "complaints.waste": "Waste Management",
  "complaints.electricity": "Electricity",
  "complaints.water": "Water",
  "complaints.other": "Other",
  "complaints.description": "Description",
  "complaints.location": "Location",
  "complaints.wardNumber": "Ward Number",
  "complaints.priority": "Priority",
  "complaints.selectPriority": "Select priority",
  "complaints.priorityHigh": "High",
  "complaints.priorityMedium": "Medium",
  "complaints.priorityLow": "Low",
  "complaints.photoEvidence": "Photo Evidence",
  "complaints.takePhoto": "Take Photo from Camera",
  "complaints.clickToOpenCamera": "Click to open camera",
  "complaints.cancel": "Cancel",
  "complaints.submitComplaint": "Submit Complaint",
  "complaints.submitting": "Submitting...",
  "complaints.success": "Complaint submitted successfully!",
  "complaints.error": "Failed to submit complaint. Please try again.",
  "complaints.fillAllFields": "Please fill all fields.",
  "complaints.status": "Complaint Status",
  "complaints.viewDetails": "View Details",
  "complaints.submittedBy": "Submitted by",
  "complaints.resolved": "Resolved",
  "complaints.inProgress": "In Progress",
  "complaints.underInvestigation": "Under Investigation",
  "complaints.new": "New",
  "complaints.filterCategory": "Filter by category",
  "complaints.allCategories": "All Categories",
  "complaints.noComplaintsFound": "No complaints found",
  "complaints.tryAdjustingFilters": "Try adjusting your search or filters",
  "complaints.searchPlaceholder": "Search complaints...",
  "complaints.recent": "Most Recent",
  "complaints.popular": "Most Popular",
  "complaints.highPriority": "High Priority",
  "complaints.road": "Road",
  "complaints.waterCategory": "Water",
  "complaints.electricityCategory": "Electricity",
  "complaints.wasteCategory": "Waste",
  "complaints.othersCategory": "Others",

  // Complaint Metadata
  "complaints.upvotes": "Upvotes",
  "complaints.downvotes": "Downvotes",
  "complaints.comments": "Comments",
  "complaints.dateSubmitted": "Date Submitted",
  "complaints.locationLabel": "Location",
  "complaints.wardLabel": "Ward",
  "complaints.submittedByLabel": "Submitted by",

  // Alerts & messages
  "complaints.alert": "Your feedback helps us improve community services. Please provide detailed information.",
  "complaints.thankYou": "Thank you for submitting your complaint! We will review it and take appropriate action.",

  },
  hi: {
    // Header
    'header.janBudget': 'जनबजट',
    'header.subtitle': 'JanBudget - जनता का बजट',
    'header.home': 'होम',
    'header.proposals': 'प्रस्ताव',
    'header.voting': 'मतदान',
    'header.projects': 'परियोजनाएं',
    'header.complaints': 'शिकायतें',
    'header.dashboard': 'डैशबोर्ड',
    'header.info': 'जानकारी',
    'header.profile': 'प्रोफ़ाइल',
    'header.login' : 'लॉग इन',
    'header.signup' : 'साइन अप',
    'header.logout' : 'लॉग आउट',

    
    // Homepage
    'homepage.hero.title': 'नागरिकों को सशक्त बनाना, मिलकर निर्माण करना',
    'homepage.hero.subtitle': 'अपने शहर के बजट आवंटन में भाग लें और बेहतर समुदाय बनाने में मदद करें',
    'homepage.hero.submitProposal': 'प्रस्ताव जमा करें',
    'homepage.hero.voteNow': 'अभी वोट करें',
    'homepage.hero.trackProjects': 'परियोजनाओं को ट्रैक करें',
    'homepage.stats.activeCitizens': 'सक्रिय नागरिक',
    'homepage.stats.totalBudget': 'कुल बजट',
    'homepage.stats.completedProjects': 'पूर्ण परियोजनाएं',
    'homepage.stats.proposalsSubmitted': 'जमा किए गए प्रस्ताव',
    'homepage.wardBudget.title': 'वार्ड बजट अवलोकन',
    'homepage.wardBudget.subtitle': 'प्रत्येक वार्ड में बजट आवंटन और परियोजना प्रगति को ट्रैक करें',
    'homepage.wardBudget.budgetAllocated': 'आवंटित बजट',
    'homepage.wardBudget.ongoing': 'चालू',
    'homepage.wardBudget.completed': 'पूर्ण',
    'homepage.wardBudget.viewDetails': 'विवरण देखें',
    'homepage.news.title': 'समाचार और अपडेट',
    'homepage.news.subtitle': 'नवीनतम विकास के बारे में जानकारी रखें',
    'homepage.quickActions.title': 'त्वरित कार्य',
    'homepage.quickActions.subtitle': 'इन सामान्य कार्यों के साथ शुरुआत करें',
    'homepage.quickActions.submitNew': 'नया प्रस्ताव जमा करें',
    'homepage.quickActions.submitDesc': 'समुदायिक विकास के लिए अपने विचार साझा करें',
    'homepage.quickActions.getStarted': 'शुरू करें',
    'homepage.quickActions.vote': 'प्रस्तावों पर वोट करें',
    'homepage.quickActions.voteDesc': 'तय करने में मदद करें कि कौन सी परियोजनाओं को फंड मिले',
    'homepage.quickActions.startVoting': 'मतदान शुरू करें',
    'homepage.quickActions.track': 'परियोजनाओं को ट्रैक करें',
    'homepage.quickActions.trackDesc': 'अनुमोदित परियोजनाओं की प्रगति की निगरानी करें',
    'homepage.quickActions.viewProjects': 'परियोजनाएं देखें',
    
    // Voting Page
    'voting.title': 'सक्रिय मतदान चरण',
    'voting.subtitle': 'प्रत्येक वार्ड में अपनी पसंदीदा परियोजनाओं के लिए वोट करें',
    'voting.alert': 'वर्तमान में Q2 बजट आवंटन के लिए मतदान खुला है। समय सीमा से पहले अपना वोट डालना सुनिश्चित करें!',
    'voting.selectWard': 'वार्ड चुनें',
    'voting.totalVoters': 'कुल मतदाता',
    'voting.votesCast': 'डाले गए वोट',
    'voting.participation': 'भागीदारी',
    'voting.timeLeft': 'बचा समय',
    'voting.votingProgress': 'मतदान प्रगति',
    'voting.castYourVote': 'अपना वोट डालें',
    'voting.selectOne': 'एक प्रस्ताव चुनें जिसे आप फंड करना चाहते हैं',
    'voting.submitVote': 'वोट जमा करें',
    'voting.thankYou': 'वोट करने के लिए धन्यवाद! आपका वोट सफलतापूर्वक रिकॉर्ड हो गया है।',
    'voting.voteAgain': 'फिर से वोट करें (डेमो)',
    'voting.currentResults': 'वर्तमान परिणाम',
    'voting.liveResults': 'लाइव मतदान परिणाम (वोट गुमनाम हैं)',
    'voting.votingInfo': 'मतदान जानकारी',
    'voting.anonymous': '• सभी वोट गुमनाम और सुरक्षित हैं',
    'voting.realTime': '• परिणाम रियल-टाइम में अपडेट होते हैं',
    'voting.mostVotes': '• सबसे अधिक वोट वाले प्रस्ताव को फंड मिलेगा',
    'voting.closesIn': '• मतदान समाप्त होता है',
    
    // Common
    'common.votes': 'वोट',
    'common.loading': 'लोड हो रहा है...',
    'common.save': 'सहेजें',
    'common.cancel': 'रद्द करें',
    'common.submit': 'जमा करें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.view': 'देखें',
    'common.close': 'बंद करें',

        // डैशबोर्ड पेज
    'dashboard.title': 'पारदर्शिता डैशबोर्ड',
    'dashboard.subtitle': 'बजट आवंटन और नागरिक सहभागिता पर रीयल-टाइम जानकारी',
    'dashboard.exportData': 'डेटा निर्यात करें',
    'dashboard.liveView': 'लाइव दृश्य',

    // KPI कार्ड
    'dashboard.kpi.totalBudget': 'कुल बजट',
    'dashboard.kpi.activeCitizens': 'सक्रिय नागरिक',
    'dashboard.kpi.proposalsThisMonth': 'इस महीने के प्रस्ताव',
    'dashboard.kpi.votingParticipation': 'मतदान भागीदारी',

    // टैब्स
    'dashboard.tabs.budget': 'बजट विश्लेषण',
    'dashboard.tabs.participation': 'नागरिक सहभागिता',
    'dashboard.tabs.projects': 'परियोजना स्थिति',
    'dashboard.tabs.transparency': 'वित्तीय पारदर्शिता',

    // बजट टैब
    'dashboard.budget.wardWiseTitle': 'वार्ड-वार बजट आवंटन',
    'dashboard.budget.wardWiseDesc': 'प्रत्येक वार्ड में आवंटित और खर्च किए गए बजट (लाखों में)',
    'dashboard.budget.categoryTitle': 'श्रेणी अनुसार खर्च',
    'dashboard.budget.categoryDesc': 'विभिन्न क्षेत्रों में बजट वितरण',
    'dashboard.budget.monthlyTrendsTitle': 'मासिक नागरिक गतिविधि प्रवृत्तियाँ',
    'dashboard.budget.monthlyTrendsDesc': 'समय के साथ प्रस्ताव, वोट और परियोजना अनुमोदन को ट्रैक करें',

    // सहभागिता टैब
    'dashboard.participation.votingTitle': 'वार्ड अनुसार मतदान भागीदारी',
    'dashboard.participation.votingDesc': 'पंजीकृत नागरिकों में से जिन्होंने मतदान किया उनका प्रतिशत',
    'dashboard.participation.detailsTitle': 'विस्तृत भागीदारी आँकड़े',
    'dashboard.participation.engagementTitle': 'समय के साथ नागरिक सहभागिता',
    'dashboard.participation.engagementDesc': 'प्रत्येक महीने सक्रिय प्रतिभागियों की संख्या',

    // परियोजना टैब
    'dashboard.projects.statusTitle': 'परियोजना स्थिति अवलोकन',
    'dashboard.projects.statusDesc': 'सभी परियोजनाओं की वर्तमान स्थिति',
    'dashboard.projects.metricsTitle': 'परियोजना प्रदर्शन मीट्रिक्स',
    'dashboard.projects.totalProjects': 'कुल परियोजनाएँ',
    'dashboard.projects.onTime': 'समय पर पूर्ण',
    'dashboard.projects.underBudget': 'बजट के भीतर',

    // पारदर्शिता टैब
    'dashboard.transparency.transactionsTitle': 'हाल के वित्तीय लेनदेन',
    'dashboard.transparency.transactionsDesc': 'सभी बजट जारीियों और भुगतानों का पारदर्शी दृश्य',
    'dashboard.transparency.project': 'परियोजना',
    'dashboard.transparency.amount': 'राशि',
    'dashboard.transparency.vendor': 'विक्रेता',
    'dashboard.transparency.date': 'तारीख',
    'dashboard.transparency.status': 'स्थिति',

    // बजट उपयोग कार्ड
    'dashboard.transparency.utilizedTitle': 'उपयोग किया गया बजट',
    'dashboard.transparency.utilizedDesc': 'कुल बजट का 64%',
    'dashboard.transparency.pendingTitle': 'लंबित रिलीज़',
    'dashboard.transparency.pendingDesc': 'कुल बजट का 16%',
    'dashboard.transparency.balanceTitle': 'उपलब्ध शेष राशि',
    'dashboard.transparency.balanceDesc': 'कुल बजट का 20%',

        // Proposals Page (हिन्दी)
    'proposals.title': 'सामुदायिक प्रस्ताव',
    'proposals.subtitle': 'अपने समुदाय के लिए परियोजना प्रस्ताव जमा करें और उन्हें देखें',
    'proposals.submitProposal': 'प्रस्ताव जमा करें',
    'proposals.submitNew': 'नया प्रस्ताव जमा करें',
    'proposals.projectTitle': 'परियोजना का शीर्षक',
    'proposals.enterTitle': 'एक स्पष्ट और वर्णनात्मक शीर्षक दर्ज करें',
    'proposals.description': 'विवरण',
    'proposals.enterDescription': 'परियोजना, उसके लाभ और कार्यान्वयन योजना के बारे में विस्तृत जानकारी दें',
    'proposals.estimatedCost': 'अनुमानित लागत (₹)',
    'proposals.enterCost': 'परियोजना की अनुमानित लागत दर्ज करें',
    'proposals.ward': 'वार्ड',
    'proposals.selectWard': 'वार्ड चुनें',
    'proposals.location': 'विशिष्ट स्थान',
    'proposals.enterLocation': 'गली का नाम, लैंडमार्क या क्षेत्र दर्ज करें',
    'proposals.category': 'श्रेणी',
    'proposals.selectCategory': 'श्रेणी चुनें',
    'proposals.supportingDocuments': 'समर्थन दस्तावेज़ / चित्र',
    'proposals.uploadHint': 'क्लिक करें या फ़ाइल को खींचकर यहाँ छोड़ें',
    'proposals.uploadNote': 'PNG, JPG, PDF अधिकतम 10MB तक',
    'proposals.cancel': 'रद्द करें',
    'proposals.submit': 'प्रस्ताव जमा करें',
    'proposals.submitting': 'जमा किया जा रहा है...',
    'proposals.requiredFieldsAlert': 'कृपया सबमिट करने से पहले सभी आवश्यक फ़ील्ड भरें।',
    'proposals.fetchError': 'प्रस्ताव प्राप्त करने में विफल।',
    'proposals.submitSuccess': 'प्रस्ताव सफलतापूर्वक जमा किया गया!',
    'proposals.submitError': 'प्रस्ताव जमा करने में विफल।',
    'proposals.noProposalsFound': 'कोई प्रस्ताव नहीं मिला',
    'proposals.tryAdjusting': 'कृपया अपनी खोज या फ़िल्टर बदलकर पुनः प्रयास करें',
    'proposals.filterByWard': 'वार्ड के अनुसार फ़िल्टर करें',
    'proposals.allWards': 'सभी वार्ड',
    'proposals.sortBy': 'क्रमबद्ध करें',
    'proposals.sort.popular': 'सबसे लोकप्रिय',
    'proposals.sort.recent': 'हाल ही में जोड़े गए',
    'proposals.sort.comments': 'सबसे अधिक टिप्पणी वाले',

    // Proposal Card
    'proposal.status.approved': 'स्वीकृत',
    'proposal.status.votingOpen': 'मतदान खुला है',
    'proposal.status.underReview': 'समीक्षा में',
    'proposal.status.default': 'लंबित',
    'proposal.categoryLabel': 'श्रेणी',
    'proposal.costLabel': 'अनुमानित लागत',
    'proposal.wardLabel': 'वार्ड',
    'proposal.locationLabel': 'स्थान',
    'proposal.submittedOn': 'जमा करने की तिथि',
    'proposal.likes': 'पसंद',
    'proposal.comments': 'टिप्पणियाँ',
    'proposal.addComment': 'टिप्पणी लिखें...',
    'proposal.postComment': 'पोस्ट करें',
    'proposal.view': 'देखें',

    // Common
    'common.searchPlaceholder': 'प्रस्ताव खोजें...',
    'common.filter': 'फ़िल्टर',
    'common.popular': 'लोकप्रिय',
    'common.recent': 'हाल के',
    'common.comments': 'टिप्पणियाँ',
    'common.loading': 'लोड हो रहा है...',
    'common.save': 'सहेजें',
    'common.cancel': 'रद्द करें',
    'common.submit': 'जमा करें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.view': 'देखें',
    'common.close': 'बंद करें',
    // परियोजना ट्रैकिंग पेज
'projects.title': 'परियोजना ट्रैकिंग',
'projects.subtitle': 'स्वीकृत सामुदायिक परियोजनाओं की प्रगति की निगरानी करें',
'projects.searchPlaceholder': 'परियोजना खोजें...',
'projects.filterWard': 'वार्ड के अनुसार फ़िल्टर करें',
'projects.filterStatus': 'स्थिति के अनुसार फ़िल्टर करें',
'projects.allWards': 'सभी वार्ड',
'projects.allProjects': 'सभी परियोजनाएँ',
'projects.ongoing': 'चालू',
'projects.completed': 'पूर्ण',
'projects.noProjectsTitle': 'कोई परियोजना नहीं मिली',
'projects.noProjectsSubtitle': 'कृपया अपनी खोज या फ़िल्टर समायोजित करें',

// कार्ड लेबल
'projects.location': 'स्थान',
'projects.contractor': 'ठेकेदार',
'projects.progress': 'प्रगति',
'projects.commentPlaceholder': 'टिप्पणी लिखें...',
'projects.postComment': 'पोस्ट करें',
'projects.viewDetails': 'विवरण देखें',

// परियोजना की स्थिति
'projects.status.completed': 'पूर्ण',
'projects.status.underConstruction': 'निर्माणाधीन',
'projects.status.tendering': 'निविदा प्रक्रिया में',
'projects.status.fundReleased': 'फंड जारी किया गया',

// संवाद टैब
'projects.tab.overview': 'सारांश',
'projects.tab.timeline': 'समयरेखा',
'projects.tab.gallery': 'गैलरी',
'projects.tab.reviews': 'समीक्षाएँ',

// सारांश टैब
'projects.details.title': 'परियोजना विवरण',
'projects.details.ward': 'वार्ड',
'projects.details.status': 'स्थिति',
'projects.details.budget': 'बजट',
'projects.details.spent': 'खर्च किया गया',
'projects.details.contractor': 'ठेकेदार',
'projects.details.progress': 'प्रगति',
'projects.details.description': 'विवरण',
'projects.progressCompleted': 'पूर्ण हुआ',

// समयरेखा टैब
'projects.timeline.title': 'परियोजना समयरेखा',

// गैलरी टैब
'projects.gallery.title': 'परियोजना गैलरी',

// समीक्षा टैब
'projects.reviews.title': 'नागरिक समीक्षाएँ',
'projects.reviews.noReviews': 'अभी तक कोई समीक्षा नहीं',
'projects.reviews.likes': 'पसंद',

// सामान्य
'common.view': 'देखें',
'common.post': 'पोस्ट करें',
'common.search': 'खोजें',
'common.filter': 'फ़िल्टर',
'common.comment': 'टिप्पणी',
'common.submit': 'जमा करें',
'common.cancel': 'रद्द करें',
'common.close': 'बंद करें',

// शिकायत पृष्ठ
  "complaints.title": "नागरिक शिकायतें",
  "complaints.subtitle": "समस्याएँ दर्ज करें और उनके समाधान की स्थिति देखें",
  "complaints.lodgeComplaint": "शिकायत दर्ज करें",
  "complaints.newComplaint": "नई शिकायत दर्ज करें",
  "complaints.complaintHeading": "शिकायत का शीर्षक",
  "complaints.category": "श्रेणी",
  "complaints.selectCategory": "श्रेणी चुनें",
  "complaints.description": "विवरण",
  "complaints.location": "स्थान",
  "complaints.wardNumber": "वार्ड नंबर",
  "complaints.priority": "प्राथमिकता",
  "complaints.selectPriority": "प्राथमिकता चुनें",
  "complaints.photoEvidence": "फोटो सबूत",
  "complaints.takePhoto": "कैमरे से फोटो लें",
  "complaints.clickToOpenCamera": "कैमरा खोलने के लिए क्लिक करें",
  "complaints.submitComplaint": "शिकायत सबमिट करें",
  "complaints.cancel": "रद्द करें",
  "complaints.submitting": "सबमिट किया जा रहा है...",
  "complaints.successMessage": "शिकायत सफलतापूर्वक दर्ज की गई!",
  "complaints.errorMessage": "शिकायत दर्ज करने में त्रुटि हुई। कृपया पुनः प्रयास करें।",
  "complaints.fillAllFields": "कृपया सभी फ़ील्ड भरें।",
  "complaints.filters": "फ़िल्टर",
  "complaints.searchPlaceholder": "शिकायत खोजें...",
  "complaints.filterCategory": "श्रेणी के अनुसार फ़िल्टर करें",
  "complaints.allCategories": "सभी श्रेणियाँ",
  "complaints.viewDetails": "विवरण देखें",
  "complaints.submittedBy": "द्वारा दर्ज की गई",
  "complaints.noComplaintsTitle": "कोई शिकायत नहीं मिली",
  "complaints.noComplaintsDesc": "अपनी खोज या फ़िल्टर बदलकर देखें",
  "complaints.status.resolved": "सुलझाई गई",
  "complaints.status.inProgress": "प्रगति पर है",
  "complaints.status.underInvestigation": "जांच के अधीन",
  "complaints.priority.high": "उच्च",
  "complaints.priority.medium": "मध्यम",
  "complaints.priority.low": "निम्न",

  },
  cg: {
    // Header
    'header.janBudget': 'जनबजट',
    'header.subtitle': 'जनबजट - जनता के बजट',
    'header.home': 'घर',
    'header.proposals': 'सुझाव',
    'header.voting': 'भोटिंग',
    'header.projects': 'परियोजना',
    'header.complaints': 'शिकायत',
    'header.dashboard': 'डैशबोर्ड',
    'header.info': 'जानकारी',
    'header.profile': 'प्रोफाइल',
    'header.login': 'लॉग इन',
    'header.signup': 'साइन अप',
    'header.logout': 'लॉग आउट',
  
    // Homepage
    'homepage.hero.title': 'नागरिक मन ल सशक्त बनावत, संग संग बनावत',
    'homepage.hero.subtitle': 'अपने सहर के बजट म भाग लेवव अउ मिलके बने बढ़िया समाज',
    'homepage.hero.submitProposal': 'सुझाव भेजव',
    'homepage.hero.voteNow': 'अबे भोट देवव',
    'homepage.hero.trackProjects': 'परियोजना ल देखव',
    'homepage.stats.activeCitizens': 'सक्रिय नागरिक',
    'homepage.stats.totalBudget': 'कुल बजट',
    'homepage.stats.completedProjects': 'पूरा परियोजना',
    'homepage.stats.proposalsSubmitted': 'जमा करे सुझाव',
    'homepage.wardBudget.title': 'वार्ड बजट ओवरव्यू',
    'homepage.wardBudget.subtitle': 'हर वार्ड म बजट अउ परियोजना के स्थिति देखव',
    'homepage.wardBudget.budgetAllocated': 'बंटा बजट',
    'homepage.wardBudget.ongoing': 'चालत हावे',
    'homepage.wardBudget.completed': 'पूरा होगे',
    'homepage.wardBudget.viewDetails': 'विवरन देखव',
    'homepage.news.title': 'समाचार अउ अपडेट',
    'homepage.news.subtitle': 'नवा जानकारी ल देखव',
    'homepage.quickActions.title': 'जल्दी काम',
    'homepage.quickActions.subtitle': 'इन काम म अपन सुरुआत करव',
    'homepage.quickActions.submitNew': 'नवा सुझाव भेजव',
    'homepage.quickActions.submitDesc': 'समाज के विकास बर अपन विचार बतावव',
    'homepage.quickActions.getStarted': 'सुरू करव',
    'homepage.quickActions.vote': 'सुझाव म भोट देवव',
    'homepage.quickActions.voteDesc': 'कऊन परियोजना ल फंड मिलही, तय करव',
    'homepage.quickActions.startVoting': 'भोटिंग सुरू करव',
    'homepage.quickActions.track': 'परियोजना ल देखव',
    'homepage.quickActions.trackDesc': 'मंजूर परियोजना के काम ल देखव',
    'homepage.quickActions.viewProjects': 'परियोजना देखव',
  
    // Voting Page
    'voting.title': 'भोटिंग चरण',
    'voting.subtitle': 'हर वार्ड म अपन पसंद के परियोजना बर भोट देवव',
    'voting.alert': 'Q2 बजट बंटवारा बर भोटिंग खुले हावे। समय खतम होए के पहिली अपन भोट जरूर देवव!',
    'voting.selectWard': 'वार्ड चुनव',
    'voting.totalVoters': 'कुल मतदाता',
    'voting.votesCast': 'डाले गे भोट',
    'voting.participation': 'भागीदारी',
    'voting.timeLeft': 'बाकी समय',
    'voting.votingProgress': 'भोटिंग प्रगति',
    'voting.castYourVote': 'अपन भोट देवव',
    'voting.selectOne': 'एक सुझाव चुनव जऊन ल आप फंड करना चाहथव',
    'voting.submitVote': 'भोट भेजव',
    'voting.thankYou': 'भोट करे बर धन्यवाद! अपन भोट सफलतापूर्वक दर्ज होगे हावे।',
    'voting.voteAgain': 'फेर भोट देवव (डेमो)',
    'voting.currentResults': 'अभी के नतीजा',
    'voting.liveResults': 'लाइव भोटिंग नतीजा (भोट गुमनाम हावे)',
    'voting.votingInfo': 'भोटिंग जानकारी',
    'voting.anonymous': '• सबो भोट गुमनाम अउ सुरक्षित हावे',
    'voting.realTime': '• नतीजा रियल टाइम म अपडेट होथे',
    'voting.mostVotes': '• जऊन सुझाव म जियादा भोट होही, उही फंड होही',
    'voting.closesIn': '• भोटिंग खतम होथे',
  
    // Common
    'common.votes': 'भोट',
    'common.loading': 'लोड होत हावे...',
    'common.save': 'सेव करव',
    'common.cancel': 'रद्द करव',
    'common.submit': 'भेजव',
    'common.edit': 'संपादन करव',
    'common.delete': 'हटावव',
    'common.view': 'देखव',
    'common.close': 'बंद करव',

        // डैशबोर्ड पेज
    'dashboard.title': 'पारदर्शिता डैशबोर्ड',
    'dashboard.subtitle': 'बजट बाँटई अऊ नागरिक के भागेदारी के जिंदा जानकारी',
    'dashboard.exportData': 'डेटा निकारव',
    'dashboard.liveView': 'लाइव देखव',

    // KPI कार्ड
    'dashboard.kpi.totalBudget': 'कुल बजट',
    'dashboard.kpi.activeCitizens': 'सक्रिय नागरिक मन',
    'dashboard.kpi.proposalsThisMonth': 'ए महीना के प्रस्ताव',
    'dashboard.kpi.votingParticipation': 'मतदान भागेदारी',

    // टैब्स
    'dashboard.tabs.budget': 'बजट के जाँच',
    'dashboard.tabs.participation': 'नागरिक भागेदारी',
    'dashboard.tabs.projects': 'परियोजना के स्थिति',
    'dashboard.tabs.transparency': 'वित्तीय पारदर्शिता',

    // बजट टैब
    'dashboard.budget.wardWiseTitle': 'वार्ड अनुसार बजट बाँटई',
    'dashboard.budget.wardWiseDesc': 'हर वार्ड मं कइसे बजट बाँट गीस अऊ खर्च होइस (लाख मं)',
    'dashboard.budget.categoryTitle': 'श्रेणी के हिसाब ले खर्च',
    'dashboard.budget.categoryDesc': 'अलग-अलग क्षेत्र मं बजट के बाँटई',
    'dashboard.budget.monthlyTrendsTitle': 'महिना अनुसार नागरिक काम-काज के रुख',
    'dashboard.budget.monthlyTrendsDesc': 'प्रस्ताव, वोट अऊ परियोजना के मंजूरी के समय-संग देखव',

    // भागेदारी टैब
    'dashboard.participation.votingTitle': 'वार्ड अनुसार मतदान भागेदारी',
    'dashboard.participation.votingDesc': 'कितना पंजीकृत नागरिक मन वोट डारे',
    'dashboard.participation.detailsTitle': 'विस्तार मं भागेदारी के आँकड़ा',
    'dashboard.participation.engagementTitle': 'समय के संग नागरिक भागेदारी',
    'dashboard.participation.engagementDesc': 'हर महिना सक्रिय भागीदार मन के गिनती',

    // परियोजना टैब
    'dashboard.projects.statusTitle': 'परियोजना के स्थिति के झलक',
    'dashboard.projects.statusDesc': 'सब्बो परियोजना के हाल के स्थिति',
    'dashboard.projects.metricsTitle': 'परियोजना के कामगिरी के आँकड़ा',
    'dashboard.projects.totalProjects': 'कुल परियोजना',
    'dashboard.projects.onTime': 'समय मं पूरा होइस',
    'dashboard.projects.underBudget': 'बजट के भीतर',

    // पारदर्शिता टैब
    'dashboard.transparency.transactionsTitle': 'नवां वित्तीय लेन-देन',
    'dashboard.transparency.transactionsDesc': 'सभी बजट जारी अऊ भुगतान के खुला जानकारी',
    'dashboard.transparency.project': 'परियोजना',
    'dashboard.transparency.amount': 'राशि',
    'dashboard.transparency.vendor': 'सप्लायर / ठेकेदार',
    'dashboard.transparency.date': 'तारीख',
    'dashboard.transparency.status': 'स्थिति',

    // बजट उपयोग कार्ड
    'dashboard.transparency.utilizedTitle': 'खर्च होइस बजट',
    'dashboard.transparency.utilizedDesc': 'कुल बजट के 64%',
    'dashboard.transparency.pendingTitle': 'बाकी रिलीज़',
    'dashboard.transparency.pendingDesc': 'कुल बजट के 16%',
    'dashboard.transparency.balanceTitle': 'बचे रहिस रकम',
    'dashboard.transparency.balanceDesc': 'कुल बजट के 20%',

        // Proposals Page (छत्तीसगढ़ी)
    'proposals.title': 'गांव-समाज के मनखे के परोजल',
    'proposals.subtitle': 'आप मन अपन इलाका बर परोजल भर सकथव अउ दूसर परोजल देख सकथव',
    'proposals.submitProposal': 'परोजल जमा करव',
    'proposals.submitNew': 'नवा परोजल जमा करव',
    'proposals.projectTitle': 'परोजल के नांव',
    'proposals.enterTitle': 'एक बढ़िया अउ साफ-सुथरा नांव लिखव',
    'proposals.description': 'बिवरन',
    'proposals.enterDescription': 'परोजल बर पूरा जानकारी देव — येकर फायदा, काम करे के तरीका आदि बतावव',
    'proposals.estimatedCost': 'अंदाजित खर्चा (₹)',
    'proposals.enterCost': 'परोजल के खर्चा लिखव',
    'proposals.ward': 'वार्ड',
    'proposals.selectWard': 'वार्ड चुनव',
    'proposals.location': 'ठीक ठिकाना',
    'proposals.enterLocation': 'गली, मुहल्ला, चिन्ह या इलाका के नांव लिखव',
    'proposals.category': 'श्रेणी',
    'proposals.selectCategory': 'श्रेणी चुनव',
    'proposals.supportingDocuments': 'सहायक कागज या फोटू',
    'proposals.uploadHint': 'क्लिक करव या फाइल ला खींच के इहां छोड़व',
    'proposals.uploadNote': 'PNG, JPG, PDF 10MB तक',
    'proposals.cancel': 'रद्द करव',
    'proposals.submit': 'परोजल जमा करव',
    'proposals.submitting': 'जमा होत हे...',
    'proposals.requiredFieldsAlert': 'सब फील्ड भर केच जमा करव',
    'proposals.fetchError': 'परोजल ल लाने मं गलती होगे।',
    'proposals.submitSuccess': 'परोजल सफ़लता से जमा होगे!',
    'proposals.submitError': 'परोजल जमा करे मं गलती होगे।',
    'proposals.noProposalsFound': 'कोनो परोजल नइ मिलिस',
    'proposals.tryAdjusting': 'अपन खोज या फिल्टर बदला के फेर कोशिश करव',
    'proposals.filterByWard': 'वार्ड के हिसाब ले छांटव',
    'proposals.allWards': 'सब्बो वार्ड',
    'proposals.sortBy': 'क्रम मं लगावव',
    'proposals.sort.popular': 'जियादा पसंद किए गे',
    'proposals.sort.recent': 'नवा जोड़े गे',
    'proposals.sort.comments': 'जियादा टिप्पणी वाले',

    // Proposal Card
    'proposal.status.approved': 'मंजूर होगे',
    'proposal.status.votingOpen': 'भोटिंग खुला हे',
    'proposal.status.underReview': 'जांच मं हे',
    'proposal.status.default': 'बाकी हे',
    'proposal.categoryLabel': 'श्रेणी',
    'proposal.costLabel': 'अंदाजित खर्चा',
    'proposal.wardLabel': 'वार्ड',
    'proposal.locationLabel': 'ठिकाना',
    'proposal.submittedOn': 'जमा करे के तारीख',
    'proposal.likes': 'पसंद',
    'proposal.comments': 'टिप्पणी',
    'proposal.addComment': 'टिप्पणी लिखव...',
    'proposal.postComment': 'पोस्ट करव',
    'proposal.view': 'देखव',

    // Common
    'common.searchPlaceholder': 'परोजल खोजव...',
    'common.filter': 'फिल्टर',
    'common.popular': 'लोकप्रिय',
    'common.recent': 'नवा',
    'common.comments': 'टिप्पणी',
    'common.loading': 'लोड होत हे...',
    'common.save': 'सहेजव',
    'common.cancel': 'रद्द करव',
    'common.submit': 'जमा करव',
    'common.edit': 'सुधारव',
    'common.delete': 'हटावव',
    'common.view': 'देखव',
    'common.close': 'बंद करव',

    // परोजेक्ट ट्रैकिंग पेज
'projects.title': 'परोजेक्ट ट्रैकिंग',
'projects.subtitle': 'मंजूर करे गे गॉंव के परोजेक्ट मन के काम के देख-रेख करव',
'projects.searchPlaceholder': 'परोजेक्ट खोजव...',
'projects.filterWard': 'वार्ड के हिसाब ले छानव',
'projects.filterStatus': 'स्थिति के हिसाब ले छानव',
'projects.allWards': 'सब्बो वार्ड',
'projects.allProjects': 'सब्बो परोजेक्ट',
'projects.ongoing': 'चालत हे',
'projects.completed': 'पूरा हो गे',
'projects.noProjectsTitle': 'कोनो परोजेक्ट नई मिलिस',
'projects.noProjectsSubtitle': 'अपन खोज या फिल्टर बदल के देखव',

// कार्ड लेबल
'projects.location': 'जगहा',
'projects.contractor': 'ठेकेदार',
'projects.progress': 'काम के हालचाल',
'projects.commentPlaceholder': 'कमेंट लिखव...',
'projects.postComment': 'पोस्ट करव',
'projects.viewDetails': 'पूरा बिवरन देखव',

// परोजेक्ट स्थिति
'projects.status.completed': 'पूरा हो गे',
'projects.status.underConstruction': 'बनत हे',
'projects.status.tendering': 'टेंडर मं हे',
'projects.status.fundReleased': 'पइसा जारी हो गे',

// टैब
'projects.tab.overview': 'सारांश',
'projects.tab.timeline': 'समय रेखा',
'projects.tab.gallery': 'गैलरी',
'projects.tab.reviews': 'जनता के राय',

// सारांश टैब
'projects.details.title': 'परोजेक्ट के बिवरन',
'projects.details.ward': 'वार्ड',
'projects.details.status': 'स्थिति',
'projects.details.budget': 'बजट',
'projects.details.spent': 'खर्च करे गे',
'projects.details.contractor': 'ठेकेदार',
'projects.details.progress': 'काम के हालचाल',
'projects.details.description': 'बिवरन',
'projects.progressCompleted': 'पूरा हो गे',

// समय रेखा टैब
'projects.timeline.title': 'परोजेक्ट समय रेखा',

// गैलरी टैब
'projects.gallery.title': 'परोजेक्ट गैलरी',

// समीक्षा टैब
'projects.reviews.title': 'जनता के राय',
'projects.reviews.noReviews': 'अभी तक कोनो राय नई आये',
'projects.reviews.likes': 'पसंद',

// सामान्य
'common.view': 'देखव',
'common.post': 'पोस्ट करव',
'common.search': 'खोजव',
'common.filter': 'छानव',
'common.comment': 'कमेंट',
'common.submit': 'भेजव',
'common.cancel': 'रद्द करव',
'common.close': 'बंद करव',

// सिकायत पेज
  "complaints.title": "नागरिक मन के सिकायत",
  "complaints.subtitle": "अपन समस्या बतावव अउ ओकर हालचाल देखव",
  "complaints.lodgeComplaint": "सिकायत दर्ज करव",
  "complaints.newComplaint": "नवा सिकायत दर्ज करव",
  "complaints.complaintHeading": "सिकायत के सिरनाव",
  "complaints.category": "श्रेणी",
  "complaints.selectCategory": "श्रेणी चुनव",
  "complaints.description": "बिबरन",
  "complaints.location": "जगह",
  "complaints.wardNumber": "वार्ड नंबर",
  "complaints.priority": "पहिलीता",
  "complaints.selectPriority": "पहिलीता चुनव",
  "complaints.photoEvidence": "फोटो सबूत",
  "complaints.takePhoto": "कैमरा ले फोटो खींचव",
  "complaints.clickToOpenCamera": "कैमरा खोले बर क्लिक करव",
  "complaints.submitComplaint": "सिकायत सबमिट करव",
  "complaints.cancel": "रद्द करव",
  "complaints.submitting": "भेजा जात हे...",
  "complaints.successMessage": "सिकायत सफ़लतापूर्वक दर्ज होगे!",
  "complaints.errorMessage": "सिकायत भेजे मं गलती होगे, फेर कोसिस करव।",
  "complaints.fillAllFields": "कृपा करके सब फील्ड भरव।",
  "complaints.filters": "फ़िल्टर",
  "complaints.searchPlaceholder": "सिकायत खोजव...",
  "complaints.filterCategory": "श्रेणी से फिल्टर करव",
  "complaints.allCategories": "सब्बो श्रेणी",
  "complaints.viewDetails": "बिस्तार देखव",
  "complaints.submittedBy": "द्वारा भेजे गे हे",
  "complaints.noComplaintsTitle": "कोनो सिकायत नई मिलिस",
  "complaints.noComplaintsDesc": "खोज बदला या फिल्टर लगावव",
  "complaints.status.resolved": "सुलझा गे",
  "complaints.status.inProgress": "काम चलत हे",
  "complaints.status.underInvestigation": "जांच मं हे",
  "complaints.priority.high": "जादा",
  "complaints.priority.medium": "मध्यम",
  "complaints.priority.low": "कम",

  },
  
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}