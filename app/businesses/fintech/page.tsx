"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, CreditCard, Shield, Zap, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

const products = [
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description:
      "Full-featured banking at your fingertips with instant transfers, bill payments, and account management",
  },
  {
    icon: CreditCard,
    title: "Digital Payments",
    description: "Seamless payment solutions for individuals and businesses with QR codes and contactless options",
  },
  {
    icon: Shield,
    title: "Microloans",
    description: "Quick access to credit for personal and business needs with flexible repayment terms",
  },
  {
    icon: Zap,
    title: "Savings & Investment",
    description: "High-yield savings accounts and investment products to help you grow your wealth",
  },
  {
    icon: Users,
    title: "Business Solutions",
    description: "Complete financial toolkit for SMEs including invoicing, payroll, and expense management",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "Expert guidance on personal finance, investments, and business growth strategies",
  },
]

const features = [
  {
    title: "Financial Inclusion",
    description: "Bringing banking services to the unbanked and underbanked across Nigeria",
    stat: "500K+",
    label: "Users Onboarded",
  },
  {
    title: "Digital First",
    description: "Modern, user-friendly interfaces designed for the African market",
    stat: "99.9%",
    label: "Uptime",
  },
  {
    title: "Security",
    description: "Bank-grade encryption and biometric authentication to keep your money safe",
    stat: "₦50B+",
    label: "Secured Transactions",
  },
]

export default function FintechPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="text-2xl font-bold text-foreground">
                CapitalSage
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link
                  href="/about"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
                <Link href="/businesses" className="text-sm font-medium text-foreground transition-colors">
                  Our Businesses
                </Link>
                <Link
                  href="/impact"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Impact
                </Link>
                <Link
                  href="/news"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  News
                </Link>
                <Link
                  href="/careers"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </div>
            </div>
            <Button variant="default" size="sm" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mt-16 h-[600px] overflow-hidden">
        <img
          src="/modern-fintech-mobile-banking-africa-digital-finan.jpg"
          alt="CapitalSage Fintech"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6">
                <Smartphone className="h-5 w-5" />
                <span className="font-semibold">Fintech Division</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance">
                Rethinking Finance Through Technology
              </h1>
              <p className="text-2xl text-white/90 mb-8 text-pretty leading-relaxed">
                Making financial services accessible, affordable, and simple for everyone across Nigeria
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" variant="secondary" className="group">
                  Open an Account
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500K+</div>
              <div className="text-lg opacity-90">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">₦50B+</div>
              <div className="text-lg opacity-90">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Products</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">WHY CHOOSE US</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Built for Africa, powered by technology</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique financial needs of Africans and have built solutions that work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {feature.stat}
                </div>
                <div className="text-sm text-muted-foreground mb-6">{feature.label}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">OUR PRODUCTS</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Complete financial solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From everyday banking to business growth, we have everything you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <product.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <img
                src="/african-woman-using-mobile-banking-app-fintech.jpg"
                alt="Financial Inclusion"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary mb-4">SUCCESS STORY</p>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
                Empowering small businesses across Nigeria
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "CapitalSage Fintech transformed my business. I can now accept digital payments, track expenses, and
                even access quick loans when I need inventory. It's like having a complete financial department in my
                pocket."
              </p>
              <div className="mb-6">
                <div className="font-semibold text-foreground">Adaeze Nwosu</div>
                <div className="text-sm text-muted-foreground">Fashion Retailer, Lagos</div>
              </div>
              <Button variant="outline" className="group bg-transparent" asChild>
                <Link href="/impact">
                  Read More Success Stories
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-balance">Ready to transform your finances?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join over 500,000 Nigerians who are already experiencing the future of finance
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Sales</Link>
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
