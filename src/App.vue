<script setup>
import NavLinksView from "./views/NavLinksView.vue";
</script>

<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <div class="container">
          <NavLinksView class="nav-links-view" />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*-----Perfectly vertically align div-----*/
.outer {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.middle {
  display: table-cell;
  vertical-align: middle;
}
.inner {
  margin-left: auto;
  margin-right: auto;
}
/*_____Perfectly vertically align div_____*/
.container {
  margin-left: 10px;
  display: flex;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
