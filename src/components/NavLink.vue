<template>
  <router-link :to="to" class="router-link">
    <div class="router-link__numbering">{{ index }}</div>
    <div class="router-link__step-numbering">STEP {{ index }}</div>
    <div class="router-link__text">
      <slot />
    </div>
  </router-link>
</template>

<script>
module.exports = {
  props: {
    to: String,
    index: Number,
  },
};
</script>

<style scoped lang="less">
@import "../global.less";
.router-link {
  display: grid;
  font-size: 1em;
  border-radius: 10px;
  grid-row-gap: 5px;
  grid-column-gap: 15px;
  grid-template-columns: min-content auto;
  grid-template-areas:
    "numbering step-numbering"
    "numbering text";
  padding: 5px;
  margin: 30px;
  text-decoration: none;
}
.router-link__numbering {
  grid-area: numbering;
  --size: 32px;
  width: var(--size);
  height: var(--size);
  border: 2px solid var(--color-alabaster);
  border-radius: 100%;

  color: var(--color-alabaster);
  font-weight: var(--weight-large);

  /* Center text horizontally and vertically in div */
  box-sizing: content-box;
  text-align: center;
  vertical-align: middle;
  line-height: var(--size);
}
.router-link.router-link-exact-active .router-link__numbering {
  background: var(--color-light-blue);
  color: var(--color-marine-blue);
  border: 2px solid var(--color-light-blue);
}
.router-link__step-numbering {
  grid-area: step-numbering;
  color: var(--color-light-gray);
  font-weight: var(--weight-medium);
  font-size: 0.8em;
  font-weight: var(--weight-large);
}
.router-link__text {
  grid-area: text;
  color: var(--color-white);
  font-weight: var(--weight-large);
}
@media (max-aspect-ratio: @max-aspect-ratio) {
  .router-link {
    grid-template-areas:
      "numbering numbering"
      "numbering numbering";
    padding: 0;
    margin: 25px 10px;
  }
  .router-link__step-numbering {
    display: none;
  }
  .router-link__text {
    display: none;
  }
}
</style>
