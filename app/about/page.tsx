"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Heart, Award, Users, TrendingUp, Globe2, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const boardOfDirectors = [
  {
    name: "Opeyemi Oduwole",
    role: "Chairman, Board of Directors",
    image:
      "https://raw.githubusercontent.com/DannyYo696/svillage/08e700001732bb80a991aea21caa8d433d48f37d/oduwole.webp",
  },
  {
    name: "John Alamu",
    role: "Founder/Group Managing Director",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/023def9fa22b375f618cce8cd13353de6a365c3d/alamu.webp",
  },
  {
    name: "Yemisi Shittu",
    role: "Group Executive Director, Operations",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/6beeaaece6af97f06b2d13e9a94c494a6567056e/shittu.webp",
  },
  {
    name: "Oladipo Ogunmolu",
    role: "Executive Director, Johnvents Industries",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/d475aadbda63f32d30e6d0b12951a7361ffa3174/ogunmola.webp",
  },
  {
    name: "Tolulope Olatunji",
    role: "Company Secretary",
    image:
      "https://raw.githubusercontent.com/DannyYo696/svillage/084ae41e7566d50a00b911c0d507d47e9fffb637/tolulope.webp",
  },
]

const businessMDs = [
  {
    name: "Oladipo Ogunmolu",
    role: "Managing Director, Johnvents Industries",
    image:
      "https://raw.githubusercontent.com/DannyYo696/svillage/d475aadbda63f32d30e6d0b12951a7361ffa3174/ogunmola.webp",
  },
  {
    name: "John Alamu",
    role: "Managing Director, Ercas Fintech",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/023def9fa22b375f618cce8cd13353de6a365c3d/alamu.webp",
  },
  {
    name: "Yemisi Shittu",
    role: "Managing Director, Healthcare Division",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/6beeaaece6af97f06b2d13e9a94c494a6567056e/shittu.webp",
  },
]

const managementTeam = [
  {
    name: "Oladipo Ogunmolu",
    role: "Chief Operating Officer",
    image:
      "https://raw.githubusercontent.com/DannyYo696/svillage/d475aadbda63f32d30e6d0b12951a7361ffa3174/ogunmola.webp",
  },
  {
    name: "Tolulope Olatunji",
    role: "Chief Financial Officer",
    image:
      "https://raw.githubusercontent.com/DannyYo696/svillage/084ae41e7566d50a00b911c0d507d47e9fffb637/tolulope.webp",
  },
  {
    name: "John Alamu",
    role: "Chief Technology Officer",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/023def9fa22b375f618cce8cd13353de6a365c3d/alamu.webp",
  },
  {
    name: "Yemisi Shittu",
    role: "Chief Strategy Officer",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/6beeaaece6af97f06b2d13e9a94c494a6567056e/shittu.webp",
  },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, from product quality to customer service.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical practices in all our business dealings.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Users,
    title: "People First",
    description: "We prioritize the well-being and development of our employees, customers, and communities.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We embrace change and continuously seek new ways to create value and drive progress.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Globe2,
    title: "Sustainability",
    description:
      "We build businesses that create lasting positive impact for people, communities, and the environment.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Award,
    title: "Accountability",
    description: "We take responsibility for our actions and deliver on our commitments to all stakeholders.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
]

const milestones = [
  {
    year: "2015",
    title: "Foundation",
    description: "CapitalSage Holdings established with a vision for African prosperity",
  },
  {
    year: "2017",
    title: "Fintech Launch",
    description: "Launched financial technology division to drive digital inclusion",
  },
  {
    year: "2019",
    title: "Agribusiness Expansion",
    description: "Johnvents Industries enters cocoa processing and export",
  },
  {
    year: "2021",
    title: "$40M Export Deal",
    description: "Secured landmark cocoa export partnership with AFREXIM Bank",
  },
  {
    year: "2023",
    title: "Healthcare Division",
    description: "Expanded into healthcare with diagnostic centers across Nigeria",
  },
  { year: "2024", title: "150K Farmers", description: "Empowered over 150,000 farmers through agricultural programs" },
]

const subsidiaries = [
  {
    name: "Financial Services & Technology",
    description: "Democratizing access to financial services across Africa through innovative digital solutions",
    image: "/modern-fintech-mobile-banking-africa-digital-finan.jpg",
    color: "from-blue-600/90 to-blue-800/90",
    stats: { value: "500K+", label: "Active Users" },
  },
  {
    name: "Agribusiness & FMCG",
    description: "Leading cocoa processing and food manufacturing, empowering farmers and delivering quality products",
    image: "/african-cocoa-farmers-harvest-sustainable-agricult.jpg",
    color: "from-amber-600/90 to-orange-700/90",
    stats: { value: "$40M", label: "Export Value" },
  },
  {
    name: "Healthcare",
    description: "Providing world-class diagnostic and healthcare services to communities across Nigeria",
    image: "/modern-healthcare-facility-africa-medical-professi.jpg",
    color: "from-emerald-600/90 to-teal-700/90",
    stats: { value: "50K+", label: "Patients Served" },
  },
]

