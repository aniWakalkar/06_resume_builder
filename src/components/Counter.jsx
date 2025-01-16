import { useDispatch, useSelector } from 'react-redux';
import { DefineCounter } from '../redux/action/actions';

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container h-screen flex flex-col items-center justify-center mx-auto px-5 py-10 border border-red-100">
      <h1 className="text-xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          className="p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400"
          onClick={() => dispatch(DefineCounter("INCREMENT"))}
        >
          Increment
        </button>
        <button
          className="p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400"
          onClick={() => dispatch(DefineCounter("DECREMENT"))}
        >
          Decrement
        </button>
        <button
          className="p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400"
          onClick={() => dispatch(DefineCounter("RESET"))}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
