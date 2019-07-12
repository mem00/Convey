# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


mem = User.create(username:"mem", password:"123456")
rob = User.create(username:"rob", password:"123456")
jill = User.create(username:"jill", password:"123456")


chat1 = Chat.create(to_id: rob.id, from_id: mem.id, to_username: rob.username, from_username: mem.username)
chat2 = Chat.create(to_id: mem.id, from_id: jill.id, to_username: mem.username, from_username: jill.username)
chat3 = Chat.create(to_id: jill.id, from_id: rob.id, to_username: jill.username, from_username: rob.username)


message1 = Message.create(content:"hello", chat: chat1, from_username: mem.username)
message2 = Message.create(content:"hey", chat: chat1, from_username: rob.username)
message3 = Message.create(content:"whatsup", chat: chat1, from_username: mem.username)
message4 = Message.create(content:"nm whats up with you", chat: chat1, from_username: rob.username)
message5 = Message.create(content:"hey mem", chat: chat2, from_username: jill.username)
message6 = Message.create(content:"hey jill", chat: chat2, from_username: mem.username)
message7 = Message.create(content:"are you coming to dinner", chat: chat3, from_username: rob.username)
message8 = Message.create(content:"yes i am", chat: chat3, from_username: jill.username)
