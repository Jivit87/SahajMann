// pages/Research.jsx
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Research = () => {
  const [researchData, setResearchData] = useState({
    prevalenceData: [],
    factorsData: [],
    loading: true,
    error: null
  });

  // Fetch data
  useEffect(() => {
    // Simulating data fetch - in a real app, this would be an API call
    setTimeout(() => {
      setResearchData({
        prevalenceData: [
          { age: '12-15', anxiety: 25, depression: 18 },
          { age: '16-18', anxiety: 35, depression: 28 },
          { age: '19-22', anxiety: 42, depression: 38 },
          { age: '23-25', anxiety: 38, depression: 34 }
        ],
        factorsData: [
          { factor: 'Social Media Use', percentage: 68 },
          { factor: 'Academic Pressure', percentage: 72 },
          { factor: 'Economic Uncertainty', percentage: 65 },
          { factor: 'Urban Isolation', percentage: 58 },
          { factor: 'Climate Anxiety', percentage: 45 }
        ],
        loading: false,
        error: null
      });
    }, 500);
  }, []);

  if (researchData.loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600">Loading research data...</p>
      </div>
    );
  }

  if (researchData.error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600">Error loading data: {researchData.error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Research Findings</h1>
      <p className="text-lg text-gray-600 mb-8">
        Our comprehensive analysis of recent studies reveals alarming trends in youth mental health
      </p>

      {/* Key Statistics */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              stat: '60%',
              desc: 'of urban youth report experiencing anxiety symptoms'
            },
            {
              stat: '32%',
              desc: 'diagnosed with clinical depression or anxiety disorders'
            },
            {
              stat: '74%',
              desc: 'increase in mental health issues over the last decade'
            }
          ].map((item, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-blue-700 mb-2">{item.stat}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prevalence by Age Group */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Prevalence by Age Group</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={researchData.prevalenceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="anxiety" name="Anxiety" fill="#3b82f6" />
              <Bar dataKey="depression" name="Depression" fill="#9333ea" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Contributing Factors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contributing Factors</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={researchData.factorsData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="factor" />
              <Tooltip />
              <Legend />
              <Bar dataKey="percentage" name="Percentage of Youth Affected" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Literature Review */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Literature Review Highlights</h2>
        <div className="space-y-6">
          {[
            {
              title: "Digital Life and Mental Health",
              authors: "Johnson et al. (2024)",
              findings: "Established strong correlations between excessive social media use and increased anxiety symptoms among urban teenagers."
            },
            {
              title: "Urban Design Impact on Youth Wellbeing",
              authors: "Patel & Williams (2023)",
              findings: "Found that access to green spaces in urban environments reduced reported depression symptoms by 28% among youth residents."
            },
            {
              title: "Economic Pressures and Mental Health",
              authors: "Rivera et al. (2024)",
              findings: "Demonstrated that economic uncertainty and housing costs in urban centers significantly contribute to anxiety disorders in young adults."
            }
          ].map((study, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-1">{study.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{study.authors}</p>
              <p className="text-gray-700">{study.findings}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;