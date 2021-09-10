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
    hour: 1100,
    date: "2014-02-28"
  },
  {
    type: "TimeIn",
    hour: 1000,
    date: "2014-03-28"
  }],
  timeOutEvents: [{
    type: "TimeOut",
    hour: 1400,
    date: "2014-02-28"
  },
  {
    type: "TimeOut",
    hour: 1500,
    date: "2014-03-28"
  }]
};

// FUNCTION BEFORE MESSING WITH IT
// function hoursWorkedOnDate(employeeRecord, date) {
//   console.log(`date before if: ${date}`)
//   if (date === employeeRecord.timeInEvents[0].date) {
// let hoursWorked = (employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour)/100
// console.log(`hoursWorked: ${hoursWorked}`)
// return hoursWorked
// } else console.log('No match found')
// };

// FUNCTION CORRECTLY ITERATES THROUGH timeInEvents, NOW NEED TO MATCH THAT WITH timeOutEvents
// function hoursWorkedOnDate(employeeRecord, date) {
//   employeeRecord.timeInEvents.map(object => {
//     if (date === object.date){
//       console.log(object)
//       let hoursWorked = (employeeRecord.timeOutEvents[0].hour - object.hour)/100
//       console.log(`hoursWorked: ${hoursWorked}`)
//     }}
//   )};




function hoursWorkedOnDate(employeeRecord, date) {
  let hoursWorked = employeeRecord.timeInEvents.map(timeInObject => {
    if (date === timeInObject.date){
    let inOutHours1 = employeeRecord.timeOutEvents.map(timeOutObject => {
        if (timeInObject.date === timeOutObject.date){
          let inOutHours2 = (timeOutObject.hour - timeInObject.hour)/100
          console.log(`inOutHours2: ${inOutHours2}`)
          console.log(`inOutHours2 type: ${typeof inOutHours2}`)
          return inOutHours2
        }
      })
      console.log(`inOutHours1: ${inOutHours1}`)
      console.log(`inOutHours1 type: ${typeof inOutHours1}`)
      return inOutHours1
    }
  })
    console.log(`hoursWorked[0][0]: ${hoursWorked[0][0]}`)
    console.log(`hoursWorked type: ${typeof hoursWorked}`)
    return hoursWorked
  };












// function wagesEarnedOnDate(employeeRecord, date) {
// let payOwed = hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
// console.log(`payOwed inside of wagesEarnedOnDate: ${payOwed}`)
// return payOwed
// };

// function allWagesFor(employeeRecord) {
//   let allWages = []
//   console.log(`allWages before map: ${allWages}`)
//   let employeeEvents = employeeRecord.timeInEvents
//   console.log(employeeEvents)
//   employeeEvents.map(timeInDays => {
//     let wages = wagesEarnedOnDate(employeeRecord, timeInDays.date)
//     console.log(`wages after wagesEarnedOnDate: ${wages}`) 
//     allWages.push(wages)
//   })
//   console.log(`allWages after map: ${allWages}`)
// };