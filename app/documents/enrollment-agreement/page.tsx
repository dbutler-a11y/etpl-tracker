"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EnrollmentAgreementPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link
              href="/documents"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Documents
            </Link>
            <div className="flex gap-2">
              <Button onClick={handlePrint} variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button onClick={handlePrint} size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4" />
                Save PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Document Content */}
      <main className="max-w-5xl mx-auto px-6 py-10 print:py-0 print:px-0">
        <article className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden print:shadow-none print:border-none print:rounded-none">
          {/* Document Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-10 py-8 print:bg-emerald-600">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                Student Materials
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white leading-tight print:text-2xl">
              Student Enrollment Agreement
            </h1>
            <p className="text-emerald-100 mt-2">AI Capability Specialist Certificate - 24-Hour Intensive Program</p>
          </div>

          {/* Document Body */}
          <div className="px-10 py-10 print:px-8 print:py-6">
            {/* Provider Info */}
            <div className="border-2 border-slate-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Training Provider Information</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-500">Provider Name</div>
                  <div className="font-medium">[Provider Legal Name]</div>
                </div>
                <div>
                  <div className="text-slate-500">Address</div>
                  <div className="font-medium">[Full Address]</div>
                </div>
                <div>
                  <div className="text-slate-500">Phone</div>
                  <div className="font-medium">[Phone Number]</div>
                </div>
                <div>
                  <div className="text-slate-500">Email</div>
                  <div className="font-medium">[Email Address]</div>
                </div>
              </div>
            </div>

            {/* Student Info */}
            <div className="border-2 border-slate-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Student Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-500 mb-1">Full Legal Name</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1">Date of Birth</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1">Address</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1">City, State, ZIP</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1">Phone Number</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1">Email Address</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1">Emergency Contact Name</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1">Emergency Contact Phone</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
              </div>
            </div>

            {/* Program Information */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Program Information</h2>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 text-slate-600">Program Name</td>
                    <td className="py-3 font-medium text-right">AI Capability Specialist Certificate</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 text-slate-600">CIP Code</td>
                    <td className="py-3 font-medium text-right">11.1006</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 text-slate-600">Credential Awarded</td>
                    <td className="py-3 font-medium text-right">Certificate of Completion</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 text-slate-600">Total Program Hours</td>
                    <td className="py-3 font-medium text-right">24 Hours</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 text-slate-600">Delivery Method</td>
                    <td className="py-3 font-medium text-right">Intensive Hybrid</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 text-slate-600">TWC Licensing Status</td>
                    <td className="py-3 font-medium text-right">Exempt (24-Hour Program)</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-slate-600">Program Start Date</td>
                    <td className="py-3 font-medium text-right">________________</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Program Costs & Value Breakdown</h2>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-blue-200">
                    <td className="py-3 text-slate-700">24-Hour Intensive Training</td>
                    <td className="py-3 font-medium text-right">$2,400.00</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-3 text-slate-700">Premium AI Tool Suite Access</td>
                    <td className="py-3 font-medium text-right">$1,800.00</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-3 text-slate-700">BrandVoice Employment Pipeline</td>
                    <td className="py-3 font-medium text-right">$1,500.00</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-3 text-slate-700">Free Additional Training Levels</td>
                    <td className="py-3 font-medium text-right">$1,500.00</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-3 text-slate-700">Career Services & Job Placement</td>
                    <td className="py-3 font-medium text-right">$800.00</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="py-3 font-bold text-slate-900">TOTAL PROGRAM COST</td>
                    <td className="py-3 font-bold text-right text-blue-700">$8,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* What's Included */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-green-900 mb-4">What's Included</h2>
              <ul className="space-y-2 text-sm text-green-800">
                <li>✓ Complete 24-hour intensive training program</li>
                <li>✓ Premium AI tool access (Replit, Nano Banana, VEO 3, Kling)</li>
                <li>✓ Guaranteed interview pathway with BrandVoice</li>
                <li>✓ Free additional training (Level 2-4) until employment</li>
                <li>✓ Career services and job placement support until hired</li>
                <li>✓ Certificate of Completion upon successful program completion</li>
              </ul>
            </div>

            {/* Payment Information */}
            <div className="border-2 border-slate-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
                  <span>Full Payment at Enrollment ($8,000.00)</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
                  <span>Payment Plan (if approved)</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
                  <span>Workforce Board Voucher / WIOA Funding</span>
                </label>
                <div className="pt-3">
                  <label className="block text-sm text-slate-500 mb-1">Funding Source / Voucher Number (if applicable)</label>
                  <div className="border-b-2 border-slate-300 h-8"></div>
                </div>
              </div>
            </div>

            {/* Cancellation & Refund */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Cancellation & Refund Policy Summary</h2>
              <div className="text-sm text-slate-700 space-y-3">
                <p>
                  <strong>Three-Day Cancellation Right:</strong> You may cancel this enrollment agreement within
                  three (3) business days of signing and receive a full refund of all monies paid, with no deductions.
                </p>
                <p>
                  <strong>Cancellation Before Start:</strong> If you cancel before the first day of class, you will
                  receive a full refund minus a non-refundable administrative fee of $100.
                </p>
                <p><strong>Withdrawal After Start:</strong> Refunds are calculated based on program completion:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>0-6 hours (0-25%): 75% tuition refund</li>
                  <li>7-12 hours (26-50%): 50% tuition refund</li>
                  <li>13-18 hours (51-75%): 25% tuition refund</li>
                  <li>More than 18 hours (75%+): No refund</li>
                </ul>
                <p className="italic">
                  Complete refund policy available in the Student Handbook and upon request.
                </p>
              </div>
            </div>

            {/* Acknowledgments */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Student Acknowledgments</h2>
              <div className="space-y-4 text-sm">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 mt-0.5" />
                  <span>I have received and reviewed the Student Handbook, which includes policies on attendance,
                    grading, academic integrity, grievance procedures, and student conduct.</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 mt-0.5" />
                  <span>I understand this is a 24-hour intensive program with 90% minimum attendance requirement
                    (21.6 hours) and 70% minimum grade average to receive certification.</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 mt-0.5" />
                  <span>I understand that completion of this program does not guarantee employment, though the
                    program includes a guaranteed interview pathway with BrandVoice for qualified graduates.</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 mt-0.5" />
                  <span>I understand I will receive free access to additional training levels (Skills Labs,
                    Portfolio Projects, Apprenticeship Track) until I secure employment.</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 mt-0.5" />
                  <span>I have received and understand the refund policy, including my right to cancel within
                    three (3) business days for a full refund.</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 mt-0.5" />
                  <span>I certify that all information provided on this enrollment agreement is true and accurate.</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 mt-0.5" />
                  <span>I consent to receive program communications via email and phone at the contact information provided.</span>
                </label>
              </div>
            </div>

            {/* Signatures */}
            <div className="border-t-2 border-slate-200 pt-8">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Signatures</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm text-slate-600 mb-2">Student Signature</label>
                  <div className="border-b-2 border-slate-400 h-12"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-2">Date</label>
                  <div className="border-b-2 border-slate-400 h-12"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm text-slate-600 mb-2">Student Printed Name</label>
                  <div className="border-b-2 border-slate-400 h-12"></div>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-2">Phone Number</label>
                  <div className="border-b-2 border-slate-400 h-12"></div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Provider Representative</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">Authorized Signature</label>
                    <div className="border-b-2 border-slate-400 h-12"></div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">Date</label>
                    <div className="border-b-2 border-slate-400 h-12"></div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">Printed Name</label>
                    <div className="border-b-2 border-slate-400 h-12"></div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">Title</label>
                    <div className="border-b-2 border-slate-400 h-12"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Use */}
            <div className="mt-8 border-t-2 border-dashed border-slate-300 pt-6">
              <div className="text-xs text-slate-500 uppercase tracking-wide mb-3">For Office Use Only</div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <label className="block text-slate-500">Enrollment Date</label>
                  <div className="border-b border-slate-300 h-6"></div>
                </div>
                <div>
                  <label className="block text-slate-500">Student ID</label>
                  <div className="border-b border-slate-300 h-6"></div>
                </div>
                <div>
                  <label className="block text-slate-500">Payment Received</label>
                  <div className="border-b border-slate-300 h-6"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 mt-16 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div className="font-medium text-slate-700">
              AI Capability Specialist Certificate
            </div>
            <div>
              Student Enrollment Materials
            </div>
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in 0.6in;
          }

          html, body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 11pt;
          }

          /* Hide navigation and footer */
          header, footer {
            display: none !important;
          }

          /* Main container */
          main {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          article {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }

          /* Document header */
          article > div:first-child {
            padding: 1.5rem 2rem !important;
            margin-bottom: 0 !important;
            page-break-after: avoid;
          }

          /* Document body */
          article > div:last-child {
            padding: 1.5rem 2rem !important;
          }

          /* Prevent page breaks inside sections */
          .border-2,
          .bg-slate-50,
          .bg-blue-50,
          .bg-green-50,
          .bg-amber-50 {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-bottom: 1rem !important;
            padding: 1rem !important;
          }

          /* Section headers should stay with content */
          h2 {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }

          /* Keep provider info on first page */
          .border-2.border-slate-200.rounded-lg.p-6.mb-8:first-of-type {
            page-break-before: avoid !important;
          }

          /* Keep tables together */
          table {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Signature section - keep together */
          .border-t-2.border-slate-200.pt-8 {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-before: auto;
          }

          /* Office use section - keep together */
          .border-t-2.border-dashed {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Acknowledgments - keep together */
          .bg-amber-50 {
            page-break-before: auto;
          }

          /* Ensure grids don't break oddly */
          .grid {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Cost breakdown - keep together */
          .bg-blue-50 {
            page-break-inside: avoid !important;
          }

          /* What's included - keep together */
          .bg-green-50 {
            page-break-inside: avoid !important;
          }

          /* Better spacing for print */
          .mb-8 {
            margin-bottom: 1rem !important;
          }

          /* Form fields */
          .border-b-2 {
            border-width: 1px !important;
          }

          /* Checkbox styling */
          input[type="checkbox"] {
            -webkit-appearance: none;
            appearance: none;
            width: 14px !important;
            height: 14px !important;
            border: 1.5px solid #64748b !important;
            border-radius: 2px !important;
            background: white !important;
            flex-shrink: 0;
          }

          /* Typography adjustments */
          h1 {
            font-size: 1.5rem !important;
          }

          h2 {
            font-size: 1.1rem !important;
            margin-bottom: 0.75rem !important;
          }

          p, li, td, span {
            font-size: 10pt !important;
            line-height: 1.4 !important;
          }

          /* Reduce padding overall */
          .p-6 {
            padding: 0.875rem !important;
          }

          .px-10 {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }

          .py-10 {
            padding-top: 1.25rem !important;
            padding-bottom: 1.25rem !important;
          }

          /* Rounded corners for print */
          .rounded-lg, .rounded-2xl {
            border-radius: 4px !important;
          }
        }
      `}</style>
    </div>
  );
}
