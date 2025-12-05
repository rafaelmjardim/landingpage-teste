import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Proprietário de Casa Residencial",
    content: "A rapidez e qualidade da construção superaram nossas expectativas. Em apenas 4 meses, tínhamos nossa casa dos sonhos pronta. O acabamento é impecável!",
    rating: 5
  },
  {
    name: "Marina Santos",
    role: "Empresária",
    content: "Optei pelo Steel Frame para meu escritório e não me arrependo. Economia de tempo e dinheiro, além de um resultado final muito superior ao convencional.",
    rating: 5
  },
  {
    name: "Roberto Oliveira",
    role: "Engenheiro Civil",
    content: "Como profissional da área, fiquei impressionado com a precisão e organização da obra. O Steel Frame é realmente o futuro da construção civil no Brasil.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-gray-900">
            O que dizem nossos clientes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            A satisfação de quem já construiu com a gente
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-orange-500 text-orange-500 w-4 h-4 sm:w-5 sm:h-5" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">
                "{testimonial.content}"
              </p>
              <div>
                <div className="text-gray-900 mb-1 text-sm sm:text-base">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}