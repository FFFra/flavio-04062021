export function initOrderbook(symbol) {
  return {
    type: 'INIT_ORDERBOOK',
    payload: symbol,
  };
}

export function storeOrderbook({ bid, ask }) {
  return {
    type: 'STORE_ORDERBOOK',
    payload: { bid, ask },
  };
}
