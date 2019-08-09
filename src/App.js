import React from 'react';
import ForecastDay from './components/ForecastDay';
import axios from 'axios'
import './App.css';

// const forecastDummy = [
//     {
//         maxTemp: 99,
//         minTemp: 67,
//         humidity: 50,
//         wind: {
//             speed: 13,
//             direction: 129
//         },
//         weatherPic: 'LightRain'
//     },
//     {
//         maxTemp: 95,
//         minTemp: 56,
//         humidity: 50,
//         wind: {
//             speed: 13,
//             direction: 278
//         },
//         weatherPic: 'ThunderyShowers'
//     },
//     {
//         maxTemp: 99,
//         minTemp: 67,
//         humidity: 50,
//         wind: {
//             speed: 13,
//             direction: 129
//         },
//         weatherPic: 'ThunderyHeavyRain'
//     },
//     {
//         maxTemp: 99,
//         minTemp: 67,
//         humidity: 50,
//         wind: {
//             speed: 13,
//             direction: 129
//         },
//         weatherPic: 'Sunny'
//     },
//     {
//         maxTemp: 99,
//         minTemp: 67,
//         humidity: 50,
//         wind: {
//             speed: 13,
//             direction: 129
//         },
//         weatherPic: 'HeavyShowers'
//     }
// ]

class App extends React.Component {

    constructor(props) {
        super(props);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.loadWeatherDataCoord(position.coords.latitude, position.coords.longitude);
            });
        }

        this.state = {weatherData: null, zipcode: '', validZip: false};
    }

    loadWeatherData(zipcode) {
        axios.get('https://10qqyrptbi.execute-api.us-west-2.amazonaws.com/default/forecast-function', {params:{zipcode: zipcode}, crossdomain: true})
            .then(response => this.setState({weatherData: response.data.days}));
    }

    loadWeatherDataCoord(lat, lon) {
        axios.get('https://10qqyrptbi.execute-api.us-west-2.amazonaws.com/default/forecast-function', {params:{lat: lat, lon: lon}, crossdomain: true})
            .then(response => this.setState({weatherData: response.data.days}));

    }

    render() {
        let {zipcode, weatherData, validZip} = this.state;
        let today = new Date();

        return <div className="App">
            <div id="location">
                <input type="text" placeholder="Zip code" onChange={(e) => this.setState({zipcode: e.target.value, validZip: /^[0-9]{5}$/.test(e.target.value)})} value={zipcode} ></input>
                <button disabled={!validZip} onClick={() => this.loadWeatherData(zipcode)} >Go</button>
            </div>
            {!!weatherData && weatherData.map((day, i) => {
                console.log(day);
                return <ForecastDay dayNum={(today.getDay() + i) % 7} forecast={day} key={i} />
            })}
        </div>
    }
}

export default App;
