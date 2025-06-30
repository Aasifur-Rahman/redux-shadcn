import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice/counterSlice";
import reducer from "./feature/taskSlice/taskSlice";

//send this as in option
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
