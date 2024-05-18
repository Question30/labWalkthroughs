//Part One -----------------------------------------------------------------------------
//Create CSV variable and store the data in it
const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//Create a function called parseCSV
function parseCSV(string) {
  //Use string.split to split our string and store the result in an array
  let strArr = string.split("\n");
  //loop through the array and print each "row"
  for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
  }

  //Return strArr;
  return strArr;
}

//Store the results in variable
let parsedCsv = parseCSV(csvData);

//--------------------------------------------------------------------------------------

//Part Two

function parseColCSV(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].split(","));
  }

  return newArr;
}

let colCsv = parseColCSV(parsedCsv);
// console.log(parseColCSV(colCsv));

//Part Three
function parseObj(array) {
  let newArr = [];

  for (let i = 1; i < array.length; i++) {
    let obj = {};
    for (let j = 0; j < array[i].length; j++) {
      obj[array[0][j].toLowerCase()] = array[i][j];
    }
    newArr.push(obj);
  }

  return newArr;
}

let objCsv = parseObj(colCsv);

// console.log(objCsv);

//Part Four

objCsv.pop();
// console.log(objCsv);

const barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

objCsv.splice(1, 0, barry);

// console.log(objCsv);

const bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

objCsv.push(bilbo);

// console.log(objCsv);

function calcAvg(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i].age);
  }

  return sum / array.length;
}

const avgAge = calcAvg(objCsv);
// console.log(avgAge);

function csvFormat(array) {
  let csvArray = [];

  csvArray.push(Object.keys(array[0]));
  for (let i = 0; i < array.length; i++) {
    csvArray.push(Object.values(array[i]));
  }

  let flatArray = csvArray.flat();
  let joinedString = flatArray.join(",");

  return joinedString;
}

let csv = csvFormat(objCsv);
console.log(csv);
