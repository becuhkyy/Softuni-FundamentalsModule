function classStorage() {
  class Storage {
    capacity;
    storage = [];
    totalCost = 0;

    constructor(capacity) {
      this.capacity = capacity;
    }

    addProduct(product) {
      this.storage.push(product);
      this.totalCost += product.price * product.quantity;
      this.capacity -= product.quantity;
    }

    getProducts() {
      let result = [];

      for (const item of this.storage) {
        result.push(JSON.stringify(item));
      }

      return result.join("\n");
    }
  }

  let productOne = {
    name: "Cucamber",
    price: 1.5,
    quantity: 15,
  };

  let productTwo = {
    name: "Tomato",
    price: 0.9,
    quantity: 25,
  };

  let productThree = {
    name: "Bread",
    price: 1.1,
    quantity: 8,
  };

  let storage = new Storage(50);

  storage.addProduct(productOne);

  storage.addProduct(productTwo);

  storage.addProduct(productThree);

  console.log(storage.getProducts());

  console.log(storage.capacity);

  console.log(storage.totalCost);
}

classStorage();
