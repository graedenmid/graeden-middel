const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities,
            collaborations, or just connecting with fellow professionals. Feel
            free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Email */}
            <a
              href="mailto:graedenmiddel@gmail.com"
              className="flex items-center space-x-3 bg-neutral-50 hover:bg-primary/5 border border-neutral-200 hover:border-primary/20 rounded-lg px-6 py-4 transition-all duration-200 group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-primary"
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
              </div>
              <div className="text-left">
                <p className="font-medium text-neutral-900">Email</p>
                <p className="text-neutral-600">graedenmiddel@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/graedenmiddel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-neutral-50 hover:bg-primary/5 border border-neutral-200 hover:border-primary/20 rounded-lg px-6 py-4 transition-all duration-200 group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium text-neutral-900">LinkedIn</p>
                <p className="text-neutral-600">Connect with me</p>
              </div>
            </a>
          </div>

          <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
            <p className="text-neutral-600">
              Looking for a dedicated professional to optimize your sales
              operations? I&apos;d love to discuss how I can contribute to your
              team&apos;s success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
