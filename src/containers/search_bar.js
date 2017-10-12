import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  submitForm(event) {
    event.preventDefault();
    if( this.state.term.length > 0 )
      this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    const {term} = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <input
          placeholder="Select a city"
          value={term}
          onChange={this.onInputChange}
        />
        <button>Search</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

// Dont need any state here
export default connect(null, mapDispatchToProps)(SearchBar);
