//Section 1

//what types are these? Write your answer in a comment beside it.

1; // number
"cat"; // string
true; // boolean
[]; // array
{}; // object
1.1; // number
undefined; // undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; // true
true; // true
NaN; // false
[]; // true
{}; // true
undefined; // false
""; // false
0; // false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var num = 3;
//3.2 Assign a variable that is a string
var str = "lemon";
//3.3 Assign a variable that is a boolean
var boo = true;
//3.4 Assign a variable that is an object
var obj = {fruit: "lemon"};

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var answer = false;
if (answer) {
  console.log("hello");
}
if (!answer) {
  console.log("bye");
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var v = animals[0];
//5.2. Assign the last element to a variable
var v = animals.pop();
//5.3. Assign the length of an array to a variable
var v = animals.length;
//5.4. Add an item to the end of the array
animals.push("kitten");
//5.5. Add an item to the start of the array
animals.unshift("tiger");
//5.6. Assign the index of hedgehog to a variable
var v = animals.indexOf("hedgehog");

//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["carrot", "broccoli", "cauliflower", "courgette", "parsnip"];
//6.2 Loop over the array and write to the console using a "while"
var i = 0;
while (i < vegetables.length) {
  console.log(vegetables[i]);
  i++;
}
//6.3 Loop again using a "for" with a counter
for (veg in vegetables) {
  console.log(vegetables[veg]);
}
//6.4 Loop again using a "for in"
var i = 0
for (var i in vegetables) {
  console.log(vegetables[i]);
  i++;
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
function total_cash() {
  var total = 0;
  for (var i in accounts) {
    total += accounts[i].amount;
  }
  console.log("Total cash in accounts: £" + total);
  return total;
}
total_cash();
//7.2 Find the name of the account with the largest balance
function top_balance() {
  var largest_balance = 0;
  for (var i in accounts) {
    if (accounts[i].amount > largest_balance) {
      largest_balance = accounts[i].amount;
      richest = accounts[i].name;
    }
  }
  console.log("Holder of biggest balance: " + richest);
}
top_balance();
//7.3 Find the name of the account with the smallest balance
function lowest_balance() {
  var smallest_balance = accounts[0].amount;
  for (var i in accounts) {
    if (accounts[i].amount < smallest_balance) {
      smallest_balance = accounts[i].amount;
      poorest = accounts[i].name;
    }
  }
  console.log("Holder of smallest balance: " + poorest);
}
lowest_balance();
//7.4 Calculate the average bank account value
function find_average() {
 number_of_accounts = accounts.length;
 console.log("Number of bank accounts: " + number_of_accounts);
 total = total_cash();
 average = total / number_of_accounts;
 console.log("Average bank account value: £" + average);
}
find_average();
//7.5 Find the value of marcs bank account
function find_value(holder_name) {
  for (var i in accounts) {
    if (accounts[i].name === holder_name) {
      value = accounts[i].amount;
      console.log(holder_name + " has £" + value + " in their account");
    }
  }
}
find_value("marc");
//7.6 Find the holder of the largest bank account
// *** See answer to 7.2
//7.7 Calculate the total cash in business accounts
function total_business_cash() {
  var total = 0;
  for (var i in accounts) {
    if (accounts[i].type === "business") {
    total += accounts[i].amount;
    }
  }
  console.log("Total cash in business accounts: £" + total);
  return total;
}
total_business_cash();
//7.8 Find the largest personal account owner
function top_personal_balance() {
  var largest_balance = 0;
  for (var i in accounts) {
    if (accounts[i].type === "personal") {
      if (accounts[i].amount > largest_balance) {
        largest_balance = accounts[i].amount;
        richest = accounts[i].name;
      }
    }
  }
  console.log("Holder of biggest personal balance: " + richest);
}
top_personal_balance();

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food
var myPerson = { 
  name: "rick",
  height: 1.7,
  favourite_food: "avacado"
}
