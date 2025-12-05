import { ArrowRight, Menu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
          <div className="text-white text-xl sm:text-2xl">
            SteelFrame<span className="text-orange-500">Pro</span>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-orange-500 transition-colors">
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("benefits")} className="hover:text-orange-500 transition-colors">
                Benefícios
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="hover:text-orange-500 transition-colors">
                Projetos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("process")} className="hover:text-orange-500 transition-colors">
                Processo
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-orange-500 transition-colors">
                Contato
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
            <ul className="flex flex-col text-white p-6 space-y-4">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-orange-500 transition-colors w-full text-left">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("benefits")} className="hover:text-orange-500 transition-colors w-full text-left">
                  Benefícios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-orange-500 transition-colors w-full text-left">
                  Projetos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("process")} className="hover:text-orange-500 transition-colors w-full text-left">
                  Processo
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-orange-500 transition-colors w-full text-left">
                  Contato
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660075235409-ac9de82d2b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGVlbCUyMGZyYW1lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NDYwNjczOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern Steel Frame Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6">
              Construção Moderna em Steel Frame
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
              Rapidez, sustentabilidade e qualidade superior. Transforme seu projeto em realidade com a tecnologia mais avançada em construção civil.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Solicitar Orçamento
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg backdrop-blur-sm transition-colors text-sm sm:text-base"
              >
                Ver Projetos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}