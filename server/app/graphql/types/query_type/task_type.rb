class Types::QueryType::TaskType < Types::BaseObject
  field :id, ID, null: false, resolve: ->(task, _args, _context) { task.id }
  field :name, String, null: false, resolve: ->(task, _args, _context) { task.name }
  field :describe, String, null: false, resolve: ->(task, _args, _context) { task.describe }
  field :user_id, String, null: false, resolve: ->(task, _args, _context) { task.user_id }
  field :deadline_at, String, null: false, resolve: ->(task, _args, _context) { task.deadline_at }
  field :completion_at, String, null: false, resolve: ->(task, _args, _context) { task.completion_at }
  field :created_at, String, null: false, resolve: ->(task, _args, _context) { task.created_at }
  field :updated_at, String, null: false, resolve: ->(task, _args, _context) { task.updated_at }
end