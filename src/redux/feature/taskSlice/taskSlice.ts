import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  tasks: [ITask];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IState = {
  // this give schema vibe from here
  tasks: [
    {
      id: "afgadfasdf",
      title: "Init",
      description: "create home page , and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
};

// the reducer state
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
