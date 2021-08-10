import React from 'react';

const Weather = ({item}) => {
    if(!item){
        return null;
    }
    console.log(item)
    return (
        <div className="city">
            <h2 className="city-name">
                <span>{item.name}</span>
                {item.country &&
                    <img 
                        src={`https://www.worldatlas.com/r/w425/img/flag/${item.country.toLowerCase()}-flag.jpg`} 
                        style={{
                            width: '30px', 
                            borderTopRightRadius: '7px', 
                            borderBottomLeftRadius: '7px', 
                            marginLeft: '5px'
                        }}
                        alt={item.country}
                    />
                }
            </h2>
            <div className="city-temp">
                <img
                    className="city-icon"
                    src={`.././images/${item.weather.summary.icon}.svg`}
                    alt={item.weather.summary.description}
                />
                <div className="temp-info">
                    <strong>{Math.round(item.weather.temperature.actual)}
                    <sup>&deg;C</sup></strong>
                    <small>
                        Feels like <span>{Math.round(item.weather.temperature.feelsLike)}<sup>&deg;C</sup></span>
                    </small>
                    <p>
                        {item.weather.summary.description}
                    </p>
                    <p>
                        <label>Wind speed: </label>
                        {Math.round(item.weather.wind.speed)} <span style={{textTransform: 'lowercase'}}>km/h</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Weather;
