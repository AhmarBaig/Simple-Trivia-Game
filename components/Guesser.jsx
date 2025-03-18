import React from 'react'
import { useState } from 'react'

export default function Guesser(props) {

    // Create country state
    const [ countryData, setCountryData ] = useState({
        countryName: props.Country.countryName,
        capital: "",
        points: 0
    });

    // Value of input is updated
    function handleChange(event) {
        const { value } = event.target;

        setCountryData(prevCountryData => ({
            ...prevCountryData,
            capital: value
        })) 
    }

    // If answer is the same as the prop, then add 1 point and change the question+answer
    // NOTE: Randomness does not work. Needs to be worked on
    function handleSubmit(event) {
        event.preventDefault();

        console.log(props.Country);

        if (countryData.capital == props.Country.capital) {
            setCountryData(prevCountryData => ({
                country: props.ChangeCountry.countryName,
                capital: prevCountryData.capital,
                points: prevCountryData.points + 1
            }));
            console.log("Correct");
            // console.log(countries[randValue].name);
            // console.log(countries[randValue].capital);
        } else {
            console.log("Incorrect");
            // console.log(countries[randValue].name);
            // console.log(countries[randValue].capital);
            return <h1>"Answer is incorrect. Please try again."</h1>
        }
    }

    return (
        <div className="country">
            <form onSubmit={handleSubmit}>
                <h1>What is the capital of {countryData.countryName}</h1>
                
                <input 
                    type="text"
                    placeholder="Name of the Capital"
                    name="capital"
                    value={countryData.capital}
                    onChange={handleChange}
                />

                <button>Submit</button>

                <h1>Points: {countryData.points}</h1>
            </form>
            

        </div>
    )
}