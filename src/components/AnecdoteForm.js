import React from 'react';
import {useDispatch} from 'react-redux';
import {addAnecdote} from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  return (
    <h2>create new</h2>,
    <form onSubmit={event => {
      event.preventDefault();
      dispatch(addAnecdote(event.target.inputText.value));
    }}>
      <div><input name="inputText"/></div>
      <button type="submit">create</button>
    </form>
  );
}

export default AnecdoteForm;