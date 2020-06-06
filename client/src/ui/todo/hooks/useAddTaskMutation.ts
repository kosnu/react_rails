import { useMutation } from "@apollo/react-hooks"
import CREATE_TASK_MUTATION from "../graphql/mutation/CreateTaskMutation.graphql"
import {
  CreateTaskMutation,
  CreateTaskMutationVariables,
} from "../../graphql/generated/CreateTaskMutation"

export const useAddTaskMutation = () => {
  const [createTask] = useMutation<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >(CREATE_TASK_MUTATION)

  return [createTask]
}

function dateFormatter(date: string) {
  const doubleDigestNumber = number => {
    return ("0" + number).slice(-2)
  }

  const _date = new Date(date)
  const year = _date.getFullYear()
  const month = doubleDigestNumber(_date.getMonth() + 1)
  const day = doubleDigestNumber(_date.getDate())
  return `${year}-${month}-${day}`
}
