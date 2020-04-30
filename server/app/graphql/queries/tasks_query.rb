# frozen_string_literal: true

module Queries
  class TasksQuery < ::Queries::BaseQuery
    type Types::QueryType::TaskType.connection_type, null: true
    description 'タスク'

    argument :name, String, required: false, default_value: nil

    def resolve(name:)
      Task.search(name_cont: name).result
    end
  end
end

