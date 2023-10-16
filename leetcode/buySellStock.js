const prices = [7,1,5,3,6,4]
const pricesNull = [7,6,4,3,1]


const maxProfit = function(prices) {
    let maxProf = 0
    let l = 0
    let r = 1
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let diff = prices[r] - prices[l]
            maxProf = diff > maxProf ? diff : maxProf
            r++
        } else {
            l = r
            r++
        }
    }
    return maxProf
};

console.log(maxProfit(pricesNull))