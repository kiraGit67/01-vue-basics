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
    changeXYcoords(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    deleteFruitItem(key) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== key;
      });
    },
  },
}).mount("#app");
