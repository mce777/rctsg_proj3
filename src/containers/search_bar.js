import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};

		// note the 'binding'. Not the only way, but this is common
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault(); // prevents the form from reloading on submit

		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="get a 5day forecast"
				    className="form-control"
				    value={this.state.term}
				    onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

// causes fetchWeather (the Action Creator) when its called
// to flow into Middleware and then the Reducers
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}
// connecting to redux here
export default connect(null, mapDispatchToProps)(SearchBar);