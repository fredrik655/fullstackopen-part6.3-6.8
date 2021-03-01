import React from 'react';
import {connect} from 'react-redux';
import {addAnecdote} from '../reducers/anecdoteReducer';

const AnecdoteForm = props => {
  return (
    <h2>create new</h2>,
    <form onSubmit={event => {
      event.preventDefault();
      props.addAnecdote(event.target.inputText.value);
    }}>
      <div><input name="inputText"/></div>
      <button type="submit">create</button>
    </form>
  );
}

const mapDispatchToProps = {
  addAnecdote
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default ConnectedAnecdoteForm;