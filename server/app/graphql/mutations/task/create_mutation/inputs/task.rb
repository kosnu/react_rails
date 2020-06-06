module Mutations::Task::CreateMutation::Inputs
  class Task < Types::BaseInputObject
    argument :name, String, required: true
    argument :describe, String, required: true
    argument :deadline_at, String, required: false
    argument :completion_at, String, required: false
  end
end
