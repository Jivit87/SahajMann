import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Research = () => {
  const [researchData, setResearchData] = useState({
    prevalenceData: [],
    factorsData: [],
    loading: true,
    error: null,
  });

  const [activeSection, setActiveSection] = useState(null);

  // Intersection Observer setup for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections with the data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Set data immediately to avoid delay issues
  useEffect(() => {
    // Set the data immediately 
    setResearchData({
      prevalenceData: [
        { age: '12-15', anxiety: 25, depression: 18 },
        { age: '16-18', anxiety: 35, depression: 28 },
        { age: '19-22', anxiety: 42, depression: 38 },
        { age: '23-25', anxiety: 38, depression: 34 },
      ],
      factorsData: [
        { factor: 'Social Media Use', percentage: 68 },
        { factor: 'Academic Pressure', percentage: 72 },
        { factor: 'Economic Uncertainty', percentage: 65 },
        { factor: 'Urban Isolation', percentage: 58 },
        { factor: 'Climate Anxiety', percentage: 45 },
      ],
      loading: false,
      error: null,
    });
  }, []);

  // Animation helper function - simplified to ensure content is visible
  const getAnimationClass = (sectionId) => {
    if (!activeSection) return 'opacity-100 translate-y-0'; // Default to visible
    return activeSection === sectionId || true ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  };

  if (researchData.loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white pt-24">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-6 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (researchData.error) {
    return (
      <div className="flex justify-center items-center h-screen bg-white pt-24">
        <p className="text-red-600 text-lg">Error loading data: {researchData.error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div 
          id="hero"
          data-animate
          className={`mb-16 transition-all duration-700 ease-out ${getAnimationClass('hero')}`}
        >
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-300 to-purple-300 rounded-full opacity-20 blur-xl"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight mt-5">
              Research Findings
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Our comprehensive analysis of recent studies reveals alarming trends in youth mental health,
            highlighting the urgent need for systemic interventions.
          </p>
        </div>

        {/* Key Statistics */}
        <section 
          id="stats" 
          data-animate
          className={`mb-16 transition-all duration-700 ease-out ${getAnimationClass('stats')}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 relative inline-block">
            Key Statistics
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                stat: '60%',
                desc: 'of urban youth report experiencing anxiety symptoms',
                color: 'from-indigo-500 to-purple-600',
              },
              {
                stat: '32%',
                desc: 'diagnosed with clinical depression or anxiety disorders',
                color: 'from-purple-500 to-indigo-600',
              },
              {
                stat: '74%',
                desc: 'increase in mental health issues over the last decade',
                color: 'from-indigo-600 to-purple-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-6">
                  <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-3 transform transition-transform duration-500 group-hover:scale-110">{item.stat}</p>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prevalence by Age Group */}
        <section 
          id="prevalence" 
          data-animate
          className={`mb-16 transition-all duration-700 ease-out ${getAnimationClass('prevalence')}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Prevalence by Age Group
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="w-full h-80 md:h-96">
              {researchData.prevalenceData.length > 0 && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={researchData.prevalenceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="age" stroke="#4B5563" />
                    <YAxis
                      label={{
                        value: 'Percentage (%)',
                        angle: -90,
                        position: 'insideLeft',
                        fill: '#4B5563',
                      }}
                      stroke="#4B5563"
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                      cursor={{ fill: 'rgba(236, 236, 254, 0.2)' }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="anxiety" 
                      name="Anxiety" 
                      fill="#6366F1" 
                      radius={[4, 4, 0, 0]} 
                      animationDuration={1500}
                    />
                    <Bar 
                      dataKey="depression" 
                      name="Depression" 
                      fill="#A78BFA" 
                      radius={[4, 4, 0, 0]} 
                      animationDuration={1500}
                      animationBegin={300}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </section>

        {/* Contributing Factors */}
        <section 
          id="factors" 
          data-animate
          className={`mb-16 transition-all duration-700 ease-out ${getAnimationClass('factors')}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Contributing Factors
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="w-full h-80 md:h-96">
              {researchData.factorsData.length > 0 && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={researchData.factorsData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" stroke="#4B5563" />
                    <YAxis 
                      type="category" 
                      dataKey="factor" 
                      stroke="#4B5563" 
                      width={120}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                      cursor={{ fill: 'rgba(236, 236, 254, 0.2)' }}
                    />
                    <Legend />
                    <Bar
                      dataKey="percentage"
                      name="Percentage of Youth Affected"
                      fill="#6366F1"
                      radius={[0, 4, 4, 0]}
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </section>

        {/* Literature Review */}
        <section 
          id="literature" 
          data-animate
          className={`mb-16 transition-all duration-700 ease-out ${getAnimationClass('literature')}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Literature Review Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Digital Life and Mental Health',
                authors: 'Johnson et al. (2024)',
                findings:
                  'Established strong correlations between excessive social media use and increased anxiety symptoms among urban teenagers.',
                color: 'border-indigo-400',
                icon: '📱'
              },
              {
                title: 'Urban Design Impact on Youth Wellbeing',
                authors: 'Patel & Williams (2023)',
                findings:
                  'Found that access to green spaces in urban environments reduced reported depression symptoms by 28% among youth residents.',
                color: 'border-green-400',
                icon: '🏙️'
              },
              {
                title: 'Economic Pressures and Mental Health',
                authors: 'Rivera et al. (2024)',
                findings:
                  'Demonstrated that economic uncertainty and housing costs in urban centers significantly contribute to anxiety disorders in young adults.',
                color: 'border-yellow-400',
                icon: '💰'
              },
            ].map((study, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border-l-4 group hover:-translate-y-1"
                style={{ borderLeftColor: study.color === 'border-indigo-400' ? '#818CF8' : 
                                         study.color === 'border-green-400' ? '#34D399' : '#FBBF24' }}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{study.icon}</span>
                  <h3 className="text-lg font-semibold text-indigo-600">{study.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-3">{study.authors}</p>
                <p className="text-gray-700 leading-relaxed">{study.findings}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Home Button */}
        <div 
          id="nav" 
          data-animate
          className={`mt-14 text-center transition-all duration-700 ease-out ${getAnimationClass('nav')}`}
        >
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300">Back to Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Research;