import { createContext, useContext, useState, ReactNode } from 'react';

// type Language = 'en' | 'hi';
// type Language = 'en' | 'hi' | 'cg';
export type Language = 'en' | 'hi' | 'cg' | 'gon' | 'hlb' | 'pa';


interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
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
  },
  gon: {
  
    // Voting Page
    'voting.title': 'भोटिंग चालू हावे',
    'voting.subtitle': 'अपन वार्ड म अपन पसंद के काम बर भोट देव',
    'voting.alert': 'Q2 बजट बर भोटिंग खुल गे हावे। समय खतम होए के पहिली भोट देव!',
    'voting.selectWard': 'वार्ड चुनव',
    'voting.totalVoters': 'कुल मतदाता',
    'voting.votesCast': 'डाले गे भोट',
    'voting.participation': 'भागीदारी',
    'voting.timeLeft': 'बाकी समय',
    'voting.votingProgress': 'भोटिंग प्रगति',
    'voting.castYourVote': 'भोट देव',
    'voting.selectOne': 'एक सुझाव चुनव जऊन ल फंड करना चाहथव',
    'voting.submitVote': 'भोट भेजव',
    'voting.thankYou': 'भोट करे बर धन्यवाद!',
    'voting.voteAgain': 'फेर भोट देव (डेमो)',
    'voting.currentResults': 'अभी के नतीजा',
    'voting.liveResults': 'लाइव नतीजा (गुमनाम)',
    'voting.votingInfo': 'भोटिंग जानकारी',
    'voting.anonymous': '• सब भोट गुमनाम हावे',
    'voting.realTime': '• नतीजा रियल टाइम म अपडेट होथे',
    'voting.mostVotes': '• जियादा भोट वाला काम फंड होही',
    'voting.closesIn': '• भोटिंग बंद होथे',
  
    // Common
    'common.votes': 'भोट',
    'common.loading': 'लोड होत हावे...',
    'common.save': 'सेव करव',
    'common.cancel': 'रद्द करव',
    'common.submit': 'भेजव',
    'common.edit': 'बदलव',
    'common.delete': 'हटावव',
    'common.view': 'देखव',
    'common.close': 'बंद करव'
  },

  hlb: {
    // Voting Page
    'voting.title': 'भोटिंग चालू हावे',
    'voting.subtitle': 'अपन पसंद के काम बर भोट देवव',
    'voting.alert': 'Q2 बजट भोटिंग चालू हावे, जल्दी भोट देवव!',
    'voting.selectWard': 'वार्ड चुनव',
    'voting.totalVoters': 'कुल मतदाता',
    'voting.votesCast': 'डाले गे भोट',
    'voting.participation': 'भागीदारी',
    'voting.timeLeft': 'बाकी समय',
    'voting.votingProgress': 'भोटिंग प्रगति',
    'voting.castYourVote': 'भोट देवव',
    'voting.selectOne': 'एक सुझाव चुनव जऊन ला फंड करना चाहथव',
    'voting.submitVote': 'भोट भेजव',
    'voting.thankYou': 'भोट करे बर धन्यवाद!',
    'voting.voteAgain': 'फेर भोट देवव (डेमो)',
    'voting.currentResults': 'अभी के नतीजा',
    'voting.liveResults': 'लाइव नतीजा (गुमनाम)',
    'voting.votingInfo': 'भोटिंग जानकारी',
    'voting.anonymous': '• सब भोट गुमनाम हावे',
    'voting.realTime': '• नतीजा रियल टाइम म अपडेट होथे',
    'voting.mostVotes': '• जियादा भोट वाला काम फंड होही',
    'voting.closesIn': '• भोटिंग बंद होथे',
  
    // Common
    'common.votes': 'भोट',
    'common.loading': 'लोड होत हावे...',
    'common.save': 'सेव करव',
    'common.cancel': 'रद्द करव',
    'common.submit': 'भेजव',
    'common.edit': 'बदलव',
    'common.delete': 'हटावव',
    'common.view': 'देखव',
    'common.close': 'बंद करव'
  },
  pa: {
  
    // Voting Page
    'voting.title': 'ਸਕ੍ਰਿਆ ਵੋਟਿੰਗ ਚਰਣ',
    'voting.subtitle': 'ਹਰ ਵਾਰਡ ਵਿੱਚ ਆਪਣੇ ਮਨਪਸੰਦ ਪਰੋਜੈਕਟਾਂ ਲਈ ਵੋਟ ਕਰੋ',
    'voting.alert': 'Q2 ਬਜਟ ਲਈ ਵੋਟਿੰਗ ਖੁੱਲੀ ਹੈ। ਸਮਾਂ ਖ਼ਤਮ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੀ ਵੋਟ ਜ਼ਰੂਰ ਪਾਓ!',
    'voting.selectWard': 'ਵਾਰਡ ਚੁਣੋ',
    'voting.totalVoters': 'ਕੁੱਲ ਵੋਟਰ',
    'voting.votesCast': 'ਡਾਲੀਆਂ ਗਈਆਂ ਵੋਟਾਂ',
    'voting.participation': 'ਭਾਗੀਦਾਰੀ',
    'voting.timeLeft': 'ਬਚਿਆ ਸਮਾਂ',
    'voting.votingProgress': 'ਵੋਟਿੰਗ ਤਰੱਕੀ',
    'voting.castYourVote': 'ਆਪਣੀ ਵੋਟ ਪਾਓ',
    'voting.selectOne': 'ਇੱਕ ਪ੍ਰਸਤਾਵ ਚੁਣੋ ਜਿਸ ਨੂੰ ਤੁਸੀਂ ਫੰਡ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ',
    'voting.submitVote': 'ਵੋਟ ਭੇਜੋ',
    'voting.thankYou': 'ਵੋਟ ਕਰਨ ਲਈ ਧੰਨਵਾਦ! ਤੁਹਾਡੀ ਵੋਟ ਸਫਲਤਾਪੂਰਵਕ ਦਰਜ ਹੋ ਗਈ ਹੈ।',
    'voting.voteAgain': 'ਦੁਬਾਰਾ ਵੋਟ ਕਰੋ (ਡੈਮੋ)',
    'voting.currentResults': 'ਮੌਜੂਦਾ ਨਤੀਜੇ',
    'voting.liveResults': 'ਲਾਈਵ ਵੋਟਿੰਗ ਨਤੀਜੇ (ਵੋਟ ਗੁਮਨਾਮ ਹਨ)',
    'voting.votingInfo': 'ਵੋਟਿੰਗ ਜਾਣਕਾਰੀ',
    'voting.anonymous': '• ਸਾਰੀਆਂ ਵੋਟਾਂ ਗੁਮਨਾਮ ਅਤੇ ਸੁਰੱਖਿਅਤ ਹਨ',
    'voting.realTime': '• ਨਤੀਜੇ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਅੱਪਡੇਟ ਹੁੰਦੇ ਹਨ',
    'voting.mostVotes': '• ਸਭ ਤੋਂ ਵੱਧ ਵੋਟਾਂ ਵਾਲਾ ਪ੍ਰਸਤਾਵ ਫੰਡ ਕੀਤਾ ਜਾਵੇਗਾ',
    'voting.closesIn': '• ਵੋਟਿੰਗ ਖ਼ਤਮ ਹੁੰਦੀ ਹੈ',
  
    // Common
    'common.votes': 'ਵੋਟਾਂ',
    'common.loading': 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
    'common.save': 'ਸੇਵ ਕਰੋ',
    'common.cancel': 'ਰੱਦ ਕਰੋ',
    'common.submit': 'ਜਮ੍ਹਾਂ ਕਰੋ',
    'common.edit': 'ਸੋਧੋ',
    'common.delete': 'ਹਟਾਓ',
    'common.view': 'ਵੇਖੋ',
    'common.close': 'ਬੰਦ ਕਰੋ'
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

export function useLanguage2() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}