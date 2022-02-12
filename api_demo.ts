const mtg = require('mtgsdk')
var fs = require('fs');

var hand = []
mtg.card.all({name: 'Squee', pageSize:99})
.on('data', card => {
    //console.log(card.name)
    console.log(card)
    hand.push(card)
})

console.log(hand)
/**
fs.writeFile("hand.json",JSON.stringify(hand), function(err) {
    if (err) {
        console.log(err);
    }
})
*/