"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer, Building, FileText, CheckCircle, Globe, Users, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubmissionPacketPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white border-b sticky top-0 z-10 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Documents
            </Link>
            <div className="flex gap-2 sm:gap-3">
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

      {/* Document Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 print:py-0 print:px-0 print:max-w-none">
        <article className="bg-white rounded-xl border shadow-sm overflow-hidden print:shadow-none print:border-none print:rounded-none">

          {/* ==================== COVER PAGE ==================== */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white px-8 py-16 print:py-12 print:break-after-page">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                <Building className="h-4 w-4" />
                ETPL Application Submission
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                AI Capability Specialist Certificate
              </h1>
              <p className="text-xl text-blue-200 mb-8">
                Provider Application for Texas Eligible Training Provider List
              </p>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-md mx-auto mb-8">
                <div className="text-2xl font-bold mb-2">Institute for AI Innovation</div>
                <div className="text-blue-200">by Eula Properties LLC</div>
                <div className="text-sm text-blue-300 mt-2">InstituteForAIInnovation.org</div>
              </div>

              {/* Online-First Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-200 text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                Online Educational Course with In-Person Training Support Available
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-blue-200 text-sm">Hours</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$8,000</div>
                  <div className="text-blue-200 text-sm">Total Cost</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-blue-200 text-sm">Modules</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">15-1232</div>
                  <div className="text-blue-200 text-sm">Primary SOC</div>
                </div>
              </div>

              <div className="mt-8 text-sm text-blue-300">
                Submitted to: Gulf Coast Workforce Board | Date: December 2025
              </div>
            </div>
          </div>

          {/* ==================== TABLE OF CONTENTS ==================== */}
          <div className="px-8 py-8 border-b print:py-4 print:px-6 print:break-after-page print:break-inside-avoid">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 print:mb-3 print:text-lg">Table of Contents</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 print:gap-x-4 print:gap-y-0">
              {[
                { num: "1", title: "Program Overview" },
                { num: "2", title: "TWC Licensing Exemption" },
                { num: "3", title: "BrandVoice Employment Pipeline" },
                { num: "4", title: "Free Additional Training Levels" },
                { num: "5", title: "Premium AI Tool Suite" },
                { num: "6", title: "Cost Justification" },
                { num: "7", title: "Program Curriculum" },
                { num: "8", title: "SOC Code Mapping" },
                { num: "9", title: "Admissions, Attendance & Grading" },
                { num: "10", title: "Refund Policy" },
                { num: "11", title: "Student Grievance Procedure" },
                { num: "12", title: "Nondiscrimination & EEO Policy" },
                { num: "13", title: "Student Support & Job Placement" },
                { num: "14", title: "Program Catalog Entry" },
                { num: "15", title: "Provider Submission Packet" },
                { num: "16", title: "Workforce Board Appeal Language" },
              ].map((doc) => (
                <div key={doc.num} className="flex items-center gap-3 py-2 print:py-1 print:gap-2 border-b border-dashed border-gray-200 print:border-gray-300">
                  <span className="w-7 h-7 print:w-5 print:h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm print:text-[10px] font-bold flex-shrink-0">{doc.num}</span>
                  <span className="text-gray-700 print:text-xs">{doc.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== PROVIDER INFORMATION ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building className="h-6 w-6 text-blue-600" />
              Provider Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Legal Entity</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y">
                    <tr><td className="py-2 text-gray-500">Organization Name</td><td className="py-2 font-medium text-gray-900">Institute for AI Innovation</td></tr>
                    <tr><td className="py-2 text-gray-500">DBA / Operating As</td><td className="py-2 font-medium text-gray-900">Eula Properties LLC</td></tr>
                    <tr><td className="py-2 text-gray-500">Website</td><td className="py-2 font-medium text-blue-600">InstituteForAIInnovation.org</td></tr>
                    <tr><td className="py-2 text-gray-500">Entity Type</td><td className="py-2 font-medium text-gray-900">Limited Liability Company</td></tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Training Locations</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <div className="font-medium text-gray-900">Primary Location</div>
                    <div className="text-gray-600 mt-1">11139 Homestead Rd<br />Houston, TX 77016</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <div className="font-medium text-gray-900">Secondary Location</div>
                    <div className="text-gray-600 mt-1">9132 Pembrook St<br />Houston, TX 77016</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Method Emphasis */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 text-lg mb-2">Primary Delivery: Online Educational Course</h3>
                  <p className="text-blue-800 mb-3">
                    The AI Capability Specialist Certificate is <strong>primarily delivered online</strong>, providing flexible access to high-quality AI training from anywhere with internet connectivity.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-blue-700 text-sm">
                      <Monitor className="h-4 w-4" />
                      Live virtual instruction sessions
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 text-sm">
                      <Users className="h-4 w-4" />
                      In-person hands-on support available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== SECTION 1: PROGRAM OVERVIEW ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">1</span>
              <h2 className="text-2xl font-bold text-gray-900">Program Overview</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 mb-6 text-white">
              <h3 className="text-xl font-bold mb-3">Official Program Description</h3>
              <p className="text-blue-100">
                The <strong className="text-white">AI Capability Specialist Certificate</strong> is a{" "}
                <strong className="text-white">24-hour intensive workforce development credential</strong> delivered primarily online, preparing individuals for in-demand technology support roles in AI-enhanced business environments. In-person hands-on training support is available at our Houston locations.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-gray-600">Total Hours</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-blue-600">7</div>
                <div className="text-sm text-gray-600">Modules</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-blue-600">$8K</div>
                <div className="text-sm text-gray-600">Total Value</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-emerald-600">Online</div>
                <div className="text-sm text-gray-600">Primary Delivery</div>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Measurable Competencies & Outcomes</h3>
            <p className="text-gray-600 mb-4">Upon successful completion, graduates demonstrate verified proficiency in:</p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                { num: "1", title: "AI Tool Proficiency", desc: "Hands-on experience with professional generative AI platforms" },
                { num: "2", title: "Technical Support Skills", desc: "Structured troubleshooting and customer service capabilities" },
                { num: "3", title: "Workflow Automation", desc: "Ability to design and implement AI-powered workflows" },
                { num: "4", title: "Professional Readiness", desc: "Workplace behaviors and communication skills employers require" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Who This Program Serves</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" />Adults seeking rapid entry into technology careers</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" />Unemployed or underemployed individuals pursuing workforce re-entry</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" />WIOA-eligible participants seeking in-demand credentials</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" />Career changers transitioning into AI-enhanced roles</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" />Individuals who need employment quickly and can't commit to lengthy programs</li>
            </ul>
          </div>

          {/* ==================== SECTION 2: LICENSING EXEMPTION ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">2</span>
              <h2 className="text-2xl font-bold text-gray-900">TWC Licensing Exemption Statement</h2>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 mb-6 text-white">
              <h3 className="text-xl font-bold mb-3">Texas Career School Licensing Exemption</h3>
              <p className="text-emerald-100">
                The AI Capability Specialist Certificate program is intentionally structured to qualify for
                <strong className="text-white"> Texas career school licensing exemption</strong> under Texas Education Code Section 132.002(a)(8).
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Exemption Compliance Elements</h3>
            <table className="w-full text-sm border rounded-lg overflow-hidden mb-6">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Requirement</th>
                  <th className="text-left px-4 py-3 font-semibold">Program Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3 font-medium">Total Instructional Hours</td><td className="px-4 py-3">24 hours (does not exceed exemption threshold)</td></tr>
                <tr><td className="px-4 py-3 font-medium">Self-Contained Program</td><td className="px-4 py-3">Complete credential awarded within 24-hour window</td></tr>
                <tr><td className="px-4 py-3 font-medium">Certificate Requirements</td><td className="px-4 py-3">No additional hours required for certification</td></tr>
                <tr><td className="px-4 py-3 font-medium">Supplemental Services</td><td className="px-4 py-3">Optional support offered separately (not required)</td></tr>
              </tbody>
            </table>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
              <p className="text-amber-800 text-sm">
                Optional additional levels (Skills Labs, Projects, Apprenticeship Track) are offered as value-added support services and occur <strong>outside</strong> the 24-hour core credential. Participation in these optional services is not required for certificate completion and does not affect the program's licensing exemption status.
              </p>
            </div>
          </div>

          {/* ==================== SECTION 3: BRANDVOICE PIPELINE ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">3</span>
              <h2 className="text-2xl font-bold text-gray-900">BrandVoice Employment Pipeline</h2>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 mb-6 text-white">
              <h3 className="text-xl font-bold mb-3">Guaranteed Interview Pathway</h3>
              <p className="text-purple-100">
                Strategic partnership providing qualified graduates with <strong className="text-white">guaranteed interview opportunities</strong> at BrandVoice within 30 days of program completion.
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Interview Pathway Requirements</h3>
            <div className="space-y-3 mb-6">
              {[
                "Complete 24 program hours with passing scores",
                "Maintain 90%+ attendance and professional conduct",
                "Demonstrate competency in all module assessments",
                "Guaranteed interview within 30 days of completion"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Potential Roles at BrandVoice</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {["AI Support Technician", "Customer Success Associate", "Technical Operations Coordinator", "AI Content Quality Specialist", "Digital Workflow Administrator"].map((role) => (
                <div key={role} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>{role}
                </div>
              ))}
            </div>
          </div>

          {/* ==================== SECTION 4: ADDITIONAL TRAINING ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold">4</span>
              <h2 className="text-2xl font-bold text-gray-900">Free Additional Training Levels</h2>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 mb-6 text-white">
              <h3 className="text-xl font-bold mb-3">$1,800 Value Included Free</h3>
              <p className="text-amber-100">
                Graduates receive unlimited access to additional training levels until employment at no extra cost.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <div className="font-bold text-amber-900 mb-2">Level 2: 1-on-1 Instructor Sessions</div>
                <p className="text-sm text-amber-800">72 hours of personalized office hours for Q&A and training support</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="font-bold text-blue-900 mb-2">Level 3: Skills Labs</div>
                <p className="text-sm text-blue-800">Extended hands-on practice with all 25+ AI tools</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <div className="font-bold text-emerald-900 mb-2">Level 4: Portfolio Projects</div>
                <p className="text-sm text-emerald-800">Create impressive work samples for interviews</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="font-bold text-purple-900 mb-2">Level 5: BrandVoice Apprenticeship</div>
                <p className="text-sm text-purple-800">Work on real client projects supervised by staff</p>
              </div>
            </div>
          </div>

          {/* ==================== SECTION 5: AI TOOLS ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center font-bold">5</span>
              <h2 className="text-2xl font-bold text-gray-900">Premium AI Tool Suite</h2>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-6 mb-6 text-white">
              <h3 className="text-xl font-bold mb-3">25+ Premium AI Platforms - 1-Year License Included</h3>
              <p className="text-cyan-100">
                Each student receives their own 1-year license access to all tools listed below.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["ChatGPT", "Claude Code", "Replit", "Sora 2", "Google Veo 3.1", "Kling 2.6", "Nano Banana Pro", "FLUX.2", "Runway Aleph", "Suno V4.5", "Ideogram V3", "Imagen 4", "Midjourney", "Stable Diffusion", "ElevenLabs", "And more..."].map((tool) => (
                <div key={tool} className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border">{tool}</div>
              ))}
            </div>
          </div>

          {/* ==================== SECTION 6: COST BREAKDOWN ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">6</span>
              <h2 className="text-2xl font-bold text-gray-900">Cost Justification</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b font-bold text-gray-900">$8,000 Total Value Breakdown</div>
                <div className="divide-y">
                  <div className="flex justify-between px-4 py-3 text-sm"><span>24-Hour Instructional Training</span><span className="font-semibold">$3,400</span></div>
                  <div className="flex justify-between px-4 py-3 text-sm"><span>Additional Training (72hr 1-on-1)</span><span className="font-semibold">$1,800</span></div>
                  <div className="flex justify-between px-4 py-3 text-sm"><span>Premium AI Tool Suite (1-year)</span><span className="font-semibold">$1,500</span></div>
                  <div className="flex justify-between px-4 py-3 text-sm"><span>BrandVoice Employment Pipeline</span><span className="font-semibold">$800</span></div>
                  <div className="flex justify-between px-4 py-3 text-sm"><span>Career Services & Job Placement</span><span className="font-semibold">$500</span></div>
                  <div className="flex justify-between px-4 py-3 bg-blue-600 text-white"><span className="font-bold">Total Program Cost</span><span className="text-lg font-bold">$8,000</span></div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Payment Options</h4>
                <div className="space-y-2">
                  {["Workforce Board voucher accepted", "WIOA funding eligible", "Full payment at enrollment", "Payment plans available"].map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 border">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==================== SECTION 7: CURRICULUM ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">7</span>
              <h2 className="text-2xl font-bold text-gray-900">24-Hour Curriculum</h2>
            </div>

            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Module</th>
                  <th className="text-left px-4 py-3 font-semibold">Title</th>
                  <th className="text-center px-4 py-3 font-semibold">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3">1</td><td className="px-4 py-3">AI Fundamentals & Digital Readiness</td><td className="px-4 py-3 text-center">4</td></tr>
                <tr><td className="px-4 py-3">2</td><td className="px-4 py-3">Applied AI Tools</td><td className="px-4 py-3 text-center">5</td></tr>
                <tr><td className="px-4 py-3">3</td><td className="px-4 py-3">Technical Support & Troubleshooting</td><td className="px-4 py-3 text-center">4</td></tr>
                <tr><td className="px-4 py-3">4</td><td className="px-4 py-3">Workflow Automation</td><td className="px-4 py-3 text-center">4</td></tr>
                <tr><td className="px-4 py-3">5</td><td className="px-4 py-3">Customer-Facing Service & Support</td><td className="px-4 py-3 text-center">3</td></tr>
                <tr><td className="px-4 py-3">6</td><td className="px-4 py-3">BrandVoice Support Simulations</td><td className="px-4 py-3 text-center">2</td></tr>
                <tr><td className="px-4 py-3">7</td><td className="px-4 py-3">Workforce & Professional Skills</td><td className="px-4 py-3 text-center">2</td></tr>
                <tr className="bg-blue-50 font-bold"><td className="px-4 py-3" colSpan={2}>TOTAL PROGRAM HOURS</td><td className="px-4 py-3 text-center text-blue-700">24</td></tr>
              </tbody>
            </table>
          </div>

          {/* ==================== SECTION 8: SOC CODES ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold">8</span>
              <h2 className="text-2xl font-bold text-gray-900">SOC Code Mapping</h2>
            </div>

            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">SOC Code</th>
                  <th className="text-left px-4 py-3 font-semibold">Occupation Title</th>
                  <th className="text-right px-4 py-3 font-semibold">TX Median Wage</th>
                  <th className="text-left px-4 py-3 font-semibold">Alignment</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 font-mono font-bold text-blue-700">15-1232</td>
                  <td className="px-4 py-3 font-medium">Computer User Support Specialists</td>
                  <td className="px-4 py-3 text-right">$54,470</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-bold">PRIMARY</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">43-4051</td>
                  <td className="px-4 py-3">Customer Service Representatives</td>
                  <td className="px-4 py-3 text-right">$38,150</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">Strong</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">15-1299</td>
                  <td className="px-4 py-3">Computer Occupations, All Other</td>
                  <td className="px-4 py-3 text-right">$56,890</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">Strong</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">13-1199</td>
                  <td className="px-4 py-3">Business Operations Specialists</td>
                  <td className="px-4 py-3 text-right">$76,850</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">Growth</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ==================== SECTION 9: POLICIES ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-slate-600 text-white rounded-lg flex items-center justify-center font-bold">9</span>
              <h2 className="text-2xl font-bold text-gray-900">Admissions, Attendance, Grading & Completion</h2>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Eligibility Requirements</h3>
            <ul className="space-y-1 text-gray-700 text-sm mb-6">
              <li>• Be at least 18 years of age</li>
              <li>• Possess a high school diploma, GED, or equivalent</li>
              <li>• English proficiency sufficient for technical instruction</li>
              <li>• Access to computer with reliable internet connection</li>
              <li>• Basic computer navigation skills</li>
            </ul>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-blue-800 font-medium">Minimum Attendance</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 text-center border border-amber-200">
                <div className="text-2xl font-bold text-amber-600">70%</div>
                <div className="text-sm text-amber-800 font-medium">Minimum Passing Grade</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 text-center border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600">5 Days</div>
                <div className="text-sm text-emerald-800 font-medium">Certificate Issuance</div>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Certificate Requirements</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Attend minimum 90% of 24 program hours</li>
              <li>• Achieve 70% minimum on all module assessments</li>
              <li>• Successfully complete practical demonstrations</li>
              <li>• Maintain professional conduct throughout program</li>
            </ul>
          </div>

          {/* ==================== SECTION 10: REFUND POLICY ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">10</span>
              <h2 className="text-2xl font-bold text-gray-900">Refund Policy</h2>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 mb-6 border border-emerald-200">
              <h4 className="font-bold text-emerald-900 mb-2">Three-Day Full Refund Guarantee</h4>
              <p className="text-emerald-800 text-sm">
                Students may cancel enrollment within <strong>three (3) business days</strong> of signing the enrollment agreement and receive a full refund of all monies paid.
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Withdrawal After Program Start</h3>
            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold">Program Completed</th>
                  <th className="text-left px-4 py-2 font-semibold">Hours Attended</th>
                  <th className="text-right px-4 py-2 font-semibold">Refund</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-2">0% - 25%</td><td className="px-4 py-2">0-6 hours</td><td className="px-4 py-2 text-right font-semibold text-emerald-600">75%</td></tr>
                <tr><td className="px-4 py-2">26% - 50%</td><td className="px-4 py-2">7-12 hours</td><td className="px-4 py-2 text-right font-semibold text-amber-600">50%</td></tr>
                <tr><td className="px-4 py-2">51% - 75%</td><td className="px-4 py-2">13-18 hours</td><td className="px-4 py-2 text-right font-semibold text-orange-600">25%</td></tr>
                <tr><td className="px-4 py-2">More than 75%</td><td className="px-4 py-2">19+ hours</td><td className="px-4 py-2 text-right text-gray-500">No refund</td></tr>
              </tbody>
            </table>
          </div>

          {/* ==================== SECTION 11: GRIEVANCE ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-bold">11</span>
              <h2 className="text-2xl font-bold text-gray-900">Student Grievance Procedure</h2>
            </div>

            <p className="text-gray-600 mb-4">Students who have concerns or complaints should follow this process:</p>

            <div className="space-y-3">
              {[
                { step: "1", title: "Informal Resolution", desc: "Discuss concern with instructor or program coordinator within 5 business days" },
                { step: "2", title: "Written Complaint", desc: "Submit written grievance if informal resolution unsuccessful" },
                { step: "3", title: "Review & Response", desc: "Management review within 10 business days with written response" },
                { step: "4", title: "External Complaint", desc: "If unresolved, contact TWC or appropriate regulatory body" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border">
                  <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== SECTION 12: EEO POLICY ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">12</span>
              <h2 className="text-2xl font-bold text-gray-900">Nondiscrimination & Equal Opportunity Policy</h2>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">WIOA Section 188 Compliance</h4>
              <p className="text-blue-800 text-sm">
                Institute for AI Innovation is committed to providing equal opportunity in all programs and activities. We do not discriminate on the basis of race, color, religion, sex, national origin, age, disability, genetic information, veteran status, or any other protected characteristic.
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Equal Opportunity Commitment</h3>
            <ul className="space-y-1 text-gray-700 text-sm mb-6">
              <li>• Providing reasonable accommodations for individuals with disabilities</li>
              <li>• Ensuring program accessibility</li>
              <li>• Maintaining an environment free from harassment</li>
              <li>• Providing materials in alternative formats upon request</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-4 border">
              <p className="text-gray-700 text-sm italic">
                Institute for AI Innovation is an equal opportunity employer/program. Auxiliary aids and services are available upon request to individuals with disabilities.
              </p>
            </div>
          </div>

          {/* ==================== SECTION 13: STUDENT SUPPORT ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center font-bold">13</span>
              <h2 className="text-2xl font-bold text-gray-900">Student Support & Job Placement Services</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <h4 className="font-bold text-emerald-900 mb-2">Career Services</h4>
                <ul className="text-sm text-emerald-800 space-y-1">
                  <li>• Resume optimization for AI roles</li>
                  <li>• Interview preparation coaching</li>
                  <li>• Job search strategy support</li>
                  <li>• LinkedIn profile enhancement</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">Job Placement Support</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• BrandVoice guaranteed interview pathway</li>
                  <li>• Employer network connections</li>
                  <li>• Job matching assistance</li>
                  <li>• Continued support until employment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ==================== SECTION 14: CATALOG ENTRY ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-violet-600 text-white rounded-lg flex items-center justify-center font-bold">14</span>
              <h2 className="text-2xl font-bold text-gray-900">Program Catalog Entry</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border">
              <h3 className="font-bold text-gray-900 text-lg mb-4">AI Capability Specialist Certificate</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Program Length:</span> <span className="font-medium">24 Hours</span></div>
                <div><span className="text-gray-500">Total Cost:</span> <span className="font-medium">$8,000</span></div>
                <div><span className="text-gray-500">Credential Awarded:</span> <span className="font-medium">Certificate of Completion</span></div>
                <div><span className="text-gray-500">Delivery Method:</span> <span className="font-medium">Online (with in-person support)</span></div>
                <div><span className="text-gray-500">Primary SOC Code:</span> <span className="font-medium font-mono">15-1232</span></div>
                <div><span className="text-gray-500">Licensing Status:</span> <span className="font-medium">Exempt (24-hour)</span></div>
              </div>
            </div>
          </div>

          {/* ==================== SECTION 15: PROVIDER PACKET ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-sky-600 text-white rounded-lg flex items-center justify-center font-bold">15</span>
              <h2 className="text-2xl font-bold text-gray-900">Provider Submission Summary</h2>
            </div>

            <div className="bg-sky-50 rounded-lg p-4 mb-6 border border-sky-200">
              <p className="text-sky-800 text-sm">
                This document serves as the consolidated provider submission packet for ETPL application. All supporting documentation is included herein and available online at InstituteForAIInnovation.org/documents.
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Documents Included in This Submission</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                <div key={num} className="flex items-center gap-2 py-1">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm text-gray-700">Section {num} - Included</span>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== SECTION 16: APPEAL LANGUAGE ==================== */}
          <div className="px-8 py-8 border-b print:break-after-page">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">16</span>
              <h2 className="text-2xl font-bold text-gray-900">Workforce Board Appeal Language</h2>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Value Statement for ETPL Approval</h3>
              <p className="text-emerald-100 mb-4">
                The AI Capability Specialist Certificate represents an innovative workforce development solution that addresses critical skills gaps in the Texas labor market. This program offers:
              </p>
              <ul className="space-y-2 text-emerald-100">
                <li>• <strong className="text-white">Guaranteed Employment Pathway:</strong> Direct interview guarantee with BrandVoice</li>
                <li>• <strong className="text-white">Exceptional Value:</strong> $8,000 program includes $1,800+ in additional training and $1,500 in AI tools</li>
                <li>• <strong className="text-white">Rapid Time-to-Employment:</strong> 24-hour format enables faster workforce entry</li>
                <li>• <strong className="text-white">Continued Support:</strong> Free training until employment demonstrates commitment to outcomes</li>
                <li>• <strong className="text-white">Market-Aligned Skills:</strong> Training directly addresses employer demand for AI-capable workers</li>
              </ul>
            </div>
          </div>

          {/* ==================== PROVIDER CONTACT ==================== */}
          <div className="px-8 py-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Contact Information</h2>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Organization</h3>
                  <div className="text-gray-700">
                    <div className="font-medium text-lg">Institute for AI Innovation</div>
                    <div className="text-gray-500">by Eula Properties LLC</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Primary Location</h3>
                  <div className="text-gray-700">
                    11139 Homestead Rd<br />
                    Houston, TX 77016
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Website</h3>
                  <div className="text-blue-600 font-medium">InstituteForAIInnovation.org</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Email</h3>
                  <div className="text-blue-600 font-medium">dbutler@eulaproperties.com</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Application Date</h3>
                  <div className="text-gray-700">December 2025</div>
                </div>
              </div>
            </div>
          </div>

        </article>
      </main>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          header {
            display: none !important;
          }

          /* Prevent sections from breaking in the middle */
          .print\\:break-inside-avoid {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }

          /* Tables should not split across pages */
          table {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }

          /* Keep grid items together */
          .grid > div {
            break-inside: avoid !important;
          }

          /* Reduce spacing for print */
          .print\\:py-6 {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
