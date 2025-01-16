import { Home, Mail, Bot, MessageCircle } from 'lucide-react'
import { HeroSection } from "./HeroSection/HeroSection";
import { NavBar } from "@/SharedComponents/NavBar/Navbar";

export function LandingPage() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/', icon: Bot },
        { name: 'Sign Up', url: '/', icon: Mail },
        { name: 'Contact', url: '/', icon: MessageCircle }
      ]
    
  return (
    <>
      <NavBar items={navItems} />
      <HeroSection/>
    </>
  )
}