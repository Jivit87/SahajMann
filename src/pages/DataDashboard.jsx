// pages/DataDashboard.jsx
import { useState, useEffect } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell 
} from 'recharts';

const DataDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    loading: true,
    error: null,
    trendData: [],
    factorsData: [],
    demographicData: [],
    interventionData: []
  });

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Fetch data
  useEffect(() => {
    // Simulating data fetch - in a real app, this would be an API call
    const fetchData = async () => {
      try {
        // In a real implementation, this would be:
        // const response = await fetch('/api/dashboard-data');
        // const data = await response.json();

        // Simulated data
        setTimeout(() => {
          setDashboardData({
            loading: false,
            error: null,
            trendData: [
              { year: 2019, anxiety: 24, depression: 18 },
              { year: 2020, anxiety: 31, depression: 25 },
              { year: 2021, anxiety: 38, depression: 32 },
              { year: 2022, anxiety: 42, depression: 35 },
              { year: 2023, anxiety: 45, depression: 38 },
              { year: 2024, anxiety: 48, depression: 40 }
            ],
            factorsData: [
              { name: 'Social Media', value: 35 },
              { name: 'Academic Pressure', value: 25 },
              { name: 'Economic Stress', value: 15 },
              { name: 'Urban Isolation', value: 15 },
              { name: 'Other Factors', value: 10 }
            ],
            demographicData: [
              { age: '12-15', male: 28, female: 38, nonbinary: 32 },
              { age: '16-18', male: 35, female: 48, nonbinary: 42 },
              { age: '19-22', male: 40, female: 52, nonbinary: 45 },
              { age: '23-25', male: 38, female: 46, nonbinary: 40 }
            ],
            interventionData: [
              { name: 'Traditional Therapy', effectiveness: 65, accessibility: 40, cost: 70 },
              { name: 'Digital Health Apps', effectiveness: 45, accessibility: 90, cost: 30 },
              { name: 'Community Programs', effectiveness: 60, accessibility: 50, cost: 45 },
              { name: 'School Interventions', effectiveness: 55, accessibility: 75, cost: 35 },
              { name: 'Policy Changes', effectiveness: 80, accessibility: 30, cost: 60 }
            ]
          });
        }, 800);
      } catch (error) {
        setDashboardData(prevState => ({
          ...prevState,
          loading: false,
          error: "Failed to load dashboard data"
        }));
      }
    };

    fetchData();
  }, []);

  if (dashboardData.loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600">Loading dashboard data...</p>
      </div>
    );
  }

  if (dashboardData.error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600">Error: {dashboardData.error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Data Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8">
        Visualizing key trends and insights about youth mental health in urban environments
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trend Over Time Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Mental Health Trends (2019-2024)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={dashboardData.trendData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="anxiety" 
                name="Anxiety" 
                stroke="#3b82f6" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="depression" 
                name="Depression" 
                stroke="#8b5cf6" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Contributing Factors Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Contributing Factors</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dashboardData.factorsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {dashboardData.factorsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Demographics Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Demographics (By Age and Gender)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={dashboardData.demographicData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis label={{ value: 'Percentage Affected (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="male" name="Male" fill="#3b82f6" />
              <Bar dataKey="female" name="Female" fill="#ec4899" />
              <Bar dataKey="nonbinary" name="Non-binary/Other" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Intervention Effectiveness */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Intervention Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={dashboardData.interventionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Score (0-100)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="effectiveness" name="Effectiveness" fill="#10b981" />
              <Bar dataKey="accessibility" name="Accessibility" fill="#f59e0b" />
              <Bar dataKey="cost" name="Cost (Lower is Better)" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Insights */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Data Insights</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
              <p className="ml-3 text-gray-700">Mental health issues among urban youth have increased consistently year-over-year, with a particularly sharp rise following 2020.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
              <p className="ml-3 text-gray-700">Social media influence and academic pressure account for 60% of contributing factors to anxiety and depression.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
              <p className="ml-3 text-gray-700">The 16-22 age group shows the highest prevalence of mental health issues across all gender identities.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
              <p className="ml-3 text-gray-700">Policy-level interventions show the highest effectiveness but lowest accessibility, suggesting a need to focus on systemic changes while improving access.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Data Sources */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Data Sources</h2>
        <p className="text-sm text-gray-600">
          Data compiled from national health surveys, peer-reviewed research studies, and anonymized clinical reports from urban mental health centers. Last updated April 2025.
        </p>
      </section>
    </div>
  );
};

export default DataDashboard;