const setNotification = (value, timeout) => {
  return async dispatch => {
    await setTimeout(() => {
      dispatch(disableNotification());
    },timeout*1000);
    dispatch({
      type: 'SET_NOTIFICATION',
      data: value
    });
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