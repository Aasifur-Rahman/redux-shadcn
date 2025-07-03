import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { nanoid, createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IState = {
  // this give schema vibe from here
  tasks: [],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

// the reducer state
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // giving type to payload is needed
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData); // why pushing here?
      // => so what redux does is it uses Immer behind the scenes
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
