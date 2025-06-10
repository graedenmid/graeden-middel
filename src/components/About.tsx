import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <p className="text-lg text-neutral-600 leading-relaxed">
                I am a dedicated Sales and Operations Analyst passionate about
                turning complex data into actionable insights to drive business
                growth. With experience in high-growth SaaS environments, I
                specialize in sales operations, incentive compensation, and data
                analysis, using tools like Excel, PowerBI, SQL, and HubSpot to
                optimize processes and decision-making. I leverage AI and LLM
                tools like Cursor AI to streamline code-building and enhance
                efficiency. My collaborative approach enables me to work
                effectively with cross-functional teams, delivering CRM
                optimizations and revenue forecasting that boost sales pipeline
                activity. Detail-oriented and goal-driven, I excel in dynamic
                settings, applying critical thinking to support strategic
                objectives.
              </p>

              <p className="text-lg text-neutral-600 leading-relaxed">
                My leadership and advocacy skills, developed through managing a
                political campaign with over 200 volunteers and serving on
                Western University&apos;s Students&apos; Council, have honed my
                organizational, communication, and multitasking abilities.
                Holding a Bachelor of Science in Microbiology and Immunology
                from Western University, I combine analytical rigor with a drive
                to expand my expertise in data visualization using PowerBI and
                Python. I am eager to contribute to innovative teams while
                pursuing opportunities for growth and impact.
              </p>
            </div>

            {/* Photo and Info */}
            <div className="flex flex-col items-center space-y-8">
              {/* Professional photo */}
              <div className="w-80 h-80 rounded-xl shadow-lg overflow-hidden bg-neutral-100 relative">
                <Image
                  src="/profile.png"
                  alt="Graeden Middel - Professional Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Quick Stats */}
              <div className="w-full max-w-sm bg-neutral-50 rounded-lg p-6 space-y-4">
                <h4 className="text-lg font-semibold text-neutral-900 text-center mb-4">
                  Quick Stats
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-neutral-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-primary">8+</div>
                    <div className="text-sm text-neutral-600">
                      Key Tools Mastered
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="w-full max-w-sm bg-gradient-to-br from-primary/5 to-blue-50 rounded-lg p-6 border border-primary/10">
                <h4 className="text-lg font-semibold text-neutral-900 mb-4 text-center">
                  Let&apos;s Connect
                </h4>
                <div className="space-y-3">
                  <a
                    href="mailto:graedenmiddel@gmail.com"
                    className="flex items-center space-x-3 text-neutral-600 hover:text-primary transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">Email Me</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/graedenmiddel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-neutral-600 hover:text-primary transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <a
                href="/graeden-middel-resume.pdf"
                download
                className="btn-primary inline-flex items-center space-x-2 w-full max-w-sm justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Key Skills - Full Width Section */}
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Key Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 bg-neutral-50 rounded-lg p-4 hover:bg-primary/5 transition-colors">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-neutral-700 font-medium">
                  Data Analysis and Visualization
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-neutral-50 rounded-lg p-4 hover:bg-primary/5 transition-colors">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-neutral-700 font-medium">
                  Forecasting and Reporting
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-neutral-50 rounded-lg p-4 hover:bg-primary/5 transition-colors">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-neutral-700 font-medium">
                  Process Improvement
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-neutral-50 rounded-lg p-4 hover:bg-primary/5 transition-colors">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-neutral-700 font-medium">
                  CRM Optimization
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-neutral-50 rounded-lg p-4 hover:bg-primary/5 transition-colors">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-neutral-700 font-medium">
                  Incentive Compensation Management
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-neutral-50 rounded-lg p-4 hover:bg-primary/5 transition-colors">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-neutral-700 font-medium">
                  Cross-Functional Collaboration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
