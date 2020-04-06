import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { CHANGE_DRAWER } from "../actions/types";

const INITIAL_STATE = { drawerOpened: false };

const changeDrawer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_DRAWER:
      return {
        ...state,
        drawerOpened: action.payload
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  changeDrawer,
  userReducer
});

export default reducers;
