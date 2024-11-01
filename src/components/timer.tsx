import { timerTypes } from "../types/timer"
import { useTimer } from "../hook/useTimer";
import "./timerStyle.css"
import { formatTime } from "../utils/helper";
const Timer = ({title, endTime, elapsedTime = 0}: timerTypes) => {
    /**
     * duration - current time state
     * isRunning - Running statement of Timer to enable/disable the buttons. false by default
     * progressRef - useRef for circle progress: .circle-progress
     * resetTimer - function that resets the timer
     * startTimer - function that starts the timer
     * stopTimer - function that stops the timer
     */
    const {duration, isRunning, progressRef, resetTimer, startTimer, stopTimer} = useTimer({endTime, elapsedTime})
    return (
        <div className="timer-box">
            <div className="circle-progress" ref={progressRef}>
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