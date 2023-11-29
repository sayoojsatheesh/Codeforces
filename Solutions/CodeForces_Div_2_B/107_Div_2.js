let n = 4;

let names = [
  [2, "Fedorov"],
  [3, "Melnikov"],
  [7, "Rogulenko"],
  [3, "Kaluzhin"],
];

let phoneNumbers = [
  ["22-22-22", "98-76-54"],
  ["75-19-09", "23-45-67", "99-99-98"],
  [
    "22-22-22",
    "11-11-11",
    "33-33-33",
    "44-44-44",
    "55-55-55",
    "66-66-66",
    "95-43-21",
  ],
  ["11-11-11", "99-99-99", "98-65-32"],
];

let finalObject = {
  Taxi: { count: 0, names: [] },
  Pizza: { count: 0, names: [] },
  girls: { count: 0, names: [] },
};

for (let i = 0; i < n; i++) {

  let tempObject = {
    Taxi: 0,
    Pizza: 0,
    girls: 0,
  };

  for (let j = 0; j < phoneNumbers[i].length; j++) {
    numberChecker(phoneNumbers[i][j], tempObject);
  }

  if (tempObject.Taxi === finalObject.Taxi.count) {
    finalObject.Taxi.names.push(i);
  } else if (tempObject.Taxi > finalObject.Taxi.count) {
    finalObject.Taxi.names = [i];
    finalObject.Taxi.count = tempObject.Taxi;
  }

  if (tempObject.Pizza === finalObject.Pizza.count) {
    finalObject.Pizza.names.push(i);
  } else if (tempObject.Pizza > finalObject.Pizza.count) {
    finalObject.Pizza.names = [i];
    finalObject.Pizza.count = tempObject.Pizza;
  }

  if (tempObject.girls === finalObject.girls.count) {
    finalObject.girls.names.push(i);
  } else if (tempObject.girls > finalObject.girls.count) {
    finalObject.girls.names = [i];
    finalObject.girls.count = tempObject.girls;
  }
}

function numberChecker(phoneNumber, tempObject) {
  let filterNumber = phoneNumber
    .split("")
    .filter((item) => item == phoneNumber[0]);

  if (filterNumber.length == 6) {
    tempObject["Taxi"]++;
  } else {
    let pizzaNumber = true;
    let filterdOnlyNumber = phoneNumber
      .split("")
      .filter((item) => item !== "-");
    let sortedFiltredNumber = [...filterdOnlyNumber].sort(function (a, b) {
      return b - a;
    });
    let filterdOnlyNumberString = filterdOnlyNumber.join("");
    let sortedFiltredNumberString = sortedFiltredNumber.join("");
    let unquie = new Set(filterdOnlyNumber);
    let unquieArr = [...unquie].length;
    if (filterdOnlyNumberString !== sortedFiltredNumberString) {
      pizzaNumber = false;
    }

    if (pizzaNumber && unquieArr == 6) {
      tempObject["Pizza"]++;
    } else {
      tempObject["girls"]++;
    }
  }
}

let taxiPrint = "If you want to call a taxi, you should call: ";
let pizzaPrint = "If you want to order a pizza, you should call: ";
let finalPrint =
  "If you want to go to a cafe with a wonderful girl, you should call: ";
for (let key in finalObject) {
  finalObject[key].names.map((item, index) => {
    if (key == "Taxi") {
      if (index !== finalObject[key].names.length - 1) {
        taxiPrint = taxiPrint + names[item][1] + ", ";
      } else {
        taxiPrint = taxiPrint + names[item][1] + ".";
      }
    } else if (key == "Pizza") {
      if (index !== finalObject[key].names.length - 1) {
        pizzaPrint = pizzaPrint + names[item][1] + ", ";
      } else {
        pizzaPrint = pizzaPrint + names[item][1] + ".";
      }
    } else {
      if (index !== finalObject[key].names.length - 1) {
        finalPrint = finalPrint + names[item][1] + ", ";
      } else {
        finalPrint = finalPrint + names[item][1] + ".";
      }
    }
  });
}
console.log(taxiPrint);
console.log(pizzaPrint);
console.log(finalPrint);
