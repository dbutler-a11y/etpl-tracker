import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function CostsPage() {
  return (
    <DocumentLayout title="Cost Justification" section="Section 6" subtitle="WIOA-Friendly Value Analysis">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-blue-500/20">
        <h2 className="text-2xl font-bold mb-4">Program Investment: $8,000</h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          This investment delivers comprehensive training, professional AI tool access, employer
          partnership, continued support until employment, and verified job-ready credentials.
        </p>
      </div>

      <h2>Why $8,000 Is Justified</h2>
      <p>
        Workforce programs pay for <strong>employment outcomes, credentialing, tool access, and
        job placement services</strong> — not hours alone. The AI Capability Specialist Certificate
        delivers exceptional value across every dimension that matters for workforce development success.
      </p>

      <h2>Complete Value Stack</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Component</th>
              <th className="text-right">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>24-Hour Intensive Training</strong>
                <p className="text-sm text-slate-500 mt-1">Expert instruction, hands-on labs, assessments</p>
              </td>
              <td className="text-right font-semibold">$2,400</td>
            </tr>
            <tr>
              <td>
                <strong>Premium AI Tool Suite Access</strong>
                <p className="text-sm text-slate-500 mt-1">Replit, Nano Banana, VEO 3, Kling, multimodal tools</p>
              </td>
              <td className="text-right font-semibold">$1,800</td>
            </tr>
            <tr>
              <td>
                <strong>BrandVoice Employment Pipeline</strong>
                <p className="text-sm text-slate-500 mt-1">Guaranteed interview, priority placement, ongoing access</p>
              </td>
              <td className="text-right font-semibold">$1,500</td>
            </tr>
            <tr>
              <td>
                <strong>Free Additional Training Levels</strong>
                <p className="text-sm text-slate-500 mt-1">Skills Labs, Portfolio Projects, Apprenticeship Track</p>
              </td>
              <td className="text-right font-semibold">$1,500</td>
            </tr>
            <tr>
              <td>
                <strong>Career Services & Job Placement Support</strong>
                <p className="text-sm text-slate-500 mt-1">Resume, portfolio, interview prep, ongoing coaching</p>
              </td>
              <td className="text-right font-semibold">$800</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="font-bold">TOTAL VALUE</td>
              <td className="text-right font-bold text-blue-700 text-lg">$8,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Market Comparables</h2>
      <p>
        The AI Capability Specialist Certificate is priced competitively within the workforce
        training market:
      </p>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Program Type</th>
              <th className="text-right">Typical Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tech Bootcamps (12-24 weeks)</td>
              <td className="text-right">$10,000 - $20,000</td>
            </tr>
            <tr>
              <td>IT Certification Programs</td>
              <td className="text-right">$3,000 - $8,000</td>
            </tr>
            <tr>
              <td>AI/ML Training Programs</td>
              <td className="text-right">$5,000 - $15,000</td>
            </tr>
            <tr>
              <td>Workforce Development Certificates</td>
              <td className="text-right">$2,000 - $8,000</td>
            </tr>
            <tr className="bg-emerald-50">
              <td className="font-semibold">AI Capability Specialist</td>
              <td className="text-right font-bold text-emerald-700">$8,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>What Sets This Program Apart</h2>
      <p>
        Unlike traditional programs that charge for seat time, we deliver a complete employment solution:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
          <h4 className="font-semibold text-emerald-900 mb-2">Employer Partnership</h4>
          <p className="text-sm text-emerald-800">
            <span className="text-slate-500">Most programs:</span> "Good luck with your job search"<br/>
            <strong>Our program:</strong> Guaranteed interview with BrandVoice
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
          <h4 className="font-semibold text-emerald-900 mb-2">Professional Tools</h4>
          <p className="text-sm text-emerald-800">
            <span className="text-slate-500">Most programs:</span> Basic or demo tool access<br/>
            <strong>Our program:</strong> Premium AI tool suite included
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
          <h4 className="font-semibold text-emerald-900 mb-2">Continued Support</h4>
          <p className="text-sm text-emerald-800">
            <span className="text-slate-500">Most programs:</span> Support ends at graduation<br/>
            <strong>Our program:</strong> Free training until employment
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
          <h4 className="font-semibold text-emerald-900 mb-2">Time to Employment</h4>
          <p className="text-sm text-emerald-800">
            <span className="text-slate-500">Most programs:</span> Months of training before job search<br/>
            <strong>Our program:</strong> 24 hours to credential + immediate pipeline
          </p>
        </div>
      </div>

      <h2>ROI for Workforce Centers</h2>
      <p>
        The $8,000 investment delivers measurable returns:
      </p>
      <ul>
        <li><strong>Higher Placement Rates:</strong> Employer partnership drives outcomes</li>
        <li><strong>Faster Placements:</strong> 24-hour program + direct pipeline = rapid employment</li>
        <li><strong>Lower Re-enrollment:</strong> Continued support reduces need for additional funded training</li>
        <li><strong>Verified Outcomes:</strong> Assessment-based certification proves job readiness</li>
        <li><strong>Employer Satisfaction:</strong> Well-prepared graduates strengthen workforce partnerships</li>
      </ul>

      <h2>Cost Per Outcome Analysis</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Metric</th>
              <th className="text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Program Cost</td>
              <td className="font-semibold">$8,000</td>
            </tr>
            <tr>
              <td>Target Entry Wage</td>
              <td className="font-semibold text-emerald-600">$45,000 - $55,000/year</td>
            </tr>
            <tr>
              <td>Time to Credential</td>
              <td>24 hours (vs. weeks/months for comparable programs)</td>
            </tr>
            <tr>
              <td>Support Duration</td>
              <td>Until employment (unlimited)</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="font-semibold">Cost-to-Wage Ratio</td>
              <td className="font-semibold text-blue-700">~15% of first-year earnings</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>WIOA ITA Alignment</h2>
      <p>
        The $8,000 program cost falls within typical Individual Training Account (ITA) limits and
        represents appropriate value for:
      </p>
      <ul>
        <li>Credential-bearing workforce training</li>
        <li>In-demand occupation preparation</li>
        <li>Employer-connected programming</li>
        <li>Comprehensive support services</li>
        <li>Job placement assistance</li>
      </ul>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">The Bottom Line</h3>
        <p className="text-blue-100 leading-relaxed">
          $8,000 buys more than 24 hours of training. It buys professional AI tools, employer access,
          continued support, and a genuine pathway to employment. That's the value proposition that
          justifies this investment — and delivers the outcomes workforce boards measure.
        </p>
      </div>
    </DocumentLayout>
  );
}
