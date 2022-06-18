import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, removeTodo, setTodoStatus, setTodoStatusReset } from "../redux/action";
import { ContenedorTodo } from "./ContenedorTodo/ContenedorTodo";

export const ListTodo = ({status}) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.ToDoList);
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);
  const handleRemoveTodo = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        dispatch(removeTodo(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  const handleChangeStatus = (a) => {
    dispatch(setTodoStatus(a));
  };

  const handleChangeStatusCompleted = (a) => {
    dispatch(setTodoStatusReset(a));
  }

  let TodoStatus = todos.filter((a) => a.status === status);


  

  return (
    <>
      {TodoStatus &&
        TodoStatus.map((todo) => (
          <ContenedorTodo
            key={todo.id}
            task_name={todo.task_name}
            status={todo.status}
            removed={() => handleRemoveTodo(todo.id)}
            success={() => {
              handleChangeStatus({ id: todo.id });
            }}
            reset={() => {
              handleChangeStatusCompleted({ id: todo.id });
            }}
          />
        ))}
    </>
  );
};
