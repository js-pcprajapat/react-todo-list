import { useTodos } from '../TodosContext.jsx';
import Todo from './Todo.jsx';
function TodosList() {
  const store = useTodos();
  return (
    <>
      <div className="todos">
        {store.filteredTodos().length ? store.filteredTodos().map(todo =>
          <Todo
            todo={todo}
            key={todo.id}
          />
        ) : <p>No todos found</p>
      }
      </div>
    </>
  )
}
export default TodosList