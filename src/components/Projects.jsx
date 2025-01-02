import {useEffect, useState} from 'react';
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';

const Projects = () => {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(
					'https://api.github.com/users/hassan3xl/repos',
				);
				if (!response.ok) {
					throw new Error('Failed to fetch repositories');
				}
				const data = await response.json();
				setRepos(data);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchRepos();
	}, []);

	if (loading) return <div className='text-white'>Loading...</div>;
	if (error) return <div className="text-white">Error: {error}</div>;

	return (
		<>
			<div className="bg-gray-900 text-white min-h-screen  p-6">
				{repos.map((repo) => (
					<div key={repo.id} className="max-w-2xl mx-auto ">
						{/* Contact Section */}
						<section className="bg-gray-700 p-6 hover:bg-gray-800 rounded-lg shadow mb-8">
							<h2 className="text-2xl font-semibold mb-4 text-center">
								{repo.name}
							</h2>
							<p>{repo.description}</p>
							<p>
								<a
									href={repo.html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-indigo-400 hover:underline">
									View Repository
								</a>
							</p>

							{/* <div className="container flex justify-between items-center mx-w-2">
								<div className="card-stat">
									<FaStar />
									<span>{repo.stargazers_count}</span>
								</div>
								<div className="card-stat">
									<FaCodeBranch />
									<span>{repo.forks_count}</span>
								</div>
								<div className="">
									<FaEye />
									<span>{repo.watchers_count}</span>
								</div>
							</div> */}
						</section>
					</div>
				))}
			</div>
		</>
	);
};

export default Projects;
