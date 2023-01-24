<template>
  <button
    class="previous-page-button"
    type="button"
    v-on:click.prevent="previousPage()"
  >
    Go back
  </button>
</template>

<style>
.previous-page-button {
  color: var(--color-cool-gray);
  background: var(--color-white);
  font-weight: var(--weight-large);

  border-width: 0px;
  display: inline;
  width: fit-content;
  border-radius: var(--border-radius);
  padding: 12px 22px;
  cursor: pointer;
}
.previous-page-button:hover {
  color: var(--color-marine-blue);
}
</style>

<script>
import { useRouter } from "vue-router";

export default {
  props: {
    to: String,
  },
  setup(props) {
    const router = useRouter();
    function previousPage() {
      router.push(props.to);
    }
    return {
      previousPage,
    };
  },
};
</script>
