import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function PoliciesPage() {
  return (
    <DocumentLayout title="Admissions, Attendance, Grading & Completion" section="Section 9" subtitle="Program Policies">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Program Policies</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Clear policies ensure student success. This document outlines eligibility requirements,
          attendance expectations, assessment criteria, and certificate completion requirements
          for the 24-hour intensive program.
        </p>
      </div>

      <h2>Eligibility Requirements</h2>
      <p>To enroll in the AI Capability Specialist Certificate program, applicants must:</p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { icon: "18+", title: "Age", desc: "Be at least 18 years of age" },
          { icon: "📜", title: "Education", desc: "Possess a high school diploma, GED, or equivalent" },
          { icon: "💬", title: "Language", desc: "English proficiency sufficient for technical instruction" },
          { icon: "💻", title: "Technology", desc: "Access to computer with reliable internet connection" },
          { icon: "🖱️", title: "Digital Literacy", desc: "Basic computer navigation skills" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 font-bold flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Enrollment Process</h3>
      <ol>
        <li>Complete program application</li>
        <li>Review program information and policies</li>
        <li>Sign enrollment agreement</li>
        <li>Submit payment or funding documentation</li>
        <li>Receive access credentials and orientation materials</li>
      </ol>

      <h2>Attendance Policy</h2>

      <h3>Attendance Expectations</h3>
      <p>
        Given the intensive 24-hour format, attendance at all sessions is critical for successful
        completion:
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">90%</div>
          <div className="text-sm text-blue-800 font-medium">Minimum Attendance</div>
          <div className="text-xs text-blue-600 mt-1">21.6 of 24 hours</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 text-center">
          <div className="text-3xl font-bold text-amber-600 mb-1">ASAP</div>
          <div className="text-sm text-amber-800 font-medium">Notification</div>
          <div className="text-xs text-amber-600 mt-1">Notify instructor of absences</div>
        </div>
        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200 text-center">
          <div className="text-3xl font-bold text-emerald-600 mb-1">✓</div>
          <div className="text-sm text-emerald-800 font-medium">Make-Up</div>
          <div className="text-xs text-emerald-600 mt-1">Complete missed content</div>
        </div>
      </div>

      <h3>Absence Impact</h3>
      <p>
        Because of the condensed format, missing more than 2.4 hours of instruction may affect
        certification eligibility. Students who fall below 90% attendance must complete
        make-up work or may need to enroll in a future cohort.
      </p>

      <h2>Assessment & Passing Criteria</h2>

      <h3>Assessment Methods</h3>
      <p>Student competency is evaluated through:</p>
      <ul>
        <li><strong>Practical Demonstrations:</strong> Hands-on skills assessments</li>
        <li><strong>Lab Exercises:</strong> Applied projects using AI tools</li>
        <li><strong>Scenario-Based Evaluations:</strong> Real-world situation responses</li>
        <li><strong>Portfolio Components:</strong> Work samples demonstrating competencies</li>
      </ul>

      <h3>Grading Scale</h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Grade</th>
              <th className="text-left">Percentage</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="font-semibold text-emerald-600">A</td><td>90-100%</td><td><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Excellent</span></td></tr>
            <tr><td className="font-semibold text-blue-600">B</td><td>80-89%</td><td><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Good</span></td></tr>
            <tr><td className="font-semibold text-amber-600">C</td><td>70-79%</td><td><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">Passing</span></td></tr>
            <tr><td className="font-semibold text-red-600">F</td><td>Below 70%</td><td><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Not Passing</span></td></tr>
          </tbody>
        </table>
      </div>

      <h3>Passing Requirements</h3>
      <ul>
        <li><strong>Minimum Grade:</strong> 70% average across all assessments</li>
        <li><strong>All Modules:</strong> Each module assessment must be passed</li>
        <li><strong>Reassessment:</strong> One reassessment opportunity per module if initial attempt fails</li>
      </ul>

      <h2>Professional Standards</h2>

      <h3>Expected Behaviors</h3>
      <p>Students are expected to maintain professional conduct throughout the program:</p>
      <ul>
        <li>Treat instructors and fellow students with respect</li>
        <li>Participate actively in all sessions and activities</li>
        <li>Arrive on time and prepared for each session</li>
        <li>Complete assignments by stated deadlines</li>
        <li>Communicate professionally in all interactions</li>
        <li>Maintain academic integrity in all work</li>
      </ul>

      <h3>Academic Integrity</h3>
      <p>Students must:</p>
      <ul>
        <li>Submit original work for assessments</li>
        <li>Use AI tools only as permitted by assignment guidelines</li>
        <li>Not share assessment answers with others</li>
        <li>Properly attribute sources when required</li>
      </ul>

      <h3>Conduct Violations</h3>
      <p>Violations of professional standards may result in:</p>
      <ul>
        <li>Warning and counseling</li>
        <li>Assessment invalidation and reassessment requirement</li>
        <li>Dismissal from program (severe or repeated violations)</li>
      </ul>

      <h2>Certificate Requirements</h2>

      <p>To receive the AI Capability Specialist Certificate, students must:</p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { num: "1", title: "Complete All Hours", desc: "Attend minimum 90% of 24 program hours" },
          { num: "2", title: "Pass All Assessments", desc: "Achieve 70% minimum on all module assessments" },
          { num: "3", title: "Demonstrate Competencies", desc: "Successfully complete practical demonstrations" },
          { num: "4", title: "Maintain Professional Conduct", desc: "No unresolved conduct violations" },
          { num: "5", title: "Fulfill Financial Obligations", desc: "Payment or funding confirmed" },
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

      <h3>Certificate Issuance</h3>
      <p>
        Upon meeting all requirements, certificates are issued within 5 business days of program
        completion. Digital certificates include verification credentials.
      </p>

      <h3>Incomplete Status</h3>
      <p>
        Students who do not meet completion requirements within the program period may:
      </p>
      <ul>
        <li>Complete make-up requirements within 14 days</li>
        <li>Re-enroll in a future cohort (space permitting)</li>
        <li>Receive a letter documenting partial completion</li>
      </ul>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">Post-Completion Support</h3>
        <p className="text-emerald-100 leading-relaxed">
          Certificate completers gain access to additional training levels (Skills Labs, Portfolio
          Projects, Apprenticeship Track) at no cost until employment. These optional resources
          support continued skill development beyond the 24-hour core program.
        </p>
      </div>
    </DocumentLayout>
  );
}
