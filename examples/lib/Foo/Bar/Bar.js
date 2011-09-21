Class({
  // Properties
  has: {
    x: {
      is: "r",
      init: 2
    }
  },
  methods: {
    initialize: function () {
      console.log("Foo.Bar initialized");
    }
  }
});

