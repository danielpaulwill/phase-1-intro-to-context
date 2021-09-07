let employeeRecords = []


function createEmployeeRecord(array1) {
  let employeeRecord = {
    firstName: `${array1[0]}`,
    familyName: `${array1[1]}`,
    title: `${array1[2]}`,
    payPerHour: array1[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  console.log(`employeeRecord from INSIDE the function: ${employeeRecord[0]}`)
  return employeeRecord
};


function createEmployeeRecords(array2) {
  array2.forEach(employee => {
    createEmployeeRecord(employee) 
    console.log(`employeeRecords BEFORE push: ${employeeRecords}`)
    employeeRecords.push(employeeRecord)
    console.log(`employeeRecords AFTER push: ${employeeRecords}`)
  })
    return employeeRecords
};


let dataEmployees = [
  ["Thor", "Odinsson", "Electrical Engineer", 45],
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150],
  ["Darcey", "Lewis", "Intern", 15],
  ["Jarvis", "Stark", "CIO", 125],
  ["Anthony", "Stark", "Angel Investor", 300],
  ["Byron", "Poodle", "Mascot", 3],
  ["Julius", "Caesar", "General", 27],
  ["Rafiki", "", "Aide", 10],
  ["Simba", "", "King", 100]
]

  createEmployeeRecords(dataEmployees)




  