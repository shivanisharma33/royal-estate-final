import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPinned,
  ShieldCheck,
  Scale,
  UserCheck,
  HeartHandshake,
  Home,
} from "lucide-react";

const reasons = [
  {
    icon: MapPinned,
    title: "Local Market Expertise",
    description:
      "Deep knowledge of Mohali's micro-markets, trends, and future development plans.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every property is thoroughly verified for legal compliance and documentation.",
  },
  {
    icon: Scale,
    title: "Transparent Deals",
    description:
      "Clear pricing with no hidden charges. Complete transparency at every step.",
  },
  {
    icon: UserCheck,
    title: "Personalized Consultation",
    description:
      "Tailored advice based on your unique requirements, budget, and goals.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description:
      "From property search to registration, we're with you throughout the journey.",
  },
  {
    icon: Home,
    title: "Post-Sale Assistance",
    description:
      "Continued support after purchase, including possession, utilities, interiors, and resale guidance.",
  },
];

export const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* SECTION HEADING */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Promise
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="gradient-gold-text">Chandigarh Royal</span>
          </h2>

          <p className="text-muted-foreground">
            We don't just sell properties—we build lasting relationships based
            on trust, expertise, and genuine care for your success.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="luxury-card text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {reason.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
