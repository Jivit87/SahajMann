import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Download, Info, ExternalLink } from 'lucide-react';

const CLD = () => {
  const [activeLoop, setActiveLoop] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize for responsive SVG scaling
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Parse the Vensim model data to create relationship connections
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

  // Original node positions for 960px width viewport
  const baseNodes = [
    { id: "Help-Seeking", x: 100, y: 150, group: "intervention" },
    { id: "Therapy Access", x: 280, y: 80, group: "intervention" },
    { id: "Social Comparison", x: 280, y: 250, group: "psychological" },
    { id: "Mental Awareness", x: 100, y: 250, group: "psychological" },
    { id: "Self Esteem", x: 420, y: 180, group: "psychological" },
    { id: "Anxiety & Depression", x: 520, y: 280, group: "psychological" },
    { id: "Screen Time", x: 340, y: 380, group: "behavior" },
    { id: "Digital Coping", x: 460, y: 380, group: "behavior" },
    { id: "Academic Pressure", x: 600, y: 380, group: "academic" },
    { id: "Study Hours", x: 700, y: 450, group: "behavior" },
    { id: "Sleep Quality", x: 820, y: 350, group: "physical" },
    { id: "Energy & Focus", x: 780, y: 250, group: "physical" },
    { id: "Academic Performance", x: 650, y: 230, group: "academic" },
    { id: "Social Media Exposure", x: 200, y: 400, group: "external" }
  ];

  // Calculate scaled node positions based on window width
  const getScaledNodes = () => {
    const baseWidth = 960;
    const scaleFactor = Math.max(0.5, Math.min(1, windowWidth < 640 ? 0.65 : windowWidth / baseWidth));
    
    return baseNodes.map(node => ({
      ...node,
      x: node.x * scaleFactor,
      y: node.y * scaleFactor
    }));
  };

  const nodes = getScaledNodes();
  
  // Calculate SVG viewBox dimensions
  const getViewBox = () => {
    const baseWidth = 960;
    const baseHeight = 520;
    const scaleFactor = Math.max(0.5, Math.min(1, windowWidth < 640 ? 0.65 : windowWidth / baseWidth));
    return `0 0 ${baseWidth * scaleFactor} ${baseHeight * scaleFactor}`;
  };

  // Node group colors
  const nodeColors = {
    "psychological": "#8b5cf6", // violet
    "behavior": "#3b82f6",      // blue
    "academic": "#f43f5e",      // rose
    "physical": "#10b981",      // emerald
    "intervention": "#f59e0b",  // amber
    "external": "#64748b"       // slate
  };

  // Generate SVG path for an arrow between two nodes
  const getArrowPath = (fromNode, toNode, isPositive) => {
    const from = nodes.find(n => n.id === fromNode);
    const to = nodes.find(n => n.id === toNode);
    
    if (!from || !to) return "";
    
    // Calculate control point for the curve
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Offset the control point perpendicular to the line
    const offset = Math.min(80, dist * 0.3);
    const nx = -dy / dist; // normalized perpendicular vector
    const ny = dx / dist;
    
    const ctrlX = midX + nx * offset;
    const ctrlY = midY + ny * offset;
    
    // Calculate arrow head points
    const angle = Math.atan2(to.y - ctrlY, to.x - ctrlX);
    const arrowLength = 10;
    
    const arrowPoint1X = to.x - arrowLength * Math.cos(angle - Math.PI/6);
    const arrowPoint1Y = to.y - arrowLength * Math.sin(angle - Math.PI/6);
    const arrowPoint2X = to.x - arrowLength * Math.cos(angle + Math.PI/6);
    const arrowPoint2Y = to.y - arrowLength * Math.sin(angle + Math.PI/6);
    
    return {
      path: `M${from.x},${from.y} Q${ctrlX},${ctrlY} ${to.x},${to.y}`,
      arrowHead: `M${to.x},${to.y} L${arrowPoint1X},${arrowPoint1Y} L${arrowPoint2X},${arrowPoint2Y} Z`,
      labelPos: {
        x: ctrlX, 
        y: ctrlY
      }
    };
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] min-h-screen pt-32 sm:pt-36 md:pt-40 pb-16">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-black">
            Youth Mental Health System Model
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Causal Loop Diagram (CLD) visualizing the complex interconnections driving youth mental health issues in urban environments
          </p>
        </motion.div>

        {/* CLD Visualization */}
        <motion.section className="mb-16" variants={containerVariants}>
          <div className="flex flex-wrap items-center text-indigo-900 justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0">
              System Visualization
            </h2>
            <button 
              className="flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 shadow-sm hover:bg-indigo-100 transition-colors"
              onClick={() => setShowLegend(!showLegend)}
            >
              <Info size={18} className="mr-2" />
              {showLegend ? "Hide Legend" : "Show Legend"}
            </button>
          </div>

          <motion.div
            className="bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-indigo-100 mb-6 overflow-hidden"
            variants={cardVariants}
          >
            {/* CLD Diagram with responsive SVG */}
            <div className="relative w-full rounded-lg bg-white border border-indigo-100">
              <div className="overflow-x-auto overflow-y-hidden py-4">
                <svg 
                  width="100%" 
                  height="auto"
                  viewBox={getViewBox()}
                  className="mx-auto block"
                  style={{ minHeight: '350px' }}
                >
                  {/* Draw relationship lines */}
                  {vensimRelationships.map((rel, index) => {
                    const arrow = getArrowPath(rel.from, rel.to, rel.type === "positive");
                    const strokeColor = rel.type === "positive" ? "#10b981" : "#ef4444";
                    return (
                      <g key={`rel-${index}`}>
                        <path 
                          d={arrow.path} 
                          fill="none" 
                          stroke={strokeColor} 
                          strokeWidth="2" 
                          strokeDasharray={rel.type === "negative" ? "5,5" : "none"}
                        />
                        <path
                          d={arrow.arrowHead}
                          fill={strokeColor}
                        />
                        {/* Label for relationship */}
                        <text 
                          x={arrow.labelPos.x} 
                          y={arrow.labelPos.y} 
                          textAnchor="middle" 
                          dominantBaseline="middle" 
                          fill={strokeColor} 
                          fontWeight="bold" 
                          fontSize="16"
                        >
                          {rel.type === "positive" ? "+" : "−"}
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* Draw nodes */}
                  {nodes.map((node) => {
                    const bgColor = nodeColors[node.group];
                    const nodeRadius = windowWidth < 640 ? 18 : 22;
                    return (
                      <g key={node.id}>
                        {/* Node glow effect */}
                        <circle 
                          cx={node.x} 
                          cy={node.y} 
                          r={nodeRadius + 4} 
                          fill={bgColor}
                          opacity="0.15"
                        />
                        <circle 
                          cx={node.x} 
                          cy={node.y} 
                          r={nodeRadius} 
                          fill="white"
                          stroke={bgColor}
                          strokeWidth="2"
                        />
                        <text 
                          x={node.x} 
                          y={node.y} 
                          textAnchor="middle" 
                          dominantBaseline="middle"
                          fontSize={windowWidth < 640 ? "9" : "11"} 
                          fontWeight="500" 
                          fill="#1f2937"
                        >
                          {node.id.split(' ').length > 1 && node.id.length > 12 
                            ? node.id.split(' ').map((word, i) => (
                                <tspan key={i} x={node.x} dy={i === 0 ? -6 : 12}>
                                  {word.length > 12 ? word.slice(0, 10) + "..." : word}
                                </tspan>
                              ))
                            : node.id.length > 15 
                              ? node.id.slice(0, 13) + "..." 
                              : node.id}
                        </text>
                        <text 
                          x={node.x} 
                          y={node.y + (windowWidth < 640 ? 32 : 40)} 
                          textAnchor="middle" 
                          fontSize={windowWidth < 640 ? "8" : "10"} 
                          fontWeight="normal" 
                          fill="#64748b"
                          className="select-none"
                        >
                          {node.group.charAt(0).toUpperCase() + node.group.slice(1)}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
              
              {/* Legend */}
              {showLegend && (
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg mt-4 border border-indigo-200 shadow-sm">
                  <h4 className="font-semibold mb-3">Legend</h4>
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
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-end">
              <a
                href="/vensim_t&p.mdl"
                download="youth_mental_health_model.mdl"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors shadow-sm"
              >
                <Download size={16} className="mr-2" />
                Download CLD (.mdl file)
              </a>
              <a
                href="https://vensim.com/free-download/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors shadow-sm"
              >
                <ExternalLink size={16} className="mr-2" />
                View with Vensim (Free Tool)
              </a>
            </div>
          </motion.div>
        </motion.section>

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

        {/* Back to Home Button */}
        <motion.div className="mt-12 text-center" variants={containerVariants}>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-medium hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CLD;