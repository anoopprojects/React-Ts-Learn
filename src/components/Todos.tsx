import Todo from "./models/todo";

// React.FC<{ items: string[] }> will tell that we are expecting arrary of strings only
//  React.FC<{ items: Todo[] }> will tell that we are expecting arrary of Todo which is defined in "./models/todo" only
const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default Todos;
