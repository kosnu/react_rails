import * as todo from "../todo/graphql/state"

type RootState = Readonly<{
  todoState: todo.TodoState
}>

export const initialState: RootState = {
  todoState: todo.initialState,
}
