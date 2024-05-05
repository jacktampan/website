import React, { useState } from 'react';

// Main component
const PortfolioHead = () => {
  return (
    <div className="mx-auto p-6">
      <Header />
    </div>
  );
};

const PortfolioBody = () => {
  return (
    <div className="mx-auto p-6">
      <div className="px-7 py-3 border">
        <AboutSection />
        <WhatIDoSection />
        <FormSection />
      </div>
    </div>
  );
};

const PortfolioFooter = () => {
  return (
    <div className="mx-auto p-6">
      <Footer />
    </div>
  );
};

// Header component
const Header = () => {
  return (
    <div className="px-7 py-3 border">
      <header className="flex justify-center">
        <h1 className="text-xl font-bold text-indigo-500">Web Portfolio</h1>
      </header>
    </div>
  );
};

// About section component
const AboutSection = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-zinc-800">Who am I?</h2>
      <p className="text-zinc-600 mt-2">
        I'm a Creative Director and UI/UX Designer from Sydney, Australia,
        working in web development and print media. I enjoy turning complex
        problems into simple, beautiful and intuitive designs.
      </p>
      <h4 className="text-xl font-semibold text-zinc-800 mt-4">
        Personal Info
      </h4>
      <ul className="text-zinc-600 mt-2">
        <li>📞 +123 456 7890</li>
        <li>📧 example@gmail.com</li>
        <li>📍 Hong Kong, China</li>
        <li>🎂 May 27, 1990</li>
      </ul>
    </div>
  );
};

// What I Do section component
const WhatIDoSection = () => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-zinc-800">What I do!</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-3">
        {[
          'UI/UX Design',
          'App Development',
          'Cyber Security',
          'Web Development',
        ].map((skill) => (
          <div key={skill} className="p-4 bg-zinc-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// Form section component
const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any of the fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      alert('Name, email, and message are required!');
      return;
    }

    // If all fields are filled, proceed with submission
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-zinc-800">Contact me</h3>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900 mt-3"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Anita"
        />

        <label
          htmlFor="email"
          className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900 mt-3"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Anita@example.com"
        />

        <label
          htmlFor="message"
          className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 text-gray-900 mt-3"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="block w-full rounded-md ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
        />

        <button type="submit" className="mt-3 p-3 bg-indigo-500 text-gray-50">
          Submit
        </button>
      </form>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="text-center text-zinc-600 mt-6 px-7 py-3 border">
      © 2024 All Rights Reserved by li-themes.
    </footer>
  );
};

export { PortfolioHead, PortfolioBody, PortfolioFooter };
