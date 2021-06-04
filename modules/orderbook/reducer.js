const INITIAL_STATE = {
  asks: [],
  bids: [],
};

const MAX_ORDERS_LIMIT = 15;

const orderbookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STORE_ORDERBOOK': {
      const { bid, ask } = action.payload;
      if (bid && ask) {
        return {
          ...state,
          bids: [...state.bids.slice(0, MAX_ORDERS_LIMIT), bid && bid],
          asks: [...state.asks.slice(0, MAX_ORDERS_LIMIT), ask && ask],
        };
      }
    }
    default:
      return state;
  }
};

export default orderbookReducer;
