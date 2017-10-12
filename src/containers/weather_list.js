import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
      const name = cityData.city.name;
      const temperature = cityData.list.map((item) => {
        return item.main.temp;
      });
      const pressure = cityData.list.map((item) => {
        return item.main.pressure;
      });
      const humidity = cityData.list.map((item) => {
        return item.main.humidity;
      });
      const lon = cityData.city.coord.lon;
      const lat = cityData.city.coord.lat;
      return (
        <tr key={name}>
          <td><GoogleMaps lon={lon} lat={lat} /></td>
          <Chart data={temperature} color="blue" />
          <Chart data={pressure} color="orange" />
          <Chart data={humidity} color="green" />
        </tr>
      );
    }

    render() {
      return (
        <table>
          <thead>
            <tr>
              <th>city</th>
              <th>temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      );
    }
}

function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
