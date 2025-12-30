"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sprout, Package, Globe, Award, Leaf, TrendingUp } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Sprout,
    title: "Farmer Empowerment",
    description: "Training, financing, and support programs for smallholder farmers across West Africa",
  },
  {
    icon: Package,
    title: "Commodity Processing",
    description: "Modern processing facilities for cocoa, cashew, and other agricultural products",
  },
  {
    icon: Globe,
    title: "Export Trading",
    description: "Connecting African agricultural products to global markets with quality assurance",
  },
  {
    icon: Award,
    title: "Quality Control",
    description: "Rigorous standards ensuring international-grade quality for all our products",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Environmental stewardship and sustainable farming techniques across our supply chain",
  },
  {
    icon: TrendingUp,
    title: "Market Access",
    description: "Fair pricing and direct market access for farmers through digital platforms",
  },
]

const impact = [
  {
    stat: "150K+",
    label: "Farmers Empowered",
    description: "Providing training, resources, and market access to agricultural communities",
  },
  {
    stat: "$40M+",
    label: "Export Value",
    description: "Driving economic growth through strategic international partnerships",
  },
  {
    stat: "50K",
    label: "Hectares Cultivated",
    description: "Supporting sustainable agricultural production across multiple regions",
  },
  {
    stat: "5",
    label: "Countries",
    description: "Operating across West Africa with plans for continental expansion",
  },
]

export default function AgribusinessPage() {
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
          src="/african-farmers-in-cocoa-plantation-sustainable-ag.jpg"
          alt="Agribusiness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-green-800/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6">
                <Sprout className="h-5 w-5" />
                <span className="font-semibold">Agribusiness & FMCG</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance">
                Transforming Africa's Agricultural Value Chain
              </h1>
              <p className="text-2xl text-white/90 mb-8 text-pretty leading-relaxed">
                From farm to global markets, we're building sustainable food systems for Africa's future
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" variant="secondary" className="group">
                  Partner With Us
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
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{item.stat}</div>
                <div className="text-lg opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-4">JOHNVENTS INDUSTRIES</p>
              <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
                Building Africa's largest food and agribusiness group
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Johnvents Industries Limited is pioneering sustainable agricultural practices across Africa. We work
                  directly with over 150,000 farmers, providing training, resources, and guaranteed market access for
                  their produce.
                </p>
                <p>
                  Our integrated approach covers the entire value chain from farm inputs to processing, packaging, and
                  export. We specialize in cocoa, cashew, sesame, and other premium African commodities.
                </p>
                <p>
                  Through strategic partnerships with institutions like AFREXIM Bank and Fidelity Bank, we've secured
                  over $40M in export deals, creating thousands of jobs and driving economic development across
                  communities.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img
                src="/african-cocoa-farmers-harvest-sustainable-agricult.jpg"
                alt="Our Operations"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">WHAT WE DO</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">End-to-end agricultural solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services supporting farmers and connecting African agriculture to the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">OUR IMPACT</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Creating prosperity for farming communities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our commitment to sustainable agricultural development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impact.map((item, index) => (
              <div
                key={index}
                className="group p-12 rounded-3xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform">
                  {item.stat}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.label}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <img
                src="/african-farmers-in-cocoa-plantation-sustainable-ag.jpg"
                alt="Farmer Success"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-primary mb-4">SUCCESS STORY</p>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
                From struggling farmer to successful entrepreneur
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Before joining Johnvents Industries, I could barely feed my family from my cocoa farm. Now, with their
                training, quality inputs, and guaranteed market access, my income has tripled. I've even hired three
                workers and expanded my farm."
              </p>
              <div className="mb-6">
                <div className="font-semibold text-foreground">Musa Ibrahim</div>
                <div className="text-sm text-muted-foreground">Cocoa Farmer, Ondo State</div>
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
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-balance">Partner with us to grow African agriculture</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're a farmer, trader, or investor, we have opportunities for mutually beneficial partnerships
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="group">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
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
