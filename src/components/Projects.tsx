const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Sales Dashboard Analytics",
      description:
        "Built with Cursor - Interactive dashboard for real-time sales performance tracking and KPI visualization.",
      link: "https://github.com/example/sales-dashboard",
      tech: ["React", "TypeScript", "Chart.js"],
    },
    {
      id: 2,
      name: "Process Automation Tool",
      description:
        "Self-written Python script to automate repetitive sales operations tasks and generate weekly reports.",
      link: "https://github.com/example/automation-tool",
      tech: ["Python", "Pandas", "Automation"],
    },
    {
      id: 3,
      name: "Customer Segmentation Model",
      description:
        "Data analysis project using machine learning to identify customer segments and improve targeting strategies.",
      link: "https://github.com/example/customer-segmentation",
      tech: ["Python", "Scikit-learn", "Jupyter"],
    },
    {
      id: 4,
      name: "Sales Forecasting System",
      description:
        "Built with Cursor - Predictive model to forecast sales trends and support strategic planning decisions.",
      link: "https://github.com/example/sales-forecasting",
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

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-blue-600 font-medium transition-colors"
                  >
                    <span>View Project</span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
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
