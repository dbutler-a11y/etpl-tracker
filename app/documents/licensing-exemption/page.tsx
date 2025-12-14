import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function LicensingExemptionPage() {
  return (
    <DocumentLayout title="Licensing Exemption Statement" section="Section 2" subtitle="24-Hour Career School Exemption Compliance">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-emerald-500/20">
        <h2 className="text-2xl font-bold mb-4">Texas TWC Licensing Exemption</h2>
        <p className="text-emerald-100 text-lg leading-relaxed">
          The AI Capability Specialist Certificate program is intentionally structured to qualify for
          <strong className="text-white"> Texas career school licensing exemption</strong> under Texas Education Code
          and Texas Workforce Commission regulations.
        </p>
      </div>

      <h2>24-Hour Program Structure</h2>
      <p>
        This program is designed to deliver <strong>24 instructional hours or less</strong>, meeting the
        threshold for career school licensing exemption while providing maximum value, job-ready skills,
        and employer-backed employment outcomes.
      </p>

      <h3>Exemption Compliance Elements</h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Requirement</th>
              <th className="text-left">Program Compliance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Total Instructional Hours</td>
              <td>24 hours (does not exceed exemption threshold)</td>
            </tr>
            <tr>
              <td className="font-medium">Self-Contained Program</td>
              <td>Complete credential awarded within 24-hour window</td>
            </tr>
            <tr>
              <td className="font-medium">Certificate Requirements</td>
              <td>No additional hours required for certification</td>
            </tr>
            <tr>
              <td className="font-medium">Supplemental Services</td>
              <td>Optional support offered separately (not required)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Self-Contained Credential</h2>
      <p>
        The AI Capability Specialist Certificate is a <strong>fully self-contained credential</strong>.
        Students who complete the 24-hour program earn their certificate of completion without any
        requirement for additional instructional hours, external coursework, or supplementary training.
      </p>

      <h3>What Students Receive Within 24 Hours</h3>
      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { num: "1", title: "AI Fundamentals", desc: "Complete AI fundamentals and applied skills training" },
          { num: "2", title: "Technical Support", desc: "Technical support and troubleshooting competencies" },
          { num: "3", title: "Workflow Automation", desc: "Workflow automation and digital operations skills" },
          { num: "4", title: "Professional Readiness", desc: "Professional workplace readiness preparation" },
          { num: "5", title: "Assessments", desc: "Hands-on assessments demonstrating job-ready competencies" },
          { num: "6", title: "Certificate", desc: "Certificate of Completion upon successful completion" },
        ].map((item) => (
          <div key={item.num} className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold flex-shrink-0">{item.num}</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Optional Additional Support</h2>
      <p>
        To maximize student success and employment outcomes, we offer <strong>optional additional
        support services</strong> at no extra cost to students who complete the 24-hour program.
        These services are:
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
          <div className="text-2xl mb-2">✓</div>
          <div className="font-semibold text-slate-900 mb-1">Completely Voluntary</div>
          <div className="text-sm text-slate-600">Not required for certification</div>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
          <div className="text-2xl mb-2">◈</div>
          <div className="font-semibold text-slate-900 mb-1">Separate from Core</div>
          <div className="text-sm text-slate-600">Preserving licensing exemption status</div>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
          <div className="text-2xl mb-2">→</div>
          <div className="font-semibold text-slate-900 mb-1">Employment Focused</div>
          <div className="text-sm text-slate-600">Continued skill-building until job placement</div>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 my-6 not-prose">
        <h3 className="font-bold text-amber-900 text-lg mb-3">Important Note</h3>
        <p className="text-amber-800 leading-relaxed">
          Optional additional levels (Skills Labs, Projects, Apprenticeship Track)
          are offered as value-added support services and occur <strong>outside</strong> the 24-hour core
          credential. Participation in these optional services is not required for certificate completion
          and does not affect the program's licensing exemption status.
        </p>
      </div>

      <h2>Exemption Status Declaration</h2>
      <p>
        [Provider Name] certifies that the AI Capability Specialist Certificate program:
      </p>
      <ol>
        <li>Does not exceed 24 total instructional hours</li>
        <li>Awards a complete credential within the 24-hour program</li>
        <li>Does not require additional hours or coursework for certification</li>
        <li>Offers optional supplemental services separately from core instruction</li>
        <li>Meets all applicable criteria for career school licensing exemption under Texas law</li>
      </ol>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">Compliance Commitment</h3>
        <p className="text-emerald-100 leading-relaxed">
          This program structure has been intentionally designed to deliver maximum workforce value
          while maintaining full compliance with Texas career school regulations. The 24-hour format
          ensures accessibility for workforce participants while the optional additional support
          services demonstrate our commitment to employment outcomes.
        </p>
      </div>
    </DocumentLayout>
  );
}
