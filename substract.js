module.exports = substract = (a, b) => {
  const res = a - b;
  if (Number.isNaN(res)) {
    throw new Error("Invalid Operation");
  }
  if (b > a) {
    throw new Error("Negative result not allowed");
  }
  return a - b;
};
