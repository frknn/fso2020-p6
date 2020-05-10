import React from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer";

function AnecdoteForm(props) {

  //const dispatch = useDispatch()

  const add = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    //dispatch(addAnecdote(content))
    //dispatch(setNotification(`You created '${content}'`, 5))
    props.addAnecdote(content)
    props.setNotification(`You created '${content}'`, 5)
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

const mapDispatchToProps = {
  addAnecdote,
  setNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm