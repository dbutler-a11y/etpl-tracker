import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function StudentDataReportPage() {
  return (
    <DocumentLayout
      title="Student Data Report"
      section="Section 21"
      subtitle="TWC/ETPL Performance Accountability & Outcomes Documentation"
    >
      {/* Executive Summary Card */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-10 not-prose shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-slate-400 text-sm uppercase tracking-wide font-medium">Performance Year 2026</span>
            <h2 className="text-2xl font-bold mt-1 mb-4" style={{ color: '#ffffff' }}>Student Data Report (SDR)</h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl">
              This comprehensive report documents student outcomes, performance metrics, and
              accountability data in accordance with Texas Workforce Commission (TWC) ETPL
              requirements and WIOA Section 116 performance accountability standards.
            </p>
          </div>
          <div className="text-right hidden lg:block">
            <div className="text-4xl font-bold text-emerald-400">NEW</div>
            <div className="text-slate-400 text-sm font-medium">Program Status</div>
          </div>
        </div>
      </div>

      {/* Report Status Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-8 not-prose">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-amber-600 text-xl">i</span>
          </div>
          <div>
            <h3 className="font-bold text-amber-900 mb-1">New Program Submission</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              As a new program seeking initial ETPL approval, this SDR contains projected outcomes
              based on industry benchmarks, BLS labor market data, and comparable training program
              performance. Actual student-level data will be submitted annually following program
              launch per TWC requirements.
            </p>
          </div>
        </div>
      </div>

      <h2>Program Identification</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6 not-prose">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="px-5 py-3 bg-slate-50 font-semibold text-slate-700 w-1/3">Program Name</td>
              <td className="px-5 py-3">AI Capability Specialist Certificate</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-5 py-3 bg-slate-50 font-semibold text-slate-700">Provider Name</td>
              <td className="px-5 py-3">Institute for AI Innovation</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-5 py-3 bg-slate-50 font-semibold text-slate-700">Provider Type</td>
              <td className="px-5 py-3">Career School (TWC License-Exempt per TEC 132.002)</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-5 py-3 bg-slate-50 font-semibold text-slate-700">CIP Code</td>
              <td className="px-5 py-3 font-mono">11.0101 - Computer and Information Sciences, General</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-5 py-3 bg-slate-50 font-semibold text-slate-700">Program Length</td>
              <td className="px-5 py-3">24 Contact Hours</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-5 py-3 bg-slate-50 font-semibold text-slate-700">Credential Awarded</td>
              <td className="px-5 py-3">Certificate of Completion + Digital Badge</td>
            </tr>
            <tr>
              <td className="px-5 py-3 bg-slate-50 font-semibold text-slate-700">Program Cost</td>
              <td className="px-5 py-3">$8,000 (includes all materials and AI tool subscriptions)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>WIOA Primary Performance Indicators</h2>
      <p>
        The following performance targets align with WIOA Section 116(b)(2)(A) primary indicators.
        As a new program, these represent projected outcomes based on program design, employer
        partnerships, and industry benchmark data from comparable short-term credential programs.
      </p>

      {/* WIOA Performance Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 not-prose">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Indicator 1</div>
          <div className="text-3xl font-bold text-blue-600 mb-1">78%</div>
          <div className="text-slate-900 font-semibold">Employment Rate Q2</div>
          <div className="text-sm text-slate-500 mt-2">2nd Quarter After Exit</div>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Projected Target</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Indicator 2</div>
          <div className="text-3xl font-bold text-blue-600 mb-1">75%</div>
          <div className="text-slate-900 font-semibold">Employment Rate Q4</div>
          <div className="text-sm text-slate-500 mt-2">4th Quarter After Exit</div>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Projected Target</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Indicator 3</div>
          <div className="text-3xl font-bold text-emerald-600 mb-1">$47,500</div>
          <div className="text-slate-900 font-semibold">Median Earnings</div>
          <div className="text-sm text-slate-500 mt-2">Q2 After Exit (Annualized)</div>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Based on SOC 15-1232</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Indicator 4</div>
          <div className="text-3xl font-bold text-purple-600 mb-1">92%</div>
          <div className="text-slate-900 font-semibold">Credential Attainment</div>
          <div className="text-sm text-slate-500 mt-2">During or Within 1 Year</div>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Certificate + Badge</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Indicator 5</div>
          <div className="text-3xl font-bold text-orange-600 mb-1">85%</div>
          <div className="text-slate-900 font-semibold">Measurable Skill Gains</div>
          <div className="text-sm text-slate-500 mt-2">Module Assessments Passed</div>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded">7 Competency Tests</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Indicator 6</div>
          <div className="text-3xl font-bold text-teal-600 mb-1">70%</div>
          <div className="text-slate-900 font-semibold">Employer Retention</div>
          <div className="text-sm text-slate-500 mt-2">Same Employer at Q4</div>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded">Effectiveness Indicator</span>
          </div>
        </div>
      </div>

      <h2>Target Occupation Alignment</h2>
      <p>
        This program aligns with occupations on Texas's Target Occupations List, demonstrating
        demand in the local labor market and alignment with high-growth industry sectors.
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">SOC Code</th>
              <th className="text-left">Occupation Title</th>
              <th className="text-right">TX Employment</th>
              <th className="text-right">Projected Growth</th>
              <th className="text-right">Median Wage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono text-sm">15-1232</td>
              <td>Computer User Support Specialists</td>
              <td className="text-right">67,840</td>
              <td className="text-right text-emerald-600">+8.2%</td>
              <td className="text-right font-semibold">$54,470</td>
            </tr>
            <tr>
              <td className="font-mono text-sm">15-1299</td>
              <td>Computer Occupations, All Other</td>
              <td className="text-right">28,420</td>
              <td className="text-right text-emerald-600">+12.4%</td>
              <td className="text-right font-semibold">$56,890</td>
            </tr>
            <tr>
              <td className="font-mono text-sm">13-1199</td>
              <td>Business Operations Specialists, All Other</td>
              <td className="text-right">112,350</td>
              <td className="text-right text-emerald-600">+6.8%</td>
              <td className="text-right font-semibold">$76,850</td>
            </tr>
            <tr>
              <td className="font-mono text-sm">43-4051</td>
              <td>Customer Service Representatives</td>
              <td className="text-right">234,890</td>
              <td className="text-right text-emerald-600">+4.2%</td>
              <td className="text-right font-semibold">$38,120</td>
            </tr>
            <tr>
              <td className="font-mono text-sm">15-1211</td>
              <td>Computer Systems Analysts</td>
              <td className="text-right">42,180</td>
              <td className="text-right text-emerald-600">+9.6%</td>
              <td className="text-right font-semibold">$99,270</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-slate-500 italic">
        Source: Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS), Texas May 2023.
        Projections from Texas Workforce Commission Labor Market Information.
      </p>

      <h2>Projected Enrollment & Completion Data</h2>

      <div className="bg-slate-50 rounded-xl p-6 my-6 not-prose">
        <h3 className="font-bold text-slate-900 mb-4">Year 1 Projections (Program Year 2026)</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
            <div className="text-2xl font-bold text-slate-900">48</div>
            <div className="text-sm text-slate-600">Projected Enrollees</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
            <div className="text-2xl font-bold text-slate-900">4</div>
            <div className="text-sm text-slate-600">Cohorts (12/cohort)</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
            <div className="text-2xl font-bold text-emerald-600">44</div>
            <div className="text-sm text-slate-600">Projected Completers</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
            <div className="text-2xl font-bold text-blue-600">92%</div>
            <div className="text-sm text-slate-600">Completion Rate</div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Metric</th>
              <th className="text-center">Year 1</th>
              <th className="text-center">Year 2</th>
              <th className="text-center">Year 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Total Enrollments</td>
              <td className="text-center">48</td>
              <td className="text-center">96</td>
              <td className="text-center">144</td>
            </tr>
            <tr>
              <td className="font-medium">Program Completers</td>
              <td className="text-center">44</td>
              <td className="text-center">89</td>
              <td className="text-center">135</td>
            </tr>
            <tr>
              <td className="font-medium">Completion Rate</td>
              <td className="text-center text-emerald-600 font-semibold">92%</td>
              <td className="text-center text-emerald-600 font-semibold">93%</td>
              <td className="text-center text-emerald-600 font-semibold">94%</td>
            </tr>
            <tr>
              <td className="font-medium">Credentials Awarded</td>
              <td className="text-center">44</td>
              <td className="text-center">89</td>
              <td className="text-center">135</td>
            </tr>
            <tr>
              <td className="font-medium">WIOA-Funded Participants</td>
              <td className="text-center">24</td>
              <td className="text-center">48</td>
              <td className="text-center">72</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Employment Outcomes Methodology</h2>
      <p>
        Projected employment outcomes are derived from multiple data sources to ensure accuracy
        and alignment with TWC reporting requirements:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">BrandVoice Partnership Pipeline</h4>
              <p className="text-sm text-slate-600">
                Guaranteed interview pathway for qualified completers provides direct employment
                connection. Projected placement rate: 40% of completers.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Industry Benchmark Analysis</h4>
              <p className="text-sm text-slate-600">
                Short-term IT credential programs nationally show 72-85% employment rates.
                Our intensive model and employer partnership support higher outcomes.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Texas Labor Market Data</h4>
              <p className="text-sm text-slate-600">
                BLS OEWS data confirms strong demand for target occupations in Houston MSA,
                with unemployment below 3% for computer support specialists.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">4</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">UI Wage Record Verification</h4>
              <p className="text-sm text-slate-600">
                Post-program employment will be verified through Texas UI wage records per
                TWC SDR requirements. SSN data submitted annually in July.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Wage Gain Analysis</h2>
      <p>
        Wage outcomes are projected based on target occupation median wages and typical
        entry-level wage differentials for new credential holders.
      </p>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 my-6 not-prose">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-sm text-emerald-700 font-medium mb-1">Pre-Training Median</div>
            <div className="text-3xl font-bold text-emerald-800">$28,400</div>
            <div className="text-xs text-emerald-600 mt-1">Based on target population profile</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-emerald-700 font-medium mb-1">Post-Training Median</div>
            <div className="text-3xl font-bold text-emerald-800">$47,500</div>
            <div className="text-xs text-emerald-600 mt-1">Entry-level for SOC 15-1232</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-emerald-700 font-medium mb-1">Projected Wage Gain</div>
            <div className="text-3xl font-bold text-emerald-800">+67%</div>
            <div className="text-xs text-emerald-600 mt-1">$19,100 annual increase</div>
          </div>
        </div>
      </div>

      <h2>Projected Demographics</h2>
      <p>
        Target participant demographics align with WIOA priority populations and
        Houston-area workforce development needs.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Age Distribution (Projected)</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm text-slate-600">18-24</div>
              <div className="flex-1 bg-slate-100 rounded-full h-4">
                <div className="bg-blue-500 rounded-full h-4" style={{width: '25%'}}></div>
              </div>
              <div className="w-12 text-sm font-medium text-right">25%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm text-slate-600">25-34</div>
              <div className="flex-1 bg-slate-100 rounded-full h-4">
                <div className="bg-blue-500 rounded-full h-4" style={{width: '35%'}}></div>
              </div>
              <div className="w-12 text-sm font-medium text-right">35%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm text-slate-600">35-44</div>
              <div className="flex-1 bg-slate-100 rounded-full h-4">
                <div className="bg-blue-500 rounded-full h-4" style={{width: '25%'}}></div>
              </div>
              <div className="w-12 text-sm font-medium text-right">25%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm text-slate-600">45+</div>
              <div className="flex-1 bg-slate-100 rounded-full h-4">
                <div className="bg-blue-500 rounded-full h-4" style={{width: '15%'}}></div>
              </div>
              <div className="w-12 text-sm font-medium text-right">15%</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-3">WIOA Priority Populations</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-32 text-sm text-slate-600">Low Income</div>
              <div className="flex-1 bg-slate-100 rounded-full h-4">
                <div className="bg-purple-500 rounded-full h-4" style={{width: '60%'}}></div>
              </div>
              <div className="w-12 text-sm font-medium text-right">60%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-sm text-slate-600">Unemployed</div>
              <div className="flex-1 bg-slate-100 rounded-full h-4">
                <div className="bg-purple-500 rounded-full h-4" style={{width: '45%'}}></div>
              </div>
              <div className="w-12 text-sm font-medium text-right">45%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-sm text-slate-600">Veterans</div>
              <div className="flex-1 bg-slate-100 rounded-full h-4">
                <div className="bg-purple-500 rounded-full h-4" style={{width: '10%'}}></div>
              </div>
              <div className="w-12 text-sm font-medium text-right">10%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-sm text-slate-600">Individuals w/ Barriers</div>
              <div className="flex-1 bg-slate-100 rounded-full h-4">
                <div className="bg-purple-500 rounded-full h-4" style={{width: '25%'}}></div>
              </div>
              <div className="w-12 text-sm font-medium text-right">25%</div>
            </div>
          </div>
        </div>
      </div>

      <h2>Employer Partnership Documentation</h2>
      <p>
        Per TWC requirements, training providers must demonstrate proof of partnerships
        with local businesses. The following partnerships support program outcomes:
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Partner Organization</th>
              <th className="text-left">Partnership Type</th>
              <th className="text-left">Commitment</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">BrandVoice.studio</td>
              <td>Direct Employment Partner</td>
              <td>Guaranteed interview for qualified completers</td>
              <td className="text-center"><span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">Active</span></td>
            </tr>
            <tr>
              <td className="font-medium">Houston Technology Center</td>
              <td>Industry Advisory</td>
              <td>Curriculum review, guest instruction</td>
              <td className="text-center"><span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Developing</span></td>
            </tr>
            <tr>
              <td className="font-medium">Greater Houston Partnership</td>
              <td>Workforce Network</td>
              <td>Employer referrals, job placement support</td>
              <td className="text-center"><span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Developing</span></td>
            </tr>
            <tr>
              <td className="font-medium">Workforce Solutions - Gulf Coast</td>
              <td>Workforce Board</td>
              <td>WIOA participant referrals, ITA funding</td>
              <td className="text-center"><span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded">Pending ETPL</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Assessment & Credential Verification</h2>
      <p>
        Program assessments are designed to verify measurable skill gains and ensure
        credential attainment aligns with WIOA reporting requirements.
      </p>

      <div className="bg-slate-50 rounded-xl p-6 my-6 not-prose">
        <h4 className="font-bold text-slate-900 mb-4">Competency Assessment Structure</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-slate-600">
                <th className="py-2">Module</th>
                <th className="py-2">Assessment Type</th>
                <th className="py-2">Passing Score</th>
                <th className="py-2 text-right">Weight</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-slate-200">
                <td className="py-2">AI Foundations</td>
                <td>Knowledge Test + Practical</td>
                <td>80%</td>
                <td className="text-right">15%</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="py-2">Generative AI Tools</td>
                <td>Hands-on Portfolio</td>
                <td>Proficiency Rubric</td>
                <td className="text-right">20%</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="py-2">Technical Support</td>
                <td>Scenario-Based Test</td>
                <td>75%</td>
                <td className="text-right">15%</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="py-2">AI Image & Video</td>
                <td>Project Deliverable</td>
                <td>Proficiency Rubric</td>
                <td className="text-right">15%</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="py-2">AI Automation</td>
                <td>Workflow Build Exercise</td>
                <td>Functional Criteria</td>
                <td className="text-right">15%</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="py-2">Professional Skills</td>
                <td>Role-Play Assessment</td>
                <td>Competency Checklist</td>
                <td className="text-right">10%</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="py-2">Capstone</td>
                <td>Portfolio Review</td>
                <td>Panel Evaluation</td>
                <td className="text-right">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Data Collection & Reporting Procedures</h2>
      <p>
        The Institute for AI Innovation maintains comprehensive data collection procedures
        to ensure accurate, timely reporting to TWC.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Enrollment Data Collected</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Full legal name</li>
            <li>• Social Security Number (encrypted)</li>
            <li>• Date of birth</li>
            <li>• Contact information</li>
            <li>• Demographic information</li>
            <li>• Prior education level</li>
            <li>• Employment status at entry</li>
            <li>• Funding source (WIOA/Self-pay)</li>
            <li>• Barrier to employment indicators</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Outcome Data Tracked</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Program completion date</li>
            <li>• Credential attainment date</li>
            <li>• Assessment scores (all modules)</li>
            <li>• Employment status at exit</li>
            <li>• Employer name (if employed)</li>
            <li>• Occupation/job title</li>
            <li>• Wage at placement</li>
            <li>• Q2/Q4 follow-up employment</li>
            <li>• Continuing education enrollment</li>
          </ul>
        </div>
      </div>

      <h3>Annual SDR Submission Timeline</h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Activity</th>
              <th className="text-left">Timeline</th>
              <th className="text-left">Responsible Party</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Performance Year End</td>
              <td>June 30</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Data Collection Deadline</td>
              <td>July 15</td>
              <td>Program Director</td>
            </tr>
            <tr>
              <td>SDR Compilation</td>
              <td>July 15-25</td>
              <td>Data Manager</td>
            </tr>
            <tr>
              <td>TWC Submission</td>
              <td>July 31</td>
              <td>Executive Director</td>
            </tr>
            <tr>
              <td>Verification Period</td>
              <td>August-September</td>
              <td>TWC</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Program Quality Indicators</h2>
      <p>
        Beyond WIOA primary indicators, the program tracks additional quality metrics
        to ensure continuous improvement and participant satisfaction.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
          <div className="text-4xl font-bold mb-2">4.5/5</div>
          <div className="font-medium">Student Satisfaction</div>
          <div className="text-blue-200 text-sm mt-1">Target Rating</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
          <div className="text-4xl font-bold mb-2">95%</div>
          <div className="font-medium">Would Recommend</div>
          <div className="text-purple-200 text-sm mt-1">Net Promoter Score</div>
        </div>
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-white text-center">
          <div className="text-4xl font-bold mb-2">90%</div>
          <div className="font-medium">Employer Satisfaction</div>
          <div className="text-teal-200 text-sm mt-1">Hiring Partner Feedback</div>
        </div>
      </div>

      {/* Compliance Statement */}
      <div className="bg-slate-900 rounded-2xl p-8 mt-10 not-prose">
        <h3 className="text-xl font-bold mb-3 text-white">Data Privacy & Compliance Statement</h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          The Institute for AI Innovation maintains strict data security protocols for all
          student records. Social Security Numbers and personally identifiable information
          are encrypted at rest and in transit, with access limited to authorized personnel.
          All data handling complies with FERPA, Texas Education Code, and TWC data
          security requirements.
        </p>
        <p className="text-slate-400 text-sm">
          Student data is retained for the period required by TWC (minimum 6 years) and
          securely destroyed thereafter. Students have the right to review and correct
          their records per institutional policy.
        </p>
      </div>

      {/* Certification Footer */}
      <div className="border-t-2 border-slate-200 mt-10 pt-8">
        <h3>Certification</h3>
        <p>
          I certify that the information provided in this Student Data Report is accurate
          and complete to the best of my knowledge. I understand that submission of false
          or misleading information may result in removal from the ETPL and other sanctions
          as provided by law.
        </p>
        <div className="grid md:grid-cols-2 gap-8 my-6 not-prose">
          <div>
            <div className="border-b-2 border-slate-300 pb-2 mb-2 min-h-[60px] flex items-end">
              <span style={{ fontFamily: 'var(--font-signature), cursive', fontSize: '32px', color: '#1e3a5f' }}>
                Durayveon Butler
              </span>
            </div>
            <div className="text-sm text-slate-600">Authorized Representative Signature</div>
          </div>
          <div>
            <div className="border-b-2 border-slate-300 pb-2 mb-2 min-h-[60px] flex items-end">
              <span className="text-lg text-slate-800">December 19, 2025</span>
            </div>
            <div className="text-sm text-slate-600">Date</div>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          <strong>Prepared by:</strong> Institute for AI Innovation<br/>
          <strong>Report Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br/>
          <strong>Contact:</strong> dbutler@eulaproperties.com
        </p>
      </div>

      {/* Reference Links */}
      <div className="bg-slate-50 rounded-xl p-6 mt-8 not-prose">
        <h4 className="font-bold text-slate-900 mb-3">Reference Documentation</h4>
        <ul className="text-sm text-slate-600 space-y-2">
          <li>
            <a href="https://www.twc.texas.gov/agency/workforce-development-boards/eligible-training-providers"
               className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              TWC Eligible Training Providers Requirements
            </a>
          </li>
          <li>
            <a href="https://www.dol.gov/agencies/eta/performance/performance-indicators"
               className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              WIOA Performance Indicators and Measures (DOL)
            </a>
          </li>
          <li>
            <a href="https://www.bls.gov/oes/current/oes_tx.htm"
               className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Bureau of Labor Statistics - Texas Occupational Employment Statistics
            </a>
          </li>
        </ul>
      </div>
    </DocumentLayout>
  );
}
