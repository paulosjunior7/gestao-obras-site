import { Check, X } from 'lucide-react'

const plans = [
  {
    name: "Básico",
    price: "R$ 99,90",
    period: "/mês",
    description: "Ideal para empreendedores individuais e pequenas construtoras",
    features: [
      "Lançamento e Gestão de Materiais",
      "Gestão de Mão de Obra",
      "Serviços Adicionais",
      "Valor do Lote e Documentação",
      "Gráficos e Resumos Básicos",
      "Suporte por Email"
    ],
    notIncluded: [
      "Relatórios Detalhados",
      "Múltiplos Projetos",
      "Alertas Personalizados",
      "Módulo de Orçamento",
      "Suporte Prioritário"
    ],
    buttonText: "Comece Agora",
    popular: false
  },
  {
    name: "Padrão",
    price: "R$ 199,90",
    period: "/mês",
    description: "Para construtoras em crescimento e múltiplos projetos",
    features: [
      "Todas as funcionalidades do Básico",
      "Relatórios Detalhados de Custos",
      "Gestão de Múltiplos Projetos",
      "Alertas e Notificações Personalizadas",
      "Suporte Prioritário",
      "Dashboard Avançado"
    ],
    notIncluded: [
      "Módulo de Orçamento",
      "Análise de Lucratividade",
      "Integração com Ferramentas Financeiras",
      "Consultoria Especializada"
    ],
    buttonText: "Comece Agora",
    popular: true
  },
  {
    name: "Premium",
    price: "R$ 399,90",
    period: "/mês",
    description: "Para grandes construtoras e máxima lucratividade",
    features: [
      "Todas as funcionalidades do Padrão",
      "Módulo de Orçamento de Obras",
      "Análise de Lucratividade por Projeto",
      "Integração com Ferramentas Financeiras",
      "Consultoria Especializada",
      "Suporte 24/7"
    ],
    notIncluded: [],
    buttonText: "Comece Agora",
    popular: false
  }
]

export default function PricingSection() {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal para o Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos planos foram pensados para atender às diversas necessidades de construtores 
            e empreendedores que atuam com obras de pequeno e médio porte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  Mais Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Incluído:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Não incluído:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-lg transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não tem certeza de qual plano escolher? Fale conosco!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Solicite uma Consultoria Gratuita
          </button>
        </div>
      </div>
    </section>
  )
}

