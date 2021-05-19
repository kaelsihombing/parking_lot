const Car = require("./Car");

class ParkingLot {
  constructor() {
    this.parking_lot = [];
  }

  create(n) {
    for (let i = 1; i <= n; i++) {
      this.parking_lot.push(`Empty`);
    }
    return `Created parking lot with ${n} slots`;
  }

  park(plateNumber) {
    let car = new Car(plateNumber);
    let findSlot = this.parking_lot.findIndex((slot) => slot === "Empty");
    if (findSlot === -1) return "Sorry, parking lot is full";
    else this.parking_lot[findSlot] = car.plateNumber;
    return `Allocated slot number : ${++findSlot}`;
  }

  leave(plateNumber, hours) {
    let findSlot = this.parking_lot.findIndex((slot) => slot === plateNumber);

    if (findSlot === -1) return `Registration number ${plateNumber} not found`;
    else {
      this.parking_lot[findSlot] = `Empty`;
      return `Registration number ${plateNumber} with Slot Number ${++findSlot} is free with Charge ${this.getCharge(
        hours
      )}`;
    }
  }

  status() {
    let slots = [];
    this.parking_lot.forEach((slot, index) => {
      if (slot !== "Empty") return slots.push(`${index + 1}   ${slot}`);
    });

    return slots;
  }

  getCharge(hours) {
    return hours <= 2 ? 10 : 10 + (hours - 2) * 10;
  }
}

module.exports = ParkingLot;
