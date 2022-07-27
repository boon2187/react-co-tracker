import './App.css'
import TopPage from './pages/TopPage'
import {useState} from 'react';
import countriesJson from './countries.json';

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

  // その国データを受け取る  
  const getCountryData = () => {
      fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`).then(res => res.json()).then(data => { setCountryData(); });
  }

  return (
    <div>
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} />    
    </div>
  )
}

export default App
