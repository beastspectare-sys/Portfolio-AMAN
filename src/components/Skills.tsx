import { motion } from "framer-motion";

const skills = [
  { name: "Tally Prime", level: 90 },
  { name: "MS Excel (Advanced)", level: 88 },
  { name: "Power BI", level: 75 },
  { name: "MS Word", level: 85 },
  { name: "MS PowerPoint", level: 82 },
  { name: "Accounting Principles", level: 88 },
  { name: "Data Entry & Management", level: 85 },
  { name: "Financial Reporting", level: 80 },
  { name: "Report Making", level: 82 },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Skills & Expertise</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-foreground">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="h-full rounded-full bg-accent"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
