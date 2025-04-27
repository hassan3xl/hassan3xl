import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Menu,
	X,
	// GitHub,
	Linkedin,
	Mail,
	ExternalLink,
	ArrowRight,
} from "lucide-react";
import profileImage from "../assets/images/hassane.jpg";
import Navbar from "./Navbar";

// Navigation links data

// Project data (sample)
const featuredProjects = [
	{
		title: "E-Commerce Platform",
		description:
			"A full-stack e-commerce solution with Django backend and React frontend",
		technologies: ["Django", "React", "PostgreSQL"],
		image: "/api/placeholder/600/400",
	},
	{
		title: "Portfolio Dashboard",
		description: "Custom analytics dashboard for tracking performance metrics",
		technologies: ["Next.js", "Tailwind CSS", "Chart.js"],
		image: "/api/placeholder/600/400",
	},
];

const Home = () => {
	const [loading, setLoading] = useState(true);

	// Simulate loading
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-slate-950">
				<div className="w-12 h-12 border-4 border-slate-600 border-t-white rounded-full animate-spin"></div>
			</div>
		);
	}

	return (
		<div className="bg-slate-950 min-h-screen text-slate-200">
			{/* Header/Navigation */}
			<Navbar />

			<main>
				{/* Hero Section */}
				<section className="pt-32 pb-16 px-6 md:pt-40 md:pb-24 relative">
					<div className="container mx-auto max-w-5xl relative z-10">
						<div className="grid md:grid-cols-5 gap-10 items-center">
							<div className="md:col-span-3 space-y-6">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
									<span className="text-sky-400">Software Developer</span>{" "}
									Building Exceptional Digital Experiences
								</h1>
								<p className="text-lg md:text-xl text-slate-300 max-w-2xl">
									I craft elegant solutions with Django and React, turning
									complex problems into seamless user experiences.
								</p>
								<div className="flex flex-wrap gap-4 pt-4">
									<Link
										to="/projects"
										className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-md font-medium transition-colors flex items-center gap-2"
									>
										View Projects <ArrowRight size={18} />
									</Link>
									<a
										href="#contact"
										className="px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-white rounded-md font-medium transition-colors"
									>
										Get In Touch
									</a>
								</div>
								<div className="flex items-center gap-6 pt-8">
									<a
										href="https://github.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-slate-400 hover:text-white transition-colors"
									>
										{/* <GitHub size={22} /> */}
										github
									</a>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-slate-400 hover:text-white transition-colors"
									>
										<Linkedin size={22} />
									</a>
									<a
										href="mailto:contact@example.com"
										className="text-slate-400 hover:text-white transition-colors"
									>
										<Mail size={22} />
									</a>
								</div>
							</div>
							<div className="md:col-span-2 flex justify-center md:justify-end">
								<div className="relative">
									<div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 opacity-70 blur-lg"></div>
									<div className="relative rounded-full p-1 bg-gradient-to-r from-sky-500 to-indigo-500">
										<img
											src={profileImage}
											alt="Hassan Saidu"
											className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Background elements */}
					<div className="absolute inset-0 overflow-hidden z-0">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-sky-900/20 to-transparent opacity-40"></div>
						<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI1MjkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtNnYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
					</div>
				</section>

				{/* Featured Skills */}
				<section className="py-16 px-6 bg-slate-900/30">
					<div className="container mx-auto max-w-5xl">
						<div className="flex flex-col items-center text-center mb-12">
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
								Technical Expertise
							</h2>
							<div className="w-20 h-1 bg-sky-500 rounded-full mb-6"></div>
							<p className="text-slate-300 max-w-2xl">
								Building modern web applications with a focus on clean
								architecture, performance, and elegant user interfaces.
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
							{["Django", "React", "Tailwind CSS", "Next.js", "Flask"].map(
								(tech) => (
									<div
										key={tech}
										className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg py-6 px-4 text-center hover:border-sky-500/50 transition-colors group"
									>
										<p className="font-medium text-white group-hover:text-sky-400 transition-colors">
											{tech}
										</p>
									</div>
								)
							)}
						</div>
					</div>
				</section>

				{/* Featured Projects */}
				<section className="py-20 px-6">
					<div className="container mx-auto max-w-5xl">
						<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
							<div>
								<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
									Featured Projects
								</h2>
								<div className="w-20 h-1 bg-sky-500 rounded-full mb-6"></div>
								<p className="text-slate-300 max-w-2xl">
									A selection of my recent work across web applications and
									digital platforms.
								</p>
							</div>
							<Link
								to="/projects"
								className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors mt-6 md:mt-0 font-medium"
							>
								View all projects <ArrowRight size={16} className="ml-2" />
							</Link>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{featuredProjects.map((project, index) => (
								<div
									key={index}
									className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-sky-500/50 transition-all group"
								>
									<div className="aspect-video overflow-hidden">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
											{project.title}
										</h3>
										<p className="text-slate-300 mb-4">{project.description}</p>
										<div className="flex flex-wrap gap-2 mb-6">
											{project.technologies.map((tech) => (
												<span
													key={tech}
													className="text-xs px-3 py-1 bg-slate-700/70 text-slate-200 rounded-full"
												>
													{tech}
												</span>
											))}
										</div>
										<div className="flex items-center">
											<a
												href="#"
												className="text-sky-400 hover:text-sky-300 font-medium text-sm flex items-center transition-colors"
											>
												View Project <ExternalLink size={14} className="ml-1" />
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-20 px-6 bg-slate-900/30">
					<div className="container mx-auto max-w-4xl">
						<div className="flex flex-col items-center text-center mb-12">
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
								Get In Touch
							</h2>
							<div className="w-20 h-1 bg-sky-500 rounded-full mb-6"></div>
							<p className="text-slate-300 max-w-2xl">
								Have a project in mind or want to collaborate? I'd love to hear
								from you.
							</p>
						</div>

						<div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8">
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-slate-300 mb-2"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-slate-300 mb-2"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
											placeholder="Your email"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-slate-300 mb-2"
									>
										Subject
									</label>
									<input
										type="text"
										id="subject"
										className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
										placeholder="Project inquiry / Collaboration / Other"
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-slate-300 mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										rows="5"
										className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
										placeholder="Tell me about your project or inquiry..."
									></textarea>
								</div>
								<button
									type="submit"
									className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors w-full md:w-auto"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="py-8 px-6 border-t border-slate-800/50">
				<div className="container mx-auto max-w-5xl">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-6 md:mb-0">
							<Link to="/" className="font-bold text-lg text-white">
								Hassan<span className="text-sky-400">.</span>dev
							</Link>
							<p className="text-slate-400 text-sm mt-2">
								© {new Date().getFullYear()} Hassan Saidu. All rights reserved.
							</p>
						</div>
						<div className="flex items-center gap-6">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition-colors"
							>
								{/* <GitHub size={18} /> */}
								github
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition-colors"
							>
								<Linkedin size={18} />
							</a>
							<a
								href="mailto:contact@example.com"
								className="text-slate-400 hover:text-white transition-colors"
							>
								<Mail size={18} />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
