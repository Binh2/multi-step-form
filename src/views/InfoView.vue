<template>
  <form>
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number.</p>
    <div>
      <div class="form__label-container">
        <label for="name">Name</label>
        <span class="form__error"></span>
      </div>
      <input
        class="form__input"
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
      />
    </div>
    <div>
      <div class="form__label-container">
        <label for="email">Email Address</label>
        <span class="form__error" v-if="isValidEmail == false"
          >Email is invalid</span
        >
      </div>
      <input
        class="form__input"
        type="email"
        id="email"
        v-bind:class="{ invalid: !isValidEmail }"
        v-model="email"
        placeholder="e.g. stephenking@lorem.com"
      />
    </div>
    <div>
      <div class="form__label-container">
        <label for="phone">Phone Number</label>
        <span class="form__error" v-if="phoneNumber == ''"
          >This field is required</span
        >
      </div>
      <input
        class="form__input"
        type="number"
        id="phone"
        v-model="phoneNumber"
        required
        placeholder="e.g. +1 234 567 890"
      />
    </div>
    <input class="form__submit" type="submit" text="Submit" />
  </form>
</template>

<style>
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
  display: flex;
  flex-direction: column;

  position: relative; /* for other element can position: absolute */
  margin: 30px 80px;
}
form h1 {
  margin: 0;
  color: var(--color-marine-blue);
  font-family: var(--font);
}
form p {
  margin: 0 0 20px;
  color: var(--color-cool-gray);
  font-weight: var(--weight-large);
}
form > div {
  padding: 10px 0;
}
.form__label-container {
  padding: 4px 0;
}
form label {
  color: var(--color-marine-blue);
}
.form__input {
  color: var(--color-marine-blue);
  border-color: var(--color-cool-gray);
  border-radius: var(--border-radius);
  display: block;
  width: auto;
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
form input[type="submit"] {
  background: var(--color-marine-blue);
  font-weight: var(--weight-medium);
  color: var(--color-white);
  border: 0px solid black;
  display: inline;
  width: fit-content;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: var(--border-radius);
  padding: 8px 20px;
}
</style>

<script setup>
import { ref, computed } from "vue";

const email = ref("");
const phoneNumber = ref("");
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validEmail(email) {
  return re.test(email);
}
const isValidEmail = computed(() => validEmail(email.value));
</script>
