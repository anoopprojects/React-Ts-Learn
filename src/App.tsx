import Todo from "./components/models/todo";
import Todos from "./components/Todos";

const App = () => {
  const todos = [new Todo("React"), new Todo("Typescript")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
};

export default App;
