<template>
  <form>
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing.</p>

    <div class="plan-name-container">
      <input
        class="plan-name-container__radio"
        type="radio"
        name="plan-name"
        id="plan-name--arcade"
        value="arcade"
        checked
      />
      <label class="plan-name-container__label" for="plan-name--arcade">
        <img src="../assets/images/icon-arcade.svg" />
        <h2>Arcade</h2>
        <p>$9/mo</p>
        <p v-if="!monthlyChecked" class="plan-name-container__special-offer">
          2 months free
        </p>
      </label>
      <input
        class="plan-name-container__radio"
        type="radio"
        name="plan-name"
        id="plan-name--advanced"
        value="advanced"
      />
      <label class="plan-name-container__label" for="plan-name--advanced">
        <img src="../assets/images/icon-advanced.svg" />
        <h2>Advanced</h2>
        <p>$12/mo</p>
        <p v-if="!monthlyChecked" class="plan-name-container__special-offer">
          2 months free
        </p>
      </label>
      <input
        class="plan-name-container__radio"
        type="radio"
        name="plan-name"
        id="plan-name--pro"
        value="pro"
      />
      <label class="plan-name-container__label" for="plan-name--pro">
        <img src="../assets/images/icon-pro.svg" />
        <h2>Pro</h2>
        <p>$15/mo</p>
        <p v-if="!monthlyChecked" class="plan-name-container__special-offer">
          2 months free
        </p>
      </label>
    </div>

    <div class="plan-duration-container">
      <input
        class="plan-duration-container__monthly-checkbox"
        type="checkbox"
        name="plan-duration"
        id="plan-duration-container__monthly-checkbox"
        value="monthly"
        v-model="monthlyChecked"
      />
      <label
        class="plan-duration-container__monthly-label plan-duration-container__label"
        for="plan-duration-container__monthly-checkbox"
        >Monthly</label
      >
      <label
        class="plan-duration-container__checkbox-slider-container"
        for="plan-duration-container__monthly-checkbox"
      >
        <label
          class="plan-duration-container__checkbox-slider"
          for="plan-duration-container__monthly-checkbox"
        >
          <div class="plan-duration-container__checkbox-slider-circle" />
        </label>
      </label>
      <label
        class="plan-duration-container__yearly-label plan-duration-container__label"
        for="plan-duration-container__monthly-checkbox"
        >Yearly</label
      >
    </div>
    <GoBackButton to="/" />
    <NextPageButton to="/add-on" />
  </form>
</template>

<style scoped>
.plan-name-container {
  display: flex;
  flex-direction: row;
  column-gap: 10%;
}
.plan-name-container__radio {
  display: none;
}
.plan-name-container__label {
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
  width: 100%;
  padding: 20px 15px 10px;
  cursor: pointer;
}
.plan-name-container__label h2 {
  margin: 40px 0 0;
}
.plan-name-container__label p {
  color: var(--color-cool-gray);
  margin-bottom: 7px;
  font-size: 1em;
}
.plan-name-container__label .plan-name-container__special-offer {
  color: var(--color-marine-blue);
  font-size: 0.8em;
  font-weight: var(--weight-large);
}
.plan-name-container__radio:hover + .plan-name-container__label {
  border-color: var(--color-purplish-blue);
}
.plan-name-container__radio:checked + .plan-name-container__label {
  border-color: var(--color-purplish-blue);
  background-color: var(--color-alabaster);
}

.plan-duration-container {
  display: flex;
  column-gap: 20px;
  background-color: var(--color-alabaster);
  justify-content: center;
  padding: 10px 0;
  margin: 35px 0;
}
.plan-duration-container__monthly-checkbox {
  display: none;
}
.plan-duration-container__checkbox-slider-container {
  --slider-size: 12px;
  --slider-margin: 5px;
  width: calc(var(--slider-size) * 2 + var(--slider-margin) * 3);
  height: calc(var(--slider-size) + var(--slider-margin) * 2);
  border-radius: 1000px;
  background: var(--color-marine-blue);
}
.plan-duration-container__checkbox-slider-circle {
  width: var(--slider-size);
  height: var(--slider-size);
  border-radius: 1000px;
  background: var(--color-white);
  margin: var(--slider-margin) var(--slider-margin);
  position: relative;
  left: calc(var(--slider-size) + var(--slider-margin));
  transition: left 0.5s;
}
.plan-duration-container__monthly-checkbox:checked
  ~ .plan-duration-container__checkbox-slider-container
  .plan-duration-container__checkbox-slider-circle {
  left: 0px;
}
.plan-duration-container__monthly-checkbox:checked
  ~ .plan-duration-container__monthly-label,
.plan-duration-container__yearly-label {
  color: var(--color-marine-blue);
}
.plan-duration-container__monthly-checkbox:checked
  ~ .plan-duration-container__yearly-label,
.plan-duration-container__monthly-label {
  color: var(--color-cool-gray);
}
</style>

<script>
import NextPageButton from "../components/NextPageButton.vue";
import GoBackButton from "../components/GoBackButton.vue";
import { ref } from "vue";
export default {
  components: {
    NextPageButton,
    GoBackButton,
  },
  setup() {
    const monthlyChecked = ref(true);

    return {
      monthlyChecked,
    };
  },
};
</script>
