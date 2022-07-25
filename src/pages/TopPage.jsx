// TopPage.jsx

import Results from "../components/Results";
import Selector from "../components/Selctor";
import Title from "../components/Title";

const TopPage = () => {
    return (
        <div>
            <Title />
            <Selector />
            <Results />
        </div>
      );
};

export default TopPage;