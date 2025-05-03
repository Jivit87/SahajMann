// pages/EPSAnalysis.jsx
const EPSAnalysis = () => {
    const epsData = {
      events: [
        {
          title: "Increased Therapy Waitlists",
          description: "Urban mental health clinics reporting 3-6 month waitlists for youth services"
        },
        {
          title: "School Anxiety Spike",
          description: "55% increase in school counselor referrals for anxiety in the past year"
        },
        {
          title: "Social Media Crisis",
          description: "Trending social media movements around youth mental health struggles"
        }
      ],
      patterns: [
        {
          title: "Cyclical Stress Patterns",
          description: "Youth anxiety peaking during academic exam periods, but baseline anxiety increasing year-over-year"
        },
        {
          title: "Digital Escapism",
          description: "Increasing average screen time correlating with reported feelings of depression"
        },
        {
          title: "Urban-Rural Divide",
          description: "Consistently higher rates of diagnosed anxiety disorders in dense urban areas compared to suburban and rural regions"
        }
      ],
      structures: [
        {
          title: "Economic Pressure System",
          description: "Rising housing costs forcing families into longer commutes, reducing family time and increasing stress",
          leveragePoints: ["Urban density policies", "Remote work infrastructure", "Housing affordability initiatives"]
        },
        {
          title: "Digital Connection Paradox",
          description: "Social media platforms designed to maximize engagement over meaningful connection, creating comparison cycles",
          leveragePoints: ["Platform design regulations", "Digital literacy education", "Alternative community spaces"]
        },
        {
          title: "Academic Pressure Machine",
          description: "Educational systems increasingly focused on standardized metrics over holistic development",
          leveragePoints: ["Education reform", "Well-being curriculum integration", "Alternative success metrics"]
        }
      ]
    };
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Events-Patterns-Structure Analysis</h1>
        <p className="text-lg text-gray-600 mb-8">
          Digging deeper to understand the root causes beneath visible symptoms
        </p>
  
        {/* EPS Framework Explanation */}
        <section className="mb-10">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Understanding the EPS Framework</h2>
            <p className="text-gray-600 mb-4">
              The Events-Patterns-Structure framework helps us move from reacting to isolated incidents (events)
              to understanding recurring phenomena (patterns) and finally to addressing the underlying
              system structures that create these patterns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-red-600 font-bold mb-1">Events</div>
                <p className="text-sm text-gray-600">What we notice happening</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-amber-600 font-bold mb-1">Patterns</div>
                <p className="text-sm text-gray-600">Recurring trends over time</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-green-600 font-bold mb-1">Structures</div>
                <p className="text-sm text-gray-600">Underlying causes and systems</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Events */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2">E</div>
            Events: Visible Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {epsData.events.map((event, index) => (
              <div key={index} className="bg-white border-l-4 border-red-400 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Patterns */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2">P</div>
            Patterns: Recurring Trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {epsData.patterns.map((pattern, index) => (
              <div key={index} className="bg-white border-l-4 border-amber-400 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">{pattern.title}</h3>
                <p className="text-gray-600">{pattern.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Structures */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">S</div>
            Structures: Root Causes
          </h2>
          <div className="space-y-6">
            {epsData.structures.map((structure, index) => (
              <div key={index} className="bg-white border-l-4 border-green-400 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">{structure.title}</h3>
                <p className="text-gray-600 mb-4">{structure.description}</p>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm font-medium text-gray-700 mb-2">Leverage Points:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {structure.leveragePoints.map((point, idx) => (
                      <li key={idx} className="text-gray-600">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Iceberg Model */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">The Iceberg Model</h2>
          <div className="bg-gradient-to-b from-white to-blue-100 p-6 rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-full bg-blue-500 clip-path-triangle"></div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold text-red-600 mb-2">Events (10%)</h3>
                <p className="text-gray-600 text-sm">The visible incidents we react to</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4 ml-6">
                <h3 className="font-semibold text-amber-600 mb-2">Patterns (30%)</h3>
                <p className="text-gray-600 text-sm">Trends and behaviors that emerge over time</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4 ml-12">
                <h3 className="font-semibold text-green-600 mb-2">Structures (60%)</h3>
                <p className="text-gray-600 text-sm">The systems, policies, and norms that create patterns</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm ml-16">
                <h3 className="font-semibold text-blue-600 mb-2">Mental Models</h3>
                <p className="text-gray-600 text-sm">The beliefs, assumptions and values that create structures</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default EPSAnalysis;