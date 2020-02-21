import { createSlice, PayloadAction } from 'redux-starter-kit';

export type SelectedMetrics = {
  metrics: [];
};

export type ApiErrorAction = {
    error: string;
  };

const initialState = {
  selectedMetric: []
};


const slice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    selectMetric: (state, action: PayloadAction<SelectedMetrics>) => {
      const { metrics } = action.payload;
      state.selectedMetric = metrics;      
    },
    metricsApiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const metricReducer = slice.reducer;
export const metricActions = slice.actions;
