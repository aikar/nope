Singleton({
  // Properties
  has: {
    x: {
      is: "r",
      init: 1
    },
    y: {
      is: "rw",
      init: 2
    }
  },
  methods: {
    initialize: function () {
      console.log("Foo");
      new Foo.Bar();
    }
  }
});
