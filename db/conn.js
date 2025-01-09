const mongoose = require("mongoose");

const DB = process.env.DATABASE;
console.log("DB URI:", DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.error("Connection Failed:", err.message);
  });
