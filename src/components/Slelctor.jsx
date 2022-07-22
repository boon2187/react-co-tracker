// Selector.jsx

import {useState} from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
    const [country, setCountry] = useState("");

    // selctorで選ばれた国のデータを受け取る
    const getCountryData = () => {

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
            {country}
        </div>
    );
};

export default Selector;