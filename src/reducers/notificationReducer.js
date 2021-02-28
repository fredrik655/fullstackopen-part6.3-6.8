

const setNotification = value => {
  return {
    type: 'SET_NOTIFICATION',
    data: `you voted '${value}'`
  }
}

const disableNotification = () => {
  return {
    type: 'SET_NOTIFICATION',
    data: ''
  }
}

const notificationReducer = (state = '', action) => {
  if(action.type === 'SET_NOTIFICATION') {
    return action.data;
  }
  return state
}

export {notificationReducer, setNotification, disableNotification};