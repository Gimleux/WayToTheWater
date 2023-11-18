import Countdown from 'react-countdown';

const RELEASE_DATE_STRING = '2024-03-01T18:00:00.000+01:00';
const RELEASE_DATE = new Date(RELEASE_DATE_STRING);

function App() {

    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
    }: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        completed: boolean;
    }) => (
        <div>
            <p>{days} days</p>
            <p>{hours} hours</p>
            <p>{minutes} minutes</p>
            <p>{seconds} seconds</p>
        </div>
    );

    return (
        <>
            <h1 className="logo">Dune</h1>
            <h2>Part Two</h2>
            <div className="countdown">
                <Countdown date={RELEASE_DATE} renderer={renderer} />
            </div>
            <div className="hint">until cinematic release in Germany</div>
        </>
    );
}

export default App;
