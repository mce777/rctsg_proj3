import axios from 'axios';
const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';   // convention to do it like this

// an action creator
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);   // will return Promise

	// see, it's returning an object, ie action
	return {
		type: FETCH_WEATHER,
		payload: request  //returning the promise as the payload
	};
}

// see the payload above? Redux-Promise grabs it, resolves it
// and returns a new action.

// Important that this is done in the Action creator before it
// hits the reducer