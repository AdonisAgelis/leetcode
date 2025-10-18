function isAnagram(s, t) {
  if (s === t) return true;
  if (s.length !== t.length) return false;

  let counterS = {};
  let counterT = {};

  for (const el of s) {
    counterS[el] = (counterS[el] || 0) + 1;
  }

  for (const el of t) {
    counterT[el] = (counterT[el] || 0) + 1;
  }

  for (const key in counterS) {
    if (counterS[key] !== counterT[key]) return false;
  }

  return true;
}

// Time complexity: O(n)
// Space complexity: O(n)
