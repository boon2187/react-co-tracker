import {useState, useEffect} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import countriesJson from './countries.json';
import TopPage from './pages/TopPage'
import WorldPage from './pages/WorldPage';
import './App.css'

function App() {
  // Selctorコンポーネントで選ばれた国のデータを受け取るためのstate
  const [country, setCountry] = useState("");
  // その国のデータを受け取るStateを作る
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });

  // 全世界のデータを受け取るstateを設定
  const [allCountriesData, setAllCountriesData] = useState([]);

  // 通信中かどうかの状態を保存しておくstate
  const [loading, setLoading] = useState(false);

  // その国データを受け取る  
  const getCountryData = () => {
    // 通信中に設定
    setLoading(true);

    // 指定された国のデータを取得
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
    .then(res => res.json())
    .then(data => { 
      setCountryData({
        date: data[data.length -1].Date,
        newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,
        totalConfirmed: data[data.length -1].Confirmed,
        newRecovered: data[data.length -1].Recovered - data[data.length -2].Recovered,
        totalRecovered: data[data.length -1].Recovered,
      }); 

      // 通信中であることを解除
      setLoading(false);
    }).catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }
  
  // useEffectを使って、ページ読み込み時に発火！！
  useEffect(() => {
      // 全世界のデータを取得する
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
    .then(res => res.json())
    .then(data => setAllCountriesData(data.Countries))
    .catch(err => alert("エラーが発生しました。もう一度リロードしてください。"));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry}  getCountryData={getCountryData} countryData={countryData} loading={loading}  />} />
        <Route path="/world" element={
          <WorldPage allCountriesData={allCountriesData} />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
