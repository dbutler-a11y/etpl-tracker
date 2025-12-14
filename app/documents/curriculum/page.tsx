import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function CurriculumPage() {
  return (
    <DocumentLayout title="24-Hour Curriculum" section="Section 7" subtitle="ETPL-Ready Microcredential">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-blue-500/20">
        <h2 className="text-2xl font-bold mb-4">Intensive Skills Credential</h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          The AI Capability Specialist Certificate delivers comprehensive, job-ready training in
          <strong className="text-white"> 24 instructional hours</strong>, qualifying for Texas career school licensing
          exemption while maximizing workforce value.
        </p>
      </div>

      {/* Hours Overview */}
      <div className="bg-slate-50 rounded-xl p-4 mb-8 not-prose">
        <p className="text-lg font-semibold text-slate-900 text-center">Total Program Hours: <span className="text-blue-600">24</span></p>
      </div>

      {/* Module Cards */}
      <div className="space-y-8 not-prose">
        {/* Module 1 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">MODULE 1: AI Fundamentals & Digital Readiness</h3>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">4 Hours</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Understand core concepts of AI and machine learning</li>
                  <li>• Navigate modern digital workplace environments</li>
                  <li>• Apply basic cybersecurity awareness</li>
                  <li>• Demonstrate digital literacy across platforms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Skills Gained</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• AI terminology and concept fluency</li>
                  <li>• Digital workspace navigation</li>
                  <li>• Security-conscious computing habits</li>
                  <li>• Cloud platform basics</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-blue-600">Assessment:</span>
              <span className="text-sm text-slate-600 ml-2">Digital Readiness Skills Check (practical demonstration)</span>
            </div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">MODULE 2: Applied AI Tools</h3>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">5 Hours</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Utilize AI-powered productivity tools effectively</li>
                  <li>• Apply prompt engineering techniques</li>
                  <li>• Create content using generative AI platforms</li>
                  <li>• Evaluate AI outputs for accuracy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Skills Gained</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Effective prompt engineering</li>
                  <li>• AI-assisted content creation</li>
                  <li>• Critical evaluation of AI outputs</li>
                  <li>• Multi-tool AI workflow design</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-purple-600">Assessment:</span>
              <span className="text-sm text-slate-600 ml-2">AI Tool Proficiency Lab (hands-on project)</span>
            </div>
          </div>
        </div>

        {/* Module 3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">MODULE 3: Technical Support & Troubleshooting</h3>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">4 Hours</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Apply structured troubleshooting methodologies</li>
                  <li>• Diagnose common technical issues systematically</li>
                  <li>• Document support interactions effectively</li>
                  <li>• Communicate technical info to non-technical users</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Skills Gained</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Systematic troubleshooting approach</li>
                  <li>• Technical problem documentation</li>
                  <li>• User-friendly communication</li>
                  <li>• Issue escalation judgment</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-emerald-600">Assessment:</span>
              <span className="text-sm text-slate-600 ml-2">Troubleshooting Scenario Exercise</span>
            </div>
          </div>
        </div>

        {/* Module 4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">MODULE 4: Workflow Automation</h3>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">4 Hours</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Design automated workflows using no-code platforms</li>
                  <li>• Identify processes suitable for automation</li>
                  <li>• Integrate applications using automation tools</li>
                  <li>• Test and troubleshoot automated workflows</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Skills Gained</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• No-code automation platform proficiency</li>
                  <li>• Process analysis and optimization</li>
                  <li>• Application integration basics</li>
                  <li>• Workflow testing and validation</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-orange-600">Assessment:</span>
              <span className="text-sm text-slate-600 ml-2">Build an Automated Workflow (practical project)</span>
            </div>
          </div>
        </div>

        {/* Module 5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">MODULE 5: Customer-Facing Service & Support</h3>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">3 Hours</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Deliver excellent customer service in technical contexts</li>
                  <li>• Handle customer interactions professionally</li>
                  <li>• Use AI tools to enhance customer support</li>
                  <li>• Manage difficult conversations with empathy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Skills Gained</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Professional customer communication</li>
                  <li>• AI-assisted support delivery</li>
                  <li>• De-escalation techniques</li>
                  <li>• Service quality standards</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-pink-600">Assessment:</span>
              <span className="text-sm text-slate-600 ml-2">Customer Service Role-Play Scenarios</span>
            </div>
          </div>
        </div>

        {/* Module 6 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">MODULE 6: BrandVoice Support Simulations</h3>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">2 Hours</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Apply skills in realistic BrandVoice scenarios</li>
                  <li>• Demonstrate readiness for employer workflows</li>
                  <li>• Practice with tools used at BrandVoice</li>
                  <li>• Receive feedback aligned with employer expectations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Skills Gained</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Employer-specific workflow familiarity</li>
                  <li>• Real-world scenario confidence</li>
                  <li>• Performance under observation</li>
                  <li>• Feedback incorporation</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-indigo-600">Assessment:</span>
              <span className="text-sm text-slate-600 ml-2">BrandVoice Simulation Performance Review</span>
            </div>
          </div>
        </div>

        {/* Module 7 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">MODULE 7: Workforce & Professional Skills</h3>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">2 Hours</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Create effective resumes highlighting AI capabilities</li>
                  <li>• Prepare for technical and behavioral interviews</li>
                  <li>• Demonstrate professional workplace behaviors</li>
                  <li>• Build foundations for career advancement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Skills Gained</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Resume and profile optimization</li>
                  <li>• Interview preparation</li>
                  <li>• Professional communication</li>
                  <li>• Career planning basics</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-teal-600">Assessment:</span>
              <span className="text-sm text-slate-600 ml-2">Job Readiness Portfolio Completion</span>
            </div>
          </div>
        </div>
      </div>

      <h2>Curriculum Summary</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Module</th>
              <th className="text-left">Title</th>
              <th className="text-center">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>AI Fundamentals & Digital Readiness</td><td className="text-center">4</td></tr>
            <tr><td>2</td><td>Applied AI Tools</td><td className="text-center">5</td></tr>
            <tr><td>3</td><td>Technical Support & Troubleshooting</td><td className="text-center">4</td></tr>
            <tr><td>4</td><td>Workflow Automation</td><td className="text-center">4</td></tr>
            <tr><td>5</td><td>Customer-Facing Service & Support</td><td className="text-center">3</td></tr>
            <tr><td>6</td><td>BrandVoice Support Simulations</td><td className="text-center">2</td></tr>
            <tr><td>7</td><td>Workforce & Professional Skills</td><td className="text-center">2</td></tr>
            <tr className="bg-blue-50 font-bold"><td colSpan={2}>TOTAL PROGRAM HOURS</td><td className="text-center text-blue-700">24</td></tr>
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mt-8 not-prose">
        <h3 className="font-bold text-amber-900 mb-2">Important Note</h3>
        <p className="text-amber-800 leading-relaxed">
          This curriculum is designed to remain at or below 24 total instructional
          hours to qualify for Texas career school licensing exemption. Additional support and training
          levels are available to students after certificate completion at no extra cost, but occur
          outside this core curriculum.
        </p>
      </div>
    </DocumentLayout>
  );
}
