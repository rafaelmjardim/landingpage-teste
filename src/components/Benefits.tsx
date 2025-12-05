import { Clock, Leaf, Shield, Zap, Ruler, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Rapidez na Construção",
    description: "Obras até 60% mais rápidas comparadas à alvenaria tradicional. Estrutura montada em dias, não meses."
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Menos desperdício de materiais, estrutura 100% reciclável e menor consumo de água durante a obra."
  },
  {
    icon: Shield,
    title: "Durabilidade",
    description: "Estrutura em aço galvanizado resistente à corrosão, cupins e intempéries. Vida útil superior a 300 anos."
  },
  {
    icon: Zap,
    title: "Eficiência Energética",
    description: "Melhor isolamento térmico e acústico, reduzindo custos com climatização em até 40%."
  },
  {
    icon: Ruler,
    title: "Precisão Milimétrica",
    description: "Projetos executados com precisão industrial, garantindo qualidade e acabamento perfeito."
  },
  {
    icon: DollarSign,
    title: "Custo-Benefício",
    description: "Menor desperdício, obra mais rápida e economia de mão de obra resultam em melhor custo final."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-gray-900">
            Por que escolher Steel Frame?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Descubra as vantagens que fazem do Steel Frame a escolha preferida para construções modernas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <benefit.icon className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}