import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-gray-900">
              O que é Steel Frame?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
              Steel Frame é um sistema construtivo industrializado que utiliza perfis de aço galvanizado como estrutura. É a evolução da construção civil, combinando tecnologia, sustentabilidade e eficiência.
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
              Este método revolucionário já é amplamente utilizado nos Estados Unidos, Canadá e Europa, e agora está transformando o mercado brasileiro com obras até 60% mais rápidas que a alvenaria tradicional.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div>
                <div className="text-3xl sm:text-4xl text-orange-500 mb-1 sm:mb-2">60%</div>
                <div className="text-gray-700 text-sm sm:text-base">Mais rápido</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl text-orange-500 mb-1 sm:mb-2">40%</div>
                <div className="text-gray-700 text-sm sm:text-base">Menos resíduos</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl text-orange-500 mb-1 sm:mb-2">30%</div>
                <div className="text-gray-700 text-sm sm:text-base">Mais leve</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl text-orange-500 mb-1 sm:mb-2">100%</div>
                <div className="text-gray-700 text-sm sm:text-base">Sustentável</div>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756916078091-c8dcd0e75ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ2MDY3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Steel Frame Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-orange-500 text-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl max-w-[250px] sm:max-w-xs">
              <p className="text-sm sm:text-base lg:text-lg">
                Tecnologia de ponta para construções residenciais e comerciais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}