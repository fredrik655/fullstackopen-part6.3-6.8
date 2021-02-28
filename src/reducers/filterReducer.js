
const setFilter = value => {
  return {
    type: 'FILTER_VALUE',
    data: value.toLowerCase()
  }
}

const filterReducer = (state = '', action) => {
  if(action.type === 'FILTER_VALUE') {
    return action.data;
  }
  else if (action.type === 'FILTER_ZERO') {
    return '';
  }
  return state;
}

export {filterReducer, setFilter};