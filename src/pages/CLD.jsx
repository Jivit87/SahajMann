// pages/CLD.jsx
import { useState } from 'react';

const CLD = () => {
  const [activeLoop, setActiveLoop] = useState(null);
  
  const feedbackLoops = [
    {
      id: 'loop1',
      name: 'Social Media Reinforcing Loop',
      description: 'As anxiety increases, youth seek more social validation online, increasing social media usage, which exposes them to more unrealistic comparisons, further increasing anxiety.',
      type: 'Reinforcing',
      elements: ['Anxiety', 'Need for Social Validation', 'Social Media Usage', 'Exposure to Unrealistic Standards', 'Social Comparison', 'Anxiety']
    },
    {
      id: 'loop2',
      name: 'Urban Isolation Loop',
      description: 'Higher population density paradoxically leads to more social isolation, which increases mental health issues, leading to more withdrawal and further isolation.',
      type: 'Reinforcing',
      elements: ['Urban Population Density', 'Perceived Anonymity', 'Social Isolation', 'Mental Health Issues', 'Social Withdrawal', 'Social Isolation']
    },
    {
      id: 'loop3',
      name: 'Economic Pressure Loop',
      description: 'Rising urban living costs create financial stress, requiring more work hours, leaving less time for social connections and self-care, worsening mental health.',
      type: 'Reinforcing',
      elements: ['Urban Living Costs', 'Financial Stress', 'Work Hours', 'Time for Social Connection', 'Mental Health', 'Productivity', 'Financial Stress']
    }
  ];

  const systemArchetypes = [
    {
      name: 'Fixes that Fail',
      application: 'Short-term solutions like increased screen time to alleviate loneliness actually worsen the problem long-term by reducing real social connections.'
    },
    {
      name: 'Shifting the Burden',
      application: 'Relying on medication alone instead of addressing underlying social and economic structures that contribute to anxiety and depression.'
    },
    {
      name: 'Success to the Successful',
      application: 'Urban areas with more resources attract more development, while areas lacking mental health resources continue to deteriorate, creating inequality in access.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Causal Loop Diagram (CLD)</h1>
      <p className="text-lg text-gray-600 mb-8">
        Visualizing the complex interconnections driving youth mental health issues in urban environments
      </p>

      {/* CLD Visualization */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">System Visualization</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          {/* CLD Diagram - Using a placeholder image for now */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center bg-gray-50 h-96">
            <div className="text-center">
              <p className="text-gray-500 mb-2">CLD Diagram would be displayed here</p>
              <p className="text-sm text-gray-400">(In production, this would be an actual CLD visualization)</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 text-sm"
              onClick={(e) => e.preventDefault()}
            >
              Download full CLD model (.mdl file)
            </a>
          </div>
        </div>
      </section>

      {/* Key Feedback Loops */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Feedback Loops</h2>
        <div className="space-y-4">
          {feedbackLoops.map(loop => (
            <div 
              key={loop.id}
              className={`border rounded-lg transition-all ${activeLoop === loop.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
            >
              <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => setActiveLoop(activeLoop === loop.id ? null : loop.id)}
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{loop.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${loop.type === 'Reinforcing' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {loop.type} Loop
                  </span>
                </div>
                <span className="text-gray-400">
                  {activeLoop === loop.id ? '−' : '+'}
                </span>
              </div>
              {activeLoop === loop.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600 mb-3">{loop.description}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm font-medium text-gray-700 mb-1">Loop Elements:</p>
                    <div className="flex flex-wrap items-center">
                      {loop.elements.map((element, index) => (
                        <span key={index} className="flex items-center">
                          <span className="text-gray-700">{element}</span>
                          {index < loop.elements.length - 1 && (
                            <span className="mx-2 text-gray-400">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* System Archetypes */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">System Archetypes Identified</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systemArchetypes.map((archetype, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">{archetype.name}</h3>
              <p className="text-gray-600">{archetype.application}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CLD;