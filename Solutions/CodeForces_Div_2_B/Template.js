"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.trim().split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  let n = readline().replace(/\r/g, "");
  let names = [];
  let phoneNumbers = [];
  for (let i = 0; i < n; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    names.push(temp);
    let tempOfTemp = [];
    for (let i = 0; i < temp[0]; i++) {
      let temp = readline().replace(/\r/g, "");
      tempOfTemp.push(temp);
    }
    phoneNumbers.push(tempOfTemp);
  }

  console.log(n, names, phoneNumbers);
  return;
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
}
