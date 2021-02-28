import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {vote} from '../reducers/anecdoteReducer';
import {setNotification, disableNotification} from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.list);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();


  return (
    anecdotes.sort((a,b) => a.votes < b.votes).filter(a => a.content.toLowerCase().includes(filterValue)).map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => {
            dispatch(vote(anecdote.id));
            dispatch(setNotification(anecdote.content));
            setTimeout(() => {
              dispatch(disableNotification());
            }, 5000)
          }}>vote</button>
        </div>
      </div>
    )
  );
}

export default AnecdoteList;