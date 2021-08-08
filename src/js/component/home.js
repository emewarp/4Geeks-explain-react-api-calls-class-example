import React from "react";
import WeatherPage from "./weather-page";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<WeatherPage />
		</div>
	);
}