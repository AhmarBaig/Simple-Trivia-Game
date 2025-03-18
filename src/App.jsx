import './App.css'
import Guesser from '../components/Guesser'
import countries from '../public/countries.json'
import { useState } from 'react'

const listOfCountries = Object.keys(countries);
let randNum = Math.floor(Math.random() * listOfCountries.length);
let randValue = listOfCountries[randNum];

function App() {

  const [ randCountry, setRandCountry ] = useState({
    countryName: countries[randValue].name,
    capital: countries[randValue].capital
  });
  
  function changeCountry() {
    randNum = Math.floor(Math.random() * listOfCountries.length);
    randValue = listOfCountries[randNum];

    setRandCountry(() => ({
      countryName: countries[randValue].name,
      capital: countries[randValue].capital
    }))

  }

  return (
    <>
      <Guesser 
        Country={randCountry}
        ChangeCountry={changeCountry}
      />
    </>
  )
}

export default App
