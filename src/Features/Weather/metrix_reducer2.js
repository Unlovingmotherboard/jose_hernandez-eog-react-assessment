import { createSlice, PayloadAction } from 'redux-starter-kit';


const initialState = {
  selectedMetric: []
};


const slice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    selectMetric: (state, action) => {
      const { metrics } = action.payload;

      let metricsArray = [];
      metricsArray.push(action.payload);

      console.log(metricsArray)

    },
    metricsApiErrorReceived: (state, action) => state,
  },
});

export const metricReducer = slice.reducer;
export const metricActions = slice.actions;
