// src/reducers.js
import { combineReducers } from 'redux';
import {
  SET_FREQUENCY,
  SET_FREQUENCY_UNIT,
  SET_VOLTAGE,
  SET_VOLTAGE_UNIT,
  SET_RESISTANCE,
  SET_RESISTANCE_UNIT,
  SET_CAPACITOR,
  SET_CAPACITOR_UNIT,
  SET_INDUCTANCE,
  SET_INDUCTANCE_UNIT,
} from '@/actions/action.jsx';

const initialState = {
  frequency: '',
  frequencyUnit: 'Hz',
  voltage: '',
  voltageUnit: 'V',
  resistance: '',
  resistanceUnit: 'Ω',
  capacitor: '',
  capacitorUnit: 'F',
  inductance: '',
  inductanceUnit: 'H',
};

const frequencyReducer = (state = initialState.frequency, action) => {
  switch (action.type) {
    case SET_FREQUENCY:
      return action.payload;
    default:
      return state;
  }
};

const frequencyUnitReducer = (state = initialState.frequencyUnit, action) => {
  switch (action.type) {
    case SET_FREQUENCY_UNIT:
      return action.payload;
    default:
      return state;
  }
};

const voltageReducer = (state = initialState.voltage, action) => {
  switch (action.type) {
    case SET_VOLTAGE:
      return action.payload;
    default:
      return state;
  }
};

const voltageUnitReducer = (state = initialState.voltageUnit, action) => {
  switch (action.type) {
    case SET_VOLTAGE_UNIT:
      return action.payload;
    default:
      return state;
  }
};

const resistanceReducer = (state = initialState.resistance, action) => {
  switch (action.type) {
    case SET_RESISTANCE:
      return action.payload;
    default:
      return state;
  }
};

const resistanceUnitReducer = (state = initialState.resistanceUnit, action) => {
  switch (action.type) {
    case SET_RESISTANCE_UNIT:
      return action.payload;
    default:
      return state;
  }
};

const capacitorReducer = (state = initialState.capacitor, action) => {
  switch (action.type) {
    case SET_CAPACITOR:
      return action.payload;
    default:
      return state;
  }
};

const capacitorUnitReducer = (state = initialState.capacitorUnit, action) => {
  switch (action.type) {
    case SET_CAPACITOR_UNIT:
      return action.payload;
    default:
      return state;
  }
};

const inductanceReducer = (state = initialState.inductance, action) => {
  switch (action.type) {
    case SET_INDUCTANCE:
      return action.payload;
    default:
      return state;
  }
};

const inductanceUnitReducer = (state = initialState.inductanceUnit, action) => {
  switch (action.type) {
    case SET_INDUCTANCE_UNIT:
      return action.payload;
    default:  
      return state;
  }
};

const rootReducer = combineReducers({
  frequency: frequencyReducer,
  frequencyUnit: frequencyUnitReducer,
  voltage: voltageReducer,
  voltageUnit: voltageUnitReducer,
  resistance: resistanceReducer,
  resistanceUnit: resistanceUnitReducer,
  capacitor: capacitorReducer,
  capacitorUnit: capacitorUnitReducer,
  inductance: inductanceReducer,
  inductanceUnit: inductanceUnitReducer,
});

export default rootReducer;