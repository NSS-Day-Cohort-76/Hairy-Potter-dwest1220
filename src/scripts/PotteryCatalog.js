
let potteryCatalog = []

export const toSellOrNotToSell = (potteryObject) => {
    if (!potteryObject.cracked) {

        if (potteryObject.weight >= 6) {
            potteryObject.price = 40 
        } else {
        potteryObject.price = 20  
        }
    potteryCatalog.push(potteryObject)
    return potteryObject
}
    return "Cracked"
}


export const usePottery = () => {
    return JSON.parse(JSON.stringify(potteryCatalog))
}

// export const toSellOrNotToSell = (potteryObject) => {
//     if (potteryObject.cracked === false) {
//         if (potteryObject.weight >= 6) {
//         potteryObject.price = 40 } 
//         else if (potteryObject.weight < 6) {
//         potteryObject.price = 20  
//         }
//     potteryCatalog.push(potteryObject)
// }
// return potteryObject
// }