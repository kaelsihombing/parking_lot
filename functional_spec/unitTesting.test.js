const ParkingLot = require("../models/ParkingLot");
let parking = new ParkingLot();

let success = 0;
let unsuccess = 0;
let totalTest = 0;

const createParkingLot = (slots) => {
  parking.create(slots);
  if (parking.parking_lot.length === slots) {
    success++;
    totalTest++;
  } else {
    unsuccess++;
    totalTest++;
  }
};

const shouldReturnObject = (slots) => {
  parking.create(slots);
  if (typeof parking.parking_lot === "object") {
    success++;
    totalTest++;
  } else {
    unsuccess++;
    totalTest++;
  }
};

const parkCarReturn = (plateNumber) => {
  let result = parking.park(plateNumber);
  if (result === "Allocated slot number : 1") {
    success++;
    totalTest++;
  } else {
    unsuccess++;
    totalTest++;
  }
};

const leaveCarReturn = (plateNumber, hours) => {
  let result = parking.leave(plateNumber, hours);
  if (
    result ===
    `Registration number ${plateNumber} with Slot Number 1 is free with Charge 10`
  ) {
    success++;
    totalTest++;
  } else {
    unsuccess++;
    totalTest++;
  }
};

const checkStatus = () => {
  let result = parking.status();
  if (typeof result === "object") {
    success++;
    totalTest++;
  } else {
    unsuccess++;
    totalTest++;
  }
};

const checkStatusIsEmpty = () => {
  let result = parking.status();
  if (result.length === 0) {
    success++;
    totalTest++;
  } else {
    unsuccess++;
    totalTest++;
  }
};

const checkStatusFilled = (plateNumber) => {
  parking.park(plateNumber);
  let result = parking.status();
  if (result[0] === `1   ${plateNumber}`) {
    success++;
    totalTest++;
  } else {
    unsuccess++;
    totalTest++;
  }
};

const main = () => {
  createParkingLot(6);
  shouldReturnObject(10);
  parkCarReturn("KA-01-HH-1234");
  leaveCarReturn("KA-01-HH-1234", 2);
  checkStatus();
  checkStatusIsEmpty();
  checkStatusFilled("KA-01-HH-1235");

  return {
    success: success,
    unsuccess: unsuccess,
    totalTest: totalTest,
  };
};

main();

console.log("\x1b[36m%s\x1b[0m", " FUNCTIONAL TESTING");
console.log("\x1b[32m", "- PASSED \t\t: ", success);
console.log("\x1b[31m", "- UNSUCCESSFUL \t: ", unsuccess);
console.log("\x1b[37m", "- TOTAL TESTS \t\t: ", totalTest);
