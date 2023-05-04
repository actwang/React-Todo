import TodoItem from "./TodoItem";
export default function TodoList({items, handleBoxChange, handleDelete}){
    return (<ul className='todo-list'>
        {items && items.map((item, index) => (
            <TodoItem item={item} key={item.key} handleBoxChange={handleBoxChange} handleDelete={handleDelete}/>))
        }
  </ul>
  );
}