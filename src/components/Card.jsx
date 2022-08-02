// Card.jsx

const Card = () => {
    // 全世界のデータを取得する
    const getAllCountriesData = () => {
        fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
            .then(res => res.json())
            .then(data => console.log(data.Countries))
    }

    return(
        <div>
            <h2>Card</h2>
            <button onClick={getAllCountriesData}>Get All Data</button>
        </div>
    );
};

export default Card;