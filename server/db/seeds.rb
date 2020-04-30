# Task
[{ id: 1, name: "お風呂", describe: "hoge", user_id: 1, deadline_at: DateTime.tomorrow, completion_at: DateTime.tomorrow, },
 { id: 2, name: "歯磨き", describe: "test", user_id: 1, deadline_at: DateTime.tomorrow, completion_at: DateTime.tomorrow, },
 { id: 3, name: "ゲーム", describe: "huga", user_id: 2, deadline_at: DateTime.now, completion_at: DateTime.now, },
 { id: 4, name: "勉強", describe: "www", user_id: 2, deadline_at: DateTime.now, completion_at: DateTime.tomorrow, }
].each do |attributes|
  Task.find_by(id: attributes[:id]) || Task.create(attributes)
end

# User
[{ id: 1, name: "ジョン", password: "test", last_login_at: DateTime.yesterday, },
 { id: 2, name: "エマ", password: "test", last_login_at: DateTime.now, },
 { id: 3, name: "トム", password: "test", last_login_at: DateTime.now, },
].each do |attributes|
  User.find_by(id: attributes[:id]) || User.create(attributes)
end
