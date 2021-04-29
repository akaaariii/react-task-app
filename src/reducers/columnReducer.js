const initState = {
  'column-1': {
    id: 'column-1',
    title: 'To do',
    taskIds: ['task-1'],
  },
  'column-2': {
    id: 'column-2',
    title: 'In progress',
    taskIds: [],
  },
  'column-3': {
    id: 'column-3',
    title: 'Done',
    taskIds: [],
  },
}

const columnReducer = (state = initState, action) => {
  switch (action.type) {
    // case value:
      
    //   break;
  
    default:
      return state;
  }
};

export default columnReducer;