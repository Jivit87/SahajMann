import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutTeam() {
  const [teamMembers] = useState([
    {
      id: 1,
      name: 'Sam Carter',
      role: 'SFD Developer & Systems Thinker',
      bio: 'Sam led the development of the Stock-Flow Diagram (SFD) and contributed to systems thinking analysis, passionate about visualizing complex systems.',
      linkedin: 'https://linkedin.com/in/samcarter',
    },
    {
      id: 2,
      name: 'Ava Nguyen',
      role: 'Bot Developer & CLD Specialist',
      bio: 'Ava focused on building interactive bots and refining the Causal Loop Diagram (CLD), with a knack for integrating user-friendly interfaces.',
      linkedin: 'https://linkedin.com/in/avanguyen',
    },
    {
      id: 3,
      name: 'Liam Patel',
      role: 'CLD Developer & Data Integrator',
      bio: 'Liam contributed to the Causal Loop Diagram (CLD) and data integration for systems modeling, ensuring accurate representation of mental health dynamics.',
      linkedin: 'https://linkedin.com/in/liampatel',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Report Writer & Researcher',
      bio: 'Emma spearheaded the research and writing of the project report, synthesizing findings into actionable insights for stakeholders.',
      linkedin: 'https://linkedin.com/in/emmawilson',
    },
    {
      id: 5,
      name: 'Noah Kim',
      role: 'Report Writer & UI Designer',
      bio: 'Noah co-authored the project report and contributed to the UI design, ensuring a cohesive and accessible user experience.',
      linkedin: 'https://linkedin.com/in/noahkim',
    },
  ]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-12">
            Our Team
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the talented developers behind this systems thinking approach
            to urban youth mental health for the FSTE Hackathon 2025.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            Our team is dedicated to addressing the systemic causes of the rising mental health crisis
            among urban youth. We combine systems thinking, data analysis, and innovative technology
            to visualize complex problems and identify high-leverage intervention points.
          </p>
          <p className="text-gray-600">
            Our platform bridges research and action, making systems-level insights accessible to
            policymakers, educators, healthcare providers, and youth advocates.
          </p>
        </div>

        {/* Team Members Grid */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                    {member.name.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-600 font-medium text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-6 text-center">
                  {member.bio}
                </p>
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-200"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Acknowledgments */}
        <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Acknowledgments
          </h2>
          <p className="text-gray-600 mb-4">
            We thank the organizers of the FSTE Hackathon 2025 for providing a platform to tackle
            critical social issues through interdisciplinary collaboration.
          </p>
          <p className="text-gray-600">
            Special thanks to our mentors and advisors in mental health, systems thinking, and digital
            technology for their invaluable guidance throughout this project.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions about our project or interested in collaboration?
          </p>
          <a
            href="mailto:team@fstemh.org"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200"
          >
            Contact Our Team
          </a>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center pb-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}