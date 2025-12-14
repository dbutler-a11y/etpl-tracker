import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function BrandVoicePipelinePage() {
  return (
    <DocumentLayout title="BrandVoice Employment Pipeline" section="Section 3" subtitle="Guaranteed Interview Pathway">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-indigo-500/20">
        <h2 className="text-2xl font-bold mb-4">Direct Employer Partnership</h2>
        <p className="text-indigo-100 text-lg leading-relaxed">
          The AI Capability Specialist Certificate features a strategic employment partnership with
          <strong className="text-white"> BrandVoice</strong>, providing qualified graduates with a{" "}
          <strong className="text-white">guaranteed interview pathway</strong> and priority placement consideration.
        </p>
      </div>

      <h2>The BrandVoice Employment Pathway</h2>
      <p>
        Unlike programs that leave graduates to navigate the job market independently, we've built
        a direct pipeline to employment. BrandVoice, an AI-powered content and communications
        technology company, has committed to interviewing and prioritizing our qualified graduates
        for relevant positions.
      </p>

      <h3>What Qualified Graduates Receive</h3>
      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { icon: "✓", title: "Guaranteed Interview", desc: "Every qualified graduate receives an interview with BrandVoice hiring managers" },
          { icon: "★", title: "Priority Consideration", desc: "Graduates are prioritized for matching open positions" },
          { icon: "→", title: "Direct Access", desc: "Skip the resume pile — connect directly with decision-makers" },
          { icon: "◎", title: "Interview Prep", desc: "Targeted coaching for BrandVoice interview process" },
          { icon: "∞", title: "Ongoing Pipeline", desc: "Continued consideration as new positions open" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Available Roles</h2>
      <p>Graduates may be considered for positions including:</p>

      <div className="grid md:grid-cols-3 gap-3 my-6 not-prose">
        {[
          { title: "AI Support Technician", desc: "Technical support for AI-powered products" },
          { title: "Digital Capability Assistant", desc: "Supporting digital operations and AI workflows" },
          { title: "AI Project Aide", desc: "Assisting with AI project coordination" },
          { title: "Customer-Facing AI Support", desc: "Client support for AI tools" },
          { title: "AI Content Quality Specialist", desc: "Quality assurance for AI content" },
          { title: "Digital Workflow Administrator", desc: "Managing automated workflows" },
        ].map((role) => (
          <div key={role.title} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-1">{role.title}</h4>
            <p className="text-sm text-slate-600">{role.desc}</p>
          </div>
        ))}
      </div>

      <h2>Qualification Criteria</h2>
      <p>To qualify for the BrandVoice Employment Pathway, graduates must:</p>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Requirement</th>
              <th className="text-left">Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Program Completion</td>
              <td>Complete all 24 program hours</td>
            </tr>
            <tr>
              <td>Attendance</td>
              <td>Minimum 90% attendance rate</td>
            </tr>
            <tr>
              <td>Assessments</td>
              <td>Passing scores on all assessments (70%+)</td>
            </tr>
            <tr>
              <td>Professional Conduct</td>
              <td>Demonstrated workplace-appropriate behavior</td>
            </tr>
            <tr>
              <td>Job Readiness</td>
              <td>Completed resume and interview preparation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How the Pipeline Works</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 not-prose">
        {[
          { step: "1", title: "Complete Training", desc: "Finish the 24-hour AI Capability Specialist program" },
          { step: "2", title: "Meet Qualifications", desc: "Achieve attendance, assessment, and conduct standards" },
          { step: "3", title: "Interview Prep", desc: "Receive targeted preparation for BrandVoice interviews" },
          { step: "4", title: "Guaranteed Interview", desc: "Interview with BrandVoice within 30 days" },
          { step: "5", title: "Priority Placement", desc: "Receive priority consideration for matching positions" },
          { step: "6", title: "Ongoing Pipeline", desc: "Remain in consideration as new positions open" },
        ].map((item) => (
          <div key={item.step} className="bg-white rounded-xl p-5 border border-slate-200">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-3">{item.step}</div>
            <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Why This Dramatically Increases Placement Rates</h2>
      <ul>
        <li><strong>Eliminates Job Search Uncertainty:</strong> Graduates don't wonder "what's next"</li>
        <li><strong>Bypasses Traditional Barriers:</strong> Direct access to hiring managers</li>
        <li><strong>Curriculum Alignment:</strong> Training designed with employer input</li>
        <li><strong>Employer Familiarity:</strong> BrandVoice knows exactly what our graduates can do</li>
        <li><strong>Continuous Pipeline:</strong> Not a one-time opportunity — ongoing consideration</li>
      </ul>

      <h2>ROI for Workforce Boards</h2>
      <p>
        This employer partnership delivers exceptional value for WIOA investments:
      </p>
      <ul>
        <li><strong>Higher Placement Rates:</strong> Direct employer pathway vs. independent job search</li>
        <li><strong>Faster Time-to-Employment:</strong> 30-day interview guarantee accelerates outcomes</li>
        <li><strong>Verified Employer Demand:</strong> Partnership proves real jobs exist for graduates</li>
        <li><strong>Reduced Re-enrollment:</strong> Successful placements reduce need for additional training</li>
        <li><strong>Measurable Outcomes:</strong> Clear metrics for program success tracking</li>
      </ul>

      <h2>What BrandVoice Gains</h2>
      <p>This isn't charity — it's a strategic hiring pipeline. BrandVoice benefits from:</p>
      <ul>
        <li>Pre-trained candidates with verified competencies</li>
        <li>Reduced hiring costs and onboarding time</li>
        <li>Consistent pipeline of qualified talent</li>
        <li>Workers who understand AI tools and workflows</li>
        <li>Diverse talent from workforce development populations</li>
      </ul>

      {/* Compliance Note */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 my-6 not-prose">
        <h3 className="font-bold text-amber-900 mb-2">Compliance Statement</h3>
        <p className="text-amber-800 text-sm leading-relaxed">
          The BrandVoice Employment Pathway provides enhanced employment opportunities including
          guaranteed interviews and priority placement consideration. This does not constitute an
          absolute guarantee of employment. Final hiring decisions depend on candidate qualifications,
          available positions, interview performance, and BrandVoice hiring criteria. All placement
          activities comply with TWC and WIOA requirements.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">The Employment Advantage</h3>
        <p className="text-emerald-100 leading-relaxed">
          Most training programs end at the certificate. Ours begins there. The BrandVoice
          Employment Pathway transforms a credential into a career — and that's the kind of
          outcome workforce boards invest in.
        </p>
      </div>
    </DocumentLayout>
  );
}
