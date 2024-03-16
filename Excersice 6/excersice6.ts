/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. 
 Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/




let personName: string = "\t Mahnoor Malik \n" 
/* "\t" and "\n" are escape sequences, used to formating text
"\t" is used to display tab on screen 
and "\n" is used to add new line.*/
console.log("Name with White Space:", personName)

let NameAfterStrip: string = personName.trim() // .trim() function used to strip the white spaces.
console.log("Striped Name:", NameAfterStrip)