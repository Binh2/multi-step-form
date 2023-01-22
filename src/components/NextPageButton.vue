<template>
  <button
    class="next-page-button"
    type="button"
    v-on:click.prevent="nextPage()"
  >
    Next step
  </button>
</template>

<style>
.next-page-button {
  background: var(--color-marine-blue);
  font-weight: var(--weight-medium);
  color: var(--color-white);
  border-width: 0px;
  display: inline;
  width: fit-content;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: var(--border-radius);
  padding: 12px 22px;

  cursor: pointer;
}
.next-page-button:hover {
  opacity: 0.95;
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
    function nextPage() {
      router.push(props.to);
    }
    return {
      nextPage,
    };
  },
};
</script>
