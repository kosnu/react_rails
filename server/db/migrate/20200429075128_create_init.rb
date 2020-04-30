class CreateInit < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.text :describe, null: false     # railsでdefaultを設定する
      t.integer :user_id, null: false
      t.datetime :deadline_at
      t.datetime :completion_at

      t.timestamps
    end

    add_index :tasks, [:user_id]

    create_table :users do |t|
      t.string :name, null: false
      t.string :password, null: false
      t.datetime :last_login_at, null: false

      t.timestamps
    end
  end
end
