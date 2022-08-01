// Card.jsx

const Card = () => {
    // 全世界のデータを取得する
    const getAllcountriesData = () => {
        fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return(
        <div>
            <h2>Card</h2>
            <button onClick={getAllcountriesData}>Get All Data</button>
        </div>
    );
};

export default Card;