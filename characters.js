let characters = [
    {name: 'Frodo', hasRing: false},
    {name: 'Bilbo', hasRing: false}
];

function stealRing(characters, owner) {
    return characters.map(c => {
        c.hasRing = c.name === owner;
    })
}

module.exports = function log() {
    console.log('log');
}