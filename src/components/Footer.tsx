import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="text-xl sm:text-2xl mb-3 sm:mb-4">
              SteelFrame<span className="text-orange-500">Pro</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Construindo o futuro com tecnologia, qualidade e sustentabilidade.
            </p>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-500 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-500 transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-500 transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-500 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Construção Residencial</li>
              <li>Construção Comercial</li>
              <li>Reformas</li>
              <li>Consultoria de Projetos</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h4>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2025 SteelFramePro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}