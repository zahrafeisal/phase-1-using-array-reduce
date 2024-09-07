const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((init, batch) => {
    return init + batch;
}, 0);

console.log(totalBatteries);