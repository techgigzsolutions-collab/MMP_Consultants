import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Database, Globe, Layers, Lightbulb, BarChart3, HardDrive, HelpCircle, FileText} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/common/AnimatedCard";
import { containerVariants, itemVariants } from "@/lib/animations";

const services = [
  { icon: Lightbulb, title: "Business Consulting", description: "Strategic guidance, planning, and operational review to help your business perform with more confidence.", slug: "business-consulting" },
  { icon: Layers, title: "Project Coordination", description: "End-to-end coordination that keeps your initiatives on track, aligned, and delivered with clarity.", slug: "project-coordination" },
  { icon: FileText, title: "Documentation Support", description: "Clear process documentation, manuals, and operational guides that ensure consistency and knowledge retention.", slug: "documentation-support" },
  { icon: HelpCircle, title: "Technical Assistance", description: "Practical technical help for systems, platforms, and teams so your operations stay stable and productive.", slug: "technical-assistance" },
];

const Services = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Business and operational services designed for growth-focused teams.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Practical consulting, project coordination, documentation, and technical support that helps organisations improve execution and reduce risk.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
