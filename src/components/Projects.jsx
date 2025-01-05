import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      image: '/project1.jpg',
      description: 'A personal portfolio website to showcase my skills and projects.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'E-commerce App',
      image: '/project2.jpg',
      description: 'An e-commerce platform with features like cart, checkout, and user accounts.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'Chat Application',
      image: '/project3.jpg',
      description: 'A real-time chat application with support for file sharing and group chats.',
      technologies: ['React', 'Socket.io', 'Express'],
      liveDemo: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium">Technologies:</h4>
                  <ul className="flex space-x-2 mt-1">
                    {project.technologies.map((tech, i) => (
                      <li
                        key={i}
                        className="text-xs bg-gray-200 rounded-full px-2 py-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
