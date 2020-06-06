class Mutations::Task::UpdateTask < Mutations::BaseMutation
  description 'Update Task Mutation'
  null true

  argument :id, ID, required: true
  argument :name, String, required: false
  argument :describe, String, required: false
  argument :deadline_at, String, required: false
  argument :completion_at, String, required: false

  field :task, Types::QueryType::TaskType, null: false
  field :errors, [String], null: false

  def resolve(id:, name:, describe:, deadline_at:, completion_at:)
    task = Task.find_by(id: id)
    if task.update(task_params(name, describe, deadline_at, completion_at))
      { task: task, errors: [], }
    else
      { task: nil, errors: task.errors.full_messages }
    end
  end

  def task_params(name, describe, deadline_at, completion_at)
    task_params                  = {}
    task_params['name']          = name if name
    task_params['describe']      = describe if describe
    task_params['deadline_at']   = deadline_at
    task_params['completion_at'] = completion_at
    task_params
  end
end

