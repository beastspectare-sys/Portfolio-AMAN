import { motion } from "framer-motion";
import dashboardImg from "@/assets/powerbi_dashboard.png"; // change if needed

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Portfolio
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-card rounded-xl overflow-hidden shadow-md border border-border"
      >
   <div className="w-full flex justify-center bg-gray-100 rounded-2xl p-6">
  <img
    src={dashboardImg}
    alt="Power BI Dashboard"
    className="w-full max-w-4xl h-auto object-contain rounded-xl shadow-xl"
  />
</div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-foreground mb-3 font-sans">
            Power BI Dashboard for Freelance Company
          </h3>

          <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed mb-5">
            <li>• Designed and developed an interactive Power BI dashboard.</li>
            <li>• Built visual reports to track financial and operational metrics.</li>
            <li>• Created structured data visualizations for decision-making.</li>
            <li>• Provided insights to improve business performance.</li>
          </ul>

          {/* Skills Tags */}
          <div className="flex gap-2 flex-wrap mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
              Power BI
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
              Excel
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
              Data Visualization
            </span>
          </div>

          {/* Download Button */}
          <a
            href="/Aman_PowerBI_Report.pbix"
            download
            className="inline-block px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Download Power BI Report
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Portfolio;