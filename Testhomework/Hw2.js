function minWindowSubstring(s, t) {
    if (!s || !t) return "";

    const need = new Map();
    for (const char of t) need.set(char, (need.get(char) || 0) + 1);

    let left = 0, right = 0, minLen = Infinity, minStart = 0, count = t.length;
    const window = new Map();

    while (right < s.length) {
        const charRight = s[right];
        if (need.has(charRight)) {
            window.set(charRight, (window.get(charRight) || 0) + 1);
            if (window.get(charRight) <= need.get(charRight)) count--;
        }

        while (count === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            const charLeft = s[left];
            if (need.has(charLeft)) {
                window.set(charLeft, window.get(charLeft) - 1);
                if (window.get(charLeft) < need.get(charLeft)) count++;
            }
            left++;
        }
        right++;
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

module.exports = minWindowSubstring;

console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // -> "BANC" 
console.log(minWindowSubstring("this is a test string", "tist")); // -> "t stri" 
console.log(minWindowSubstring("a", "a")); // -> "a" 
console.log(minWindowSubstring("a", "aa")); // -> ""
