# Lab 308.4.1

## Working with Data Collections

### Part One

#### Task: Given a CSV file parse the data seperating each row at the "\n" character

#### CSV Data

<hr>

```
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
```

<hr>

- Store the CSV data in a string variable

```javascript
const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
```

- Create a function for this case we will call it parseCSV.
  It will take one parameter a "string". It will console log the data and return the array created.

```javascript
function parseCSV(string) {}
```

- In the function we will create a variable we will call it strArr. We will use the [String.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method on our string. This will take our string and "split" it by the provided value and return an array(list).

```javascript
function parseCSV(string) {
  let strArr = string.split("\n");
  //if you now console.log(strArr) you will see that  strArr now equals
  /**[
   * 'ID,Name,Occupation,Age',
   * '42,Bruce,Knight,41',
   * '57,Bob,Fry Cook,19',
   * '63,Blaine,Quiz Master,58',
   * '98,Bill,Doctor's Assistant,26'
   * ]
   */
}
```

- Now we want to console.log each element in our array using a for loop

```javascript
function parseCSV(string) {
  let strArr = string.split("\n");
  for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
  }

  return strArr;
}
```

- Call our function and the result will be:

```javascript
parseCSV(csvData);

/**
 * ID,Name,Occupation,Age
 * 42,Bruce,Knight,41
 * 57,Bob,Fry Cook,19
 * 63,Blaine,Quiz Master,58
 * 98,Bill,Doctor's Assistant,26
 */
```

- Store the results of the function in a variable to be used later

```javascript
let parsedCSV = parseCSV(csvData);
// parsedCSV is now :
/**[
 * 'ID,Name,Occupation,Age',
 * '42,Bruce,Knight,41',
 * '57,Bob,Fry Cook,19',
 * '63,Blaine,Quiz Master,58',
 * '98,Bill,Doctor's Assistant,26'
 * ]
 */
```

<hr>

### Part Two Expanding Functionality

#### Task: using the array created from the function above split each row into its own array within the parent array

- Create a function we will call this one parseColCSV. It will take an array as a parameter and return a new array.
  Initialize a new array called newArr.

```javascript
function parseColCSV(array) {
  let newArr = [];

  return newArr;
}
```

- Loop through each index of our parsedCSV array and [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) on the ",".
  And [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) the results to newArr.

```javascript
function parseColCSV(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].split(","));
  }

  return newArr;
}
```

- Store our results of the function above and console log

```javascript
let colCsv = parseColCSV(parsedCSV);
console.log(colCSV);
```

- Result

```javascript
[
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];
```

<hr>

### Part Three Transforming Data

#### Task: For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column. Convert these keys to all lowercase letters for consistency. Store these objects in an array, in the order that they were originally listed.

- Create a function called parseObj.
  This function will take in an array and return a new array.

```javascript
function parseObj(array) {
  let newArr = [];

  return newArr;
}
```

- Loop through the array starting at index 1. We dont need to loop through the first index of the array. We can access the data in the first index at any point.

```javascript
function parseObj(array) {
  let newArr = [];

  for (let i = 1; i < array.length; i++) {}

  return newArr;
}
```

- Create an empty object inside of the for loop to store the information

```javascript
function parseObj(array) {
  let newArr = [];

  for (let i = 1; i < array.length; i++) {
    let obj = {};
  }

  return newArr;
}
```

- create another for loop within the for loop to go through each array stored within the parent array.
  > [!NOTE]
  > you cannot use i again so we will use j in the second for loop.

```javascript
function parseObj(array) {
  let newArr = [];

  for (let i = 1; i < array.length; i++) {
    let obj = {};
    for (let j = 0; j < array[i].length; j++) {}
  }

  return newArr;
}
```

- Accessing the array indexes we will store the values in the obj using key value pairs.

  > [!NOTE]
  > to access an element within a child array we use array[0][0] this returns the first element within the first child array.

  > [!NOTE]
  > to set a new key value pair in an object we use objectName[key] = value

```javascript
function parseObj(array) {
  let newArr = [];

  for (let i = 1; i < array.length; i++) {
    let obj = {};
    for (let j = 0; j < array[i].length; j++) {
      obj[array[0][j]] = array[i][j];
    }
  }

  return newArr;
}
```

- Now we will [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) our object into our newArr after each iteration.

```javascript
function parseObj(array) {
  let newArr = [];

  for (let i = 1; i < array.length; i++) {
    let obj = {};
    for (let j = 0; j < array[i].length; j++) {
      obj[array[0][j]] = array[i][j];
    }
    newArr.push(obj);
  }

  return newArr;
}
```

Output:

```
[
    {ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41'},
    {ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19},
    {ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58'},
    {ID: '98', Name: 'Bill', Occupation: 'Doctor's Assistant', Age: '26'},
]
```

- The result above looks good but now we need to make the object keys lowercase.
  We will do so using the [String.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) method

```javascript
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
```

- Store the results in a variable and console log the results.

```javascript
let objCsv = parseObj(colCsv);
console.log(objCsv);
```

Output:

```
[
    {id: '42', name: 'Bruce', occupation: 'Knight', age: '41'},
    {id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19},
    {id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'},
    {id: '98', name: 'Bill', occupation: 'Doctor's Assistant', age: '26'},
]
```

### Part 4: Sorting and Manipulating Data

#### Task: Using array methods, accomplish the following tasks, in order upon the result of Part 3:

#### Task 1. Remove the last element from the sorted array.

- Using [Array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) we can remove the last element in an array

```javascript
objCsv.pop();
console.log(objCsv);
```

Output:

```
[
    {id: '42', name: 'Bruce', occupation: 'Knight', age: '41'},
    {id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19},
    {id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'}
]
```

#### Task 2. Insert the following object at index 1:

```
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
```

- Store the object above in a variable

```javascript
const barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
```

- Using the [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method we can insert barry into the array at index 1.

```javascript
const barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

objCsv.splice(1, 0, barry);

console.log(objCsv);
```

Output:

```
[
    {id: '42', name: 'Bruce', occupation: 'Knight', age: '41'},
    {id: "48", name: "Barry", occupation: "Runner", age: "25" },
    {id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19},
    {id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'}
]
```

#### Task 3. Add the following object to the end of the array:

```
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
```

- Save the object above into a variable

```javascript
const bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
```

- Using the [Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) mehtod add biblo to the end of the array

```javascript
const bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

objCsv.push(bilbo);

console.log(objCsv);
```

Output:

```
[
    {id: '42', name: 'Bruce', occupation: 'Knight', age: '41'},
    {id: "48", name: "Barry", occupation: "Runner", age: "25" },
    {Id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19},
    {Id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'},
    {id: "7", name: "Bilbo", occupation: "None", age: "111" }
]
```

#### Task 4. use the values of each object within the array and the array’s length property to calculate the average age of the group.

- Create a function called calcAvg. It will take in one parameter an array.
  it will return a number(the average age).

```javascript
function calcAvg(array) {}
```

- In order to get the average we need to get the sum of all ages. Initialize a variable called sum and set it to zero.

```javascript
function calcAvg(array) {
  let sum = 0;
}
```

- Loop through the provided array using a for loop

```javascript
function calcAvg(array) {
  let sum = 0;

  for (let i = 0; i < array.lenght; i++) {}
}
```

- For each element(object) we want to take the age property and add it to the current sum.

  > [!NOTE]
  > objects store data as strings so we need to use [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) to convert the string age to a number

```javascript
function calcAvg(array) {
  let sum = 0;

  for (let i = 0; i < array.lenght; i++) {
    sum += parseInt(array[i].age);
  }
}
```

- Now we will return the sum divided by the length of the array to get the average.

```javascript
function calcAvg(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i].age);
  }

  return sum / array.length;
}
```

- Store the result and console log it

```javascript
const avgAge = calcAvg(objCsv);
console.log(avgAge);
```

Output

```
50.8
```

### Part Five: Full Circle

#### Task: return the final set of data back to CSV format

- Create a function called csvFormat.
  It will take one parameter an array
  It will return a string(The CSV format);

```javascript
function csvFormat(array) {}
```

- Create a variable called csvArray and set it equal to an empty array.

```javascript
function csvFormat(array) {
  let csvArray = [];
}
```

- we will use Object.keys to get an array of all the keys in our objects.
  Then [push](mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) the array into csvArray.

```javascript
function csvFormat(array) {
  let csvArray = [];

  csvArray.push(Object.keys(array[0]));
}
```

- We will loop thorugh our array and for each element we will get an array of each value in our objects using Object.values and store it.

```javascript
function csvFormat(array) {
  let csvArray = [];

  csvArray.push(Object.keys(array[0]));
  for (let i = 0; i < array.length; i++) {
    let values = Object.values(array[i]);
  }
}
```

- We will add \n to the first value of each array

```javascript
function csvFormat(array) {
  let csvArray = [];

  csvArray.push(Object.keys(array[0]));
  for (let i = 0; i < array.length; i++) {
    let values = Object.values(array[i]);
    values[0] = "\\n" + values[0];
  }
}
```

- [Push](mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) values to csvArray

```javascript
function csvFormat(array) {
  let csvArray = [];

  csvArray.push(Object.keys(array[0]));
  for (let i = 0; i < array.length; i++) {
    let values = Object.values(array[i]);
    values[0] = "\\n" + values[0];
    csvArray.push(values);
  }
}
```

- Currently csvArray looks like:

```
[
    ['id', 'name', 'occupation', 'age'],
    ['\n42', 'Bruce', 'Knight', '41'],
    ['\n48', 'Barry', 'Runner', '25'],
    ['\n57', 'Bob', 'Fry Cook', '19'],
    ['\n63', 'Blaine', 'Quiz Master', '58'],
    ['\n7', 'Biblo', 'None', '111']
]
```

- Now we will use the [Array.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) method to get rid of the children array and turn it into a one dimensional array. Ans store the result in a variable

```javascript
function csvFormat(array) {
  let csvArray = [];

  csvArray.push(Object.keys(array[0]));
  for (let i = 0; i < array.length; i++) {
    csvArray.push(Object.values(array[i]));
  }

  let flatArray = csvArray.flat();
}
```

- flatArray looks like this:

```
[
    'id', 'name', 'occupation', 'age',
    '\n42', 'Bruce', 'Knight', '41',
    '\n48', 'Barry', 'Runner', '25',
    '\n57', 'Bob', 'Fry Cook', '19',
    '\n63', 'Blaine', 'Quiz Master', '58',
    '\n7', 'Biblo', 'None', '111'
]
```

- Now we are going to use [Array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) to convert the array into a string. Store the result in a variable and return it

```javascript
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
```

- Store the results of your function in a variable and console log it

```javascript
let csv = csvFormat(csvObj);
console.log(csv);
```

Output

```
"id, name, occupation, age, \n42, Bruce, Knight, 41, \n48, Barry, Runner, 25, \n57, Bob, Fry Cook, 19, \n63, Blaine, Quiz Master, 58, \n7, Biblo, None, 111"
```
