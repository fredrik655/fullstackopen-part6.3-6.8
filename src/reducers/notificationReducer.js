import { getTimeOutId, saveTimeOutId } from "../services/Anecdotes";

const setNotification = (value, timeout) => {
  return async dispatch => {
    const prevTimeOutId = await getTimeOutId();
    if(prevTimeOutId.id !== 0) {
      clearTimeout(prevTimeOutId.id);
    }
    const time = await setTimeout(() => {
      dispatch(disableNotification());
    },timeout*1000);
    await saveTimeOutId(time);
    dispatch({
      type: 'SET_NOTIFICATION',
      data: value
    });
  }
}

const disableNotification = () => {
  return async dispatch => {
    await saveTimeOutId(0);
    dispatch({
      type: 'SET_NOTIFICATION',
      data: ''
    })
  }
}

const notificationReducer = (state = '', action) => {
  if(action.type === 'SET_NOTIFICATION') {
    return action.data;
  }
  return state
}

export {notificationReducer, setNotification, disableNotification};