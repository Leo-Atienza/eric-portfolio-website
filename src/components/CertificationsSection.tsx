import { motion } from "framer-motion";
import { Award, Calendar, Sparkles } from "lucide-react";

const certifications = [
  {
    title: "Data Analytics",
    issuer: "BrainStation",
    location: "Toronto, ON",
    period: "Nov 2023 – Jan 2024",
    status: "Completed",
  },
  {
    title: "SQL for Healthcare Professionals",
    issuer: "LinkedIn Learning",
    period: "October 2024",
    status: "Completed",
  },
  {
    title: "CompTIA A+ Core 1 and Core 2",
    issuer: "CompTIA CertMaster Learn",
    period: "September 2025 – Present",
    status: "In Progress",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      {/* Background effect */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <h2 className="section-label mb-4">Certifications</h2>
          <h3 className="section-title">Professional Development</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <motion.div 
                  className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: 5 }}
                >
                  <Award className="w-6 h-6" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  {cert.location && (
                    <p className="text-sm text-muted-foreground">{cert.location}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.period}</span>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium ${
                  cert.status === "Completed" 
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" 
                    : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                }`}>
                  {cert.status === "In Progress" && <Sparkles className="w-3 h-3" />}
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
