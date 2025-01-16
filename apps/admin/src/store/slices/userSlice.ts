import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../data/userApi";

const initialState: UserState = {
    token: undefined,
    user: undefined,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(userApi.endpoints.profile.matchFulfilled, (state, { payload }) => {
            state.user = payload;
        });
        builder.addMatcher(userApi.endpoints.token.matchFulfilled, (state, { payload }) => {
            if (payload.success) {
                state.token = payload.accessToken;
            }
            if (!payload.success) {
                state.token = payload.errorCode;
            }
        });
    },

    selectors: {
        selectToken: state => state.token,
        selectUser: state => state.user,
    },
});

export interface UserState {
    token: string | undefined;
    user: User | undefined;
}

export interface User {
    userId: string | undefined;
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
}

export const { selectUser, selectToken } = userSlice.selectors;
export default userSlice.reducer;
