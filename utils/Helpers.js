export const generateKey = () => Math.random().toString(36).substr(2, 5);

export const calculateTotal = (sizes) => {
  const depthCalc = sizes.map((_, index) => sizes.slice(0, index + 1).reduce((a, b) => a + b));

  return depthCalc;
};

export const calcPercentage = (partialValue, totalValue, precision = 2) => {
  let percentage = (totalValue ? partialValue / totalValue : 0) * 100;
  percentage = Math.min(percentage, 100);
  percentage = Math.max(percentage, 0);
  return percentage.toFixed(precision);
};
