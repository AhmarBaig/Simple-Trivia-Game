import React from 'react'
import { useState } from 'react'

export default function Guesser(props) {

    // Create country state
    const [ userGuess, setUserGuess ] = useState('');

    // Value of input is updated
    function handleChange(event) {
        const { value } = event.target;
        setUserGuess(value); 
    }

    function handleDropdownChange() {

    }

    // If answer is the same as the prop, then add 1 point and change the question+answer
    // FIXED: Data is now handled fully by App.jsx, user info is handled in the local state
    function handleSubmit(event) {
        event.preventDefault();
        
        if (userGuess === props.Country.capital) {
            props.ChangeCountry();
            setUserGuess(() => "");
            console.log("Correct");
        } else {
            console.log("Incorrect");
            console.log(props.Country.countryName);
            console.log(props.Country.capital);
            return <h1>"Answer is incorrect. Please try again."</h1>
        }
    }

    return (
        <div className="country">
            <form onSubmit={handleSubmit}>
                <h1>What is the capital of {props.Country.countryName}</h1>
                
                {/* <select 
                    value={props.Capitals} 
                    onChange={handleDropdownChange}>
                    <option value="">-- Select a Capital --</option>
                    {Object.entries(props.Capitals).map(([id, capital]) => (
                        <option key={id} value={capital}>
                            {capital}
                        </option>
                    ))}
                </select> */}

                <input 
                    type="text"
                    placeholder="Name of the Capital"
                    value={userGuess}
                    onChange={handleChange}
                />

                <button>Submit</button>

                <h1>Points: {props.Country.points}</h1>
            </form>
        </div>
    )
}