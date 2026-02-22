import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const items = [
  {
    title: "Bachelor of Commerce",
    institution: "Prafulla Chandra College, Calcutta University",
    detail: "Currently Pursuing",
  },
  {
    title: "Higher Secondary (Commerce Stream)",
    institution: "Narayana Institute, Kolkata",
    detail: "Completed 2023",
  },
];

const Education = () => (
  <section id="education" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Education</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground font-sans">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.institution}</p>
              <p className="text-xs text-steel mt-1">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
