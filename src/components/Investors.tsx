import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Lightbulb,
  Building,
  Rocket,
  BarChart3,
  Briefcase,
  Shield,
  TrendingUp,
  Target,
  RefreshCw,
  Database,
  Eye,
  Handshake,
} from "lucide-react";

/* ================= DATA (UNCHANGED) ================= */

const investorTypes = [
  {
    icon: Users,
    title: "Individual & Retail Investors",
    description:
      "Focused on long-term wealth creation through diversified, structured investment strategies driven by consistency, discipline, and compounding.",
  },
  {
    icon: Lightbulb,
    title: "Angel Investors",
    description:
      "Supporting early-stage opportunities with capital, mentorship, and strategic insight to guide smarter decisions from day one.",
  },
  {
    icon: Building,
    title: "Institutional & Strategic Investors",
    description:
      "Providing stability, scale, governance, and disciplined long-term capital across public and private markets.",
  },
  {
    icon: Rocket,
    title: "Growth & Venture Capital Partners",
    description:
      "Empowering expansion, market entry, operational refinement, and long-term value creation.",
  },
];

const deploymentAreas = [
  { icon: BarChart3, title: "Equity Markets", subtitle: "Ownership-driven growth" },
  { icon: Briefcase, title: "Private & Growth Capital", subtitle: "Scaling high-potential businesses" },
  { icon: Shield, title: "Debt & Structured Instruments", subtitle: "Balancing risk & stability" },
  { icon: TrendingUp, title: "Long-term Assets", subtitle: "Consistency and resilience" },
];

const guidingPoints = [
  "Goal-driven diversified portfolios",
  "Downside risk reduction through disciplined allocation",
  "Continuous performance review & strategy evolution",
  "Data-led decision making over market noise",
];

const growthFocus = [
  "Compounding value through reinvestment",
  "Strong business fundamentals",
  "Sustainability over speculation",
  "Predictable, patient growth paths",
];

const shareCapitalHighlights = [
  "Transparent share structures",
  "Aligned founder–investor interests",
  "Clear governance & accountability",
  "Long-term value over short-term dilution",
];

const ongoingSupport = [
  "Continuous portfolio monitoring",
  "Strategic guidance & reporting",
  "Risk management & compliance",
  "Long-term planning aligned with life and business milestones",
];

/* ================= COMPONENT ================= */

export const Investors = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="investors" className="section-padding bg-charcoal-dark">
      <div className="container-luxury" ref={ref}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <p className="text-primary tracking-[0.25em] uppercase text-sm mb-4">
            For Investors
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Investing with Purpose.{" "}
            <span className="gradient-gold-text">Growing with Confidence.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At its core, investing is about trust—trust in strategy, in people,
            and in a shared long-term vision. The right investment approach
            doesn't just aim for returns; it creates sustainable growth,
            protects capital, and builds a secure future for everyone involved.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We work with a clear understanding that every investor and every
            client has different goals. Our role is to align capital with
            opportunity—responsibly, strategically, and transparently.
          </p>
        </motion.div>

        {/* INVESTOR TYPES */}
        <motion.div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
            Our Investor Ecosystem
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {investorTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="luxury-card flex gap-5 hover:border-primary/40 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-semibold mb-2">
                    {type.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DEPLOYMENT */}
        <motion.div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
            Where Capital Is Deployed
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="luxury-card text-center hover:border-primary/40 transition"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold mb-1">
                  {area.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {area.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* STRATEGY */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {[{
            icon: Target,
            title: "Guiding Investors Toward the Right Decisions",
            points: guidingPoints,
          },{
            icon: RefreshCw,
            title: "Driving Long-Term Growth, Not Short-Term Gains",
            points: growthFocus,
          }].map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="luxury-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <block.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-heading font-bold">
                  {block.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {block.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* OWNERSHIP & SUPPORT */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[{
            icon: Database,
            title: "Share Capital: Building Ownership & Stability",
            points: shareCapitalHighlights,
          },{
            icon: Eye,
            title: "Ongoing Support That Secures the Future",
            points: ongoingSupport,
          }].map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="luxury-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <block.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-heading font-bold">
                  {block.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {block.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CLOSING */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Handshake className="w-12 h-12 mx-auto text-primary mb-6" />
          <p className="text-xl md:text-2xl font-heading italic">
            "We act as partners, not intermediaries—protecting capital today
            while building opportunities for tomorrow."
          </p>
        </motion.div>

      </div>
    </section>
  );
};
