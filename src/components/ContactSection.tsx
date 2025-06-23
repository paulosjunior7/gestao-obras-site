import { Mail, Phone, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem dúvidas sobre nosso sistema? Quer solicitar uma demonstração personalizada? 
            Estamos aqui para ajudar você a encontrar a melhor solução para sua obra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite uma Demonstração Gratuita
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tipo-obra" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Obra
                </label>
                <select
                  id="tipo-obra"
                  name="tipo-obra"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione o tipo de obra</option>
                  <option value="casa-pequena">Casa de Pequeno Porte</option>
                  <option value="casa-media">Casa de Médio Porte</option>
                  <option value="reforma">Reforma</option>
                  <option value="multiplas">Múltiplas Obras</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Conte-nos mais sobre seu projeto e suas necessidades..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Solicitar Demonstração Gratuita
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Outras Formas de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contato@gestaoobras.com.br</p>
                    <p className="text-sm text-gray-500">Respondemos em até 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 3000-0000</p>
                    <p className="text-sm text-gray-500">Segunda a sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rápido */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Perguntas Frequentes</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900">Posso testar o sistema antes de assinar?</h5>
                  <p className="text-sm text-gray-600">Sim! Oferecemos 7 dias de teste gratuito para todos os planos.</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900">O sistema funciona no celular?</h5>
                  <p className="text-sm text-gray-600">Sim, nosso sistema é totalmente responsivo e funciona em qualquer dispositivo.</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900">Posso cancelar a qualquer momento?</h5>
                  <p className="text-sm text-gray-600">Sim, não há fidelidade. Você pode cancelar quando quiser.</p>
                </div>
              </div>
            </div>

            {/* CTA Adicional */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Precisa de ajuda imediata?</h4>
              <p className="text-blue-100 mb-4">
                Nossa equipe está pronta para ajudar você a escolher o melhor plano 
                e configurar seu sistema.
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

