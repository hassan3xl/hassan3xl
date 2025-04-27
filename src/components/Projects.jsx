import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Star,
	GitFork,
	Eye,
	ExternalLink,
	Github,
	Menu,
	X,
	Search,
	Filter,
	ArrowUpRight,
	Linkedin,
	Mail,
} from "lucide-react";
import Navbar from "./Navbar";

const Projects = () => {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTech, setSelectedTech] = useState("All");

	// Navigation links data
	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "/projects", label: "Projects" },
		{ path: "/resume", label: "Resume" },
	];

	// Example tech stack for filtering
	const techStacks = [
		"All",
		"Django",
		"React",
		"Python",
		"JavaScript",
		"Tailwind",
	];

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				// Simulate longer loading for demonstration
				const timer = setTimeout(async () => {
					const response = await fetch(
						"https://api.github.com/users/hassan3xl/repos"
					);
					if (!response.ok) {
						throw new Error("Failed to fetch repositories");
					}
					const data = await response.json();

					// Add some example tech stacks for filtering demonstration
					const enhancedData = data.map((repo) => ({
						...repo,
						// For demo purposes, assign random tech stacks to each repo
						techStack: [
							techStacks[
								Math.floor(Math.random() * (techStacks.length - 1)) + 1
							],
							techStacks[
								Math.floor(Math.random() * (techStacks.length - 1)) + 1
							],
						].filter((v, i, a) => a.indexOf(v) === i), // Remove duplicates
					}));

					setRepos(enhancedData);
					setLoading(false);
				}, 1200);

				return () => clearTimeout(timer);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchRepos();
	}, []);

	// Filter repos based on search term and selected tech
	const filteredRepos = repos.filter((repo) => {
		const matchesSearch =
			repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			(repo.description &&
				repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
		const matchesTech =
			selectedTech === "All" ||
			(repo.techStack && repo.techStack.includes(selectedTech));
		return matchesSearch && matchesTech;
	});

	return (
		<div className="bg-slate-950 min-h-screen text-slate-200">
			{/* Header/Navigation */}
			<Navbar />

			<main className="pt-24 px-6 pb-20">
				<div className="container mx-auto max-w-6xl">
					{/* Page Header */}
					<div className="mb-12 max-w-3xl">
						<h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Projects & Work
						</h1>
						<div className="w-20 h-1 bg-sky-500 rounded-full mb-6"></div>
						<p className="text-slate-300 text-lg">
							A collection of my development projects, including personal, open
							source, and client work. Browse through to see my technical
							capabilities and problem-solving approach.
						</p>
					</div>

					{/* Search and Filter Controls */}
					<div className="mb-12 flex flex-col md:flex-row gap-4">
						<div className="relative flex-grow">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
								<Search size={18} />
							</div>
							<input
								type="text"
								placeholder="Search projects..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-10 pr-4 py-3 bg-slate-800/70 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
							/>
						</div>
						<div className="relative min-w-48">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
								<Filter size={18} />
							</div>
							<select
								value={selectedTech}
								onChange={(e) => setSelectedTech(e.target.value)}
								className="w-full pl-10 pr-4 py-3 bg-slate-800/70 border border-slate-700 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
							>
								{techStacks.map((tech) => (
									<option key={tech} value={tech}>
										{tech}
									</option>
								))}
							</select>
							<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
								<ArrowUpRight size={18} />
							</div>
						</div>
					</div>

					{/* Loading State */}
					{loading && (
						<div className="flex items-center justify-center py-20">
							<div className="w-12 h-12 border-4 border-slate-600 border-t-sky-400 rounded-full animate-spin"></div>
						</div>
					)}

					{/* Error State */}
					{error && (
						<div className="bg-red-900/30 border border-red-700 rounded-lg p-6 text-center">
							<p className="text-red-300 text-lg">Error: {error}</p>
							<button
								className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-md text-white font-medium"
								onClick={() => window.location.reload()}
							>
								Try Again
							</button>
						</div>
					)}

					{/* No Results State */}
					{!loading && !error && filteredRepos.length === 0 && (
						<div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8 text-center">
							<p className="text-slate-300 text-lg mb-2">
								No projects found matching your criteria.
							</p>
							<p className="text-slate-400">
								Try adjusting your search or filter settings.
							</p>
						</div>
					)}

					{/* Projects Grid */}
					{!loading && !error && filteredRepos.length > 0 && (
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredRepos.map((repo) => (
								<div
									key={repo.id}
									className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-sky-500/50 transition-all group"
								>
									<div className="aspect-video bg-gradient-to-br from-slate-700/30 to-slate-900/30 flex items-center justify-center">
										<Github
											size={36}
											className="text-slate-500 group-hover:text-sky-400 transition-colors"
										/>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors line-clamp-1">
											{repo.name}
										</h3>
										<p className="text-slate-300 mb-4 min-h-12 line-clamp-2">
											{repo.description || "No description available"}
										</p>

										{/* Tech Stack */}
										<div className="flex flex-wrap gap-2 mb-4">
											{repo.techStack &&
												repo.techStack.map((tech) => (
													<span
														key={tech}
														className="text-xs px-3 py-1 bg-slate-700/70 text-slate-200 rounded-full"
													>
														{tech}
													</span>
												))}
										</div>

										{/* Stats Row */}
										<div className="flex items-center justify-between mb-4 text-slate-400 text-sm">
											<div className="flex items-center gap-1">
												<Star size={14} /> <span>{repo.stargazers_count}</span>
											</div>
											<div className="flex items-center gap-1">
												<GitFork size={14} /> <span>{repo.forks_count}</span>
											</div>
											<div className="flex items-center gap-1">
												<Eye size={14} /> <span>{repo.watchers_count}</span>
											</div>
										</div>

										<div className="flex items-center justify-between">
											<a
												href={repo.html_url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sky-400 hover:text-sky-300 font-medium text-sm flex items-center transition-colors"
											>
												View Repository{" "}
												<ExternalLink size={14} className="ml-1" />
											</a>

											{repo.homepage && (
												<a
													href={repo.homepage}
													target="_blank"
													rel="noopener noreferrer"
													className="text-white bg-sky-600 hover:bg-sky-700 px-3 py-1 rounded text-xs font-medium transition-colors"
												>
													Live Demo
												</a>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					)}

					{/* GitHub Profile Link */}
					{!loading && !error && filteredRepos.length > 0 && (
						<div className="mt-12 text-center">
							<a
								href="https://github.com/hassan3xl"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-white transition-colors"
							>
								<Github size={18} className="mr-2" /> View More on GitHub
							</a>
						</div>
					)}
				</div>
			</main>

			{/* Footer */}
			<footer className="py-8 px-6 border-t border-slate-800/50">
				<div className="container mx-auto max-w-6xl">
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
								<Github size={18} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition-colors"
							>
								<Linkedin size={18} className="hidden" />{" "}
								{/* Linkedin icon would need to be imported */}
							</a>
							<a
								href="mailto:contact@example.com"
								className="text-slate-400 hover:text-white transition-colors"
							>
								<Mail size={18} className="hidden" />{" "}
								{/* Mail icon would need to be imported */}
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Projects;
