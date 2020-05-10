const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.content

    case 'CLEAR_MESSAGE':
      return ''

    default:
      return state
  }
}

export const setNotification = (content, duration) => {
  return async (dispatch) => {
    dispatch(setNotificationMessage(content))
    setTimeout(() => {
      dispatch(clearNotificationMessage())
    }, duration * 1000);
  }
}

const setNotificationMessage = (content) => {
  return {
    type: 'SET_MESSAGE',
    content
  }
}

const clearNotificationMessage = () => {
  return {
    type: 'CLEAR_MESSAGE'
  }
}

export default reducer