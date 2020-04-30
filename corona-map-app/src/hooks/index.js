import { useState, useEffect } from "react";
import locations from "../data/DistrictLocationValues";
import Papa from "papaparse";

export const useCasesPerDistrict = function () {
  const [cases, setCases] = useState();
  const [loading, setLoading] = useState(true);

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://info.gesundheitsministerium.at/data/Bezirke.csv";

  useEffect(() => {
    Papa.parse(proxyurl + url, {
      download: true,
      header: true,
      complete: function (results) {
        //map with location values
        let withLocations = results.data.map((district, index) => {
          if (index < 93) {
            return {
              ...district,
              lat: locations[index].lat,
              lon: locations[index].lon,
            };
          }
        });
        withLocations.splice(93);
        setCases(withLocations);
        setLoading(false);
      },
    });
  }, []);
  return { cases, loading };
};
