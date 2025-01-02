import React from 'react';
import {Link} from 'react-router-dom';
import {FaExclamationTriangle} from 'react-icons/fa';

const NotFound = () => {
	return (
		<section className="text-center min-h-screen bg-gray-900 flex flex-col justify-center items-center h-96">
			<FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
			<h1 className="text-6xl font-boldmb-4 text-white">404 NOT FOUND</h1>
			<p className="text-xl text-white mb-5">
				{' '}
				This page does not exists
			</p>
			<Link
				to="/"
				className="text-white bg-indigo-700 hover:bg-indigo-900 rounded px-3 py-2 mt-4">
				Go Back
			</Link>
		</section>
	);
};

export default NotFound;
