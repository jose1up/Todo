import React from "react";
import { ListTodo } from "./ListTodo";
import To_Do_List from "../../assets/To Do List.png";
import s from "./Home.module.css";

export const Home = () => {
  return (
    <div className={s.contenedor}>
      <h4 className={s.Todo}>To Do</h4>
      <div className={s.contenedorPending}>
        <ListTodo status="pending" />
      </div>
      <img src={To_Do_List} alt="flecha" className={s.flecha} />
      <div className={s.contenedorCompleted}>
        <h4 className={s.completed}>Completed</h4>
        <ListTodo status="completed" />
      </div>
    </div>
  );
};
