import { reactive } from "vue";

export const store = reactive({
  name: "",
  email: "",
  phoneNumber: "",

  plans: {
    arcade: {
      dollarPerMonth: 9,
      dollarPerYear: 90,
    },
    advanced: {
      dollarPerMonth: 12,
      dollarPerYear: 120,
    },
    pro: {
      dollarPerMonth: 15,
      dollarPerYear: 150,
    },
  },
  chosenPlanName: "",
  chooseMonthlyPlan: true,

  addOns: {
    multiplayer: {
      dollarPerMonth: 1,
      dollarPerYear: 10,
    },
    largerStorage: {
      dollarPerMonth: 2,
      dollarPerYear: 20,
    },
    customTheme: {
      dollarPerMonth: 2,
      dollarPerYear: 20,
    },
  },
  addMultiplayer: true,
  addLargerStorage: true,
  addCustomTheme: false,
});
