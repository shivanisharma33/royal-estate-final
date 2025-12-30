import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const properties = [
  {
    image: property1,
    title: "Commercial SCO Complex",
    location: "HLP Galleria, Sector 62, Mohali",
    price: "",
    beds: null,
    baths: 2,
    area: "3500 sq.ft",
    type: "Commercial",
  },
  {
    image: property2,
    title: "Premium Executive Office",
    location: "IT City, Mohali",
    price: "",
    beds: null,
    baths: 2,
    area: "2800 sq.ft",
    type: "Commercial",
  },
  {
    image: property3,
    title: "Luxury Director's Cabin",
    location: "Sector 66, Mohali",
    price: "",
    beds: null,
    baths: 1,
    area: "1800 sq.ft",
    type: "Commercial",
  },
  {
    image: property4,
    title: "Modern Co-Working Space",
    location: "Phase 8B, Mohali",
    price: "",
    beds: null,
    baths: 2,
    area: "2200 sq.ft",
    type: "Commercial",
  },
];

export const Properties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="properties" className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Featured Properties
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Exclusive{" "}
            <span className="gradient-gold-text">Premium Listings</span>
          </h2>
          <p className="text-muted-foreground">
            Discover handpicked properties in Mohali's most sought-after
            locations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
                    {property.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-2xl font-heading font-bold text-foreground">
                    {property.price}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  {property.location}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                  {property.beds && (
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {property.beds} Beds
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    {property.area}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-semibold rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
