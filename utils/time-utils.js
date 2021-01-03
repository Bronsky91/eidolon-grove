export const timerEndTime = () => {
  // Returns the Date 25 min from now
  const now = new Date();
  const addedTime = new Date(now.getTime() + 25 * 60000);
  return addedTime;
};

export const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);

  return {
    total,
    minutes,
    seconds,
  };
};
