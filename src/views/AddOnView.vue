<template>
  <form>
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>

    <input
      class="add-on-container__invisible-checkbox"
      type="checkbox"
      name="add-on"
      value="multiplayer"
      v-bind:checked="multiplayerChecked"
      disabled
    />
    <label class="add-on-container" for="add-on--multiplayer">
      <input
        class="add-on-container__visible-checkbox"
        type="checkbox"
        id="add-on--multiplayer"
        v-model="multiplayerChecked"
      />
      <div>
        <h2>Online service</h2>
        <p>Access to multiplayer games</p>
      </div>
      <p>+$1/mo</p>
    </label>

    <input
      class="add-on-container__invisible-checkbox"
      type="checkbox"
      name="add-on"
      value="larger-storage"
      v-bind:checked="largerStorageChecked"
      disabled
    />
    <label class="add-on-container" for="add-on--larger-storage">
      <input
        class="add-on-container__visible-checkbox"
        type="checkbox"
        id="add-on--larger-storage"
        v-model="largerStorageChecked"
      />
      <div>
        <h2>Larger storage</h2>
        <p>Extra 1TB of cloud save</p>
      </div>
      <p>+$2/mo</p>
    </label>
    <input
      class="add-on-container__invisible-checkbox"
      type="checkbox"
      name="add-on"
      value="custom-them"
      v-bind:checked="customThemeChecked"
      disabled
    />
    <label class="add-on-container" for="add-on--custom-theme">
      <input
        class="add-on-container__visible-checkbox"
        type="checkbox"
        id="add-on--custom-theme"
        v-model="customThemeChecked"
      />
      <div>
        <h2>Customizable Profile</h2>
        <p>Custom theme on your profile</p>
      </div>
      <p>+$2/mo</p>
    </label>

    <GoBackButton to="/plan" />
    <NextPageButton to="/summary" />
  </form>
</template>

<style scoped>
:root {
  --color-marine-blue: hsl(213, 96%, 18%);
  --color-purplish-blue: hsl(243, 100%, 62%);
  --color-pastel-blue: hsl(228, 100%, 84%);
  --color-light-blue: hsl(206, 94%, 87%);
  --color-strawberry-red: hsl(354, 84%, 57%);

  --color-cool-gray: hsl(231, 11%, 63%);
  --color-light-gray: hsl(229, 24%, 87%);
  --color-magnolia: hsl(217, 100%, 97%);
  --color-alabaster: hsl(231, 100%, 99%);
  --color-white: hsl(0, 0%, 100%);

  --weight-small: 400;
  --weight-medium: 500;
  --weight-large: 700;

  --border-radius: 5px;
}
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
import NextPageButton from "../components/NextPageButton.vue";
import GoBackButton from "../components/GoBackButton.vue";
import { ref } from "vue";

export default {
  components: {
    NextPageButton,
    GoBackButton,
  },
  setup() {
    const multiplayerChecked = ref(true);
    const largerStorageChecked = ref(true);
    const customThemeChecked = ref(false);

    return {
      multiplayerChecked,
      largerStorageChecked,
      customThemeChecked,
    };
  },
};
</script>
