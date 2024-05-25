import { createContext, useReducer } from 'react';
import {
  INITIAL_COUNTER_STATE,
  counterReducer,
} from '../reducers/counterReducer';

const CounterContext = createContext({
  state: { count: 0 },
  dispatch: () => {},
});

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_COUNTER_STATE);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext };
export default CounterProvider;
