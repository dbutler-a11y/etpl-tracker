import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function GrievancePage() {
  return (
    <DocumentLayout title="Student Grievance Procedure" section="Section 11" subtitle="Complaint Resolution Process">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Fair & Transparent Resolution Process</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          This grievance procedure provides students with a clear, fair, and transparent process for
          addressing concerns, complaints, or disputes related to the AI Capability Specialist
          Certificate program.
        </p>
      </div>

      <h2>Purpose</h2>
      <p>
        This grievance procedure provides students with a clear, fair, and transparent process for
        addressing concerns, complaints, or disputes related to the AI Capability Specialist
        Certificate program.
      </p>

      {/* Step 1 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 my-8 border border-blue-200 not-prose">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">1</span>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Informal Resolution (Step 1)</h3>
            <p className="text-slate-600">Timeline: Within 5 business days of the issue</p>
          </div>
        </div>
        <p className="text-slate-700 mb-4">Students are encouraged to first attempt informal resolution:</p>
        <ol className="text-slate-700 space-y-2 ml-4">
          <li>1. Discuss the concern directly with the instructor or staff member involved</li>
          <li>2. If unresolved, speak with the Program Coordinator</li>
          <li>3. Many issues can be resolved through open communication</li>
        </ol>
      </div>

      {/* Step 2 */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 my-8 border border-amber-200 not-prose">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">2</span>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Formal Grievance (Step 2)</h3>
            <p className="text-slate-600">Timeline: Within 10 business days of informal resolution attempt</p>
          </div>
        </div>
        <p className="text-slate-700 mb-4">If informal resolution is unsuccessful:</p>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 border border-amber-100">
            <h4 className="font-semibold text-slate-900 mb-2">1. Submit Written Grievance</h4>
            <p className="text-sm text-slate-600 mb-2">Complete the Student Grievance Form, including:</p>
            <ul className="text-sm text-slate-600 grid md:grid-cols-2 gap-1">
              <li>• Student name and contact information</li>
              <li>• Date(s) of incident(s)</li>
              <li>• Detailed description of the concern</li>
              <li>• Names of individuals involved</li>
              <li>• Desired resolution</li>
              <li>• Documentation (if applicable)</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-4 border border-amber-100">
            <h4 className="font-semibold text-slate-900 mb-2">2. Acknowledgment</h4>
            <p className="text-sm text-slate-600">The Program Director will acknowledge receipt within 3 business days.</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-amber-100">
            <h4 className="font-semibold text-slate-900 mb-2">3. Investigation</h4>
            <p className="text-sm text-slate-600 mb-2">The Program Director will:</p>
            <ul className="text-sm text-slate-600 grid md:grid-cols-2 gap-1">
              <li>• Review the grievance and documentation</li>
              <li>• Interview relevant parties</li>
              <li>• Gather additional information as needed</li>
              <li>• Complete investigation within 10 business days</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-4 border border-amber-100">
            <h4 className="font-semibold text-slate-900 mb-2">4. Written Response</h4>
            <p className="text-sm text-slate-600 mb-2">The Program Director will provide a written decision within 15 business days of grievance submission, including:</p>
            <ul className="text-sm text-slate-600 grid md:grid-cols-2 gap-1">
              <li>• Summary of findings</li>
              <li>• Decision and rationale</li>
              <li>• Actions to be taken (if any)</li>
              <li>• Appeal process information</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 my-8 border border-purple-200 not-prose">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">3</span>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Appeal Process (Step 3)</h3>
            <p className="text-slate-600">Timeline: Within 5 business days of receiving Step 2 decision</p>
          </div>
        </div>
        <p className="text-slate-700 mb-4">Students who disagree with the Program Director's decision may appeal:</p>
        <ol className="text-slate-700 space-y-2">
          <li><strong>1.</strong> Submit a written appeal to the Executive Director</li>
          <li><strong>2.</strong> Include the original grievance, Step 2 decision, and grounds for appeal</li>
          <li><strong>3.</strong> The Executive Director will review within 10 business days</li>
          <li><strong>4.</strong> The Executive Director's decision is final</li>
        </ol>
      </div>

      <h2>External Resources</h2>
      <p>If the grievance remains unresolved, students may contact:</p>

      <div className="bg-slate-50 rounded-xl p-6 my-6 border border-slate-200 not-prose">
        <h4 className="font-bold text-slate-900 mb-3">Texas Workforce Commission</h4>
        <div className="text-slate-700 space-y-1">
          <p>Career Schools and Colleges</p>
          <p>101 East 15th Street</p>
          <p>Austin, TX 78778-0001</p>
          <p className="font-medium">Phone: (512) 936-3100</p>
        </div>
      </div>

      <p>
        <strong>TWC Career Schools and Colleges Complaint Process:</strong> Students may file complaints
        regarding school operations, refund issues, or other regulatory concerns with TWC.
      </p>

      <h2>Non-Retaliation</h2>
      <div className="bg-emerald-50 rounded-xl p-6 my-6 border border-emerald-200 not-prose">
        <p className="text-emerald-800">
          Students who file grievances in good faith will not face retaliation. Retaliation against
          grievance filers is prohibited and will result in disciplinary action against the offending party.
        </p>
      </div>

      <h2>Record Keeping</h2>
      <p>
        Grievance records are maintained for a minimum of five (5) years and are kept confidential
        to the extent permitted by law.
      </p>
    </DocumentLayout>
  );
}
