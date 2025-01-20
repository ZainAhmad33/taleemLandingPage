import { Home, Mail, Bot, MessageCircle, BookOpenCheck, BrainCircuit, BookOpenText, GraduationCap, Backpack, NotebookPen } from 'lucide-react'

export const navItems = [
    { name: 'Home', url: 'heroSection', icon: Home },
    { name: 'About', url: 'featureSection', icon: Bot },
    { name: 'Sign Up', url: 'waitlistSection', icon: Mail },
    { name: 'Contact', url: 'footerSection', icon: MessageCircle }
  ]

export const features = [
    {
      Icon: BookOpenText,
      name: "Book-Referenced Responses",
      description: "Every answer comes with precise references, including page numbers and exact lines.",
      href: "",
      cta: "Learn more",
      background: "absolute -right-20 -top-20 opacity-60",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GraduationCap,
      name: "Self-Assessments Made Easy",
      description: "Automatically generate quizzes from your uploaded content, saving hours of preparation.",
      href: "",
      cta: "Learn more",
      background: "absolute -right-20 -top-20 opacity-60",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: BookOpenCheck,
      name: "Assignment Grading Reinvented",
      description: "Upload handwritten assignments, and let our AI handle OCR conversion, grading, and feedback in no time.",
      href: "",
      cta: "Learn more",
      background: "absolute -right-20 -top-20 opacity-60",
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Backpack,
      name: "Seamless Learning Experience",
      description:
        "Turn educational material into interactive lessons, quizzes, and solutions with just a click.",
      href: "",
      cta: "Learn more",
      background: "absolute -right-20 -top-20 opacity-60",
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: BrainCircuit,
      name: "Tutor Improves With You",
      description: "Our software learns from your uploaded notes or books, adapting lessons to your unique material.",
      href: "",
      cta: "Learn more",
      background: "absolute -right-20 -top-20 opacity-60",
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: NotebookPen,
      name: "Detailed Feedback for Improvements",
      description:
        "Get detailed grading with annotated feedback, ensuring clarity and fairness for every student.",
      href: "",
      cta: "Learn more",
      background: "absolute -right-20 -top-20 opacity-60",
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ];