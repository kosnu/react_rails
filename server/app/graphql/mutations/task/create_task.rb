class Mutations::Task::CreateTask < Mutations::BaseMutation
  description 'Create Task Mutation'
  null true

  argument :name, String, required: true
  argument :describe, String, required: true
  argument :deadline_at, String, required: false
  argument :completion_at, String, required: false

  field :task, Types::QueryType::TaskType, null: false
  field :errors, [String], null: false

  def resolve(name:, describe:, deadline_at:, completion_at:)
    task = Task.new(name: name, describe: describe, user_id: 1, deadline_at: deadline_at, completion_at: completion_at)

    if task.save
      {  task: task, errors: [], }
    else
      { task: nil, errors: task.errors.full_messages }
    end
  end
end
