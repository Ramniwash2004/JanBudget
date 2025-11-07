import { createContext, useContext, useState, ReactNode } from 'react';

// type Language = 'en' | 'hi';
type Language = 'en' | 'hi' | 'cg';


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
    'common.close': 'Close'
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
    'common.close': 'बंद करें'
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
    'common.close': 'बंद करव'
  }
  
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