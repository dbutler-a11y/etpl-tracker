import { Building2, Users, TrendingUp, Handshake, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PartnersSection() {
  const workforceBoardBenefits = [
    {
      icon: CheckCircle2,
      title: "ETPL Eligible",
      description: "Approved on the Eligible Training Provider List for WIOA funding",
    },
    {
      icon: CheckCircle2,
      title: "WIOA Compliant",
      description: "Fully compliant with all Texas Workforce Commission requirements",
    },
    {
      icon: CheckCircle2,
      title: "Outcome-Focused",
      description: "Guaranteed interview pathway and job placement support",
    },
    {
      icon: CheckCircle2,
      title: "Transparent Reporting",
      description: "Detailed tracking and reporting on student progress and outcomes",
    },
  ];

  const employerBenefits = [
    {
      icon: Users,
      title: "Ready-to-Hire Talent",
      description: "Access to graduates trained in the latest AI content creation tools",
    },
    {
      icon: TrendingUp,
      title: "Customized Training",
      description: "Tailored curriculum to meet your specific workforce needs",
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Collaborate with us to create your ideal hiring pipeline",
    },
    {
      icon: Building2,
      title: "Reduced Hiring Risk",
      description: "Interview pre-vetted candidates with proven skills and certification",
    },
  ];

  return (
    <section id="partners" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join workforce boards, employers, and investors in building the future of AI-skilled talent
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Workforce Boards */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">For Workforce Boards</CardTitle>
              <CardDescription className="text-base">
                Partner with a trusted ETPL provider committed to workforce development excellence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {workforceBoardBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary mt-0.5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Program Highlights:</span>
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>24-hour certificate program (TWC exempt)</li>
                  <li>SOC Code: 15-1232 - Computer User Support Specialists</li>
                  <li>High-demand career pathway in AI content creation</li>
                  <li>Ongoing support until employment secured</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <Button className="w-full sm:w-auto" size="lg" disabled>
                  <Handshake className="w-5 h-5" />
                  Partner with Us
                </Button>
                <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Coming Soon — Q1 2026
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Employers & Investors */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">For Employers & Investors</CardTitle>
              <CardDescription className="text-base">
                Build your talent pipeline or invest in the future of workforce development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {employerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary mt-0.5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Partnership Opportunities Include:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                  <li>Direct access to trained AI content specialists</li>
                  <li>Custom curriculum development for your needs</li>
                  <li>Exclusive hiring events and candidate showcases</li>
                  <li>Investment opportunities in growing workforce development</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <Button className="w-full sm:w-auto" size="lg" disabled>
                  <TrendingUp className="w-5 h-5" />
                  Explore Opportunities
                </Button>
                <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Coming Soon — Q1 2026
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Partner with the Institute for AI Innovation?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to create opportunities, build talent pipelines,
            and drive innovation in AI workforce development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-white"
            >
              Schedule a Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white hover:bg-white/10 border-white"
            >
              Download Partnership Info
            </Button>
          </div>
          <p className="text-sm text-white/80 mt-6">
            Questions? Email us at{" "}
            <a href="mailto:partnerships@instituteforaiinnovation.org" className="underline hover:text-white">
              partnerships@instituteforaiinnovation.org
            </a>
            {" "}or call{" "}
            <a href="tel:+17139034699" className="underline hover:text-white">
              (713) 903-4699
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
