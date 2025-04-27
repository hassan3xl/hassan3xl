import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Menu,
	X,
	// GitHub,
} from "lucide-react";
const navLinks = [
	{ path: "/", label: "Home" },
	{ path: "/projects", label: "Projects" },
	{ path: "/resume", label: "Resume" },
];

const Navbar = () => {
	const [loading, setLoading] = useState(true);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
		<header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
			<div className="container mx-auto px-6 py-4 flex items-center justify-between">
				<Link to="/" className="font-bold text-xl text-white tracking-tight">
					Hassan3xl<span className="text-sky-400">.</span>dev
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className="text-sm font-medium hover:text-sky-400 transition-colors py-2"
						>
							{link.label}
						</Link>
					))}
					<a
						href="#contact"
						className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-sm font-medium transition-colors"
					>
						Contact
					</a>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-slate-200 hover:text-white"
					onClick={() => setMobileMenuOpen(true)}
					aria-label="Open menu"
				>
					<Menu size={24} />
				</button>
			</div>

			{/* Mobile Navigation Overlay */}
			{mobileMenuOpen && (
				<div className="fixed inset-0 bg-slate-950 z-50 md:hidden">
					<div className="flex flex-col h-full">
						<div className="flex justify-between items-center px-6 py-4 border-b border-slate-800/50">
							<Link to="/" className="font-bold text-xl text-white">
								Hassan<span className="text-sky-400">.</span>dev
							</Link>
							<button
								className="text-slate-200 hover:text-white"
								onClick={() => setMobileMenuOpen(false)}
								aria-label="Close menu"
							>
								<X size={24} />
							</button>
						</div>
						<div className="flex flex-col py-8 px-6 space-y-6">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className="text-xl font-medium hover:text-sky-400 transition-colors py-2"
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<a
								href="#contact"
								className="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-lg font-medium transition-colors text-center mt-6"
								onClick={() => setMobileMenuOpen(false)}
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
