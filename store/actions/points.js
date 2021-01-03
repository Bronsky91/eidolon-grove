export const ADD_POINTS = "ADD_POINTS";
export const SUBTRACT_POINTS = "SUBTRACT_POINTS";

export const addPoints = (amount) => {
  return {
    type: ADD_POINTS,
    amount,
  };
};

export const subtractPoints = (amount) => {
  return {
    type: SUBTRACT_POINTS,
    amount,
  };
};
