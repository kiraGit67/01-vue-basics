"use strict";

const app = Vue.createApp({
  data() {
    return {
      name: "John Doe",
      loginDate: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
  },
}).mount(".card");
