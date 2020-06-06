module Types
  class MutationType < Types::BaseObject
    field :create_task, mutation: Mutations::CreateTask
    field :delete_tasks, mutation: Mutations::DeleteTasks
    field :update_task, mutation: Mutations::UpdateTask
    field :create, resolve: Mutations::Task::CreateMutation::Resolver
  end
end
