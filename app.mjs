import log,  { characters, greet as hallo }  from './characters.mjs';

characters.map(c => hallo(c));
log();

// import log, * as char  from './characters.mjs';
//
// char.characters.map(c => char.greet(c));
// log();