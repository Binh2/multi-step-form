<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/info">Your info</router-link> | -->
    <!-- <img src="../assets/images/bg-sidebar-desktop.svg" /> -->
    <NavLink class="nav__link" index="1" to="/">YOUR INFO</NavLink>
    <NavLink class="nav__link" index="2" to="/plan">SELECT PLAN</NavLink>
    <NavLink class="nav__link" index="3" to="/add-on">ADD-ONS</NavLink>
    <NavLink class="nav__link" index="4" to="/summary">SUMMARY</NavLink>
  </nav>
</template>

<script setup>
import NavLink from "../components/NavLink.vue";
</script>

<style scoped>
nav {
  --width: 274;
  --height: 568;
  background: no-repeat url("../assets/images/bg-sidebar-desktop.svg");
  background-size: cover;
  height: 95vh;
  width: calc(95vh / (var(--height) / var(--width)));
}
</style>
