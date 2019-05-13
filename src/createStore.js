export default function createStore(reducer) {
  // add your code here
}

function render() {
  const container = document.getElementById('container');
}

function createStore (reducer) {
  let state;

  function getState (){
    return state;
  }

  function dispatch (action,){
    state = reducer(state, action);
    render()
  }

  dispatch({type: '@@INIT'})

  return {
    dispatch,
    getState
  }
}