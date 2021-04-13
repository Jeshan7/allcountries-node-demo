const express = require("express");
const getCountryInfo = require("get-all-country-info");
const app = express();

console.log(getCountryInfo);
const options = { methodType: "COUNTRY_NAMES", attributes: "" };

// console.log("Value", getCountryInfo(options));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("Server Running ..");
});
