import hassane from '../assets/images/hassane.jpg';

const About = () => {
	return (
		<div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
				{/* Left Column: Info */}
				<div className="flex flex-col justify-center p-4 sm:p-6">
					<h1 className="text-3xl sm:text-4xl font-bold mb-4">
						Hello, I'm Hassan
					</h1>
					<p className="text-base sm:text-lg text-gray-400 mb-4">
						Hello! I'm Hassan, a passionate software developer with
						a strong foundation in Python, JavaScript, and modern
						web development frameworks like Django and React.
					</p>
					<p className="text-base sm:text-lg text-gray-400 mb-4">
						With a deep interest in creating dynamic and efficient
						digital solutions, I thrive in developing scalable web
						applications and building seamless user experiences. I
						have hands-on experience in both frontend and backend
						development, which enables me to work on full-stack
						projects. My focus is on building high-quality,
						maintainable code that meets the needs of users while
						ensuring performance and security.
					</p>
					<p className="text-base sm:text-lg text-gray-400">
						I enjoy learning new technologies and continually
						improving my skills to stay up to date with industry
						trends. Whether it's integrating complex APIs, creating
						interactive UIs, or solving complex technical problems,
						I am dedicated to producing exceptional results. Feel
						free to explore my work and get in touch if you're
						looking for a developer with a passion for innovation
						and a knack for problem-solving.
					</p>
				</div>

				{/* Right Column: Photo */}
				<div className="flex justify-center items-center">
					<img
						src={hassane}
						alt="Hassan"
						className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
