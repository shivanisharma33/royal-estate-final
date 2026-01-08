import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ===============================
   IMAGE IMPORTS
================================ */
import villa from "@/assets/villa.png";
import apartment from "@/assets/apartment.png";
import plot from "@/assets/plot.png";
import officeCabin from "@/assets/office-cabin.jpg";
import officeReception from "@/assets/cor.png";
import mall from "@/assets/mall2.jpg";
import foodEntertainment from "@/assets/food.jpg";
import agriculture from "@/assets/plot.png";

/* ===============================
   PROPERTY TYPES
================================ */
const PROPERTY_TYPES = {
  Residential: [
    "Flat",
    "House / Villa",
    "Society Apartment",
    "Plot",
    "Farm House",
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "5 BHK",
    "5+ BHK",
  ],
  Commercial: [
    "Office Space",
    "Shop / Showroom",
    "Food & Entertainment",
    "Mall / Multiplex",
    "Hotel",
    "Commercial Land",
    "Warehouse / Godown",
    "Industrial Building",
    "Industrial Shed",
  ],
  Agricultural: ["Agricultural Land"],
};

/* ===============================
   DATA
================================ */
const investmentTypes = [
  {
    title: "Residential Society Apartments",
    category: "Residential",
    propertyType: "Society Apartment",
    location: "Mohali",
    price: 85,
    popularity: 78,
    createdAt: "2025-12-20",
    image: apartment,
    description:
      "Well-planned residential societies offering security, amenities, and rental demand.",
  },
  {
    title: "Luxury Independent Villa",
    category: "Residential",
    propertyType: "House / Villa",
    location: "New Chandigarh",
    price: 420,
    popularity: 95,
    createdAt: "2026-01-02",
    image: villa,
    description:
      "Ultra-luxury villas designed for premium living and long-term appreciation.",
  },
  {
    title: "Corporate Office Space",
    category: "Commercial",
    propertyType: "Office Space",
    location: "Mohali",
    price: 260,
    popularity: 82,
    createdAt: "2025-12-10",
    image: officeCabin,
    description:
      "Grade-A office spaces ideal for IT firms and corporate leasing.",
  },
  {
    title: "Retail Mall & Entertainment Zone",
    category: "Commercial",
    propertyType: "Mall / Multiplex",
    location: "Zirakpur",
    price: 380,
    popularity: 90,
    createdAt: "2026-01-05",
    image: mall,
    description:
      "High-footfall malls with retail, food courts, and entertainment facilities.",
  },
  {
    title: "Food & Entertainment Complex",
    category: "Commercial",
    propertyType: "Food & Entertainment",
    location: "Mohali",
    price: 210,
    popularity: 85,
    createdAt: "2025-12-28",
    image: foodEntertainment,
    description:
      "Restaurant clusters and entertainment hubs with strong consumer demand.",
  },
  {
    title: "Hotel & Hospitality Asset",
    category: "Commercial",
    propertyType: "Hotel",
    location: "New Chandigarh",
    price: 500,
    popularity: 92,
    createdAt: "2026-01-01",
    image: officeReception,
    description:
      "Hospitality-focused investments delivering steady long-term revenue.",
  },
  {
    title: "Agricultural Land Parcel",
    category: "Agricultural",
    propertyType: "Agricultural Land",
    location: "New Chandigarh",
    price: 150,
    popularity: 60,
    createdAt: "2025-11-15",
    image: agriculture,
    description:
      "Secure agricultural land investment with future appreciation potential.",
  },
];

/* ===============================
   INPUT STYLE
================================ */
const inputBase =
  "w-full h-[52px] px-4 rounded-xl bg-white text-black text-sm " +
  "border border-border focus:outline-none focus:border-[#C58A2D]";

/* ===============================
   CUSTOM SELECT
================================ */
const CustomSelect = ({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`${inputBase} flex items-center justify-between`}
      >
        <span>{value}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#C58A2D] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute z-[999] mt-2 w-full bg-white border border-border rounded-xl shadow-2xl"
          >
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="px-4 py-3 text-sm cursor-pointer hover:bg-[#F5EFE6] text-black"
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ===============================
   COMPONENT
================================ */
export const InvestorInvestmentTypes = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [category, setCategory] = useState("All");
  const [propertyType, setPropertyType] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");
  const [budget, setBudget] = useState([50, 600]);

  const propertyTypeOptions = useMemo(() => {
    if (category === "Residential")
      return ["All", ...PROPERTY_TYPES.Residential];
    if (category === "Commercial")
      return ["All", ...PROPERTY_TYPES.Commercial];
    if (category === "Agricultural")
      return ["All", ...PROPERTY_TYPES.Agricultural];
    return ["All"];
  }, [category]);

  const filteredData = useMemo(() => {
    let data = investmentTypes.filter(
      (item) =>
        (location === "All" || item.location === location) &&
        (category === "All" || item.category === category) &&
        (propertyType === "All" || item.propertyType === propertyType) &&
        item.price >= budget[0] &&
        item.price <= budget[1] &&
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === "Latest") {
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
    }

    if (sortBy === "Oldest") {
      data.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      );
    }

    if (sortBy === "Popular") {
      data.sort((a, b) => b.popularity - a.popularity);
    }

    return data;
  }, [search, location, category, propertyType, budget, sortBy]);

  return (
    <section
      id="properties"
      className="py-28 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#C58A2D] tracking-[0.3em] uppercase text-sm mb-4">
            Investment Focus
          </p>
          <h2 className="text-4xl font-bold text-white">
            Where You Can <span className="gradient-gold-text">Invest</span>
          </h2>
        </motion.div>

        {/* FILTER BAR */}
        <div className="relative z-[100] grid lg:grid-cols-6 gap-6 mb-16 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search property..."
            className={inputBase}
          />

          <CustomSelect
            value={location}
            onChange={setLocation}
            options={["All", "New Chandigarh", "Mohali", "Zirakpur"]}
          />

          <CustomSelect
            value={category}
            onChange={(v) => {
              setCategory(v);
              setPropertyType("All");
            }}
            options={["All", "Residential", "Commercial", "Agricultural"]}
          />

          <CustomSelect
            value={propertyType}
            onChange={setPropertyType}
            options={propertyTypeOptions}
          />

          <CustomSelect
            value={sortBy}
            onChange={setSortBy}
            options={["Latest", "Popular", "Oldest"]}
          />

          <div>
            <p className="text-sm text-white mb-1">Budget</p>
            <p className="text-xs text-white mb-2">
              ₹ {budget[0]}L – ₹ {budget[1]}L
            </p>
            <input
              type="range"
              min={50}
              max={600}
              value={budget[1]}
              onChange={(e) => setBudget([budget[0], +e.target.value])}
              className="w-full accent-[#C58A2D]"
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {filteredData.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border hover:border-[#C58A2D]"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover rounded-t-2xl"
                />
                <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  ★ {item.popularity}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-white">
                    ₹ {item.price} Lakh+
                  </span>
                  <span className="text-[#C58A2D] flex items-center gap-1">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
