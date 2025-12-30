"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Calendar, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const featuredNews = {
  image: "/african-business-professionals-collaborating-in-mo.jpg",
  category: "Corporate",
  date: "January 15, 2024",
  title: "CapitalSage Holdings Announces Expansion into East Africa",
  excerpt:
    "Strategic move to bring our proven business models in fintech, agribusiness, and healthcare to Kenya, Tanzania, and Uganda, creating thousands of new jobs and opportunities.",
  readTime: "5 min read",
}

const newsArticles = [
  {
    image: "/african-cocoa-farmers-harvest-sustainable-agricult.jpg",
    category: "Agribusiness",
    date: "January 10, 2024",
    title: "Johnvents Industries Launches New Cocoa Processing Facility in Ondo State",
    excerpt:
      "State-of-the-art facility will increase processing capacity by 40%, directly benefiting over 20,000 local farmers",
    readTime: "4 min read",
  },
  {
    image: "/african-woman-using-mobile-banking-app-fintech.jpg",
    category: "Fintech",
    date: "January 5, 2024",
    title: "CapitalSage Fintech Reaches 500,000 Active User Milestone",
    excerpt: "Digital banking platform celebrates major growth milestone, processing over ₦50 billion in transactions",
    readTime: "3 min read",
  },
  {
    image: "/modern-african-healthcare-facility-medical-profess.jpg",
    category: "Healthcare",
    date: "December 28, 2023",
    title: "New Medical Centers Open in Abuja and Port Harcourt",
    excerpt: "Expansion brings world-class healthcare services to more communities across Nigeria",
    readTime: "4 min read",
  },
  {
    image: "/african-business-leaders-diverse-team-modern-offic.jpg",
    category: "Corporate",
    date: "December 20, 2023",
    title: "CapitalSage Named Best Employer in African Fintech Sector",
    excerpt: "Recognition for outstanding workplace culture, employee development, and diversity initiatives",
    readTime: "3 min read",
  },
  {
    image: "/african-farmers-in-cocoa-plantation-sustainable-ag.jpg",
    category: "Agribusiness",
    date: "December 8, 2023",
    title: "Johnvents Industries Receives BBB+ Investment Rating Upgrade by GCR Rating",
    excerpt:
      "Upgraded rating reflects strong financial performance and commitment to sustainable agricultural development",
    readTime: "5 min read",
  },
  {
    image: "/african-woman-using-mobile-banking-app-fintech.jpg",
    category: "Fintech",
    date: "November 30, 2023",
    title: "CapitalSage Fintech Partners with Major Retailers for Digital Payment Integration",
    excerpt: "Strategic partnerships will bring digital payments to 10,000+ retail locations across Nigeria",
    readTime: "4 min read",
  },
  {
    image: "/modern-healthcare-facility-africa-medical-professi.jpg",
    category: "Healthcare",
    date: "November 20, 2023",
    title: "Free Health Screening Program Reaches 50,000 Nigerians",
    excerpt: "Community health initiative provides free diagnostics and consultations in underserved areas",
    readTime: "3 min read",
  },
  {
    image: "/african-business-professionals-collaborating-in-mo.jpg",
    category: "Corporate",
    date: "October 29, 2023",
    title: "Fidelity Bank Signs $40M Cocoa Export Deal with AFREXIM Bank, Johnvents Industries",
    excerpt: "Landmark partnership to boost agricultural exports and economic development across West Africa",
    readTime: "6 min read",
  },
  {
    image: "/african-farmers-in-cocoa-plantation-sustainable-ag.jpg",
    category: "Agribusiness",
    date: "October 22, 2023",
    title: "Our Quest to Build Africa's Largest Food and Agribusiness Group",
    excerpt:
      "CEO discusses vision for transforming African agriculture and creating sustainable food systems for the continent",
    readTime: "7 min read",
  },
]

const pressReleases = [
  {
    date: "January 15, 2024",
    title: "CapitalSage Holdings Announces East Africa Expansion",
    category: "Corporate Announcement",
  },
  {
    date: "December 8, 2023",
    title: "Johnvents Industries Receives BBB+ Investment Rating from GCR",
    category: "Financial News",
  },
  {
    date: "October 29, 2023",
    title: "$40M Cocoa Export Deal Signed with AFREXIM Bank",
    category: "Business Development",
  },
  {
    date: "September 15, 2023",
    title: "CapitalSage Fintech Launches New Microfinance Product",
    category: "Product Launch",
  },
  {
    date: "August 20, 2023",
    title: "Healthcare Division Opens 10 New Diagnostic Centers",
    category: "Expansion",
  },
]

const categories = ["All", "Corporate", "Fintech", "Agribusiness", "Healthcare", "Community"]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleArticles, setVisibleArticles] = useState(6)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
   const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const filteredArticles =
    selectedCategory === "All" ? newsArticles : newsArticles.filter((article) => article.category === selectedCategory)

  const loadMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 3, filteredArticles.length))
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
          src="https://raw.githubusercontent.com/DannyYo696/svillage/b7284746d39fc8d0bb0ce7fbf7585fb26f03c4ac/news-bg.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center pt-16 sm:pt-20 md:pt-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
    News & Media
  </h1>
  <p className="text-lg text-white/90 text-pretty leading-relaxed">
    Stay updated with the latest news, announcements, and stories from CapitalSage Holdings
  </p>
</div>

          </div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="py-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setVisibleArticles(6)
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, visibleArticles).map((article, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {visibleArticles < filteredArticles.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" size="lg" className="bg-transparent">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Press Releases */}
      <section id="press" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Press Releases</h2>
            <p className="text-lg text-muted-foreground">
              Official announcements and statements from CapitalSage Holdings
            </p>
          </div>

          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {release.date}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {release.title}
                    </h3>
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Download PDF
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="bg-transparent">
              View All Press Releases
            </Button>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-balance">Media Inquiries</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            For press inquiries, interview requests, or media partnerships, please contact our communications team
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="group" asChild>
              <Link href="/contact">
                Contact Media Team
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Download Media Kit
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
