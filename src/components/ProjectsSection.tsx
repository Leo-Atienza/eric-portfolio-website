import { motion } from "framer-motion";
import { FolderOpen, TrendingUp, Database, BarChart3, LineChart } from "lucide-react";

const projects = [
  {
    title: "YEES Energy Project",
    subtitle: "Cost-Benefit Analysis",
    period: "Nov 2023 – Jan 2024",
    icon: BarChart3,
    color: "from-emerald-500 to-teal-600",
    highlights: [
      { metric: "10,000+", label: "Utility records validated" },
      { metric: "$15.4M", label: "Potential savings identified" },
      { metric: "29-34%", label: "Cost reduction potential" },
    ],
    description: "Extracted and validated utility records using SQL queries and Excel reconciliation. Developed Power BI KPI dashboards quantifying savings across building types.",
    tools: ["SQL", "Excel", "Power BI"],
  },
  {
    title: "Credit Risk Analysis",
    subtitle: "Loan Default Prediction",
    period: "Jan 2026 – Feb 2026",
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    highlights: [
      { metric: "50%", label: "Prep time reduced" },
      { metric: "2x", label: "Higher default rate identified" },
      { metric: "35%", label: "Faster interpretation" },
    ],
    description: "Engineered Python data preparation for loan default datasets. Validated risk patterns across debt-to-income bands and visualized in Tableau.",
    tools: ["Python", "Tableau", "Data Analysis"],
  },
  {
    title: "Hospital Length of Stay",
    subtitle: "Healthcare Analytics",
    period: "Jan 2026 – Feb 2026",
    icon: LineChart,
    color: "from-purple-500 to-pink-600",
    highlights: [
      { metric: "300,000+", label: "Hospital encounters analyzed" },
      { metric: "Top 3", label: "Segments prioritized" },
      { metric: "40%", label: "Faster drill-down" },
    ],
    description: "Analyzed length of stay drivers and modelled cohort comparisons across age groups. Visualized KPIs in Power BI with interactive filters.",
    tools: ["SQL", "Power BI", "Data Validation"],
  },
  {
    title: "Tesla Production Analysis",
    subtitle: "10-Year Trends",
    period: "Nov 2025 – Dec 2025",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    highlights: [
      { metric: "10 Years", label: "Data standardized" },
      { metric: "30%", label: "Reporting time reduced" },
      { metric: "25%", label: "Fewer follow-ups" },
    ],
    description: "Engineered 2015-2024 production dataset in Excel. Visualized long-term trends in Tableau and developed management-ready presentations.",
    tools: ["Excel", "Tableau", "PowerPoint"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Featured Work</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Header with gradient */}
              <div className={`p-6 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                    <p className="text-white/80 text-sm">{project.subtitle}</p>
                  </div>
                  <project.icon className="w-8 h-8 text-white/80" />
                </div>
                <p className="relative z-10 text-white/70 text-sm mt-3">{project.period}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl font-bold gradient-text">{highlight.metric}</p>
                      <p className="text-xs text-muted-foreground">{highlight.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="skill-badge text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
