//Part One -----------------------------------------------------------------------------
//Create CSV variable and store the data in it
const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

/**
 * @description Takes a CSV String and converts it to an array and prints out each row in the console
 * @param {*} string
 * @returns Array
 */
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

//See the result in the console
console.log(parsedCsv);

//--------------------------------------------------------------------------------------

//Part Two -----------------------------------------------------------------------------

/**
 * @description takes an array of a CSV file and turns each row into a child array
 * @param {*} array
 * @returns array
 */
function parseColCSV(array) {
  //Create an empty variable to store our result
  let newArr = [];

  //Loop through the array
  for (let i = 0; i < array.length; i++) {
    //split the rows and push them into newArr
    newArr.push(array[i].split(","));
  }

  return newArr;
}

//Store the results
let colCsv = parseColCSV(parsedCsv);
//Log the result
// console.log(parseColCSV(colCsv));
//--------------------------------------------------------------------------------------

//Part Three ---------------------------------------------------------------------------
/**
 * @description Takes a 2D array and returns an array of objects
 * @param {*} array
 * @returns array
 */
function parseObj(array) {
  //Create a new array to hold our results
  let newArr = [];

  //Loop through the parent array
  for (let i = 1; i < array.length; i++) {
    //Create an empty object to hold our key value pairs
    let obj = {};
    //Loop through each child array
    for (let j = 0; j < array[i].length; j++) {
      //set the key value pairs in the object
      //Also set the keys to lowercase using string.toLowerCase
      obj[array[0][j].toLowerCase()] = array[i][j];
    }
    //push the object to newArr
    newArr.push(obj);
  }

  return newArr;
}
//Store the result
let objCsv = parseObj(colCsv);
//Log the result
console.log(objCsv);
//--------------------------------------------------------------------------------------

//Part Four ----------------------------------------------------------------------------

//Task 1. Remove the last object in the array
//Use array.pop to remove the item at the last index
objCsv.pop();
//Log the results
console.log(objCsv);

//Task 2. Use the object below and insert it in the first index
const barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

//Use arrray.splice to inseret barry in the first index
objCsv.splice(1, 0, barry);

//Log your result
console.log(objCsv);

//Task 3. Take the object below and insert it at the end of the array
const bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

//Use array.push to add it to the end of the array
objCsv.push(bilbo);

//Log the result
console.log(objCsv);

//Task 4. Create a function that calculates the average age in the array of objects
/**
 * @description Gets the age of each object adds them up then divides by the length of the array
 * @param {*} array
 * @returns number
 */
function calcAvg(array) {
  // Create a variable to hold the sum of the ages
  let sum = 0;

  //Loop through the array of objects
  for (let i = 0; i < array.length; i++) {
    // Update the sum each iteration, adding the current age to the current sum
    //Use parseInt to convert the string age to a number
    sum += parseInt(array[i].age);
  }

  //return the sum divided by the length of the array
  return sum / array.length;
}

//Store the result
const avgAge = calcAvg(objCsv);

//Log the result
console.log(avgAge);
//-------------------------------------------------------------------------------------------

//Part Five ---------------------------------------------------------------------------------

//Return the array of objects to csv format
/**
 *@description take an array of objects and convert it to a CSV formatted String
 * @param {*} array
 * @returns String
 */
function csvFormat(array) {
  //Create an empty array to hold our 2D array
  let csvArray = [];

  //Push the keys of our Objects as the first child array
  csvArray.push(Object.keys(array[0]));
  //Loop through the array of objects
  for (let i = 0; i < array.length; i++) {
    //Store all the values in a variable
    let values = Object.values(array[i]);
    //Add \n to the first value
    values[0] = "\\n" + values[0];
    //push to the array
    csvArray.push(values);
  }
  // flatten the array using array.flat()
  let flatArray = csvArray.flat();
  // Create a string from the array using array.join
  let joinedString = flatArray.join(",");

  return joinedString;
}

//Store result
let csv = csvFormat(objCsv);
//Log result
console.log(csv);

//--------------------------------------------------------------------------------------------
