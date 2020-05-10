import React from 'react'
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux'
import { filterAnecdotes } from "../reducers/filterReducer";

function AnecdoteFilter(props) {
  //const dispatch = useDispatch()

  const handleChange = (e) => {
    //dispatch(filterAnecdotes(e.target.value))
    props.filterAnecdotes(e.target.value)
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

const mapDispatchToProps = {
  filterAnecdotes
}

const ConnectedAnecdoteFilter = connect(null, mapDispatchToProps)(AnecdoteFilter)

export default ConnectedAnecdoteFilter