class Car {
  constructor(plateNumber, color) {
    this.plateNumber = plateNumber;
    if (!color) this.color = "black";
    else this.color = color;
  }
}

module.exports = Car;
