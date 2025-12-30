"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, TrendingUp, Users, Globe, Menu, X } from "lucide-react"
import Link from "next/link"

const heroSlides = [
  {
    image: "/african-business-professionals-collaborating-in-mo.jpg",
    title: "Building Global Businesses in Africa",
    description:
      "With a strategic presence across the fintech, agribusiness, finance, FMCG, and healthcare sectors, we are shaping the future of Africa with a steadfast vision of prosperity and sustainable development.",
    cta: "Discover Our Vision",
    link: "/about",
  },
  {
    image: "/african-farmers-in-cocoa-plantation-sustainable-ag.jpg",
    title: "Agricultural Transformation",
    description:
      "Enriching the agricultural value chain and boosting economic growth through innovative practices and sustainable trade.",
    cta: "Explore Agribusiness",
    link: "/businesses/agribusiness",
  },
  {
    image: "/modern-fintech-mobile-banking-africa-digital-finan.jpg",
    title: "Rethinking Finance Through Tech",
    description:
      "Redefining access to financial services and spearheading true financial inclusion everywhere through adaptive financial solutions in Nigeria and beyond.",
    cta: "Explore Fintech",
    link: "/businesses/fintech",
  },
  {
    image: "/modern-healthcare-facility-africa-medical-professi.jpg",
    title: "Meeting The African Healthcare Need",
    description: "Providing accessible, affordable, and quality healthcare that enhances the well-being of Nigerians.",
    cta: "Explore Healthcare",
    link: "/businesses/healthcare",
  },
]

