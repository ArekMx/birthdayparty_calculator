import React, {useState, useEffect} from "react";
import Slider from 'react-smooth-range-input';

export function App() {

    const [pigtails, setPigtails] = useState('');

    return (
        <div>
            <h1>Welcome! the date is: {new Date().toDateString()}</h1>
            <Slider value={0} min={0} max={30} onChange={(x) => setPigtails(x)} />
            <h2>{pigtails}</h2>
        </div>
    )
}