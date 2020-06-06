import * as React from "react"
import { Header } from "./Header"
import { TaskListContainer } from "../container/TaskListContainer"
import { AddTaskContainer } from "../container/AddTaskContainer"

type Props = {}

export const TodoTemplate: React.FC<Props> = React.memo(
  ({ ...props }: Props) => (
    <div className="App" {...props}>
      <Header />
      <AddTaskContainer />
      <TaskListContainer />
    </div>
  ),
)
