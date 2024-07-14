import { configureStore } from '@reduxjs/toolkit';
import frequencyReducer from '@/reducers/frequency';

const frequencyStore = configureStore({
    reducer: {
        frequency: frequencyReducer
    }
});

export default frequencyStore;