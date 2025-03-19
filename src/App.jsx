import './App.css'
import Guesser from '../components/Guesser'
import countries from '../public/countries.json'
import { useState } from 'react'

const listOfCountries = Object.keys(countries);
let randNum = Math.floor(Math.random() * listOfCountries.length);
let randValue = listOfCountries[randNum];
let listCapitals = [];
let listCapitalsOBJ = {};

function App() {

  // props to pass to child component Guesser
  const [ randCountry, setRandCountry ] = useState({
    countryName: countries[randValue].name,
    capital: countries[randValue].capital,
    points: 0
  });
  
  for (let i=0;i<listOfCountries.length;i++) {
    listCapitals.push(countries[listOfCountries[i]].capital);
  }

  listCapitals.forEach((capital, index) => {
    listCapitalsOBJ[index + 1] = capital;
  })

  const changeCountry = () => {
    randNum = Math.floor(Math.random() * listOfCountries.length);
    randValue = listOfCountries[randNum];

    setRandCountry((prevCountryData) => ({
      countryName: countries[randValue].name,
      capital: countries[randValue].capital,
      points: prevCountryData.points + 1
    }))
  };

  console.log(`Current Country: ${randCountry.countryName}`);
  console.log(`Current Capital: ${randCountry.capital}`);

  return (
    <>
      <Guesser 
        Country={randCountry}
        ChangeCountry={changeCountry}
        Capitals={listCapitalsOBJ}
      />
    </>
  )
}

export default App
