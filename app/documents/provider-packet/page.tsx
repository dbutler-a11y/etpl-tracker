import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function ProviderPacketPage() {
  return (
    <DocumentLayout title="Provider Submission Packet" section="Section 15" subtitle="Workforce Board Summary">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Provider Overview</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Consolidated information packet for Workforce Board evaluation and ETPL application processing.
        </p>
      </div>

      <h2>Provider Information</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <tbody>
            <tr><td className="font-semibold bg-slate-50 w-1/3">Provider Name</td><td>[Legal Entity Name]</td></tr>
            <tr><td className="font-semibold bg-slate-50">Entity Type</td><td>[LLC / Corporation]</td></tr>
            <tr><td className="font-semibold bg-slate-50">EIN</td><td>[XX-XXXXXXX]</td></tr>
            <tr><td className="font-semibold bg-slate-50">TWC Status</td><td><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Exempt (24-Hour Program)</span></td></tr>
            <tr><td className="font-semibold bg-slate-50">Primary Contact</td><td>[Name, Title]</td></tr>
            <tr><td className="font-semibold bg-slate-50">Phone</td><td>[Number]</td></tr>
            <tr><td className="font-semibold bg-slate-50">Email</td><td>[Email]</td></tr>
            <tr><td className="font-semibold bg-slate-50">Address</td><td>[Full Address]</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Provider Mission</h3>
      <p>
        [Provider Name] delivers intensive workforce development programs that prepare individuals for
        high-demand careers in AI-enhanced technology environments. We maximize training value through
        concentrated curricula, premium tools access, and guaranteed employer pathways.
      </p>

      <h2>Program Summary</h2>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-200 not-prose">
        <h3 className="text-xl font-bold text-slate-900 mb-4">AI Capability Specialist Certificate</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "CIP Code", value: "11.1006" },
            { label: "Credential", value: "Certificate of Completion" },
            { label: "Total Hours", value: "24 Hours" },
            { label: "Delivery", value: "Intensive Hybrid" },
            { label: "TWC Status", value: "Licensing Exempt" },
            { label: "Total Cost", value: "$8,000" },
          ].map((item) => (
            <div key={item.label}>
              <span className="text-blue-700 text-xs font-medium">{item.label}</span>
              <p className="text-slate-900 font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <h2>SOC Code Alignment</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">SOC Code</th>
              <th className="text-left">Occupation</th>
              <th className="text-right">TX Median</th>
              <th className="text-left">Alignment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono">15-1232</td>
              <td>Computer User Support Specialists</td>
              <td className="text-right text-emerald-600 font-semibold">$54,470</td>
              <td><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Primary</span></td>
            </tr>
            <tr>
              <td className="font-mono">43-4051</td>
              <td>Customer Service Representatives</td>
              <td className="text-right text-emerald-600 font-semibold">$38,150</td>
              <td><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Strong</span></td>
            </tr>
            <tr>
              <td className="font-mono">15-1299</td>
              <td>Computer Occupations, All Other</td>
              <td className="text-right text-emerald-600 font-semibold">$56,890</td>
              <td><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Strong</span></td>
            </tr>
            <tr>
              <td className="font-mono">43-9021</td>
              <td>Data Entry / Info Processing</td>
              <td className="text-right text-emerald-600 font-semibold">$36,740</td>
              <td><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">Moderate</span></td>
            </tr>
            <tr>
              <td className="font-mono">13-1199</td>
              <td>Business Operations Specialists</td>
              <td className="text-right text-emerald-600 font-semibold">$76,850</td>
              <td><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">Growth</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Cost & Value Summary</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <tbody>
            <tr><td>24-Hour Intensive Training</td><td className="text-right font-semibold">$2,400</td></tr>
            <tr><td>Premium AI Tool Suite Access</td><td className="text-right font-semibold">$1,800</td></tr>
            <tr><td>BrandVoice Employment Pipeline</td><td className="text-right font-semibold">$1,500</td></tr>
            <tr><td>Free Additional Training Levels</td><td className="text-right font-semibold">$1,500</td></tr>
            <tr><td>Career Services & Job Placement</td><td className="text-right font-semibold">$800</td></tr>
            <tr className="bg-blue-50"><td className="font-bold">Total</td><td className="text-right font-bold text-blue-700">$8,000</td></tr>
          </tbody>
        </table>
      </div>

      <h2>BrandVoice Employment Partnership</h2>
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 my-6 border border-indigo-200 not-prose">
        <h3 className="font-bold text-slate-900 mb-3">Guaranteed Interview Pathway</h3>
        <p className="text-slate-700 mb-4">
          Formal partnership with BrandVoice provides qualified graduates with direct employment opportunities.
        </p>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            "Guaranteed interview within 30 days",
            "Priority placement consideration",
            "Curriculum developed with employer input",
            "Ongoing pipeline for regular placement",
            "Free continued training until employed"
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              {item}
            </div>
          ))}
        </div>
      </div>

      <h2>Additional Training Levels (Free)</h2>
      <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <span className="text-blue-600 text-xs font-bold">Level 2</span>
          <h4 className="font-semibold text-slate-900 mt-1">Skills Labs</h4>
          <p className="text-sm text-slate-600">Extended hands-on practice</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
          <span className="text-green-600 text-xs font-bold">Level 3</span>
          <h4 className="font-semibold text-slate-900 mt-1">Portfolio Projects</h4>
          <p className="text-sm text-slate-600">Work samples for employers</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
          <span className="text-purple-600 text-xs font-bold">Level 4</span>
          <h4 className="font-semibold text-slate-900 mt-1">Apprenticeship Track</h4>
          <p className="text-sm text-slate-600">Supervised real projects</p>
        </div>
      </div>

      <h2>Performance Commitment</h2>
      <p>[Provider Name] commits to tracking and reporting:</p>
      <ul>
        <li>Program completion rates</li>
        <li>Credential attainment rates</li>
        <li>Employment outcomes (entered employment)</li>
        <li>Median earnings of graduates</li>
        <li>Employer satisfaction</li>
        <li>Time-to-employment metrics</li>
      </ul>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">Employment-Focused Model</h3>
        <p className="text-emerald-100 leading-relaxed">
          Our commitment continues until employment. The combination of intensive training, premium
          tools, guaranteed employer pathway, and free additional levels ensures WIOA participants
          receive maximum value and the highest probability of successful employment outcomes.
        </p>
      </div>
    </DocumentLayout>
  );
}
