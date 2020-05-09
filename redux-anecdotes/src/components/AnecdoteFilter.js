import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdotes } from "../reducers/filterReducer";

function AnecdoteFilter() {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(filterAnecdotes(e.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default AnecdoteFilter