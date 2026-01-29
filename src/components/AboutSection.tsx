import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

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
    <section id="about" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Education & Background</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Bachelor of Commerce</h4>
                <p className="text-primary font-medium">Business Technology Management (Honours)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Seneca Polytechnic</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>2022 – 2026</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Graduating April 2026 with strengths in SQL, Python, Excel, Power BI, and Tableau. 
              Experienced in analyzing trends and building dashboards to surface key insights that 
              support business decisions. Seeking full-time roles in analytics or consulting focused 
              on KPI reporting, data quality, and insight-driven recommendations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold mb-6">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, index) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="skill-badge"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
