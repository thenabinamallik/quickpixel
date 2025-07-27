import serviceWeb from "@/assets/service-web.jpg";

export const Services = () => {
 const services = [
  {
    title: "Web Development",
    description: "Crafting responsive websites with modern frameworks.",
    icon: "🌐",
    features: ["React & TypeScript", "Responsive Design", "SEO Optimized"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications.",
    icon: "📱",
    features: ["iOS & Android", "React Native", "App Store Ready"],
  },
  {
    title: "Game Development",
    description: "Creating engaging gaming experiences.",
    icon: "🎮",
    features: ["Unity & Unreal", "2D & 3D Games", "Multi-platform"],
  },
  {
    title: "Server Development",
    description: "Building scalable, secure, and high-performance backend systems.",
    icon: "🖥️",
    features: [
      "REST & GraphQL APIs",
      "Database Design & Integration",
      "Authentication & Authorization",
    ],
  },
];



  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="border border-primary/20" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-card-foreground">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto">
            We build digital solutions with the same creativity and precision as
            crafting in Minecraft
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="block-card hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 minecraft-block bg-primary/20 flex items-center justify-center">
                  {typeof service.icon === "string" &&
                  (service.icon.startsWith("/") ||
                    service.icon.startsWith("src/")) ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 pixelated"
                    />
                  ) : (
                    <span className="text-3xl">{service.icon}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 font-mono">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-accent font-mono flex items-center justify-center"
                    >
                      <span className="w-2 h-2 bg-primary minecraft-block mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
