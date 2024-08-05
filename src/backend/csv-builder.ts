// import { MouseEvent } from "react";
import csvHospital from "./hospital";

export function buildCsv(data: csvHospital[]): string[][] {
  // let response = main();

  const csvRows = [];
  const header = Object.keys(data[0]);
  const values = data.map((d) => Object.values(d));

  csvRows.push(header);
  csvRows.push(...values);
  // console.log(csvRows);
return csvRows

//   const csvFileContent = csvRows.map((row) => `${row.join(",")}\n`).join("");

//   const blob = new Blob([csvFileContent], { type: "text/csv;charset=utf-8," });
//   const objUrl = URL.createObjectURL(blob);
//   console.log(objUrl);
//   return objUrl;
}

// export default function downloadCSV<T>(event: MouseEvent<T>, data: Hospital[]){
//     const blobULR = buildCsv(data);
//     event.preventDefault()
//     const target = event.target as HTMLElement
//     target.setAttribute('href', blobULR)
//     // target.setAttribute('download', 'hospital.csv')
//   }