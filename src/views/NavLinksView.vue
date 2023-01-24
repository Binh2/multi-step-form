<template>
  <nav>
    <NavLink class="nav__link" index="1" to="/">YOUR INFO</NavLink>
    <NavLink class="nav__link" index="2" to="/plan">SELECT PLAN</NavLink>
    <NavLink class="nav__link" index="3" to="/add-on">ADD-ONS</NavLink>
    <NavLink class="nav__link" index="4" to="/summary">SUMMARY</NavLink>
  </nav>
</template>

<script setup>
import NavLink from "../components/NavLink.vue";
</script>

<style scoped lang="less">
@import "../global.less";

nav {
  --width: 274;
  --height: 568;
  background: no-repeat url("../assets/images/bg-sidebar-desktop.svg");
  background-size: cover;
  height: 95vh;
  width: calc(95vh / (var(--height) / var(--width)));
}

@media (max-aspect-ratio: @max-aspect-ratio) {
  nav {
    --width: 375;
    --height: 172;
    width: 100vw;
    height: calc(100vw / var(--width) * var(--height));
    background-image: url("../assets/images/bg-sidebar-mobile.svg");

    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
