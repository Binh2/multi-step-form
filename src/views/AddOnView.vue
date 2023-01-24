<template>
  <form>
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>

    <input
      class="add-on-container__invisible-checkbox"
      type="checkbox"
      name="add-on"
      value="multiplayer"
      v-bind:checked="store.addMultiplayer"
      disabled
    />
    <label class="add-on-container" for="add-on--multiplayer">
      <input
        class="add-on-container__visible-checkbox"
        type="checkbox"
        id="add-on--multiplayer"
        v-model="store.addMultiplayer"
      />
      <div>
        <h2>Online service</h2>
        <p>Access to multiplayer games</p>
      </div>
      <p>
        +${{
          store.chooseMonthlyPlan
            ? store.addOns.multiplayer.dollarPerMonth
            : store.addOns.multiplayer.dollarPerYear
        }}/{{ store.chooseMonthlyPlan ? "mo" : "yr" }}
      </p>
    </label>

    <input
      class="add-on-container__invisible-checkbox"
      type="checkbox"
      name="add-on"
      value="larger-storage"
      v-bind:checked="store.addLargerStorage"
      disabled
    />
    <label class="add-on-container" for="add-on--larger-storage">
      <input
        class="add-on-container__visible-checkbox"
        type="checkbox"
        id="add-on--larger-storage"
        v-model="store.addLargerStorage"
      />
      <div>
        <h2>Larger storage</h2>
        <p>Extra 1TB of cloud save</p>
      </div>
      <p>
        +${{
          store.chooseMonthlyPlan
            ? store.addOns.largerStorage.dollarPerMonth
            : store.addOns.largerStorage.dollarPerYear
        }}/{{ store.chooseMonthlyPlan ? "mo" : "yr" }}
      </p>
    </label>
    <input
      class="add-on-container__invisible-checkbox"
      type="checkbox"
      name="add-on"
      value="custom-them"
      v-bind:checked="store.addCustomTheme"
      disabled
    />
    <label class="add-on-container" for="add-on--custom-theme">
      <input
        class="add-on-container__visible-checkbox"
        type="checkbox"
        id="add-on--custom-theme"
        v-model="store.addCustomTheme"
      />
      <div>
        <h2>Customizable Profile</h2>
        <p>Custom theme on your profile</p>
      </div>
      <p>
        +${{
          store.chooseMonthlyPlan
            ? store.addOns.customTheme.dollarPerMonth
            : store.addOns.customTheme.dollarPerYear
        }}/{{ store.chooseMonthlyPlan ? "mo" : "yr" }}
      </p>
    </label>
  </form>
</template>

<style scoped>
form {
  --row-gap: 20px;
}
form > label:first-of-type {
  margin-top: 15px;
}
.add-on-container__invisible-checkbox {
  display: none;
}
.add-on-container {
  margin-top: var(--row-gap);
  border: 1px solid var(--color-light-gray);
  padding: 20px;
  column-gap: 15px;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
.add-on-container > div {
  /* Taking up the available space in flex so the next item is right aligned */
  flex: 1;
  margin-left: 10px;
}
.add-on-container p {
  margin-bottom: 0;
}
.add-on-container > p:last-of-type() {
  margin-left: auto;
}
.add-on-container:hover {
  border-color: var(--color-marine-blue);
}
.add-on-container__invisible-checkbox:checked + .add-on-container {
  border-color: var(--color-marine-blue);
  background: var(--color-alabaster);
}
.add-on-container__visible-checkbox {
  accent-color: var(--color-purplish-blue);
  --size: 20px;
  width: var(--size);
  height: var(--size);
}
</style>

<script>
import { store } from "../store.js";

export default {
  setup() {
    return {
      store,
    };
  },
};
</script>
