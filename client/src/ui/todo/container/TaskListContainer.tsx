import * as React from "react"
import { useSelector } from "react-redux"
import { TaskList } from "../component/TaskList"
import { RootState } from "../../store"
import { useDeleteTaskMutation } from "../hooks/useDeleteTaskMutation"
import { useCallback } from "react"

export const TaskListContainer: React.FC = () => {
  // const dispatch = useDispatch()
  const [deleteTask] = useDeleteTaskMutation()

  const tasks = useSelector((state: RootState) => state.task.tasks)

  const handleDeleteTaskButtonClick = useCallback(
    async (ids: [string]) => {
      const { data, errors } = await deleteTask({
        variables: {
          ids: ids,
        },
      })
      if (errors) {
        console.log(errors)
        throw errors
      }
    },
    [deleteTask],
  )

  return (
    <TaskList
      tasks={tasks}
      onDeleteTaskButtonClick={handleDeleteTaskButtonClick}
    />
  )
}
