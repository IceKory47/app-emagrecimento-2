import Link from 'next/link';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';

export default function PlanosPage() {
  const plans = [
    {
      id: 'basico',
      name: 'Básico',
      price: 0,
      period: 'Grátis',
      description: 'Perfeito para começar sua jornada',
      icon: Zap,
      color: 'from-gray-500 to-gray-600',
      features: [
        'Controle básico de calorias',
        'Registro de refeições',
        'Planos de exercícios básicos',
        'Acompanhamento de peso',
        'Comunidade de usuários'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 29.90,
      period: 'por mês',
      description: 'Mais recursos para acelerar resultados',
      icon: Crown,
      color: 'from-emerald-500 to-teal-600',
      popular: true,
      features: [
        'Tudo do plano Básico',
        'Planos de dieta personalizados',
        'Receitas exclusivas',
        'Exercícios avançados com vídeos',
        'Relatórios detalhados',
        'Suporte prioritário',
        'Sem anúncios'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 79.90,
      period: 'por mês',
      description: 'Acompanhamento profissional completo',
      icon: Sparkles,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Tudo do plano Premium',
        'Consultas mensais com nutricionista',
        'Personal trainer virtual',
        'Plano alimentar individualizado',
        'Ajustes semanais personalizados',
        'Grupo VIP exclusivo',
        'Acesso antecipado a novidades'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              💎 Escolha seu plano
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Invista na sua saúde
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para alcançar seus objetivos de forma mais rápida e eficiente
            </p>
          </div>

          {/* Planos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'ring-4 ring-emerald-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                      Mais Popular
                    </div>
                  )}

                  <div className="p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Nome e Descrição */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    {/* Preço */}
                    <div className="mb-6">
                      {plan.price === 0 ? (
                        <div className="text-4xl font-bold text-gray-900">Grátis</div>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                          <span className="text-gray-600">{plan.period}</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/cadastro"
                      className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:scale-105'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.price === 0 ? 'Começar Grátis' : 'Assinar Agora'}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Planos Anuais */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Economize com planos anuais</h2>
            <p className="text-emerald-100 text-lg mb-6">
              Assine por 12 meses e ganhe <span className="font-bold text-white">2 meses grátis</span> + bônus exclusivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1 max-w-xs">
                <div className="text-2xl font-bold mb-1">Premium Anual</div>
                <div className="text-3xl font-bold mb-2">R$ 299,90</div>
                <div className="text-emerald-100 text-sm">R$ 24,99/mês</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1 max-w-xs">
                <div className="text-2xl font-bold mb-1">Elite Anual</div>
                <div className="text-3xl font-bold mb-2">R$ 799,90</div>
                <div className="text-emerald-100 text-sm">R$ 66,66/mês</div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Posso cancelar a qualquer momento?',
                  a: 'Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou multas.'
                },
                {
                  q: 'Como funciona o período de teste?',
                  a: 'Todos os planos pagos incluem 7 dias de teste grátis. Você só será cobrado após esse período.'
                },
                {
                  q: 'Quais formas de pagamento são aceitas?',
                  a: 'Aceitamos cartão de crédito, débito, PIX e boleto bancário.'
                },
                {
                  q: 'Posso mudar de plano depois?',
                  a: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.'
                }
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
