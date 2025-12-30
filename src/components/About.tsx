import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import officeReception from "@/assets/property-1.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-charcoal-dark">
      <div className="container-luxury">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden gold-border-glow">
              <img
                src={officeReception}
                alt="Chandigarh Royal Office"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-heading font-bold">10+</p>
              <p className="text-sm font-medium">Years of Trust</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Your Trusted Partner in{" "}
              <span className="gradient-gold-text">Mohali Real Estate</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Chandigarh Royal Real Estate Pvt. Ltd., we specialize in
                premium property consulting and investment advisory services
                exclusively in Mohali (S.A.S. Nagar).
              </p>
              <p>
                With a deep understanding of the local market dynamics, we guide
                our clients through every step of their property journey—whether
                buying their dream home, investing in commercial spaces, or
                building a diversified real estate portfolio.
              </p>
              <p>
                Our commitment to transparency, integrity, and long-term
                relationships has made us the preferred choice for discerning
                investors and homebuyers in the region.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { number: "500+", label: "Properties Sold" },
                { number: "200+", label: "Happy Families" },
                { number: "100Cr+", label: "Investment Managed" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>       
        </div>
      </div>      
    </section>
  );
};
