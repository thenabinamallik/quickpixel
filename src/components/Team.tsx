import avatar1 from "@/assets/minecraft-avatar-1.jpg";
import avatar2 from "@/assets/minecraft-avatar-2.jpg";

export const Team = () => {
const team = [
  {
    name: "Nabina Mallik",
    role: "Software Developer",
    avatar: avatar1,
    skills: ["Full Stack", "Web Development", "UI/UX Design"],
    description:
      "A passionate full-stack developer with over a year of experience in building responsive and user-friendly web applications, specializing in modern frontend technologies and UI/UX best practices.",
  },
  {
    name: "Gopinath Majhi",
    role: "Software Developer",
    avatar: avatar1,
    skills: ["Full Stack", "Android Development", "Cloud Computing"],
    description:
      "Experienced in developing robust full-stack solutions with a focus on Android apps and cloud-based architectures. Over a year of hands-on experience delivering scalable and efficient applications.",
  },
];


  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Floating blocks */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-accent/10 minecraft-block floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            MEET THE <span className="text-accent">BUILDERS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto">
            Our team of expert craftsmen who turn digital dreams into reality
          </p>
        </div>

        <div
          className={`grid gap-8 ${
            team.length < 4
              ? "justify-center grid-cols-" + team.length
              : "lg:grid-cols-4"
          } sm:grid-cols-2`}
        >
          {team.map((member, index) => (
            <div
              key={member.name}
              className="block-card text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto minecraft-block overflow-hidden bg-primary/20">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover pixelated"
                  />
                </div>
                <div
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary minecraft-block floating-animation"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold mb-2 text-card-foreground uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="text-accent font-mono text-sm mb-4 uppercase">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mb-6 font-mono">
                {member.description}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                {member.skills.map((skill, i) => (
                  <div key={i} className="inline-block">
                    <span className="text-xs bg-secondary/50 text-secondary-foreground px-3 py-1 font-mono uppercase tracking-wider minecraft-block mr-1 mb-1">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
