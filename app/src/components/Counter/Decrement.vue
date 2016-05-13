<template>
  <div id="decrement">
    <button @click='decrementCounter'>Decrement -1</button>
  </div>
</template>

<script>
import { decrementCounter  } from '../../state/actions.js';
export default {
  vuex: {
    actions: {
      decrementCounter
    }
  }
}
</script>