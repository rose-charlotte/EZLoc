import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { userApi } from "../data/userApi";

export const store = configureStore({
    reducer: {
        user: userSlice,

        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([userApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
