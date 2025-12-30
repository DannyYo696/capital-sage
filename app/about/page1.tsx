"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Heart, Award, Users, TrendingUp, Globe2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const leaders = [
  {
    name: "Opeyemi Oduwole",
    role: "Chairman, Board of Directors",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/08e700001732bb80a991aea21caa8d433d48f37d/oduwole.webp"
  },
  {
    name: "John Alamu",
    role: "Founder/Group Managing Director",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/023def9fa22b375f618cce8cd13353de6a365c3d/alamu.webp"
  },
  {
    name: "Yemisi Shittu",
    role: "Group Executive Director, Operations",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/6beeaaece6af97f06b2d13e9a94c494a6567056e/shittu.webp"
  },
  {
    name: "Oladipo Ogunmolu",
    role: "Executive Director, Johnvents Industries",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/d475aadbda63f32d30e6d0b12951a7361ffa3174/ogunmola.webp"
  },
  {
    name: "Tolulope Olatunji",
    role: "Company Secretary",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/084ae41e7566d50a00b911c0d507d47e9fffb637/tolulope.webp"
  },
  {
    name: "John Alamu",
    role: "Founder/Group Managing Director",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/023def9fa22b375f618cce8cd13353de6a365c3d/alamu.webp"
  },
  {
    name: "Yemisi Shittu",
    role: "Group Executive Director, Operations",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/6beeaaece6af97f06b2d13e9a94c494a6567056e/shittu.webp"
  },
  {
    name: "Oladipo Ogunmolu",
    role: "Executive Director, Johnvents Industries",
    image: "https://raw.githubusercontent.com/DannyYo696/svillage/d475aadbda63f32d30e6d0b12951a7361ffa3174/ogunmola.webp"
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

export default function AboutPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://raw.githubusercontent.com/DannyYo696/svillage/3d0531e8db8f29c620e6ac147eaa837a041dc85d/cs-logo.webp"
            alt="CapitalSage Logo"
            width={70}
            height={70}
            className="object-contain"
            priority
          />
        </Link>

        {/* Center Glass Nav */}
        <nav className="hidden lg:flex items-center gap-10 px-10 py-3
          bg-white/15 backdrop-blur-2xl
          rounded-full border border-white/30
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        >
          <Link href="/" className="text-white text-sm font-medium hover:underline hover:underline-offset-4">Home</Link>
          <Link href="/about" className="text-white text-sm font-medium hover:underline hover:underline-offset-4">About Us</Link>
          <Link href="/about" className="text-white text-sm font-medium hover:underline hover:underline-offset-4">Our Businesses</Link>
          <Link href="/branches" className="text-white text-sm font-medium hover:underline hover:underline-offset-4">Impact</Link>
          <Link href="/news" className="text-white text-sm font-medium hover:underline hover:underline-offset-4">News</Link>
          <Link href="/careers" className="text-white text-sm font-medium hover:underline hover:underline-offset-4">Careers</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/agent"
          className="inline-flex items-center gap-2 bg-white text-[#0B1F5A]
          px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
        >
          Have Questions?
          <span className="text-lg">↗</span>
        </Link>

      </div>
    </div>
  </nav>
        <img
          src="https://raw.githubusercontent.com/DannyYo696/svillage/73d8a747c12112116d02da6fe966140b72eba548/about-hero.webp"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center pt-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance">
                We are architects of transformation
              </h1>
              <p className="text-2xl text-white/90 text-pretty leading-relaxed">
                Building businesses that drive prosperity and sustainable growth across Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-4">OUR STORY</p>
              <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">Champions of a prosperous Africa</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
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
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 translate-x-4 translate-y-4" />
              <img
                src="/african-business-leaders-diverse-team-modern-offic.jpg"
                alt="Our Team"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative p-12 bg-[#06319E] rounded-3xl text-white overflow-hidden hover:scale-105 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-4xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  To build world-class businesses that create economic opportunity, drive sustainable development, and
                  contribute to a prosperous Africa where everyone can thrive.
                </p>
              </div>
            </div>

            <div className="group relative p-12 bg-[#FF6400] rounded-3xl text-white overflow-hidden hover:scale-105 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  To be Africa's most respected conglomerate, recognized for building businesses that transform lives,
                  communities, and contribute to the continent's position in the global economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">OUR VALUES</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">The principles that guide us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values are the foundation of everything we do, shaping our culture and driving our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                className={`group relative p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-500 ${
                  hoveredValue === index ? "scale-105" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="group inline-block">
                      <div className="p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-4xl font-bold text-primary mb-3">{milestone.year}</div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 w-6 h-6 rounded-full bg-primary hidden md:block" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">LEADERSHIP</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Meet our leadership team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders driving innovation and excellence across our businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{leader.role}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">RECOGNITION</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Awards & achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">BBB+ Investment Rating</h3>
              <p className="text-muted-foreground mb-2">GCR Rating, 2023</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recognition of financial strength and commitment to sustainable growth
              </p>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Agricultural Innovation Award</h3>
              <p className="text-muted-foreground mb-2">African Agribusiness Forum, 2023</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For pioneering sustainable agricultural practices across West Africa
              </p>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best Fintech Initiative</h3>
              <p className="text-muted-foreground mb-2">Nigeria Banking Awards, 2022</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For advancing financial inclusion through innovative technology
              </p>
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
          <h2 className="text-5xl font-bold mb-6 text-balance">Join us in building Africa's future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Be part of a team that's transforming industries and creating opportunities across the continent
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="group" asChild>
              <Link href="/careers">
                Explore Careers
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
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
