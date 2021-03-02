import { combineReducers } from "redux";
import breedingreducer from "./Admin/Breeding/BreedingReducer";
import trainingreducer from "./Admin/Training/TrainingReducer";
import racereducer from "./Admin/Trotting/RaceReducer";
import reducer from "./User/UserReducer";

const rootReducer = combineReducers({
  user: reducer,
  breedingreducer: breedingreducer,
  trainingreducer: trainingreducer,
  racereducer: racereducer,
});

export default rootReducer;
