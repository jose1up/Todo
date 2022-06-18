import React from "react";
import { useDispatch } from "react-redux";
import { filterForStatus } from "../redux/action";

export const FilterTodo = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <select
        name="filter"
        onChange={(e) => dispatch(filterForStatus({ status: e.target.value }))}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};
