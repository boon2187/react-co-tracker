// TopPage.jsx

import Results from "../components/Results";
import Selector from "../components/Selctor";
import Title from "../components/Title";

const TopPage = (props) => {


    return (
        <div>
            <Title />
            <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
            <Results />
        </div>
      );
};

export default TopPage;