export default function AboutPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSubsidiary, setCurrentSubsidiary] = useState(0)
  const [activeTab, setActiveTab] = useState<"board" | "mds" | "management">("board")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
   const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubsidiary((prev) => (prev + 1) % subsidiaries.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getCurrentLeaders = () => {
    switch (activeTab) {
      case "board":
        return boardOfDirectors
      case "mds":
        return businessMDs
      case "management":
        return managementTeam
      default:
        return boardOfDirectors
    }
  }
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-[#0e172e] shadow-lg" : "bg-transparent"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none transition-opacity duration-300 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center z-50">
                <Image
                  src="https://raw.githubusercontent.com/DannyYo696/svillage/3d0531e8db8f29c620e6ac147eaa837a041dc85d/cs-logo.webp"
                  alt="CapitalSage Logo"
                  width={60}
                  height={60}
                  className="object-contain sm:w-[70px] sm:h-[70px]"
                  priority
                />
              </Link>

              {/* Desktop Glass Nav - Hidden on mobile */}
              <nav
                className="hidden lg:flex items-center gap-6 xl:gap-10 px-8 xl:px-10 py-3
                bg-white/15 backdrop-blur-2xl
                rounded-full border border-white/30
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              >
                <Link
                  href="/"
                  className="text-white text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
                >
                  About Us
                </Link>
                <Link
                  href="/businesses"
                  className="text-white text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
                >
                  Our Businesses
                </Link>
                <Link
                  href="/impact"
                  className="text-white text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
                >
                  Impact
                </Link>
                <Link
                  href="/news"
                  className="text-white text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
                >
                  News
                </Link>
                <Link
                  href="/careers"
                  className="text-white text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
                >
                  Careers
                </Link>
              </nav>

              {/* Desktop CTA - Hidden on mobile */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 bg-white text-[#0e172e]
                px-4 xl:px-6 py-2 xl:py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all"
              >
                Have Questions?
                <span className="text-lg">↗</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden z-50 p-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25 transition-all"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu Drawer */}
          <div
            className={`lg:hidden fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6 pt-20">
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="text-foreground text-lg font-medium hover:text-primary transition-colors border-b border-border pb-4"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="text-foreground text-lg font-medium hover:text-primary transition-colors border-b border-border pb-4"
                >
                  About Us
                </Link>
                <Link
                  href="/businesses"
                  onClick={closeMobileMenu}
                  className="text-foreground text-lg font-medium hover:text-primary transition-colors border-b border-border pb-4"
                >
                  Our Businesses
                </Link>
                <Link
                  href="/impact"
                  onClick={closeMobileMenu}
                  className="text-foreground text-lg font-medium hover:text-primary transition-colors border-b border-border pb-4"
                >
                  Impact
                </Link>
                <Link
                  href="/news"
                  onClick={closeMobileMenu}
                  className="text-foreground text-lg font-medium hover:text-primary transition-colors border-b border-border pb-4"
                >
                  News
                </Link>
                <Link
                  href="/careers"
                  onClick={closeMobileMenu}
                  className="text-foreground text-lg font-medium hover:text-primary transition-colors border-b border-border pb-4"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-all"
                >
                  Have Questions?
                  <span className="text-lg">↗</span>
                </Link>
              </nav>
            </div>
          </div>
        </nav>


        <img
          src="https://raw.githubusercontent.com/DannyYo696/svillage/73d8a747c12112116d02da6fe966140b72eba548/about-hero.webp"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center pt-16 sm:pt-20 md:pt-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="ml-0 sm:ml-2 text-1xl text-white/90 text-pretty leading-relaxed">
                Who We Are
              </p>
              <h1 className="ml-0 sm:ml-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
                We Are Architects Of Transformation
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-primary mb-3 sm:mb-4">OUR STORY</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                Champions of a prosperous Africa
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  CapitalSage Holdings was born from a profound belief in Africa's potential and a commitment to
                  building businesses that create lasting value for our continent. We are an indigenous conglomerate
                  with a clear mission: to drive prosperity through strategic investments in sectors critical to
                  Africa's growth.
                </p>
                <p>
                  Since our founding, we have built a diverse portfolio spanning fintech, agribusiness, FMCG, and
                  healthcare. Each business is guided by our core belief in the transformative power of enterprise to
                  uplift communities, create opportunities, and build a more prosperous future.
                </p>
                <p>
                  Our approach combines global best practices with deep local knowledge, ensuring that our businesses
                  are not only profitable but also sustainable and impactful. We invest in people, technology, and
                  infrastructure to create businesses that will thrive for generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl sm:rounded-3xl transform rotate-3 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4" />
              <img
                src="/african-business-leaders-diverse-team-modern-offic.jpg"
                alt="Our Team"
                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {/* Mission & Vision – Premium Redesign */}
{/* Mission & Vision – Cinematic Version */}
<section className="relative py-24 overflow-hidden cinematic-section">
  {/* Ambient background */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />
  <div className="absolute inset-0 glow-left" />
  <div className="absolute inset-0 glow-right" />

  <div className="relative container mx-auto px-4 sm:px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

      {/* Mission */}
      <div className="cinematic-block">
        <span className="eyebrow text-primary">Our Mission</span>

        <h3 className="cinematic-heading">
          Building businesses that create
          <span className="highlight-primary">lasting prosperity</span>
        </h3>

        <p className="cinematic-text">
          To build world-class businesses that create economic opportunity, drive
          sustainable development, and contribute to a prosperous Africa where
          everyone can thrive.
        </p>

        <div className="accent-line primary-line" />
      </div>

      {/* Vision */}
      <div className="cinematic-block">
        <span className="eyebrow text-[#FF6400]">Our Vision</span>

        <h3 className="cinematic-heading">
          Africa’s most respected
          <span className="highlight-secondary">value-creating conglomerate</span>
        </h3>

        <p className="cinematic-text">
          To be Africa's most respected conglomerate, recognized for building
          businesses that transform lives, strengthen communities, and elevate
          the continent’s role in the global economy.
        </p>

        <div className="accent-line secondary-line" />
      </div>

    </div>
  </div>
</section>



      <section className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                  <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-4">OUR SECTORS</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4">
                    Companies Driving Africa Forward
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                    Each sector is united by our mission to build prosperity across the
                    continent
                  </p>
                </div>
      
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden">
                  {subsidiaries.map((subsidiary, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentSubsidiary ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                      }`}
                    >
                      <div className="relative h-full">
                        <img
                          src={subsidiary.image || "/placeholder.svg"}
                          alt={subsidiary.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${subsidiary.color} opacity-90`} />
      
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className={`text-center text-white max-w-4xl px-4 sm:px-6 transition-all duration-1000 delay-200 ${
                              index === currentSubsidiary ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                          >
                            
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
                              {subsidiary.name}
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-white/90 text-pretty leading-relaxed">
                              {subsidiary.description}
                            </p>
                            <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mb-4 sm:mb-6 md:mb-8">
                              <div>
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                  {subsidiary.stats.value}
                                </div>
                                <div className="text-sm sm:text-base md:text-lg text-white/80">{subsidiary.stats.label}</div>
                              </div>
                            </div>
                            <Button size="lg" variant="secondary" className="group text-sm sm:text-base">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
      
                  {/* Subsidiary indicators */}
                  <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-20">
                    <div className="flex justify-center gap-2 sm:gap-3">
                      {subsidiaries.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSubsidiary(index)}
                          className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                            index === currentSubsidiary
                              ? "w-12 sm:w-16 bg-white"
                              : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/70"
                          }`}
                          aria-label={`Go to subsidiary ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Our Brands */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-light text-center text-primary mb-8 sm:mb-12 md:mb-16">
            Our Brands
          </h2>

          <div className="relative">
            <div className="logo-slideshow-container">
              <div className="logo-slideshow">
                {/* First set of logos */}
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/020ff1ae5b3bb0c2920c0e5492f837030df8b927/ercas.webp"
                    alt="Ercas"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/5106b8decc4f888f7eec06c8640b389ebfc62b4c/bestwestern-logo.png"
                    alt="Best Western Hospital"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-foods.webp"
                    alt="Johnvents Foods"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-farms.webp"
                    alt="JV Farms"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-trading.webp"
                    alt="JV Trading"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/noble-eagle.webp"
                    alt="Noble Eagle"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/kolomonilogo.webp"
                    alt="Kolomoni"
                  />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/020ff1ae5b3bb0c2920c0e5492f837030df8b927/ercas.webp"
                    alt="Ercas"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/5106b8decc4f888f7eec06c8640b389ebfc62b4c/bestwestern-logo.png"
                    alt="Best Western Hospital"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-foods.webp"
                    alt="Johnvents Foods"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-farms.webp"
                    alt="JV Farms"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-trading.webp"
                    alt="JV Trading"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/noble-eagle.webp"
                    alt="Noble Eagle"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/kolomonilogo.webp"
                    alt="Kolomoni"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Our Products */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-light text-center text-primary mb-8 sm:mb-12 md:mb-16">
            Our Products
          </h2>

          <div className="relative">
            <div className="logo-slideshow-container">
              <div className="logo-slideshow">
                {/* First set of logos */}
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/premium-cocoa.webp"
                    alt="Cocoa Products"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/pure-cocoa.webp"
                    alt="Pure Cocoa Powder"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/oluji-logos.webp"
                    alt="Oluji"
                  />
                </div>
                
                
                

                {/* Duplicate set for seamless loop */}
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/premium-cocoa.webp"
                    alt="Premium Cocoa Products"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/pure-cocoa.webp"
                    alt="Pure Cocoa Powder"
                  />
                </div>
                
                <div className="logo-card">
                  <img
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/oluji-logos.webp"
                    alt="Oluji"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-4">OUR VALUES</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              The principles that guide us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Our values are the foundation of everything we do, shaping our culture and driving our success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                className={`group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-500 ${
                  hoveredValue === index ? "scale-105" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${value.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">OUR JOURNEY</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Building Africa's future</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our journey to create lasting impact across the continent
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            {/* Timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/30 md:left-1/2 md:w-1 transform md:-translate-x-1/2" />


            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
}`}

                >
                  <div className={`w-full md:flex-1 md:${index % 2 === 0 ? "text-right" : "text-left"}`}>

                    <div className="group inline-block">
                      <div className="p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-4xl font-bold text-primary mb-3">{milestone.year}</div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-3 top-10 z-10 w-3 h-3 rounded-full bg-primary md:static md:w-6 md:h-6" />


                  <div className="hidden md:flex-1" />

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team with Tabs */}
      <section id="leadership" className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-4">LEADERSHIP</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              Meet our leadership team
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Experienced leaders driving innovation and excellence across our businesses
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 md:mb-16">
            <button
              onClick={() => setActiveTab("board")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "board"
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Board of Directors
            </button>
            <button
              onClick={() => setActiveTab("mds")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "mds"
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Business MDs
            </button>
            <button
              onClick={() => setActiveTab("management")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "management"
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Management Team
            </button>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {getCurrentLeaders().map((leader, index) => (
              <div key={index} className="group animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                <p className="text-xs sm:text-sm text-primary font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-4">RECOGNITION</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              Awards & Accolades
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Recognition for our commitment to excellence and impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Best Agribusiness Company</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">Nigeria Agribusiness Awards 2023</p>
              <p className="text-xs sm:text-sm text-muted-foreground/80">
                Recognized for innovation in cocoa processing and farmer empowerment
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Top Financial Inclusion Leader</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">African Fintech Summit 2022</p>
              <p className="text-xs sm:text-sm text-muted-foreground/80">
                Acknowledged for expanding access to financial services
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Excellence in Healthcare Delivery</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">West Africa Health Awards 2024</p>
              <p className="text-xs sm:text-sm text-muted-foreground/80">
                Honored for quality diagnostic services and community impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 sm:p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
                Join us in building Africa's future
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Discover opportunities to collaborate, invest, or join our team
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" variant="secondary" className="group text-sm sm:text-base">
                  Explore Careers
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white hover:bg-white hover:text-primary text-sm sm:text-base"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 sm:py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">About Us</h3>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/about#leadership" className="hover:text-foreground transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/about#awards" className="hover:text-foreground transition-colors">
                    Awards & Recognition
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Our Businesses</h3>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <li>
                  <Link href="/businesses/fintech" className="hover:text-foreground transition-colors">
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link href="/businesses/agribusiness" className="hover:text-foreground transition-colors">
                    Agribusiness & FMCG
                  </Link>
                </li>
                <li>
                  <Link href="/businesses/healthcare" className="hover:text-foreground transition-colors">
                    Healthcare
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Resources</h3>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <li>
                  <Link href="/news" className="hover:text-foreground transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-foreground transition-colors">
                    Impact Stories
                  </Link>
                </li>
                <li>
                  <Link href="/news#press" className="hover:text-foreground transition-colors">
                    Press Releases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Connect</h3>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <li>
                  <Link href="/careers" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact#investors" className="hover:text-foreground transition-colors">
                    Investors
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
            <p className="text-center sm:text-left">© 2025 CapitalSage Holdings. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
