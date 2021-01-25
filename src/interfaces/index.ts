export interface Quote {
  avgTotalVolume: number;
  calculationPrice: string;
  change: number;
  changePercent: number;
  close: number;
  closeSource: string;
  closeTime: number;
  companyName: string;
  delayedPrice: number;
  delayedPriceTime: number;
  extendedChange: number;
  extendedChangePercent: number;
  extendedPrice: number;
  extendedPriceTime: number;
  high: number;
  highSource: string;
  highTime: number;
  iexAskPrice: number;
  iexAskSize: number;
  iexBidPrice: number;
  iexBidSize: number;
  iexClose: number;
  iexCloseTime: number;
  iexLastUpdated: number;
  iexMarketPercent: number;
  iexOpen: number;
  iexOpenTime: number;
  iexRealtimePrice: number;
  iexRealtimeSize: number;
  iexVolume: number;
  isUSMarketOpen: boolean;
  lastTradeTime: number;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume: number;
  low: number;
  lowSource: string;
  lowTime: number;
  marketCap: number;
  oddLotDelayedPrice: number;
  oddLotDelayedPriceTime: number;
  open: number;
  openSource: string;
  openTime: number;
  peRatio: number;
  previousClose: number;
  previousVolume: number;
  primaryExchange: string;
  symbol: string;
  volume: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
}
export interface ChartData {
  change: number;
  changeOverTime: number;
  changePercent: number;
  close: number;
  date: string;
  fClose: number;
  fHigh: number;
  fLow: number;
  fOpen: number;
  fVolume: number;
  high: number;
  id: string;
  key: string;
  label: string;
  low: number;
  marketChangeOverTime: number;
  open: number;
  subkey: string;
  symbol: string;
  uClose: number;
  uHigh: number;
  uLow: number;
  uOpen: number;
  uVolume: number;
  updated: number;
  volume: number;
}
export interface StockReducer {
  stockSymbol: string;
  quote: Quote;
  quoteError: boolean;
  chartData: [ChartData];
  chartDataError: boolean;
  loading: boolean;
}

export interface Favorite {
  companyName: string;
  symbol: string;
}

export interface FavoriteReducer {
  favorites: [Favorite];
}

export interface RootState {
  stockReducer: StockReducer;
  favoriteReducer: FavoriteReducer;
}
