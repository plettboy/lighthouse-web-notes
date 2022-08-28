const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  //it statements from compass output

  it("should return true when the car is pink", () => {
    const car = {
      color: "pink" };
    assert.isTrue(shouldBuyCar(car));
  });
  
  it("should return false when there are no details about the car", () => {
    const car = {

    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return false if it's a hatchback", function() { // 4
    const car = { 
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  
  it("should return false when the car is a hatchback and pink", () => {
    const car = {
      type: "hatchback",
      color: "pink"
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", () => {
    const car = {
      litresPer100km: 6,
      price: 5000
    };
    assert.isTrue(shouldBuyCar(car));
  });

  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", () => {
    const car = {
      litresPer100km: 11,
      price: 4000
    };
    assert.isTrue(shouldBuyCar(car));
  });

  it("should return false when the car has 6 litres/100km and is over $5,000", () => {
    const car = {
      litresPer100km: 6,
      price: 7000
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return false when the car has 11 litres/100km and is over $5,000", () => {
    const car = {
      litresPer100km: 11,
      price: 10000
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", () => {
    const car = {
      litresPer100km: 5,
      price: 5000
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", () => {
    const car = {
      litresPer100km: 12,
      price: 4999
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return undefined when there is no car", () => {
    const car = undefined;
    assert.isUndefined(shouldBuyCar(car));
  });

});

//run : node /node_modules/mocha/bin/mocha