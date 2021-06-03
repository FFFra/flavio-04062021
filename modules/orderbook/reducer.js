const INITIAL_STATE = {
  asks: [],
  bids: [],
};

const orderbookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STORE_ORDERBOOK': {
      const { bid, ask } = action.payload;
      if (bid && ask) {
        return {
          ...state,
          bids: [...state.bids, bid && bid],
          asks: [...state.asks, ask && ask],
        };
      }
    }
    default:
      return state;
  }
};

export default orderbookReducer;
