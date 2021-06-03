import { forEach } from 'lodash';

const formatOrders = (orders) => {
  let formattedOrder;
  let sizes = [];

  if (orders) {
    forEach(orders, (order) => {
      if (orders && order[1]) {
        sizes.push(order[1]);
        const depth = calculateDepth(sizes);

        formattedOrder = {
          price: order[0],
          size: order[1],
          total: depth[depth.length - 1],
        };
      }
    });
  }

  return formattedOrder;
};

const calculateDepth = (sizes) => {
  const depthCalc = sizes.map((_, index) => sizes.slice(0, index + 1).reduce((a, b) => a + b));

  return depthCalc;
};

export const formatOrderbook = (data) => {
  if (!data) return;
  const { bids, asks } = data;

  const formattedBid = formatOrders(bids);
  const formattedAsk = formatOrders(asks);

  return { bid: formattedBid && formattedBid, ask: formattedAsk };
};
