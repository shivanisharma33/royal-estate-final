import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why do you only operate in Mohali?",
    answer:
      "We believe in expertise over expansion. By focusing exclusively on Mohali (S.A.S. Nagar), we've developed unparalleled knowledge of every sector, micro-market trends, upcoming developments, and local regulations. This specialization allows us to provide more accurate valuations, better investment insights, and faster transactions for our clients.",
  },
  {
    question: "How do you verify properties before listing?",
    answer:
      "Every property undergoes a comprehensive verification process including title verification, encumbrance certificate check, RERA compliance verification, building plan approval status, NOC from relevant authorities, and physical site inspection. We also verify the seller's identity and ownership documents to ensure completely transparent transactions.",
  },
  {
    question: "What investment advisory services do you offer?",
    answer:
      "Our investment advisory services include portfolio strategy development, risk assessment, market analysis, ROI projections, diversification planning, and ongoing portfolio monitoring. We help both first-time investors and seasoned players make informed decisions aligned with their financial goals.",
  },
  {
    question: "Do you assist NRI investors?",
    answer:
      "Absolutely. We offer specialized NRI services including power of attorney management, virtual property tours, documentation handling, rental management, legal compliance, and regular reporting. Our team understands the unique challenges faced by overseas investors and provides end-to-end support.",
  },
  {
    question: "How does the property resale process work?",
    answer:
      "For resale properties, we handle everything from property valuation, marketing, buyer screening, negotiation, legal documentation, to registration. We ensure optimal pricing based on current market conditions and our extensive buyer network helps in faster closures.",
  },
  {
    question: "What legal support do you provide?",
    answer:
      "Our legal team assists with title verification, sale agreement drafting, stamp duty calculation, registration support, mutation, and any post-sale legal requirements. We ensure all transactions are compliant with local laws and regulations.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="gradient-gold-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg bg-card px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-foreground hover:text-primary text-left font-heading font-semibold py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
