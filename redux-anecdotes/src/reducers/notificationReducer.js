const reducer = (state = '', action) => {
  switch (action.type) {
    case 'VOTED':
      return `You voted '${action.content}'`      
    
    case 'CREATED':
      return `You created '${action.content}'`
    
    case 'CLEAR':
      return ''

      default:
      return state
  }
}

export const anecdoteVoted = (content) => {
  return {
    type: 'VOTED',
    content
  }
}

export const anecdoteCreated = (content) => {
  return {
    type: 'CREATED',
    content
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default reducer