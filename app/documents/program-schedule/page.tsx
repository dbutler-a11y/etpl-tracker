"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramSchedulePage() {
  const handlePrint = () => {
    window.print();
  };

  const modules = [
    {
      number: 1,
      title: "AI Fundamentals & Digital Readiness",
      hours: 4,
      topics: [
        "AI concepts and terminology",
        "Digital tools and cloud basics",
        "Professional AI usage standards",
        "Data privacy and security awareness"
      ],
      assessments: ["Digital Readiness Quiz", "AI Concepts Assessment"]
    },
    {
      number: 2,
      title: "Applied AI Tools",
      hours: 5,
      topics: [
        "Replit - AI-powered development",
        "Nano Banana - Content production",
        "VEO 3 - Video AI generation",
        "Kling - Visual content automation",
        "Prompt engineering techniques"
      ],
      assessments: ["AI Tool Proficiency Lab", "Prompt Engineering Project"]
    },
    {
      number: 3,
      title: "Technical Support & Troubleshooting",
      hours: 4,
      topics: [
        "Structured troubleshooting methodology",
        "Help desk best practices",
        "Technical documentation",
        "Issue escalation procedures"
      ],
      assessments: ["Troubleshooting Scenarios", "Documentation Exercise"]
    },
    {
      number: 4,
      title: "Workflow Automation",
      hours: 4,
      topics: [
        "Zapier fundamentals",
        "Make (Integromat) workflows",
        "No-code automation design",
        "Process improvement basics"
      ],
      assessments: ["Automation Build Project", "Workflow Design Quiz"]
    },
    {
      number: 5,
      title: "Customer-Facing Service & Support",
      hours: 3,
      topics: [
        "AI-enhanced customer service",
        "Professional communication",
        "Issue resolution techniques",
        "Escalation handling"
      ],
      assessments: ["Customer Service Role-Play", "Communication Assessment"]
    },
    {
      number: 6,
      title: "BrandVoice Support Simulations",
      hours: 2,
      topics: [
        "BrandVoice platform overview",
        "Real-world support scenarios",
        "AI tool application practice",
        "Team collaboration exercises"
      ],
      assessments: ["BrandVoice Simulation", "Team Exercise Evaluation"]
    },
    {
      number: 7,
      title: "Workforce & Professional Skills",
      hours: 2,
      topics: [
        "Resume optimization",
        "Interview preparation",
        "Professional presence",
        "Job search strategies"
      ],
      assessments: ["Resume Review", "Mock Interview"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 print:hidden">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link
              href="/documents"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Documents
            </Link>
            <div className="flex gap-2">
              <Button onClick={handlePrint} variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button onClick={handlePrint} size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4" />
                Save PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-12 print:py-8 print:bg-purple-600">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
            <Calendar className="h-4 w-4" />
            Student Materials
          </span>
          <h1 className="text-4xl font-bold mb-3 print:text-2xl">Program Schedule & Curriculum</h1>
          <p className="text-purple-100 text-lg">AI Capability Specialist Certificate - 24-Hour Intensive</p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl border p-5 text-center">
            <div className="text-3xl font-bold text-purple-600">24</div>
            <div className="text-sm text-slate-600">Total Hours</div>
          </div>
          <div className="bg-white rounded-xl border p-5 text-center">
            <div className="text-3xl font-bold text-purple-600">7</div>
            <div className="text-sm text-slate-600">Modules</div>
          </div>
          <div className="bg-white rounded-xl border p-5 text-center">
            <div className="text-3xl font-bold text-purple-600">2-4</div>
            <div className="text-sm text-slate-600">Days (Typical)</div>
          </div>
          <div className="bg-white rounded-xl border p-5 text-center">
            <div className="text-3xl font-bold text-purple-600">14</div>
            <div className="text-sm text-slate-600">Assessments</div>
          </div>
        </div>

        {/* Schedule Format Options */}
        <div className="bg-white rounded-xl border p-6 mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-purple-600" />
            Intensive Format Options
          </h2>
          <p className="text-slate-600 mb-4">
            The 24-hour program can be delivered in several intensive formats based on cohort scheduling:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">2-Day Intensive</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>Day 1: 8:00 AM - 8:00 PM (12 hours)</li>
                <li>Day 2: 8:00 AM - 8:00 PM (12 hours)</li>
                <li>Weekend or consecutive days</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">3-Day Format</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>Day 1: 8:00 AM - 4:00 PM (8 hours)</li>
                <li>Day 2: 8:00 AM - 4:00 PM (8 hours)</li>
                <li>Day 3: 8:00 AM - 4:00 PM (8 hours)</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">4-Day Extended</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>4 evenings: 5:00 PM - 11:00 PM</li>
                <li>6 hours per session</li>
                <li>Weekday evenings</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4 italic">
            * Specific schedule will be confirmed at enrollment based on cohort availability.
          </p>
        </div>

        {/* Module Schedule */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Module-by-Module Breakdown</h2>

        <div className="space-y-6">
          {modules.map((module) => (
            <div key={module.number} className="bg-white rounded-xl border overflow-hidden print:break-inside-avoid">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{module.title}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">{module.hours} hours</div>
                  <div className="text-slate-300 text-sm">{Math.round(module.hours / 24 * 100)}% of program</div>
                </div>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Topics Covered</h4>
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Assessments</h4>
                  <ul className="space-y-2">
                    {module.assessments.map((assessment, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-medium text-xs">
                          {i + 1}
                        </span>
                        <span className="text-slate-700">{assessment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Inclusions */}
        <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">What's Included Beyond Training</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Premium AI Tool Suite</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Replit - AI-powered development
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Nano Banana - Content production
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  VEO 3 - Video AI generation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Kling - Visual content automation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Post-Certificate Support</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  BrandVoice guaranteed interview within 30 days
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Free Level 2-4 training until employment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Career services and job placement
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Ongoing support until hired
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certification Requirements */}
        <div className="mt-10 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-6">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Certification Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-emerald-800 mb-2">To Earn Your Certificate</h3>
              <ul className="space-y-2 text-sm text-emerald-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  Complete all 24 program hours
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  Achieve 70%+ on all assessments
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  Maintain 90%+ attendance (21.6 hours)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  Demonstrate professional conduct
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-800 mb-2">For BrandVoice Interview Pathway</h3>
              <ul className="space-y-2 text-sm text-emerald-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  Meet all certification requirements
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  Complete resume and interview prep
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  Pass BrandVoice simulation module
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  Interview scheduled within 30 days
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Dates Template */}
        <div className="mt-10 bg-white rounded-xl border p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Key Dates (Complete at Enrollment)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500">Program Start Date</label>
                <div className="border-b-2 border-slate-300 h-8 mt-1"></div>
              </div>
              <div>
                <label className="text-sm text-slate-500">Program End Date</label>
                <div className="border-b-2 border-slate-300 h-8 mt-1"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500">BrandVoice Interview Window</label>
                <div className="border-b-2 border-slate-300 h-8 mt-1"></div>
              </div>
              <div>
                <label className="text-sm text-slate-500">Certificate Issuance Date</label>
                <div className="border-b-2 border-slate-300 h-8 mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 mt-16 print:hidden">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div className="font-medium text-slate-700">
              AI Capability Specialist Certificate
            </div>
            <div>
              Student Enrollment Materials
            </div>
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in 0.6in;
          }

          html, body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 10pt;
          }

          /* Hide navigation and footer */
          header, footer {
            display: none !important;
          }

          /* Main container */
          section {
            padding: 0 !important;
            margin: 0 auto !important;
            max-width: 100% !important;
          }

          /* Hero section */
          section.bg-gradient-to-r {
            padding: 1rem 1.5rem !important;
            page-break-after: avoid;
          }

          h1 {
            font-size: 1.5rem !important;
          }

          h2 {
            font-size: 1.15rem !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }

          h3 {
            font-size: 0.95rem !important;
          }

          h4 {
            font-size: 0.9rem !important;
          }

          p, li {
            font-size: 9pt !important;
            line-height: 1.4 !important;
          }

          /* Program overview stats */
          .grid.md\\:grid-cols-4 {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 0.5rem !important;
            margin-bottom: 1rem !important;
          }

          .grid.md\\:grid-cols-4 > div {
            padding: 0.5rem !important;
          }

          .grid.md\\:grid-cols-4 .text-3xl {
            font-size: 1.25rem !important;
          }

          /* Format options section */
          .grid.md\\:grid-cols-3 {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.5rem !important;
          }

          .grid.md\\:grid-cols-3 > div {
            padding: 0.5rem !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Module cards - keep together */
          .bg-white.rounded-xl.border.overflow-hidden {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-bottom: 0.75rem !important;
            border-radius: 4px !important;
          }

          /* Module header */
          .bg-gradient-to-r.from-slate-800 {
            padding: 0.5rem 1rem !important;
          }

          .bg-gradient-to-r.from-slate-800 .w-10.h-10 {
            width: 1.75rem !important;
            height: 1.75rem !important;
            font-size: 0.75rem !important;
          }

          .bg-gradient-to-r.from-slate-800 h3 {
            font-size: 0.85rem !important;
          }

          .bg-gradient-to-r.from-slate-800 .font-bold {
            font-size: 0.85rem !important;
          }

          /* Module content */
          .p-6.grid {
            padding: 0.75rem 1rem !important;
            gap: 1rem !important;
          }

          .p-6.grid ul {
            margin: 0 !important;
          }

          .p-6.grid li {
            margin-bottom: 0.25rem !important;
            font-size: 8.5pt !important;
          }

          /* Icon sizing */
          svg {
            width: 12px !important;
            height: 12px !important;
          }

          /* Value inclusions section */
          .bg-gradient-to-r.from-blue-50,
          .bg-gradient-to-r.from-emerald-50 {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            padding: 1rem !important;
            margin-top: 0.75rem !important;
            border-radius: 4px !important;
          }

          /* Grid within value sections */
          .grid.md\\:grid-cols-2 {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }

          /* Key dates section */
          .bg-white.rounded-xl.border.p-6:last-of-type {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            padding: 0.75rem 1rem !important;
          }

          /* Format option boxes */
          .bg-purple-50.rounded-lg,
          .bg-blue-50.rounded-lg,
          .bg-green-50.rounded-lg {
            padding: 0.5rem !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          .bg-purple-50 h3,
          .bg-blue-50 h3,
          .bg-green-50 h3 {
            font-size: 0.85rem !important;
            margin-bottom: 0.25rem !important;
          }

          .bg-purple-50 ul,
          .bg-blue-50 ul,
          .bg-green-50 ul {
            margin: 0 !important;
          }

          .bg-purple-50 li,
          .bg-blue-50 li,
          .bg-green-50 li {
            font-size: 8pt !important;
            margin-bottom: 0.125rem !important;
          }

          /* Rounded corners for print */
          .rounded-xl, .rounded-lg, .rounded-full {
            border-radius: 4px !important;
          }

          /* Spacing reductions */
          .mb-10, .mb-6 {
            margin-bottom: 0.75rem !important;
          }

          .mt-10 {
            margin-top: 0.75rem !important;
          }

          .gap-6 {
            gap: 0.5rem !important;
          }

          .space-y-6 > * + * {
            margin-top: 0.5rem !important;
          }

          .space-y-2 > * + * {
            margin-top: 0.25rem !important;
          }

          .p-6, .p-5 {
            padding: 0.75rem !important;
          }

          .px-6 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .py-10 {
            padding-top: 0.75rem !important;
            padding-bottom: 0.75rem !important;
          }

          /* Form fields */
          .border-b-2 {
            border-width: 1px !important;
          }

          /* Reduce heading margins */
          .text-2xl.font-bold {
            font-size: 1.1rem !important;
            margin-bottom: 0.5rem !important;
          }

          .text-xl.font-bold {
            font-size: 1rem !important;
            margin-bottom: 0.375rem !important;
          }
        }
      `}</style>
    </div>
  );
}
