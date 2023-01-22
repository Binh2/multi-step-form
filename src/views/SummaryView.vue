<template>
  <form>
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>

    <div class="price-container">
      <div class="plan-price-container">
        <div>
          <h2>
            {{
              store.chosenPlanName[0].toUpperCase() +
              store.chosenPlanName.slice(1)
            }}
            ({{ store.chooseMonthlyPlan ? "Monthly" : "Yearly" }})
          </h2>
          <router-link to="/plan">Change</router-link>
        </div>
        <p>
          ${{
            store.chooseMonthlyPlan
              ? store.plans[store.chosenPlanName].dollarPerMonth
              : store.plans[store.chosenPlanName].dollarPerYear
          }}/{{ store.chooseMonthlyPlan ? "mo" : "yr" }}
        </p>
      </div>

      <hr />

      <div class="add-on-price-container-container">
        <div
          class="add-on-price-container"
          v-for="(chosenAddOn, index) in store.chosenAddOns"
          v-bind:key="index"
        >
          <h2>{{ store.addOns[chosenAddOn].description }}</h2>
          <p>
            +${{
              store.chooseMonthlyPlan
                ? store.addOns[chosenAddOn].dollarPerMonth
                : store.addOns[chosenAddOn].dollarPerYear
            }}/{{ store.chooseMonthlyPlan ? "mo" : "yr" }}
          </p>
        </div>
      </div>
    </div>

    <div class="price-sum-container">
      <h2>Total (per {{ store.chooseMonthlyPlan ? "month" : "year" }})</h2>
      <p>
        ${{
          store.chooseMonthlyPlan
            ? store.dollarPerMonthSum
            : store.dollarPerYearSum
        }}/{{ store.chooseMonthlyPlan ? "mo" : "yr" }}
      </p>
    </div>

    <GoBackButton to="/add-on" />
    <ConfirmButton />
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
form > div {
  padding: 20px;
}
.price-container {
  background: var(--color-alabaster);
}
.plan-price-container {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.plan-price-container > div {
  flex: 1;
}
.plan-price-container a:visited {
  color: var(--color-cool-gray);
}
.plan-price-container a:hover {
  color: var(--color-purplish-blue);
}
.plan-price-container p {
  color: var(--color-marine-blue);
  font-size: 1.1em;
  margin: 0;
}

hr {
  border-color: var(--color-magnolia);
}

.add-on-price-container-container {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 15px;
}
.add-on-price-container {
  display: flex;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;
}
.add-on-price-container h2 {
  flex: 1;
  color: var(--color-light-gray);
  font-size: 1.1em;
  font-weight: var(--weight-medium);
}
.add-on-price-container p {
  margin: 0;
  color: var(--color-cool-gray);
  font-size: 1em;
}

.price-sum-container {
  display: flex;
}
.price-sum-container h2 {
  flex: 1;
  color: var(--color-light-gray);
  font-size: 1.1em;
  font-weight: var(--weight-medium);
}
.price-sum-container p {
  font-size: 1.2em;
  color: var(--color-purplish-blue);
}
</style>

<script>
import ConfirmButton from "../components/ConfirmButton.vue";
import GoBackButton from "../components/GoBackButton.vue";
import { store } from "../store.js";

export default {
  components: {
    ConfirmButton,
    GoBackButton,
  },
  setup() {
    return {
      store,
    };
  },
};
</script>
