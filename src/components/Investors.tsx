import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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

export const Investors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="investors" className="section-padding bg-charcoal-dark">
      <div className="container-luxury" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            For Investors
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
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

        {/* Investor Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-4">
            Our Investor Ecosystem
          </h3>
          <p className="text-muted-foreground text-center mb-10">
            Who We Work With
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {investorTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="luxury-card flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {type.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Where Capital Is Deployed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">
            Where Capital Is Deployed
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center luxury-card"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {area.title}
                </h4>
                <p className="text-sm text-muted-foreground">{area.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Guiding Investors */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="luxury-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-heading font-bold text-foreground">
                Guiding Investors Toward the Right Decisions
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Our approach begins with understanding—not selling. We assess risk
              appetite, time horizon, and financial objectives before structuring
              any investment strategy.
            </p>
            <ul className="space-y-3">
              {guidingPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Long-Term Growth */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="luxury-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-heading font-bold text-foreground">
                Driving Long-Term Growth, Not Short-Term Gains
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              We focus on building lasting value through disciplined, patient
              investment strategies that prioritize fundamentals over speculation.
            </p>
            <ul className="space-y-3">
              {growthFocus.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Share Capital & Ongoing Support */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="luxury-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-heading font-bold text-foreground">
                Share Capital: Building Ownership & Stability
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Share capital represents ownership, confidence, and long-term
              commitment—enabling growth without immediate repayment pressure
              while aligning founders and investors.
            </p>
            <ul className="space-y-3">
              {shareCapitalHighlights.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="luxury-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-heading font-bold text-foreground">
                Ongoing Support That Secures the Future
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Our relationship with investors extends beyond deployment through
              continuous monitoring and strategic guidance.
            </p>
            <ul className="space-y-3">
              {ongoingSupport.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Handshake className="w-12 h-12 text-primary" />
          </div>
          <p className="text-xl md:text-2xl font-heading text-foreground italic">
            "We act as partners, not intermediaries—protecting capital today
            while building opportunities for tomorrow."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
