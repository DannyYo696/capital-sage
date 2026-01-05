"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Smartphone, Sprout, Menu, Heart, X } from "lucide-react"
import Link from "next/link"
import { url } from "inspector"

const businesses = [
  {
    title: "Fintech",
    icon: Smartphone,
    tagline: "Rethinking Finance Through Technology",
    description:
      "People-driven financial empowerment and inclusive solutions driven by the power of technology. We're making financial services accessible to everyone across Nigeria and beyond.",
      
    image: "/african-woman-using-mobile-banking-app-fintech.jpg",
    link: "",
    stats: [
      
    ],
    color: "from-blue-600 to-indigo-700",
  },
  
  {
    title: "Agribusiness & FMCG",
    icon: Sprout,
    tagline: "Transforming Africa's Agricultural Value Chain",
    description:
      "Shaping sustainable growth across the agricultural and FMCG landscape for food security and economic development. From farm to global markets.",
    image: "/african-cocoa-farmers-harvest-sustainable-agricult.jpg",
    link: "",
    stats: [
      
    ],
    color: "from-emerald-600 to-green-700",
  },
  {
    title: "Healthcare",
    icon: Heart,
    tagline: "Meeting Africa's Healthcare Needs",
    description:
      "Our state-of-the-art medical facilities and diagnostic centres provide everyone with excellent medical care. Quality healthcare should be accessible to all.",
    image: "/modern-african-healthcare-facility-medical-profess.jpg",
    link: "",
    stats: [
      
    ],
    color: "from-red-600 to-rose-700",
  },
]

const fintechBrands = [
  { name: "ErcasPay", logo: "https://raw.githubusercontent.com/DannyYo696/svillage/020ff1ae5b3bb0c2920c0e5492f837030df8b927/ercas.webp", url: "https://ercas.ng", },
  { name: "Kolomoni", logo: "https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/kolomonilogo.webp", url:"https://kolomonimfb.com/" },
  { name: "Tiki", logo: "https://raw.githubusercontent.com/DannyYo696/svillage/2d84cc5e2ff7790841b9b185e060219de74e2c2b/tblue.png", url:"https://tikibykolomoni.com/" },
  
]
const agribusinessBrands = [
  { name: "Johnvents Foods", logo: "https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-foods.webp", url: "https://www.johnvents.com/our-businesses/johnvents-foods", },
  { name: "Johnvents Farms", logo: "https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-farms.webp", url: "https://www.johnvents.com/our-businesses/johnvents-farms", },
  { name: "Johnvents Trading", logo: "https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/jv-trading.webp", url: "https://www.johnvents.com/our-businesses/johnvents-trading", },
  { name: "Oluji", logo: "https://raw.githubusercontent.com/DannyYo696/svillage/2b2f21efc5ff64eb4f6b99eed5a648a83b969d0d/oluji-logos.webp" , url: "https://ercaspay.com", },
]

const healthcareBrands = [
  {
    name: "Best Western Hospital",
    logo: "https://raw.githubusercontent.com/DannyYo696/svillage/5106b8decc4f888f7eec06c8640b389ebfc62b4c/bestwestern-logo.png",
    url: "https://www.instagram.com/bestwesternhospital/?hl=en",
  },
]




export default function BusinessesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10)
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  return (
    <div className="">
      {/* Navigation */}
      

      {/* Hero */}
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
        <img
          src="https://raw.githubusercontent.com/DannyYo696/svillage/f3d3f6d8725cd38a6a5fae7f3c2c71d8ce01a569/businesses-bg.webp"
          alt="Our Businesses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="ml-0 sm:ml-2 text-1xl text-white/90 text-pretty leading-relaxed">
                Our Business Portfolio
              </p>
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 text-balance">
                A Glance At Our Impactful Businessess
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">
          {businesses.map((business, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div
                  className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${business.color} text-white mb-6`}
                >
                  <business.icon className="h-5 w-5" />
                  <span className="font-semibold">{business.title}</span>
                </div>
                <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">{business.tagline}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{business.description}</p>
                {/* Fintech Brand Logos */}
{/* Business Portfolio Logos */}
{(business.title === "Fintech" ||
  business.title === "Agribusiness & FMCG" ||
  business.title === "Healthcare") && (

  <div className="mt-10">
    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
      Portfolio Companies
    </p>

    <div className="flex flex-wrap items-center gap-6">
      {(
  business.title === "Fintech"
    ? fintechBrands
    : business.title === "Agribusiness & FMCG"
    ? agribusinessBrands
    : healthcareBrands
).map((brand, i) => (

        <a
  key={i}
  href={brand.url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Visit ${brand.name}`}
  className="
    flex items-center justify-center px-4 py-2
    border border-border rounded-lg bg-background
    hover:shadow-lg hover:-translate-y-1
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-primary/40
  "
>
  <img
    src={brand.logo}
    alt={brand.name}
    className="
      h-6 md:h-7 w-auto
      grayscale opacity-70
      hover:opacity-100 hover:grayscale-0
      transition-all duration-300
    "
  />
</a>

      ))}
    </div>
  </div>
)}



                
                <Button size="lg" className="group" asChild>
                  <Link href={business.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div className={`relative group ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-20 rounded-3xl transform ${index % 2 === 0 ? "rotate-3" : "-rotate-3"} group-hover:${index % 2 === 0 ? "rotate-6" : "-rotate-6"} transition-transform duration-500`}
                />
                <img
                  src={business.image || "/placeholder.svg"}
                  alt={business.title}
                  className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">Want to partner with us?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for strategic partnerships that can drive mutual growth and create value
          </p>
          <Button variant="default" size="lg" className="group" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">About Us</h3>
              <ul className="space-y-3 text-muted-foreground">
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
              <h3 className="font-bold text-foreground mb-4 text-lg">Our Businesses</h3>
              <ul className="space-y-3 text-muted-foreground">
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
              <h3 className="font-bold text-foreground mb-4 text-lg">Resources</h3>
              <ul className="space-y-3 text-muted-foreground">
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
              <h3 className="font-bold text-foreground mb-4 text-lg">Connect</h3>
              <ul className="space-y-3 text-muted-foreground">
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
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} CapitalSage Holdings. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
