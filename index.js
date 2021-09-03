
function createEmployeeRecord(array) {
  let employeeRecord = {
    firstName: `${array[0]}`,
    familyName: `${array[1]}`,
    title: `${array[2]}`,
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employeeRecord
};

function createEmployeeRecords(employeeRecords) {
  console.log(`employeeRecords length: ${employeeRecords.length}`)
  employeeRecords.map(employee => {
    console.log(`employee length: ${employee.length}`)
    createEmployeeRecord(employee)
    }
  )};

  let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

  createEmployeeRecords(twoRows)