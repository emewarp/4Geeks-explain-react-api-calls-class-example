import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "../component/weather-card";

const baseURL =
	"https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=e55c77cd266c49819ce521ec629ea4e2&include=minutely";
const APIKEY = "e55c77cd266c49819ce521ec629ea4e2";


//MENCIONAR AXIOS PERO CENTRARSE EN EL FETCH

const WeatherPage = () => {
	//hooks
	let [city, setCity] = useState(undefined);
	let [temperature, setTemperature] = useState(undefined);
	let [description, setDescription] = useState(undefined);

	//logic
	const getCity = () => {
		fetch(`${baseURL}`)
			.then(response => response.json())
			.then(responseJSON => {
				setCity(response.data.data[0].city_name);
			});	
	};

	const getTemp = () => {
		fetch(`${baseURL}`)
			.then(response => response.json())
			.then(responseJSON => {
				setTemperature(responseJSON.data[0].temp);
			});
		// axios.get(`${baseURL}`).then(response => {
		// 	setTemperature(response.data.data[0].temp);
		// });
	};

	const getDescription = () => {
        fetch(`${baseURL}`)
			.then(response => response.json())
			.then(responseJSON => {
				setDescription(response.data.data[0].weather.description);
			});
	};

	useEffect(() => {
		getCity();
		getDescription();
		getTemp();
	}, []);

	//ui
	return (
		<>
			<WeatherCard city={city} description={description} temperature={temperature} />
		</>
	);
};

export default WeatherPage;
