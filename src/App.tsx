import Countdown from "react-countdown";
import {useEffect, useState} from "react";

const RELEASE_DATE_STRING = '2023-11-02T18:00:00.000+01:00';
const RELEASE_DATE = new Date(RELEASE_DATE_STRING);

function App() {
    const [shared, setShared] = useState<boolean>(false);

    const renderer = ({days, hours, minutes, seconds, completed}: {
        days: number,
        hours: number,
        minutes: number,
        seconds: number,
        completed: boolean
    }) => {
        if (completed) {
            return <span>Let's go to the movies!</span>;
        } else {
            return (
                <div>
                    <p>{days} days</p>
                    <p>{hours} hours</p>
                    <p>{minutes} minutes</p>
                    <p>{seconds} seconds</p>
                </div>
            );
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShared(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, [shared]);

    return (
        <>
            <h1 className='logo'>Dune</h1>
            <h2>Part Two</h2>
            <div className='countdown'>
                <Countdown date={RELEASE_DATE} renderer={renderer}/>
            </div>
            <div className="hint">
                until cinematic release in Germany
            </div>
        </>
    );
}

export default App
