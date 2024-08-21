function lengthOfLonestSubstring(s) {
    let maxLen = 0;            // ตัวแปรเพื่อเก็บความยาวของ substring ที่ไม่ซ้ำกันที่ยาวที่สุด
    let longestSubstring = '';  // ตัวแปรเพื่อเก็บ substring ที่ไม่ซ้ำกันที่ยาวที่สุด
    let start = 0;             // ตัวแปรที่ใช้เก็บจุดเริ่มต้นของ sliding window
    let charSet = new Set();  // เซ็ตเพื่อเก็บตัวอักษรที่มีอยู่ใน sliding window ปัจจุบัน

    // ใช้ลูป for เพื่อทำการเลื่อน window ไปที่ปลายสุดของสตริง
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end]; // ตัวอักษรปัจจุบันในตำแหน่ง end

        // ถ้าตัวอักษรปัจจุบันมีอยู่ในเซ็ตแสดงว่ามีการทำซ้ำ
        while (charSet.has(currentChar)) {
            charSet.delete(s[start]); // ลบตัวอักษรที่ตำแหน่ง start ออกจากเซ็ต
            start++; // ขยับจุดเริ่มต้นไปข้างหน้า
        }

        charSet.add(currentChar); // เพิ่มตัวอักษรปัจจุบันเข้าไปในเซ็ต

        // ตรวจสอบและอัพเดตค่าความยาวของ substring ที่ยาวที่สุด
        if (end - start + 1 > maxLen) {
            maxLen = end - start + 1; // อัพเดตความยาวของ substring ที่ยาวที่สุด
            longestSubstring = s.slice(start, end + 1); // อัพเดตค่า substring ที่ยาวที่สุด
        }
    }

    return { maxLen, longestSubstring }; // คืนค่าเป็นอ็อบเจ็กต์ที่ประกอบด้วยความยาวและ substring ที่ยาวที่สุด
}

console.log(lengthOfLonestSubstring("abcabcbb"));
console.log(lengthOfLonestSubstring("bbbbb"));
console.log(lengthOfLonestSubstring("pwwkew"));
console.log(lengthOfLonestSubstring(""));

