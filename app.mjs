// import { characters, greet }  from './characters.mjs';
//
// characters.map(c => greet(c));

import * as char  from './characters.mjs';

char.characters.map(c => char.greet(c));