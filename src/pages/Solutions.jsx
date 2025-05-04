import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Solutions = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const solutionLevels = [
    { id: 'all', name: 'All Solutions' },
    { id: 'individual', name: 'Individual Level' },
    { id: 'community', name: 'Community Level' },
    { id: 'policy', name: 'Policy Level' },
    { id: 'system', name: 'System Level' },
  ];

  const solutions = [
    {
      id: 1,
      title: 'Digital Wellness Frameworks',
      description:
        'Implementing platform-level interventions that promote healthier usage patterns and discourage addictive behaviors.',
      level: 'system',
      leveragePoint: 'Information Flows',
      systemicInsight:
        'Social media platforms designed for engagement rather than connection create reinforcing loops of anxiety.',
      impact: 'high',
    },
    {
      id: 2,
      title: 'Urban Green Space Initiative',
      description:
        'Mandating minimum green space requirements in urban development to improve mental wellbeing through nature connection.',
      level: 'policy',
      leveragePoint: 'Physical Structure',
      systemicInsight: 'Physical environment significantly impacts mental states and social connection opportunities.',
      impact: 'medium',
    },
    {
      id: 3,
      title: 'Community Connection Centers',
      description:
        'Establishing tech-free zones in neighborhoods that foster in-person connection and belonging among youth.',
      level: 'community',
      leveragePoint: 'Social Networks',
      systemicInsight: 'Lack of physical third places contributes to digital dependence and isolation.',
      impact: 'high',
    },
    {
      id: 4,
      title: 'Mindfulness in Education',
      description:
        'Integrating evidence-based mindfulness practices into school curricula to build resilience and emotional regulation.',
      level: 'community',
      leveragePoint: 'Skills Development',
      systemicInsight: 'Current educational models prioritize achievement over wellbeing, creating stress cycles.',
      impact: 'medium',
    },
    {
      id: 5,
      title: 'Economic Security Programs',
      description:
        'Expanding youth employment, affordable housing, and financial support to reduce economic stressors.',
      level: 'policy',
      leveragePoint: 'Economic Structure',
      systemicInsight: 'Financial precarity creates chronic stress that significantly impacts mental health outcomes.',
      impact: 'high',
    },
    {
      id: 6,
      title: 'Digital Literacy Training',
      description:
        'Teaching youth to critically evaluate online content and develop healthier relationships with technology.',
      level: 'individual',
      leveragePoint: 'Information Interpretation',
      systemicInsight:
        'Improving how individuals process digital information can break harmful comparison loops.',
      impact: 'medium',
    },
    {
      id: 7,
      title: 'Mental Health First Aid',
      description:
        'Training community members to recognize and respond to mental health challenges before they escalate.',
      level: 'community',
      leveragePoint: 'Early Intervention',
      systemicInsight: 'Delays in recognizing problems allow reinforcing feedback loops to strengthen.',
      impact: 'medium',
    },
    {
      id: 8,
      title: 'Systems Thinking Education',
      description:
        'Teaching youth to understand complex systems and their role within them to build agency and reduce helplessness.',
      level: 'individual',
      leveragePoint: 'Mental Models',
      systemicInsight: 'How individuals conceptualize problems affects their ability to respond effectively.',
      impact: 'medium',
    },
    {
      id: 9,
      title: 'Mental Health Integration Policy',
      description:
        'Requiring mental health considerations in all urban planning, education, and technology policy decisions.',
      level: 'system',
      leveragePoint: 'Rules & Governance',
      systemicInsight:
        'Siloed approaches fail to address the interconnected nature of mental health determinants.',
      impact: 'high',
    },
  ];

  const filteredSolutions = selectedLevel === 'all'
    ? solutions
    : solutions.filter((solution) => solution.level === selectedLevel);

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

  const levelColors = {
    individual: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-500', icon: '👤' },
    community: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-500', icon: '🏘️' },
    policy: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-500', icon: '📜' },
    system: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-500', icon: '🔄' },
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] min-h-screen py-16 sm:py-20 mt-6">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-[#1F2937] mb-4 tracking-tight bg-clip-text text-transparent bg-black mt-3"
            variants={containerVariants}
          >
            System-Level Solutions
          </motion.h1>
          <motion.p
            className="text-lg text-[#4B5563] mx-auto max-w-3xl leading-relaxed"
            variants={containerVariants}
          >
            Addressing mental health issues among urban youth requires interventions at multiple levels
            of the system.
          </motion.p>
        </motion.div>

        {/* Filter Options */}
        <motion.div className="mb-10" variants={containerVariants}>
          <div className="flex flex-wrap justify-center gap-3">
            {solutionLevels.map((level) => (
              <motion.button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm ${
                  selectedLevel === level.id
                    ? 'bg-[#7f5af0] text-white shadow-md'
                    : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#EDE9FE] hover:text-[#7f5af0] hover:border-[#7f5af0]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {level.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {filteredSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 ${
                solution.impact === 'high' ? 'border-[#7f5af0]' : 'border-[#FBBF24]'
              } transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}
              variants={cardVariants}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">{solution.title}</h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium flex items-center ${
                      levelColors[solution.level].bg
                    } ${levelColors[solution.level].text}`}
                  >
                    <span className="mr-1">{levelColors[solution.level].icon}</span>
                    {solution.level.charAt(0).toUpperCase() + solution.level.slice(1)}
                  </span>
                </div>
                <p className="text-[#4B5563] mb-5 leading-relaxed">{solution.description}</p>
                <div className="bg-[#F9FAFB] p-4 rounded-xl border border-[#E5E7EB]">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-[#1F2937] flex items-center">
                      <span className="w-4 h-4 inline-flex items-center justify-center bg-[#7f5af0] text-white rounded-full mr-2 text-xs">✓</span>
                      Leverage Point:
                    </span>
                    <span className="text-sm text-[#4B5563] ml-6">{solution.leveragePoint}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#1F2937] flex items-center">
                      <span className="w-4 h-4 inline-flex items-center justify-center bg-[#7f5af0] text-white rounded-full mr-2 text-xs">✓</span>
                      Systemic Insight:
                    </span>
                    <p className="text-sm text-[#4B5563] ml-6 mt-1 leading-relaxed">{solution.systemicInsight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Implementation Framework */}
        <motion.section className="mt-16" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-8 text-center">
            Implementation Framework
          </h2>
          <motion.div
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#E5E7EB] relative overflow-hidden"
            variants={cardVariants}
          >
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#7f5af0]/10 to-[#6366F1]/20 rounded-full filter blur-3xl"></div>
            
            <p className="text-[#4B5563] mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              For maximum impact, solutions should be implemented with attention to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'Interconnections',
                  desc: 'Recognize how different interventions support and amplify each other across system levels.',
                  icon: '🔄',
                },
                {
                  title: 'Feedback Delays',
                  desc: 'Understand that system-level changes may take time to show visible effects.',
                  icon: '⏳',
                },
                {
                  title: 'Participatory Approach',
                  desc: 'Include youth voices in design and implementation of all solutions.',
                  icon: '👥',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#EDE9FE] to-[#E0E7FF] p-6 rounded-xl border border-[#DDD6FE] shadow-md transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  variants={cardVariants}
                >
                  <div className="text-3xl mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#7f5af0] mb-3 text-center">{item.title}</h3>
                  <p className="text-[#4B5563] leading-relaxed text-center">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Leverage Points */}
        <motion.section className="mt-16" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-8 text-center">
            Understanding Leverage Points
          </h2>
          <motion.div
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#E5E7EB] relative overflow-hidden"
            variants={cardVariants}
          >
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#7f5af0]/10 to-[#6366F1]/20 rounded-full filter blur-3xl"></div>
            
            <p className="text-[#4B5563] mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              Based on Donella Meadows' framework, leverage points are places in a system where small
              changes can lead to big shifts. From least to most effective:
            </p>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  name: 'Parameters',
                  desc: 'Numbers and factors that rarely change system behavior significantly',
                  size: 'w-6 h-6',
                  color: 'bg-gradient-to-r from-gray-300 to-gray-400',
                  effectiveness: '20%',
                },
                {
                  name: 'Information Flows',
                  desc: "The structure of who does and doesn't have access to information",
                  size: 'w-8 h-8',
                  color: 'bg-gradient-to-r from-gray-400 to-gray-500',
                  effectiveness: '40%',
                },
                {
                  name: 'Rules',
                  desc: 'Policies and laws that govern the system',
                  size: 'w-10 h-10',
                  color: 'bg-gradient-to-r from-gray-500 to-gray-600',
                  effectiveness: '60%',
                },
                {
                  name: 'Goals',
                  desc: 'The purpose or function of the system',
                  size: 'w-12 h-12',
                  color: 'bg-gradient-to-r from-gray-600 to-gray-700',
                  effectiveness: '80%',
                },
                {
                  name: 'Mental Models',
                  desc: 'The mindsets out of which the system arises',
                  size: 'w-14 h-14',
                  color: 'bg-gradient-to-r from-[#7f5af0] to-[#6366F1]',
                  effectiveness: '100%',
                },
              ].map((point, index) => (
                <motion.div key={index} className="flex items-center" variants={cardVariants}>
                  <div className={`flex-shrink-0 ${point.size} ${point.color} rounded-full mr-4 shadow-md flex items-center justify-center text-white font-bold`}>
                    {point.effectiveness}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2937] text-lg mb-1">{point.name}</h3>
                    <p className="text-[#4B5563] leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

export default Solutions;