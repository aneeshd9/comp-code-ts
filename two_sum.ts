function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>();
  nums.forEach((val, idx) => {
    numsMap.set(val, idx);
  })
  let ans: number[] = []
  nums.forEach((val, idx) => {
    const other = target - val;
    if (numsMap.has(other) && numsMap.get(other) !== idx) {
      ans.push(...[idx, numsMap.get(other)!]);
    }
  })
  return ans.slice(0, 2);
};
