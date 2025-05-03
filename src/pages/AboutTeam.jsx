import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function AboutTeam() {
  const [teamMembers] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      role: "Project Lead & System Thinker",
      bio: "Alex specializes in systems thinking and causal loop diagramming with a background in psychology and data science.",
      image: "/api/placeholder/150/150",
      github: "https://github.com/alexj",
      linkedin: "https://linkedin.com/in/alexj",
      email: "alex@fstemh.org"
    },
    {
      id: 2,
      name: "Maya Patel",
      role: "Data Analyst & Visualization Expert",
      bio: "Maya brings expertise in mental health data analysis and creating intuitive visualizations to communicate complex insights.",
      image: "/api/placeholder/150/150",
      github: "https://github.com/mayap",
      linkedin: "https://linkedin.com/in/mayap",
      email: "maya@fstemh.org"
    },
    {
      id: 3,
      name: "Jordan Lee",
      role: "Frontend Developer",
      bio: "Jordan leads UI/UX design and frontend implementation with expertise in React and accessible, responsive web design.",
      image: "/api/placeholder/150/150",
      github: "https://github.com/jordanl",
      linkedin: "https://linkedin.com/in/jordanl",
      email: "jordan@fstemh.org"
    },
    {
      id: 4,
      name: "Taylor Rivera",
      role: "Mental Health Researcher",
      bio: "Taylor contributes research expertise on urban youth mental health trends and evidence-based intervention strategies.",
      image: "/api/placeholder/150/150",
      github: "https://github.com/taylorr",
      linkedin: "https://linkedin.com/in/taylorr",
      email: "taylor@fstemh.org"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the interdisciplinary team behind this systems thinking approach to urban youth mental health.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            The FSTE Hackathon 2025 team is dedicated to uncovering and addressing the systemic causes of the rising mental health crisis among urban youth. We combine systems thinking, data analysis, and innovative technology to visualize complex problems and identify high-leverage intervention points.
          </p>
          <p className="text-gray-700">
            Our platform aims to bridge the gap between research and action by making systems-level insights accessible to policymakers, educators, healthcare providers, and youth advocates.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="h-32 w-32 rounded-full object-cover border-4 border-blue-100"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium text-center mb-2">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.github} className="text-gray-600 hover:text-gray-900">
                    <Github size={20} />
                  </a>
                  <a href={member.linkedin} className="text-gray-600 hover:text-gray-900">
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-gray-900">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Acknowledgments</h2>
          <p className="text-gray-700 mb-4">
            We would like to thank the organizers of the FSTE Hackathon 2025 for creating a platform to address critical social issues through interdisciplinary collaboration.
          </p>
          <p className="text-gray-700 mb-4">
            Special thanks to our mentors and advisors from the fields of mental health, systems thinking, and digital technology who provided invaluable guidance throughout this project.
          </p>
          <p className="text-gray-700">
            We're also grateful to the youth advocacy groups and research participants who shared their experiences and insights, making this work more meaningful and grounded in reality.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions about our project or interested in collaboration?
          </p>
          <a 
            href="mailto:team@fstemh.org" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
}