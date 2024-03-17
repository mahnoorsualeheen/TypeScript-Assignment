/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.*/
var Name1 = ["Adil", "Ali", "Ahmed", "Eman", "Mirha"];
for (var _i = 0, Name1_1 = Name1; _i < Name1_1.length; _i++) {
    var name_1 = Name1_1[_i];
    console.log("Hello, ".concat(name_1, " what's going?."));
}
// Another method 
/*
let Name: string[] = ["Adil", "Ali", "Ahmed", "Eman", "Mirha"]
let i
for (i=0 ; i < Name.length ; i++)
console.log(" Hello " + Name[i] + " lets have dinner to night")
*/ 
