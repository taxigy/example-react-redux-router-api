import React from 'react';
import { connect } from 'react-redux';

// This component depends on state from Redux store, the "todos" property.
// In fact, in this particular example, the value of "todos" is expected
// to always be an array, because by the time this component gets mounted
// and rendered, the data will already be in Redux store. But in wild nature,
// it's better to be a bit more defensive and do an extra check.
//
// To see what todos look like in data, go to
//   https://jsonplaceholder.typicode.com/todos
//
export default connect(state => ({
  todos: state.todos,
}))(props => (
  <div>
    <h2>Then, see the results:</h2>
    <p>(Yeah, there are like 200 todo items, IDs you entered at previous step didn't matter at all, sorry. But they could!)</p>
    {props.todos && props.todos.map(todo => (
      <div key={todo.id}>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
        />
        <span>{todo.title}</span>
      </div>
    ))}
  </div>
));
