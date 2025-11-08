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

  // Check auth status and user type
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('userType');
      const userData = localStorage.getItem('userData');
      
      setIsLoggedIn(!!token);
      setIsAdmin(userType === 'admin');
      
      if (userData) {
        try {
          const user = JSON.parse(userData);
          setUserName(user.name || 'User');
        } catch (e) {
          setUserName('User');
        }
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
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
    localStorage.removeItem('userData');
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

  // Admin-only navigation items
  const adminNavigation = isAdmin
    ? [
        { id: 'add-voting-project', label: 'Add Voting Project', icon: Plus },
        { id: 'track-projects', label: 'Track Projects', icon: Activity },
      ]
    : [];

  // Auth navigation
  const authNavigation = isLoggedIn
    ? [{ id: 'profile', label: t('header.profile'), icon: User }]
    : [
        { id: 'login', label: t('header.login'), icon: LogIn },
        { id: 'signup', label: t('header.signup'), icon: UserPlus },
      ];

  const navigationItems = [...baseNavigation, ...adminNavigation, ...authNavigation];

  const handleNavigate = (id: string) => {
    if (id === 'logout') {
      handleLogout();
    } else {
      onNavigate(id);
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
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}

            {/* Admin Panel Dropdown */}
            {isAdmin && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 border-2 border-purple-200 hover:bg-purple-50"
                  >
                    <Shield className="w-4 h-4 text-purple-600" />
                    <span className="font-medium text-purple-600">Admin Panel</span>
                    <ChevronDown className="w-4 h-4 text-purple-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-600" />
                    <span>Administration</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleNavigate('manage-proposals')}
                    className="cursor-pointer"
                  >
                    <ClipboardList className="w-4 h-4 mr-2" />
                    Manage Proposals
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigate('manage-complaints')}
                    className="cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Manage Complaints
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigate('manage-users')}
                    className="cursor-pointer"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Manage Users
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigate('settings')}
                    className="cursor-pointer"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
            {/* Admin Badge */}
            {isAdmin && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-purple-100 border border-purple-300 rounded-full">
                <Shield className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-bold text-purple-700">Admin</span>
              </div>
            )}

            {/* Language Toggle */}
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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
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
                      <button
                        onClick={() => handleNavigate('settings')}
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                      >
                        <Settings className="w-4 h-4" />
                        <span className="font-medium">Settings</span>
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