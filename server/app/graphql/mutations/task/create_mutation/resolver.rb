module Mutations::Task::CreateMutation
  class Resolver < BaseMutation
    type Mutations::Task::CreateMutation::Payload, null: false

    argument :input, Mutations::Task::CreateMutation::Inputs::Task, required: true

    def resolve(input:)
      task = Task.new(
        name: input.name,
        describe: input.describe,
        user_id: 1,
        deadline_at: input.deadline_at,
        completion_at: input.completion_at
      )
      task
    end
  end
end
