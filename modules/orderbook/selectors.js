import { createSelector } from 'reselect';

export const bidsSelector = (state) => state.orderbook.bids;
export const asksSelector = (state) => state.orderbook.asks;

export const bidsOrdersSelector = createSelector(
  (state) => bidsSelector(state),
  (bids) => {
    return bids;
  }
);

export const asksOrdersSelector = createSelector(
  (state) => asksSelector(state),
  (asks) => {
    if (asks) return asks;
  }
);
