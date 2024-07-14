// src/actions.js
export const SET_FREQUENCY = 'SET_FREQUENCY';
export const SET_FREQUENCY_UNIT = 'SET_FREQUENCY_UNIT';
export const SET_VOLTAGE = 'SET_VOLTAGE';
export const SET_VOLTAGE_UNIT = 'SET_VOLTAGE_UNIT';
export const SET_RESISTANCE = 'SET_RESISTANCE';
export const SET_RESISTANCE_UNIT = 'SET_RESISTANCE_UNIT';
export const SET_CAPACITOR = 'SET_CAPACITOR';
export const SET_CAPACITOR_UNIT = 'SET_CAPACITOR_UNIT';
export const SET_INDUCTANCE = 'SET_INDUCTANCE';
export const SET_INDUCTANCE_UNIT = 'SET_INDUCTANCE_UNIT';

export const setFrequency = (frequency) => ({
  type: SET_FREQUENCY,
  payload: frequency,
});

export const setFrequencyUnit = (unit) => ({
  type: SET_FREQUENCY_UNIT,
  payload: unit,
});

export const setVoltage = (voltage) => ({
  type: SET_VOLTAGE,
  payload: voltage,
});

export const setVoltageUnit = (unit) => ({
  type: SET_VOLTAGE_UNIT,
  payload: unit,
});

export const setResistance = (resistance) => ({
  type: SET_RESISTANCE,
  payload: resistance,
});

export const setResistanceUnit = (unit) => ({
  type: SET_RESISTANCE_UNIT,
  payload: unit,
});

export const setCapacitor = (capacitor) => ({
  type: SET_CAPACITOR,
  payload: capacitor,
});

export const setCapacitorUnit = (unit) => ({
  type: SET_CAPACITOR_UNIT,
  payload: unit,
});

export const setInductance = (inductance) => ({
  type: SET_INDUCTANCE,
  payload: inductance,
});

export const setInductanceUnit = (unit) => ({
  type: SET_INDUCTANCE_UNIT,
  payload: unit,
});