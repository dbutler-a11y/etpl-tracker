"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrochureLandscapePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Header - Hidden in Print */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/documents"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Documents
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Monitor className="h-4 w-4" />
                Landscape Presentation Format
              </div>
              <div className="flex gap-3">
                <Button onClick={handlePrint} variant="outline" size="sm" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
                <Button onClick={handlePrint} size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Slides Container */}
      <div className="py-8 print:py-0 px-4">
        <div className="max-w-6xl mx-auto space-y-6 print:space-y-0">

          {/* ========== SLIDE 1: TITLE ========== */}
          <div className="slide-landscape bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
            <div className="flex h-full">
              <div className="flex-1 flex flex-col justify-center px-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 rounded-full text-xs font-semibold tracking-wide mb-6 w-fit">
                  WORKFORCE DEVELOPMENT CREDENTIAL
                </div>
                <h1 className="text-5xl font-bold mb-4 tracking-tight">
                  AI Capability Specialist
                </h1>
                <h2 className="text-3xl font-light text-blue-100 mb-8">
                  Certificate Program
                </h2>
                <p className="text-blue-100 text-lg max-w-xl">
                  24-hour intensive credential preparing individuals for technology support roles in AI-enhanced business environments.
                </p>
              </div>
              <div className="w-80 flex items-center justify-center px-8">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">24</div>
                    <div className="text-blue-200 text-sm">Hours</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">$8K</div>
                    <div className="text-blue-200 text-sm">Value</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">7</div>
                    <div className="text-blue-200 text-sm">Modules</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-blue-200 text-sm">Interview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer text-blue-200">
              Texas ETPL Program Documentation
            </div>
          </div>

          {/* ========== SLIDE 2: PROGRAM OVERVIEW ========== */}
          <div className="slide-landscape bg-white">
            <div className="slide-landscape-header">
              <span className="slide-landscape-number">01</span>
              <h2 className="text-2xl font-bold text-slate-900">Program Overview</h2>
            </div>
            <div className="flex-1 flex gap-8 px-12 py-6">
              <div className="flex-1">
                <p className="text-lg text-slate-700 mb-6">
                  The AI Capability Specialist Certificate is a <strong className="text-blue-600">24-hour intensive workforce development credential</strong> designed to prepare individuals for technology support roles.
                </p>
                <h3 className="font-bold text-slate-900 mb-3">Who We Serve</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span>Adults seeking rapid tech career entry</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span>Unemployed/underemployed individuals</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span>WIOA-eligible participants</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span>Career changers seeking AI skills</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-3">What Graduates Gain</h3>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Verified AI tool proficiency</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Technical support capabilities</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Workflow automation skills</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Professional work readiness</li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-blue-900 text-sm">
                    <strong>Guaranteed Interview Pathway</strong> with BrandVoice for all qualified graduates
                  </p>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 3: VALUE STACK ========== */}
          <div className="slide-landscape bg-white">
            <div className="slide-landscape-header">
              <span className="slide-landscape-number">02</span>
              <h2 className="text-2xl font-bold text-slate-900">What's Included — $8,000 Total Value</h2>
            </div>
            <div className="flex-1 px-12 py-6">
              <div className="grid grid-cols-5 gap-4 h-full">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200 flex flex-col">
                  <div className="text-2xl font-bold text-blue-700">$3,400</div>
                  <div className="font-semibold text-slate-900 mb-1">24-Hour Training</div>
                  <div className="text-sm text-slate-600 flex-1">7 intensive modules covering AI fundamentals to professional skills</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200 flex flex-col">
                  <div className="text-2xl font-bold text-orange-700">$1,800</div>
                  <div className="font-semibold text-slate-900 mb-1">Additional Training</div>
                  <div className="text-sm text-slate-600 flex-1">72hr 1-on-1 AI instructor sessions plus Levels 3-5</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200 flex flex-col">
                  <div className="text-2xl font-bold text-purple-700">$1,500</div>
                  <div className="font-semibold text-slate-900 mb-1">AI Tool Suite</div>
                  <div className="text-sm text-slate-600 flex-1">25+ premium platforms including ChatGPT, Claude, Replit</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 border border-emerald-200 flex flex-col">
                  <div className="text-2xl font-bold text-emerald-700">$800</div>
                  <div className="font-semibold text-slate-900 mb-1">BrandVoice Pipeline</div>
                  <div className="text-sm text-slate-600 flex-1">Guaranteed interview within 30 days of completion</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-5 border border-cyan-200 flex flex-col">
                  <div className="text-2xl font-bold text-cyan-700">$500</div>
                  <div className="font-semibold text-slate-900 mb-1">Career Services</div>
                  <div className="text-sm text-slate-600 flex-1">Resume, interview prep, and job placement support</div>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 4: CURRICULUM ========== */}
          <div className="slide-landscape bg-white">
            <div className="slide-landscape-header">
              <span className="slide-landscape-number">03</span>
              <h2 className="text-2xl font-bold text-slate-900">24-Hour Curriculum</h2>
              <div className="ml-auto px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-bold">24 Total Hours</div>
            </div>
            <div className="flex-1 px-8 py-3">
              <div className="grid grid-cols-4 gap-2 h-full">
                {[
                  { num: 1, title: "AI Fundamentals & Digital Readiness", hours: 4, color: "#2563eb", topics: ["AI concepts & terminology", "Cloud computing basics", "Digital tool navigation", "Professional AI ethics"] },
                  { num: 2, title: "Applied AI Tools", hours: 5, color: "#9333ea", topics: ["ChatGPT prompt engineering", "Claude for writing & analysis", "Replit code assistance", "Image & video AI tools"] },
                  { num: 3, title: "Technical Support & Troubleshooting", hours: 4, color: "#0891b2", topics: ["Structured troubleshooting", "Help desk best practices", "Documentation skills", "Remote support tools"] },
                  { num: 4, title: "Workflow Automation", hours: 4, color: "#059669", topics: ["Zapier fundamentals", "Make.com workflows", "No-code automation", "Process optimization"] },
                  { num: 5, title: "Customer-Facing Service", hours: 3, color: "#ea580c", topics: ["AI-enhanced communication", "Service excellence", "Escalation procedures"] },
                  { num: 6, title: "BrandVoice Simulations", hours: 2, color: "#db2777", topics: ["Live scenario practice", "Real-world case studies", "Performance feedback"] },
                  { num: 7, title: "Workforce & Professional Skills", hours: 2, color: "#4f46e5", topics: ["Resume optimization", "Interview preparation", "Professional presence"] },
                ].map((mod) => (
                  <div key={mod.num} className="bg-slate-50 rounded-lg p-3 border border-slate-200 flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: mod.color }}>
                        {mod.num}
                      </div>
                      <div className="px-1.5 py-0.5 bg-white rounded border text-xs font-bold text-slate-600">{mod.hours}h</div>
                    </div>
                    <div className="font-semibold text-slate-900 text-xs mb-1.5 leading-tight">{mod.title}</div>
                    <ul className="space-y-0.5 flex-1">
                      {mod.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-1 text-slate-600" style={{ fontSize: '10px' }}>
                          <span className="w-1 h-1 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: mod.color }}></span>
                          <span className="leading-tight">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-3 flex flex-col justify-center items-center text-white">
                  <div className="text-3xl font-bold">7</div>
                  <div className="text-blue-100 text-xs font-medium">Modules</div>
                  <div className="mt-2 w-full h-px bg-white/20"></div>
                  <div className="text-blue-100 text-xs mt-2">Complete</div>
                  <div className="text-blue-100 text-xs">Workforce</div>
                  <div className="text-blue-100 text-xs">Credential</div>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 5: AI TOOLS ========== */}
          <div className="slide-landscape bg-white">
            <div className="slide-landscape-header">
              <span className="slide-landscape-number">04</span>
              <h2 className="text-2xl font-bold text-slate-900">Premium AI Tool Suite — 25+ Platforms</h2>
              <div className="ml-auto px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold">1-Year License Included</div>
            </div>
            <div className="flex-1 px-10 py-4 flex flex-col">
              {/* License Notice */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-4 py-2.5 mb-4 text-sm text-center">
                <strong>All enrolled students receive their own 1-year license access to all tools listed below.</strong>
              </div>
              <div className="grid grid-cols-5 gap-3 flex-1">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">ChatGPT</div>
                  <div className="text-slate-600 text-xs mt-1">Advanced AI for writing, coding & analysis</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Claude Code</div>
                  <div className="text-slate-600 text-xs mt-1">AI coding assistant for apps & automation</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Replit</div>
                  <div className="text-slate-600 text-xs mt-1">Cloud IDE to build & deploy applications</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Sora 2</div>
                  <div className="text-slate-600 text-xs mt-1">OpenAI video generation for pro content</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-4 border border-cyan-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Google Veo 3.1</div>
                  <div className="text-slate-600 text-xs mt-1">Cinematic AI video with sound in 1080p</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Kling 2.6</div>
                  <div className="text-slate-600 text-xs mt-1">Cinematic video with integrated audio</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Nano Banana Pro</div>
                  <div className="text-slate-600 text-xs mt-1">AI image generation & enhancement</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">FLUX.2</div>
                  <div className="text-slate-600 text-xs mt-1">State-of-the-art image synthesis</div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-4 border border-rose-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Runway Aleph</div>
                  <div className="text-slate-600 text-xs mt-1">Professional video editing with AI</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Suno V4.5</div>
                  <div className="text-slate-600 text-xs mt-1">AI music & audio generation</div>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-4 border border-violet-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Ideogram V3</div>
                  <div className="text-slate-600 text-xs mt-1">AI text-to-image with typography</div>
                </div>
                <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-xl p-4 border border-lime-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Imagen 4</div>
                  <div className="text-slate-600 text-xs mt-1">Google's photorealistic image AI</div>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-4 border border-sky-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Hailuo 2.3</div>
                  <div className="text-slate-600 text-xs mt-1">High-quality video generation</div>
                </div>
                <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-xl p-4 border border-fuchsia-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Face Swap</div>
                  <div className="text-slate-600 text-xs mt-1">Professional face replacement tool</div>
                </div>
                <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl p-4 border border-stone-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Lipsync Studio</div>
                  <div className="text-slate-600 text-xs mt-1">AI lip sync for video content</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Video Upscale</div>
                  <div className="text-slate-600 text-xs mt-1">Enhance video quality to 4K resolution</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Seedream 4.5</div>
                  <div className="text-slate-600 text-xs mt-1">Creative AI image generation</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Midjourney</div>
                  <div className="text-slate-600 text-xs mt-1">Artistic AI image creation</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">Stable Diffusion</div>
                  <div className="text-slate-600 text-xs mt-1">Open-source image generation</div>
                </div>
                <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-xl p-4 border border-zinc-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-sm">ElevenLabs</div>
                  <div className="text-slate-600 text-xs mt-1">AI voice cloning & text-to-speech</div>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 6: CAREER OUTCOMES ========== */}
          <div className="slide-landscape bg-white">
            <div className="slide-landscape-header">
              <span className="slide-landscape-number">05</span>
              <h2 className="text-2xl font-bold text-slate-900">Career Outcomes</h2>
            </div>
            <div className="flex-1 flex gap-8 px-12 py-4">
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-3">Target Occupations (SOC Codes)</h3>
                <div className="space-y-2">
                  {[
                    { code: "15-1232", title: "Computer User Support Specialists", wage: "$54,470", tag: "Primary" },
                    { code: "43-4051", title: "Customer Service Representatives", wage: "$38,150", tag: "Strong" },
                    { code: "15-1299", title: "Computer Occupations, All Other", wage: "$56,890", tag: "Strong" },
                    { code: "13-1199", title: "Business Operations Specialists", wage: "$76,850", tag: "Growth" },
                  ].map((occ) => (
                    <div key={occ.code} className="flex items-center justify-between bg-slate-50 rounded-lg p-3 border">
                      <div>
                        <span className="text-xs font-mono text-slate-500">{occ.code}</span>
                        <div className="font-medium text-slate-900 text-sm">{occ.title}</div>
                      </div>
                      <div className="text-emerald-600 font-bold">{occ.wage}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-3">Sample Job Titles</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["AI Support Technician", "Help Desk Technician", "Digital Capability Assistant", "Automation Specialist", "AI Project Aide", "Workflow Coordinator"].map((title, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">{title}</span>
                  ))}
                </div>
                <div className="bg-emerald-100 rounded-xl p-4 border border-emerald-200">
                  <div className="text-emerald-900 font-semibold text-center">
                    Texas Median Salary Range: <span className="text-xl font-bold">$38K - $77K+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 7: BRANDVOICE PARTNERSHIP ========== */}
          <div className="slide-landscape bg-white">
            <div className="slide-landscape-header">
              <span className="slide-landscape-number">06</span>
              <h2 className="text-2xl font-bold text-slate-900">BrandVoice Employment Partnership</h2>
            </div>
            <div className="flex-1 flex gap-8 px-12 py-4">
              <div className="flex-1">
                <p className="text-slate-700 mb-4">
                  Strategic partnership providing qualified graduates with <strong>guaranteed interview opportunities</strong> at BrandVoice.
                </p>
                <h3 className="font-bold text-slate-900 mb-3">Interview Pathway</h3>
                <div className="space-y-3">
                  {[
                    "Complete 24 program hours with passing scores",
                    "Maintain 90%+ attendance and conduct",
                    "Guaranteed interview within 30 days",
                    "Priority consideration for matching roles"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <span className="text-slate-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-3">Potential Roles at BrandVoice</h3>
                <ul className="space-y-2 mb-4">
                  {["AI Support Technician", "Customer Success Associate", "Technical Operations Coordinator", "AI Content Quality Specialist", "Digital Workflow Administrator"].map((role) => (
                    <li key={role} className="flex items-center gap-2 text-slate-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>{role}
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-100 rounded-xl p-4 border border-emerald-200">
                  <p className="text-emerald-900 text-sm text-center">
                    <strong>Guaranteed interview within 30 days</strong> of program completion
                  </p>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 8: ADDITIONAL TRAINING ========== */}
          <div className="slide-landscape bg-white">
            <div className="slide-landscape-header">
              <span className="slide-landscape-number">07</span>
              <h2 className="text-2xl font-bold text-slate-900">Free Additional Training Until Employment</h2>
              <div className="ml-auto px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold">$1,800 Value Included</div>
            </div>
            <div className="flex-1 px-8 py-3">
              <div className="grid grid-cols-4 gap-3 h-full">
                {/* Level 2 */}
                <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-4 border-2 border-amber-300 flex flex-col">
                  <div className="absolute -top-2 left-4 px-2 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-full">LEVEL 2</div>
                  <div className="flex items-center gap-2 mt-2 mb-1">
                    <div className="text-2xl font-bold text-amber-600">72</div>
                    <div className="text-amber-700 font-semibold text-sm">Hours</div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">1-on-1 AI Instructor Sessions</h3>
                  <ul className="space-y-1.5 flex-1">
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Personalized office hours for Q&A and training support</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Deep-dive sessions to reinforce key concepts</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Build confidence with guided practice</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Master tools at your own pace</span>
                    </li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-amber-200">
                    <div className="text-amber-700 font-semibold" style={{ fontSize: '9px' }}>Schedule sessions until you feel job-ready</div>
                  </div>
                </div>
                {/* Level 3 */}
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-200 flex flex-col">
                  <div className="absolute -top-2 left-4 px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full">LEVEL 3</div>
                  <h3 className="font-bold text-slate-900 text-sm mt-4 mb-2">Skills Labs</h3>
                  <ul className="space-y-1.5 flex-1">
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Extended hands-on practice with all 25+ AI tools</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Real-world workflow simulations</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Tackle complex automation challenges</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Sharpen skills through repetition</span>
                    </li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-blue-200">
                    <div className="text-blue-700 font-semibold" style={{ fontSize: '9px' }}>Unlimited lab access until employment</div>
                  </div>
                </div>
                {/* Level 4 */}
                <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border-2 border-emerald-200 flex flex-col">
                  <div className="absolute -top-2 left-4 px-2 py-0.5 bg-emerald-600 text-white text-xs font-bold rounded-full">LEVEL 4</div>
                  <h3 className="font-bold text-slate-900 text-sm mt-4 mb-2">Portfolio Projects</h3>
                  <ul className="space-y-1.5 flex-1">
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Create personal projects showcasing your creativity</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Build impressive work samples for interviews</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Demonstrate skills to potential employers</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Receive instructor feedback & guidance</span>
                    </li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-emerald-200">
                    <div className="text-emerald-700 font-semibold" style={{ fontSize: '9px' }}>Leave with a professional portfolio</div>
                  </div>
                </div>
                {/* Level 5 */}
                <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-2 border-purple-200 flex flex-col">
                  <div className="absolute -top-2 left-4 px-2 py-0.5 bg-purple-600 text-white text-xs font-bold rounded-full">LEVEL 5</div>
                  <h3 className="font-bold text-slate-900 text-sm mt-4 mb-2">BrandVoice Apprenticeship</h3>
                  <ul className="space-y-1.5 flex-1">
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Work on real client projects supervised by staff</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Gain verifiable work experience for your resume</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Earn letter of recommendation upon completion</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600" style={{ fontSize: '10px' }}>
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Direct-hire potential based on performance</span>
                    </li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-purple-200">
                    <div className="text-purple-700 font-semibold" style={{ fontSize: '9px' }}>Real experience, real references</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 9: PROGRAM COSTS ========== */}
          <div className="slide-landscape bg-white">
            <div className="slide-landscape-header">
              <span className="slide-landscape-number">08</span>
              <h2 className="text-2xl font-bold text-slate-900">Program Costs</h2>
            </div>
            <div className="flex-1 flex gap-8 px-12 py-4">
              <div className="flex-1">
                <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 border-b font-bold text-slate-900">Cost Breakdown</div>
                  <div className="divide-y">
                    <div className="flex justify-between px-4 py-3"><span className="text-slate-700">24-Hour Instructional Training</span><span className="font-semibold">$3,400</span></div>
                    <div className="flex justify-between px-4 py-3"><span className="text-slate-700">Additional Training (72hr 1-on-1 + Levels)</span><span className="font-semibold">$1,800</span></div>
                    <div className="flex justify-between px-4 py-3"><span className="text-slate-700">Premium AI Tool Suite</span><span className="font-semibold">$1,500</span></div>
                    <div className="flex justify-between px-4 py-3"><span className="text-slate-700">BrandVoice Pipeline</span><span className="font-semibold">$800</span></div>
                    <div className="flex justify-between px-4 py-3"><span className="text-slate-700">Career Services</span><span className="font-semibold">$500</span></div>
                    <div className="flex justify-between px-4 py-3 bg-blue-600 text-white"><span className="font-bold">Total Program Cost</span><span className="text-xl font-bold">$8,000</span></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="font-bold text-slate-900">Payment Options</h3>
                <div className="space-y-2">
                  {["Workforce Board voucher accepted", "WIOA funding eligible", "Full payment at enrollment", "Payment plans available"].map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-slate-50 rounded-lg p-3 border">
                      <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-100 rounded-xl p-4 border border-emerald-200 mt-auto">
                  <p className="text-sm text-emerald-900">
                    <strong>Note:</strong> Program qualifies for Texas 24-hour licensing exemption under Texas Education Code Section 132.002(a)(8).
                  </p>
                </div>
              </div>
            </div>
            <div className="slide-landscape-footer">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 10: CLOSING ========== */}
          <div className="slide-landscape bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="flex h-full items-center justify-center">
              <div className="text-center max-w-3xl px-8">
                <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-slate-300 mb-8">
                  Join the AI Capability Specialist Certificate program and gain the skills, tools, and employer connections you need for the AI-enhanced workplace.
                </p>
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <div className="text-2xl font-bold">24 Hours</div>
                    <div className="text-slate-400 text-sm">Intensive Training</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <div className="text-2xl font-bold">$8,000</div>
                    <div className="text-slate-400 text-sm">Total Value</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-slate-400 text-sm">Interview Guarantee</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-slate-400 text-sm">Support Until Hired</div>
                  </div>
                </div>
                <div className="text-slate-400">Texas ETPL Application Documentation</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Landscape slide styles */}
      <style jsx global>{`
        .slide-landscape {
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        .slide-landscape-header {
          padding: 1rem 3rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .slide-landscape-number {
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .slide-landscape-footer {
          padding: 0.75rem 3rem;
          text-align: center;
          font-size: 0.75rem;
          color: #64748b;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        @media print {
          @page {
            size: landscape;
            margin: 0;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: white !important;
          }

          .slide-landscape {
            page-break-after: always;
            page-break-inside: avoid;
            border-radius: 0;
            box-shadow: none;
            height: 100vh;
            aspect-ratio: auto;
          }

          .slide-landscape:last-child {
            page-break-after: auto;
          }
        }
      `}</style>
    </div>
  );
}
