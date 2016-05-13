<template>
  <div id="display">
    <h1>Count is {{ counterValue }}</h1>
  </div>
</template>

<script>
import { getCount as counterValue } from '../../state/getters';
export default {
  vuex: {
    getters: {
      counterValue
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>