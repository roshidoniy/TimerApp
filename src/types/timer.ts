export type timerTypes = {
    title: string,
    endTime: number,
    elapsedTime?: number
}

export type UseTimerProps = {
    endTime: number;
    elapsedTime?: number;
  };