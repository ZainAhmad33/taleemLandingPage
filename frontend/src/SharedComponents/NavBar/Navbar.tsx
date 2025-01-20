import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { scrollToSection } from "@/Utilities"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)


  return (
    <div className="max-w-[100%] flex flex-row justify-center">
      <div
        className={cn(
          "fixed sm:top-0 z-50 mb-6 pt-6",
          className,
        )}
      >
        <div className="flex items-center gap-3 bg-white/5 border border-neutral-200 backdrop-blur-lg py-1 px-1 rounded-2xl shadow-lg dark:bg-neutral-950/5 dark:border-neutral-800">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() =>{
                  setActiveTab(item.name)
                  scrollToSection(item.url)
                }}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-xl transition-colors",
                  "text-neutral-950/80 hover:text-neutral-900 dark:text-neutral-50/80 dark:hover:text-neutral-50",
                  isActive && "bg-blue-800 text-neutral-50",
                )}
              >
                <span className="hidden md:flex"><Icon size={18} strokeWidth={2.5} />&nbsp;&nbsp;{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-neutral-900/5 rounded-xl -z-10 dark:bg-neutral-50/5"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-neutral-900 rounded-t-full dark:bg-neutral-50">
                      <div className="absolute w-12 h-6 bg-neutral-900/20 rounded-2xl blur-md -top-2 -left-2 dark:bg-neutral-50/20" />
                      <div className="absolute w-8 h-6 bg-neutral-900/20 rounded-2xl blur-md -top-1 dark:bg-neutral-50/20" />
                      <div className="absolute w-4 h-4 bg-neutral-900/20 rounded-2xl blur-sm top-0 left-2 dark:bg-neutral-50/20" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
