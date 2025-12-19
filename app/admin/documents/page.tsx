import Link from "next/link";
import { FileText, Building, DollarSign, BookOpen, Scale, Shield, Heart, Briefcase, ClipboardList, Send, MessageSquare, BookMarked, Download, GraduationCap, Calendar, FileSignature, Award, Zap, Wrench, Monitor, Package, ArrowLeft, BarChart3 } from "lucide-react";

const studentDocuments = [
  {
    title: "Enrollment Agreement",
    description: "Student enrollment form with program costs and acknowledgments",
    href: "/admin/documents/enrollment-agreement",
    icon: FileSignature,
  },
  {
    title: "Student Handbook",
    description: "Complete policies, expectations, and resources guide",
    href: "/admin/documents/student-handbook",
    icon: BookOpen,
  },
  {
    title: "Program Schedule",
    description: "24-hour intensive curriculum breakdown",
    href: "/admin/documents/program-schedule",
    icon: Calendar,
  },
];

const documents = [
  {
    section: "Section 1",
    title: "Program Overview",
    description: "24-hour intensive credential, outcomes, workforce relevance",
    href: "/admin/documents/program-overview",
    icon: FileText,
  },
  {
    section: "Section 2",
    title: "TWC Licensing Exemption",
    description: "24-hour exemption statement and compliance",
    href: "/admin/documents/licensing-exemption",
    icon: Award,
  },
  {
    section: "Section 3",
    title: "BrandVoice Employment Pipeline",
    description: "Guaranteed interview pathway and partnership details",
    href: "/admin/documents/brandvoice-pipeline",
    icon: Briefcase,
  },
  {
    section: "Section 4",
    title: "Free Additional Training Levels",
    description: "Level 2-4 training until employment",
    href: "/admin/documents/additional-levels",
    icon: Zap,
  },
  {
    section: "Section 5",
    title: "Premium AI Tool Suite",
    description: "Replit, Nano Banana, VEO 3, Kling access justification",
    href: "/admin/documents/ai-tools",
    icon: Wrench,
  },
  {
    section: "Section 6",
    title: "Cost Justification",
    description: "Complete $8,000 value breakdown and justification",
    href: "/admin/documents/costs",
    icon: DollarSign,
  },
  {
    section: "Section 7",
    title: "Program Curriculum",
    description: "24-hour, 7-module curriculum with assessments",
    href: "/admin/documents/curriculum",
    icon: BookOpen,
  },
  {
    section: "Section 8",
    title: "SOC Code Mapping",
    description: "Occupational alignment with 5 SOC codes",
    href: "/admin/documents/soc-mapping",
    icon: ClipboardList,
  },
  {
    section: "Section 9",
    title: "Admissions, Attendance & Grading",
    description: "Program policies for 24-hour model",
    href: "/admin/documents/policies",
    icon: ClipboardList,
  },
  {
    section: "Section 10",
    title: "Refund Policy",
    description: "Simplified refund policy for exempt program",
    href: "/admin/documents/refund-policy",
    icon: Scale,
  },
  {
    section: "Section 11",
    title: "Student Grievance Procedure",
    description: "Complaint resolution process",
    href: "/admin/documents/grievance",
    icon: MessageSquare,
  },
  {
    section: "Section 12",
    title: "Nondiscrimination & EEO Policy",
    description: "WIOA Section 188 compliant policy",
    href: "/admin/documents/eeo-policy",
    icon: Shield,
  },
  {
    section: "Section 13",
    title: "Student Support & Job Placement",
    description: "Career services and support until employment",
    href: "/admin/documents/student-support",
    icon: Heart,
  },
  {
    section: "Section 14",
    title: "Program Catalog Entry",
    description: "Compact catalog summary - 24hrs/$8,000",
    href: "/admin/documents/catalog-entry",
    icon: FileText,
  },
  {
    section: "Section 15",
    title: "Provider Submission Packet",
    description: "Consolidated summary for Workforce Boards",
    href: "/admin/documents/provider-packet",
    icon: Send,
  },
  {
    section: "Section 16",
    title: "Workforce Board Appeal Language",
    description: "Value statement for ETPL approval",
    href: "/admin/documents/appeal-language",
    icon: Building,
  },
  {
    section: "Section 21",
    title: "Student Data Report (SDR)",
    description: "WIOA performance indicators & TWC accountability data",
    href: "/admin/documents/student-data-report",
    icon: BarChart3,
  },
];

