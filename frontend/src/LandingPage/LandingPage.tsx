import { HeroSection } from "./HeroSection/HeroSection";
import { NavBar } from "@/SharedComponents/NavBar/Navbar";
import { FeatureCard, FeatureGrid } from './Feature/FeatureGrid';
import { Footer } from './Footer/footer-section';
import { WaitlistSection } from './WaitlistSubscription/WaitlistSubscription';
import { navItems, features } from "@/Constants";

export function LandingPage() {

      
  return (
    <>
      <NavBar items={navItems} />
      <HeroSection/>
      <FeatureGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <FeatureCard key={feature.name} {...feature} />
      ))}
    </FeatureGrid>
    <br/>
    <br/>
    <br/>
    <WaitlistSection title="Get Notified When We Launch" description="Be the first to know! Join our community and get exclusive updates, early access, and more."/>
    <br/>
    <br/>
    <Footer/>
    </>
  )
}