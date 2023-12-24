let axios = require('axios')

const deckId=[]
let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let url2= 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'



axios.get(url)
    .then(res=> console.log(res.data.deck_id))


//         axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/deck_id>/draw/?count=1`)

//     }
// }
        
//         )
      