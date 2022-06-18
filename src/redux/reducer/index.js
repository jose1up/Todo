import {
  ADD_TODO,
  FILTER_FOR_STATUS,
  GET_TODO,
  REMOVE_TODO,
  SET_TODO_STATUS,
  SET_TODO_STATUS_RESET,
} from "../action";
export const initialState = {
  ToDoList: [],
  BkToDoList: [],
};

const cases = {};

cases[GET_TODO] = (initialState) => {
  return {
    ...initialState,
    ToDoList: [...initialState.ToDoList],
    BkToDoList: [...initialState.BkToDoList],
  };
};

cases[ADD_TODO] = (initialState, payload) => {
  return {
    ...initialState,
    ToDoList: [...initialState.ToDoList, payload],
    BkToDoList: [...initialState.BkToDoList, payload],
  };
};

cases[REMOVE_TODO] = (initialState, payload) => {
  const newToDoList = initialState.ToDoList.filter((t) => t.id !== payload);
  return {
    ...initialState,
    ToDoList: newToDoList,
    BkToDoList: newToDoList,
  };
};

cases[FILTER_FOR_STATUS] = (state, payload) => {
  const { status } = payload;
  const newToDoList =
    status != "all"
      ? state.BkToDoList.filter((t) => t.status === status)
      : [...state.ToDoList];
  return {
    ...state,
    ToDoList: newToDoList,
  };
};

cases[SET_TODO_STATUS] = (state, payload) => {
  const { id } = payload;
  const newToDoList = state.ToDoList.find((todo) => {
    return todo.id === id;
  });
  newToDoList ? (newToDoList.status = "completed") : null;
  return {
    ...state,
    ToDoList: [...state.ToDoList],
  };
};

cases[SET_TODO_STATUS_RESET] = (state, payload) => {
  const { id } = payload;
  const newToDoList = state.ToDoList.find((todo) => {
    return todo.id === id;
  });
  newToDoList ? (newToDoList.status = "pending") : null;
  return {
    ...state,
    ToDoList: [...state.ToDoList],
  };
};

export default function rootReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
