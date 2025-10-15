import { GitBranch, Database, Bell, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function IntegrationProcess() {
  const processSteps = [
    {
      icon: Database,
      title: 'Job ve Action Çekimi',
      description: 'Sigorta şirketi entegre olduğu durumda InsurGateway tarafından ihtiyaç duyduğu ilk servis kendisine ait olan jobların çekilmesi olacaktır.',
      highlight: 'Sigorta şirketi kendisine ait olan jobları ve bu joblarda gerçekleştirilen actionları çekerek kendi tarafına kaydedebilmelidir.',
      color: 'blue'
    },
    {
      icon: Bell,
      title: 'Bildirim Sistemi',
      description: 'InsurGateway joblar içerisinde gerçekleştirilen her aksiyon için sigorta şirketini, şirketin vereceği servis yoluyla, bilgilendirir.',
      highlight: 'Job\'ta veya Action\'da bir değişiklik olduğu durumda aldığı bildirimle birlikte sigorta şirketi kendi tarafındaki bilgiyi güncellemelidir.',
      note: 'Yeniden deneme mekanizması ile bağlantı hataları gibi durumlarda bildirim aktarımı garanti altına alınmaktadır.',
      color: 'green'
    },
    {
      icon: RefreshCw,
      title: 'Action İşlemleri',
      description: 'Job\'un içerisine girildiğinde ilgili job\'a ait actionlar Offline API servisleri aracılığıyla çekilip ekranda gösterilebilir.',
      highlight: 'Teklif reddetme, teklif verme, police oluşturma gibi actionlar için Offline API servislerine entegre olunmalıdır.',
      note: 'Action isteği atıldıktan sonra, sigorta şirketi kendi tarafındaki action bilgisini InsurGateway\'den başarı statüde bir cevap almadan güncellememeli.',
      color: 'amber'
    },
    {
      icon: CheckCircle2,
      title: 'Gün Sonu Mutabakatı',
      description: 'Veri akışında bir problem olma riskine karşı Offline API kapsamında verilecek API\'lar vesilesi ile gün sonu mutabakatı yapılabilir.',
      highlight: 'Eksik olan veriler sigorta şirketinde tamamlanabilir.',
      color: 'slate'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Offline API Entegrasyon Süreci</h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-8">
          Sigorta şirketlerinin InsurGateway platformu ile entegrasyonu için detaylı süreç adımları ve önemli notlar.
        </p>

        <div className="space-y-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              blue: 'from-blue-600 to-blue-700',
              green: 'from-green-600 to-green-700',
              amber: 'from-amber-600 to-amber-700',
              slate: 'from-slate-600 to-slate-700'
            };

            return (
              <div key={index} className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors">
                <div className={`bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} text-white p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-90 mb-1">Adım {index + 1}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-slate-700 leading-relaxed mb-4">{step.description}</p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-4">
                    <p className="text-sm text-blue-900 font-medium leading-relaxed">{step.highlight}</p>
                  </div>
                  {step.note && (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-900 leading-relaxed">{step.note}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">Önemli Notlar</h3>
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <p className="text-slate-100 leading-relaxed">
              Yukarıda özetlenen sürece eklenecek aşamalar olacaktır. İhtiyaçlar doğrultusunda InsurGateway ve
              sigorta şirketi birbirleriyle uyumlanarak ihtiyaca yönelik ek geliştirmeler yapabilir.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <p className="text-slate-100 leading-relaxed">
              İlgili bildirimlerin modellemesi InsurGateway tarafında yapılacak olup sigorta şirketi InsurGateway'in
              modeline uyum sağlamalıdır.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <p className="text-slate-100 leading-relaxed">
              Platform tarafında bir problem olduğu taktirde hata durumunu yönetecek mekanizmalar sigorta şirketi
              ekranlarında oluşturulmalıdır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
