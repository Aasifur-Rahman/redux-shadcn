// remember to follow this @reduxjs/toolkit/query/react here react is must important or it won't work
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  // we can alos usi axios in instead of fetchBase query
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      //   it is providing tags and naming it
      providesTags: ["task"],
    }),
    // we are using post so that's why we will use builder.mutation
    createTask: builder.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
      //   when a mutation is happening then the task cache will become invalid and then redux will use the getTask query then it will reload automatically
      invalidatesTags: ["task"],
    }),
  }),
});

// here redux will make us a hook to use this
export const { useGetTasksQuery, useCreateTaskMutation } = baseApi;
