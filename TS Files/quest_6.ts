// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let person_name2: string = "\n\t Muhammad Maaz  \n";
console.log(person_name2);
let stripped_name: string = person_name2.trim();
console.log(stripped_name);
