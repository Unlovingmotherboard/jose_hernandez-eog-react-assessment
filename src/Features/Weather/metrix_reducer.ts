import { createSlice, PayloadAction } from 'redux-starter-kit';

export type SelectedMetrics = {
  metrics: [];
};

export type ApiErrorAction = {
    error: string;
  };

const initialState = {
  selectedMetric: null as any,
};


const slice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    selectMetric: (state, action: PayloadAction) => {
      let x = action.payload;            
      state.selectedMetric = x;
    },
    metricsApiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const metricReducer = slice.reducer;
export const metricActions = slice.actions;
