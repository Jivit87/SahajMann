// pages/Solutions.jsx
import { useState } from 'react';

const Solutions = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  
  const solutionLevels = [
    { id: 'all', name: 'All Solutions' },
    { id: 'individual', name: 'Individual Level' },
    { id: 'community', name: 'Community Level' },
    { id: 'policy', name: 'Policy Level' },
    { id: 'system', name: 'System Level' }
  ];

  const solutions = [
    {
      id: 1,
      title: 'Digital Wellness Frameworks',
      description: 'Implementing platform-level interventions that promote healthier usage patterns and discourage addictive behaviors.',
      level: 'system',
      leveragePoint: 'Information Flows',
      systemicInsight: 'Social media platforms designed for engagement rather than connection create reinforcing loops of anxiety.',
      impact: 'high'
    },
    {
      id: 2,
      title: 'Urban Green Space Initiative',
      description: 'Mandating minimum green space requirements in urban development to improve mental wellbeing through nature connection.',
      level: 'policy',
      leveragePoint: 'Physical Structure',
      systemicInsight: 'Physical environment significantly impacts mental states and social connection opportunities.',
      impact: 'medium'
    },
    {
      id: 3,
      title: 'Community Connection Centers',
      description: 'Establishing tech-free zones in neighborhoods that foster in-person connection and belonging among youth.',
      level: 'community',
      leveragePoint: 'Social Networks',
      systemicInsight: 'Lack of physical third places contributes to digital dependence and isolation.',
      impact: 'high'
    },
    {
      id: 4,
      title: 'Mindfulness in Education',
      description: 'Integrating evidence-based mindfulness practices into school curricula to build resilience and emotional regulation.',
      level: 'community',
      leveragePoint: 'Skills Development',
      systemicInsight: 'Current educational models prioritize achievement over wellbeing, creating stress cycles.',
      impact: 'medium'
    },
    {
      id: 5,
      title: 'Economic Security Programs',
      description: 'Expanding youth employment, affordable housing, and financial support to reduce economic stressors.',
      level: 'policy',
      leveragePoint: 'Economic Structure',
      systemicInsight: 'Financial precarity creates chronic stress that significantly impacts mental health outcomes.',
      impact: 'high'
    },
    {
      id: 6,
      title: 'Digital Literacy Training',
      description: 'Teaching youth to critically evaluate online content and develop healthier relationships with technology.',
      level: 'individual',
      leveragePoint: 'Information Interpretation',
      systemicInsight: 'Improving how individuals process digital information can break harmful comparison loops.',
      impact: 'medium'
    },
    {
      id: 7,
      title: 'Mental Health First Aid',
      description: 'Training community members to recognize and respond to mental health challenges before they escalate.',
      level: 'community',
      leveragePoint: 'Early Intervention',
      systemicInsight: 'Delays in recognizing problems allow reinforcing feedback loops to strengthen.',
      impact: 'medium'
    },
    {
      id: 8,
      title: 'Systems Thinking Education',
      description: 'Teaching youth to understand complex systems and their role within them to build agency and reduce helplessness.',
      level: 'individual',
      leveragePoint: 'Mental Models',
      systemicInsight: 'How individuals conceptualize problems affects their ability to respond effectively.',
      impact: 'medium'
    },
    {
      id: 9,
      title: 'Mental Health Integration Policy',
      description: 'Requiring mental health considerations in all urban planning, education, and technology policy decisions.',
      level: 'system',
      leveragePoint: 'Rules & Governance',
      systemicInsight: 'Siloed approaches fail to address the interconnected nature of mental health determinants.',
      impact: 'high'
    }
  ];

  const filteredSolutions = selectedLevel === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.level === selectedLevel);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">System-Level Solutions</h1>
      <p className="text-lg text-gray-600 mb-8">
        Addressing mental health issues among urban youth requires interventions at multiple levels of the system.
      </p>

      {/* Filter Options */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {solutionLevels.map(level => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedLevel === level.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSolutions.map(solution => (
          <div 
            key={solution.id} 
            className={`rounded-lg shadow-sm overflow-hidden border-t-4 ${
              solution.impact === 'high' 
                ? 'border-blue-500' 
                : 'border-blue-300'
            }`}
          >
            <div className="p-6 bg-white">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{solution.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  solution.level === 'individual' ? 'bg-green-100 text-green-800' :
                  solution.level === 'community' ? 'bg-yellow-100 text-yellow-800' :
                  solution.level === 'policy' ? 'bg-purple-100 text-purple-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {solution.level.charAt(0).toUpperCase() + solution.level.slice(1)} Level
                </span>
              </div>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <div className="bg-gray-50 p-3 rounded">
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-700">Leverage Point:</span>
                  <span className="ml-1 text-gray-600">{solution.leveragePoint}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Systemic Insight:</span>
                  <p className="text-sm text-gray-600">{solution.systemicInsight}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Implementation Framework */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Implementation Framework</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-6">
            For maximum impact, solutions should be implemented with attention to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Interconnections</h3>
              <p className="text-gray-600 text-sm">
                Recognize how different interventions support and amplify each other across system levels.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Feedback Delays</h3>
              <p className="text-gray-600 text-sm">
                Understand that system-level changes may take time to show visible effects.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Participatory Approach</h3>
              <p className="text-gray-600 text-sm">
                Include youth voices in design and implementation of all solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leverage Points */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Understanding Leverage Points</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600 mb-6">
            Based on Donella Meadows' framework, leverage points are places in a system where small changes can lead to big shifts. 
            From least to most effective:
          </p>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              <p className="text-gray-700"><span className="font-medium">Parameters</span> - Numbers and factors that rarely change system behavior significantly</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
              <p className="text-gray-700"><span className="font-medium">Information Flows</span> - The structure of who does and doesn't have access to information</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-600 rounded-full mr-2"></div>
              <p className="text-gray-700"><span className="font-medium">Rules</span> - Policies and laws that govern the system</p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-gray-700 rounded-full mr-2"></div>
              <p className="text-gray-700"><span className="font-medium">Goals</span> - The purpose or function of the system</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-800 rounded-full mr-2"></div>
              <p className="text-gray-700"><span className="font-medium">Mental Models</span> - The mindsets out of which the system arises</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;