<template>
    <div id="home">
      <h1>{{ msg }}</h1>
    </div>  
</template>

<script>
export default {
  data() {
    return {
      msg: 'Home page'
    }
  }    
}
</script>

<style scoped>
  h1 {
    color: orange;
  }
</style>