import { Code, Clock, CheckCircle2, TestTube } from 'lucide-react';

export default function DevelopmentNeeds() {
  const phases = [
    {
      title: 'State Machine Pattern ile Action Yapısının Ayrıştırılması',
      description: 'Joblara ait stageler arasındaki akışın kurallarını somutlaştırmak ve geçiş kurallarını stage özelinde yönetebilmek için Action aşamaları özelinde yapılacak çalışmaları kapsar.',
      tasks: [
        { points: 1, count: 9, hours: 36 },
        { points: 2, count: 12, hours: 96 },
        { points: 3, count: 11, hours: 176 }
      ],
      testHours: 48,
      totalHours: 356,
      totalDays: 44.5
    },
    {
      title: 'Job ve Action API Hizmetlerinin Oluşturulması',
      description: 'Stageler için uygun modeller belirlenerek, state yönetimini API kanallarıyla dışarıya açmak hedeflenmektedir.',
      tasks: [
        { points: 1, count: 13, hours: 52 },
        { points: 2, count: 11, hours: 88 }
      ],
      testHours: 24,
      totalHours: 164,
      totalDays: 20.5
    },
    {
      title: 'Sigorta Şirketi Client Entegrasyonu ve Notification Servisleri',
      description: 'Platform tarafından gerçekleşen isteklerin ve alınacak aksiyonlara bağlı stage değişimlerinin anlık olarak sigorta şirketi kanalına aktarılması.',
      tasks: [
        { points: 2, count: 5, hours: 40 },
        { points: 3, count: 2, hours: 32 }
      ],
      testHours: 10.5,
      totalHours: 82.5,
      totalDays: 10.5
    },
    {
      title: 'İhtiyaç Duyulan Ek API Hizmetleri',
      description: 'InsurGateway tarafında anlam ifade eden ancak dış kaynaklarca bir karşılığı olmayabilecek bilgilerin ilgili kaynaklara aktarılabilmesi için API hizmetlerinin oluşturulması.',
      tasks: [
        { points: 1, count: 7, hours: 28 },
        { points: 2, count: 1, hours: 8 }
      ],
      testHours: 8,
      totalHours: 44,
      totalDays: 5.5
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Geliştirme İhtiyaçları</h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-8">
          Her bir geliştirme fazı için detaylı iş planları oluşturulmuş ve efor tahminleri yapılmıştır.
        </p>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="border-2 border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{phase.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    İş Planı Dağılımı
                  </h4>
                  <div className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex justify-between text-sm">
                        <span className="text-slate-600">
                          {task.points} Story Point ({task.count} adet)
                        </span>
                        <span className="font-semibold text-slate-900">{task.hours} saat</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm pt-2 border-t border-slate-200">
                      <span className="text-slate-600">Test Coverage</span>
                      <span className="font-semibold text-slate-900">{phase.testHours} saat</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 text-white">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Toplam Efor
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Toplam Süre</span>
                      <span className="text-2xl font-bold">{phase.totalHours}sa</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-blue-400">
                      <span className="text-blue-100">Adam/Gün</span>
                      <span className="text-2xl font-bold">{phase.totalDays} A/G</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-lg p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <TestTube className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Ek Geliştirme Maddeleri</h3>
        </div>
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">5. Client Side Kuralların API Katmana Taşınması</h4>
            <p className="text-slate-300 text-sm">
              Offline süreçler kendi client uygulamamız içerisinden tetiklendiğinden buradaki bazı kurallar
              (örnek: güncel döviz kuru kontrolü) client side tarafta kesici veya uyarıcı seviyede kontrol edilmektedir.
              Özellikle kesici seviyedeki kontrollerin API katmanda sağlanması gerekmektedir.
            </p>
            <p className="text-yellow-300 text-sm mt-3 font-medium">
              * Detaylı bir inceleme ihtiyacı olduğundan buraya ait işler henüz tanımlanmamıştır.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">6. Test Coverages</h4>
            <p className="text-slate-300 text-sm">
              Kod içerisinde gerçekleştirilen geliştirmeler, güvenlik ve kalite açısından Unit ve Integration testler
              aracılığıyla güvence altına alınmalıdır. Bu sayede gerçekleşebilecek hataları minimize ederek hem kendi
              hem entegratör tarafın operasyonlarını uzun vadede minimize etmek hedeflenmektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
