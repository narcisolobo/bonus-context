import { useContext, useRef } from 'react';
import { CounterContext } from '../context/CounterProvider';

function CounterForm() {
  const { dispatch } = useContext(CounterContext);
  const numberInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_USER_INPUT', payload: numberInputRef.current.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="count">Add Your Count:</label>
      <input
        type="number"
        name="count"
        id="count"
        ref={numberInputRef}
        step={0.1}
      />
      <button type="submit">Add to count</button>
    </form>
  );
}
export default CounterForm;
