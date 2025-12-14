import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function SOCMappingPage() {
  return (
    <DocumentLayout title="SOC Code Mapping" section="Section 8" subtitle="Occupational Alignment">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Occupational Alignment</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          The AI Capability Specialist Certificate prepares graduates for multiple high-demand occupations
          identified in Texas labor market data. The 24-hour curriculum delivers competencies aligned to
          five SOC codes.
        </p>
      </div>

      {/* Primary Alignment Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">SOC Code</th>
              <th className="text-left">Occupation Title</th>
              <th className="text-right">TX Median Wage</th>
              <th className="text-left">Alignment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono font-semibold">15-1232</td>
              <td>Computer User Support Specialists</td>
              <td className="text-right font-semibold text-emerald-600">$54,470</td>
              <td><span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">Primary</span></td>
            </tr>
            <tr>
              <td className="font-mono font-semibold">43-4051</td>
              <td>Customer Service Representatives</td>
              <td className="text-right font-semibold text-emerald-600">$38,150</td>
              <td><span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">Strong</span></td>
            </tr>
            <tr>
              <td className="font-mono font-semibold">15-1299</td>
              <td>Computer Occupations, All Other</td>
              <td className="text-right font-semibold text-emerald-600">$56,890</td>
              <td><span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">Strong</span></td>
            </tr>
            <tr>
              <td className="font-mono font-semibold">43-9021</td>
              <td>Data Entry / Information Processing</td>
              <td className="text-right font-semibold text-emerald-600">$36,740</td>
              <td><span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold">Moderate</span></td>
            </tr>
            <tr>
              <td className="font-mono font-semibold">13-1199</td>
              <td>Business Operations Specialists</td>
              <td className="text-right font-semibold text-emerald-600">$76,850</td>
              <td><span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">Growth</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Competency Alignment by SOC Code</h2>

      {/* SOC Cards */}
      <div className="space-y-6 my-8 not-prose">
        {/* 15-1232 */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold">Primary Alignment</span>
              <h3 className="text-xl font-bold text-slate-900 mt-3">15-1232 — Computer User Support Specialists</h3>
              <p className="text-slate-600">Median Wage: $54,470 | Program Modules: 1, 2, 3, 4, 5</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">
            This is the primary alignment for AI Capability Specialist graduates. The program delivers
            comprehensive preparation for help desk, technical support, and user assistance roles in
            AI-enhanced environments.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Aligned Competencies</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Technical troubleshooting and problem diagnosis</li>
                <li>• AI tool support and user guidance</li>
                <li>• Customer service in technical contexts</li>
                <li>• Documentation and knowledge base management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Related Job Titles</h4>
              <div className="flex flex-wrap gap-2">
                {["Help Desk Technician", "IT Support Specialist", "AI Support Technician", "Technical Support Rep"].map((title) => (
                  <span key={title} className="px-2 py-1 bg-white rounded-lg text-xs text-slate-600 border border-slate-200">{title}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 43-4051 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">Strong Alignment</span>
              <h3 className="text-xl font-bold text-slate-900 mt-3">43-4051 — Customer Service Representatives</h3>
              <p className="text-slate-600">Median Wage: $38,150 | Program Modules: 2, 5, 6</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">
            Strong alignment for technology-focused customer service roles. Graduates are prepared to
            deliver AI-enhanced customer support and handle technical inquiries.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Aligned Competencies</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Professional customer communication</li>
                <li>• AI-assisted service delivery</li>
                <li>• Issue resolution and escalation</li>
                <li>• Multi-channel support proficiency</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Related Job Titles</h4>
              <div className="flex flex-wrap gap-2">
                {["Customer Success Associate", "Client Support Specialist", "Technical CSR", "Product Support Agent"].map((title) => (
                  <span key={title} className="px-2 py-1 bg-white rounded-lg text-xs text-slate-600 border border-slate-200">{title}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 15-1299 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">Strong Alignment</span>
              <h3 className="text-xl font-bold text-slate-900 mt-3">15-1299 — Computer Occupations, All Other</h3>
              <p className="text-slate-600">Median Wage: $56,890 | Program Modules: 2, 4, 6</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">
            Strong alignment for emerging AI-related roles that don't fit traditional IT categories.
            The AI-focused curriculum prepares graduates for new occupations involving AI tool
            management and support.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Aligned Competencies</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• AI tool configuration and management</li>
                <li>• Workflow automation design</li>
                <li>• Multi-modal AI platform proficiency</li>
                <li>• Technology integration support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Related Job Titles</h4>
              <div className="flex flex-wrap gap-2">
                {["AI Support Technician", "Automation Specialist", "Digital Tools Admin", "AI Operations Coordinator"].map((title) => (
                  <span key={title} className="px-2 py-1 bg-white rounded-lg text-xs text-slate-600 border border-slate-200">{title}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 43-9021 */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-bold">Moderate Alignment</span>
              <h3 className="text-xl font-bold text-slate-900 mt-3">43-9021 — Data Entry / Information Processing</h3>
              <p className="text-slate-600">Median Wage: $36,740 | Program Modules: 1, 4</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">
            Moderate alignment for information management roles enhanced by AI capabilities.
            Graduates bring AI-powered efficiency to data and information processing positions.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Aligned Competencies</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• AI-assisted data processing</li>
                <li>• Digital records management</li>
                <li>• Workflow automation for data tasks</li>
                <li>• Information organization and reporting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Related Job Titles</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Processing Specialist", "Digital Records Coordinator", "Info Management Clerk"].map((title) => (
                  <span key={title} className="px-2 py-1 bg-white rounded-lg text-xs text-slate-600 border border-slate-200">{title}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 13-1199 */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-bold">Growth Alignment</span>
              <h3 className="text-xl font-bold text-slate-900 mt-3">13-1199 — Business Operations Specialists</h3>
              <p className="text-slate-600">Median Wage: $76,850 | Program Modules: 4, 7</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">
            Growth alignment for operations roles requiring AI and automation skills. This represents
            career advancement potential as graduates gain experience.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Aligned Competencies</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Process improvement and optimization</li>
                <li>• Workflow automation implementation</li>
                <li>• Operations efficiency analysis</li>
                <li>• Cross-functional technology support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Related Job Titles</h4>
              <div className="flex flex-wrap gap-2">
                {["Operations Support Analyst", "Workflow Coordinator", "Process Improvement Specialist", "Digital Ops Admin"].map((title) => (
                  <span key={title} className="px-2 py-1 bg-white rounded-lg text-xs text-slate-600 border border-slate-200">{title}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">Labor Market Demand</h3>
        <p className="text-emerald-100 leading-relaxed">
          All five aligned occupations show strong demand in Texas labor markets. The integration
          of AI across industries is creating new demand for workers who understand both traditional
          support functions and modern AI tools — exactly what this program delivers.
        </p>
      </div>
    </DocumentLayout>
  );
}
