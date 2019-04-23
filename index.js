// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  let newDrivers = drivers.push(name);
  return newDrivers;
};

function destructivelyPrependDriver(name) {
  let newDrivers = drivers.unshift(name);
  return newDrivers;
};

function destructivelyRemoveLastDriver() {
  let removedDrivers = drivers.pop();
  return removedDrivers;
};

function destructivelyRemoveFirstDriver() {
  let removedDrivers = drivers.shift();
  return removedDrivers;
};

function appendDriver(name) {
  let newDriver = [...drivers, name];
  return newDriver;
};

function prependDriver(name) {
  let newDriver = [name, ...drivers];
  return newDriver;
};

function removeLastDriver() {
  let removeDriver = drivers.slice(0, drivers.length - 1);
  return removeDriver;
};

function removeFirstDriver() {
  let removeDriver = drivers.slice(1, drivers.length);
  return removeDriver;
};
