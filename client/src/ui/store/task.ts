import { createSlice } from "@reduxjs/toolkit"

export type Task = {
  id: number
  name: string
  describe: string
  deadlineAt: string | null
  completionAt: string | null
  createdAt: string
  updatedAt: string
}

export type TasksState = {
  tasks: ReadonlyArray<Task>
  loading: boolean
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
}

const slice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      return Object.assign({}, state, { tasks: action.payload })
    },
  },
})

export const taskReducer = slice.reducer

export const { setTasks } = slice.actions
