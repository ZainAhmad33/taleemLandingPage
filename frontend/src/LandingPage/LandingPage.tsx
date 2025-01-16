import { Home, User, Briefcase, FileText } from 'lucide-react'
import { HeroSection } from "./HeroSection/HeroSection";
import { NavBar } from "@/SharedComponents/NavBar/Navbar";

export function LandingPage() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/', icon: User },
        { name: 'Projects', url: '/', icon: Briefcase },
        { name: 'Resume', url: '/', icon: FileText }
      ]
    
  return (
    <>
      <NavBar items={navItems} />
      <HeroSection/>
    </>
  )
}