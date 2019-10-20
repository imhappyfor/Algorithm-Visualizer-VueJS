<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  
}
#nav {
  font-size: 20px;
  margin-top: 0px;
  padding: 30px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #8a8695;
    &.router-link-exact-active {
      text-decoration-line: underline;
      color: #f08ce3;
    }
  }
}

</style>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    // shuffleArr(){
    //         this.arr.sort(() => Math.random() - 0.5)
    // },
  }

  
}
</script>