"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="none"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Experience", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Aura Travel"
      button={{ text: "Book Now", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="AURA TRAVEL"
      description="Curating bespoke journeys to the world's most exclusive destinations."
      buttons={[
        {
          text: "Start Your Journey",          href: "#contact"},
      ]}
      slides={[
        { imageSrc: "https://pixabay.com/get/g2498866d375265078484ee882dc50107b31cc8dd130bbbc87f2806611a17c98aa414724e23fccad6ef1bac581a296fc130a3248e029abaf7f0bf704aca96e262_1280.jpg", imageAlt: "Luxury travel view" },
        { imageSrc: "https://pixabay.com/get/g2498866d375265078484ee882dc50107b31cc8dd130bbbc87f2806611a17c98aa414724e23fccad6ef1bac581a296fc130a3248e029abaf7f0bf704aca96e262_1280.jpg", imageAlt: "Exclusive destination" },
        { imageSrc: "https://pixabay.com/get/g2498866d375265078484ee882dc50107b31cc8dd130bbbc87f2806611a17c98aa414724e23fccad6ef1bac581a296fc130a3248e029abaf7f0bf704aca96e262_1280.jpg", imageAlt: "Travel adventure" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "Redefining " },
        { type: "image", src: "https://pixabay.com/get/g5b754b6b846c817cf6e5b19884c4e11928a2b7793a491e3f4111d7c0e0c98125b0c9cc2977cac7c73a180d6894e27a2c6018ac9fac30f16fb2b3947c872e6439_1280.jpg", alt: "Luxury" },
        { type: "text", content: " Exploration" },
      ]}
      buttons={[{ text: "Discover More", href: "#features" }]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      uniformGridCustomHeightClasses="h-64"
      features={[
        { title: "Private Air", description: "Seamless travel on your terms.", imageSrc: "https://pixabay.com/get/g5828e1ca9cdb8ab20bae4f25ac67c541b0f3bf63494f2d52ffc7ba113ecd4cfd6419a498eb0ddcfe96cd2c7d7f06325fd55b6affe2385240137f296ab8726ff4_1280.jpg" },
        { title: "Secluded Estates", description: "Private villas in remote locations.", imageSrc: "https://pixabay.com/get/gff30c2d5aa0a287f45c3505fbf791bdec13d7c43ac8b676264f3e8fc509338a056e6e4bca7634c5ecff4c8e63beb5b5f6dfd7a3168788ab3b11fc4674248fe6c_1280.jpg" },
        { title: "Gourmet Dining", description: "Michelin-star experiences anywhere.", imageSrc: "https://pixabay.com/get/g0f7fc6297e5a23cb2c50300c55c7bd98ef74e7f9f7ab3dfd938a8dd1dc8d4cdff49255cacc8f9764056f656ec6455d8d561ac8c58a9db3102a0ca3be13a4cf0b_1280.jpg" },
      ]}
      title="Unrivaled Comfort"
      description="Every detail of your journey is handled with precision."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { id: 1, title: "Consultation", description: "Define your dreams.", phoneOne: { imageSrc: "https://pixabay.com/get/g5828e1ca9cdb8ab20bae4f25ac67c541b0f3bf63494f2d52ffc7ba113ecd4cfd6419a498eb0ddcfe96cd2c7d7f06325fd55b6affe2385240137f296ab8726ff4_1280.jpg" }, phoneTwo: { imageSrc: "https://pixabay.com/get/g5828e1ca9cdb8ab20bae4f25ac67c541b0f3bf63494f2d52ffc7ba113ecd4cfd6419a498eb0ddcfe96cd2c7d7f06325fd55b6affe2385240137f296ab8726ff4_1280.jpg" } },
        { id: 2, title: "Curation", description: "We build your route.", phoneOne: { imageSrc: "https://pixabay.com/get/gff30c2d5aa0a287f45c3505fbf791bdec13d7c43ac8b676264f3e8fc509338a056e6e4bca7634c5ecff4c8e63beb5b5f6dfd7a3168788ab3b11fc4674248fe6c_1280.jpg" }, phoneTwo: { imageSrc: "https://pixabay.com/get/gff30c2d5aa0a287f45c3505fbf791bdec13d7c43ac8b676264f3e8fc509338a056e6e4bca7634c5ecff4c8e63beb5b5f6dfd7a3168788ab3b11fc4674248fe6c_1280.jpg" } },
        { id: 3, title: "Execution", description: "You travel flawlessly.", phoneOne: { imageSrc: "https://pixabay.com/get/g0f7fc6297e5a23cb2c50300c55c7bd98ef74e7f9f7ab3dfd938a8dd1dc8d4cdff49255cacc8f9764056f656ec6455d8d561ac8c58a9db3102a0ca3be13a4cf0b_1280.jpg" }, phoneTwo: { imageSrc: "https://pixabay.com/get/g0f7fc6297e5a23cb2c50300c55c7bd98ef74e7f9f7ab3dfd938a8dd1dc8d4cdff49255cacc8f9764056f656ec6455d8d561ac8c58a9db3102a0ca3be13a4cf0b_1280.jpg" } },
      ]}
      showStepNumbers={true}
      title="Your Custom Journey"
      description="Our three-step process to perfection."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "1", title: "Maldives", description: "Oasis of peace.", tag: "Ocean", imageSrc: "https://pixabay.com/get/gff30c2d5aa0a287f45c3505fbf791bdec13d7c43ac8b676264f3e8fc509338a056e6e4bca7634c5ecff4c8e63beb5b5f6dfd7a3168788ab3b11fc4674248fe6c_1280.jpg" },
        { id: "2", title: "Swiss Alps", description: "Majestic peaks.", tag: "Mountain", imageSrc: "https://pixabay.com/get/g0f7fc6297e5a23cb2c50300c55c7bd98ef74e7f9f7ab3dfd938a8dd1dc8d4cdff49255cacc8f9764056f656ec6455d8d561ac8c58a9db3102a0ca3be13a4cf0b_1280.jpg" },
        { id: "3", title: "Kyoto", description: "Serenity redefined.", tag: "Culture", imageSrc: "https://pixabay.com/get/g5828e1ca9cdb8ab20bae4f25ac67c541b0f3bf63494f2d52ffc7ba113ecd4cfd6419a498eb0ddcfe96cd2c7d7f06325fd55b6affe2385240137f296ab8726ff4_1280.jpg" },
      ]}
      title="Signature Destinations"
      description="Inspiring landscapes and experiences."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah Miller", date: "Jan 2024", title: "Founder", quote: "Exceptional service from beginning to end.", tag: "Luxury", avatarSrc: "https://pixabay.com/get/g8199db94d44a775f82360f3204102493f0ea805e3c0bd59cdaba00a2883882f805c39a4f3012ab9c1838edce80cb5b40d9c504c8ec2cef98ccf9aa70d3454b6e_1280.jpg", imageSrc: "https://pixabay.com/get/g810f895100975d644323346810f2c579cfeec2cb0dfc55ebdd720ad497d7a7db56f2834e124b00139baabc2f97f36e31f5d85ae3a6eb988109cb6520c5f1865b_1280.jpg" },
        { id: "2", name: "David Clark", date: "Feb 2024", title: "Director", quote: "Truly unique travel experiences found nowhere else.", tag: "Bespoke", avatarSrc: "https://pixabay.com/get/gbc50759d8a3b751c2c73c8ce29fe0bbc985650f574ab3ffa17e0b0e0950be74f1db6f7d1702c89aaaff744aec991adef4027042ea3f40fc243c025281eb755d1_1280.jpg", imageSrc: "https://pixabay.com/get/g8f208239f84c874223da8322e3fb9c137291988371712f96aa3938e9b0fc59c8c5ccd8fb2f6c2ebe34d7df9df18a8d235ed4b98ad0e63a6271e7b6dea34edd7d_1280.jpg" },
        { id: "3", name: "Elena Rossi", date: "Mar 2024", title: "Consultant", quote: "The team made our dream vacation a reality.", tag: "Premium", avatarSrc: "https://pixabay.com/get/g1151c4056b2f099024c58e448a0bfc7d4d297410936379d4d143d4d67ad07255234b9033c496fc4cecfb8481b760667cd8c6db404cfc5b07d2adbcf47311a12c_1280.jpg", imageSrc: "https://pixabay.com/get/gaee7c1defa0a797a6edbdb9d46f062526ae611899c8c359738c83b39deebce3c58b79e38228201ae5abe242daf11cde4d7531c3ead1d2a508e73bdcecfb839c6_1280.jpg" },
        { id: "4", name: "Mark Jones", date: "Apr 2024", title: "Executive", quote: "Flawless planning and incredible attention to detail.", tag: "Elite", avatarSrc: "https://pixabay.com/get/gcd900a8707e558284b9b549f34f00b409f47e964be457e0ed7cdcb68c2793528079c67a188a270451abdcad906f6ad7837f8cb5da0334649a037c2d7c5dc0939_1280.jpg", imageSrc: "https://pixabay.com/get/gbec21ff2e9b1c1eb22487cdfb832f4308ff78385142135cf08b5ccebba70fb3f1125d385fe100ce764c756aaf68da4a63f11b6e92ac1c2baace8554e925e9131_1280.jpg" },
      ]}
      title="Client Journeys"
      description="What our exclusive guests say about their experiences."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Journey"
      description="Reach out to design your next exclusive escape."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true },
      ]}
      textarea={{ name: "details", placeholder: "Where do you want to go?", rows: 4 }}
      imageSrc="https://pixabay.com/get/g3c4175c6c040c612bbbc1078f847fb5d1394419d1a1e45597ab29c9e083c4efe4ead53c8d66ca7f31a047304ed6a5fc5d03127910e36c3d4b3f8806e96c12c9b_1280.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="AURA TRAVEL"
      copyrightText="© 2025 Aura Travel. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
