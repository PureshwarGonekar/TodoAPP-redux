import React, {useEffect, useState} from 'react';
import { Container, Card, Row, Col, Form,Button } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import { addTodo,updateTodo, deleteEditTodo } from '../redux/actions/todo';

import { connect } from 'react-redux';
import {v4} from 'uuid';

const AddTodo = ({addTodo, toEdit, updateToDo , delEditTodo}) => {
    const [isEdit, setIsEdit] = useState(false);

    useEffect(()=>{
        if(toEdit?.title){
        // console.log('toEdit',toEdit)
            setIsEdit(true);
            setTodo(toEdit);
        }   
        else{
            setIsEdit(false);
        }
    },[toEdit])
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        id: '',
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        // add todo
        addTodo({...todo, id: v4()});
        setTodo({
            title: '',
            description: '',
            id: '',
        })

    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        console.log("going to update",toEdit,"to",todo);
        updateToDo(todo);
        delEditTodo();
        setTodo({
            title: '',
            description: '',
            id: '',
        })
    }
    
  return (
    <Container style={{display:'flex', justifyContent:'center',marginTop:'10px'}}>
        <Row>
            <Col md={12}>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <h3>Add ToDo Here !!</h3>
                        <DisplayCount/>

                        <Form className='mt-4' onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>ToDo Title</Form.Label>
                                <Form.Control type='text' 
                                    placeholder="Enter here" 
                                    value={todo.title} 
                                    onChange={event => setTodo({...todo, title:event.target.value})} 
                                />
                            </Form.Group>

                            {/* description */}
                            <Form.Group className='mt-3'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as={'textarea'} 
                                    type='text' 
                                    placeholder="Enter here" 
                                    value={todo.description} 
                                    onChange={event => setTodo({...todo, description:event.target.value})} 

                                />
                            </Form.Group>

                            <Container className='text-center mt-3'>
                                {isEdit? (
                                    <Button onClick={handleUpdate} variant='secondary'>Update ToDo</Button>
                                ) : (
                                    <Button type='submit' variant='primary'>Add ToDo</Button>
                                )}
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

const mapStateToProps = (state)=>{
    console.log("statee", state );
    console.log("editstate", state.toEditReducer );
    return {toEdit:state.todoEditReducer };
};
const mapDisptachToProps= (dispatch)=>({
    addTodo: (item)=>(dispatch(addTodo(item))),
    updateToDo: (item)=>(dispatch(updateTodo(item))),
    delEditTodo: ()=>(dispatch(deleteEditTodo()))
});

export default connect(mapStateToProps, mapDisptachToProps) (AddTodo);