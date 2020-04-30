import { useState, useEffect } from "react";
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
        setLoading(false);
        setCases(results.data);
      },
    });
  }, []);
  return { cases, loading };
};
