import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function AppealLanguagePage() {
  return (
    <DocumentLayout title="Workforce Board Appeal Language" section="Section 16" subtitle="Value Statement for ETPL Approval">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 not-prose text-white shadow-lg shadow-blue-500/20">
        <h2 className="text-2xl font-bold mb-4">Program Value Statement</h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          The <strong className="text-white">AI Capability Specialist Certificate</strong> represents a strategic investment
          in regional workforce development that delivers maximum value to WIOA participants through
          intensive training, premium AI tools, guaranteed employer pathways, and continued support
          until employment.
        </p>
      </div>

      <h2>Strategic Workforce Investment</h2>
      <p>
        The $8,000 program cost represents exceptional value when considering the complete package
        delivered to participants. Unlike traditional programs that end at certificate completion,
        this program continues supporting participants — at no additional cost — until they secure
        employment. This employment-focused model maximizes the return on workforce investment
        dollars.
      </p>

      <h2>Comprehensive Value Package</h2>
      <p>Participants receive far more than 24 hours of instruction:</p>

      <div className="space-y-4 my-6 not-prose">
        {[
          {
            title: "Intensive 24-Hour Credential",
            value: "$2,400",
            desc: "Concentrated, high-impact training designed for maximum skill acquisition in minimal time",
            color: "blue"
          },
          {
            title: "Premium AI Tool Suite",
            value: "$1,800",
            desc: "Access to industry-standard AI platforms including Replit, Nano Banana, VEO 3, and Kling — tools that would cost participants hundreds per month individually",
            color: "violet"
          },
          {
            title: "BrandVoice Employment Pipeline",
            value: "$1,500",
            desc: "Guaranteed interview pathway with a growing AI technology company, eliminating the uncertainty of job search",
            color: "indigo"
          },
          {
            title: "Free Additional Training",
            value: "$1,500",
            desc: "Continued skill development through Level 2-4 training at no extra cost until employment is secured",
            color: "purple"
          },
          {
            title: "Complete Career Services",
            value: "$800",
            desc: "Resume development, interview preparation, and job placement support until hired",
            color: "emerald"
          }
        ].map((item) => (
          <div key={item.title} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color === 'emerald' ? 'green' : item.color}-50/50 rounded-xl p-5 border border-${item.color}-200`}>
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-bold text-slate-900">{item.title}</h4>
              <span className={`text-${item.color}-700 font-bold`}>{item.value}</span>
            </div>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Direct Workforce Alignment</h2>
      <p>
        This program targets high-demand occupations identified in regional and state labor market
        analyses. Computer User Support Specialists (SOC 15-1232) remain among the most sought-after
        technical positions across Texas, with the integration of AI tools into business operations
        creating additional demand for workers who can bridge traditional IT support and emerging AI
        capabilities. Our curriculum was developed through direct consultation with BrandVoice,
        ensuring graduates possess the specific competencies employers need today.
      </p>

      <h2>Guaranteed Employment Pipeline</h2>
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 my-6 border border-indigo-200 not-prose">
        <p className="text-slate-700">
          Unlike programs that leave graduates to navigate the job market independently, the AI Capability
          Specialist Certificate includes a formal partnership with BrandVoice providing qualified graduates
          with <strong>guaranteed interview opportunities within 30 days</strong> of completion. This direct
          employer connection significantly increases the probability of employment outcomes and dramatically
          reduces time-to-employment for WIOA participants.
        </p>
      </div>

      <h2>Support Until Employment</h2>
      <p>
        Perhaps most importantly, our commitment doesn't end at certificate completion. Graduates who
        haven't yet secured employment continue receiving:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { title: "Level 2 Skills Labs", desc: "Extended practice with AI tools and workflows" },
          { title: "Level 3 Portfolio Projects", desc: "Work samples that demonstrate capabilities to employers" },
          { title: "Level 4 Apprenticeship Track", desc: "Supervised work on real BrandVoice projects" },
          { title: "Ongoing Career Coaching", desc: "Job search support, interview prep, and placement services" }
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        All of this continues <strong>at no additional cost</strong> until the participant is employed.
        This model ensures workforce investment produces actual employment outcomes, not just credentials.
      </p>

      <h2>Licensing-Exempt Efficiency</h2>
      <p>
        The 24-hour intensive format qualifies for Texas career school licensing exemption under
        Texas Education Code, Section 132.002(a)(8). This allows us to focus resources on instruction,
        tools, and support rather than administrative overhead — delivering more value directly to
        participants.
      </p>

      <h2>Ideal for WIOA Participants</h2>
      <p>This program is specifically designed to serve workforce development populations:</p>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { title: "Rapid Credential", desc: "24-hour intensive format allows completion in days, not months, getting participants job-ready quickly" },
          { title: "Maximum Value", desc: "At $8,000, participants receive tools, training, employer access, and support worth significantly more" },
          { title: "High ROI", desc: "Target occupations offer median wages of $38,000-$77,000, providing sustainable income" },
          { title: "Guaranteed Interview", desc: "Direct employer pathway removes job search uncertainty that often derails workforce participants" },
          { title: "Continued Support", desc: "Free additional training and services continue until employment, ensuring no participant is left behind" }
        ].map((item) => (
          <div key={item.title} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Labor Market Demand</h2>
      <p>
        All five aligned occupations (SOC 15-1232, 43-4051, 15-1299, 43-9021, 13-1199) show strong
        demand in Texas labor markets. The rapid integration of AI across industries is creating
        unprecedented demand for workers who understand both traditional support functions and
        modern AI tools — exactly what this program delivers.
      </p>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mt-10 not-prose text-white shadow-lg">
        <h3 className="text-xl font-bold mb-4">Our Commitment to Workforce Outcomes</h3>
        <p className="text-emerald-100 mb-4">
          The AI Capability Specialist Certificate delivers exceptional value to workforce system
          participants through a unique combination of:
        </p>
        <div className="grid md:grid-cols-2 gap-2 mb-4">
          {[
            "Intensive, job-focused training",
            "Premium AI tools for modern workplaces",
            "Guaranteed employer interview pathway",
            "Free continued training until employment",
            "Comprehensive career services until hired"
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-emerald-100">
              <span className="text-emerald-300">✓</span>
              {item}
            </div>
          ))}
        </div>
        <p className="text-white font-semibold">
          We measure success by employment outcomes, not certificates issued. We respectfully
          request approval for inclusion on the Eligible Training Provider List.
        </p>
      </div>
    </DocumentLayout>
  );
}
