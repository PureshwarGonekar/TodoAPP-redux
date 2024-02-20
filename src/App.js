import React from 'react'
import { Container } from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import DisplayTodos from './components/DisplayTodos';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
        <div className='m-4 text-center'>
          <h1>Welcome To TODO app</h1>
        </div>
      <Container style={{display:'flex'}}>
        <AddTodo/>
        <DisplayTodos />
      </Container>
    </Provider>
  );
}

export default App;
