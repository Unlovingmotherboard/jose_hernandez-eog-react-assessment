import { reducer as weatherReducer } from '../Features/Weather/reducer';

import { metricReducer as selectMetricsReducer } from '../Features/Weather/metrix_reducer'


export default {
  weather: weatherReducer,
  metrics: selectMetricsReducer
};
