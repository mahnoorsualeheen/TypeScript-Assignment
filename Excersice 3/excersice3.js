// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


var PersonName = "Mahnoor Malik";


// .toLowerCase() function shows the string in lower case, means all letter of the world will display in small letter.
var lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);



// .toUpperCase() function shows the string in lower case, means all letter of the world will display in Capital Letter.
var uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);



/*This Step showing the Name in title case,
means fist letter of the world will display in Capital letter and rest of the worlds will display in small letter.*/
var titlecaseName = PersonName.charAt(0).toUpperCase() + PersonName.slice(1).toLowerCase();
console.log(titlecaseName);
