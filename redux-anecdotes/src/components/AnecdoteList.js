import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

function AnecdoteList(props) {
  //const anecdotes = useSelector(state => state.anecdotes).sort((a, b) => b.votes - a.votes)
  //const filter = useSelector(state => state.filter)
  //const dispatch = useDispatch()

  const vote = (anecdote) => {
    //dispatch(voteAnecdote(anecdote))
    //dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
    props.voteAnecdote(anecdote)
    props.setNotification(`You voted '${anecdote.content}'`, 5)
  }

  return (
    <div>
      {
        props.anecdotes
          .filter(anecdote => anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
          .map(anecdote =>
            <Anecdote
              key={anecdote.id}
              anecdote={anecdote}
              handleClick={() => vote(anecdote)}
            />
          )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes),
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAnecdote, setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList
