// Write your solution in this file!
let employee = { name: "Natasha", location: "Zambia" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let employeeCopy = { ...employee };
  employeeCopy[key] = value;
  return employeeCopy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let employeeCopy = { ...employee };
  delete employeeCopy[key];
  return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
