import {useSelector, useDispatch} from 'react-redux';
import {increment , decrement} from './action/counterActions';
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter