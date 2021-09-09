let employeeRecord = {
  firstName: `Garfield`,
  familyName: `Arbuckle`,
  title: `Cat`,
  payPerHour: 3,
  timeInEvents: [],
  timeOutEvents: []
}

let dateStamp = "YYYY-MM-DD HHMM"


function createEmployeeRecord(array1) {
  let employeeRecord = {
    firstName: `${array1[0]}`,
    familyName: `${array1[1]}`,
    title: `${array1[2]}`,
    payPerHour: array1[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employeeRecord
};

function createEmployeeRecords(array2) {
  let employeeRecords = []
  array2.forEach(employee => {
    let employeeRecord = createEmployeeRecord(employee) 
    employeeRecords.push(employeeRecord)
  })
  return employeeRecords
};


function createTimeInEvent(employeeRecord, "YYYY-MM-DD HHMM") {
  let timeData = dateStamp.split(' ')
  employeeRecord.timeInEvents = {
    type: "TimeIn",
    hour: `${timeData[1]}`,
    date: `${timeData[0]}`
  }
  console.log(employeeRecord.timeInEvents.type)
  return employeeRecord
}
