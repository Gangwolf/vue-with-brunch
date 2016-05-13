export function incrementCounter({ dispatch, state }) {
  dispatch('INCREMENT', 1);
}

export function decrementCounter({ dispatch, state }) {
  dispatch('DECREMENT', 1);
}