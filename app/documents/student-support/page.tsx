import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function StudentSupportPage() {
  return (
    <DocumentLayout title="Student Support & Placement Services" section="Section 13" subtitle="Complete Career Support Plan">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-emerald-500/20">
        <h2 className="text-2xl font-bold mb-4">Support Until Employment</h2>
        <p className="text-emerald-100 text-lg leading-relaxed">
          We don't just train — we support you until you're employed. Our comprehensive support
          services begin at enrollment and continue through job placement and beyond.
        </p>
      </div>

      <h2>During the 24-Hour Program</h2>

      <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Instructional Support</h3>
          <ul className="text-slate-700 space-y-2">
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span>Small cohort sizes for personalized attention</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span>Real-time Q&A during all sessions</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span>Hands-on assistance during lab exercises</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span>Recorded sessions for review</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span>Direct instructor communication channels</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Technology Support</h3>
          <ul className="text-slate-700 space-y-2">
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">•</span>AI tool setup and configuration assistance</li>
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">•</span>Technical troubleshooting help</li>
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">•</span>Platform access support</li>
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">•</span>Equipment guidance if needed</li>
          </ul>
        </div>
      </div>

      <h3>Accommodations</h3>
      <p>
        Students with disabilities may request reasonable accommodations. Contact the Program
        Coordinator before or at the start of the program to discuss needs.
      </p>

      <h2>Career Readiness Services</h2>

      <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Resume Development</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>• AI-focused resume writing guidance</li>
            <li>• Skills translation for workforce re-entrants</li>
            <li>• ATS (Applicant Tracking System) optimization</li>
            <li>• Individual resume review and feedback</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-slate-900 mb-3">AI-Assisted Portfolio Creation</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>• Portfolio project templates</li>
            <li>• Work sample development using AI tools</li>
            <li>• Digital portfolio hosting guidance</li>
            <li>• Presentation of AI capabilities to employers</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Interview Preparation</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>• Mock interview sessions with feedback</li>
            <li>• Technical interview practice</li>
            <li>• Behavioral interview techniques</li>
            <li>• BrandVoice-specific interview preparation</li>
            <li>• Video interview coaching</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Professional Profiles</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>• LinkedIn profile optimization</li>
            <li>• Professional online presence guidance</li>
            <li>• Networking strategy development</li>
          </ul>
        </div>
      </div>

      <h2>BrandVoice Employment Pathway</h2>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 my-6 border border-indigo-200 not-prose">
        <h3 className="text-lg font-bold text-slate-900 mb-3">Guaranteed Interview Track</h3>
        <p className="text-slate-700 mb-4">Qualified graduates receive:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Guaranteed interview with BrandVoice within 30 days",
            "Priority consideration for matching positions",
            "Direct hiring manager connections",
            "Company culture and role preparation",
            "Ongoing consideration as positions open"
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              {item}
            </div>
          ))}
        </div>
      </div>

      <h3>Qualification Requirements</h3>
      <ul>
        <li>Complete all 24 program hours</li>
        <li>Achieve 90%+ attendance</li>
        <li>Pass all assessments (70%+)</li>
        <li>Demonstrate professional conduct</li>
        <li>Complete resume and interview preparation</li>
      </ul>

      <h2>Free Additional Training Levels</h2>
      <p>
        Students who complete the 24-hour certificate receive <strong>free access to continued
        training</strong> until they secure employment:
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
          <span className="inline-block px-2 py-1 bg-blue-600 text-white rounded text-xs font-bold mb-2">Level 2</span>
          <h4 className="font-semibold text-slate-900 mb-1">Skills Labs</h4>
          <p className="text-sm text-slate-600">Extended hands-on practice with AI tools and workflows</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
          <span className="inline-block px-2 py-1 bg-green-600 text-white rounded text-xs font-bold mb-2">Level 3</span>
          <h4 className="font-semibold text-slate-900 mb-1">Portfolio Projects</h4>
          <p className="text-sm text-slate-600">Build impressive work samples for employer review</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200">
          <span className="inline-block px-2 py-1 bg-purple-600 text-white rounded text-xs font-bold mb-2">Level 4</span>
          <h4 className="font-semibold text-slate-900 mb-1">Apprenticeship Track</h4>
          <p className="text-sm text-slate-600">Supervised work on real projects with BrandVoice</p>
        </div>
      </div>

      <h2>Job Search Assistance</h2>

      <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Individual Career Coaching</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• One-on-one sessions with career advisor</li>
            <li>• Personalized job search strategy</li>
            <li>• Offer evaluation guidance</li>
            <li>• Salary negotiation support</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Job Leads & Referrals</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Curated job postings matching program competencies</li>
            <li>• Direct referrals to employer partners</li>
            <li>• Regional employer network connections</li>
            <li>• Hiring event notifications</li>
          </ul>
        </div>
      </div>

      <h2>Support Timeline</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Phase</th>
              <th className="text-left">Services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">Pre-Program</td>
              <td>Enrollment support, technology setup, orientation</td>
            </tr>
            <tr>
              <td className="font-semibold">During Program (24 hrs)</td>
              <td>Instruction, labs, assessments, resume prep</td>
            </tr>
            <tr>
              <td className="font-semibold">Post-Certificate</td>
              <td>BrandVoice interview, job search, coaching</td>
            </tr>
            <tr>
              <td className="font-semibold">Until Employment</td>
              <td>Additional levels, continued support, job matching</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">Our Commitment</h3>
        <p className="text-emerald-100 leading-relaxed">
          We measure success by employment outcomes, not just certificate completion. That's why
          our support continues — at no additional cost — until you land the job. This is the
          AI Capability Specialist difference.
        </p>
      </div>
    </DocumentLayout>
  );
}
