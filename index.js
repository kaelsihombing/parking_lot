const ParkingLot = require("./models/ParkingLot.js");
const parking = new ParkingLot();
const fs = require("fs");
const argv = process.argv;

const main = (command) => {
  command = command.split(" ");
  switch (command[0]) {
    case "create_parking_lot":
      try {
        let result = parking.create(command[1]);
        console.log(result);
      } catch (err) {
        console.log({
          error: true,
          message: err,
        });
      }
      break;
    case "park":
      try {
        let result = parking.park(command[1]);
        console.log(result);
      } catch (err) {
        console.log({
          error: true,
          message: err,
        });
      }
      break;
    case "leave":
      try {
        let result = parking.leave(command[1], command[2]);
        console.log(result);
      } catch (err) {
        console.log({
          error: true,
          message: err,
        });
      }
      break;
    case "status":
      try {
        let result = parking.status();
        console.log("No  Registration No.");
        console.log(result.join("\n"));
      } catch (err) {
        console.log({
          error: true,
          message: err,
        });
      }
      break;
  }
};

fs.readFile(argv[2], "utf-8", function (err, data) {
  if (err) {
    console.log({
      error: true,
      message: err,
    });
  }
  let commands = data.split("\n");
  for (let i = 0; i < commands.length; i++) {
    main(commands[i]);
  }
  process.exit(1);
});
