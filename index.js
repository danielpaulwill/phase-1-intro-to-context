function createEmployeeRecord(array1) {
  let employeeRecord = {
    firstName: array1[0],
    familyName: array1[1],
    title: array1[2],
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

function createTimeInEvent(employeeRecord, dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  })
  return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  })
  return employeeRecord
}

let employeeRecord = {
    firstName: 'Garfield',
    familyName: 'Arbuckle',
    title: 'Cat',
    payPerHour: 3,
    timeInEvents: [{
      type: "TimeIn",
      hour: 1200,
      date: "2014-02-28"
    }],
    timeOutEvents: [{
      type: "TimeOut",
      hour: 1400,
      date: "2014-02-28"
    }]
  };

function hoursWorkedOnDate(employeeRecord, date) {
  if (date === employeeRecord.timeInEvents[0].date) {
let hoursWorked = (employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour)/100
return hoursWorked
}};

function wagesEarnedOnDate(employeeRecord, date) {
let payOwed = hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
console.log(date)
console.log(`employeeRecord.employeeRecord.timeInEvents[0].date: ${employeeRecord.employeeRecord.timeInEvents[0].date}`)
return payOwed
}

function allWagesFor(employeeRecord) {
  console.log(`employeeRecord.employeeRecord.timeInEvents[0].date: ${employeeRecord.employeeRecord.timeInEvents[0].date}`)
  employeeRecord.employeeRecord.timeInEvents[0].date.forEach(date => {
  wagesEarnedOnDate(employeeRecord, date)
  
})
}