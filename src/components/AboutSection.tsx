import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Sparkles } from "lucide-react";

const AboutSection = () => {
  const coursework = [
    "Business Systems Analysis",
    "Statistics",
    "Project Management",
    "Database Management",
    "Advanced Data Analytics",
    "Quantitative Analysis",
    "Risk Management",
    "Operations Management",
  ];

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse, hsl(217 91% 60% / 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="section-label mb-4">About</h2>
          <h3 className="section-title">Education & Background</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 hover:border-primary/30 transition-all duration-500 group"
          >
            <div className="flex items-start gap-3 sm:gap-5 mb-5 sm:mb-8">
              <motion.div
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary group-hover:scale-110 transition-transform duration-500"
                whileHover={{ rotate: 5 }}
              >
                <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
              </motion.div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Bachelor of Commerce</h4>
                <p className="text-primary font-semibold text-sm sm:text-lg">Business Technology Management (Honours)</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground mb-5 sm:mb-8 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary/60" />
                <span className="font-medium">Seneca Polytechnic</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/60" />
                <span>2022 – 2026</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-lg">
              Graduating April 2026 with strengths in SQL, Python, Excel, Power BI, and Tableau. 
              Experienced in analyzing trends and building dashboards to surface key insights that 
              support business decisions. Seeking full-time roles in analytics or consulting focused 
              on KPI reporting, data quality, and insight-driven recommendations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <h4 className="text-xl sm:text-2xl font-bold">Relevant Coursework</h4>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="skill-badge text-xs sm:text-base"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
