import React from 'react';
import {connect } from 'react-redux';
import {vote} from '../reducers/anecdoteReducer';
import {setNotification} from '../reducers/notificationReducer';

const AnecdoteList = props => {
  return (
    props.anecdotes.sort((a,b) => a.votes < b.votes).filter(a => a.content.toLowerCase().includes(props.filter)).map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => {
            props.vote(anecdote);
            props.setNotification(`you voted '${anecdote.content}'`, 5);
          }}>vote</button>
        </div>
      </div>
    )
  );
}

const mapStateToProps = state => {
  return {
    anecdotes: state.list,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  vote,
  setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
export default ConnectedAnecdoteList;