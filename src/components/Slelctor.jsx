// Selector.jsx

import {useState} from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
    const [country, setCountry] = useState("");
    return (
        <div>
            <select>
                {countriesJson.map((country, index) => 
                    <option key={index} value={country.Slug}>{country.Country}</option>
                )}
            </select>
        </div>
    );
};

export default Selector;