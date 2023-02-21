// 2.24 Create a Todo List
import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

const TodoList = () => {
  return `
      <ul>
         ${todos
           .map((todo) => {
             return TodoItem(todo);
           })
           .join("")}
      </ul>
   `;
};
export default TodoList;
