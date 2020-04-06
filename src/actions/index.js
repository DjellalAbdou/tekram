import { CHANGE_DRAWER, SAVE_PHONE, SAVE_CITIES, SAVE_TOKEN } from "./types";

export const toggleDrawer = state => ({
  type: CHANGE_DRAWER,
  payload: state
});

export const savePhone = phone => ({
  type: SAVE_PHONE,
  payload: phone
});

export const saveCities = cities => ({
  type: SAVE_CITIES,
  payload: cities
});

export const saveToken = token => ({
  type: SAVE_TOKEN,
  payload: token
});
