import { ListChecks, ArrowRight, Shield, Database, Bell, Users, GitMerge } from 'lucide-react';

export default function RecommendedSteps() {
  const steps = [
    {
      phase: 1,
      icon: Shield,
      title: 'Authentication & Authorization',
      insurGateway: 'Ek API\'lar kapsamında bulunan Authentication/Authorization süreçleri önceliklendirilmelidir.',
      company: 'Kimlik doğrulama sistemlerine hazırlık yapılmalı.',
      priority: 'Yüksek',
      color: 'red'
    },
    {
      phase: 2,
      icon: Database,
      title: 'Job ve Action Listeleri',
      insurGateway: 'Job listesini ve Action listesini dönecek API\'ları önceliklendirmelidir. Ayrıca Job\'a ait talep bilgilerini sağlayacak API de bu aşamada hazırlanmalıdır.',
      company: 'Sigorta şirketinin öncelikli olarak entegre etmesi gereken job listesini kendi tarafına alabilmesi sağlanmalı.',
      priority: 'Yüksek',
      color: 'red'
    },
    {
      phase: 3,
      icon: Bell,
      title: 'Bildirim Servisleri',
      insurGateway: 'Sigorta şirketine bildirim gönderecek servislere entegrasyon süreci ilerletilmeli.',
      company: 'Bildirimleri karşılayabilecek bir servis oluşturulmalı. Banka/Platform tarafından yapılan değişikliklerin sigorta şirketine aktarılıp şirket tarafındaki verilerin güncellenebilmesi sağlanmalı.',
      priority: 'Yüksek',
      color: 'red'
    },
    {
      phase: 4,
      icon: Users,
      title: 'User İşlemleri',
      insurGateway: 'Ek API\'lar kapsamında bulunan User işlemleriyle ilgili API\'lar sağlanmalı.',
      company: 'User yönetim süreçlerine entegre olunmalı.',
      priority: 'Orta',
      color: 'amber'
    },
    {
      phase: 5,
      icon: GitMerge,
      title: 'State Machine ve Action API',
      insurGateway: 'State Machine Pattern ile altyapısal düzenlemeler ile API çalışmaları sıralı yürütülerek ilgili Action için State Machine düzenlemesi yapılmalı.',
      company: 'İlgili Action\'a entegrasyon sağlanmalı.',
      priority: 'Orta',
      color: 'amber',
      note: 'Bu aşamada, State Machine düzenlemesi yapıldıktan sonra direkt API maddesine geçilerek paralel çalışma sağlanabilir.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <ListChecks className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Tavsiye Edilen Entegrasyon Aşamaları</h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-8">
          Sigorta şirketinin süreçleriyle InsurGateway süreçlerinin paralelde ilerleyebilmesi için
          gerçekleştirilecek işlerin birbirleriyle uyumlu şekilde ilerletilmesine dikkat edilmesi gerekmektedir.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const priorityColors = {
              red: 'bg-red-100 text-red-800 border-red-200',
              amber: 'bg-amber-100 text-amber-800 border-amber-200',
              green: 'bg-green-100 text-green-800 border-green-200'
            };

            return (
              <div key={index} className="border-2 border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium opacity-90 mb-1">Aşama {step.phase}</div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-xs font-bold border-2 ${priorityColors[step.color as keyof typeof priorityColors]}`}>
                      {step.priority} Öncelik
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          InsurGateway
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        {step.insurGateway}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Sigorta Şirketi
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                        {step.company}
                      </p>
                    </div>
                  </div>

                  {step.note && (
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-sm text-amber-900 font-medium">
                        💡 {step.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <ArrowRight className="w-7 h-7" />
          Paralel İlerleme Stratejisi
        </h3>
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-5">
            <h4 className="font-semibold text-lg mb-2">Koordinasyon Önemi</h4>
            <p className="text-blue-100 leading-relaxed">
              Sigorta şirketi ile InsurGateway süreçlerinin paralelde ilerleyebilmesi için gerçekleştirilecek işlerin
              birbirleriyle uyumlu şekilde ilerletilmesine dikkat edilmelidir.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-5">
            <h4 className="font-semibold text-lg mb-2">Önceliklendirme</h4>
            <p className="text-blue-100 leading-relaxed">
              Yüksek öncelikli adımlar (Authentication, Job/Action API\'ları, Bildirim Servisleri) tamamlanmadan
              diğer aşamalara geçilmemesi önerilir.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-5">
            <h4 className="font-semibold text-lg mb-2">Esneklik</h4>
            <p className="text-blue-100 leading-relaxed">
              İhtiyaçlar doğrultusunda InsurGateway ve sigorta şirketi birbirleriyle uyumlanarak ihtiyaca yönelik
              ek geliştirmeler yapabilir ve bu yol haritasını güncelleyebilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
