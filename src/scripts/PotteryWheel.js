
let potteryId = 1

export const makePottery = (Shape, Weight, Height,) => {
    const pottery = {
        Shape: Shape,
        Weight: Weight,
        Height: Height,
        id: potteryId
    }
    potteryId++
    return pottery
}

