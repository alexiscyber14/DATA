import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './logic/companySlice';
// import detailsReducer from './logic/detailsSlice';

const store = configureStore({
  reducer: {
    companies: companyReducer,
  //  company: detailsReducer,
  },
});

export default store;
