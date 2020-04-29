export type Task = {
  id: number
  name: string
  describe: string
  deadlineAt: string
  completionAt: string
  createdAt: string
  updatedAt: string
}

export type TodoState = {
  __typename: "TodoState"
  id: string
  tasks: ReadonlyArray<Task>
}

export const initialState: TodoState = {
  __typename: "TodoState",
  id: "TodoState",
  tasks: [],
}
