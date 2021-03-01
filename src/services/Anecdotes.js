import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';


const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const addAnecdoteDb = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
}

const changeAnecdote = async data => {
  const newData = {
    content: data.content,
    id: data.id,
    votes: data.votes + 1
  }
  const response = await axios.put(`${baseUrl}/${data.id}`, newData);
  return response.data;
}

export {getAll, addAnecdoteDb, changeAnecdote};