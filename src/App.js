import React from 'react';
import ForecastDay from './components/ForecastDay';
import './App.css';

const forecastDummy = [
    {
        maxTemp: 99,
        minTemp: 67,
        humidity: 50,
        wind: {
            speed: 13,
            direction: 129
        },
        weatherPic: 'LightRain'
    },
    {
        maxTemp: 95,
        minTemp: 56,
        humidity: 50,
        wind: {
            speed: 13,
            direction: 278
        },
        weatherPic: 'ThunderyShowers'
    },
    {
        maxTemp: 99,
        minTemp: 67,
        humidity: 50,
        wind: {
            speed: 13,
            direction: 129
        },
        weatherPic: 'ThunderyHeavyRain'
    },
    {
        maxTemp: 99,
        minTemp: 67,
        humidity: 50,
        wind: {
            speed: 13,
            direction: 129
        },
        weatherPic: 'Sunny'
    },
    {
        maxTemp: 99,
        minTemp: 67,
        humidity: 50,
        wind: {
            speed: 13,
            direction: 129
        },
        weatherPic: 'HeavyShowers'
    }
]

class App extends React.Component {
    render() {
        return <div className="App">
            {forecastDummy.map((day, i) => {
                return <ForecastDay dayNum={i} forecast={day} key={i} />
            })}
        </div>
    }
}

export default App;
