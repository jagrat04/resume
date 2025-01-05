import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      
      {/* Contact Form */}
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      {/* Chat Feature */}
      <div className="mt-12 w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Chat</h2>
        <div className="border rounded p-4 mb-4 h-48 overflow-y-auto">
          {/* Chat messages will go here */}
          <p className="text-gray-700">No messages yet...</p>
        </div>
        <form className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message"
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact; // Ensure this line is present
