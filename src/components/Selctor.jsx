// Selector.jsx

import {useState} from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
    const [country, setCountry] = useState("");

    // selctorで選ばれた国のデータを受け取る
    const getCountryData = () => {
        fetch("https://monotein-books.vercel.app/api/corona-tracker/country/japan").then(res => res.json()).then(data => console.log(data));
    }

    // 実際のSelectorの部分
    return (
        <div>
            <select onChange={(e) => setCountry(e.target.value)}>
                {countriesJson.map((country, index) => 
                    <option key={index} value={country.Slug} >
                        {country.Country}
                    </option>
                )}
            </select>
            <button onClick={getCountryData} >Get Data</button>
        </div>
    );
};

export default Selector;