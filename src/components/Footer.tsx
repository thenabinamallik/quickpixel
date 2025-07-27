export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 border border-primary/30"
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary minecraft-block mr-3 floating-animation" />
              <span className="text-xl font-bold text-foreground font-mono uppercase tracking-wider">
                QUICKPIXEL
              </span>
            </div>
            <p className="text-muted-foreground font-mono text-sm">
              Building digital worlds, one block at a time. Your trusted partner for innovative software solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-mono uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "Game Development", "Servers"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-mono uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {["About Us", "Team", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-mono uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              {["📧", "💼", "🐦", "📘"].map((icon, i) => (
                <div key={i} className="w-10 h-10 bg-secondary minecraft-block flex items-center justify-center hover:bg-primary hover:scale-110 transition-all cursor-pointer">
                  <span className="text-sm">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2025 Quick Pixel IT Solutions. All rights reserved. Built with blocks and love.
          </p>
        </div>
      </div>
    </footer>
  );
};