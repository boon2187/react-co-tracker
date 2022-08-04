// TopPage.jsx

import Header from "../components/Header";
import Results from "../components/Results";
import Selector from "../components/Selctor";
import Title from "../components/Title";

const TopPage = (props) => {


    return (
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
                <Results countryData={props.countryData} />
            </div>
        </div>
      );
};

export default TopPage;