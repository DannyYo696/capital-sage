"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Sprout, Heart, GraduationCap, Home, Lightbulb, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const impactAreas = [
  {
    icon: Users,
    title: "Economic Empowerment",
    description: "Creating jobs and entrepreneurship opportunities across Africa",
    stat: "250K+",
    label: "Jobs Created",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Sprout,
    title: "Agricultural Development",
    description: "Supporting farmers and transforming agriculture value chains",
    stat: "10K+",
    label: "Farmers Supported",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Heart,
    title: "Healthcare Access",
    description: "Improving health outcomes through quality medical services",
    stat: "200K+",
    label: "Patients Served",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Building skills and knowledge for the future workforce",
    stat: "50K+",
    label: "People Trained",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Home,
    title: "Community Development",
    description: "Investing in infrastructure and social programs",
    stat: "100+",
    label: "Communities",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Lightbulb,
    title: "Financial Inclusion",
    description: "Bringing banking services to the unbanked",
    stat: "500K+",
    label: "Users Onboarded",
    color: "bg-indigo-500/10 text-indigo-600",
  },
]

const stories = [
  {
    image: "/african-farmers-in-cocoa-plantation-sustainable-ag.jpg",
    category: "Agriculture",
    title: "From subsistence to prosperity: Musa's story",
    description:
      "How Johnvents Industries transformed a struggling cocoa farmer into a successful entrepreneur employing others",
    impact: "3x income increase",
  },
  {
    image: "/african-woman-using-mobile-banking-app-fintech.jpg",
    category: "Fintech",
    title: "Digital banking brings financial freedom",
    description:
      "Market trader Adaeze gains access to credit and digital payments, transforming her business operations",
    impact: "₦2M+ in digital transactions",
  },
  {
    image: "/modern-african-healthcare-facility-medical-profess.jpg",
    category: "Healthcare",
    title: "Saving lives through accessible healthcare",
    description: "Community health screening program detects early-stage diabetes, preventing serious complications",
    impact: "1,000+ early diagnoses",
  },
  {
    image: "/african-business-leaders-diverse-team-modern-offic.jpg",
    category: "Employment",
    title: "Building careers, transforming lives",
    description: "Fresh graduate joins CapitalSage's leadership development program and becomes divisional manager",
    impact: "500+ careers launched",
  },
]

const initiatives = [
  {
    title: "Women's Economic Empowerment Program",
    description:
      "Providing training, financing, and market access to women entrepreneurs across Nigeria, helping them build sustainable businesses",
    beneficiaries: "15,000+ women",
  },
  {
    title: "Youth Agricultural Training Initiative",
    description:
      "Making agriculture attractive to youth through modern farming techniques, technology adoption, and guaranteed markets",
    beneficiaries: "5,000+ young farmers",
  },
  {
    title: "Community Health Outreach",
    description:
      "Free health screenings, vaccinations, and medical consultations in underserved communities across Nigeria",
    beneficiaries: "50,000+ individuals",
  },
  {
    title: "Digital Literacy Program",
    description:
      "Teaching digital and financial literacy to rural communities, enabling them to participate in the digital economy",
    beneficiaries: "25,000+ people trained",
  },
]

const sdgs = [
  { number: 1, title: "No Poverty" },
  { number: 2, title: "Zero Hunger" },
  { number: 3, title: "Good Health" },
  { number: 4, title: "Quality Education" },
  { number: 5, title: "Gender Equality" },
  { number: 8, title: "Decent Work" },
  { number: 9, title: "Industry & Innovation" },
  { number: 13, title: "Climate Action" },
]

export default function ImpactPage() {
  const [selectedStory, setSelectedStory] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <div className="m">
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
          alt="Our Impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="ml-0 sm:ml-2 text-1xl text-white/90 text-pretty leading-relaxed">
                Our Impact
              </p>
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 text-balance">
                Creating Economic Opportunity For All
              </h1>
            </div>
          </div>
        </div>
      </section>      

      {/* Impact Areas */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">OUR IMPACT</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Transforming lives across Africa</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our businesses create value far beyond profit, driving positive change in communities across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <area.icon className="h-7 w-7" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{area.stat}</div>
                <div className="text-sm text-primary font-medium mb-4">{area.label}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">SUCCESS STORIES</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Real people, real impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Behind every statistic is a person whose life has been transformed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">{story.impact}</span>
                    <Button variant="link" className="p-0 h-auto group">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">COMMUNITY INITIATIVES</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Investing in communities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic programs designed to create lasting positive change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group p-10 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{initiative.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{initiative.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{initiative.beneficiaries}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-4">SUSTAINABILITY</p>
              <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">Building for today and tomorrow</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sustainability isn't just a buzzword for us - it's embedded in everything we do. From sustainable
                  farming practices in our agribusiness operations to energy-efficient medical facilities, we're
                  committed to environmental stewardship.
                </p>
                <p>
                  We believe that businesses have a responsibility to the communities they serve and the environment
                  they operate in. That's why we've made sustainability a core pillar of our operations across all
                  divisions.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Sprout className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Environmental Protection</h4>
                    <p className="text-muted-foreground">
                      Reforestation programs and sustainable agricultural practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Resource Efficiency</h4>
                    <p className="text-muted-foreground">
                      Reducing waste and optimizing resource use across operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Social Responsibility</h4>
                    <p className="text-muted-foreground">Community development and ethical business practices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <img
                src="/african-farmers-in-cocoa-plantation-sustainable-ag.jpg"
                alt="Sustainability"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UN SDGs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">GLOBAL COMMITMENT</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Contributing to the UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our businesses align with and contribute to multiple UN SDGs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary">{sdg.number}</span>
                </div>
                <h3 className="font-semibold text-foreground">{sdg.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-balance">Join us in creating impact</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether through partnerships, careers, or community programs, there are many ways to be part of our impact
            story
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="group">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/careers">Explore Careers</Link>
            </Button>
          </div>
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
