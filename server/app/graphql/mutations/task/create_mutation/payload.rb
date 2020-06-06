module Mutations::Task::CreateMutation
  class Payload < Types::BaseObject
    field :task, Types::QueryType::TaskType, null: false
    field :errors, [String], null: false

    def task
      nil if object.save
      object
    end

    def errors
      object.errors.full_messages
    end
  end
end