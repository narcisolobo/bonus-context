import { useContext } from 'react';
import { CounterContext } from '../context/CounterProvider';

function CounterButton() {
  const { setCounterState } = useContext(CounterContext);

  const clickHandler = () => {
    setCounterState((prevCounterState) => ({
      ...prevCounterState,
      count: prevCounterState.count + 1,
    }));
  };

  return <button onClick={clickHandler}>Increment Count</button>;
}
export default CounterButton;