export default function AdminDocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Main Site
              </Link>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                ETPL Documentation (Admin)
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                AI Capability Specialist Certificate - Complete Submission Package
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        {/* Program Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 sm:p-6 text-white mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4">AI Capability Specialist Certificate</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div>
              <div className="text-blue-200 text-xs sm:text-sm">Program Length</div>
              <div className="text-lg sm:text-xl font-bold">24 Hours</div>
            </div>
            <div>
              <div className="text-blue-200 text-xs sm:text-sm">Total Cost</div>
              <div className="text-lg sm:text-xl font-bold">$8,000</div>
            </div>
            <div>
              <div className="text-blue-200 text-xs sm:text-sm">Modules</div>
              <div className="text-lg sm:text-xl font-bold">7</div>
            </div>
            <div>
              <div className="text-blue-200 text-xs sm:text-sm">Primary SOC</div>
              <div className="text-lg sm:text-xl font-bold">15-1232</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-500/30 text-blue-100 text-xs sm:text-sm">
            Includes: Premium AI Tools - BrandVoice Interview Pathway - Free Training Until Employment
          </div>
        </div>

        {/* Program Brochure Feature */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Link
            href="/admin/documents/brochure"
            className="block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-4 sm:p-6 text-white hover:shadow-xl transition-all group border border-slate-700"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <BookMarked className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="flex-1">
                <div className="text-slate-400 text-xs font-medium mb-0.5 sm:mb-1">Portrait Format (Letter)</div>
                <h3 className="text-base sm:text-lg font-bold group-hover:text-blue-300 transition-colors">
                  Program Brochure
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Print-ready document format
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-600 rounded-lg text-xs font-medium group-hover:bg-blue-500 transition-colors">
                <Download className="h-3 w-3" />
                View
              </div>
            </div>
          </Link>

          <Link
            href="/admin/documents/brochure-landscape"
            className="block bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-xl p-4 sm:p-6 text-white hover:shadow-xl transition-all group border border-indigo-700"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <Monitor className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="flex-1">
                <div className="text-indigo-300 text-xs font-medium mb-0.5 sm:mb-1">Landscape Format (16:9)</div>
                <h3 className="text-base sm:text-lg font-bold group-hover:text-blue-300 transition-colors">
                  Presentation Slides
                </h3>
                <p className="text-indigo-300 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  PowerPoint-style presentation
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-indigo-600 rounded-lg text-xs font-medium group-hover:bg-indigo-500 transition-colors">
                <Download className="h-3 w-3" />
                View
              </div>
            </div>
          </Link>
        </div>

        {/* Student Data Report Feature */}
        <Link
          href="/admin/documents/student-data-report"
          className="block bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-xl p-4 sm:p-6 text-white hover:shadow-xl transition-all group mb-4 border border-slate-600"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div className="flex-1">
              <div className="text-slate-400 text-xs font-medium mb-0.5 sm:mb-1">TWC/WIOA Required</div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-blue-300 transition-colors">
                Student Data Report (SDR)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5 sm:mt-1">
                WIOA performance indicators, employment outcomes, credential attainment & accountability data
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-600 rounded-lg text-xs font-medium group-hover:bg-blue-500 transition-colors">
              <BarChart3 className="h-3 w-3" />
              View Report
            </div>
          </div>
        </Link>

        {/* Workforce Board Submission Packet */}
        <Link
          href="/admin/documents/submission-packet"
          className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-xl p-4 sm:p-6 text-white hover:shadow-xl transition-all group mb-6 sm:mb-8 border border-emerald-400"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
              <Package className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div className="flex-1">
              <div className="text-emerald-100 text-xs font-medium mb-0.5 sm:mb-1">Complete Submission Document</div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-white transition-colors">
                Workforce Board Submission Packet
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                Consolidated cover document with provider info, program summary, SOC codes & certifications
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg text-sm font-medium group-hover:bg-white/30 transition-colors">
              <Send className="h-4 w-4" />
              View & Download
            </div>
          </div>
        </Link>

        {/* Student Materials Section */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <GraduationCap className="h-5 w-5 text-emerald-600" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900">Student Enrollment Materials</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {studentDocuments.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200 p-5 hover:shadow-md hover:border-emerald-400 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                    <doc.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ETPL Documentation Section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FileText className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900">ETPL Submission Documents</h2>
        </div>

        {/* Instructions */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <p className="text-amber-800 text-xs sm:text-sm">
            <strong>Tip:</strong> Click any document to view. Use the &quot;Print / Save PDF&quot; button on each page to save as PDF for submission.
          </p>
        </div>

        {/* Document Grid */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {documents.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="bg-white rounded-lg border p-5 hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <doc.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">{doc.section}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t bg-white mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          Texas ETPL Application Documentation Package - 24-Hour Intensive Program
        </div>
      </footer>
    </div>
  );
}
