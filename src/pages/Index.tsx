import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Investors } from "@/components/Investors";
import { InvestorInvestmentTypes } from "@/components/InvestorInvestmentTypes";
import { Areas } from "@/components/Areas";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Chandigarh Royal Real Estate Pvt. Ltd. | Luxury Properties in Mohali
        </title>
        <meta
          name="description"
          content="Chandigarh Royal Real Estate - Premium property investment advisors in Mohali. Luxury homes, smart investments, and trusted advisory services in S.A.S. Nagar."
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
           {/* ✅ Investor Investment Section */}
        <InvestorInvestmentTypes />
        <About />
        <Services />
        <Investors />

     

        <Areas />
        <WhyChooseUs />
        <FAQ />
        <CTA />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
