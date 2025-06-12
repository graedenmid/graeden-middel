const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Challenge and Goal Tracking Web App",
      description:
        "Data analysis project using machine learning to identify customer segments and improve targeting strategies. Built with Cursor AI.",
      link: "https://challengetracker-seven.vercel.app/",
      github: "https://github.com/graedenmid/challengetracker",
      tech: ["TypeScript", "React", "Tailwind CSS"],
    },
    {
      id: 2,
      name: "Online Resume",
      description:
        "Built with Cursor - A very simple and straightforward static online resume showcasing my skills, experience, and projects. Built with Cursor AI.",
      link: "https://graedenmid.github.io/resume/",
      github: "https://github.com/graedenmid/resume",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      name: "Platform Jumper",
      description:
        "Online platform jumping game built with HTML, CSS, and JavaScript. The player must jump up to new platforms and avoid obstacles to reach the end of the platform. Built with Cursor AI.",
      link: "https://graedenmid.github.io/platform-jumper/",
      github: "https://github.com/graedenmid/platform-jumper",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      name: "Budget Simple",
      description:
        "IN PROGRESS - only links to database test - Online personal budgeting web app to help people track their personal finances, budget their spending, and reach their financial goals. Built with Cursor AI.",
      link: "https://budget-simple.vercel.app/test-db",
      github: "https://github.com/graedenmid/budget-simple",
      tech: ["Next.js", "TensorFlow", "D3.js"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 mb-12 text-center max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in sales
            operations, data analysis, and strategic solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-primary transition-colors"
                        aria-label={`View ${project.name} project`}
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 text-primary hover:text-blue-600 font-medium transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg flex-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>View Project</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center space-x-2 text-neutral-500 font-medium bg-neutral-100 px-4 py-2 rounded-lg flex-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>In Progress</span>
                      </span>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 text-neutral-700 hover:text-neutral-900 font-medium transition-colors border border-neutral-300 hover:border-neutral-400 px-4 py-2 rounded-lg flex-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
