module Types
  class QueryType < Types::BaseObject
    field :tasks, resolver: Queries::TasksQuery
  end
end
