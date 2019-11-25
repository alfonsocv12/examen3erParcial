<template>
  <div id="app">
    <h2>{{title}}</h2>
    <div id="nav">
      <router-link to="/" @click.native="updateMeta">appointment</router-link> |
      <router-link to="/login" @click.native="updateMeta">login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          title: this.$route.meta.title
        }
      },
      methods:{
        updateMeta(){
          this.title = this.$route.meta.title
        }
      },
      mounted(){
        this.updateMeta();
      }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
