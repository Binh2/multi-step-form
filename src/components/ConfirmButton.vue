<template>
  <button class="confirm-button" type="button" v-on:click.prevent="confirm()">
    Confirm
  </button>
</template>

<style>
.confirm-button {
  background: var(--color-purplish-blue);
  font-weight: var(--weight-large);
  color: var(--color-white);
  border-width: 0px;
  display: inline;
  width: fit-content;
  border-radius: var(--border-radius);
  padding: 12px 22px;
  cursor: pointer;
}
.confirm-button:hover {
  opacity: 0.7;
}
</style>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    function confirm() {
      router.push("/thank-you");
    }
    return {
      confirm,
    };
  },
};
</script>
