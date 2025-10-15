import { useState } from 'react';
import { ChevronRight, FileText, Settings, GitBranch, Bell, Shield, TestTube, CheckCircle2, Clock, Users } from 'lucide-react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import DevelopmentNeeds from './components/DevelopmentNeeds';
import IntegrationProcess from './components/IntegrationProcess';
import RecommendedSteps from './components/RecommendedSteps';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'development':
        return <DevelopmentNeeds />;
      case 'integration':
        return <IntegrationProcess />;
      case 'steps':
        return <RecommendedSteps />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Hero />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderSection()}
      </main>
      <footer className="bg-slate-900 text-slate-300 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">InsurGateway Platform - Offline API Documentation</p>
          <p className="text-xs mt-2 text-slate-400">Client-Independent External API Services</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
