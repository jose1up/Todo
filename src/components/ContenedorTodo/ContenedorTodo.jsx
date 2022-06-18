import React from "react";
import icons_success from "../../../assets/succes.png";
import icons_remove from "../../../assets/remove.png";
import icons_reset from "../../../assets/reset.png";
import s from "./ContenedorTodo.module.css";
export const ContenedorTodo = ({
  id,
  task_name,
  status,
  removed,
  success,
  reset,
}) => {
  return (
    <div
      className={
        status === "pending"
          ? s.ContenedorTodoPending
          : s.ContenedorTodoCompleted
      }
    >
      <span className={s.spanIcon}>{task_name}</span>
      <div className={s.divIcon}>
        {status == "completed" ? (
          <img
            src={icons_reset}
            alt="icons reset"
            onClick={reset}
            className={s.img}
          />
        ) : (
          <img
            src={icons_success}
            alt="icons succes"
            onClick={success}
            className={s.img}
          />
        )}

        <img
          src={icons_remove}
          alt="icons remove"
          onClick={removed}
          className={s.img}
        />
      </div>
    </div>
  );
};
