import { CheckCircle2, Circle, ArrowRight, FileText, Building, Users, Send, BarChart3, FolderOpen } from "lucide-react";
import Link from "next/link";

const phases = [
  {
    title: "Immediate Actions",
    subtitle: "This Week",
    icon: ArrowRight,
    color: "bg-red-500",
    steps: [
      {
        title: "Review Generated Documents",
        description: "Go to the Documents section and review all 16 sections of ETPL documentation",
        link: "/documents"
      },
      {
        title: "Verify Business Entity Status",
        description: "Confirm LLC/Corporation is active with Texas Secretary of State and locate EIN documentation"
      },
      {
        title: "Determine TWC Licensing",
        description: "Programs under 24 hours qualify for licensing exemption under Texas Education Code Section 132.002(a)(8)"
      }
    ]
  },
  {
    title: "Before Applying",
    subtitle: "Complete These First",
    icon: FileText,
    color: "bg-orange-500",
    steps: [
      {
        title: "Finalize Curriculum",
        description: "Review the 24-hour curriculum across 7 modules, adjust content if needed, add proprietary tools or methods"
      },
      {
        title: "Confirm BrandVoice Partnership",
        description: "Get written agreement/letter of support, confirm interview guarantee terms, document contact person"
      },
      {
        title: "Set Up Cost Structure",
        description: "Verify $8,000 pricing, establish payment processing, set up WIOA/voucher acceptance"
      },
      {
        title: "Create Student Enrollment Materials",
        description: "Use the enrollment agreement, student handbook, and program schedule from the Documents section",
        link: "/documents"
      }
    ]
  },
  {
    title: "Application Phase",
    subtitle: "Submit to Workforce Board",
    icon: Send,
    color: "bg-blue-500",
    steps: [
      {
        title: "Identify Your Local Workforce Board",
        description: "Find which Texas Workforce Board covers your area, get their specific ETPL submission requirements"
      },
      {
        title: "Register in TWIST System",
        description: "Create provider account in Texas Workforce Information System, complete provider profile"
      },
      {
        title: "Submit Provider Packet",
        description: "Provider info, program details, all policies, cost breakdown, SOC mapping, BrandVoice partnership docs"
      },
      {
        title: "Respond to Board Requests",
        description: "Track revision requests, submit clarifications promptly"
      }
    ]
  },
  {
    title: "After Approval",
    subtitle: "Ongoing Requirements",
    icon: BarChart3,
    color: "bg-green-500",
    steps: [
      {
        title: "Set Up Student Tracking",
        description: "Track completion rates, employment outcomes, credential attainment"
      },
      {
        title: "Prepare for Annual Renewal",
        description: "Document any program changes, track performance metrics throughout the year"
      }
    ]
  }
];

const documents = [
  { name: "Program Brochure", href: "/documents/brochure" },
  { name: "Program Overview", href: "/documents/program-overview" },
  { name: "BrandVoice Employment Pipeline", href: "/documents/brandvoice-pipeline" },
  { name: "Full Curriculum (24 Hours)", href: "/documents/curriculum" },
  { name: "Program Costs", href: "/documents/costs" },
  { name: "Refund Policy", href: "/documents/refund-policy" },
];

export default function NextStepsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Next Steps Guide
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Complete roadmap for your ETPL application
              </p>
            </div>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 text-sm"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Tracker
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-white rounded-lg border p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">4</div>
            <div className="text-xs sm:text-sm text-gray-500">Phases</div>
          </div>
          <div className="bg-white rounded-lg border p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">13</div>
            <div className="text-xs sm:text-sm text-gray-500">Total Steps</div>
          </div>
          <div className="bg-white rounded-lg border p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">16</div>
            <div className="text-xs sm:text-sm text-gray-500">Documents Ready</div>
          </div>
          <div className="bg-white rounded-lg border p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">24</div>
            <div className="text-xs sm:text-sm text-gray-500">Program Hours</div>
          </div>
        </div>

        {/* Generated Documents Section */}
        <div className="bg-white rounded-lg border p-4 sm:p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Key Documents Ready
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            All documentation is available in the{" "}
            <Link href="/documents" className="text-blue-600 hover:underline font-medium">
              Documents section
            </Link>
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {documents.map((doc, index) => (
              <Link
                key={index}
                href={doc.href}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-900 group-hover:text-blue-600">{doc.name}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/documents"
            className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            <FolderOpen className="h-4 w-4" />
            View All 16 Documents
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Phases */}
        {phases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`${phase.color} p-2 rounded-lg`}>
                <phase.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{phase.title}</h2>
                <p className="text-sm text-gray-500">{phase.subtitle}</p>
              </div>
            </div>

            <div className="space-y-3 ml-2 border-l-2 border-gray-200 pl-4 sm:pl-6">
              {phase.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="bg-white rounded-lg border p-4 relative">
                  <div className="absolute -left-6 sm:-left-8 top-4 w-4 h-4 bg-white border-2 border-gray-300 rounded-full" />
                  <div className="flex items-start gap-3">
                    <Circle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                      {step.link && (
                        <Link
                          href={step.link}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2 font-medium"
                        >
                          View Documents <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Program Summary Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 sm:p-6 text-white">
          <h2 className="text-lg sm:text-xl font-bold mb-4">AI Capability Specialist Certificate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <div className="text-blue-200 text-sm">Program Length</div>
              <div className="text-xl sm:text-2xl font-bold">24 Hours</div>
              <div className="text-blue-200 text-sm mt-1">7 Modules</div>
            </div>
            <div>
              <div className="text-blue-200 text-sm">Total Cost</div>
              <div className="text-xl sm:text-2xl font-bold">$8,000</div>
              <div className="text-blue-200 text-sm mt-1">WIOA Eligible</div>
            </div>
            <div>
              <div className="text-blue-200 text-sm">Primary SOC Code</div>
              <div className="text-xl sm:text-2xl font-bold">15-1232</div>
              <div className="text-blue-200 text-sm mt-1">Computer User Support</div>
            </div>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 bg-white rounded-lg border p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Helpful Resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.twc.texas.gov/programs/eligible-training-provider-system"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Building className="h-5 w-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-medium text-gray-900 text-sm">TWC ETPL Information</div>
                <div className="text-xs sm:text-sm text-gray-500 truncate">Official Texas Workforce Commission page</div>
              </div>
            </a>
            <a
              href="https://www.twc.texas.gov/partners/workforce-development-boards"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Users className="h-5 w-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-medium text-gray-900 text-sm">Find Your Workforce Board</div>
                <div className="text-xs sm:text-sm text-gray-500 truncate">Locate your local board contact</div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          Texas ETPL Application Progress Tracker
        </div>
      </footer>
    </div>
  );
}
