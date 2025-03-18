import './App.css'
import Guesser from '../components/Guesser'
import countries from '../public/countries.json'
import { useState } from 'react'

const listOfCountries = Object.keys(countries);
let randNum = Math.floor(Math.random() * listOfCountries.length);
let randValue = listOfCountries[randNum];

function App() {

  // Using props from the parent, I try to add randomness via the Parent instead of the Child component
  // NEEDS TO BE LOOKED AT; not sure what is wrong, problem is either in Guesser or App
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
