import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/action/actions';

const Main = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container h-screen flex flex-col items-center justify-center mx-auto px-5 py-10 border border-red-100">
      <h1 className="text-xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          className="p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Main;
