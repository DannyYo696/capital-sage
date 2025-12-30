"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Briefcase,
  Heart,
  TrendingUp,
  Users,
  GraduationCap,
  Globe2,
  MapPin,
  Clock,
  Menu,
  X,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family, plus wellness programs",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career paths, mentorship programs, and leadership development opportunities",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous training, certifications, and professional development support",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-leading salaries, performance bonuses, and equity options",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible work arrangements, generous leave policies, and remote work options",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    description: "Work across our African operations and international partnerships",
  },
]

const openings = [
  {
    title: "Senior Fintech Product Manager",
    department: "Fintech",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description:
      "Lead product strategy and development for our digital banking platform serving 500K+ users across Nigeria",
  },
  {
    title: "Agricultural Supply Chain Manager",
    department: "Agribusiness",
    location: "Ondo State, Nigeria",
    type: "Full-time",
    description:
      "Manage end-to-end supply chain operations for cocoa and cashew processing, working with 150K+ farmers",
  },
  {
    title: "Healthcare Operations Director",
    department: "Healthcare",
    location: "Abuja, Nigeria",
    type: "Full-time",
    description: "Oversee operations across our network of 50+ medical centers and diagnostic facilities",
  },
  {
    title: "Data Scientist",
    department: "Technology",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description:
      "Build machine learning models to drive insights across fintech, agribusiness, and healthcare operations",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Develop and execute marketing strategies for our portfolio of businesses across Africa",
  },
  {
    title: "Financial Analyst",
    department: "Finance",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Support financial planning, analysis, and reporting for the corporate group",
  },
]

const values = [
  { title: "Excellence", description: "We pursue the highest standards in everything we do" },
  { title: "Innovation", description: "We embrace change and continuously improve" },
  { title: "Integrity", description: "We operate with honesty and transparency" },
  { title: "Collaboration", description: "We work together to achieve shared goals" },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const departments = ["All", "Fintech", "Agribusiness", "Healthcare", "Technology", "Marketing", "Finance"]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
   const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const filteredOpenings = openings.filter(
    (opening) =>
      (selectedDepartment === "All" || opening.department === selectedDepartment) &&
      (opening.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opening.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

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
      {/* Navigation */}
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
          src="https://raw.githubusercontent.com/DannyYo696/svillage/c5af2126d3b8e159de263775506d8ca8e61f664c/our-businesses-bg.webp"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center pt-16 sm:pt-20 md:pt-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
  <p className="ml-0 sm:ml-2 text-1xl text-white/90 text-pretty leading-relaxed">
                Join CapitalSage Holdings
              </p>
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 text-balance">
                We are Afrogeniuses shaping the future of excellence.
              </h1>
</div>

          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">WHY CAPITALSAGE</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">More than just a job</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building businesses that matter, and we want talented people who share our vision for African
              prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-4">OUR CULTURE</p>
              <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">A place where you belong</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At CapitalSage, we've built a culture that celebrates diversity, encourages innovation, and supports
                every team member's growth. We believe that when our people thrive, our businesses thrive.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img
                src="/african-business-professionals-collaborating-in-mo.jpg"
                alt="Our Culture"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-4">OPEN POSITIONS</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Find your next opportunity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore open roles across our businesses and join a team that's making a difference
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedDepartment === dept
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredOpenings.map((opening, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {opening.department}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {opening.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        {opening.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {opening.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{opening.description}</p>
                  </div>
                  <Button className="group">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredOpenings.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No positions match your search. Try adjusting your filters or check back soon for new opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Early Career Programs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">FOR STUDENTS & GRADUATES</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Start your career journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer structured programs to help you launch and grow your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <GraduationCap className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Internship Program</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                3-6 month paid internships across our businesses for undergraduate students
              </p>
              <Button variant="outline" className="bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Graduate Program</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                18-month rotational program for recent graduates with leadership development
              </p>
              <Button variant="outline" className="bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Leadership Academy</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fast-track program for high-potential employees to develop executive skills
              </p>
              <Button variant="outline" className="bg-transparent">
                Learn More
              </Button>
            </div>
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
          <h2 className="text-5xl font-bold mb-6 text-balance">Ready to make an impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in building businesses that drive prosperity across Africa. Your next career move starts here.
          </p>
          <Button variant="secondary" size="lg" className="group" asChild>
            <a href="#openings">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
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
