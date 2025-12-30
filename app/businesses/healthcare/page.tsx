"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Stethoscope, Activity, ClipboardCheck, Users, MapPin } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Stethoscope,
    title: "General Practice",
    description: "Comprehensive primary care services with experienced doctors for all your health needs",
  },
  {
    icon: Activity,
    title: "Diagnostic Services",
    description: "State-of-the-art laboratory and imaging facilities for accurate diagnosis",
  },
  {
    icon: ClipboardCheck,
    title: "Specialist Consultations",
    description: "Expert care across cardiology, orthopedics, pediatrics, and other specialties",
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Health screenings, vaccinations, and wellness programs to keep you healthy",
  },
  {
    icon: Users,
    title: "Telemedicine",
    description: "Connect with healthcare professionals from the comfort of your home",
  },
  {
    icon: MapPin,
    title: "Pharmacy Services",
    description: "On-site pharmacies stocked with essential medications and health products",
  },
]

const facilities = [
  {
    city: "Lagos",
    centers: 15,
    services: "Full Diagnostic & Specialist Care",
  },
  {
    city: "Abuja",
    centers: 12,
    services: "Comprehensive Medical Services",
  },
  {
    city: "Port Harcourt",
    centers: 8,
    services: "Primary & Specialist Care",
  },
  {
    city: "Kano",
    centers: 7,
    services: "Diagnostic & Treatment Facilities",
  },
  {
    city: "Ibadan",
    centers: 5,
    services: "General Practice & Diagnostics",
  },
  {
    city: "Benin",
    centers: 3,
    services: "Medical Center & Pharmacy",
  },
]

export default function HealthcarePage() {
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
          src="/modern-healthcare-facility-africa-medical-professi.jpg"
          alt="CapitalSage Healthcare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-rose-800/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6">
                <Heart className="h-5 w-5" />
                <span className="font-semibold">Healthcare Division</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance">
                Meeting Africa's Healthcare Needs
              </h1>
              <p className="text-2xl text-white/90 mb-8 text-pretty leading-relaxed">
                Providing accessible, affordable, and quality healthcare that enhances the well-being of communities
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" variant="secondary" className="group">
                  Find a Facility
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Medical Centers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200K+</div>
              <div className="text-lg opacity-90">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">300+</div>
              <div className="text-lg opacity-90">Healthcare Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-4">HEALTHCARE EXCELLENCE</p>
              <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
                World-class healthcare across Nigeria
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  CapitalSage Healthcare operates a network of modern medical facilities across major cities in Nigeria.
                  Our state-of-the-art diagnostic centers and clinics are equipped with the latest technology and
                  staffed by experienced healthcare professionals.
                </p>
                <p>
                  We believe quality healthcare should be accessible to everyone. Our facilities offer comprehensive
                  services from routine check-ups to specialized treatments, all delivered with compassion and
                  professionalism.
                </p>
                <p>
                  With over 300 healthcare professionals and 50+ facilities nationwide, we're committed to improving
                  health outcomes and making a positive impact on communities across Nigeria.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-red-500/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <img
                src="/modern-african-healthcare-facility-medical-profess.jpg"
                alt="Our Facilities"
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
            <p className="text-sm font-semibold text-primary mb-4">OUR SERVICES</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Comprehensive healthcare solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From prevention to treatment, we provide complete healthcare services for you and your family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4">OUR LOCATIONS</p>
            <h2 className="text-5xl font-bold text-foreground mb-4">Close to you, wherever you are</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With facilities across Nigeria's major cities, quality healthcare is always within reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{facility.city}</h3>
                    <p className="text-primary font-medium">{facility.centers} Centers</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{facility.services}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group bg-transparent">
              View All Locations
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Patient Story */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-red-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img
                src="/modern-healthcare-facility-africa-medical-professi.jpg"
                alt="Patient Care"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-primary mb-4">PATIENT STORY</p>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Care that saved my father's life</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "When my father had a heart attack, the quick response from CapitalSage Healthcare's emergency team
                saved his life. The doctors were professional, the facilities were excellent, and the follow-up care has
                been outstanding. We're forever grateful."
              </p>
              <div className="mb-6">
                <div className="font-semibold text-foreground">Ngozi Okonkwo</div>
                <div className="text-sm text-muted-foreground">Patient Family Member, Lagos</div>
              </div>
              <Button variant="outline" className="group bg-transparent" asChild>
                <Link href="/impact">
                  Read More Patient Stories
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-rose-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-balance">Your health is our priority</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book an appointment today and experience quality healthcare delivered with compassion
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="group">
              Book Appointment
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
