import { useDispatch, useSelector } from "react-redux";
import { getCounters, addCounter, reduceCounter, addByValue } from "../actions";
export const CounterHooks  = () => {
    const dispatch = useDispatch();
  const counterReducer = useSelector((state) => state.counter);
    const getAllCounters = params => dispatch(getCounters(params))
    const setAddCounter = params => dispatch(addCounter(params))
    const setReducerCounter = params => dispatch(reduceCounter(params))
    const setCounterByValue = params => dispatch(addByValue(params))
  return {
      ...counterReducer,
      getAllCounters,
      setAddCounter,
      setReducerCounter,
      setCounterByValue
  }
}