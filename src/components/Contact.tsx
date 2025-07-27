import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", project: "", message: "" });
      alert("Message sent! We'll get back to you soon.");
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-accent/20" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-card-foreground">
              START YOUR <span className="text-primary">PROJECT</span>
            </h2>
            <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto">
              Ready to build something amazing? Let's craft your digital vision together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-block">
              <h3 className="text-2xl font-bold mb-8 text-card-foreground uppercase">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="block-card bg-secondary/50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary minecraft-block mr-4 flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">📧</span>
                    </div>
                    <div>
                      <p className="font-mono text-secondary-foreground">hello@quickpixel.com</p>
                    </div>
                  </div>
                </div>

                <div className="block-card bg-secondary/50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent minecraft-block mr-4 flex items-center justify-center">
                      <span className="text-accent-foreground text-sm">📞</span>
                    </div>
                    <div>
                      <p className="font-mono text-secondary-foreground">+91 xxxxx xxxxx</p>
                    </div>
                  </div>
                </div>

                <div className="block-card bg-secondary/50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary minecraft-block mr-4 flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">📍</span>
                    </div>
                    <div>
                      <p className="font-mono text-secondary-foreground">Bhubaneswar, Odisha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-card-foreground font-mono text-sm mb-2 uppercase tracking-wider">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border minecraft-block px-4 py-3 text-foreground font-mono focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-card-foreground font-mono text-sm mb-2 uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border minecraft-block px-4 py-3 text-foreground font-mono focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-card-foreground font-mono text-sm mb-2 uppercase tracking-wider">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full bg-background border border-border minecraft-block px-4 py-3 text-foreground font-mono focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="game">Game Development</option>
                    <option value="blockchain">Server Creation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-card-foreground font-mono text-sm mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-background border border-border minecraft-block px-4 py-3 text-foreground font-mono focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full block-button ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'} transition-colors`}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};