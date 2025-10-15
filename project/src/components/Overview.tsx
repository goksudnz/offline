import { Target, TrendingUp } from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Genel Bakış</h2>
        </div>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          InsurGateway platformunun bir ürünü olan Offline uygulaması süreçlerinin API teknolojileriyle
          client bağımsız olarak dış kaynaklara açılabilmesi hedeflenmektedir.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Bu hedefleme doğrultusunda Client uygulamayla birebir entegre çalışan Offline uygulamasında
          kullanılan servislerin API'ya taşınması için gerekli olan ihtiyaçlar belirlenmeye çalışılmıştır.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Geliştirme Akışı</h3>
        </div>
        <p className="text-blue-100 mb-6">Geliştirme akışı 6 ana fazla özetlenmiştir:</p>
        <div className="grid gap-4">
          {[
            'State Machine Pattern ile Action Yapısının Ayrıştırılması',
            'Job ve Action API Hizmetlerinin Oluşturulması',
            'Sigorta Şirketi Client Entegrasyonu ve Notification Servisleri',
            'İhtiyaç Duyulan Ek API Hizmetleri',
            'Client Side Kuralların API Katmana Taşınması',
            'Test Coverages'
          ].map((phase, index) => (
            <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-start gap-4">
              <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-white pt-1">{phase}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
