import React, { useState, useEffect } from 'react';
import './Counter.css'
const Counter = () => {
    const [clientCount, setClientCount] = useState(0);

    useEffect(() => {
        // Calculate the interval based on desired count and total time
        const desiredCount = 150;
        const totalTimeInSeconds = 5;
        const interval = Math.ceil((totalTimeInSeconds * 1000) / desiredCount); // Convert seconds to milliseconds

        // Increment the counter at the calculated interval
        const intervalId = setInterval(() => {
            setClientCount(prevCount => (prevCount < desiredCount ? prevCount + 1 : desiredCount));
        }, interval);

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    return (
        <div className='counter'>
            <div className="counter-container">
                <div className="counter-content">
                    <h1>Steel Projects Completed:</h1>
                    <h2> {clientCount}+</h2>
                </div>
                <div className="counter-content">
                    <h1>Custom Designs Delivered:</h1>
                    <h2> {clientCount + 40}+</h2>
                </div>
                <div className="counter-content">
                    <h1>Welding Hours Logged:</h1>
                    <h2> {clientCount + 50}+</h2>
                </div>
                {/* <div className="counter-content">
                    <h1>Happy Clients Served:</h1>
                    <h2> {clientCount - 39}+</h2>
                </div> */}
            </div>
        </div>
    );
};

export default Counter;
