// 1
// let result = "";
let i = 1;
do {
  console.log(i++);
} while (i <= 1000);

// console.log(result);

const person1 = {
  firstName: "Vini",
  lastName: "Lopes",
  birthDate: "June 19, 2018",
  gender: "Male",
};

const person2 = {
  firstName: "Ben",
  lastName: "Ballard",
  birthDate: "January 1, 1997",
  gender: "Female",
};

const person3 = {
  firstName: "Kevin",
  lastName: "Huang",
  birthDate: "February 5, 1993",
  gender: "Male",
};

// personInfo.keys()

console.log(Object.keys(person1));
console.log(Object.entries(person1));

const arrayOfPersons = [person1, person2, person3];

console.log(arrayOfPersons);

for (const person of arrayOfPersons) {
  if (parseInt(person.birthDate.slice(-1)) % 2) {
    console.log(person.birthDate);
  }
}
const mapPersons = arrayOfPersons.map((i) => console.log(i));
const filterpersons = arrayOfPersons.filter((person) =>
  console.log(person.gender)
);

const test = (input) => {
  if (parseInt(input.slice(-4)) < 1990) {
    return true;
  } else {
    return false;
  }
};

for (const person of arrayOfPersons) {
  console.log(test(person.birthDate));
}

const over21 = (input) => {
  if (parseInt(2022 - input.slice(-4)) >= 21) {
    return true;
  } else {
    return false;
  }
};

for (const person of arrayOfPersons) {
  console.log("over 21? :" + over21(person.birthDate));
}

// ========================================================================

//Test Array:

const people = ["matt", "sarah", "james", "ben"];

// .find() from scratch:

Array.prototype.findScratch = function (callback) {
  let result;
  for (let i = 0; i < this.length; i++) {
    let isFound = callback(this[i], i, this);
    if (isFound) {
      result = this[i];
      break;
    }
  }
  return result;
};

console.log("find: " + people.findScratch((element) => element.length === 3));

// .findIndex() from scratch:

Array.prototype.findIndexScratch = function (callback) {
  let result;
  for (let i = 0; i < this.length; i++) {
    let isFound = callback(this[i], i, this);
    if (isFound) {
      result = i;
      break;
    }
  }
  return result;
};

console.log(
  "findIndex: " + people.findIndexScratch((element) => element === "ben")
);
