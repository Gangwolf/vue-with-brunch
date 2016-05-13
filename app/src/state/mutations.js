export default {
  INCREMENT(state, amount) {
    state.count = state.count + amount;
  },
  
  DECREMENT(state, amount) {
    state.count = state.count - amount;
  }
};