import { useState , useEffect} from 'react'
import "./styles.css"
import { NewTodoForm } from './NewTodoForm';
import TodoList from './TodoList';
import Cookies from 'js-cookie';
import { Modal, Button, Container } from 'react-bootstrap';



function App() {
  const [items, setItems] = useState(Cookies.get('items')? JSON.parse(Cookies.get('items')) : []); 
  const [showModal, setShowModal] = useState(false);

  // update items in cookie when items change
  useEffect(() => {
    Cookies.set('items', JSON.stringify(items), {expires: 1});
  }, [items]);

  // add item
  const addItem = (input)=>{
    // if input label is already in the list, don't add it, display an Alert message
    if (items.some((i)=>i.label===input)){
      setShowModal(true);
      return;
    }
    setItems([...items, {label: input , checked:false, key: Date.now()}]);
  }
  // Input box change
  const handleBoxChange = (item)=>{
    // change the checked value
    const new_items = items.map((i)=>{
      if(i.label===item.label){
        return {...i, checked:!i.checked};
      }
      return i;
    });

    setItems(new_items);
  }

  // delete item
  const handleDelete = (item)=>{
    const index = items.indexOf(item);
    const newItems = [...items.slice(0, index), ...items.slice(index+1)]

    setItems(newItems);
    Cookies.set('items', JSON.stringify(newItems), {expires: 1})
  };

  return (
    <div>
      {/* Pass a prop to jsx just like we do with every attribute in html*/}
      <NewTodoForm addItem={addItem} />
      <h1 className='header'>Todo List App</h1>
      <TodoList items={items} handleBoxChange={handleBoxChange} handleDelete={handleDelete} />
      <Container>
      <Modal show={showModal} variant='primary' onHide={() => setShowModal(false)} >
        <Modal.Header closeButton>
          <Modal.Title>Duplicate Todo item!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Todo item with same label already exists! Move your ass Boii!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  )
}

export default App
