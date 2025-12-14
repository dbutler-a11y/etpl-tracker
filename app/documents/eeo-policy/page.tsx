import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function EEOPolicyPage() {
  return (
    <DocumentLayout title="Nondiscrimination & Equal Opportunity Policy" section="Section 12" subtitle="WIOA Section 188 Compliance">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-blue-500/20">
        <h2 className="text-2xl font-bold mb-4">Equal Opportunity Commitment</h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          [Provider Name] is committed to providing equal opportunity in all programs and activities.
          We comply with all federal, state, and local nondiscrimination requirements including
          WIOA Section 188.
        </p>
      </div>

      <h2>Policy Statement</h2>
      <p>
        [Provider Name] is committed to providing equal opportunity in all programs and activities.
        We do not discriminate on the basis of race, color, religion, sex (including pregnancy,
        sexual orientation, and gender identity), national origin, age, disability, genetic information,
        veteran status, or any other characteristic protected by applicable federal, state, or local law.
      </p>

      <h2>WIOA Section 188 Compliance</h2>
      <p>
        As a recipient of federal financial assistance under the Workforce Innovation and Opportunity
        Act (WIOA), [Provider Name] complies with Section 188 of WIOA, which prohibits discrimination
        against individuals in any program or activity that receives WIOA Title I financial assistance.
      </p>
      <p>This includes ensuring equal opportunity in:</p>

      <div className="grid md:grid-cols-2 gap-3 my-6 not-prose">
        {[
          "Recruitment and enrollment",
          "Program participation",
          "Employment and advancement",
          "Treatment during program activities",
          "Access to facilities and services"
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-slate-700 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <h2>TWC Equal Opportunity Requirements</h2>
      <p>[Provider Name] complies with all Texas Workforce Commission equal opportunity requirements, including:</p>
      <ul>
        <li>Providing reasonable accommodations for individuals with disabilities</li>
        <li>Ensuring program accessibility</li>
        <li>Maintaining an environment free from harassment</li>
        <li>Collecting and reporting demographic data as required</li>
        <li>Providing materials in alternative formats upon request</li>
      </ul>

      <h2>Reasonable Accommodations</h2>
      <p>
        Students with disabilities may request reasonable accommodations to participate fully in the
        program. To request accommodations:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { step: "1", title: "Contact Us", desc: "Contact the Program Coordinator" },
          { step: "2", title: "Provide Documentation", desc: "Provide documentation of the disability (if not already on file)" },
          { step: "3", title: "Discuss Needs", desc: "Discuss accommodation needs with our team" },
          { step: "4", title: "Receive Support", desc: "Accommodations will be provided within a reasonable timeframe" },
        ].map((item) => (
          <div key={item.step} className="bg-white rounded-xl p-5 border border-slate-200">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-3">{item.step}</div>
            <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Language Access</h2>
      <p>Students with limited English proficiency may request language assistance services. We will make reasonable efforts to provide:</p>
      <ul>
        <li>Translated materials</li>
        <li>Interpretation services</li>
        <li>Bilingual staff assistance</li>
      </ul>

      <h2>Filing a Discrimination Complaint</h2>
      <p>Students who believe they have experienced discrimination may:</p>

      <h3>Internal Complaint</h3>
      <div className="bg-slate-50 rounded-xl p-6 my-4 border border-slate-200 not-prose">
        <p className="text-slate-700">Contact the Equal Opportunity Officer at [Contact Information]</p>
      </div>

      <h3>External Complaint (WIOA)</h3>
      <div className="bg-blue-50 rounded-xl p-6 my-4 border border-blue-200 not-prose">
        <h4 className="font-bold text-blue-900 mb-3">Director, Civil Rights Center</h4>
        <div className="text-blue-800 space-y-1">
          <p>U.S. Department of Labor</p>
          <p>200 Constitution Avenue NW, Room N-4123</p>
          <p>Washington, DC 20210</p>
        </div>
      </div>

      <h3>External Complaint (TWC)</h3>
      <div className="bg-emerald-50 rounded-xl p-6 my-4 border border-emerald-200 not-prose">
        <h4 className="font-bold text-emerald-900 mb-3">Texas Workforce Commission</h4>
        <div className="text-emerald-800 space-y-1">
          <p>Civil Rights Division</p>
          <p>101 East 15th Street</p>
          <p>Austin, TX 78778</p>
        </div>
      </div>

      <h2>Equal Opportunity Statement</h2>
      <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-6 my-6 border border-slate-200 not-prose">
        <p className="text-slate-700 italic">
          [Provider Name] is an equal opportunity employer/program. Auxiliary aids and services are
          available upon request to individuals with disabilities.
        </p>
      </div>
    </DocumentLayout>
  );
}
