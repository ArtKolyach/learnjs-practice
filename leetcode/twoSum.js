const nums = [1, 1, 4, 4, 2]
const target = 8


const check = (nums, target) => {
    const storage = {}
    for (let [index, num] of nums.entries()) {
        if (storage[num] !== undefined) return [storage[num], index]
        storage[target - num] = index
    }
}
console.log(nums, target)
check(nums, target)