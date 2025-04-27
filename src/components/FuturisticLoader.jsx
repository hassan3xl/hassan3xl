import React from "react";

const FuturisticLoader = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen bg-black">
			{/* Grid background */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,120,128,0.1)_0,_rgba(0,0,0,0)_70%)] z-0" />

			{/* Loader container */}
			<div className="relative z-10">
				{/* Outer ring */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-t-2 border-b-2 border-slate-400 rounded-full animate-spin opacity-30"></div>

				{/* Middle ring */}
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-r-2 border-l-2 border-white rounded-full animate-spin opacity-60"
					style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
				></div>

				{/* Inner ring */}
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-t-2 border-slate-300 rounded-full animate-spin"
					style={{ animationDuration: "1s" }}
				></div>

				{/* Center dot */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-pulse"></div>
			</div>

			{/* Loading text */}
			<div className="relative z-10 mt-24">
				<p className="text-slate-400 font-mono text-sm tracking-widest uppercase animate-pulse">
					Initializing
				</p>
				<div className="mt-2 flex justify-center space-x-1">
					{[0, 1, 2].map((dot) => (
						<div
							key={dot}
							className="w-2 h-2 bg-white rounded-full animate-bounce"
							style={{
								animationDelay: `${dot * 0.2}s`,
								animationDuration: "1s",
							}}
						></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FuturisticLoader;
