function longestUniqueSubarrayWithTargetSum(arr, targetSum) {
    const counts = {};
    // นับจำนวนการเกิดขึ้นของแต่ละค่า
    for (const io of arr) {
        counts[io] = (counts[io] || 0) + 1;
    }
    
    // กรองค่าที่เกิดขึ้นเพียงครั้งเดียว
    const numnotsame = arr.filter(io => counts[io] === 1);
    // จัดเรียงลำดับตัวเลข
    numnotsame.sort((a, b) => a - b);
    
      const seen = new Set();
    
    for (const num of numnotsame){
        let complement = targetSum - num;
        if (seen.has(complement)) {
            return [num];
        }
        seen.add(num);
    }
}



// ทดสอบฟังก์ชัน
console.log(longestUniqueSubarrayWithTargetSum([2, 3, 4, 5, 6, 2, 3, 4, 7], 15));
// Expected output: { maxLength: 3, subarray: [4, 5, 6] }

console.log(longestUniqueSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
// Expected output: { maxLength: 5, subarray: [1, 2, 3, 4, 5] }

console.log(longestUniqueSubarrayWithTargetSum([4, 5, 6, 7, 7, 8, 9, 10, 11], 26));
// Expected output: { maxLength: 0, subarray: [] }

console.log(longestUniqueSubarrayWithTargetSum([1, 1, 1, 1, 1], 2));
// Expected output: { maxLength: 0, subarray: [] }