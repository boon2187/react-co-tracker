// Selector.jsx



const Selector = (props) => {

    // 実際のSelectorの部分
    return (
        <div className="selector-container">
            <select onChange={(e) => props.setCountry(e.target.value)}>
                {props.countriesJson.map((country, index) => 
                    <option key={index} value={country.Slug} >
                        {country.Country}
                    </option>
                )}
            </select>
        </div>
    );
};

export default Selector;