const INITIAL_COUNTER_STATE = {
  count: 0,
};

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT_COUNT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'ADD_USER_INPUT':
      return {
        ...state,
        count: state.count + Number(action.payload),
      };
    default:
      console.error('UNEXPECTED ACTION TYPE');
      return state;
  }
}

export { INITIAL_COUNTER_STATE, counterReducer };
