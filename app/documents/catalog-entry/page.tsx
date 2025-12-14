import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function CatalogEntryPage() {
  return (
    <DocumentLayout title="Program Catalog Entry" section="Section 14" subtitle="ETPL Display Information">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-blue-500/20">
        <h2 className="text-2xl font-bold mb-4">AI Capability Specialist Certificate</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 rounded-xl p-3">
            <span className="text-blue-200 text-xs">Credential</span>
            <p className="text-white font-semibold text-sm">Certificate of Completion</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <span className="text-blue-200 text-xs">Program Length</span>
            <p className="text-white font-semibold text-sm">24 Hours</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <span className="text-blue-200 text-xs">Delivery Format</span>
            <p className="text-white font-semibold text-sm">Intensive Hybrid</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <span className="text-blue-200 text-xs">Total Cost</span>
            <p className="text-white font-semibold text-sm">$8,000</p>
          </div>
        </div>
      </div>

      <h2>Program Description</h2>
      <p>
        The AI Capability Specialist Certificate is a 24-hour intensive workforce development
        credential preparing students for technology support roles in AI-enhanced business
        environments. This program combines AI fundamentals, applied tools, technical support
        skills, and workflow automation into a concentrated curriculum designed to maximize
        employment outcomes.
      </p>

      <h2>Learning Outcomes</h2>
      <p>Graduates will be able to:</p>
      <div className="grid md:grid-cols-2 gap-3 my-6 not-prose">
        {[
          "Utilize professional AI tools for content creation, automation, and support",
          "Apply structured troubleshooting to diagnose and resolve technical issues",
          "Design and implement workflow automations using no-code platforms",
          "Deliver excellent customer service in AI-enhanced support environments",
          "Demonstrate professional workplace behaviors and communication skills"
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 border border-slate-200">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0">{i + 1}</div>
            <span className="text-slate-700 text-sm">{item}</span>
          </div>
        ))}
      </div>

      <h2>Curriculum Summary</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Module</th>
              <th className="text-center">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Module 1: AI Fundamentals & Digital Readiness</td><td className="text-center">4</td></tr>
            <tr><td>Module 2: Applied AI Tools</td><td className="text-center">5</td></tr>
            <tr><td>Module 3: Technical Support & Troubleshooting</td><td className="text-center">4</td></tr>
            <tr><td>Module 4: Workflow Automation</td><td className="text-center">4</td></tr>
            <tr><td>Module 5: Customer-Facing Service & Support</td><td className="text-center">3</td></tr>
            <tr><td>Module 6: BrandVoice Support Simulations</td><td className="text-center">2</td></tr>
            <tr><td>Module 7: Workforce & Professional Skills</td><td className="text-center">2</td></tr>
            <tr className="bg-blue-50 font-semibold"><td>Total</td><td className="text-center text-blue-700">24</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Admission Requirements</h2>
      <div className="grid md:grid-cols-2 gap-3 my-6 not-prose">
        {[
          "High school diploma, GED, or equivalent",
          "18 years of age or older",
          "Basic digital literacy",
          "Computer with internet access"
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-slate-700 font-medium text-sm">{item}</span>
          </div>
        ))}
      </div>

      <h2>Program Cost</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <tbody>
            <tr>
              <td>24-Hour Intensive Training</td>
              <td className="text-right font-semibold">$2,400</td>
            </tr>
            <tr>
              <td>Premium AI Tool Suite Access</td>
              <td className="text-right font-semibold">$1,800</td>
            </tr>
            <tr>
              <td>BrandVoice Employment Pipeline</td>
              <td className="text-right font-semibold">$1,500</td>
            </tr>
            <tr>
              <td>Free Additional Training Levels</td>
              <td className="text-right font-semibold">$1,500</td>
            </tr>
            <tr>
              <td>Career Services & Job Placement</td>
              <td className="text-right font-semibold">$800</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="font-bold">Total</td>
              <td className="text-right font-bold text-blue-700">$8,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><em>WIOA funding and Workforce Board vouchers accepted</em></p>

      <h2>Career Opportunities</h2>
      <p>Graduates are prepared for positions including:</p>
      <div className="grid md:grid-cols-3 gap-2 my-6 not-prose">
        {[
          "AI Support Technician",
          "Help Desk Technician",
          "Digital Capability Assistant",
          "Technical Customer Service Rep",
          "Automation Specialist",
          "AI Project Aide"
        ].map((title) => (
          <div key={title} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="text-slate-700 text-sm font-medium">{title}</span>
          </div>
        ))}
      </div>

      <h2>SOC Code Alignment</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">SOC Code</th>
              <th className="text-left">Occupation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="font-mono">15-1232</td><td>Computer User Support Specialists (Primary)</td></tr>
            <tr><td className="font-mono">43-4051</td><td>Customer Service Representatives</td></tr>
            <tr><td className="font-mono">15-1299</td><td>Computer Occupations, All Other</td></tr>
            <tr><td className="font-mono">43-9021</td><td>Data Entry / Information Processing Workers</td></tr>
            <tr><td className="font-mono">13-1199</td><td>Business Operations Specialists</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Employer Partnership</h2>
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 my-6 border border-emerald-200 not-prose">
        <p className="text-emerald-800">
          Program includes <strong>guaranteed interview pathway</strong> with BrandVoice for
          qualified graduates, plus continued training at no cost until employment.
        </p>
      </div>

      <h2>Program Features</h2>
      <div className="grid md:grid-cols-2 gap-3 my-6 not-prose">
        {[
          "24-hour intensive credential (licensing exempt)",
          "Professional AI tool suite included",
          "Guaranteed employer interview pathway",
          "Free additional training until employment",
          "Comprehensive career support services"
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">✓</div>
            <span className="text-blue-900 font-medium text-sm">{item}</span>
          </div>
        ))}
      </div>
    </DocumentLayout>
  );
}
