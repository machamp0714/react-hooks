import { combineReducers } from "redux";
import events from "./events";
import logs from "./logs";

export default combineReducers({ events, logs });
