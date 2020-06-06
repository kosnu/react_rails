import * as React from "react"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { AddTask } from "../component/AddTask"
import { useAddTaskMutation } from "../hooks/useAddTaskMutation"

export const AddTaskContainer: React.FC = () => {
  const dispatch = useDispatch()
  const [createTask] = useAddTaskMutation()

  const handleAddTaskButtonClick = useCallback(async () => {
    const { data, errors } = await createTask({
      variables: {
        name: `test_${Date.now()}`,
        describe: "okokok",
        deadlineAt: "2020-06-03",
        completionAt: "2020-06-03",
      },
    })
    if (errors) {
      console.log(errors)
      throw errors
    }
  }, [createTask])

  return <AddTask onClick={handleAddTaskButtonClick} />
}
