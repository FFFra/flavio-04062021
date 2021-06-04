import { forEach } from 'lodash';

import { calculateTotal } from '../../utils/Helpers';

const formatOrders = (orders) => {
  let formattedOrder;
  let sizes = [];

  if (orders) {
    forEach(orders, (order) => {
      if (orders && order[1]) {
        sizes.push(order[1]);
        const depth = calculateTotal(sizes);

        formattedOrder = {
          price: order[0],
          size: order[1],
          total: depth[depth.length - 1],
        };
      }
    });
  }

  if (formattedOrder) return formattedOrder;
};

export const formatOrderbook = (data) => {
  if (!data) return;
  const { bids, asks } = data;

  const formattedBid = formatOrders(bids);

  const formattedAsk = formatOrders(asks);

  return { bid: formattedBid && formattedBid, ask: formattedAsk };
};
