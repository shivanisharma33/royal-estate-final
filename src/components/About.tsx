import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import officeReception from "@/assets/property-1.jpg";

export const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="about"
      className="relative section-padding bg-charcoal-dark overflow-hidden"
    >
      {/* Ambient Luxury Glows */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-luxury relative z-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* LEFT – EDITORIAL CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6"
          >
            <div className="relative pl-6">
              {/* Vertical Accent */}
              <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent" />

              <p className="text-primary tracking-[0.3em] uppercase text-xs mb-5">
                About Chandigarh Royal
              </p>

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight mb-8">
                Crafted for Those Who
                <br />
                <span className="gradient-gold-text">
                  Value Trust & Growth
                </span>
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  Chandigarh Royal Real Estate Pvt. Ltd. is a boutique property
                  advisory firm focused exclusively on Mohali (S.A.S. Nagar),
                  serving high-net-worth individuals, investors, and families.
                </p>
                <p>
                  We combine deep local intelligence, verified inventory, and a
                  consultative mindset to deliver opportunities that stand the
                  test of time.
                </p>
                <p>
                  Our success is built on discretion, clarity, and long-term
                  partnerships — not volume-driven sales.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – IMAGE & STATS */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Image Stack */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl gold-border-glow">
              <img
                src={officeReception}
                alt="Chandigarh Royal Office"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>

            {/* Floating Experience Card */}
        

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-16">
              {[
                { number: "500+", label: "Properties Sold" },
                { number: "200+", label: "Happy Clients" },
                { number: "100Cr+", label: "Assets Managed" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 py-6 text-center"
                >
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
