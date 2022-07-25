import './App.css'
import TopPage from './pages/TopPage'

function App() {
  // Selctorコンポーネントで選ばれた国のデータを受け取るためのstate
  const [country, setCountry] = useState("");
  // その国データを受け取る  
  const getCountryData = () => {
      fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`).then(res => res.json()).then(data => console.log(data));
  }

  return (
    <div>
      <TopPage />    
    </div>
  )
}

export default App
