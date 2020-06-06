import * as React from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { TodoTemplate } from "../component/TodoTemplate"
import { useTodoQuery } from "../hooks/useTodoQuery"
import { setTasks, Task } from "../../store/task"
import { TodoPageQuery_tasks_edges } from "../../graphql/generated/TodoPageQuery"

export const TodoPage: React.FC = () => {
  const { data } = useTodoQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const tasks = data?.tasks?.edges?.map(taskMapper) ?? []
      console.log(tasks)
      dispatch(setTasks(tasks))
    })()
  }, [dispatch, data])
  return <TodoTemplate />
}

const taskMapper = (task: TodoPageQuery_tasks_edges | null): Task | null => {
  if (task && task.node) {
    return {
      id: Number(task.node.id),
      name: task.node.name,
      describe: task.node.describe,
      deadlineAt: task.node.deadlineAt,
      completionAt: task.node.completionAt,
      createdAt: task.node.createdAt,
      updatedAt: task.node.updatedAt,
    }
  }
  return null
}
