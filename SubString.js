let x, y;
function longestCommon(i, j, count) {
  if (i == 0 || j == 0) return count;

  if (x[i - 1] == y[j - 1]) {
    count = lcs(i - 1, j - 1, count + 1);
  }
  count = Math.max(
    count,
    Math.max(longestCommon(i, j - 1, 0), longestCommon(i - 1, j, 0))
  );
  return count;
}
