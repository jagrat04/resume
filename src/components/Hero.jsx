import React from 'react';
// import axios from 'axios';

const Hero = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Fetch data from the backend
//     axios.get('http://localhost:5000/api/test')
//       .then(response => {
//         setMessage(response.data.message);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  return (
    <div className="hero-section min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center">
        {/* Profile Picture */}
        <div className="profile-picture mx-auto mb-6">
          <img
            src="/path-to-profile-picture.jpg" // Replace with the actual path to your profile picture
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Name and Tagline */}
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-xl italic font-light mb-6">
          Software Engineer | Innovator | Problem Solver
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Explore My Work
          </button>
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
