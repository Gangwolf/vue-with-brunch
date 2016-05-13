<template>
  <div id="increment">
    <button @click='incrementCounter'>Increment +1</button>
  </div>
</template>

<script>
import { incrementCounter } from '../../state/actions.js';
export default {
  vuex: {
    /* Same as...
    methods: function() {
      this.incrementCounter();
    }
    */
    actions: {
      incrementCounter
    }
  }
};
</script>