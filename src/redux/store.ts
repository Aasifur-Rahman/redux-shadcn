import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice/counterSlice";
import logger from "./middlewares/logger";

//send this as in option
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
