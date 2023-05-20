function isPalindrome(s: string): boolean {
  s = s.toLowerCase()
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  let low: number = 0;
  let high: number = s.length - 1;
  while (low < high) {
    if (s[low] !== s[high]) return false;
    low += 1;
    high -= 1;
  }
  return true;
};
