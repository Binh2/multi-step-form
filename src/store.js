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
  chosenPlanName: "arcade",
  chooseMonthlyPlan: true,

  addOns: {
    multiplayer: {
      description: "Online service",
      dollarPerMonth: 1,
      dollarPerYear: 10,
    },
    largerStorage: {
      description: "Larger storage",
      dollarPerMonth: 2,
      dollarPerYear: 20,
    },
    customTheme: {
      description: "Customizable profile",
      dollarPerMonth: 2,
      dollarPerYear: 20,
    },
  },
  addMultiplayer: true,
  addLargerStorage: true,
  addCustomTheme: false,

  get isValidEmail() {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.email);
  },
  get chosenAddOns() {
    const array = [];
    if (this.addMultiplayer) array.push("multiplayer");
    if (this.addLargerStorage) array.push("largerStorage");
    if (this.addCustomTheme) array.push("customTheme");

    return array;
  },
  get dollarPerMonthSum() {
    let addOnsSum = 0;
    for (let i = 0; i < this.chosenAddOns.length; i++) {
      addOnsSum += this.addOns[this.chosenAddOns[i]].dollarPerMonth;
    }
    return this.plans[this.chosenPlanName].dollarPerMonth + addOnsSum;
  },
  get dollarPerYearSum() {
    let addOnsSum = 0;
    for (let i = 0; i < this.chosenAddOns.length; i++) {
      addOnsSum += this.addOns[this.chosenAddOns[i]].dollarPerYear;
    }
    return this.plans[this.chosenPlanName].dollarPerYear + addOnsSum;
  },
});
