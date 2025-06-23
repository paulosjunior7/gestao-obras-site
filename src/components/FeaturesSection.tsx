import { BarChart3, Users, CheckCircle, Shield, TrendingUp, Star, Calculator, Clock, DollarSign } from 'lucide-react'

const features = [
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "Lançamento e Gestão de Materiais de Obras",
    description: "Registre cada item comprado, desde o cimento até os acabamentos. Monitore o estoque em tempo real, compare preços de diferentes fornecedores e evite desperdícios. Tenha um controle preciso de cada material utilizado, garantindo que nada se perca e que o orçamento seja respeitado.",
    benefits: [
      "Controle de estoque em tempo real",
      "Comparação de preços entre fornecedores",
      "Histórico completo de compras",
      "Alertas de reposição de materiais"
    ]
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Gestão de Mão de Obra",
    description: "Organize sua equipe de forma eficiente. Registre horas trabalhadas, controle pagamentos e acompanhe a produtividade de cada profissional. Saiba exatamente quem está trabalhando em quê e otimize a alocação de recursos humanos.",
    benefits: [
      "Registro de horas trabalhadas",
      "Controle de pagamentos",
      "Acompanhamento de produtividade",
      "Gestão de equipes por projeto"
    ]
  },
  {
    icon: <CheckCircle className="h-12 w-12" />,
    title: "Serviços Adicionais",
    description: "Gerencie todos os serviços terceirizados, como instalações elétricas, hidráulicas, paisagismo e outros. Cadastre contratos, prazos e pagamentos, garantindo que todos os serviços sejam executados conforme o planejado e dentro do orçamento.",
    benefits: [
      "Cadastro de contratos",
      "Controle de prazos",
      "Gestão de pagamentos",
      "Acompanhamento de execução"
    ]
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Valor do Lote e Documentação",
    description: "Mantenha todas as informações cruciais sobre o terreno e a documentação da obra em um só lugar. Registre o valor de aquisição do lote, licenças, alvarás e outros documentos importantes, facilitando o acesso e a organização de toda a burocracia.",
    benefits: [
      "Armazenamento seguro de documentos",
      "Registro de valor do lote",
      "Controle de licenças e alvarás",
      "Acesso rápido à documentação"
    ]
  },
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Apresentação de Gráficos e Resumos de Progresso",
    description: "Visualize o andamento da sua obra de forma clara e intuitiva. Gráficos e relatórios detalhados mostram o progresso físico e financeiro, permitindo que você identifique gargalos, tome decisões rápidas e mantenha todos os envolvidos informados.",
    benefits: [
      "Gráficos de progresso físico",
      "Relatórios financeiros detalhados",
      "Identificação de gargalos",
      "Dashboards intuitivos"
    ]
  },
  {
    icon: <Star className="h-12 w-12" />,
    title: "Módulo de Orçamento de Obras",
    description: "Crie orçamentos precisos e detalhados, considerando todos os custos envolvidos. Acompanhe o orçamento em tempo real, compare o planejado com o realizado e garanta a saúde financeira do seu projeto. Este módulo é a chave para a lucratividade e a previsibilidade da sua obra.",
    benefits: [
      "Orçamentos detalhados e precisos",
      "Acompanhamento em tempo real",
      "Comparação planejado vs realizado",
      "Análise de lucratividade"
    ],
    premium: true
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades Completas para Sua Obra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra todas as funcionalidades do nosso sistema e como cada uma pode 
            transformar a gestão dos seus projetos de construção.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`bg-gradient-to-br ${
                  feature.premium 
                    ? 'from-yellow-100 to-yellow-200' 
                    : 'from-blue-100 to-blue-200'
                } p-4 rounded-lg w-fit mb-6`}>
                  <div className={`${
                    feature.premium ? 'text-yellow-600' : 'text-blue-600'
                  }`}>
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                  {feature.premium && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Premium
                    </span>
                  )}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`${
                      feature.premium ? 'text-yellow-600' : 'text-blue-600'
                    } mb-4`}>
                      {feature.icon}
                    </div>
                    <p className="text-gray-500 text-lg">
                      Interface do Sistema
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Mockup da funcionalidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Destaque do Módulo de Orçamento */}
        <div className="mt-20 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="bg-yellow-200 p-4 rounded-lg w-fit mx-auto mb-6">
              <Calculator className="h-12 w-12 text-yellow-600" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Módulo de Orçamento: O Diferencial do Plano Premium
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              O módulo de orçamento é exclusivo do nosso plano Premium e representa a ferramenta 
              mais avançada para garantir a lucratividade e o controle financeiro total da sua obra.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: <Calculator className="h-8 w-8" />,
                  title: "Orçamentos Precisos",
                  description: "Crie orçamentos detalhados com todos os custos"
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Tempo Real",
                  description: "Acompanhe gastos e receitas instantaneamente"
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Análise de Lucro",
                  description: "Visualize a margem de lucro por projeto"
                },
                {
                  icon: <DollarSign className="h-8 w-8" />,
                  title: "Controle Financeiro",
                  description: "Mantenha a saúde financeira em dia"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-yellow-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <div className="text-yellow-600">{item.icon}</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Conheça o Plano Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

