import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function ProgramOverviewPage() {
  return (
    <DocumentLayout title="Program Overview" section="Section 1" subtitle="24-Hour Intensive Skills Credential">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-blue-500/20">
        <h2 className="text-2xl font-bold mb-4">Official Program Description</h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          The <strong className="text-white">AI Capability Specialist Certificate</strong> is a{" "}
          <strong className="text-white">24-hour intensive workforce development credential</strong> designed
          to prepare individuals for in-demand technology support roles in AI-enhanced business environments.
        </p>
      </div>

      {/* Program at a Glance */}
      <div className="grid md:grid-cols-4 gap-4 mb-12 not-prose">
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">24</div>
          <div className="text-sm text-slate-600 font-medium">Total Hours</div>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">7</div>
          <div className="text-sm text-slate-600 font-medium">Modules</div>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">$8K</div>
          <div className="text-sm text-slate-600 font-medium">Total Value</div>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">✓</div>
          <div className="text-sm text-slate-600 font-medium">Interview Pathway</div>
        </div>
      </div>

      <h2>Measurable Competencies & Outcomes</h2>
      <p>Upon successful completion, graduates demonstrate verified proficiency in:</p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">AI Tool Proficiency</h4>
              <p className="text-sm text-slate-600">Hands-on experience with professional generative AI platforms</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Technical Support Skills</h4>
              <p className="text-sm text-slate-600">Structured troubleshooting and customer service capabilities</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Workflow Automation</h4>
              <p className="text-sm text-slate-600">Ability to design and implement AI-powered workflows</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">4</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Professional Readiness</h4>
              <p className="text-sm text-slate-600">Workplace behaviors and communication skills employers require</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Job-Ready Skills</h2>
      <p>This isn't theory — it's applied, practical training. Graduates leave with:</p>
      <ul>
        <li>Portfolio-ready work samples demonstrating real capabilities</li>
        <li>Verified assessments proving competency to employers</li>
        <li>Direct experience with tools used in professional environments</li>
        <li>BrandVoice guaranteed interview pathway for qualified completers</li>
        <li>Access to continued training levels until employment (at no additional cost)</li>
      </ul>

      <h2>Target Occupations</h2>
      <div className="grid md:grid-cols-2 gap-3 my-6 not-prose">
        {[
          "AI Support Technician",
          "Digital Capability Assistant",
          "Technical Support Specialist",
          "Customer-Facing AI Support",
          "AI Project Aide",
          "Digital Operations Coordinator",
          "Help Desk Technician",
          "Automation Specialist"
        ].map((title) => (
          <div key={title} className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-slate-700 font-medium">{title}</span>
          </div>
        ))}
      </div>

      <h2>Who This Program Serves</h2>
      <ul>
        <li>Adults seeking rapid entry into technology careers</li>
        <li>Unemployed or underemployed individuals pursuing workforce re-entry</li>
        <li>WIOA-eligible participants seeking in-demand credentials</li>
        <li>Career changers transitioning into AI-enhanced roles</li>
        <li>Current workers upskilling in AI capabilities</li>
        <li>Individuals who need employment quickly and can't commit to lengthy programs</li>
      </ul>

      <h2>Why Workforce Centers Should Fund This Program</h2>

      {/* Value Proposition Card */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 my-6 not-prose">
        <h3 className="font-bold text-amber-900 text-lg mb-3">High-Value, Outcomes-Focused Model</h3>
        <p className="text-amber-800 leading-relaxed">
          This program is designed specifically for workforce development success. Unlike traditional
          programs that measure value in hours, we measure value in <strong>employment outcomes</strong>.
        </p>
      </div>

      <h3>Exceptional ROI for WIOA Investment</h3>
      <ul>
        <li><strong>Guaranteed Interview Pathway:</strong> Direct employer connection through BrandVoice partnership</li>
        <li><strong>Premium AI Tool Access:</strong> Professional-grade tools included (value: $1,800)</li>
        <li><strong>Continued Support:</strong> Free additional training levels until employment</li>
        <li><strong>Fast Time-to-Employment:</strong> 24-hour program means faster placement than traditional courses</li>
        <li><strong>Verified Competencies:</strong> Assessment-based certification proves job readiness</li>
      </ul>

      <h3>Addresses Critical Skills Gaps</h3>
      <p>
        The rapid integration of AI across industries has created unprecedented demand for workers
        who understand both technology fundamentals and modern AI tools. Texas employers across
        healthcare, financial services, retail, and professional services report significant
        difficulty filling these positions.
      </p>

      <h3>Market-Aligned Wages</h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Occupation</th>
              <th className="text-left">SOC Code</th>
              <th className="text-right">TX Median Wage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Computer User Support Specialists</td>
              <td className="font-mono text-sm">15-1232</td>
              <td className="text-right font-semibold text-green-600">$54,470</td>
            </tr>
            <tr>
              <td>Computer Occupations, Other</td>
              <td className="font-mono text-sm">15-1299</td>
              <td className="text-right font-semibold text-green-600">$56,890</td>
            </tr>
            <tr>
              <td>Business Operations Specialists</td>
              <td className="font-mono text-sm">13-1199</td>
              <td className="text-right font-semibold text-green-600">$76,850</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">The AI Capability Specialist Difference</h3>
        <p className="text-emerald-100 leading-relaxed">
          This isn't just a training program — it's a complete employment solution. 24 hours of
          intensive instruction, professional AI tools, verified competencies, guaranteed interview
          pathway, and continued support until employment. Maximum value for workforce investment.
        </p>
      </div>
    </DocumentLayout>
  );
}
