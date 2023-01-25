import { combineReducers } from "redux";
import { AppointmentReducer } from "./AppointmentReducer";
import { ContactReducer } from "./ContactReducer";
import { FaqReducer } from "./FaqReducer";
import { ShuttlesReducer } from "./ShuttlesReducer";
import UsersReducer from "./UsersReducer";

const reducers = combineReducers({
  allAppointments: AppointmentReducer,
  allShuttles: ShuttlesReducer,
  allFaq: FaqReducer,
  allUsers: UsersReducer,
  allContacts: ContactReducer,
});

export default reducers;
