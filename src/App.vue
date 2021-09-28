<template>
  <div id="nav">
    <router-link to="/">Paste</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
  padding: 20px;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content 1fr;

}

#nav {
  padding: 30px;
  grid-column: 1/-1;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
