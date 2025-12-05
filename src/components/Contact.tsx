import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio de formulário
    alert("Obrigado pelo contato! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-gray-900">
            Solicite seu Orçamento
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Transforme seu projeto em realidade. Entre em contato conosco e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-6 sm:mb-8 text-gray-900">
              Fale Conosco
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1 text-sm sm:text-base">Telefone</div>
                  <div className="text-gray-600 text-sm sm:text-base">(11) 9999-9999</div>
                  <div className="text-gray-600 text-sm sm:text-base">(11) 3333-3333</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1 text-sm sm:text-base">E-mail</div>
                  <div className="text-gray-600 text-sm sm:text-base break-all">contato@steelframepro.com.br</div>
                  <div className="text-gray-600 text-sm sm:text-base break-all">orcamento@steelframepro.com.br</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1 text-sm sm:text-base">Endereço</div>
                  <div className="text-gray-600 text-sm sm:text-base">Av. Paulista, 1000 - São Paulo/SP</div>
                  <div className="text-gray-600 text-sm sm:text-base">CEP: 01310-100</div>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-orange-500 rounded-2xl text-white">
              <h4 className="text-lg sm:text-xl mb-3 sm:mb-4">
                Horário de Atendimento
              </h4>
              <p className="mb-2 text-sm sm:text-base">Segunda a Sexta: 8h às 18h</p>
              <p className="text-sm sm:text-base">Sábado: 8h às 12h</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="mb-4 sm:mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm sm:text-base">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm sm:text-base"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Enviar Mensagem
                <Send size={18} className="sm:w-5 sm:h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}