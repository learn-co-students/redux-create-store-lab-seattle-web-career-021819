export default function createStore(reducer) {
  let state;

  const getState = () => {
    if ( typeof state === Array && state.length === 0) {
      state = [];
    } else if (state === undefined){
      state = 0;
    }
    return state;
  }

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
    const store = createStore(reducer)
  }

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
