import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function AIToolsPage() {
  return (
    <DocumentLayout title="AI Tool Access & Value Stack" section="Section 5" subtitle="Premium Generative AI Suite Included">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-violet-500/20">
        <h2 className="text-2xl font-bold mb-4">Professional-Grade AI Tools Included</h2>
        <p className="text-violet-100 text-lg leading-relaxed">
          Every AI Capability Specialist student receives <strong className="text-white">personal access to a premium suite
          of generative AI tools</strong> — the same tools used by professionals in content creation,
          automation, and digital production.
        </p>
      </div>

      <h2>Premium AI Tool Suite</h2>
      <p>
        Students gain hands-on experience with industry-leading AI platforms, building real skills
        with real tools that employers expect their teams to know.
      </p>

      {/* Tool Cards */}
      <div className="space-y-4 my-8 not-prose">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">R</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Replit</h3>
              <p className="text-slate-500">Cloud Development & AI Agents</p>
            </div>
          </div>
          <p className="text-slate-600">
            Cloud-based coding environment for automation development, AI agent creation, and
            collaborative programming. Build functional tools and workflows without complex setup.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">NB</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Nano Banana</h3>
              <p className="text-slate-500">AI Video Generation</p>
            </div>
          </div>
          <p className="text-slate-600">
            High-quality AI video generation for training content, portfolio pieces, and professional
            presentations. Create polished video content without traditional production equipment.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">V3</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">VEO 3</h3>
              <p className="text-slate-500">Cinematic Video Production</p>
            </div>
          </div>
          <p className="text-slate-600">
            Next-generation cinematic video generation and production pipeline. Create professional-quality
            video content with AI-powered tools used in media production.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">K</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Kling</h3>
              <p className="text-slate-500">Text-to-Video & 3D Motion</p>
            </div>
          </div>
          <p className="text-slate-600">
            Advanced text-to-video and 3D motion generation. Transform written concepts into dynamic
            visual content with cutting-edge AI motion synthesis.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">+</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Additional Multimodal Tools</h3>
              <p className="text-slate-500">Voice, Images, Avatars & More</p>
            </div>
          </div>
          <p className="text-slate-600">
            Access to additional AI tools for voice synthesis, image generation, digital avatars,
            automation workflows, and advanced reasoning — a complete multimodal AI toolkit.
          </p>
        </div>
      </div>

      <h2>What This Enables</h2>
      <p>
        With access to this professional AI suite, students develop capabilities that set them apart
        in the job market:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Professional Content Creation</h4>
          <p className="text-sm text-blue-800">
            Produce marketing materials, training videos, and presentation content at professional quality levels.
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">Rapid Prototyping</h4>
          <p className="text-sm text-green-800">
            Quickly build and test automation workflows, chatbots, and AI-powered solutions.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">AI Workflow Design</h4>
          <p className="text-sm text-purple-800">
            Create sophisticated multi-tool workflows that combine different AI capabilities.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Portfolio-Grade Outputs</h4>
          <p className="text-sm text-orange-800">
            Build impressive work samples that demonstrate real capabilities to employers.
          </p>
        </div>
      </div>

      <h2>Value Justification</h2>
      <p>
        Access to professional AI tools represents a significant portion of the program's value:
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 my-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Component</th>
              <th className="text-right">Market Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Premium AI tool subscriptions (6 months)</td>
              <td className="text-right">$500 - $1,500+</td>
            </tr>
            <tr>
              <td>Cloud development environment access</td>
              <td className="text-right">$200 - $500</td>
            </tr>
            <tr>
              <td>Video generation credits</td>
              <td className="text-right">$300 - $800</td>
            </tr>
            <tr>
              <td>Multimodal AI platform access</td>
              <td className="text-right">$400 - $1,000</td>
            </tr>
            <tr className="font-semibold bg-violet-50">
              <td>Estimated Tool Value</td>
              <td className="text-right text-violet-700">$1,400 - $3,800+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        This tool access is <strong>included in the program tuition</strong> — students don't pay
        separately for subscriptions or credits. This removes barriers to learning and ensures
        all students have equal access to professional-grade capabilities.
      </p>

      <h2>Why This Matters for Employment</h2>
      <p>
        Employers hiring for AI-enhanced roles expect candidates to have hands-on experience with
        modern AI tools. Our students don't just learn <em>about</em> AI — they build real proficiency
        with the specific tools they'll use on the job.
      </p>
      <ul>
        <li><strong>Immediate Productivity:</strong> Graduates can contribute from day one using familiar tools</li>
        <li><strong>Demonstrated Skills:</strong> Portfolio pieces prove capabilities, not just course completion</li>
        <li><strong>Current Technology:</strong> Training on today's tools, not yesterday's curriculum</li>
        <li><strong>Competitive Advantage:</strong> Skills that distinguish candidates in the job market</li>
      </ul>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">The Complete AI Toolkit</h3>
        <p className="text-violet-100 leading-relaxed">
          Students leave the program not just with a certificate, but with real experience using
          the AI tools that are transforming how work gets done. This is what employers are looking
          for — and it's all included.
        </p>
      </div>
    </DocumentLayout>
  );
}
