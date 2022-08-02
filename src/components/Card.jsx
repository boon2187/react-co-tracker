// Card.jsx
import { useState } from 'react'

const Card = () => {
    // とりあえず、Cardコンポーネント内に全世界のデータを保存するstateを作っておく
    const [allCountriesData, setAllCountriesData] = useState([]);

    // 全世界のデータを取得する
    const getAllCountriesData = () => {
        fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
            .then(res => res.json())
            .then(data => setAllCountriesData(data.Countries))
    }

    return(
        <div>
            {console.log(allCountriesData)}
            <h2>Card</h2>
            <button onClick={getAllCountriesData}>Get All Data</button>
        </div>
    );
};

export default Card;