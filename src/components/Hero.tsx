import { Globe, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center mb-6">
          <Globe className="w-16 h-16 text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold text-center mb-4">
          Offline API
        </h1>
        <p className="text-xl text-center text-slate-300 mb-2">
          InsurGateway Platform
        </p>
        <div className="flex items-center justify-center gap-2 text-blue-400">
          <Zap className="w-5 h-5" />
          <p className="text-lg">Client-Independent External API Services</p>
        </div>
        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto leading-relaxed">
          Offline uygulaması süreçlerinin API teknolojileriyle client bağımsız olarak dış kaynaklara açılabilmesini hedefleyen kapsamlı entegrasyon çözümü.
        </p>
      </div>
    </div>
  );
}
