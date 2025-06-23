import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Clock, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">GestãObras</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#funcionalidades" className="text-gray-500 hover:text-gray-900">Funcionalidades</Link>
              <Link href="#planos" className="text-gray-500 hover:text-gray-900">Planos</Link>
              <Link href="#contato" className="text-gray-500 hover:text-gray-900">Contato</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                Experimente Grátis
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tenha o controle da sua obra<br />
              <span className="text-blue-200">do início ao fim</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Gerencie o custo total e o lucro realizado com nosso sistema intuitivo, 
              projetado especificamente para casas de pequeno e médio porte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
                Experimente Grátis por 7 Dias
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg">
                Solicite uma Demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Solução */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O Desafio da Gestão de Obras
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Construir ou reformar uma casa é um empreendimento complexo. Envolve controle de materiais, 
                gestão de equipe, serviços terceirizados, documentação e acompanhamento financeiro.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Sem as ferramentas certas, o que deveria ser um sonho pode se transformar em um pesadelo 
                de custos descontrolados, atrasos e dores de cabeça.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">A Solução Definitiva</h3>
                  <p className="text-gray-600">
                    Sistema completo e intuitivo para total visibilidade e controle sobre seus projetos.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-lg mb-4">
                    <TrendingUp className="h-8 w-8 text-red-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Custos Descontrolados</h4>
                  <p className="text-sm text-gray-600">Sem controle financeiro adequado</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-lg mb-4">
                    <Clock className="h-8 w-8 text-red-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Atrasos Constantes</h4>
                  <p className="text-sm text-gray-600">Falta de planejamento e organização</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-4">
                    <Shield className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Controle Total</h4>
                  <p className="text-sm text-gray-600">Com nosso sistema integrado</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-4">
                    <BarChart3 className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Lucro Garantido</h4>
                  <p className="text-sm text-gray-600">Acompanhamento em tempo real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Funcionalidades */}
      <section id="funcionalidades" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Controle Total na Palma da Sua Mão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema completo projetado para oferecer uma gestão de obras descomplicada, 
              focada nas necessidades de projetos de casas de pequeno e médio porte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Lançamento e Gestão de Materiais",
                description: "Registre cada item comprado, monitore estoque, compare preços de fornecedores e evite desperdícios."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Gestão de Mão de Obra",
                description: "Organize sua equipe, registre horas trabalhadas, controle pagamentos e acompanhe produtividade."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Serviços Adicionais",
                description: "Gerencie todos os serviços terceirizados, contratos, prazos e pagamentos em um só lugar."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Valor do Lote e Documentação",
                description: "Mantenha informações do terreno e documentação da obra organizadas e acessíveis."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Gráficos e Resumos de Progresso",
                description: "Visualize o andamento da obra com gráficos e relatórios detalhados em tempo real."
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Módulo de Orçamento de Obras",
                description: "Crie orçamentos precisos, acompanhe em tempo real e garanta a saúde financeira do projeto."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Funcionalidades Detalhadas */}
      <FeaturesSection />

      {/* Depoimentos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Antes de usar este sistema, eu perdia horas controlando planilhas e ainda assim tinha surpresas no final do mês. 
                Agora, tenho tudo na palma da mão, consigo ver o lucro em tempo real e minhas obras são entregues no prazo e dentro do orçamento. 
                É um divisor de águas!&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">JS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">João Silva</h4>
                  <p className="text-gray-600">Construtor Independente</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;A facilidade de lançamento de materiais e a visualização dos gráficos de progresso me deram uma clareza que eu nunca tive. 
                Recomendo para todos que querem profissionalizar a gestão de suas pequenas e médias obras.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">MO</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Maria Oliveira</h4>
                  <p className="text-gray-600">Arquiteta e Empreendedora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <PricingSection />

      {/* CTA Secundária */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para Transformar a Gestão da Sua Obra?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Não perca mais tempo com métodos antigos e ineficientes. Descubra como nosso sistema 
            pode revolucionar a forma como você gerencia suas construções.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#planos" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg">
              Veja Nossos Planos
            </Link>
            <Link href="#contato" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">GestãObras</h3>
              <p className="text-gray-400">
                Sistema completo de gestão de obras para casas de pequeno e médio porte.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#funcionalidades" className="hover:text-white">Funcionalidades</Link></li>
                <li><Link href="#planos" className="hover:text-white">Planos</Link></li>
                <li><a href="#" className="hover:text-white">Demonstração</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
                <li><Link href="#contato" className="hover:text-white">Contato</Link></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">Status do Sistema</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GestãObras. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

