# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Task, type: :model do
  it do
    task = Task.new({ name: "お風呂", describe: "hoge", user_id: 1, deadline_at: DateTime.tomorrow, completion_at: DateTime.tomorrow, })
    expect(task.save!).to be_truthy
  end
end
