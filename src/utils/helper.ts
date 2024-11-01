export const formatTime = (time: number) => {
  /**
   * Receives the @param time in seconds and returns MM:SS format time. e.g 42 => 00:42
   */
  return String(Math.floor(time / 60)).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0');
}