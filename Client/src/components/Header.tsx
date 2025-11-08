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
  Plus,
  Activity,
  Shield,
  ChevronDown,
  Settings,
  Users,
  ClipboardList,
  X,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useLanguage } from './LanguageContext';
import type { Language } from './LanguageContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState('');
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
const [isSheetOpen, setIsSheetOpen] = useState(false); 


  // Check auth status and user type
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      const adminToken = localStorage.getItem("admin-token");
      
      if (adminToken) {
    setIsLoggedIn(true);
    setIsAdmin(true);
  } else if (token) {
    setIsLoggedIn(true);
    setIsAdmin(false);
  } else {
    setIsLoggedIn(false);
    setIsAdmin(false);
  }
    };

    checkAuthStatus();
    window.addEventListener('authChange', checkAuthStatus);

    return () => {
      window.removeEventListener('authChange', checkAuthStatus);
    };
  }, []);

  const toggleLanguage = () => {
    const allLanguages: Language[] = ['en', 'hi', 'cg'];
    const currentIndex = allLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % allLanguages.length;
    setLanguage(allLanguages[nextIndex]);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin-token");
    window.dispatchEvent(new Event('authChange'));
    setIsLoggedIn(false);
    setIsAdmin(false);
    onNavigate('home');
  };

  // Base navigation for all users
  const baseNavigation = [
    { id: 'home', label: t('header.home'), icon: Home },
    { id: 'proposals', label: t('header.proposals'), icon: FileText },
    { id: 'voting', label: t('header.voting'), icon: Vote },
    { id: 'projects', label: t('header.projects'), icon: FolderOpen },
    { id: 'complaints', label: t('header.complaints'), icon: MessageSquare },
    { id: 'dashboard', label: t('header.dashboard'), icon: BarChart3 },
    { id: 'info', label: t('header.info'), icon: Info },
  ];


   const handleDropdownToggle = () => {
  setIsOpen((prev) => !prev);
  setIsMenuOpen(false); // close mobile menu if open
};
  const handleMobileMenuToggle = () => {
  setIsMenuOpen((prev) => !prev);
  setIsOpen(false); // close admin dropdown if open
};



  // Auth navigation
  const authNavigation = isLoggedIn
    ? [{ id: 'profile', label: t('header.profile'), icon: User }]
    : [
        { id: 'login', label: t('header.login'), icon: LogIn },
        { id: 'signup', label: t('header.signup'), icon: UserPlus },
      ];

  const navigationItems = [...baseNavigation, ...authNavigation];

  const handleNavigate = (id: string) => {
    if (id === 'logout') {
      handleLogout();
    } else {
      onNavigate(id);
      setIsMenuOpen(false);
      setIsOpen(false);
    }
  };

  const getLabel = () => {
    switch (language) {
      case 'en':
        return 'EN';
      case 'hi':
        return 'हिं';
      case 'cg':
        return 'छग';
      default:
        return 'EN';
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
          <nav className="hidden md:flex items-center space-x-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'bg-primary text-base'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}

            {/* Admin Panel Dropdown */}
            {isAdmin && (
  <div className="relative group">
    <Button
  onClick={handleDropdownToggle}
  className="flex items-center gap-2 border border-purple-300 bg-white text-purple-700 hover:bg-purple-50"
>
  <Shield className="w-4 h-4" />
  <span className="text-sm font-medium">Admin Panel</span>
  <ChevronDown
    className={`w-4 h-4 text-purple-600 transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
  />
</Button>


    {/* Dropdown Menu */}
    {isOpen && (
      <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <div className="px-4 py-2 border-b border-gray-100 font-semibold text-gray-700 flex items-center gap-2">
          <Shield className="w-4 h-4 text-purple-600" />
          Administration
        </div>

        <button
          onClick={() => handleNavigate("add-voting-project")}
          className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-gray-600" />
          <span>Add Voting Project</span>
        </button>

        <button
          onClick={() => handleNavigate("track-projects")}
          className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
        >
          <Activity className="w-4 h-4 text-gray-600" />
          <span>Track Projects</span>
        </button>

        <button
          onClick={() => handleNavigate("manage-proposals")}
          className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
        >
          <ClipboardList className="w-4 h-4 text-gray-600" />
          <span>Manage Proposals</span>
        </button>

        <button
          onClick={() => handleNavigate("manage-complaints")}
          className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 text-gray-600" />
          <span>Manage Complaints</span>
        </button>

      </div>
    )}
  </div>
)}


            {/* Logout Button for Logged-in Users */}
            {isLoggedIn && (
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center space-x-2 border-2 border-red-200 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 text-red-600" />
                <span className="font-medium text-red-600">{t('header.logout')}</span>
              </Button>
            )}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-2 border-2"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{getLabel()}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>

              <SheetTrigger asChild>
                <button onClick={handleMobileMenuToggle} className="md:hidden">
  {isMenuOpen ? <X /> : <Menu />}
</button>

              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border border-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block">
                        {t('header.janBudget')}
                      </span>
                      {isAdmin && (
                        <span className="text-xs text-purple-600 font-semibold">Admin Access</span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleLanguage}
                    className="flex items-center space-x-1"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{getLabel()}</span>
                  </Button>
                </div>

                {/* User Info */}
                {isLoggedIn && (
                  <div className="mb-6 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{userName}</p>
                        <p className="text-xs text-gray-600">
                          {isAdmin ? 'Administrator' : 'Citizen'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                          currentPage === item.id
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}

                  {/* Admin Panel in Mobile */}
                  {isAdmin && (
                    <>
                      <div className="pt-4 pb-2">
                        <div className="flex items-center gap-2 px-4 text-sm font-bold text-purple-600">
                          <Shield className="w-4 h-4" />
                          <span>Admin Panel</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNavigate('manage-proposals')}
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                      >
                        <ClipboardList className="w-5 h-5" />
                        <span className="font-medium">Manage Proposals</span>
                      </button>
                      <button
                        onClick={() => handleNavigate('manage-complaints')}
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span className="font-medium">Manage Complaints</span>
                      </button>
                      <button
                        onClick={() => handleNavigate('manage-users')}
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                      >
                        <Users className="w-5 h-5" />
                        <span className="font-medium">Manage Users</span>
                      </button>
                      
                    </>
                  )}

                  {/* Logout in Mobile */}
                  {isLoggedIn && (
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all mt-4 border-t-2 pt-6"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">{t('header.logout')}</span>
                    </button>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}