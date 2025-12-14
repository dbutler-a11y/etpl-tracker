import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function AdditionalLevelsPage() {
  return (
    <DocumentLayout title="Free Additional Training Levels" section="Section 4" subtitle="Continued Support Until Employment">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-purple-500/20">
        <h2 className="text-2xl font-bold mb-4">Unlimited Support Until You're Employed</h2>
        <p className="text-purple-100 text-lg leading-relaxed">
          Students who complete the 24-hour AI Capability Specialist Certificate receive access to
          <strong className="text-white"> additional training levels at no extra cost</strong> until they secure employment.
          This dramatically increases placement potential and program value.
        </p>
      </div>

      <h2>Beyond the 24-Hour Certificate</h2>
      <p>
        While the core AI Capability Specialist Certificate is a complete, self-contained 24-hour
        credential, we recognize that some students benefit from additional skill-building to maximize
        their employment readiness. That's why we offer <strong>free continuing education levels</strong>
        to all certificate completers.
      </p>

      {/* Licensing Note */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 my-6 not-prose">
        <h3 className="font-bold text-amber-900 mb-2">Licensing Exemption Note</h3>
        <p className="text-amber-800 leading-relaxed">
          These optional levels occur <strong>outside</strong> the 24-hour core credential, preserving the program's
          career school licensing exemption status. Participation is voluntary and not required for certificate completion.
        </p>
      </div>

      {/* Level Cards */}
      <div className="space-y-6 my-8 not-prose">
        {/* Level 2 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">L2</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Level 2: Skills Labs</h3>
              <p className="text-slate-600">Extended Hands-On Practice</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">For students who want more practice time with AI tools and workflows.</p>
          <div className="grid md:grid-cols-2 gap-2">
            {["Additional AI tool practice sessions", "Extended troubleshooting scenarios", "Workflow automation deep-dives", "Peer collaboration exercises", "Real-world simulation labs"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Level 3 */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/30">L3</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Level 3: Portfolio Projects</h3>
              <p className="text-slate-600">Build Your Professional Portfolio</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">Create work samples that impress employers and demonstrate real capabilities.</p>
          <div className="grid md:grid-cols-2 gap-2">
            {["AI-assisted content creation projects", "Automation workflow demonstrations", "Technical documentation samples", "Video production using AI tools", "Professional portfolio website development"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Level 4 */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30">L4</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Level 4: Apprenticeship Track</h3>
              <p className="text-slate-600">Real Work Experience</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">Supervised work on actual projects with direct pathway to employment.</p>
          <div className="grid md:grid-cols-2 gap-2">
            {["Supervised work on BrandVoice projects", "Client-facing support experience", "Team collaboration in production environment", "Performance feedback and coaching", "Direct pathway to employment consideration"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>How It Works</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Step</th>
              <th className="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">1. Complete Certificate</td>
              <td>Finish the 24-hour AI Capability Specialist program</td>
            </tr>
            <tr>
              <td className="font-medium">2. Receive Credential</td>
              <td>Earn your Certificate of Completion</td>
            </tr>
            <tr>
              <td className="font-medium">3. Access Additional Levels</td>
              <td>Unlock free access to Levels 2, 3, and 4</td>
            </tr>
            <tr>
              <td className="font-medium">4. Continue Until Employed</td>
              <td>Participate in additional training until you secure a job</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why We Offer This</h2>
      <p>
        Our mission is <strong>employment outcomes</strong>, not just certificate completion. By providing
        ongoing support at no additional cost, we:
      </p>
      <ul>
        <li>Maximize every student's chances of securing employment</li>
        <li>Ensure workforce board investments deliver measurable returns</li>
        <li>Build long-term relationships with graduates who become brand ambassadors</li>
        <li>Create a continuous pipeline of qualified candidates for employer partners</li>
        <li>Demonstrate our commitment to student success beyond the classroom</li>
      </ul>

      <h2>Value for Workforce Boards</h2>
      <p>
        This model provides exceptional value for WIOA-funded participants:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { title: "Single Investment", desc: "One program fee covers initial training plus ongoing support" },
          { title: "Higher Placement Rates", desc: "Extended support increases successful employment outcomes" },
          { title: "Reduced Re-enrollment", desc: "Students don't need additional funded training" },
          { title: "Employer Satisfaction", desc: "Better-prepared candidates strengthen workforce partnerships" },
        ].map((item) => (
          <div key={item.title} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">Our Commitment</h3>
        <p className="text-emerald-100 leading-relaxed">
          We don't stop when you get your certificate. We stop when you get your job. That's the
          AI Capability Specialist difference — unlimited support until employment, included with
          every enrollment.
        </p>
      </div>
    </DocumentLayout>
  );
}