const subsidiaries = [
  {
    name: "Johnvents Industries",
    sector: "Agribusiness & FMCG",
    description: "Leading agricultural commodity trading and processing across Africa",
    image: "/african-cocoa-farmers-harvest-sustainable-agricult.jpg",
    stats: { value: "150K+", label: "Farmers Empowered" },
    color: "from-emerald-600 to-green-700",
  },
  {
    name: "CapitalSage Fintech",
    sector: "Financial Technology",
    description: "Innovative financial solutions driving digital inclusion across Nigeria",
    image: "/african-woman-using-mobile-banking-app-fintech.jpg",
    stats: { value: "500K+", label: "Active Users" },
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "CapitalSage Healthcare",
    sector: "Medical Services",
    description: "State-of-the-art diagnostic and medical facilities across major cities",
    image: "/modern-african-healthcare-facility-medical-profess.jpg",
    stats: { value: "50+", label: "Medical Centers" },
    color: "from-red-600 to-rose-700",
  },
  {
    name: "Johnvents Trading",
    sector: "Export & Commodities",
    description: "Facilitating global trade of premium African agricultural products",
    image: "/african-farmers-in-cocoa-plantation-sustainable-ag.jpg",
    stats: { value: "$40M+", label: "Export Value" },
    color: "from-amber-600 to-orange-700",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSubsidiary, setCurrentSubsidiary] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubsidiary((prev) => (prev + 1) % subsidiaries.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      {/* Navigation */}

      {/* Hero Carousel with advanced animations */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
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

        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6">
                  <div
                    className={`max-w-3xl transition-all duration-1000 delay-300 ${
                      index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 text-pretty leading-relaxed">
                      {slide.description}
                    </p>
                    <Button size="lg" variant="secondary" className="group text-sm sm:text-base" asChild>
                      <Link href={slide.link}>
                        {slide.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls - Made responsive */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div className="flex gap-2 sm:gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                    index === currentSlide ? "w-8 sm:w-12 bg-white" : "w-6 sm:w-8 bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-1 sm:gap-2">
              <Button
                size="icon"
                variant="secondary"
                onClick={prevSlide}
                className="rounded-full hover:scale-110 transition-transform h-8 w-8 sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={nextSlide}
                className="rounded-full hover:scale-110 transition-transform h-8 w-8 sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar with animations */}
      <section className="bg-[#0e172e] text-primary-foreground py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 transition-transform group-hover:scale-110">
                10K+
              </div>
              <div className="text-xs sm:text-sm opacity-90">Farmers Empowered</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 transition-transform group-hover:scale-110">
                140M+
              </div>
              <div className="text-xs sm:text-sm opacity-90">Export Deal Value</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 transition-transform group-hover:scale-110">
                100K+
              </div>
              <div className="text-xs sm:text-sm opacity-90">Lives Impacted</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 transition-transform group-hover:scale-110">
                3
              </div>
              <div className="text-xs sm:text-sm opacity-90">Key Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slideshow Section */}
      {/* Logo Slideshow Section - Made responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-light text-center text-primary mb-8 sm:mb-12 md:mb-16">
            Our Offerings
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
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/premium-cocoa.webp"
                    alt="Cocoa Products"
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
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/pure-cocoa.webp"
                    alt="Pure Cocoa Powder"
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
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/oluji-logos.webp"
                    alt="Oluji"
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
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/premium-cocoa.webp"
                    alt="Premium Cocoa Products"
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
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/pure-cocoa.webp"
                    alt="Pure Cocoa Powder"
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
                    src="https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/oluji-logos.webp"
                    alt="Oluji"
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

      {/* Badass Subsidiary Slideshow */}
      <section className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-4">OUR PORTFOLIO</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              Companies Driving Africa Forward
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Each subsidiary is a powerhouse in its sector, united by our mission to build prosperity across the
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
                      <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6">
                        {subsidiary.sector}
                      </div>
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

      {/* About Section with animations */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-primary/20 rounded-xl sm:rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img
                src="/african-business-leaders-diverse-team-modern-offic.jpg"
                alt="Who We Are"
                className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-4">WHO WE ARE</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                We are architects of transformation
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Champions of a prosperous Africa. We are an indigenous conglomerate with a profound desire for a
                prosperous Africa. We believe in the transformative power of businesses to drive prosperity and
                sustainable growth.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Sustainable Growth</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Building businesses that create lasting value for communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">People-First Approach</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Empowering individuals and communities across Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Global Vision</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Building African businesses for the global marketplace
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="default" size="lg" className="group text-sm sm:text-base" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions with hover effects */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-4">WHAT WE DO</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              Building global businesses in Africa
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We have forged a diverse portfolio of businesses that will contribute to a thriving continent for today
              and tomorrow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Link
              href="/businesses/fintech"
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="/african-woman-using-mobile-banking-app-fintech.jpg"
                  alt="Fintech"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  Fintech
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  People-driven financial empowerment and inclusive solutions driven by the power of technology.
                </p>
                <div className="flex items-center text-primary font-medium text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>

            <Link
              href="/businesses/agribusiness"
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="/african-cocoa-farmers-harvest-sustainable-agricult.jpg"
                  alt="Agribusiness & FMCG"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  Agribusiness & FMCG
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  Shaping sustainable growth across the agricultural and FMCG landscape for food security and economic
                  development.
                </p>
                <div className="flex items-center text-primary font-medium text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>

            <Link
              href="/businesses/healthcare"
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:col-span-2 md:col-span-1"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="/modern-african-healthcare-facility-medical-profess.jpg"
                  alt="Healthcare"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  Healthcare
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  Our state-of-the-art medical facilities and diagnostic centres provide everyone with excellent medical
                  care.
                </p>
                <div className="flex items-center text-primary font-medium text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section with enhanced visuals */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                Creating economic opportunity for all
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                We leverage the best of our firm to help clients, customers, communities and employees grow and succeed.
                Helping power economic growth by creating opportunities for all through business and community
                investments, local collaborations and policy advocacy.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-emerald-600">150K</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-base sm:text-lg">Cocoa Farmers Empowered</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Supporting agricultural communities across Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-blue-600">$40M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-base sm:text-lg">Export Deal Value</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Driving economic growth through strategic partnerships
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-purple-600">500K</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-base sm:text-lg">Lives Transformed</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Through healthcare, fintech, and agribusiness initiatives
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="default" size="lg" className="mt-6 sm:mt-8 group text-sm sm:text-base" asChild>
                <Link href="/impact">
                  View Our Impact
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-xl sm:rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <img
                src="/african-farmers-community-empowerment-sustainable-.jpg"
                alt="Our Impact"
                className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-4">LATEST NEWS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">In the news</h2>
            </div>
            <Button variant="outline" className="group bg-transparent text-sm sm:text-base" asChild>
              <Link href="/news">
                View All News
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group space-y-3 sm:space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="text-xs sm:text-sm text-muted-foreground">October 22, 2023</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground text-balance group-hover:text-primary transition-colors">
                Our quest is to build Africa's largest food, agribusiness group
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Johnvents Industries Limited is pioneering sustainable agricultural practices across the continent.
              </p>
              <Button variant="link" className="p-0 h-auto group text-sm sm:text-base">
                Read more
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="group space-y-3 sm:space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="text-xs sm:text-sm text-muted-foreground">December 8, 2023</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground text-balance group-hover:text-primary transition-colors">
                Johnvents Industries Limited Receives a BBB+ Investment Rating Upgrade by GCR Rating
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Recognition of our commitment to excellence and sustainable growth.
              </p>
              <Button variant="link" className="p-0 h-auto group text-sm sm:text-base">
                Read more
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="group space-y-3 sm:space-y-4 hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-xs sm:text-sm text-muted-foreground">October 29, 2023</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground text-balance group-hover:text-primary transition-colors">
                Fidelity Bank signs $40m cocoa export deal with AFREXIM Bank, Johnvents Industries
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Strategic partnership to boost agricultural exports and economic development.
              </p>
              <Button variant="link" className="p-0 h-auto group text-sm sm:text-base">
                Read more
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Prioritizing talent and career growth
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty opacity-90 leading-relaxed">
            A talent-driven company is, by definition, an inclusive one. We're committed to creating a workplace where
            employees feel like they belong.
          </p>
          <Button variant="secondary" size="lg" className="group text-sm sm:text-base" asChild>
            <Link href="/careers">
              Explore Careers
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
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
