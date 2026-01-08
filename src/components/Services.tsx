import { motion, useInView } from "framer-motion";
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
      "Premium villas, luxury apartments, and independent houses in Mohali's most prestigious locations.",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Prime office spaces, retail showrooms, and business assets designed for long-term value.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Strategic real estate planning focused on appreciation, yield, and risk mitigation.",
  },
  {
    icon: RefreshCw,
    title: "Resale & Leasing",
    description:
      "End-to-end resale execution and high-quality tenant acquisition with full transparency.",
  },
  {
    icon: FileText,
    title: "Legal & Documentation",
    description:
      "Complete legal due diligence, compliance verification, and smooth registration support.",
  },
  {
    icon: Globe,
    title: "NRI & Investor Consulting",
    description:
      "Dedicated advisory for global investors with reporting, monitoring, and trusted execution.",
  },
];

export const Services = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="services"
      className="relative section-padding bg-background overflow-hidden"
    >
      {/* Soft luxury background */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-primary/5 rounded-full blur-[140px]" />

      <div className="container-luxury relative z-10">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
            Real Estate Services
            <br />
            <span className="gradient-gold-text">
              Designed Around You
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl">
            Our services are crafted to deliver clarity, confidence, and
            long-term value—whether you are buying, investing, or managing
            real estate assets.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-primary/40 transition-all"
            >
              {/* Accent Line */}
              <span className="absolute left-0 top-8 bottom-8 w-[3px] bg-gradient-to-b from-primary to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-6">
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
