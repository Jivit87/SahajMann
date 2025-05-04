import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DataDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    loading: true,
    error: null,
    trendData: [],
    factorsData: [],
    demographicData: [],
    interventionData: [],
  });

  // Colors for charts
  const COLORS = ['#6366F1', '#FBBF24', '#10B981', '#EC4899', '#8B5CF6'];

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
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
              { year: 2024, anxiety: 48, depression: 40 },
            ],
            factorsData: [
              { name: 'Social Media', value: 35 },
              { name: 'Academic Pressure', value: 25 },
              { name: 'Economic Stress', value: 15 },
              { name: 'Urban Isolation', value: 15 },
              { name: 'Other Factors', value: 10 },
            ],
            demographicData: [
              { age: '12-15', male: 28, female: 38, nonbinary: 32 },
              { age: '16-18', male: 35, female: 48, nonbinary: 42 },
              { age: '19-22', male: 40, female: 52, nonbinary: 45 },
              { age: '23-25', male: 38, female: 46, nonbinary: 40 },
            ],
            interventionData: [
              { name: 'Traditional Therapy', effectiveness: 65, accessibility: 40, cost: 70 },
              { name: 'Digital Health Apps', effectiveness: 45, accessibility: 90, cost: 30 },
              { name: 'Community Programs', effectiveness: 60, accessibility: 50, cost: 45 },
              { name: 'School Interventions', effectiveness: 55, accessibility: 75, cost: 35 },
              { name: 'Policy Changes', effectiveness: 80, accessibility: 30, cost: 60 },
            ],
          });
        }, 800);
      } catch (error) {
        setDashboardData((prevState) => ({
          ...prevState,
          loading: false,
          error: 'Failed to load dashboard data',
        }));
      }
    };

    fetchData();
  }, []);

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

  if (dashboardData.loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-[#F9FAFB]">
        <p className="text-[#4B5563] text-lg">Loading dashboard data...</p>
      </div>
    );
  }

  if (dashboardData.error) {
    return (
      <div className="flex justify-center items-center h-64 bg-[#F9FAFB]">
        <p className="text-red-600 text-lg">Error: {dashboardData.error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] min-h-screen py-12 sm:py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl mt-12 sm:text-4xl font-extrabold text-[#1F2937] mb-4 tracking-tight"
          variants={containerVariants}
        >
          Data Dashboard
        </motion.h1>
        <motion.p
          className="text-lg text-[#4B5563] mb-12 max-w-3xl leading-relaxed"
          variants={containerVariants}
        >
          Visualizing key trends and insights about youth mental health in urban environments.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Trend Over Time Chart */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E7EB]"
            variants={cardVariants}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1F2937] mb-4">
              Mental Health Trends (2019-2024)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={dashboardData.trendData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="year" stroke="#4B5563" />
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
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="anxiety"
                  name="Anxiety"
                  stroke="#6366F1"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="depression"
                  name="Depression"
                  stroke="#FBBF24"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Contributing Factors Pie Chart */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E7EB]"
            variants={cardVariants}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1F2937] mb-4">
              Contributing Factors
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dashboardData.factorsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {dashboardData.factorsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Demographics Bar Chart */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E7EB]"
            variants={cardVariants}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1F2937] mb-4">
              Demographics (By Age and Gender)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={dashboardData.demographicData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="age" stroke="#4B5563" />
                <YAxis
                  label={{
                    value: 'Percentage Affected (%)',
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
                  }}
                />
                <Legend />
                <Bar dataKey="male" name="Male" fill="#6366F1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="female" name="Female" fill="#FBBF24" radius={[4, 4, 0, 0]} />
                <Bar dataKey="nonbinary" name="Non-binary/Other" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Intervention Effectiveness */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E7EB]"
            variants={cardVariants}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1F2937] mb-4">
              Intervention Analysis
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={dashboardData.interventionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#4B5563" />
                <YAxis
                  label={{
                    value: 'Score (0-100)',
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
                  }}
                />
                <Legend />
                <Bar dataKey="effectiveness" name="Effectiveness" fill="#6366F1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="accessibility" name="Accessibility" fill="#FBBF24" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cost" name="Cost (Lower is Better)" fill="#EC4899" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Key Insights */}
        <motion.section className="mt-12" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-6">Key Data Insights</h2>
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#E5E7EB]"
            variants={cardVariants}
          >
            <ul className="space-y-4">
              {[
                'Mental health issues among urban youth have increased consistently year-over-year, with a particularly sharp rise following 2020.',
                'Social media influence and academic pressure account for 60% of contributing factors to anxiety and depression.',
                'The 16-22 age group shows the highest prevalence of mental health issues across all gender identities.',
                'Policy-level interventions show the highest effectiveness but lowest accessibility, suggesting a need to focus on systemic changes while improving access.',
              ].map((insight, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#6366F1] mt-1"></div>
                  <p className="ml-3 text-[#4B5563] leading-relaxed">{insight}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* Data Sources */}
        <motion.section className="mt-8" variants={containerVariants}>
          <h2 className="text-lg sm:text-xl font-semibold text-[#1F2937] mb-2">Data Sources</h2>
          <p className="text-sm text-[#4B5563]">
            Data compiled from national health surveys, peer-reviewed research studies, and anonymized
            clinical reports from urban mental health centers. Last updated April 2025.
          </p>
        </motion.section>

        {/* Back to Home Button */}
        <motion.div className="mt-12 text-center" variants={containerVariants}>
          <Link
            to="/"
            className="inline-flex px-6 py-3 bg-[#6366F1] text-white rounded-lg font-medium hover:bg-[#FBBF24] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DataDashboard;