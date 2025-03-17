// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'



// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 1, 3)
const vase = makePottery("vase", 7, 12)
const bowl = makePottery("bowl", 5, 6)
const plate = makePottery("plate", 2, 8)
const pot = makePottery("pot", 8, 10)

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000)
const firedVase = firePottery(vase, 2100)
const firedBowl = firePottery(bowl, 2200)
const firedPlate = firePottery(plate, 2300)
const firedPot = firePottery(pot, 2400)


// Determine which ones should be sold, and their price
const sellMug = toSellOrNotToSell(firedMug)
const sellVase = toSellOrNotToSell(firedVase)
const sellBowl = toSellOrNotToSell(firedBowl)
const sellPlate = toSellOrNotToSell(firedPlate)
const sellPot = toSellOrNotToSell(firedPot)


// Invoke the component function that renders the HTML list

const potList = PotteryList()
// console.log(potList)

document.querySelector(".potteryList").innerHTML = potList
