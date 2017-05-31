import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			// not mutating state, but returning NEW state
			// returns new array with old data + new data
			return state.concat([action.payload.data]);
			// an alt way (ES6) ...
			// return [ action.payload.data, ...state ];
	}

	return state;
}

