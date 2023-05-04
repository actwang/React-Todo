import { useState } from 'react';
import Cookies from 'js-cookie';
import { Modal, Button, Container } from 'react-bootstrap';

export function NewTodoForm({addItem}){

    const [input, setInput] = useState(Cookies.get('input') || '');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (input === '') return;
        addItem(input);
        setInput('');
    }

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }
    return (
        <form className='new-item-form'>
            <div className='form-row'>
            <label htmlFor='item' >New Item</label>
            <input type='text' className="form-control" id='todo-input' placeholder='Add a todo'  onChange={(e)=>handleInputChange(e)} value={input}/>
            </div>
            <Button className='font-custom' type='submit' onClick={handleSubmit} >Add</Button>
        </form>
    )
}