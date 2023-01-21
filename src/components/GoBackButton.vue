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
  font-weight: var(--weight-medium);

  border-width: 0px;
  display: inline;
  width: fit-content;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: var(--border-radius);
  padding: 12px 22px;
  cursor: pointer;
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
