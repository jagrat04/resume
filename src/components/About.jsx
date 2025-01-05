import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gray-100 text-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/about-image.jpg"
            alt="About Me"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Bio and Skills */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg">
            I am a passionate software engineer with experience in building efficient and scalable applications. I love solving complex problems and turning ideas into reality.
          </p>

          {/* Skills Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div>
              <label className="block text-sm font-medium">JavaScript</label>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">React</label>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Tailwind CSS</label>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
