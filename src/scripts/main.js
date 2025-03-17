// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 3)
let vase = makePottery("vase", 7, 12)
let bowl = makePottery("bowl", 5, 6)
let plate = makePottery("plate", 2, 8)
let pot = makePottery("pot", 8, 10)

console.log(mug)
console.log(vase)
console.log(bowl)
console.log(plate)
console.log(pot)

let firedMug = firePottery(mug, 2000)
let firedVase = firePottery(vase, 2100)
let firedBowl = firePottery(bowl, 2200)
let firedPlate = firePottery(plate, 2300)
let firedPot = firePottery(pot, 2400)

console.log(firedMug)
console.log(firedVase)
console.log(firedBowl)
console.log(firedPlate)
console.log(firedPot)

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

