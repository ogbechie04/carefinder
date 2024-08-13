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

}
