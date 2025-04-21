
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Hero from "@/components/landing/Hero";
import BeforeAfterGallery from "@/components/landing/BeforeAfterGallery";
import Benefits from "@/components/landing/Benefits";
import UseCases from "@/components/landing/UseCases";
import PricingPackages from "@/components/landing/PricingPackages";
import Process from "@/components/landing/Process";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/landing/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-right rtl" dir="rtl">
      <CookieConsent />
      <Hero />
      <BeforeAfterGallery />
      <Benefits />
      <UseCases />
      <PricingPackages />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
