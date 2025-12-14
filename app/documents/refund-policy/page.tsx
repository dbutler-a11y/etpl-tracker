import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function RefundPolicyPage() {
  return (
    <DocumentLayout title="Refund Policy" section="Section 10" subtitle="24-Hour Program Policy">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-blue-500/20">
        <h2 className="text-2xl font-bold mb-4">Fair & Transparent Refund Policy</h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          This refund policy applies to the AI Capability Specialist Certificate, a 24-hour
          licensing-exempt program. The policy is designed to be fair, transparent, and
          professionally appropriate.
        </p>
      </div>

      <h2>Three-Day Cancellation Right</h2>
      <div className="bg-emerald-50 rounded-xl p-6 my-6 border border-emerald-200 not-prose">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl flex-shrink-0">✓</div>
          <div>
            <h3 className="font-bold text-emerald-900 text-lg">Full Refund Guarantee</h3>
            <p className="text-emerald-800 mt-2">
              Students may cancel enrollment within <strong>three (3) business days</strong> of signing the
              enrollment agreement and receive a full refund of all monies paid, with no deductions.
            </p>
          </div>
        </div>
      </div>

      <h2>Cancellation Before Program Start</h2>
      <p>
        Students who cancel enrollment <strong>before the first day of class</strong> are entitled
        to a full refund of all tuition and fees paid, minus a non-refundable administrative fee
        of $100.
      </p>

      <h2>Withdrawal After Program Start</h2>
      <p>
        Given the condensed 24-hour format, refunds for students who withdraw after the program
        begins are calculated as follows:
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Program Completed</th>
              <th className="text-left">Hours Attended</th>
              <th className="text-right">Refund</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0% - 25%</td>
              <td>0 - 6 hours</td>
              <td className="text-right font-semibold text-emerald-600">75% of tuition</td>
            </tr>
            <tr>
              <td>26% - 50%</td>
              <td>7 - 12 hours</td>
              <td className="text-right font-semibold text-amber-600">50% of tuition</td>
            </tr>
            <tr>
              <td>51% - 75%</td>
              <td>13 - 18 hours</td>
              <td className="text-right font-semibold text-orange-600">25% of tuition</td>
            </tr>
            <tr>
              <td>More than 75%</td>
              <td>19+ hours</td>
              <td className="text-right font-semibold text-slate-500">No refund</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Refund Calculation</h2>
      <ul>
        <li><strong>Percentage Completed:</strong> Calculated by dividing hours attended by total program hours (24)</li>
        <li><strong>Refund Base:</strong> Tuition portion only. Administrative fee ($100) is non-refundable after the 3-day cancellation period</li>
        <li><strong>AI Tool Access:</strong> Tool subscriptions initiated on student's behalf are non-refundable after access is provided</li>
      </ul>

      <h2>Refund Timeline</h2>
      <div className="bg-blue-50 rounded-xl p-6 my-6 border border-blue-200 not-prose">
        <p className="text-blue-800">
          Refunds will be processed and issued within <strong>30 days</strong> of the date the school
          determines the student has withdrawn.
        </p>
      </div>

      <h2>Withdrawal Date Determination</h2>
      <p>A student is considered withdrawn on the earliest of:</p>
      <ul>
        <li>The date the student provides written notice of withdrawal</li>
        <li>The date the student is dismissed for policy violations</li>
        <li>The date the student fails to attend scheduled sessions without notification</li>
      </ul>

      <h2>Special Circumstances</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Medical or Emergency Withdrawal</h4>
          <p className="text-sm text-blue-800">
            Students who must withdraw due to documented medical emergencies or extraordinary
            circumstances may request special consideration for refund calculation.
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
          <h4 className="font-semibold text-emerald-900 mb-2">Military Deployment</h4>
          <p className="text-sm text-emerald-800">
            Students called to active military duty receive a full refund of tuition for the
            uncompleted portion of the program.
          </p>
        </div>
      </div>

      <h2>Non-Refundable Items</h2>
      <p>The following are non-refundable after the 3-day cancellation period:</p>
      <ul>
        <li>Administrative fee ($100)</li>
        <li>AI tool subscriptions once access has been activated</li>
        <li>Materials already provided or downloaded</li>
      </ul>

      <h2>Refund Request Process</h2>
      <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
        {[
          { step: "1", title: "Submit Notice", desc: "Submit written withdrawal notice to the Program Coordinator" },
          { step: "2", title: "Receive Confirmation", desc: "Receive confirmation and refund calculation within 5 business days" },
          { step: "3", title: "Receive Refund", desc: "Refund issued within 30 days of withdrawal date" },
        ].map((item) => (
          <div key={item.step} className="bg-white rounded-xl p-5 border border-slate-200">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-3">{item.step}</div>
            <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Contact</h2>
      <p>
        For refund questions or to submit a withdrawal request, contact the Program Coordinator
        at [email] or [phone].
      </p>

      {/* Bottom Note */}
      <div className="bg-slate-50 rounded-xl p-6 mt-8 border border-slate-200 not-prose">
        <h3 className="font-bold text-slate-900 mb-2">Licensing Exemption Note</h3>
        <p className="text-slate-700 leading-relaxed">
          As a 24-hour program qualifying for Texas career school licensing exemption, this
          refund policy meets professional standards while remaining appropriate for the
          program format. The policy is designed to be fair to students while reflecting
          the value of instruction and services provided.
        </p>
      </div>
    </DocumentLayout>
  );
}
