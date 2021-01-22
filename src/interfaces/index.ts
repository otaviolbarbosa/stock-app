export interface StockReducer {
  quote: {
    avgTotalVolume: Number,
    calculationPrice: String,
    change: Number,
    changePercent: Number,
    close: Number,
    closeSource: String,
    closeTime: Number,
    companyName: String,
    delayedPrice: Number,
    delayedPriceTime: Number,
    extendedChange: Number,
    extendedChangePercent: Number,
    extendedPrice: Number,
    extendedPriceTime: Number,
    high: Number,
    highSource: String,
    highTime: Number,
    iexAskPrice: Number,
    iexAskSize: Number,
    iexBidPrice: Number,
    iexBidSize: Number,
    iexClose: Number,
    iexCloseTime: Number,
    iexLastUpdated: Number,
    iexMarketPercent: Number,
    iexOpen: Number,
    iexOpenTime: Number,
    iexRealtimePrice: Number,
    iexRealtimeSize: Number,
    iexVolume: Number,
    isUSMarketOpen: Boolean
    lastTradeTime: Number,
    latestPrice: Number,
    latestSource: String,
    latestTime: String,
    latestUpdate: Number,
    latestVolume: Number,
    low: Number,
    lowSource: String,
    lowTime: Number,
    marketCap: Number,
    oddLotDelayedPrice: Number,
    oddLotDelayedPriceTime: Number,
    open: Number,
    openSource: String,
    openTime: Number,
    peRatio: Number,
    previousClose: Number,
    previousVolume: Number,
    primaryExchange: String,
    symbol: String,
    volume: Number,
    week52High: Number,
    week52Low: Number,
    ytdChange: Number,
  },
  chartData: [{
    change: Number,
    changeOverTime: Number,
    changePercent: Number,
    close: Number,
    date: String,
    fClose: Number,
    fHigh: Number,
    fLow: Number,
    fOpen: Number,
    fVolume: Number,
    high: Number,
    id: String,
    key: String,
    label: String,
    low: Number,
    marketChangeOverTime: Number,
    open: Number,
    subkey: String,
    symbol: String,
    uClose: Number,
    uHigh: Number,
    uLow: Number,
    uOpen: Number,
    uVolume: Number,
    updated: Number,
    volume: Number,
  }]
}

export interface RootState {
  stockReducer: StockReducer
  
}
