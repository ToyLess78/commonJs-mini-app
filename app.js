const { characters, stealRing } = require('./characters.js');
let myChars = characters;
myChars = stealRing(myChars, 'Frodo');

characters.map(c => console.log(c));