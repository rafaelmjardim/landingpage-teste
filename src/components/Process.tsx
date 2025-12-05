import { FileText, Wrench, Building2, Key } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Planejamento",
    description: "Desenvolvimento do projeto arquitetônico e estrutural com total atenção aos seus sonhos e necessidades."
  },
  {
    icon: Wrench,
    title: "2. Fabricação",
    description: "Produção industrial dos perfis de aço e componentes com precisão milimétrica em ambiente controlado."
  },
  {
    icon: Building2,
    title: "3. Montagem",
    description: "Montagem rápida e limpa da estrutura no canteiro de obras, com mínimo impacto ambiental."
  },
  {
    icon: Key,
    title: "4. Entrega",
    description: "Finalização com acabamentos de alta qualidade e entrega da sua obra pronta para uso."
  }
];

export function Process() {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            Como Funciona
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Um processo simples e transparente do projeto à entrega das chaves
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-orange-500/30"></div>
              )}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <step.icon size={32} className="sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Da fundação ao acabamento, acompanhamos cada etapa do seu projeto
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base"
          >
            Iniciar Meu Projeto
          </button>
        </div>
      </div>
    </section>
  );
}