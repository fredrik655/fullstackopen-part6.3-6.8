import { getAll, addAnecdoteDb, changeAnecdote } from "../services/Anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const vote = (data) => {
  return async dispatch => {
    const updatedAnecdote = await changeAnecdote(data);
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

const addAnecdote = value => {
  return async dispatch => {
    const data = {
      content: value,
      id: getId(),
      votes: 0
    }
    const newAnecdote = await addAnecdoteDb(data);
    dispatch({
      type: 'ADD',
      data: newAnecdote
    });
  }
}

const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  if(action.type === 'VOTE') {
    const newState = state.map(o => {
      if(o.id === action.data.id) {
        o.votes = action.data.votes;
      }
      return o;
    });
    return [...newState];
  }
  else if(action.type === 'ADD') {
    return [...state, action.data];
  }
  else if(action.type === 'INIT_ANECDOTES'){
    return action.data;
  }

  return state
}

export {reducer, vote, addAnecdote, initializeAnecdotes};