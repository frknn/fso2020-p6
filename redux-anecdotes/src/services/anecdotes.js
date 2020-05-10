import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async (content) => {
  const anecdoteObject = { content, votes: 0 }
  const response = await axios.post(baseUrl, anecdoteObject)
  return response.data
}

const voteAnecdote = async (anecdote) => {
  const votedAnecdote = {
    ...anecdote, votes: anecdote.votes + 1
  }

  const response = await axios.put(`${baseUrl}/${anecdote.id}`, votedAnecdote)
  return response.data
}

export default { getAll, createAnecdote, voteAnecdote }