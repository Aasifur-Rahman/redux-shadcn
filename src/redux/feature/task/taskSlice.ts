import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  task: [ITask];
}

const initialState: IState = {
  // this give schema vibe from here
  task: [
    {
      id: "afgadfasdf",
      title: "Init",
      description: "create home page , and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
