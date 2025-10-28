"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Bot, Globe, Linkedin, MessageCircle, Plane, Settings, Twitter, Users, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Services", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Team", id: "team" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="HQ Travel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Global Ground Transportation at Your Fingertips"
          description="Built for Enterprises | Powered by AI | Loved by People. Experience seamless travel management with our comprehensive transportation solutions designed for modern businesses."
          tag="Enterprise Travel"
          tagIcon={Plane}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/2504936/pexels-photo-2504936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury transportation services"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About HQ Travel"
          description={[
            "We revolutionize corporate travel with AI-powered ground transportation solutions that connect enterprises worldwide.",
            "Our platform delivers reliability, efficiency, and premium service that transforms how businesses manage their travel needs."
          ]}
          buttons={[{ text: "View Services", href: "feature" }]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Built for Modern Enterprises"
          description="Discover the powerful features that make HQ Travel the preferred choice for global corporations"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "AI-Powered Optimization",
              description: "Our intelligent system optimizes routes, predicts traffic, and ensures the most efficient transportation solutions for your team.",
              icon: Bot,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Global Network Coverage",
              description: "Access reliable ground transportation in over 100 countries with our extensive partner network and local expertise.",
              icon: Globe,
              button: { text: "Explore Coverage", href: "contact" }
            },
            {
              title: "Enterprise Integration",
              description: "Seamlessly integrate with your existing travel management systems and corporate tools for streamlined operations.",
              icon: Settings,
              button: { text: "View Integration", href: "contact" }
            }
          ]}
          layout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Leadership Team"
          description="The experienced professionals driving innovation in corporate travel solutions"
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Chief Executive Officer",
              imageSrc: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarah-mitchell" },
                { icon: Twitter, url: "https://twitter.com/sarahmitchell" }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Chief Technology Officer",
              imageSrc: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/michael-chen" }
              ]
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "VP of Operations",
              imageSrc: "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/emma-rodriguez" }
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about HQ Travel's enterprise transportation solutions"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "How does HQ Travel's AI optimization work?",
              content: "Our AI system analyzes real-time traffic data, weather conditions, and historical patterns to optimize routes and predict the most efficient transportation options for your business travel needs."
            },
            {
              id: "2",
              title: "What countries does HQ Travel operate in?",
              content: "We provide ground transportation services in over 100 countries worldwide through our extensive network of vetted local partners and premium service providers."
            },
            {
              id: "3",
              title: "Can HQ Travel integrate with our existing systems?",
              content: "Yes, our platform offers seamless integration with popular travel management systems, expense platforms, and corporate booking tools through our comprehensive API."
            },
            {
              id: "4",
              title: "What support is available for enterprise clients?",
              content: "Enterprise clients receive dedicated account management, 24/7 support, priority booking assistance, and custom reporting to meet their specific business requirements."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={MessageCircle}
          title="Ready to Transform Your Corporate Travel?"
          description="Join leading enterprises worldwide who trust HQ Travel for their ground transportation needs. Get started today with a personalized consultation."
          inputPlaceholder="Enter your business email"
          buttonText="Request Demo"
          termsText="By submitting, you agree to receive communications about HQ Travel's enterprise solutions."
          imageSrc="https://images.pexels.com/photos/2834804/pexels-photo-2834804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Global travel network"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Global Transportation", href: "feature" },
                { label: "AI Optimization", href: "feature" },
                { label: "Enterprise Solutions", href: "about" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Help Center", href: "https://help.hqtravel.com" },
                { label: "API Documentation", href: "https://docs.hqtravel.com" }
              ]
            }
          ]}
          copyrightText="© 2025 | HQ Travel - Global Ground Transportation Solutions"
        />
      </div>
    </ThemeProvider>
  );
}