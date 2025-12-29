import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";

export const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(38, 65%, 50%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-8 animate-glow"
          >
            <Phone className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Looking to Buy or Invest in{" "}
            <span className="gradient-gold-text">Mohali?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10">
            Let our experts guide you to the perfect property. Schedule a free
            consultation with our investment advisors today.
          </p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(212,165,116,0.5)]"
          >
            <Phone className="w-5 h-5" />
            Get a Call Back
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
