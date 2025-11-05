import { useState } from 'react';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { ProposalsPage } from './components/ProposalsPage';
import { VotingPage } from './components/VotingPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ComplaintsPage } from './components/ComplaintsPage';
import { DashboardPage } from './components/DashboardPage';
import { ProfilePage } from './components/ProfilePage';
import { LanguageProvider } from './components/LanguageContext';
import {InfoPage} from './components/InfoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'proposals':
        return <ProposalsPage />;
      case 'voting':
        return <VotingPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'complaints':
        return <ComplaintsPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'info':
        return <InfoPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        {renderPage()}
      </div>
    </LanguageProvider>
  );
}