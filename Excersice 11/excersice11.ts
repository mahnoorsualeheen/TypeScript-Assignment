/*Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/

let names: string[] = ["Adil", "Ali", "Ahmed", "Mirha", "Eman"]; // storing names in array
let n;  

/* This "for" loop contains three parts,
 initialize expression (n=0),
 test expression (n < names.length)
 increment (n++)*/ 
for( n=0; n < names.length ; n++) 

console.log(names[n]);
