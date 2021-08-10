import React, {useState, useEffect} from 'react';
import {GET_WEATHER_QUERY} from '../graphQL/Queries';
import { useQuery } from '@apollo/client';
import Weather from '../components/weather';

const Home = () => {
    const [skip, setSkip] = useState(false);
    const [name, setName] = useState('');
    const { loading, data } = useQuery(
        GET_WEATHER_QUERY,
        { 
            variables: { name: name },
            skip: skip
        }
    )
    const [weather, setWeather] = useState(data && data.getCityByName ? data.getCityByName : null);

    useEffect(()=>{
        if (!loading && !!data) {
            setWeather(data.getCityByName);
            setSkip(true)
        }
    },[loading, data])

    return (
        <div className="main-container">
            <h1>Search by your city name</h1>
            <form onSubmit={(e)=>{
                setSkip(false);
                e.preventDefault();
            }}>
                <input
                    type="text"
                    className="search"
                    placeholder="Search..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            {weather &&
                <Weather item={weather} /> 
            }
        </div>
    )
}

export default Home;