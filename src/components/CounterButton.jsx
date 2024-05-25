import { useContext } from 'react';
import { CounterContext } from '../context/CounterProvider';

function CounterButton() {
  const { dispatch } = useContext(CounterContext);

  const clickHandler = () => {
    dispatch({ type: 'INCREMENT_COUNT' });
  };

  return <button onClick={clickHandler}>Increment Count</button>;
}
export default CounterButton;
