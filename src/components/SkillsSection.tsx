import { motion } from "framer-motion";
import { Database, BarChart3, Wrench, Users, FileText } from "lucide-react";

const skillCategories = [
  {
    icon: Database,
    title: "Data Analysis",
    skills: ["Data Cleaning", "Data Validation", "SQL Querying", "KPI Tracking", "Trend Analysis", "ETL Process", "Data Profiling"],
  },
  {
    icon: BarChart3,
    title: "Business Analysis",
    skills: ["Process Mapping", "User Stories", "Gap Analysis", "Requirements Gathering", "Workflow Optimization", "Agile"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["SQL", "Python", "Power BI", "Tableau", "Excel", "VBA", "Power Query", "Jira", "Confluence"],
  },
  {
    icon: FileText,
    title: "Reporting",
    skills: ["Data Visualization", "Interactive Dashboards", "KPI Tracking", "Executive Summaries", "Storytelling"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Problem Solving", "Communication", "Stakeholder Management", "Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Technical & Professional Expertise</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <category.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
