import { useState, useEffect } from "react";
import hospitalList from "../backend/hospital-repo";
import Hospital from "../backend/hospital";
import { buildCsv } from "../backend/csv-builder";

function useHospitalData() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [uniqueState, setUniqueState] = useState<string[]>([])
  const [uniqueType, setUniqueType] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 15

  useEffect(() => {
    async function fetchData() {
      const response = await hospitalList();
      setHospitals(response);
      setCsvData(buildCsv(response));

      const states = response.reduce((acc: string[], hospital: Hospital) => {
        if(hospital.state && !acc.includes(hospital.state)) {
          acc.push(hospital.state)
        }
        return acc
      }, [])

      const types = response.reduce((acc: string[], hospital: Hospital) => {
        if(hospital.state && !acc.includes(hospital.type)) {
          acc.push(hospital.type)
        }
        return acc
      }, [])

      setUniqueState(states)
      setUniqueType(types)
    }

    fetchData();
  }, []);

  const paginatedHopsitals = hospitals.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return { hospitals: paginatedHopsitals, csvData, uniqueState, uniqueType, currentPage, setCurrentPage, pageCount: Math.ceil(hospitals.length / itemsPerPage) };
}

export default useHospitalData;
