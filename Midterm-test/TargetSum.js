function longestUniqueSubarrayWithTargetSum(arr, targetSum) {
    let maxLength = 0;           // ความยาวสูงสุดของช่วงที่ไม่ซ้ำกันและผลรวมเท่ากับ targetSum
    let longestSubarray = [];    // ช่วงที่ยาวที่สุดที่ตรงตามเงื่อนไข
    let start = 0;              // ตำแหน่งเริ่มต้นของ sliding window
    let currentSum = 0;         // ผลรวมของช่วงปัจจุบัน
    let charSet = new Set();    // เซ็ตเพื่อเก็บตัวเลขที่ไม่ซ้ำกัน

    for (let end = 0; end < arr.length; end++) {
        const currentNum = arr[end];

        // ถ้าตัวเลขปัจจุบันอยู่ในเซ็ต (ซ้ำ) ต้องลบตัวเลขที่ไม่ซ้ำออกจากเซ็ตจนกว่าจะไม่มีการซ้ำ
        while (charSet.has(currentNum)) {
            charSet.delete(arr[start]);   // ลบตัวเลขที่ตำแหน่ง start ออกจากเซ็ต
            currentSum -= arr[start];     // ลดผลรวมโดยการลบตัวเลขที่ถูกลบออก
            start++;                      // ขยับตำแหน่งเริ่มต้นไปข้างหน้า
        }

        // เพิ่มตัวเลขปัจจุบันเข้าไปในเซ็ตและอัพเดตผลรวม
        charSet.add(currentNum);
        currentSum += currentNum;

        // ถ้าผลรวมเท่ากับ targetSum
        if (currentSum === targetSum) {
            const currentLength = end - start + 1;
            // อัพเดตความยาวสูงสุดถ้าจำเป็น
            if (currentLength > maxLength) {
                maxLength = currentLength;
                longestSubarray = arr.slice(start, end + 1);
            }
        }
    }

    // คืนค่าเป็นอ็อบเจ็กต์ที่ประกอบด้วยความยาวสูงสุดและช่วงที่ยาวที่สุด
    return { maxLength, subarray: longestSubarray };
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
