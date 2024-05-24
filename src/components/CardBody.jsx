import CounterButton from './CounterButton';
import { useContext } from 'react';
import { CounterContext } from '../context/CounterProvider';

function CardBody() {
  const {
    counterState: { count },
  } = useContext(CounterContext);

  return (
    <fieldset>
      <legend>CardBody</legend>
      <p>Count: {count}</p>
      <CounterButton />
    </fieldset>
  );
}
export default CardBody;
