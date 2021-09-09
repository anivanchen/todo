import React, { Fragment } from 'react';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {

  const container = {
    margin: "50px",
    textAlign: "center"
  }

  return (
    <Fragment>
      <div style={container}>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
