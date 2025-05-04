import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EPSAnalysis = () => {
  const epsData = {
    events: [
      {
        title: 'Increased Therapy Waitlists',
        description: 'Urban mental health clinics reporting 3-6 month waitlists for youth services',
      },
      {
        title: 'School Anxiety Spike',
        description: '55% increase in school counselor referrals for anxiety in the past year',
      },
      {
        title: 'Social Media Crisis',
        description: 'Trending social media movements around youth mental health struggles',
      },
    ],
    patterns: [
      {
        title: 'Cyclical Stress Patterns',
        description:
          'Youth anxiety peaking during academic exam periods, but baseline anxiety increasing year-over-year',
      },
      {
        title: 'Digital Escapism',
        description: 'Increasing average screen time correlating with reported feelings of depression',
      },
      {
        title: 'Urban-Rural Divide',
        description:
          'Consistently higher rates of diagnosed anxiety disorders in dense urban areas compared to suburban and rural regions',
      },
    ],
    structures: [
      {
        title: 'Economic Pressure System',
        description:
          'Rising housing costs forcing families into longer commutes, reducing family time and increasing stress',
        leveragePoints: ['Urban density policies', 'Remote work infrastructure', 'Housing affordability initiatives'],
      },
      {
        title: 'Digital Connection Paradox',
        description:
          'Social media platforms designed to maximize engagement over meaningful connection, creating comparison cycles',
        leveragePoints: ['Platform design regulations', 'Digital literacy education', 'Alternative community spaces'],
      },
      {
        title: 'Academic Pressure Machine',
        description:
          'Educational systems increasingly focused on standardized metrics over holistic development',
        leveragePoints: ['Education reform', 'Well-being curriculum integration', 'Alternative success metrics'],
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] min-h-screen py-16 sm:py-20 mt-9">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-[#1F2937] mb-4 tracking-tight bg-clip-text text-transparent bg-black"
            variants={containerVariants}
          >
            Events-Patterns-Structure Analysis
          </motion.h1>
          <motion.p
            className="text-lg text-[#4B5563] mx-auto max-w-3xl leading-relaxed"
            variants={containerVariants}
          >
            Digging deeper to understand the root causes beneath visible symptoms.
          </motion.p>
        </motion.div>

        {/* EPS Framework Explanation */}
        <motion.section className="mb-16" variants={containerVariants}>
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#E5E7EB] hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-6 text-center">
              Understanding the EPS Framework
            </h2>
            <p className="text-[#4B5563] mb-8 leading-relaxed text-center max-w-4xl mx-auto">
              The Events-Patterns-Structure framework helps us move from reacting to isolated incidents
              (events) to understanding recurring phenomena (patterns) and finally to addressing the
              underlying system structures that create these patterns.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { name: 'Events', desc: 'What we notice happening', color: 'from-red-400 to-red-600', icon: '👁️' },
                { name: 'Patterns', desc: 'Recurring trends over time', color: 'from-amber-400 to-amber-600', icon: '🔄' },
                { name: 'Structures', desc: 'Underlying causes and systems', color: 'from-green-400 to-green-600', icon: '🌱' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  variants={cardVariants}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className={`font-bold mb-3 text-lg bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.name}
                  </div>
                  <p className="text-[#4B5563]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Events */}
        <motion.section className="mb-16" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-8 flex items-center justify-center sm:justify-start">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 text-white flex items-center justify-center mr-3 font-bold shadow-md">
              E
            </span>
            Events: Visible Symptoms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {epsData.events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500 transform hover:-translate-y-1"
                variants={cardVariants}
              >
                <h3 className="text-lg font-semibold text-[#1F2937] mb-3">{event.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Patterns */}
        <motion.section className="mb-16" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-8 flex items-center justify-center sm:justify-start">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center mr-3 font-bold shadow-md">
              P
            </span>
            Patterns: Recurring Trends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {epsData.patterns.map((pattern, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500 transform hover:-translate-y-1"
                variants={cardVariants}
              >
                <h3 className="text-lg font-semibold text-[#1F2937] mb-3">{pattern.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{pattern.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Structures */}
        <motion.section className="mb-16" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-8 flex items-center justify-center sm:justify-start">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center mr-3 font-bold shadow-md">
              S
            </span>
            Structures: Root Causes
          </h2>
          <div className="space-y-6">
            {epsData.structures.map((structure, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 transform hover:-translate-y-1"
                variants={cardVariants}
              >
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">{structure.title}</h3>
                <p className="text-[#4B5563] mb-5 leading-relaxed">{structure.description}</p>
                <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                  <p className="text-sm font-medium text-[#1F2937] mb-3 flex items-center">
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full mr-2 text-xs">✓</span>
                    Leverage Points:
                  </p>
                  <ul className="space-y-2">
                    {structure.leveragePoints.map((point, idx) => (
                      <li key={idx} className="text-[#4B5563] flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Iceberg Model */}
        <motion.section className="mb-16" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-8 text-center">The Iceberg Model</h2>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#E5E7EB] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#E0E7FF]/30 to-[#F9FAFB] opacity-60"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#7f5af0]/10 to-[#6366F1]/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 space-y-5">
              {[
                { level: 'Events (10%)', desc: 'The visible incidents we react to', color: 'from-red-400 to-red-600', offset: 'ml-0' },
                { level: 'Patterns (30%)', desc: 'Trends and behaviors that emerge over time', color: 'from-amber-400 to-amber-600', offset: 'ml-4 sm:ml-8 md:ml-12' },
                { level: 'Structures (60%)', desc: 'The systems, policies, and norms that create patterns', color: 'from-green-400 to-green-600', offset: 'ml-8 sm:ml-16 md:ml-24' },
                { level: 'Mental Models', desc: 'The beliefs, assumptions, and values that create structures', color: 'from-[#7f5af0] to-[#6366F1]', offset: 'ml-12 sm:ml-24 md:ml-36' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-5 rounded-xl shadow-md border border-[#E5E7EB] ${item.offset} max-w-xl hover:shadow-lg transition-all duration-300`}
                  variants={cardVariants}
                >
                  <h3 className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>{item.level}</h3>
                  <p className="text-[#4B5563] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Back to Home Button */}
        <motion.div className="mt-16 text-center" variants={containerVariants}>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-[#7f5af0] text-white rounded-xl font-medium hover:bg-[#6f4dd0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">Back to Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EPSAnalysis;