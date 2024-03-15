// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonName: string = "Mahnoor Malik";


// .toLowerCase() function shows the string in lower case, means all letter of the world will display in small letter.

let lowercaseName: string = PersonName.toLowerCase();  
console.log(lowercaseName);

// .toUpperCase() function shows the string in lower case, means all letter of the world will display in Capital Letter.
let uppercaseName: string = PersonName.toUpperCase();    


console.log(uppercaseName);


/*This Step showing the Name in title case, 
means fist letter of the world will display in Capital letter and rest of the worlds will display in small letter.*/ 

let titlecaseName: string = PersonName.charAt(0).toUpperCase() + PersonName.slice(1).toLowerCase(); 


console.log(titlecaseName);