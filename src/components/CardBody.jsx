import CounterButton from './CounterButton';
import { useContext } from 'react';
import { CounterContext } from '../context/CounterProvider';
import DecrementButton from './DecrementButton';
import CounterForm from './CounterForm';

function CardBody() {
  const {
    state: { count },
  } = useContext(CounterContext);

  return (
    <fieldset>
      <legend>CardBody</legend>
      <p>Count: {count}</p>
      <CounterButton />
      <DecrementButton />
      <CounterForm />
    </fieldset>
  );
}
export default CardBody;
