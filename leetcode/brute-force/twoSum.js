var twoSum = function(nums, target) {
    for (let i = 0; i < nums.lenght; i++) {
        for (let j = i + 1; j < nums.lenght; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};

