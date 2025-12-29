import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  Building2,
  TrendingUp,
  RefreshCw,
  FileText,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Properties",
    description:
      "Premium villas, luxury apartments, and independent houses in Mohali's finest localities.",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Prime office spaces, retail showrooms, and commercial complexes for your business growth.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Strategic investment guidance to maximize returns on your real estate portfolio.",
  },
  {
    icon: RefreshCw,
    title: "Property Resale & Leasing",
    description:
      "Seamless resale transactions and lucrative leasing opportunities managed end-to-end.",
  },
  {
    icon: FileText,
    title: "Legal & Documentation",
    description:
      "Complete legal support including title verification, registration, and compliance.",
  },
  {
    icon: Globe,
    title: "NRI & Investor Consulting",
    description:
      "Specialized services for overseas investors with transparent reporting and updates.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Real Estate{" "}
            <span className="gradient-gold-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            From property search to investment advisory, we offer end-to-end
            services tailored to your unique requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group luxury-card hover:border-primary cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
