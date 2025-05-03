// pages/HomePage.jsx
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mental Health Crisis Among Urban Youth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A systems thinking approach to understanding and addressing the rise of 
              anxiety and depression in young people living in urban environments.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link 
                to="/research" 
                className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Explore Research
              </Link>
              <Link 
                to="/dashboard" 
                className="px-5 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                View Data Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Key Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rising Anxiety Rates',
                description: 'Youth anxiety rates have increased by 52% over the last decade in urban areas.'
              },
              {
                title: 'Depression & Isolation',
                description: 'Despite hyperconnectivity, urban youth report increasing feelings of isolation and depression.'
              },
              {
                title: 'Systemic Causes',
                description: "Individual treatments aren't addressing the root causes embedded in our social systems."
              }
            ].map((issue, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">{issue.title}</h3>
                <p className="text-gray-600">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Thinking Approach */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Our Systems Thinking Approach</h2>
          <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            We utilize causal loop diagrams, systems archetypes, and data analysis to uncover 
            the interconnected factors driving mental health issues.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Research Insights",
                description: "In-depth analysis of recent studies on youth mental health",
                link: "/research"
              },
              {
                title: "Causal Loop Diagrams",
                description: "Visualizing feedback loops and system dynamics",
                link: "/cld"
              },
              {
                title: "EPS Analysis",
                description: "Events, Patterns and Structural insights",
                link: "/eps-analysis"
              },
              {
                title: "Solutions",
                description: "Leverage points and system interventions",
                link: "/solutions"
              }
            ].map((item, index) => (
              <Link 
                to={item.link}
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-blue-600 font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;