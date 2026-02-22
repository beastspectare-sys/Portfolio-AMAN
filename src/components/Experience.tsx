import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="py-20 bg-ice">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Experience</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Briefcase size={18} className="text-primary-foreground" />
            </div>
            <div className="w-0.5 flex-1 bg-border" />
          </div>
          <div className="pb-10">
            <h3 className="text-lg font-semibold text-foreground font-sans">
              Trainer – Tally & Office Software
            </h3>
            <p className="text-sm text-accent font-medium mb-1">
              CMC – Computer Management Concern, Kolkata
            </p>
            <p className="text-xs text-muted-foreground mb-3">November 2024 – Present</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• Conducted training sessions on Tally ERP, Excel, Word, and PowerPoint.</li>
              <li>• Provided hands-on accounting cycle training.</li>
              <li>• Trained 50+ students in practical data entry and reporting.</li>
              <li>• Developed structured learning materials.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
