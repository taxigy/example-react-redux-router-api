import React from 'react';
import { connect } from 'react-redux';

const fetchTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .catch(error => console.log('error:', error));
}

const handleFormSubmit = (event, dispatch, history) => {
  event.preventDefault();

  // event.target.ids is reference to <input id="ids" />
  // because every input field has "value" attribute, and type if input#ids is "text",
  // event.target.ids is a string (always a string), either empty or not.
  const ids = event.target.ids.value.split(/,\s*/g);

  if (ids.length === 0 || ids.some(id => Number(id) === NaN)) {
    // show some error somewhere, because either no IDs or some of them isn't a number
  } else {
    fetchTodos()
      .then(data => {
        dispatch({ type: 'GOT_TODOS', payload: data });
        history.push('/2'); // <- change location & cause react-router to pick it up and update the virtual DOM
      });
  }
}

// Connect component so that it has all the nice props from context. We need two of them:
// - dispatch (from redux), to dispatch an action to Redux store, and
// - history (from react-router), to push a new location after successfully receiving data from API.
//
// It may look complicated a bit, but the value follows the form of
//   connect(mapStateToProps)(Component)
// and in this case,
// - mapStateToProps is a function that return an empty object: () => ({}),
//   because a) it is required (the first argument is required), b) it has to return an object.
// - Component is a component declared as a function of props.
//
export default connect(() => ({}))(props => (
  <div>
    <h2>First, select IDs:</h2>
    <form onSubmit={event => handleFormSubmit(event, props.dispatch, props.history)}>
      <input
        type="text"
        id="ids"
        placeholder="Type comma-separated IDs"
        style={{ width: 300 }}
      />
      <button type="submit">go</button>
    </form>
  </div>
));
