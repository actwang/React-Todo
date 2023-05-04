export default function TodoItem({item, handleBoxChange, handleDelete}){
    return (<li className='todo-item' key={item.key}>
                <label>
                <input type='checkbox' id='todo-checkbox' onChange={()=>handleBoxChange(item)}/>
                    {item.label}
                    {/* Only include the delete button when it's checked */}
                    {item.checked? <button className='btn btn-danger' onClick={()=>handleDelete(item)}>
                        Delete
                    </button> : null}
                </label>
            </li>);
}