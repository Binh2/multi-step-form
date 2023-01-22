<template>
  <form>
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number.</p>
    <div class="form__named-input">
      <div class="form__label-container">
        <label for="name">Name</label>
        <span class="form__error"></span>
      </div>
      <input
        class="form__input"
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
        v-model="store.name"
      />
    </div>
    <div class="form__named-input">
      <div class="form__label-container">
        <label for="email">Email Address</label>
        <span class="form__error" v-if="store.email == ''">
          This field is required
        </span>
        <span class="form__error" v-else-if="!store.isValidEmail"
          >Email is invalid</span
        >
      </div>
      <input
        class="form__input"
        type="email"
        id="email"
        v-bind:class="{ invalid: !store.isValidEmail }"
        v-model="store.email"
        placeholder="e.g. stephenking@lorem.com"
      />
    </div>
    <div class="form__named-input">
      <div class="form__label-container">
        <label for="phone">Phone Number</label>
        <span class="form__error" v-if="store.phoneNumber == ''"
          >This field is required</span
        >
      </div>
      <input
        class="form__input"
        type="tel"
        id="phone"
        v-model="store.phoneNumber"
        required
        placeholder="e.g. +1 234 567 890"
      />
    </div>
    <NextPageButton to="/plan" />
  </form>
</template>

<style scoped>
.form__named-input {
  padding: 10px 0;
}
.form__label-container {
  padding: 4px 0;
}
form label {
  color: var(--color-marine-blue);
  font-size: 0.8em;
}
.form__input {
  color: var(--color-marine-blue);
  border: 1px solid var(--color-cool-gray);
  border-radius: var(--border-radius);
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 15px;
  font-size: 1em;
}
.form__input::placeholder {
  color: var(--color-light-gray);
  font-weight: var(--weight-large);
}
.form__input:focus {
  outline: none;
  border-color: var(--color-marine-blue);
}
.form__input:invalid,
.form__input.invalid {
  border-color: var(--color-strawberry-red);
}
.form__error {
  color: var(--color-strawberry-red);
  position: absolute;
  right: 0;
}
</style>

<script>
import NextPageButton from "../components/NextPageButton.vue";
import { store } from "../store.js";

export default {
  components: {
    NextPageButton,
  },
  setup() {
    return {
      store,
      NextPageButton,
    };
  },
};
</script>
