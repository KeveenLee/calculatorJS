module.exports = substract = (a, b) => {
  if (b > a) {
    throw new Error("Nagative result not allowed");
  }
  return a - b;
};
