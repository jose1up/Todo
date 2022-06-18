import { ContenedorTodo } from "./components/ContenedorTodo/ContenedorTodo";
import { FilterTodo } from "./components/FilterTodo";
import { ListTodo } from "./components/ListTodo";
import Todo from "../src/components/Todo";
import { Home } from "./components/Home";
function App() {
  return (
    <>
      <Todo />
      <Home />
    </>
  );
}

export default App;
