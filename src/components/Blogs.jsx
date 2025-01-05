import React from 'react';

const Blogs = () => {
  const blogList = [
    {
      title: 'How to Build a Portfolio Website',
      date: 'Dec 20, 2024',
      excerpt:
        'Learn how to create a stunning portfolio website using React and Tailwind CSS. Step-by-step guide with code examples.',
      link: '#',
    },
    {
      title: 'JavaScript Tips for Beginners',
      date: 'Dec 15, 2024',
      excerpt:
        'Discover essential JavaScript tips and tricks to improve your coding skills and write cleaner code.',
      link: '#',
    },
    {
      title: 'Understanding Tailwind CSS',
      date: 'Dec 10, 2024',
      excerpt:
        'A deep dive into Tailwind CSS, its utility-first approach, and how it simplifies frontend development.',
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blogs</h2>

        {/* Blog List */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogList.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <p className="text-sm text-gray-700 mb-4">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
