"use client";

import { ArrowRight, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StaggerVisualizer } from "@/components/marketing/StaggerVisualizer";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 50% 100%, rgba(15, 30, 60, 0.9) 0%, transparent 50%),
          radial-gradient(ellipse 80% 60% at 20% 20%, rgba(20, 30, 70, 0.6) 0%, transparent 40%),
          radial-gradient(ellipse 60% 50% at 80% 30%, rgba(30, 20, 60, 0.5) 0%, transparent 40%),
          linear-gradient(180deg, #04070d 0%, #0a101f 30%, #0c1528 60%, #070b14 100%)
        `
      }}
    >
      {/* Animated stagger grid background */}
      <StaggerVisualizer />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Premium headline with gradient and glow */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-shadow-lg">
            Launch Your AI Career
            <span className="block text-gradient-blue text-glow mt-2">in 24 Hours</span>
          </h1>

          {/* Subheadline with refined typography */}
          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300/90 sm:text-xl md:text-2xl font-light tracking-wide">
            <span className="font-medium text-white">AI Capability Specialist Certificate</span>
            <span className="mx-3 text-blue-400/60">|</span>
            <span className="text-gradient-gold font-semibold">$8,000</span>
            <span className="mx-3 text-blue-400/60">|</span>
            <span className="text-blue-300">Guaranteed Interview Pathway</span>
          </p>

          {/* Premium stat cards with glass effect */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <div className="group glass rounded-2xl p-6 hover-lift shadow-glow">
              <div className="text-3xl font-bold text-gradient-blue sm:text-4xl lg:text-5xl font-mono" data-stat>24</div>
              <div className="mt-3 text-sm font-medium text-gray-300/80 uppercase tracking-widest sm:text-base">Hours</div>
            </div>

            <div className="group glass rounded-2xl p-6 hover-lift shadow-glow">
              <div className="text-3xl font-bold text-gradient-blue sm:text-4xl lg:text-5xl font-mono" data-stat>7</div>
              <div className="mt-3 text-sm font-medium text-gray-300/80 uppercase tracking-widest sm:text-base">Modules</div>
            </div>

            <div className="group glass rounded-2xl p-6 hover-lift shadow-glow">
              <div className="text-3xl font-bold text-gradient-blue sm:text-4xl lg:text-5xl font-mono" data-stat>25+</div>
              <div className="mt-3 text-sm font-medium text-gray-300/80 uppercase tracking-widest sm:text-base">AI Tools</div>
            </div>

            <div className="group glass rounded-2xl p-6 hover-lift shadow-glow">
              <div className="text-3xl font-bold text-gradient-blue sm:text-4xl lg:text-5xl font-mono" data-stat>100%</div>
              <div className="mt-3 text-sm font-medium text-gray-300/80 uppercase tracking-widest sm:text-base">Interview Rate</div>
            </div>
          </div>

          {/* Premium CTA buttons */}
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="btn-shine w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 sm:w-auto text-base sm:text-lg px-10 py-7 rounded-xl font-semibold shadow-glow-lg transition-all duration-300"
              asChild
            >
              <a href="#apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full glass text-white hover:bg-white/20 sm:w-auto text-base sm:text-lg px-10 py-7 rounded-xl font-medium transition-all duration-300"
              asChild
            >
              <a href="/admin/documents/brochure">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full glass text-white hover:bg-white/20 sm:w-auto text-base sm:text-lg px-10 py-7 rounded-xl font-medium transition-all duration-300"
              asChild
            >
              <a href="#apply">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
