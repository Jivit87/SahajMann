

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cldImage from "../assets/youth_mental_health_model.png";
import sfdImage from "../assets/youth_mental_health_sfd.png"; // Import the SFD image
import { ChevronDown, ChevronUp, Download, Info, ExternalLink, Maximize2 } from 'lucide-react';

const CLD = () => {
  const [activeLoop, setActiveLoop] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('cld'); // Track which diagram is active: 'cld' or 'sfd'
  const [fullscreen, setFullscreen] = useState(false); // Track fullscreen state for diagrams

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect for handling fullscreen mode escape
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && fullscreen) {
        setFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [fullscreen]);

  // Function to download the active diagram
  const downloadImage = () => {
    // Create link element
    const link = document.createElement('a');
    // Set link href based on which diagram is active
    link.href = activeTab === 'cld' ? cldImage : sfdImage;
    // Set download filename based on which diagram is active
    link.download = activeTab === 'cld' ? 'youth_mental_health_cld.png' : 'youth_mental_health_sfd.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Rest of your existing code remains the same
  // ...

  const feedbackLoops = [
    {
      id: 'loop1',
      name: 'Mental Health Support Loop',
      description:
        'A balancing loop where increased mental health awareness leads to more help-seeking behavior, increasing therapy access, which reduces social comparison and improves mental awareness.',
      type: 'Balancing',
      elements: [
        'Mental Awareness',
        'Help-Seeking',
        'Therapy Access',
        'Social Comparison',
        'Mental Awareness',
      ],
    },
    {
      id: 'loop2',
      name: 'Social Media Reinforcing Loop',
      description:
        'As social comparison increases, self-esteem decreases, leading to more anxiety and depression, increasing digital coping, screen time, and further social comparison.',
      type: 'Reinforcing',
      elements: [
        'Social Comparison',
        'Self Esteem',
        'Anxiety & Depression',
        'Digital Coping',
        'Screen Time',
        'Social Comparison',
      ],
    },
    {
      id: 'loop3',
      name: 'Academic Performance Loop',
      description:
        'A reinforcing loop where academic pressure increases study hours, decreasing sleep quality, reducing energy and focus, which lowers academic performance and further increases academic pressure.',
      type: 'Reinforcing',
      elements: [
        'Academic Pressure',
        'Study Hours',
        'Sleep Quality',
        'Energy & Focus',
        'Academic Performance',
        'Academic Pressure',
      ],
    },
  ];

  const vensimRelationships = [
  { from: "Help-Seeking", to: "Therapy Access", type: "positive" },
  { from: "Therapy Access", to: "Social Comparison", type: "negative" },
  { from: "Social Comparison", to: "Mental Awareness", type: "negative" },
  { from: "Mental Awareness", to: "Help-Seeking", type: "positive" },
  { from: "Social Comparison", to: "Self Esteem", type: "negative" },
  { from: "Self Esteem", to: "Anxiety & Depression", type: "negative" },
  { from: "Digital Coping", to: "Screen Time", type: "positive" },
  { from: "Anxiety & Depression", to: "Digital Coping", type: "positive" },
  { from: "Screen Time", to: "Social Comparison", type: "positive" },
  { from: "Academic Pressure", to: "Digital Coping", type: "positive" },
  { from: "Academic Pressure", to: "Study Hours", type: "positive" },
  { from: "Study Hours", to: "Sleep Quality", type: "negative" },
  { from: "Sleep Quality", to: "Energy & Focus", type: "positive" },
  { from: "Energy & Focus", to: "Academic Performance", type: "positive" },
  { from: "Academic Performance", to: "Academic Pressure", type: "negative" },
  { from: "Therapy Access", to: "Anxiety & Depression", type: "negative" },
  { from: "Social Media Exposure", to: "Social Comparison", type: "positive" },
  { from: "Academic Pressure", to: "Anxiety & Depression", type: "positive" }
];
const systemArchetypes = [
  {
    name: 'Fixes that Fail',
    application:
      'Digital coping (social media, gaming) provides temporary relief from academic pressure and anxiety but ultimately worsens the situation by reducing sleep quality and increasing social comparison.',
  },
  {
    name: 'Shifting the Burden',
    application:
      'Students rely on short-term solutions like excessive caffeine or digital distractions instead of addressing the fundamental need for better sleep habits and mental health support.',
  },
  {
    name: 'Success to the Successful',
    application:
      'Students who maintain better sleep quality perform better academically, reducing their pressure while those who don\'t enter a downward spiral of increasing pressure and worsening performance.',
  },
];

  // Container variants for animations
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

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-blue-50 min-h-screen pt-16 sm:pt-24 pb-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
            Youth Mental Health System Model
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700">
            System dynamics modeling visualizing the complex interconnections driving youth mental health issues in urban environments
          </p>
        </motion.div>

        {/* Diagram Tabs and Visualization */}
        <motion.section className="mb-16" variants={containerVariants}>
          <div className="flex flex-wrap items-center text-indigo-900 justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-0">
              System Visualization
            </h2>
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-lg border shadow-sm transition-colors ${
                  activeTab === 'cld' 
                    ? 'bg-indigo-600 text-white border-indigo-700' 
                    : 'bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100'
                }`}
                onClick={() => setActiveTab('cld')}
              >
                Causal Loop Diagram
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-lg border shadow-sm transition-colors ${
                  activeTab === 'sfd' 
                    ? 'bg-indigo-600 text-white border-indigo-700' 
                    : 'bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100'
                }`}
                onClick={() => setActiveTab('sfd')}
              >
                Stock and Flow Diagram
              </button>
              <button 
                className="flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 shadow-sm hover:bg-indigo-100 transition-colors"
                onClick={() => setShowLegend(!showLegend)}
              >
                <Info size={18} className="mr-2" />
                {showLegend ? "Hide Legend" : "Show Legend"}
              </button>
            </div>
          </div>

          {/* Fullscreen overlay if enabled */}
          {fullscreen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-6xl">
                <button 
                  onClick={toggleFullscreen}
                  className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <Maximize2 size={24} />
                </button>
                <img 
                  src={activeTab === 'cld' ? cldImage : sfdImage} 
                  alt={activeTab === 'cld' ? "Youth Mental Health Causal Loop Diagram" : "Youth Mental Health Stock and Flow Diagram"} 
                  className="max-w-full h-auto rounded shadow-md max-h-screen mx-auto"
                />
              </div>
            </div>
          )}

          <motion.div
            className="bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-indigo-100 mb-6 overflow-hidden"
            variants={cardVariants}
          >
            {/* CLD & SFD Diagrams with tab-based display */}
            <div className="relative w-full rounded-lg bg-white border border-indigo-100">
              <div className="overflow-x-auto overflow-y-hidden py-4">
                {/* CLD Tab Content */}
                {activeTab === 'cld' && (
                  <div className="relative mx-auto flex justify-center">
                    <img 
                      src={cldImage} 
                      alt="Youth Mental Health Causal Loop Diagram" 
                      className="max-w-full h-auto rounded shadow-md"
                      style={{ maxHeight: '70vh' }}
                      onLoad={() => setImageLoaded(true)}
                    />
                    
                    {/* Interactive overlay for highlighting loops when clicked in the list */}
                    {activeLoop === 'loop1' && (
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 border-4 border-blue-500 rounded-full animate-pulse opacity-40"></div>
                      </div>
                    )}
                    {activeLoop === 'loop2' && (
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-4 border-rose-500 rounded-full animate-pulse opacity-40"></div>
                      </div>
                    )}
                    {activeLoop === 'loop3' && (
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 border-4 border-rose-500 rounded-full animate-pulse opacity-40"></div>
                      </div>
                    )}
                  </div>
                )}

                {/* SFD Tab Content */}
                {activeTab === 'sfd' && (
                  <div className="relative mx-auto flex justify-center">
                    <img 
                      src={sfdImage} 
                      alt="Youth Mental Health Stock and Flow Diagram" 
                      className="max-w-full h-auto rounded shadow-md"
                      style={{ maxHeight: '70vh' }}
                    />
                  </div>
                )}
              </div>
              
              {/* Legend - could be customized for each diagram type */}
              {showLegend && (
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg mt-4 border border-indigo-200 shadow-sm">
                  <h4 className="font-semibold mb-3">Legend - {activeTab === 'cld' ? 'Causal Loop Diagram' : 'Stock and Flow Diagram'}</h4>
                  
                  {/* CLD Legend */}
                  {activeTab === 'cld' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-violet-500 mr-2 shadow-sm"></div>
                        <span className="text-sm text-gray-700">Psychological Factors</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-500 mr-2 shadow-sm"></div>
                        <span className="text-sm text-gray-700">Behavioral Factors</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-rose-500 mr-2 shadow-sm"></div>
                        <span className="text-sm text-gray-700">Academic Factors</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 mr-2 shadow-sm"></div>
                        <span className="text-sm text-gray-700">Physical Factors</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-amber-500 mr-2 shadow-sm"></div>
                        <span className="text-sm text-gray-700">Interventions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-slate-500 mr-2 shadow-sm"></div>
                        <span className="text-sm text-gray-700">External Factors</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-0 border-t-2 border-emerald-500 mr-2"></div>
                          <span className="text-sm text-gray-700">Positive Relationship (+)</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-0 border-t-2 border-rose-500 border-dashed mr-2"></div>
                          <span className="text-sm text-gray-700">Negative Relationship (−)</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-600 font-bold text-xs mr-2 shadow-sm">B</span>
                          <span className="text-sm text-gray-700">Balancing Loop</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-rose-500 text-rose-500 font-bold text-xs mr-2 shadow-sm">R</span>
                          <span className="text-sm text-gray-700">Reinforcing Loop</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* SFD Legend */}
                  {activeTab === 'sfd' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <div className="w-12 h-4 border border-blue-500 bg-blue-100 mr-2 shadow-sm"></div>
                        <span className="text-sm text-gray-700">Stock (Accumulation)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-0 border-t-2 border-black mr-2 relative">
                            <div className="absolute -right-1 -top-2 border-t-4 border-r-4 border-b-4 border-black border-l-0 h-0 w-0"></div>
                          </div>
                          <span className="text-sm text-gray-700">Flow (Rate of Change)</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-amber-500 mr-2 shadow-sm"></div>
                        <span className="text-sm text-gray-700">Auxiliary Variable</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-0 border-t-2 border-gray-500 mr-2"></div>
                          <span className="text-sm text-gray-700">Causal Link</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" className="mr-2">
                            <circle cx="10" cy="10" r="8" fill="none" stroke="black" strokeWidth="1"/>
                            <path d="M6,10 L14,10 M10,6 L10,14" stroke="black" strokeWidth="1"/>
                          </svg>
                          <span className="text-sm text-gray-700">Source/Sink</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-0 border-t-2 border-blue-500 border-dashed mr-2"></div>
                          <span className="text-sm text-gray-700">Information Link</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-end">
              <button
                onClick={toggleFullscreen}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors shadow-sm"
              >
                <Maximize2 size={16} className="mr-2" />
                Fullscreen View
              </button>
              <button
                onClick={downloadImage}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors shadow-sm"
              >
                <Download size={16} className="mr-2" />
                Download {activeTab.toUpperCase()} Image
              </button>
              <a
                href="https://vensim.com/free-download/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors shadow-sm"
              >
                <ExternalLink size={16} className="mr-2" />
                Vensim Tool (Free Download)
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* New SFD Description Section */}
        {activeTab === 'sfd' && (
          <motion.section className="mb-16" variants={containerVariants}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6 text-center sm:text-left">
              Understanding the Stock and Flow Diagram
            </h2>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-xl border border-indigo-100"
              variants={cardVariants}
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Stock and Flow Diagram (SFD) extends our causal loop analysis by quantifying key 
                relationships and representing accumulations within the youth mental health system:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Stocks (Accumulations)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <span className="text-blue-600 font-medium text-xs">1</span>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <span className="font-medium">Mental Health Issues</span>: The accumulated level of mental health challenges among urban youth.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <span className="text-blue-600 font-medium text-xs">2</span>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <span className="font-medium">Sleep Esteem</span>: The accumulated quality of sleep habits and their impact on self-perception.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <span className="text-blue-600 font-medium text-xs">3</span>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <span className="font-medium">Support Network Strength</span>: The accumulated social capital and support resources available.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-3">Key Flows (Rates of Change)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                        <span className="text-emerald-600 font-medium text-xs">1</span>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <span className="font-medium">Stress Increase Rate</span>: How quickly mental health issues accumulate due to academic and urban stressors.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                        <span className="text-emerald-600 font-medium text-xs">2</span>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <span className="font-medium">Sleep Quality Degradation</span>: The rate at which sleep patterns are disrupted by media usage.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                        <span className="text-emerald-600 font-medium text-xs">3</span>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <span className="font-medium">Support Network Building</span>: How rapidly supportive relationships are formed through peer and family connections.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Auxiliary Variables & Feedback</h3>
                <p className="text-gray-700 mb-4">
                  The SFD reveals important delay structures not visible in the CLD, such as:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <span className="text-purple-600 font-medium text-xs">•</span>
                    </div>
                    <p className="ml-3 text-gray-700">
                      Delays between implementing awareness programs and their effect on help-seeking behaviors.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <span className="text-purple-600 font-medium text-xs">•</span>
                    </div>
                    <p className="ml-3 text-gray-700">
                      How improved sleep quality slowly reinforces positive peer relationships through better mood regulation.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <span className="text-purple-600 font-medium text-xs">•</span>
                    </div>
                    <p className="ml-3 text-gray-700">
                      The compounding effect of stronger support networks on both mental health services access and stress reduction.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Model Insights</h3>
                <p className="text-gray-700">
                  The SFD extends our understanding by enabling quantitative simulation and policy testing. This allows 
                  us to identify the most effective intervention points and estimate the magnitude and timing of effects 
                  from different intervention strategies. Key insights include the significant leverage provided by early 
                  sleep interventions, the delayed but powerful impact of awareness programs, and the critical role of 
                  peer support networks in amplifying positive mental health outcomes.
                </p>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Include the rest of your existing sections here */}
        {/* Key Feedback Loops */}
        {/* System Archetypes */}
        {/* Intervention Points */}
        {/* Research & Policy Implications */}
        {/* Footer */}

         {/* Key Feedback Loops */}
        <motion.section className="mb-16" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6 text-center sm:text-left">
            Key Feedback Loops
          </h2>
          <div className="space-y-5">
            {feedbackLoops.map((loop) => (
              <motion.div
                key={loop.id}
                className={`bg-white rounded-xl shadow-lg border transition-all duration-300 ${
                  activeLoop === loop.id
                    ? loop.type === 'Reinforcing' 
                      ? 'border-rose-400 bg-rose-50' 
                      : 'border-blue-400 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
                variants={cardVariants}
              >
                <div
                  className="p-4 sm:p-6 flex justify-between items-center cursor-pointer"
                  onClick={() => setActiveLoop(activeLoop === loop.id ? null : loop.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-lg font-semibold text-gray-800">{loop.name}</h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full inline-flex items-center w-fit ${
                        loop.type === 'Reinforcing'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {loop.type === 'Reinforcing' ? 'R' : 'B'} • {loop.type} Loop
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeLoop === loop.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      loop.type === 'Reinforcing'
                        ? 'text-rose-500'
                        : 'text-blue-500'
                    }`}
                  >
                    {activeLoop === loop.id ? (
                      <ChevronUp size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </motion.div>
                </div>
                {activeLoop === loop.id && (
                  <motion.div
                    className="px-4 sm:px-6 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 mb-4 leading-relaxed">{loop.description}</p>
                    <div className={`p-4 rounded-lg border ${
                      loop.type === 'Reinforcing'
                        ? 'bg-rose-50 border-rose-100'
                        : 'bg-blue-50 border-blue-100'
                    }`}>
                      <p className="text-sm font-medium text-gray-800 mb-3">Loop Elements:</p>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                        {loop.elements.map((element, index) => (
                          <span key={index} className="flex items-center">
                            <span className="text-gray-700 bg-white px-3 py-1 rounded-md border border-gray-200 shadow-sm">{element}</span>
                            {index < loop.elements.length - 1 && (
                              <span className={`mx-2 ${
                                loop.type === 'Reinforcing'
                                  ? 'text-rose-500'
                                  : 'text-blue-500'
                              }`}>→</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* System Archetypes */}
        <motion.section variants={containerVariants} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6 text-center sm:text-left">
            System Archetypes Identified
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemArchetypes.map((archetype, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-1"
                variants={cardVariants}
              >
                <h3 className="text-lg font-semibold mb-3">{archetype.name}</h3>
                <p className="text-gray-700 leading-relaxed">{archetype.application}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Intervention Points */}
        <motion.section variants={containerVariants} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6 text-center sm:text-left">
            Key Intervention Points
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-xl border border-indigo-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Mental Health Awareness</h3>
                <p className="text-gray-700">
                  Strengthen the balancing loop by improving mental health education and reducing stigma, 
                  encouraging more help-seeking behaviors before problems escalate.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-5 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Therapy Access Points</h3>
                <p className="text-gray-700">
                  Create more accessible therapy options within educational institutions to directly 
                  intervene in the reinforcing loop of anxiety, depression, and digital coping.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-5 rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">Sleep Quality Programs</h3>
                <p className="text-gray-700">
                  Implement sleep education programs that break the reinforcing academic performance loop by
                  promoting healthy sleep habits that enhance energy, focus, and ultimately performance.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-5 rounded-lg bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-rose-800 mb-3">Digital Wellness Initiatives</h3>
                <p className="text-gray-700">
                  Target the social media reinforcing loop with programs that promote healthier digital 
                  habits and teach critical media literacy to reduce negative social comparison.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Research & Policy Implications */}
        <motion.section variants={containerVariants} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-900 mb-6 text-center sm:text-left">
            Research & Policy Implications
          </h2>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl border border-indigo-100"
            variants={cardVariants}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              This systems model highlights several key areas where targeted research and policy interventions 
              could have significant leverage in addressing youth mental health challenges:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">1</span>
                </div>
                <p className="ml-4 text-gray-700">
                  <span className="font-medium text-gray-900">Integrated school-based interventions</span> that address 
                  multiple system components simultaneously, such as academic pressure reduction alongside mental health support.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">2</span>
                </div>
                <p className="ml-4 text-gray-700">
                  <span className="font-medium text-gray-900">Social media regulation and design ethics</span> that limit 
                  features that amplify social comparison and develop algorithms that promote positive engagement.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">3</span>
                </div>
                <p className="ml-4 text-gray-700">
                  <span className="font-medium text-gray-900">Educational policy reform</span> that evaluates how academic 
                  expectations and assessment methods impact student wellness and mental health outcomes.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">4</span>
                </div>
                <p className="ml-4 text-gray-700">
                  <span className="font-medium text-gray-900">Longitudinal research</span> that further validates the 
                  feedback loops identified in this model and quantifies intervention effectiveness across diverse populations.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.div className="mt-12 text-center" variants={containerVariants}>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-medium hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Back to Home
          </a>
        </motion.div>
     

        
      </motion.div>
    </div>
  );
};

export default CLD;