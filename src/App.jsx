import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import React from "react";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/resume/" element={<Resume />} />

					<Route path="contact" element={<Contact />} />
					<Route path="projects" element={<Projects />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
