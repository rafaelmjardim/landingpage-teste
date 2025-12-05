import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Residência Moderna",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lfGVufDF8fHx8MTc2NDUzNTc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    area: "280m²",
    duration: "4 meses"
  },
  {
    title: "Casa Sustentável",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1617357978159-3f6551e11751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NDYwNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    area: "320m²",
    duration: "5 meses"
  },
  {
    title: "Edifício Comercial",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ0OTY3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    area: "450m²",
    duration: "6 meses"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-gray-900">
            Nossos Projetos
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Conheça alguns dos projetos que transformamos em realidade com tecnologia Steel Frame
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <span className="text-orange-500 text-xs sm:text-sm mb-1 sm:mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-xl sm:text-2xl mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <div className="flex gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
                  <span>Área: {project.area}</span>
                  <span>•</span>
                  <span>Prazo: {project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}