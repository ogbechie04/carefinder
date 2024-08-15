import { useState, useEffect } from "react";
import hospitalList from "../backend/hospital-repo";
import Hospital from "../backend/hospital";
import { buildCsv } from "../backend/csv-builder";

function useHospitalData() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [uniqueState, setUniqueState] = useState<string[]>([]);
  const [uniqueType, setUniqueType] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  const itemsPerPage = 18;

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await hospitalList();
        setHospitals(response);
        setCsvData(buildCsv(response));

        const states = response.reduce((acc: string[], hospital: Hospital) => {
          if (hospital.state && !acc.includes(hospital.state)) {
            acc.push(hospital.state);
          }
          return acc;
        }, []);

        const types = response.reduce((acc: string[], hospital: Hospital) => {
          if (hospital.state && !acc.includes(hospital.type)) {
            acc.push(hospital.type);
          }
          return acc;
        }, []);

        setUniqueState(states);
        setUniqueType(types);
      } catch {
        console.error("Error fecthcing repositories");
      }
      setLoading(false)
    }

    fetchData();
  }, []);

  const filteredHospitals = hospitals.filter((hospital) => {
    const isSearchTerm = hospital.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isState =
      selectedState.length === 0 || selectedState.includes(hospital.state);
    const isType =
      selectedType.length === 0 || selectedType.includes(hospital.type);

    return isSearchTerm && isState && isType;
  });

  const paginatedHopsitals = filteredHospitals.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return {
    hospitals: paginatedHopsitals,
    csvData,
    uniqueState,
    uniqueType,
    currentPage,
    setCurrentPage,
    pageCount: Math.ceil(filteredHospitals.length / itemsPerPage),
    setSearchTerm,
    setSelectedState,
    setSelectedType,
    loading
  };
}

export default useHospitalData;
