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
                I'm a dedicated Sales Operations and Strategy Analyst with a
                passion for transforming data into actionable insights that
                drive business success. My expertise lies in optimizing sales
                processes, analyzing performance metrics, and developing
                strategic recommendations.
              </p>

              <p className="text-lg text-neutral-600 leading-relaxed">
                With a strong analytical mindset and attention to detail, I
                excel at identifying opportunities for improvement and
                implementing data-driven solutions. I enjoy working with
                cross-functional teams to streamline operations and enhance
                overall sales effectiveness.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-900">
                  Key Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-neutral-600">Sales Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-neutral-600">Strategic Planning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-neutral-600">
                      Process Optimization
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-neutral-600">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo and Resume */}
            <div className="flex flex-col items-center space-y-8">
              {/* Placeholder for professional photo */}
              <div className="w-64 h-64 bg-neutral-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="text-sm">Professional Photo</p>
                </div>
              </div>

              {/* Resume Download */}
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center space-x-2"
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
        </div>
      </div>
    </section>
  );
};

export default About;
