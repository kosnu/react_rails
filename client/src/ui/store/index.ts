import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import { taskReducer } from "./task"

const reducer = combineReducers({
  task: taskReducer,
})

export const store = configureStore({ reducer })
export type RootState = ReturnType<typeof store.getState>
