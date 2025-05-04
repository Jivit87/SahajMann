import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight.tsx";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="bg-white min-h-screen w-full overflow-hidden">
      {/* Hero Section with White Background */}
      <HeroHighlight containerClassName="py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-2 sm:px-4 lg:px-6 bg-white relative w-full">
        <motion.div
          className="w-full max-w-full mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="inline-block p-1 px-3 mb-4 sm:mb-6 rounded-full bg-purple-100 text-purple-700 font-medium text-xs sm:text-sm leading-relaxed md:mt-[80px]"
            variants={fadeInUpVariants}
          >
            SAHAJMANN Research Project
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-800 mb-4 sm:mb-10 tracking-tight leading-normal sm:leading-tight lg:leading-tight px-2 sm:px-0 whitespace-normal sm:whitespace-nowrap w-full"
            variants={fadeInUpVariants}
          >
            <Highlight>Mental Health Crisis</Highlight> Among Urban Youth
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-loose sm:leading-10 mb-6 sm:mb-8 px-2 sm:px-4"
            variants={fadeInUpVariants}
          >
            A systems thinking approach to understanding and addressing the rise
            of <Highlight>anxiety and depression</Highlight> in young people
            living in urban environments.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-20 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 px-4"
            variants={fadeInUpVariants}
          >
            <Link
              to="/research"
              className="px-6 py-3 sm:px-8 md:px-10 sm:py-3 md:py-4 bg-[#7f5af0] text-white rounded-lg font-medium hover:bg-[#6842e6] transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg text-center transform hover:-translate-y-1 inline-block max-w-xs"
            >
              Explore Research
            </Link>
            <Link
              to="/dashboard"
              className="px-6 py-3 sm:px-8 md:px-10 sm:py-3 md:py-4 bg-white border border-[#7f5af0] rounded-lg font-medium hover:bg-[#f3f0ff] hover:border-[#6842e6] transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base md:text-lg text-center transform hover:-translate-y-1 inline-block max-w-xs text-[#7f5af0]"
            >
              View Data Dashboard
            </Link>
          </motion.div>
        </motion.div>
      </HeroHighlight>

      {/* Key Issues Section */}
      <motion.section
        className="py-10 sm:py-16 md:py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-2 sm:mb-4"
            variants={fadeInUpVariants}
          >
            Key Issues
          </motion.h2>

          <motion.p
            className="text-sm sm:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed px-2 sm:px-4"
            variants={fadeInUpVariants}
          >
            Understanding the complex factors contributing to declining mental
            health
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 px-2 sm:px-0">
            {[
              {
                title: "Rising Anxiety Rates",
                description:
                  "Youth anxiety rates have increased by 52% over the last decade in urban areas.",
                icon: "📈",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Depression & Isolation",
                description:
                  "Despite hyperconnectivity, urban youth report increasing feelings of isolation and depression.",
                icon: "🔄",
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "Systemic Causes",
                description:
                  "Individual treatments aren't addressing the root causes embedded in our social systems.",
                icon: "🧩",
                color: "bg-orange-100 text-orange-600",
              },
            ].map((issue, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div
                  className={`mb-3 sm:mb-6 inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl ${issue.color} text-lg sm:text-2xl group-hover:scale-110 transition-all duration-300`}
                >
                  {issue.icon}
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-3">
                  {issue.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-base md:text-lg leading-relaxed">
                  {issue.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Systems Thinking Approach */}
      <motion.section
        className="py-10 sm:py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-2 sm:mb-4"
            variants={fadeInUpVariants}
          >
            Our Systems Thinking Approach
          </motion.h2>

          <motion.p
            className="text-sm sm:text-lg md:text-xl text-center text-gray-600 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
            variants={fadeInUpVariants}
          >
            We utilize causal loop diagrams, systems archetypes, and data
            analysis to uncover the interconnected factors driving mental health
            issues.
          </motion.p>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
            {[
              {
                title: "Research Insights",
                description:
                  "In-depth analysis of recent studies on youth mental health",
                link: "/research",
                color: "bg-blue-500",
                textColor: "text-blue-600",
                borderColor: "border-blue-100",
                hoverColor: "group-hover:text-blue-700",
              },
              {
                title: "Causal Loop Diagrams",
                description: "Visualizing feedback loops and system dynamics",
                link: "/cld",
                color: "bg-green-500",
                textColor: "text-green-600",
                borderColor: "border-green-100",
                hoverColor: "group-hover:text-green-700",
              },
              {
                title: "EPS Analysis",
                description: "Events, Patterns and Structural insights",
                link: "/eps-analysis",
                color: "bg-purple-500",
                textColor: "text-purple-600",
                borderColor: "border-purple-100",
                hoverColor: "group-hover:text-purple-700",
              },
              {
                title: "Solutions",
                description: "Leverage points and system interventions",
                link: "/solutions",
                color: "bg-teal-500",
                textColor: "text-teal-600",
                borderColor: "border-teal-100",
                hoverColor: "group-hover:text-teal-700",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white p-3 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border ${item.borderColor} relative overflow-hidden group`}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div
                  className={`absolute top-0 right-0 h-12 sm:h-20 md:h-24 w-12 sm:w-20 md:w-24 -mr-3 sm:-mr-6 md:-mr-8 -mt-3 sm:-mt-6 md:-mt-8 rounded-full ${item.color} opacity-10 group-hover:opacity-15 transition-opacity duration-300`}
                ></div>

                <Link to={item.link} className="block h-full">
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                  <span
                    className={`${item.textColor} font-medium ${item.hoverColor} transition-colors duration-200 inline-flex items-center text-xs sm:text-base`}
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 sm:h-5 sm:w-5 ml-1 group-hover:ml-2 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 text-center px-2 sm:px-4"
            variants={fadeInUpVariants}
          >
            <Link
              to="/about"
              className="inline-flex items-center px-5 sm:px-8 py-2 sm:py-3 rounded-lg bg-[#7f5af0] text-white font-medium hover:bg-[#6842e6] transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Meet Our Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
