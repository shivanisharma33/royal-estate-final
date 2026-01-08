import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import heroVideo from "@/assets/chd-hero.mp4"; // <-- add your video here

export const Hero = () => {
  const [openConsultation, setOpenConsultation] = useState(false);

  const scrollToProperties = () => {
    const section = document.getElementById("properties");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Chandigarh Royal Real Estate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6"
          >
            Building Trust.{" "}
            <span className="gradient-gold-text">
              Creating Royal Investments.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Luxury Homes | Smart Investments | Trusted Advisors
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToProperties}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,165,116,0.5)] w-full sm:w-auto"
            >
              Explore Properties
            </button>

            <button
              onClick={() => setOpenConsultation(true)}
              className="px-8 py-4 border border-primary text-primary font-semibold rounded transition-all duration-300 hover:bg-primary/10 w-full sm:w-auto"
            >
              Book a Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>


      {/* CONSULTATION POPUP */}
      <AnimatePresence>
        {openConsultation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-2xl p-8 max-w-md w-full border border-border"
            >
              <h3 className="text-2xl font-bold mb-2">
                Book a Consultation
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Speak directly with our property experts.
              </p>

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
                <select className="w-full h-12 px-4 rounded border border-border bg-white text-black">
                  <option>Investment Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Agricultural</option>
                </select>

                <button
                  type="submit"
                  className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded hover:bg-gold-light transition"
                >
                  Request Callback
                </button>
              </form>

              <button
                onClick={() => setOpenConsultation(false)}
                className="mt-4 text-sm text-muted-foreground hover:text-primary"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
