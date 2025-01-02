import {Link} from 'react-router-dom';

const Resume = () => {
	return (
		<div className="bg-gray-900 text-white min-h-screen p-6">
			<div className="max-w-4xl mx-auto">
				{/* Header Section */}
				<header className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-2">
						<Link to="/">Hassan Saidu</Link>
					</h1>
					<p className="text-gray-400 text-lg">
						Software Developer | Django | React | Tailwind | Flask |
						Next.js
					</p>
				</header>

				{/* Contact Section */}
				<section className="bg-gray-800 p-6 rounded-lg shadow mb-8">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Contact Information
					</h2>
					<p>
						Email:{' '}
						<a
							href="mailto:saiduhassanhussaine@gmail.com"
							className="text-indigo-400 hover:underline">
							Saiduhassanhussaine@gmail.com
						</a>
					</p>
					<p>
						GitHub:{' '}
						<a
							href="https://github.com/Mirazgh"
							className="text-indigo-400 hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							https://github.com/hassan3xl
						</a>
					</p>
					<p>
						LinkedIn:{' '}
						<a
							href="https://linkedin.com/in/hassan"
							className="text-indigo-400 hover:underline"
							target="_blank"
							rel="noopener noreferrer">
							https://linkedin.com/in/hassan3xl
						</a>
					</p>
					<p>
						Contact:{' '}
						<a
							className="text-indigo-400 hover:underline"
							rel="noopener noreferrer">
							+234 916 080 7885
						</a>
					</p>
				</section>

				{/* Skills Section */}
				<section className="bg-gray-800 p-6 rounded-lg shadow mb-8">
					<h2 className="text-2xl text-center font-semibold mb-6">
						Technical Skills
					</h2>
					<ul className="grid grid-cols-4 gap-4">
						<li>Python</li>
						<li>JavaScript</li>
						<li>Django</li>
						<li>React</li>
						<li>Next.js</li>
						<li>Remix</li>
						<li>Express</li>
						<li>Flask</li>
					</ul>
				</section>

				{/* Experience Section */}
				<section className="bg-gray-800 p-6 rounded-lg shadow mb-8">
					<h2 className="text-2xl font-semibold text-center mb-4">
						Experience
					</h2>
					<div className="mb-4">
						<h3 className="text-xl font-bold">
							Freelance Developer
						</h3>
						<p className="text-gray-400">2023 - Present</p>
						<p>
							Developed custom web applications for clients using
							Django and React, ensuring performance, scalability,
							and user satisfaction.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-bold">
							Intern - Software Development
						</h3>
						<p className="text-gray-400">Summer 2024</p>
						<p>
							Worked on building and optimizing APIs with Django
							Rest Framework and integrated them with React
							frontends for user interfaces.
						</p>
					</div>
				</section>

				{/* Projects Section */}
				<section className="bg-gray-800 p-6 rounded-lg shadow mb-8">
					<h2 className="text-2xl font-semibold text-center mb-4">
						Projects
					</h2>
					<div className="mb-4">
						<h3 className="text-xl font-bold">
							Mining Telegram Bot
						</h3>
						<p className="text-gray-400">
							A feature-rich bot for mining projects built with
							Django and Python, incorporating blockchain
							integrations and automated user rewards.
						</p>
					</div>
					<div className="mb-4">
						<h3 className="text-xl font-bold">
							MercaNest Telegram Marketplace
						</h3>
						<p className="text-gray-400">
							A market place where buyers and sellers can users
							can become merchants ....
						</p>
					</div>
					<div className="mb-4">
						<h3 className="text-xl font-bold">Quantum Stack</h3>
						<p className="text-gray-400">
							A cutting-edge coding solution that brings ideas to
							life, they offer wide range of services to tackle
							any software challenge.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-bold">Portfolio Website</h3>
						<p className="text-gray-400">
							A personal portfolio website showcasing my skills
							and projects, built with React and Tailwind CSS.
						</p>
					</div>
				</section>

				{/* Education Section */}
				<section className="bg-gray-800 p-6 rounded-lg shadow mb-8">
					<h2 className="text-2xl font-semibold text-center mb-4">
						Education
					</h2>
					<p>Bachelor's Degree in Computer Science</p>
					<p className="text-gray-400">
						Modibbo Adam University,Yola | 2022 - Present
					</p>
				</section>
			</div>
		</div>
	);
};

export default Resume;
