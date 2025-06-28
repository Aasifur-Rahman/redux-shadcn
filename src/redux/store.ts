import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice/counterSlice";
import taskReducer from "./feature/task/taskSlice";

//send this as in option
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
