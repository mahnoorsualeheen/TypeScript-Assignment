/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, but each message should be personalized with the person’s name.*/

let Name1: string[] = ["Adil", "Ali", "Ahmed", "Eman", "Mirha"]
for (let name of Name1)
{
    console.log(`Hello, ${name} what's going?.`)
}

// Another method 
/*
let Name: string[] = ["Adil", "Ali", "Ahmed", "Eman", "Mirha"]
let i
for (i=0 ; i < Name.length ; i++)
console.log(" Hello " + Name[i] + " lets have dinner to night")
*/