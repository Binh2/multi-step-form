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
      />
    </div>
    <div class="form__named-input">
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
    <div class="form__named-input">
      <div class="form__label-container">
        <label for="phone">Phone Number</label>
        <span class="form__error" v-if="phoneNumber == ''"
          >This field is required</span
        >
      </div>
      <input
        class="form__input"
        type="tel"
        id="phone"
        v-model="phoneNumber"
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
  border-color: var(--color-cool-gray);
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import NextPageButton from "../components/NextPageButton.vue";

export default {
  components: {
    NextPageButton,
  },
  setup() {
    const email = ref("");
    const phoneNumber = ref("");
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    function validEmail(email) {
      return re.test(email);
    }
    const isValidEmail = computed(() => validEmail(email.value));
    const router = useRouter();
    function nextPage() {
      router.push("/plan");
    }
    return {
      email,
      phoneNumber,
      re,
      isValidEmail,
      nextPage,
    };
  },
};
</script>
