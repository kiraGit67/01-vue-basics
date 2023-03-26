Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    changeXYcoords(xPropertyName, yPropertyName, event) {
      this[xPropertyName] = event.offsetX;
      this[yPropertyName] = event.offsetY;
    },
    deleteFruitItem(key, list) {
      this[list] = this[list].filter((item) => {
        return item !== key;
      });
    },
  },
}).mount("#app");
