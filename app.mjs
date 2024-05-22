// import log,  { characters, greet as hallo }  from './characters.mjs';

async function main() {
    try {
        const { characters, greet } = await import( './characters.mjs')
        characters.map(c => greet(c));
    } catch (e) {
        console.log(e, 'Error')
    }

}

await main();

// import log, * as char  from './characters.mjs';
//
// char.characters.map(c => char.greet(c));
// log();