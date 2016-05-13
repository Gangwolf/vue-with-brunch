<template>
  <div id="app">
    <nav>
      <a v-link="{ name: 'home' }">Go to /home</a>
      <a v-link="{ name: 'about' }">Go to /about</a>
      <a v-link="{ name: 'counter' }">Go to /counter</a>
    </nav>
    <router-view></router-view>
    <footer>ⱱμ∈js</footer>
  </div>
</template>
