import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import {
  Home,
  FileText,
  Vote,
  FolderOpen,
  MessageSquare,
  BarChart3,
  User,
  Menu,
  Info,
  Globe,
  LogIn,
  UserPlus,
  LogOut,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useLanguage } from './LanguageContext';
import type { Language } from './LanguageContext'

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // check if token exists in localStorage & update when login/logout happens
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkAuthStatus(); 
    window.addEventListener('authChange', checkAuthStatus); // listen for changes

    return () => {
      window.removeEventListener('authChange', checkAuthStatus);
    };
  }, []);

  // const toggleLanguage = () => {
  //   setLanguage(language === 'en' ? 'hi' : 'en');
  // };

  // const toggleLanguage = () => {
  //   if (language === "en") setLanguage("hi");
  //   else if (language === "hi") setLanguage("cg");
  //   else setLanguage("en");
  // };

  const toggleLanguage = () => {
    const allLanguages: Language[] = ["en", "hi", "cg", "gon", "hlb", "pa"];
    const currentIndex = allLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % allLanguages.length;
    setLanguage(allLanguages[nextIndex]);
  };
  

  // const newLang = () => {
  //   switch (language) {
  //     case "hi":
  //       setLanguage("en")
  //       break;
  //     case "en":
  //       setLanguage("cg")
  //       break;
  //     case "cg":
  //       setLanguage("hi")
  //       break;
  //     default:
  //       setLanguage("en")
  //       break;
  //   }
  // }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('authChange')); 
    setIsLoggedIn(false);
    onNavigate('home');
  };

  const baseNavigation = [
    { id: 'home', label: t('header.home'), icon: Home },
    { id: 'proposals', label: t('header.proposals'), icon: FileText },
    { id: 'voting', label: t('header.voting'), icon: Vote },
    { id: 'projects', label: t('header.projects'), icon: FolderOpen },
    { id: 'complaints', label: t('header.complaints'), icon: MessageSquare },
    { id: 'dashboard', label: t('header.dashboard'), icon: BarChart3 },
    { id: 'info', label: t('header.info'), icon: Info },
  ];

  // Show login/signup or profile/logout
  const authNavigation = isLoggedIn
    ? [
        { id: 'profile', label: t('header.profile'), icon: User },
        { id: 'logout', label: t('header.logout'), icon: LogOut },
      ]
    : [
        { id: 'login', label: t('header.login'), icon: LogIn },
        { id: 'signup', label: t('header.signup'), icon: UserPlus },
      ];

  const navigationItems = [...baseNavigation, ...authNavigation];

  // Handles logout
  const handleNavigate = (id: string) => {
    if (id === 'logout') {
      handleLogout();
    } else {
      onNavigate(id);
      setIsOpen(false);
    }
  };

  // const getLabel = () => {
  //   switch (language) {
  //     case "en": return "हिं";  // Hindi short label
  //     case "hi": return "छग";  // Chhattisgarhi short label
  //     case "cg": return "EN";  // English short label
  //     default: return "EN";
  //   }
  // };

  // const getLabel = () => {
  //   switch (language) {
  //     case 'en': return 'हिं';
  //     case 'hi': return 'छग';
  //     case 'cg': return 'गों';
  //     case 'gon': return 'हलबि';
  //     case 'hlb': return 'ਪੰ';
  //     case 'pa': return 'EN';
  //     default: return 'EN';
  //   }
  // };

  const getLabel = () => {
    switch (language) {
      case 'en':  return 'EN';        // English
      case 'hi':  return 'हिं';       // Hindi
      case 'cg':  return 'छग';        // Chhattisgarhi
      case 'gon': return 'गों';       // Gondi
      case 'hlb': return 'हलबि';     // Halbi
      case 'pa':  return 'ਪੰ';       // Punjabi
      default:    return 'EN';
    }
  };
  

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full relative">
                <div className="absolute inset-1 border border-white rounded-full">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {t('header.janBudget')}
              </h1>
              <p className="text-xs text-gray-600">{t('header.subtitle')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              {/* <span>{language === 'en' ? 'हिं' : 'EN'}</span> */}
              {/* <span>{getLabel()}</ span> */}
              <span>{getLabel()}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border border-white rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-900">
                      {t('header.janBudget')}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleLanguage}
                    className="flex items-center space-x-1"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'en' ? 'हिं' : 'EN'}</span>
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          currentPage === item.id
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
