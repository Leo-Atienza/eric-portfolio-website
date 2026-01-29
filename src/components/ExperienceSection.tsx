import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Finance, Accounting, Tax Specialist",
    company: "NeedList.org",
    location: "Toronto, ON",
    period: "June 2025 – August 2025",
    type: "Volunteer",
    achievements: [
      "Improved tax reporting with Excel formulas and data validation, cutting calculation time by 50%",
      "Reduced rework by preparing audit-ready documents and reconciliation evidence, cutting revisions by 30%",
      "Strengthened stakeholder support by standardizing tax documentation and evidence",
    ],
  },
  {
    title: "HELIX Entrepreneur",
    company: "Seneca Polytechnic",
    location: "Toronto, ON",
    period: "May 2025 – August 2025",
    achievements: [
      "Improved pricing and budgeting by benchmarking 12 competitors and building a forecast model",
      "Reduced response time by building an intake workflow for 25 weekly requests, improving turnaround by 30%",
      "Increased delivery accountability by standardizing tracking and follow-ups, reducing missed items by 20%",
    ],
  },
  {
    title: "Customer Service Representative",
    company: "Seneca Polytechnic",
    location: "Toronto, ON",
    period: "August 2024 – Present",
    achievements: [
      "Resolved customer issues on the same day by prioritizing high-volume requests, increasing same-day resolution by 20%",
      "Documented cases in Excel and troubleshot issues before escalation, reducing repeat follow-ups by 25%",
      "Coordinated with supervisors to escalate complex cases with clear summaries, improving turnaround by 15%",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Work History</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.company}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-8 w-4 h-4 rounded-full bg-primary glow-primary hidden md:block" />

                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        {exp.type && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <TrendingUp className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
