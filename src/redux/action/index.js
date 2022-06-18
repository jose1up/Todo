export const ADD_TODO = "ADD_TODO";
export const FILTER_FOR_STATUS = "FILTER_FOR_STATUS";
export const GET_TODO = "GET_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SET_TODO_STATUS = "SET_TODO_STATUS";
export const SET_TODO_STATUS_RESET = "SET_TODO_STATUS_RESET";
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const getTodo = () => {
  return {
    type: GET_TODO,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const filterForStatus = (payload) => {
  return {
    type: FILTER_FOR_STATUS,
    payload,
  };
};

export const setTodoStatus = (payload) => {
  return {
    type: SET_TODO_STATUS,
    payload,
  };
};

export const setTodoStatusReset = (payload) => {
  return {
    type: SET_TODO_STATUS_RESET,
    payload,
  };
};
