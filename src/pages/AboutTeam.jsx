import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutTeam() {
  const [teamMembers] = useState([
    {
      id: 1,
      name: 'Aman Kumar',
      role: 'SFD, BOTS & CLD Developer',
      bio: 'Enrollment No: 2401010061. Contributed to the development of Stock-Flow Diagrams, Bots, and Causal Loop Diagrams for addressing youth mental health issues.',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-681633359/',
      image: 'https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/466e8b4c5a6d4dfe83075bf928585458.jpeg'
    },
    {
      id: 2,
      name: 'Aryan Kinha',
      role: 'SFD, BOTS & CLD Developer',
      bio: 'Enrollment No: 2401020013. Focused on developing Stock-Flow Diagrams, Bots, and Causal Loop Diagrams to visualize mental health systems.',
      linkedin: 'https://www.linkedin.com/in/aryankinha',
      image: 'https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/9b7ffd845c7d4d57bb92d7711af440bb.jpeg'
    },
    {
      id: 3,
      name: 'Jatin Verma',
      role: 'SFD, BOTS & CLD Developer',
      bio: 'Enrollment No: 2401010200. Worked on creating Stock-Flow Diagrams, interactive Bots, and Causal Loop Diagrams for systems analysis.',
      linkedin: 'https://www.linkedin.com/in/jatin-verma007/',
      image: 'https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/0819d7846e1049c9ac3475f050d05a5b.jpeg'
    },
    {
      id: 4,
      name: 'Preetish Ubhrani',
      role: 'Report Writer & Researcher',
      bio: 'Enrollment No: 2401020050. Spearheaded the research and writing of the project report, synthesizing findings into actionable insights.',
      linkedin: 'https://www.linkedin.com/in/preetish-ubhrani-0a60b9323/',
      image: 'https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/db51570073c24e20896eb00bd243a8c0.jpeg'
    },
    {
      id: 5,
      name: 'Jivit Rana',
      role: 'Website Developer & Researcher',
      bio: 'Enrollment No: 2401010202. Led website development and research, ensuring an accessible platform for communicating systems thinking insights.',
      linkedin: 'https://www.linkedin.com/in/jivit',
      image: 'https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/13305b748fec4ab3a08a00f1a3d941d7.jpeg'
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
            Meet the talented second semester students behind this systems thinking approach
            to urban youth mental health for the Fundamentals of Systems Thinking & Environment course.
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
                  {member.image ? (
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="h-full w-full object-cover" 
                      />
                    </div>
                  ) : (
                    <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                      {member.name.split(' ').map(name => name[0]).join('')}
                    </div>
                  )}
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
            We thank our professors and the department for providing this opportunity through the 
            Fundamentals of Systems Thinking & Environment course to tackle critical social issues
            through interdisciplinary collaboration.
          </p>
          <p className="text-gray-600">
            Special thanks to our mentors and advisors in mental health, systems thinking, and digital
            technology for their invaluable guidance throughout this project.
          </p>
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