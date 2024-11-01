import { timerTypes } from "../types/timer"
import { useTimer } from "../hook/useTimer";
import "./timerStyle.css"
import { formatTime } from "../utils/helper";
const Timer = ({title, endTime, elapsedTime = 0}: timerTypes) => {
    const {duration, isRunning, progressRef, resetTimer, startTimer, stopTimer} = useTimer({endTime, elapsedTime})
    return (
        <div className="timer-box">
            <div className="circular-progress" ref={progressRef}>
                <div className="box">
                <p className="gray-text">{title}</p>
                <h1>{formatTime(duration)}</h1>
                <p className="gray-text">{formatTime(endTime - duration)} left</p>
                </div>
            </div>
            
            <div className="action-buttons">
                <button onClick={startTimer} disabled={isRunning} tabIndex={1}>Start</button>
                <button onClick={stopTimer} disabled={!isRunning} tabIndex={1}>Stop</button>
                <button onClick={resetTimer} tabIndex={1}>Reset</button>
            </div>
        </div>
    )
}

export default Timer