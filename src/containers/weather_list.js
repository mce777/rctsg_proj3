import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => (weather.main.temp - 273.15 ));
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		console.log(temps);
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					{/*notice 'data' and 'color' from chart.js*/}
					<Chart data={temps} color="orange" units="C"/>
				</td>
				<td>
					<Chart data={pressures} color="green" units="hPA" />
				</td>
				<td>
					<Chart data={humidities} color="black" units="%"/>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps( { weather } ) {
	// const weather = state.weather
	return  { weather }; // {weather} === { weather: weather }
}
//connecting to redux
export default connect(mapStateToProps)(WeatherList);