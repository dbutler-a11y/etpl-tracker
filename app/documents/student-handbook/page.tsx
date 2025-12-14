import { DocumentLayout } from "@/components/documents/DocumentLayout";

export default function StudentHandbookPage() {
  return (
    <DocumentLayout title="Student Handbook" section="Student Materials" subtitle="AI Capability Specialist Certificate - 24-Hour Intensive Program">
      {/* Welcome */}
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-6 not-prose print-section">
        <h2 className="text-xl font-bold text-emerald-900 mb-2">Welcome to the Program!</h2>
        <p className="text-emerald-800">
          Congratulations on taking this important step toward your career in technology. This handbook
          contains essential information about program policies, expectations, and resources available
          to support your success.
        </p>
      </div>

      <section className="print-section">
        <h2>Program Overview</h2>
        <p>
          The AI Capability Specialist Certificate is a 24-hour intensive workforce development credential
          designed to prepare you for technology support roles in AI-enhanced business environments. Upon
          successful completion, you will receive a Certificate of Completion and be eligible for the
          BrandVoice guaranteed interview pathway.
        </p>
      </section>

      <section className="print-section">
        <h3>Program Structure</h3>
        <table className="w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Module</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Topic</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2">1</td><td className="border border-gray-300 px-4 py-2">AI Fundamentals & Digital Readiness</td><td className="border border-gray-300 px-4 py-2 text-center">4</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">2</td><td className="border border-gray-300 px-4 py-2">Applied AI Tools</td><td className="border border-gray-300 px-4 py-2 text-center">5</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">3</td><td className="border border-gray-300 px-4 py-2">Technical Support & Troubleshooting</td><td className="border border-gray-300 px-4 py-2 text-center">4</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">4</td><td className="border border-gray-300 px-4 py-2">Workflow Automation</td><td className="border border-gray-300 px-4 py-2 text-center">4</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">5</td><td className="border border-gray-300 px-4 py-2">Customer-Facing Service & Support</td><td className="border border-gray-300 px-4 py-2 text-center">3</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">6</td><td className="border border-gray-300 px-4 py-2">BrandVoice Support Simulations</td><td className="border border-gray-300 px-4 py-2 text-center">2</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">7</td><td className="border border-gray-300 px-4 py-2">Workforce & Professional Skills</td><td className="border border-gray-300 px-4 py-2 text-center">2</td></tr>
            <tr className="font-bold bg-gray-50"><td className="border border-gray-300 px-4 py-2" colSpan={2}>Total</td><td className="border border-gray-300 px-4 py-2 text-center">24</td></tr>
          </tbody>
        </table>
      </section>

      <section className="print-section">
        <h3>What's Included</h3>
        <ul>
          <li><strong>24-Hour Intensive Training:</strong> Concentrated instruction across 7 modules</li>
          <li><strong>Premium AI Tool Suite:</strong> Access to Replit, Nano Banana, VEO 3, Kling</li>
          <li><strong>BrandVoice Employment Pipeline:</strong> Guaranteed interview within 30 days</li>
          <li><strong>Free Additional Training:</strong> Level 2-4 training until employment</li>
          <li><strong>Career Services:</strong> Resume, interview prep, job placement until hired</li>
        </ul>
      </section>

      <hr />

      <section className="print-section">
        <h2>Attendance Policy</h2>

        <h3>Attendance Requirements</h3>
        <p>Given the intensive 24-hour format, attendance at all sessions is critical:</p>
        <ul>
          <li><strong>Minimum Attendance:</strong> 90% of scheduled hours (21.6 of 24 hours)</li>
          <li><strong>Notification Required:</strong> Notify the instructor immediately of any absence</li>
          <li><strong>Make-Up:</strong> Missed content must be completed before certification</li>
        </ul>

        <h3>Absence Reporting</h3>
        <p>To report an absence:</p>
        <ol>
          <li>Email the Program Coordinator at [email] OR</li>
          <li>Call/text the program phone at [number]</li>
          <li>Provide the reason for absence</li>
        </ol>

        <h3>Attendance Impact</h3>
        <p>
          Because of the condensed format, missing more than 2.4 hours of instruction may affect
          certification eligibility. Students who fall below 90% attendance must complete make-up
          work or may need to enroll in a future cohort.
        </p>
      </section>

      <hr />

      <section className="print-section">
        <h2>Academic Policies</h2>

        <h3>Grading Scale</h3>
        <table className="w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Percentage</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2">A</td><td className="border border-gray-300 px-4 py-2">90-100%</td><td className="border border-gray-300 px-4 py-2">Excellent</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">B</td><td className="border border-gray-300 px-4 py-2">80-89%</td><td className="border border-gray-300 px-4 py-2">Good</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">C</td><td className="border border-gray-300 px-4 py-2">70-79%</td><td className="border border-gray-300 px-4 py-2">Satisfactory (Passing)</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">F</td><td className="border border-gray-300 px-4 py-2">Below 70%</td><td className="border border-gray-300 px-4 py-2">Unsatisfactory (Not Passing)</td></tr>
          </tbody>
        </table>

        <h3>Assessment Methods</h3>
        <p>Student competency is evaluated through:</p>
        <ul>
          <li><strong>Practical Demonstrations:</strong> Hands-on skills assessments</li>
          <li><strong>Lab Exercises:</strong> Applied projects using AI tools</li>
          <li><strong>Scenario-Based Evaluations:</strong> Real-world situation responses</li>
          <li><strong>Portfolio Components:</strong> Work samples demonstrating competencies</li>
        </ul>

        <h3>Passing Requirements</h3>
        <ul>
          <li><strong>Minimum Grade:</strong> 70% average across all assessments</li>
          <li><strong>All Modules:</strong> Each module assessment must be passed</li>
          <li><strong>Reassessment:</strong> One reassessment opportunity per module if initial attempt fails</li>
        </ul>
      </section>

      <hr />

      <section className="print-section">
        <h2>Academic Integrity</h2>
        <p>We maintain high standards of academic integrity. You are expected to:</p>
        <ul>
          <li>Submit original work for all assignments</li>
          <li>Properly cite and attribute all sources</li>
          <li>Not share assessment answers with other students</li>
          <li>Use AI tools only as permitted by assignment guidelines</li>
          <li>Represent your own skills and abilities honestly</li>
        </ul>

        <h3>AI Tool Usage Policy</h3>
        <p>AI tools are an important part of this curriculum. The policy varies by assignment:</p>
        <ul>
          <li><strong>AI-Assisted Assignments:</strong> AI tools may be used freely; disclose usage in your submission</li>
          <li><strong>AI-Restricted Assignments:</strong> AI tools may not be used; tests your independent skills</li>
          <li><strong>AI-Required Assignments:</strong> You must demonstrate proficiency with specific AI tools</li>
        </ul>
        <p>Each assignment will clearly indicate the AI usage policy.</p>

        <h3>Integrity Violations</h3>
        <ul>
          <li><strong>First offense:</strong> Written warning and assignment resubmission</li>
          <li><strong>Second offense:</strong> Failing grade on assignment</li>
          <li><strong>Third offense:</strong> Dismissal from program</li>
        </ul>
      </section>

      <hr />

      <section className="print-section">
        <h2>Student Conduct</h2>
        <p>All students are expected to maintain professional conduct throughout the program:</p>

        <h3>Expected Behaviors</h3>
        <ul>
          <li>Treat instructors, staff, and fellow students with respect</li>
          <li>Participate actively in all sessions and activities</li>
          <li>Arrive to sessions on time and prepared</li>
          <li>Keep camera on during live video sessions when requested</li>
          <li>Complete assignments by stated deadlines</li>
          <li>Communicate professionally in all interactions</li>
        </ul>

        <h3>Prohibited Behaviors</h3>
        <ul>
          <li>Harassment, discrimination, or bullying of any kind</li>
          <li>Disruptive behavior during sessions</li>
          <li>Use of inappropriate language or content</li>
          <li>Sharing or distributing course materials outside the program</li>
          <li>Impersonating another student or staff member</li>
        </ul>

        <h3>Conduct Violations</h3>
        <p>Violations of student conduct standards may result in:</p>
        <ol>
          <li>Verbal warning</li>
          <li>Written warning</li>
          <li>Suspension from sessions</li>
          <li>Dismissal from program</li>
        </ol>
      </section>

      <hr />

      <section className="print-section">
        <h2>Technology Requirements</h2>
        <p>To participate successfully in this program, you need:</p>

        <h3>Hardware</h3>
        <ul>
          <li>Computer (desktop or laptop) with webcam and microphone</li>
          <li>Minimum: 8GB RAM, modern processor (Intel i5/AMD Ryzen 5 or equivalent)</li>
          <li>Reliable internet connection (10+ Mbps recommended)</li>
        </ul>

        <h3>Software</h3>
        <ul>
          <li>Current web browser (Chrome, Firefox, or Edge recommended)</li>
          <li>Video conferencing software (Zoom or Teams)</li>
          <li>Premium AI tools will be provided during the program</li>
        </ul>

        <h3>Technical Support</h3>
        <p>If you experience technical difficulties:</p>
        <ol>
          <li>Contact technical support at [email/phone]</li>
          <li>Notify your instructor if issues affect your participation</li>
          <li>We will help troubleshoot AI tool access issues</li>
        </ol>
      </section>

      <hr />

      <section className="print-section">
        <h2>Premium AI Tool Suite</h2>
        <p>Your program includes access to industry-leading AI platforms:</p>
        <ul>
          <li><strong>Replit:</strong> AI-powered coding and development environment</li>
          <li><strong>Nano Banana:</strong> AI content and creative production platform</li>
          <li><strong>VEO 3:</strong> Advanced video AI generation and editing</li>
          <li><strong>Kling:</strong> AI visual content creation and automation</li>
        </ul>
        <p>
          Access will be activated at the start of the program. These tools are included in your
          program cost and will be available throughout your training and additional levels.
        </p>
      </section>

      <hr />

      <section className="print-section">
        <h2>Student Support Services</h2>

        <h3>During the Program</h3>
        <ul>
          <li><strong>Instructional Support:</strong> Direct access to instructors during sessions</li>
          <li><strong>Technology Support:</strong> Help with AI tool setup and troubleshooting</li>
          <li><strong>Small Cohorts:</strong> Personalized attention and Q&A</li>
          <li><strong>Recorded Sessions:</strong> Access for review if needed</li>
        </ul>

        <h3>Accommodations</h3>
        <p>
          Students with disabilities may request reasonable accommodations. Contact the Program Coordinator
          to discuss your needs. Accommodations may include:
        </p>
        <ul>
          <li>Extended time on assessments</li>
          <li>Alternative assessment formats</li>
          <li>Assistive technology support</li>
        </ul>

        <h3>Career Services</h3>
        <ul>
          <li>Resume writing and optimization</li>
          <li>Mock interview sessions</li>
          <li>LinkedIn profile optimization</li>
          <li>Job search strategy coaching</li>
          <li>BrandVoice interview preparation</li>
        </ul>
      </section>

      <hr />

      <section className="print-section">
        <h2>Grievance Procedure</h2>
        <p>If you have a concern or complaint:</p>

        <h3>Step 1: Informal Resolution</h3>
        <p>Within 5 business days of the issue, discuss the concern with your instructor or the involved party.</p>

        <h3>Step 2: Formal Grievance</h3>
        <p>If unresolved, submit a written grievance to the Program Director within 10 business days. Include:</p>
        <ul>
          <li>Your name and contact information</li>
          <li>Description of the concern</li>
          <li>Dates and individuals involved</li>
          <li>Desired resolution</li>
        </ul>

        <h3>Step 3: Investigation & Response</h3>
        <p>The Program Director will investigate and provide a written response within 15 business days.</p>

        <h3>Step 4: Appeal</h3>
        <p>If unsatisfied with the response, you may appeal to the Executive Director within 5 business days.</p>

        <h3>External Resources</h3>
        <div className="bg-gray-50 p-4 rounded-lg my-4 not-prose print-section">
          <p className="font-semibold">Texas Workforce Commission</p>
          <p className="text-sm text-gray-600">Career Schools and Colleges</p>
          <p className="text-sm text-gray-600">101 East 15th Street, Austin, TX 78778-0001</p>
          <p className="text-sm text-gray-600">Phone: (512) 936-3100</p>
        </div>
      </section>

      <hr />

      <section className="print-section">
        <h2>Certification Requirements</h2>
        <p>To receive your AI Capability Specialist Certificate, you must:</p>
        <ol>
          <li>Complete all 24 program hours</li>
          <li>Achieve minimum 70% on all assessments</li>
          <li>Pass all module assessments</li>
          <li>Maintain minimum 90% attendance (21.6 hours)</li>
          <li>Demonstrate professional conduct</li>
          <li>Complete interview preparation</li>
          <li>Fulfill all financial obligations</li>
        </ol>

        <h3>Certificate Issuance</h3>
        <p>
          Upon meeting all requirements, certificates are issued within 5 business days of program
          completion. Digital certificates include verification credentials.
        </p>
      </section>

      <hr />

      <section className="print-section">
        <h2>BrandVoice Employment Pathway</h2>
        <p>Qualified graduates are eligible for the BrandVoice guaranteed interview pathway:</p>

        <h3>Eligibility Requirements</h3>
        <ul>
          <li>Complete all 24 program hours</li>
          <li>Achieve 90%+ attendance</li>
          <li>Pass all assessments (70%+)</li>
          <li>Demonstrate professional conduct</li>
          <li>Complete resume and interview preparation</li>
        </ul>

        <h3>What You Receive</h3>
        <ul>
          <li>Guaranteed interview with BrandVoice within 30 days of completion</li>
          <li>Priority consideration for matching positions</li>
          <li>Interview preparation support</li>
          <li>Ongoing consideration as positions open</li>
        </ul>

        <p className="italic text-sm mt-4">
          Note: The guaranteed interview pathway provides enhanced employment opportunities but does not
          constitute an absolute guarantee of employment. Placement depends on candidate qualifications,
          available positions, and successful interview performance.
        </p>
      </section>

      <hr />

      <section className="print-section">
        <h2>Free Additional Training Levels</h2>
        <p>
          Graduates receive free access to continued training until they secure employment:
        </p>

        <div className="grid gap-4 my-6 not-prose">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 print-section">
            <h4 className="font-semibold text-blue-900">Level 2: Skills Labs</h4>
            <p className="text-sm text-blue-800">Extended hands-on practice with AI tools and workflows</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 print-section">
            <h4 className="font-semibold text-green-900">Level 3: Portfolio Projects</h4>
            <p className="text-sm text-green-800">Build impressive work samples for employer review</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 print-section">
            <h4 className="font-semibold text-purple-900">Level 4: Apprenticeship Track</h4>
            <p className="text-sm text-purple-800">Supervised work on real BrandVoice projects</p>
          </div>
        </div>

        <p>
          These additional levels continue at no cost until you secure employment. This is part of
          our commitment to your success.
        </p>
      </section>

      <hr />

      <section className="print-section">
        <h2>Important Contacts</h2>
        <table className="w-full border-collapse border border-gray-300 my-4">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Program Coordinator</td>
              <td className="border border-gray-300 px-4 py-3">[Name] | [Email] | [Phone]</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Lead Instructor</td>
              <td className="border border-gray-300 px-4 py-3">[Name] | [Email]</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Career Services</td>
              <td className="border border-gray-300 px-4 py-3">[Name] | [Email] | [Phone]</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Technical Support</td>
              <td className="border border-gray-300 px-4 py-3">[Email] | [Phone]</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Program Director</td>
              <td className="border border-gray-300 px-4 py-3">[Name] | [Email]</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8 not-prose print-section">
        <h3 className="font-bold text-blue-900 mb-2">Handbook Acknowledgment</h3>
        <p className="text-blue-800 text-sm">
          By signing the Enrollment Agreement, you acknowledge that you have received, read, and
          understand the policies contained in this Student Handbook. You agree to abide by all
          policies and procedures outlined herein.
        </p>
      </div>
    </DocumentLayout>
  );
}
