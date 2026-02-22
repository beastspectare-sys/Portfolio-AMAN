import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center bg-background pt-16">
    <div className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Welcome
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Aman Dolani
          </h1>
          <p className="text-lg text-accent font-medium mb-4">
            Accounting & Data Analysis Professional | Tally,PowerBI & Excel Specialist | Aspiring Data Analyst
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            A motivated and detail-oriented Commerce undergraduate with hands-on experience as a
            Tally,PowerBI and Mircrosoft Office Trainer. Skilled in accounting principles, advanced Excel, Power
            BI reporting, and financial data management. Passionate about transitioning into the data
            analytics field while building a strong career in finance and administration.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-navy-light transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img
              src={profileImg}
              alt="Aman Dolani – Professional Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
