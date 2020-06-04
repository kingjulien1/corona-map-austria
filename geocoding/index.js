const NodeGeocoder = require("node-geocoder");
const jsonfile = require("jsonfile");
require("dotenv").config();

//initialize geocoder with options
const geocoder = NodeGeocoder({
  provider: "google",
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
});

//read input file
jsonfile.readFile("districts.json", (error, districts) => {
  if (error) return console.error(error);
  //loop through all districts
  getGeocodes(districts).then((mapped) => {
    //write result to file
    jsonfile.writeFile("output.json", mapped, console.error);
  });
});

async function getGeocodes(districts) {
  let mapped = [];
  //loop through all districts
  for (let i = 0; i < districts.length; i++) {
    let district = districts[i];
    //get geocode from google geocoder
    let [{ latitude, longitude, city, zipcode }] = await geocoder.geocode({
      address: district.Bezirk,
      country: "Austria",
      limit: 1,
    });

    //put together final object & format it
    mapped.push({
      _id: i,
      name: district.Bezirk,
      lat: latitude,
      lon: longitude,
      city,
      zipcode,
    });
  }
  //return finished array with positions
  return mapped;
}
