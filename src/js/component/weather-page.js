import React, { useEffect, useState } from "react";
import WeatherCard from "../component/weather-card";


const WeatherPage = () => {
	//hooks
	let [city] = useState(undefined);
	let [temperature] = useState(undefined);
	let [description] = useState(undefined);

	//logic
	

	//ui
	return (
		<>
			<WeatherCard city={city} description={description} temperature={temperature} />
		</>
	);
};

export default WeatherPage;
