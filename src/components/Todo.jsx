import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import swal from "sweetalert";
import s from "./Todo.module.css";
const Todo = () => {
  const [input, setInput] = useState({
    task_name: "",
  });
  const dispatch = useDispatch();

  let handleChange = (e) => {
    setInput({
      task_name: e.target.value,
      id: Date.now(),
      status: "pending",
    });
  };
  let handleClick = () => {
    if (input.task_name.length > 0) {
      dispatch(addTodo(input));
      setInput({
        task_name: "",
      });
    } else {
      swal("Enter a task", "", "warning");
    }
  };

  return (
    <div className={s.div}>
      <h4 className={s.h4}>TASK</h4>
      <input type="text" value={input.task_name} onChange={handleChange} className={s.input} placeholder="Enter task" />
      <button onClick={handleClick} className={s.button}>Add</button>
    </div>
  );
};

export default Todo;
