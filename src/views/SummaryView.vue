<template>
  <form>
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>

    <p>Total (per month/year)</p>

    <GoBackButton to="/" />
    <ConfirmButton />
  </form>
</template>

<script>
import ConfirmButton from "../components/ConfirmButton.vue";
import GoBackButton from "../components/GoBackButton.vue";

export default {
  components: {
    ConfirmButton,
    GoBackButton,
  },
};
</script>
