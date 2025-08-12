import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to StellarFolio</h1>
      <p className="mt-4 text-lg">Hi, I'm Aditya. This is my personal portfolio showcasing my projects, skills, and contact details.</p>
    </div>
  );
}

function Projects() {
  const projectList = [
    { title: 'AI Crypto Chatbot', description: 'A chatbot integrating LLMs with cryptocurrency data.' },
    { title: 'Hotel Booking API', description: 'A backend API for booking management using Java and Hibernate.' },
    { title: 'Waste Detection ML', description: 'A machine learning model for classifying garbage images.' },
  ];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="mt-4 space-y-4">
        {projectList.map((proj, index) => (
          <li key={index} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p>{proj.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const skills = ['Java', 'Python', 'React', 'Node.js', 'MongoDB', 'MySQL', 'Machine Learning'];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Skills</h1>
      <ul className="mt-4 list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}! I'll get back to you soon.`);
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-md">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="border p-2 w-full" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="border p-2 w-full" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow p-4 flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/skills" className="hover:underline">Skills</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
