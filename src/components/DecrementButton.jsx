import { useContext } from 'react';
import { CounterContext } from '../context/CounterProvider';

function DecrementButton() {
  const { dispatch } = useContext(CounterContext);

  const clickHandler = () => {
    dispatch({ type: 'DECREMENT_COUNT' });
  };

  return <button onClick={clickHandler}>Decrement Count</button>;
}
export default DecrementButton;
