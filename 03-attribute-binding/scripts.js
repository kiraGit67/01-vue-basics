"use strict";

Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        class: "bordered-image",
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
      width: 300,
      height: 450,
    };
  },
}).mount("#app");
