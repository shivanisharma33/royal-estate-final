import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

/* ===============================
   IMAGE IMPORTS (VALID PATHS)
================================ */
import villa from "@/assets/villa.png";
import penthouse from "@/assets/penthouse.png";
import apartment from "@/assets/apartment.png";
import plot from "@/assets/plot.png";
import commercial from "@/assets/sco.png";

/* ===============================
   INVESTMENT DATA
================================ */
const investmentTypes = [
  {
    title: "Luxury Villas",
    description:
      "Independent luxury villas offering privacy, prestige, and strong long-term capital appreciation.",
    image: villa,
  },
  {
    title: "Penthouse Residences",
    description:
      "Ultra-premium penthouses designed for elite investors seeking exclusivity and high asset value.",
    image: penthouse,
  },
  {
    title: "Luxury Apartments",
    description:
      "Premium apartments in prime locations with excellent rental demand and stable appreciation.",
    image: apartment,
  },
  {
    title: "Residential Plots",
    description:
      "Strategic land investments offering flexibility, long-term growth, and future development potential.",
    image: plot,
  },
  {
    title: "Commercial SCOs",
    description:
      "High-yield commercial assets delivering consistent rental income and long-term business value.",
    image: commercial,
  },
];

/* ===============================
   COMPONENT
================================ */
export const InvestorInvestmentTypes = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-primary font-medium tracking-[0.25em] uppercase text-sm mb-4">
            Investment Focus
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Where you can{" "}
            <span className="gradient-gold-text"> Invest</span>
          </h2>

        </motion.div>

        {/* ===== Cards ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {investmentTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  Explore Investment
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
