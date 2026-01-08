import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, X } from "lucide-react";

export const CTA = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openCallback, setOpenCallback] = useState(false);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(38, 65%, 50%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Looking to Buy or Invest in{" "}
            <span className="gradient-gold-text">Mohali?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10">
            Let our experts guide you to the perfect property. Schedule a free
            consultation with our investment advisors today.
          </p>

          {/* CTA BUTTON */}
          <motion.button
            onClick={() => setOpenCallback(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(212,165,116,0.5)]"
          >
            <Phone className="w-5 h-5" />
            Get a Call Back
          </motion.button>
        </motion.div>
      </div>

      {/* CALLBACK POPUP */}
      <AnimatePresence>
        {openCallback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4"
            onClick={() => setOpenCallback(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-2xl p-8 w-full max-w-md border border-border relative"
            >
              {/* Close */}
              <button
                onClick={() => setOpenCallback(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-heading font-bold mb-2">
                Request a Call Back
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Our advisor will contact you shortly.
              </p>

              {/* FORM */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-12 px-4 rounded border border-border bg-white text-black"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-12 px-4 rounded border border-border bg-white text-black"
                />

                <button
                  type="submit"
                  className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded hover:bg-gold-light transition"
                >
                  Request Callback
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
