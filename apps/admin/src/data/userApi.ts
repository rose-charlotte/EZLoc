import { GetUserProfileResponse, SignInRequest, SignInResponse } from "@models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import { selectToken } from "../store/slices/userSlice";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_ROUTE}`,
        prepareHeaders: (headers, { getState }) => {
            headers.set("Content-Type", "application/json");

            const token = selectToken(getState() as RootState);
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: builder => ({
        profile: builder.mutation<GetUserProfileResponse, void>({
            query: () => ({
                url: "profile",
                method: "GET",
            }),
        }),
        token: builder.mutation<SignInResponse, SignInRequest>({
            query: data => ({
                url: "login",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
    }),
});

export const { useProfileMutation, useTokenMutation } = userApi;
