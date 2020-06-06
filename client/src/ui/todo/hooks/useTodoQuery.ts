import { useQuery } from "@apollo/react-hooks"
import TODO_PAGE_QUERY from "../graphql/query/TodoPageQuery.graphql"
import { TodoPageQuery } from "../../graphql/generated/TodoPageQuery"

export const useTodoQuery = () => {
  const { data, error } = useQuery<TodoPageQuery>(TODO_PAGE_QUERY)
  if (error) {
    console.log(error)
    throw error
  }
  return { data }
}
