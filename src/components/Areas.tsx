import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const areas = [
  "Sector 62",
  "Sector 66 & 67",
  "Phase 7, 8, 9",
  "Airport Road",
  "Aerocity",
  "IT City",
  "Upcoming Commercial Zones",
  "New Residential Sectors",
];

export const Areas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Coverage
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Areas We Serve in{" "}
            <span className="gradient-gold-text">Mohali</span>
          </h2>
          <p className="text-muted-foreground">
            Exclusively focused on S.A.S. Nagar (Mohali), we have deep expertise
            in these prime locations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                {area}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
