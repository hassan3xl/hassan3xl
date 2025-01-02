import {Link} from 'react-router-dom';
import hassane from '../assets/images/hassane.jpg';
import TechStack from './TechStack';
import Contact from './Contact';

const Home = () => {
	return (
		<main className="bg-gray-900 min-h-screen px-4 sm:px-10 lg:px-20 shadow-md py-6 sm:py-10">
			{/* Navigation Links */}
			<div className="rounded-xl py-2 text-center">
				<div className="mt-6 sm:mt-8">
					<Link
						to="/projects"
						className="hover:bg-gray-800 text-white py-2 px-4 m-1 sm:m-2 rounded-lg shadow-md font-semibold">
						Projects
					</Link>
					<Link
						to="/about"
						className="hover:bg-gray-800 text-white py-2 px-4 m-1 sm:m-2 rounded-lg shadow-md font-semibold">
						About
					</Link>
					<Link
						to="/resume"
						className="hover:bg-gray-800 text-white py-2 px-4 m-1 sm:m-2 rounded-lg shadow-md font-semibold">
						Resume
					</Link>
				</div>
			</div>

			{/* Profile Image */}
			<div className="text-white pt-6 sm:pt-10 flex items-center justify-center">
				<img
					src={hassane}
					alt="Hassan"
					className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
				/>
			</div>

			{/* Introduction Section */}
			<div className="text-white flex items-center justify-center">
				<div className="text-center max-w-xl px-4 py-4">
					<h2 className="text-2xl sm:text-4xl font-bold leading-tight">
						Hassan Saidu
					</h2>
					<p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-lg">
						A passionate software developer building amazing digital
						experiences with Django and React.
					</p>
				</div>
			</div>

			{/* Tech Stack */}
			<div className="text-gray-400 text-lg sm:text-2xl text-center mt-4 sm:mt-6">
				Django | React | Tailwind | Flask | Next.js
			</div>

			{/* Contact Section */}
			<div className="mt-6 sm:mt-10 px-4 sm:px-10">
				<Contact />
			</div>
		</main>
	);
};

export default Home;
