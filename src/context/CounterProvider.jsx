import { createContext, useState } from 'react';

const CounterContext = createContext({
  counterState: { count: 0 },
  setCounterState: () => {},
});

function CounterProvider({ children }) {
  const [counterState, setCounterState] = useState({
    count: 0,
  });

  return (
    <CounterContext.Provider value={{ counterState, setCounterState }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext };
export default CounterProvider;
