import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByFive,
} from "../features/counterSlice";
import { login } from "../features/authSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(incrementByFive(5))}>
          Incrementby5
        </button>
      </div>
      <button onClick={()=>dispatch(login(false))}>LogOut</button>
    </div>
  );
}

export default Counter;
