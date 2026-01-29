import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

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
    <section id="certifications" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Certifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Professional Development</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{cert.title}</h4>
                  <p className="text-sm text-primary">{cert.issuer}</p>
                  {cert.location && (
                    <p className="text-xs text-muted-foreground">{cert.location}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.period}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  cert.status === "Completed" 
                    ? "bg-emerald-500/20 text-emerald-400" 
                    : "bg-amber-500/20 text-amber-400"
                }`}>
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
