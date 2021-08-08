import React from "react";

const WeatherCard = props => {
	const hotDescription = "sorry but you're gonna die in hell 🔥";
	const coldDescription = "sorry but you're trapped in a freezer ❄️";

	return (
		<>
			<div>{props.temperature} C</div>		
			<div>{props.description}  </div>
            {props.temperature > 30 ? (
				<div>{hotDescription}</div>
			) : (
				<div>{coldDescription}</div>
			)}
			<div>{props.city}</div>
		</>
	);
};

export default WeatherCard;