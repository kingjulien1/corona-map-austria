const Papa = require("papaparse");
const fs = require("fs");
const bezirkeWithLocationsFile = fs.createReadStream(
  "./bezirkeWithLocation.csv"
);
const bezirkeWithCasesFile = fs.createReadStream("./bezirkeWithCases.csv");

function convert(fileToParse) {
  return new Promise(function (resolve, reject) {
    Papa.parse(fileToParse, {
      header: true,
      complete: function (result) {
        resolve(result);
      },
    });
  });
}

Promise.all([
  convert(bezirkeWithCasesFile),
  convert(bezirkeWithLocationsFile),
]).then(function (values) {
  //convert both csv files to json arrays
  bezirkeWithCases = values[0].data;
  bezirkeWithLocations = values[1].data;

  //iterate through cases array
  for (let i = 0; i < bezirkeWithCases.length; i++) {
    //iterate through locations array
    for (let j = 0; j < bezirkeWithLocations.length; j++) {
      //if the name of the case`s district is equal to the location´s
      if (
        bezirkeWithCases[i].Bezirk.toLowerCase() ==
        bezirkeWithLocations[j].ascii.toLowerCase()
      ) {
        //add the location to the district with cases
        bezirkeWithCases[i].lat = bezirkeWithLocations[j].lat;
        bezirkeWithCases[i].lon = bezirkeWithLocations[j].lon;
        break;
      }
    }
  }

  //get only location values
  let locations = bezirkeWithCases.map(function (bezirk) {
    return { lat: bezirk.lat, lon: bezirk.lon };
  });
  console.log(bezirkeWithCases.length);
});
