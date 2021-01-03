import { ADD_POINTS, SUBTRACT_POINTS } from "../actions/points";

// TODO: Get from db/server?
const initialState = 0;

const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINTS:
      return (state += action.amount);
    case SUBTRACT_POINTS:
      return (state -= action.amount);
  }
  return state;
};

export default pointsReducer;
