"use strict";
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let friendsName = ["Maaz", "Mahad", "Amaan", "akram", "Mujeeb"];
let message2 = "Hello how are you, ";
for (let a = 0; a < friendsName.length; a++) {
    console.log(message2 + friendsName[a]);
}
