import { useState, useRef, useEffect } from "react";
import { UseTimerProps } from "../types/timer";

export const useTimer = ({ endTime, elapsedTime = 0 }: UseTimerProps) => {
  const [duration, setDuration] = useState<number>(elapsedTime);
  const [intervalID, setIntervalID] = useState<number | undefined>();
  const [isRunning, setIsRunning] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if(endTime > 3599){
        throw new Error("Duration Limit")
      }
      progressRef.current?.style.setProperty("--percentage", `${100 * elapsedTime / endTime}%`);
  }, [endTime, elapsedTime]);

  const startTimer = (): void => {
    if (!intervalID) {
      const myIntervalID = setInterval(() => {
        setDuration((prevDuration) => {
          if (prevDuration < endTime) {
            const nextDuration = prevDuration + 1;
            progressRef.current?.style.setProperty("--percentage", `${100 * nextDuration / endTime}%`);
            return nextDuration;
          } else {
            progressRef.current?.classList.add("done")
            clearInterval(myIntervalID);
            return prevDuration;
          }
        });
      }, 1000);
      setIsRunning(true);
      setIntervalID(myIntervalID);
    }
  };

  const stopTimer = (): void => {
    if (intervalID) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
    setIsRunning(false);
  };

  const resetTimer = (): void => {
    progressRef.current?.classList.remove("done")
    setDuration(0);
    progressRef.current?.style.setProperty("--percentage", `0%`);
    stopTimer();
  };

  return { duration, isRunning, startTimer, stopTimer, resetTimer, progressRef };
};