class Mutations::Task::DeleteTasks < Mutations::BaseMutation
  description 'Delete Tasks Mutation'
  null true

  argument :ids, [ID], required: true

  field :errors, [String], null: false

  def resolve(ids:)
    tasks = Task.where(id: ids)

    if tasks.destroy_all
      { errors: [], }
    else
      { errors: task.errors.full_messages }
    end
  end
end

