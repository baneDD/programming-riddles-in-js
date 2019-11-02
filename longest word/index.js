exports.longestWord = str => {
  if (!str) return 0;

  return str
    .replace(/[^0-9a-zA-Z ]/g, "")
    .split(" ")
    .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0);
};
