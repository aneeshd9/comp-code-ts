function isValid(s: string): boolean {
  let stack: string[] = []
  for (var i = 0; i < s.length; ++i) {
    if (isOpen(s[i])) {
      stack.push(s[i]);
    } else if (stack.length === 0) {
      return false;
    } else {
      var top: string = stack.pop()!;
      if (!isMatch(top, s[i])) return false;
    }
  }
  if (!(stack.length === 0)) return false;
  return true;
};

function isOpen(s: string): boolean {
  return s === "(" || s === "{" || s === "[";
};

function isMatch(top: string, curr: string) {
  return (top === "(" && curr === ")") ||
    (top === "{" && curr === "}") ||
    (top === "[" && curr === "]");
};
