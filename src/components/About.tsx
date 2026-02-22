import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BarChart3, Users } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "Trainer at CMC, Kolkata", sub: "Nov 2024 – Present" },
  { icon: Users, label: "50+ Students Trained", sub: "Tally,MS Office and PowerBI" },
  { icon: BarChart3, label: "Data Analytics", sub: "Power BI & Excel" },
  { icon: GraduationCap, label: "Bachelor Of Commerce Graduate", sub: "Calcutta University" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => (
  <section id="about" className="py-20 bg-ice">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">About Me</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            With a strong foundation in Commerce and hands-on experience in accounting software, I
            currently work as a Trainer at CMC – Computer Management Concern, Kolkata, where I
            deliver practical training on Tally ERP, PowerBI and MS Office.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Having trained over 50 students, I bring patience, clarity, and real-world accounting
            knowledge to every session. My goal is to build a professional career in finance,
            administration, and data analysis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I am deeply interested in leveraging data analytics tools like Power BI and advanced
            Excel to drive business insights and decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-lg p-5 shadow-sm border border-border text-center"
            >
              <h.icon className="mx-auto mb-3 text-accent" size={28} />
              <p className="font-semibold text-sm text-foreground">{h.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{h.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
