import * as React from "react"
import { Task } from "../../store/task"
import { TaskItem } from "./TaskItem"

type Props = {
  tasks: ReadonlyArray<Task>
  onDeleteTaskButtonClick: (ids: [string]) => void
}

export const TaskList: React.FC<Props> = React.memo(
  ({ tasks, onDeleteTaskButtonClick, ...props }: Props) => {
    return (
      <div {...props}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteButtonClick={onDeleteTaskButtonClick}
          />
        ))}
      </div>
    )
  },
)
