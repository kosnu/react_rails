import { useMutation } from "@apollo/react-hooks"
import DELETE_TASK_MUTATION from "../graphql/mutation/DeleteTaskMutation.graphql"
import {
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
} from "../../graphql/generated/DeleteTaskMutation"

export const useDeleteTaskMutation = () => {
  const [updateTask] = useMutation<
    DeleteTaskMutation,
    DeleteTaskMutationVariables
  >(DELETE_TASK_MUTATION)

  return [updateTask]
}
