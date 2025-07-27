import { useState } from "react";
import heroImage from "@/assets/minecraft-office-hero.jpg";

export const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Animated background blocks */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-primary minecraft-block floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-in-block">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              <span className="text-primary">QUICK</span>
              <br />
              PIXEL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-mono">
              Building digital worlds, one block at a time
            </p>
            <p className="text-lg mb-10 text-foreground/80">
              We craft innovative software solutions with the precision of Minecraft architects.
              From web development to mobile apps, we build your digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleClick}
                className={`block-button ${isClicked ? 'block-break' : ''} hover:bg-primary/90 transition-colors`}
              >
                Start Building
              </button>
              <button className="minecraft-block bg-secondary text-secondary-foreground px-6 py-3 font-bold uppercase tracking-wider hover:bg-secondary/90 transition-colors">
                View Projects
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up">
            <div className="minecraft-block overflow-hidden bg-card">
              <img 
                src={heroImage} 
                alt="Minecraft-style office building" 
                className="w-full h-auto pixelated"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent minecraft-block floating-animation" 
                 style={{ animationDelay: '1s' }} />
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary minecraft-block floating-animation" 
                 style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};