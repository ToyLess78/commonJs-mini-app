const { characters, stealRing } = require('./characters.js');

stealRing(characters, 'Frodo');

characters.map(c => console.log(c));