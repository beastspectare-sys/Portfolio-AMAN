import { motion } from "framer-motion";
import { Calculator, BarChart3, Table2, PieChart, Monitor, FileText } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting & Tally Services",
    desc: "Full accounting cycle management, invoice creation, tax filing & reporting.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Data cleaning, transformation, and insight generation for smarter decisions.",
  },
  {
    icon: Table2,
    title: "Excel Dashboard Creation",
    desc: "Advanced formulas, pivot tables, and interactive business dashboards.",
  },
  {
    icon: PieChart,
    title: "Power BI Reports",
    desc: "Interactive dashboards, data visualization, and business insights reporting.",
  },
  {
    icon: Monitor,
    title: "Office Software Training",
    desc: "Excel, Word, PowerPoint training with practical, industry-focused approach.",
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    desc: "Professional report creation and structured financial documentation.",
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-ice">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Services</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <s.icon className="text-accent mb-4" size={32} />
            <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
