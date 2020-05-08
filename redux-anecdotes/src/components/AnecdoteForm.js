import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'


function AnecdoteForm() {

  const dispatch = useDispatch()

  const add = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(addAnecdote(content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm