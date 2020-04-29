import * as React from "react"
import { useQuery } from "react-apollo"
import { TodoTemplate } from "../component/TodoTemplate";
import { TodoPageQuery } from "../../graphql/generated/TodoPageQuery";
import TODO_PAGE_QUERY from "../graphql/query/TodoPageQuery.graphql"

export const TodoPage: React.FC = () => {
  const {data: rootQuery} = useQuery<TodoPageQuery>(
    TODO_PAGE_QUERY,
  )
  return <TodoTemplate data={rootQuery}/>
}