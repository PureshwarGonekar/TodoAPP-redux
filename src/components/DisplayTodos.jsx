import React, {useState} from 'react';
import { Container, Card, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/actions/todo';

const DisplayTodos = ({todos, delTodo, editTodo}) => {
    // const [todos, setTodos] = useState(
    //     [
    //         {
    //             title: 'First Todo',
    //             description: 'This is first todo item',
    //         },
    //         {
    //             title: 'Second Todo',
    //             description: 'This is second todo item',
    //         },
    //         {
    //             title: 'Third Todo',
    //             description: 'This is third todo item',
    //         },

    //     ]
    // );

    const [isDelete, setIsDelete] = useState(false);

    const handleDelete = (e,id)=>{
        e.preventDefault();
        delTodo(id);
    }
    const handleUpdate = (e,todo)=>{
        e.preventDefault();
        console.log("dis",todo)
        editTodo(todo);
    }
  return (
     <Container style={{display:'flex', justifyContent:'center',marginTop:'10px'}}>
        <Row>
            <Col>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <h3>All ToDo are Here !!</h3>
                        <DisplayCount/>
                        <ListGroup>
                        {
                            todos.map((todo,ind)=>(
                                <ListGroup.Item key={ind}>
                                    <div>
                                        <h4>{todo.title}</h4>
                                        <p>{todo.description}</p>
                                    </div>
                                    <div>
                                        <Button onClick={(e)=>handleUpdate(e,todo)} variant='secondary'>Update</Button>
                                        <Button className='m-2' onClick={(e)=>handleDelete(e,todo.id)} variant='danger'>Delete</Button>
                                    </div>
                                </ListGroup.Item>

                            ))
                        }

                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

const mapStateToProps = (state)=>{
    // console.log("state",state.todoReducer);
    return {todos:state.todoReducer };

};
const mapDisptachToProps= (dispatch)=>({
    delTodo: (ind)=>(dispatch(deleteTodo(ind))),
    editTodo: (todo)=>(dispatch(editTodo(todo)))
});


export default connect(mapStateToProps,mapDisptachToProps ) (DisplayTodos);