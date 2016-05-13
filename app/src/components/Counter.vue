<template>
  <div id="counter">
    <Display></Display>
    <Increment></Increment>
    <Decrement></Decrement>
  </div>
</template>

<script>
import Display from './Counter/Display.vue';
import Increment from './Counter/Increment.vue';
import Decrement from './Counter/Decrement.vue';
import store from '../state/store.js';

export default {
  components: {
    Display,
    Increment,
    Decrement
  },
  store
};
</script>
