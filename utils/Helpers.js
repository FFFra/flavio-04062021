export const generateKey = () => Math.random().toString(36).substr(2, 5);

export const calculateDepth = (sizes) => {
  const depthCalc = sizes.map((_, index) => sizes.slice(0, index + 1).reduce((a, b) => a + b));

  return depthCalc;
};
