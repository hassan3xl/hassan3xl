import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';
const Contact = () => {
	return (
		<div className=" text-white p-6">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-2xl text-center font-semibold mb-6"></h2>
				<div className="flex space-x-4 justify-center">
					<a
						href="https://github.com/hassan3xl"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-gray-400">
						<FaGithub size={60} />
					</a>
					<a
						href="https://linkedin.com/in/hassan"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-gray-400">
						<FaLinkedin size={60} />
					</a>
					<a
						href="https://twitter.com/elhassanesaid01"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-gray-400">
						<FaTwitter size={60} />
					</a>
					<a
						href="https://instagram.com/hassan3xl"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-gray-400">
						<FaInstagram size={60} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
