/*Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, 
just add your name and the current date at the top of each program file. 
Then write one sentence describing what the program does.*/

/*Excersice 2: 
Personal Message: Store a person’s name in a variable, and print a message to that person.
 Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/

/* Declare and initialize variable name, type and its value.
Here "personName" is variable name, "string" is variable type and "Mahnoor" is the value of variable.*/  

 let personName: string = "Mahnoor" 
 let message: string = `"Hello ${personName}, would you like to be a programmer?"`
 console.log(message) // here console.log is use to display the message.


/*Excersice 3:
 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

let PersonName: string = "Mahnoor Malik"; // Declare and Initialize variable.

// .toLowerCase() function shows the string in lower case, means all letter of the word will display in small letter.
let lowercaseName: string = PersonName.toLowerCase();  
console.log(lowercaseName);

// .toUpperCase() function shows the string in lower case, means all letter of the word will display in Capital Letter.
let uppercaseName: string = PersonName.toUpperCase();    
console.log(uppercaseName);

/*This Step showing the Name in title case, 
means fist letter of the word will display in Capital letter and rest of the worlds will display in small letter.
here .chartAt(0) select the first letter of the word and .toUpperCase() function change this word in capital letter,
.slice(1) function escape the first word and select rest of the words of string,
 and .toLowerCase() function display those selected words in small letter.*/
let titlecaseName: string = PersonName.charAt(0).toUpperCase() + PersonName.slice(1).toLowerCase(); 
console.log(titlecaseName);



