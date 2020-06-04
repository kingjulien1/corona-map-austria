import { useState, useEffect } from "react";
import Papa from "papaparse";
import locations from "../data/output.json";

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
        let withLocations = results.data.map(function (district, index) {
          if (index < 93) {
            return { ...locations[index], cases: district.Anzahl };
          }
          return null;
        });
        withLocations.splice(93);
        setCases(withLocations);
        setLoading(false);
      },
    });
  }, []);
  return { cases, loading };
};
